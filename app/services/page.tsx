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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
