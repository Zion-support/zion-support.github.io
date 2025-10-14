import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  SignalIcon,
  CpuChipIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const FiveGSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: SignalIcon,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for maximum performance and coverage.',
      features: ['Network planning', 'Site surveys', 'Equipment installation', 'Performance optimization']
    },
    {
      icon: CpuChipIcon,
      title: 'Edge Computing Solutions',
      description: 'Ultra-low latency edge computing solutions powered by 5G technology for real-time applications.',
      features: ['Edge servers', 'Data processing', 'Real-time analytics', 'IoT integration']
    },
    {
      icon: GlobeAltIcon,
      title: 'IoT & Smart City Solutions',
      description: 'Comprehensive IoT solutions and smart city infrastructure powered by 5G connectivity.',
      features: ['Smart sensors', 'Data analytics', 'Automated systems', 'Urban planning']
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Applications',
      description: 'Next-generation mobile applications leveraging 5G capabilities for enhanced user experiences.',
      features: ['AR/VR apps', 'Real-time streaming', 'Cloud gaming', 'Mobile commerce']
    }
  ];

  const features = [
    'Ultra-fast Connectivity',
    'Low Latency',
    'Massive IoT Support',
    'Edge Computing',
    'Enhanced Mobile Broadband',
    'Network Slicing'
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G solutions from Zion Tech Group including network infrastructure, edge computing, and IoT applications." />
        <meta name="keywords" content="5G solutions, network infrastructure, edge computing, IoT, smart cities, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of 5G technology with our comprehensive solutions for network infrastructure, edge computing, and IoT applications.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-slate-800/30 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">5G Technology Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready for 5G?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our 5G solutions can transform your business and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get 5G Assessment
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;