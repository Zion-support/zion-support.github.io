import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Services() {
  const services = [
    {
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions",
      href: "/ai-services",
      icon: "🧠"
    },
    {
      title: "IT Services", 
      description: "Comprehensive information technology services",
      href: "/it-services",
      icon: "💻"
    },
    {
      title: "Micro SaaS",
      description: "Scalable software as a service solutions",
      href: "/micro-saas",
      icon: "☁️"
    }
  ];

  return (
    <Layout
      title="Services - Zion Tech Group"
      description="Comprehensive technology services including AI, IT solutions, and micro SaaS applications."
      keywords="services, AI services, IT services, micro SaaS, technology solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started Today
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                We provide comprehensive technology solutions to help your business succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    href={service.href}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block text-center"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our expert team to discuss your technology needs and find the perfect solution.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}