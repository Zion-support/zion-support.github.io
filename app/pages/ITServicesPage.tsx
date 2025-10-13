import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function ITServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Services - Zion Tech Group",
    "description": "Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation.",
    "url": "https://ziontechgroup.com/it-services"
  };

  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Design, implement, and manage scalable cloud solutions for your business.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Monitoring & Optimization', 'Cost Management'],
      price: 'Starting at $199/month'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and monitoring.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management'],
      price: 'Starting at $399/month'
    },
    {
      icon: CogIcon,
      title: 'System Administration',
      description: 'Manage and maintain your IT infrastructure with expert administration services.',
      features: ['Server Management', 'Network Administration', 'Backup & Recovery', 'Performance Tuning'],
      price: 'Starting at $299/month'
    },
    {
      icon: CpuChipIcon,
      title: 'Digital Transformation',
      description: 'Transform your business processes with modern technology solutions.',
      features: ['Process Automation', 'Legacy System Modernization', 'Workflow Optimization', 'Change Management'],
      price: 'Starting at $499/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEOHead 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT services to keep your business running smoothly and securely. 
              From cloud infrastructure to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to support your business growth and security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">{service.price}</span>
                  <button className="text-green-600 hover:text-green-800 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Let our IT experts help you build a robust, secure, and scalable technology foundation for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-green-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Start Your IT Transformation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-green-600 transition-colors duration-200">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}