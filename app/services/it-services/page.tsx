import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and digital transformation solutions.',
  keywords: 'IT services, cloud migration, cybersecurity, infrastructure, digital transformation, IT consulting'
};

interface ITServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: string;
  href: string;
}

function ITService({ title, description, price, features, benefits, icon, href }: ITServiceProps) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <div className="space-y-2 mb-4">
        <h4 className="font-semibold text-gray-900">Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-gray-900">Benefits:</h4>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default function ITServicesPage() {
  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime.',
      price: 'From $2,999/month',
      features: ['AWS/Azure/GCP migration', 'Data migration', 'Application modernization', 'Performance optimization'],
      benefits: ['Reduced costs', 'Improved scalability', 'Enhanced security', 'Better performance'],
      icon: '☁️',
      href: '/contact'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      price: 'From $1,999/month',
      features: ['Security assessment', 'Penetration testing', 'Incident response', 'Compliance management'],
      benefits: ['Enhanced security', 'Compliance assurance', 'Risk reduction', 'Peace of mind'],
      icon: '🔒',
      href: '/contact'
    },
    {
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure management and monitoring.',
      price: 'From $3,999/month',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization', 'Disaster recovery'],
      benefits: ['Reduced downtime', 'Improved reliability', 'Cost savings', 'Expert support'],
      icon: '🖥️',
      href: '/contact'
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with modern digital solutions.',
      price: 'From $4,999/month',
      features: ['Process automation', 'Digital workflows', 'Integration services', 'Change management'],
      benefits: ['Increased efficiency', 'Better customer experience', 'Competitive advantage', 'Future-ready'],
      icon: '🚀',
      href: '/contact'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology investments.',
      price: 'From $299/hour',
      features: ['Technology assessment', 'Strategic planning', 'Vendor evaluation', 'Implementation guidance'],
      benefits: ['Informed decisions', 'Cost optimization', 'Risk mitigation', 'Strategic alignment'],
      icon: '💡',
      href: '/contact'
    },
    {
      title: 'Support & Maintenance',
      description: 'Comprehensive IT support and maintenance services.',
      price: 'From $1,499/month',
      features: ['Help desk support', 'System maintenance', 'Software updates', 'Hardware support'],
      benefits: ['Reduced downtime', 'Proactive support', 'Cost predictability', 'Expert assistance'],
      icon: '🛠️',
      href: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, 
              and digital transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 backdrop-blur-sm"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive IT solutions to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ITService key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT services can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}