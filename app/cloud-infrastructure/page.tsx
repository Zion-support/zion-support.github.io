'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Cloud, 
  Server, 
  Shield, 
  Database,
  Globe,
  Zap,
  Settings,
  BarChart3,
  Users,
  Lock,
  Wifi,
  Cpu,
  HardDrive
} from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      name: 'Cloud Migration',
      price: '$299/mo',
      description: 'Seamless migration to cloud infrastructure',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Security Implementation', 'Performance Optimization'],
      icon: <Cloud className="w-8 h-8 text-blue-400" />
    },
    {
      name: 'Multi-Cloud Management',
      price: '$399/mo',
      description: 'Manage multiple cloud providers from one platform',
      features: ['Unified Dashboard', 'Cost Optimization', 'Resource Management', 'Security Monitoring', 'Compliance Management'],
      icon: <Globe className="w-8 h-8 text-green-400" />
    },
    {
      name: 'Cloud Security',
      price: '$499/mo',
      description: 'Comprehensive cloud security solutions',
      features: ['Identity Management', 'Data Encryption', 'Threat Detection', 'Compliance Monitoring', 'Incident Response'],
      icon: <Shield className="w-8 h-8 text-red-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure solutions including migration, management, and security services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Cloud Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud infrastructure services designed for scalability, security, and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-400 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;
