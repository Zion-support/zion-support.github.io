import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive technology services including AI solutions, web development, mobile apps, cloud services, and digital transformation.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to automate and optimize your business processes.',
      href: '/services/ai-services',
      icon: '🤖'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies and best practices.',
      href: '/services/web-development',
      icon: '🌐'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      href: '/services/mobile-development',
      icon: '📱'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure solutions to support your growing business needs.',
      href: '/services/cloud-services',
      icon: '☁️'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services including cloud migration, DevOps, and security solutions.',
      href: '/services/it-services',
      icon: '💻'
    },
    {
      title: 'Data Analytics',
      description: 'Advanced data analytics solutions including business intelligence and data visualization.',
      href: '/services/data-analytics',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive technology solutions to help your business grow and succeed in the digital age. 
            From AI-powered automation to cloud infrastructure, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h2>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{service.description}</p>
              <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help transform your business. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}