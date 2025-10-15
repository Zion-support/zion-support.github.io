import React from 'react';
import SEOHead from '../components/SEOHead';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for automation, analytics, and intelligent decision-making.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/ai-solutions'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure, support, and consulting services for your business needs.',
      features: ['Infrastructure Management', 'Technical Support', 'System Integration', 'IT Consulting'],
      link: '/it-solutions'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving cyber threats.',
      features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Compliance'],
      link: '/cybersecurity'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Monitoring', 'Backup Solutions'],
      link: '/cloud-solutions'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Custom micro SaaS applications tailored to your specific business requirements.',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Maintenance'],
      link: '/micro-saas-solutions'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation 5G technology solutions for enhanced connectivity and performance.',
      features: ['5G Implementation', 'Edge Computing', 'IoT Integration', 'Network Optimization'],
      link: '/5g-solutions'
    }
  ];

  return (
    <>
      <SEOHead
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI solutions, IT services, cybersecurity, cloud infrastructure, and digital transformation services."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.link} 
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get a Quote
              </a>
              <a 
                href="/about" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;