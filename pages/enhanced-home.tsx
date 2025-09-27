import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const handleSelectPlan = (tierId: string) => {
    trackClick(`select-plan-${tierId}`, 'conversion');
    console.log('Selected plan:', tierId);
  };

  const handleReadMore = (slug: string) => {
    trackClick(`read-blog-${slug}`, 'engagement');
    console.log('Read more:', slug);
  };

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate and optimize your business processes.',
      icon: '🤖'
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructure to support your growing business needs.',
      icon: '☁️'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your operations and improve efficiency.',
      icon: '🚀'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion App transformed our entire digital infrastructure. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Innovation Labs',
      content: 'Outstanding service and support. The team delivered exactly what we needed when we needed it.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'Future Systems',
      content: 'Professional, reliable, and innovative. Highly recommend their services to any business.',
      rating: 5
    }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>Zion App - Advanced Technology Solutions</title>
        <meta name="description" content="Zion App provides cutting-edge technology solutions and services for modern businesses. Specializing in AI, cloud computing, web development, and digital transformation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
          {/* Hero Section */}
          <header className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Zion App
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Advanced Technology Solutions for Modern Businesses
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => trackClick('hero-cta-primary', 'conversion')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <button 
                onClick={() => trackClick('hero-cta-secondary', 'engagement')}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Learn More
              </button>
            </div>
          </header>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join hundreds of companies that have already revolutionized their operations with our technology solutions.
              </p>
              <button 
                onClick={() => trackClick('final-cta', 'conversion')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your Journey Today
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}