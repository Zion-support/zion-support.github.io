'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Signal, 
  Wifi, 
  Cpu, 
  Globe,
  Shield,
  Zap,
  Database,
  Cloud,
  Smartphone,
  Settings,
  BarChart3,
  Users,
  Lock,
  TrendingUp
} from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const services = [
    {
      name: '5G Network Infrastructure',
      price: '$999/mo',
      description: 'Complete 5G network deployment and management',
      features: ['5G Core Network', 'RAN Deployment', 'Network Slicing', 'Edge Computing', 'IoT Integration'],
      icon: <Signal className="w-8 h-8 text-blue-400" />
    },
    {
      name: '5G IoT Solutions',
      price: '$599/mo',
      description: '5G-powered IoT connectivity and management',
      features: ['Massive IoT', 'Ultra-Reliable Communication', 'Low Latency', 'Device Management', 'Data Analytics'],
      icon: <Wifi className="w-8 h-8 text-green-400" />
    },
    {
      name: '5G Edge Computing',
      price: '$799/mo',
      description: 'Edge computing solutions for 5G networks',
      features: ['Multi-Access Edge Computing', 'Edge AI', 'Real-time Processing', 'Low Latency', 'Distributed Computing'],
      icon: <Cpu className="w-8 h-8 text-purple-400" />
    }
  ];

  const features = [
    'Ultra-Low Latency',
    'High-Speed Connectivity',
    'Massive Device Support',
    'Network Slicing',
    'Edge Computing',
    'AI Integration',
    'Security & Privacy',
    'Scalable Architecture'
  ];

  const technologies = [
    '5G NR', 'Network Slicing', 'Edge Computing', 'IoT Protocols', 
    'AI/ML Integration', 'Cloud-Native', 'SDN/NFV', 'MEC'
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive 5G solutions including network infrastructure, IoT connectivity, and edge computing services."
        />
        <meta name="keywords" content="5G solutions, 5G network, IoT, edge computing, network infrastructure, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                5G Solutions
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {' '}That Connect
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with our comprehensive 5G solutions including network infrastructure, 
                IoT connectivity, and edge computing services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
                >
                  Schedule Demo
                  <Settings className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our 5G Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of 5G solutions designed to accelerate your digital transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">
                  <div className="mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-white mb-4 mt-4">{service.name}</h3>
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
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our 5G Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G solutions are designed with cutting-edge technology and industry expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors group">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest 5G technologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-700/50 text-gray-300 px-6 py-3 rounded-full hover:bg-slate-600/50 transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Embrace 5G?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive 5G solutions. Get started today and experience the future of connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
