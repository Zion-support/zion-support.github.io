import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';

export default function Home(): JSX.Element {
  // Removed unused state and handlers

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
        <meta name="description" content="Zion App provides cutting-edge technology solutions and services for modern businesses. Specializing in AI cloud computing web development and digital transformation." />
        <meta name="viewport" content="width=device-width initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Advanced Technology
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Transform your business with cutting-edge AI cloud computing and digital solutions. 
                  We deliver innovative technology that drives growth and efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Explore Services
                  </Link>
                  <Link href="/contact" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Zion App?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We combine technical expertise with business acumen to deliver solutions that matter.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Our Clients Say
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Join hundreds of companies that have already revolutionized their operations with our technology solutions.
                </p>
                <button 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                >
                  Start Your Journey Today
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}