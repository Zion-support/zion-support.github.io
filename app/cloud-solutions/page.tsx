import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CloudIcon, 
  ServerIcon, 
  CpuChipIcon, 
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const CloudSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced performance.',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Hybrid Cloud Setup']
    },
    {
      icon: ServerIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure designed for your business needs.',
      features: ['Auto-scaling', 'Load Balancing', 'High Availability', 'Disaster Recovery']
    },
    {
      icon: CpuChipIcon,
      title: 'Cloud Optimization',
      description: 'Optimize your cloud resources for maximum performance and cost efficiency.',
      features: ['Cost Optimization', 'Performance Tuning', 'Resource Monitoring', 'Capacity Planning']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud environment.',
      features: ['Identity Management', 'Data Encryption', 'Network Security', 'Compliance']
    }
  ];

  const platforms = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform',
    'IBM Cloud',
    'Oracle Cloud',
    'Alibaba Cloud'
  ];

  return (
    <>
      <SEOHead
        title="Cloud Solutions - Zion Tech Group"
        description="Comprehensive cloud solutions including migration, infrastructure, optimization, and security services for modern businesses."
        keywords="cloud solutions, cloud migration, AWS, Azure, Google Cloud, cloud infrastructure, cloud security, cloud optimization"
        canonicalUrl="https://ziontechgroup.com/cloud-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Cloud Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with scalable, secure, and cost-effective cloud solutions. We help you migrate, optimize, and manage your cloud infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Get Cloud Assessment
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="text-blue-400">Cloud Services</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud solutions designed to accelerate your digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Supported <span className="text-blue-400">Cloud Platforms</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to give you the best solution for your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition-all duration-300">
                  <div className="text-lg font-semibold text-white mb-2">{platform}</div>
                  <div className="text-sm text-gray-400">Full Support & Migration</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let our cloud experts help you design and implement the perfect cloud solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Cloud Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudSolutionsPage;