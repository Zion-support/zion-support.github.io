import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to transform your business operations and drive innovation.",
      icon: "🤖",
      color: "blue" as const
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions tailored to your specific business requirements.",
      icon: "☁️",
      color: "green" as const
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and systems.",
      icon: "🚀",
      color: "purple" as const
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring to ensure your systems run smoothly.",
      icon: "🛡️",
      color: "blue" as const
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Solutions - AI-Powered Business Solutions</title>
        <meta name="description" content="Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Zion Tech Solutions - AI-Powered Business Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Solutions - AI-Powered Business Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Zion Tech Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI-powered solutions, cloud infrastructure, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/dashboard" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Dashboard
                </Link>
                <Link 
                  href="/services" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-blue-600"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver innovative technology solutions that drive business growth and operational excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 delay-${index * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with our comprehensive suite of AI-powered solutions and cloud services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/portfolio" 
                className="bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 border-2 border-white font-semibold"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">
                Don&apos;t just take our word for it - hear from our satisfied clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">&quot;Zion Tech transformed our business with their AI solutions. Highly recommended!&quot;</p>
                <div className="font-semibold text-gray-900">- Sarah Johnson, CEO</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">&quot;Outstanding cloud migration service. Professional and efficient team.&quot;</p>
                <div className="font-semibold text-gray-900">- Michael Chen, CTO</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">&quot;Excellent support and innovative solutions. Great partnership!&quot;</p>
                <div className="font-semibold text-gray-900">- Emily Rodriguez, Director</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}