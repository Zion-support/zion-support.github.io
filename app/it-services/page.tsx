'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  Search,
  CheckCircle,
  Server,
  Network,
  Lock,
  Code,
  BarChart3,
  Users,
  Headphones,
  Monitor,
  HardDrive,
  Wifi,
  Smartphone as Mobile,
  Laptop,
  Printer,
  Router
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const ItServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [

description: 'Custom web applications, e-commerce platforms, and enterprise solutions',
      price: '$5,000 - $100,000',
      features: ['Custom web apps', 'E-commerce platforms', 'API development', 'Performance optimization']
    },
    { 
      name: 'Process Automation', 
      href: '/process-automation', 
      icon: Zap, 
      description: 'Workflow automation, RPA implementation, and business process optimization',
      price: '$2,000 - $25,000',
      features: ['RPA implementation', 'Workflow automation', 'API integrations', 'Process optimization']
    },
    { 
      name: 'Network Infrastructure', 
      href: '/network-infrastructure', 
      icon: Globe, 
      description: 'Network design, implementation, and optimization for enterprise environments',
      price: '$3,000 - $35,000',
      features: ['Network design', 'Wireless solutions', 'VPN setup', 'Network security']
    },
    { 
      name: 'Disaster Recovery & Backup', 
      href: '/disaster-recovery', 
      icon: Shield, 
      description: 'Comprehensive backup solutions and disaster recovery planning',
      price: '$1,000 - $15,000',
      features: ['Backup solutions', 'Disaster recovery planning', 'Business continuity', 'Testing & validation']
    }
  ];

  const categories = ['all', 'Cloud', 'Security', 'DevOps', 'Database', 'Infrastructure', 'Support', 'Development', 'Analytics', 'Networking', 'Consulting', 'Automation'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: <Server className="w-8 h-8 text-cyan-500" />, value: '500+', label: 'Servers Managed' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Security Uptime' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '200+', label: 'Clients Served' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' }
  ];
  return (
<React.Fragment>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and more. Expert IT support and consulting for modern businesses." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, database management, web development" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we deliver enterprise-grade technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
<section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}

                  </div>
<div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>,
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-6c09
=======
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group hover:bg-slate-800/70"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="text-cyan-400 font-semibold text-lg">{service.price}</div>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
</div>
    </React.Fragment>
  );
};
export default ItServicesPage;
