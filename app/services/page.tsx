import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, ArrowRight, Sparkles, Database, Lock, Smartphone, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Micro SAAS Solutions',
      description: '100+ ready-to-use AI-powered applications for immediate deployment',
      icon: Cpu,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      features: ['100+ Ready Apps', 'AI-Powered', 'Instant Deployment', 'No Coding Required'],
      price: 'Starting at $99/month',
      link: '/micro-saas'
    },
    {
      title: 'AI Services',
      description: 'Comprehensive AI solutions including machine learning, NLP, and computer vision',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $2,500/month',
      link: '/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Complete IT infrastructure, cloud migration, and system administration',
      icon: Settings,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: ['Cloud Migration', 'System Admin', 'DevOps', '24/7 Support'],
      price: 'Starting at $1,500/month',
      link: '/it-services'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      icon: Zap,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      features: ['Quantum Algorithms', 'Cryptography', 'Optimization', 'Simulation'],
      price: 'Starting at $15,000/project',
      link: '/quantum-computing'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing, self-optimizing systems that operate independently',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      features: ['Self-Healing', 'Auto-Optimization', 'Predictive Maintenance', 'Zero Downtime'],
      price: 'Starting at $3,500/month',
      link: '/autonomous-systems'
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and data-driven insights for better decision making',
      icon: BarChart,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Data Visualization', 'Custom Dashboards'],
      price: 'Starting at $2,800/month',
      link: '/business-intelligence'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions including smart contracts, DeFi, and NFTs',
      icon: Globe,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      features: ['Smart Contracts', 'DeFi Protocols', 'NFT Marketplaces', 'DAO Development'],
      price: 'Starting at $8,000/project',
      link: '/blockchain-web3'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions for smart environments',
      icon: Smartphone,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      features: ['Sensor Networks', 'Edge Processing', 'Smart Cities', 'Industrial IoT'],
      price: 'Starting at $5,000/project',
      link: '/iot-edge-computing'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      features: ['Threat Detection', 'Zero Trust', 'Penetration Testing', 'Compliance'],
      price: 'Starting at $4,500/month',
      link: '/cybersecurity'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SAAS solutions, quantum computing, autonomous systems, and more." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, quantum computing, autonomous systems, business intelligence, blockchain, IoT, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions to transform your business
              </p>
              <p className="text-lg mb-8 text-blue-200 max-w-4xl mx-auto">
                From micro SAAS applications to quantum computing, we provide cutting-edge technology 
                solutions that drive innovation and growth across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  to="/case-studies"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions across all major technology domains
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-200">
                  <div className={`${service.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for a free consultation and discover how our solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/enterprise"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Enterprise Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;