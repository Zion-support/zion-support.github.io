import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const CloudSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & planning', 'Data migration', 'Application modernization', 'Performance optimization']
    },
    {
      icon: ServerIcon,
      title: 'Infrastructure Management',
      description: 'Complete management of your cloud infrastructure with 24/7 monitoring and support.',
      features: ['Server provisioning', 'Load balancing', 'Auto-scaling', 'Backup & recovery']
    },
    {
      icon: CpuChipIcon,
      title: 'Container Solutions',
      description: 'Docker and Kubernetes solutions for modern application deployment and management.',
      features: ['Container orchestration', 'Microservices architecture', 'CI/CD pipelines', 'Service mesh']
    },
    {
      icon: ChartBarIcon,
      title: 'Cloud Analytics',
      description: 'Advanced analytics and monitoring solutions for your cloud infrastructure and applications.',
      features: ['Performance monitoring', 'Cost optimization', 'Security analytics', 'Predictive insights']
    }
  ];

  const platforms = [
    { name: 'Amazon Web Services (AWS)', logo: 'AWS' },
    { name: 'Microsoft Azure', logo: 'Azure' },
    { name: 'Google Cloud Platform', logo: 'GCP' },
    { name: 'IBM Cloud', logo: 'IBM' },
    { name: 'Oracle Cloud', logo: 'Oracle' },
    { name: 'DigitalOcean', logo: 'DO' }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including migration, infrastructure management, container solutions, and cloud analytics." />
        <meta name="keywords" content="cloud solutions, cloud migration, AWS, Azure, GCP, container orchestration, cloud analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cloud <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with comprehensive cloud solutions. From migration to management, 
              we help you leverage the power of cloud computing.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Cloud Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Cloud Platforms We Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{platform.logo}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Cloud Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Optimization</h3>
                <p className="text-gray-300">Reduce cloud costs by up to 40% with our optimization strategies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ServerIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">High Availability</h3>
                <p className="text-gray-300">99.9% uptime guarantee with redundant infrastructure</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Auto-Scaling</h3>
                <p className="text-gray-300">Automatic scaling based on demand and performance metrics</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Move to the Cloud?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your cloud strategy and create a solution that drives efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudSolutionsPage;