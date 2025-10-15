import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Server,
  Cloud,
  Code,
  Network,
  Settings,
  Shield,
  Database,
  Smartphone,
  Monitor,
  Wifi
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Server Management',
      description: 'Comprehensive server setup, maintenance, and optimization services.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Solutions',
      description: 'Cloud migration, management, and optimization for scalable infrastructure.'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business requirements.'
    },
    {
      icon: <Network className="w-8 h-8 text-purple-500" />,
      title: 'Network Security',
      description: 'Advanced network security solutions to protect your digital assets.'
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: 'System Administration',
      description: 'Complete system administration and maintenance services.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions to safeguard your business.'
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance services.'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'Mobile Solutions',
      description: 'Mobile app development and mobile-first solutions.'
    },
    {
      icon: <Monitor className="w-8 h-8 text-teal-500" />,
      title: 'IT Support',
      description: '24/7 IT support and helpdesk services for your organization.'
    },
    {
      icon: <Wifi className="w-8 h-8 text-yellow-500" />,
      title: 'Network Infrastructure',
      description: 'Complete network infrastructure design and implementation.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including server management, cloud solutions, cybersecurity, and more." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to optimize your business operations 
              and drive digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our experienced team of IT professionals provides comprehensive solutions 
              that are scalable, secure, and designed to meet your specific business needs. 
              We combine cutting-edge technology with proven methodologies to deliver 
              exceptional results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;