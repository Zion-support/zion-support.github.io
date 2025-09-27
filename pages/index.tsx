import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

// Lazy load heavy components
// const PerformanceTracker = dynamic(() => import('../src/components/PerformanceTracker'), {
//   loading: () => <div className="h-64 w-full bg-gray-200 rounded animate-pulse" />
// });

const Home = React.memo(function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });

  useEffect(() => {
    setIsVisible(true);
    setIsLoading(false);
    
    // Performance monitoring
    if (typeof window !== 'undefined') {
      // Track Core Web Vitals
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);

  const { trackClick } = useAnalytics();

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to automate processes and gain insights.",
      icon: "🤖",
      color: "blue",
      delay: 0.1
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions tailored to your business needs.",
      icon: "☁️",
      color: "purple",
      delay: 0.2
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with the latest technologies.",
      icon: "🌐",
      color: "green",
      delay: 0.3
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring to ensure your systems run smoothly.",
      icon: "🛡️",
      color: "blue",
      delay: 0.4
    }
  ];

  return (
    <>
      <SEO 
        title="Zion App - Advanced Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud computing, and digital innovation. We build the future, today."
        keywords="AI, cloud computing, web development, digital transformation, technology solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Hero Section */}
        <div ref={heroRef} className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center">
              <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Advanced Technology
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transform your business with cutting-edge AI, cloud computing, and digital innovation. 
                We build the future, today.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                  onClick={() => trackClick('hero-cta-contact', 'conversion')}
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/services" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-blue-600"
                  onClick={() => trackClick('hero-cta-services', 'navigation')}
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div ref={featuresRef} className="relative z-10 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion App?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-500 ${
                    isFeaturesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{transitionDelay: `${feature.delay}s`}}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join hundreds of companies that have already transformed their operations with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                  onClick={() => trackClick('cta-contact', 'conversion')}
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  onClick={() => trackClick('cta-about', 'navigation')}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Home;