'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Globe, 
  Shield, 
  Zap, 
  Server, 
  Wifi, 
  Lock, 
  Activity, 
  CheckCircle, 
  ArrowRight,
  Users,
  Cloud,
  Database,
  Smartphone,
  Monitor,
  Cpu,
  Network
} from 'lucide-react';

const NetworkSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Network Infrastructure',
      description: 'Worldwide network deployment and management with 99.9% uptime guarantee'
    },
    {
      icon: Shield,
      title: 'Advanced Security Protocols',
      description: 'Multi-layered security with encryption, firewalls, and threat detection'
    },
    {
      icon: Zap,
      title: 'High-Speed Connectivity',
      description: 'Ultra-fast data transmission with low latency and high bandwidth'
    },
    {
      icon: Server,
      title: 'Scalable Architecture',
      description: 'Flexible network design that grows with your business needs'
    },
    {
      icon: Wifi,
      title: 'Wireless Solutions',
      description: 'Advanced WiFi 6/7 implementation for seamless connectivity'
    },
    {
      icon: Lock,
      title: 'Secure VPN Access',
      description: 'Enterprise-grade VPN solutions for remote and hybrid work'
    }
  ];

  const services = [
    {
      title: 'Network Design & Planning',
      description: 'Custom network architecture tailored to your specific requirements',
      features: ['Network topology design', 'Capacity planning', 'Redundancy strategies', 'Performance optimization']
    },
    {
      title: 'Infrastructure Deployment',
      description: 'Complete network infrastructure setup and configuration',
      features: ['Hardware installation', 'Software configuration', 'Network testing', 'Documentation']
    },
    {
      title: 'Security Implementation',
      description: 'Comprehensive security measures to protect your network',
      features: ['Firewall configuration', 'Intrusion detection', 'Access control', 'Security monitoring']
    },
    {
      title: 'Performance Monitoring',
      description: '24/7 network monitoring and optimization services',
      features: ['Real-time monitoring', 'Performance analytics', 'Proactive maintenance', 'Issue resolution']
    }
  ];

  const technologies = [
    { name: 'Cisco', category: 'Networking Hardware' },
    { name: 'Juniper', category: 'Network Equipment' },
    { name: 'Fortinet', category: 'Security Solutions' },
    { name: 'Palo Alto', category: 'Firewall Technology' },
    { name: 'Aruba', category: 'Wireless Solutions' },
    { name: 'VMware', category: 'Network Virtualization' },
    { name: 'SD-WAN', category: 'Software-Defined Networking' },
    { name: '5G', category: 'Next-Gen Connectivity' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Network Solutions - Advanced Networking Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Transform your network infrastructure with our AI-powered networking solutions. Advanced security, high-speed connectivity, and scalable architecture for modern businesses." />
        <meta name="keywords" content="network solutions, networking infrastructure, network security, SD-WAN, wireless solutions, network monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-network-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Network className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Network Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your network infrastructure with intelligent, secure, and scalable networking solutions powered by advanced AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Network Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Network Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered network solutions provide intelligent automation, enhanced security, and optimal performance for your business infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Network Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From design to deployment and ongoing management, we provide end-to-end network solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technology Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading technology providers to deliver cutting-edge network solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                    <p className="text-sm text-gray-400">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Network?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI-powered network solutions optimize your infrastructure for maximum performance and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Your Network Assessment
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NetworkSolutionsPage;