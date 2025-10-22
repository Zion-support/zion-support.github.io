'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { CpuChipIcon, CloudIcon, ShieldCheckIcon, CircleStackIcon, SignalIcon, CogIcon, ChartBarIcon, CurrencyDollarIcon, CheckCircleIcon, StarIcon, ClockIcon, RocketLaunchIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const SolutionsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutionCategories = [
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      icon: CpuChipIcon,
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      gradient: 'from-purple-500 to-pink-500',
      solutions: [
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', status: 'active' },
        { name: 'AI Document Processor', href: '/ai-document-processor', status: 'active' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant', status: 'active' },
        { name: 'AI Fraud Detection', href: '/ai-fraud-detection', status: 'active' },
        { name: 'AI Image Recognition', href: '/ai-image-recognition', status: 'active' },
        { name: 'AI Lead Scoring', href: '/ai-lead-scoring', status: 'active' }
      ]
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      icon: CloudIcon,
      description: 'Scalable and secure cloud infrastructure solutions',
      gradient: 'from-blue-500 to-cyan-500',
      solutions: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', status: 'active' },
        { name: '5G Solutions', href: '/5g-solutions', status: 'active' },
        { name: 'Edge Computing', href: '/edge-computing-solutions', status: 'active' },
        { name: 'Serverless Architecture', href: '/serverless-architecture', status: 'active' },
        { name: 'Container Orchestration', href: '/container-orchestration', status: 'active' }
      ]
    },
    {
      id: 'blockchain-solutions',
      name: 'Blockchain Solutions',
      icon: CircleStackIcon,
      description: 'Decentralized and secure blockchain technologies',
      gradient: 'from-green-500 to-emerald-500',
      solutions: [
        { name: 'Blockchain Solutions', href: '/blockchain-solutions', status: 'active' },
        { name: 'Blockchain Solutions Pro', href: '/blockchain-solutions-pro', status: 'active' },
        { name: 'Smart Contract Development', href: '/smart-contract-development', status: 'coming-soon' },
        { name: 'DeFi Solutions', href: '/defi-solutions', status: 'coming-soon' }
      ]
    },
    {
      id: 'iot-solutions',
      name: 'IoT Solutions',
      icon: SignalIcon,
      description: 'Internet of Things and connected device solutions',
      gradient: 'from-orange-500 to-red-500',
      solutions: [
        { name: 'IoT Solutions', href: '/iot-solutions', status: 'active' },
        { name: 'IoT Solutions Pro', href: '/iot-solutions-pro', status: 'active' },
        { name: 'Smart City Solutions', href: '/smart-city-solutions', status: 'coming-soon' },
        { name: 'Industrial IoT', href: '/industrial-iot', status: 'coming-soon' }
      ]
    },
    {
      id: 'devops-solutions',
      name: 'DevOps Solutions',
      icon: CogIcon,
      description: 'Automation and continuous integration solutions',
      gradient: 'from-indigo-500 to-purple-500',
      solutions: [
        { name: 'DevOps Automation', href: '/devops-automation', status: 'active' },
        { name: 'DevOps Automation Pro', href: '/devops-automation-pro', status: 'active' },
        { name: 'CI/CD Pipeline', href: '/cicd-pipeline', status: 'coming-soon' },
        { name: 'Infrastructure as Code', href: '/infrastructure-as-code', status: 'coming-soon' }
      ]
    },
    {
      id: 'data-solutions',
      name: 'Data Solutions',
      icon: ChartBarIcon,
      description: 'Advanced data analytics and business intelligence',
      gradient: 'from-teal-500 to-cyan-500',
      solutions: [
        { name: 'Data Analytics', href: '/data-analytics', status: 'active' },
        { name: 'Data Engineering', href: '/data-engineering', status: 'active' },
        { name: 'Data Lake Solutions', href: '/data-lake-solutions', status: 'active' },
        { name: 'Business Intelligence', href: '/business-intelligence', status: 'coming-soon' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'beta':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'coming-soon':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Advanced Solutions - AI & IT Solutions | Zion Tech Group"
        description="Explore our comprehensive range of advanced AI solutions, cloud infrastructure, blockchain technologies, and enterprise IT solutions."
        keywords="AI solutions, cloud solutions, blockchain solutions, IoT solutions, DevOps solutions, data solutions"
      />
      
      {/* Enhanced Animated Background */}
      <div className="futuristic-bg"></div>
      <div className="cyber-grid-enhanced"></div>
      <div className="quantum-particles">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="quantum-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      <div className="scan-lines"></div>

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text cyber-glitch" data-text="Advanced Solutions">
              Advanced Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of cutting-edge AI solutions, cloud infrastructure, 
              blockchain technologies, and enterprise IT solutions designed to transform your business.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="glass-card px-6 py-3 text-cyan-400">
                <CheckCircleIcon className="h-5 w-5 inline mr-2" />
                6 Solution Categories
              </div>
              <div className="glass-card px-6 py-3 text-green-400">
                <ClockIcon className="h-5 w-5 inline mr-2" />
                24/7 Support
              </div>
              <div className="glass-card px-6 py-3 text-purple-400">
                <StarIcon className="h-5 w-5 inline mr-2" />
                Enterprise Grade
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Categories */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutionCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={category.id}
                  className={`glass-card p-8 card-hover transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.gradient} p-4 icon-bounce`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{category.solutions.length}</div>
                      <div className="text-sm text-gray-400">Solutions</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>

                  {/* Solutions List */}
                  <div className="space-y-3 mb-6">
                    {category.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                        <Link 
                          to={solution.href}
                          className="flex-1 text-gray-300 hover:text-white transition-colors"
                        >
                          {solution.name}
                        </Link>
                        <div className={`px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(solution.status)}`}>
                          {solution.status.replace('-', ' ').toUpperCase()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <Link 
                    to={`/${category.id}`}
                    className="w-full btn-neon text-center py-3 font-semibold"
                  >
                    Explore {category.name}
                    <ArrowRightIcon className="ml-2 h-4 w-4 inline" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 card-hover">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-6 mx-auto mb-4 icon-bounce">
                  <CpuChipIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI-Powered Solutions</h3>
                <p className="text-gray-400">Revolutionary artificial intelligence that transforms how businesses operate</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  Machine Learning Models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  Natural Language Processing
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  Computer Vision
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  Predictive Analytics
                </li>
              </ul>
              <Link to="/ai-solutions" className="w-full btn-neon text-center py-3 font-semibold">
                Explore AI Solutions
              </Link>
            </div>

            <div className="glass-card p-8 card-hover">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-6 mx-auto mb-4 icon-bounce">
                  <CloudIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-400">Scalable, secure, and reliable cloud solutions for modern businesses</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  Multi-Cloud Strategy
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  Auto-Scaling
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  Disaster Recovery
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  Cost Optimization
                </li>
              </ul>
              <Link to="/cloud-infrastructure" className="w-full btn-neon text-center py-3 font-semibold">
                Explore Cloud Solutions
              </Link>
            </div>

            <div className="glass-card p-8 card-hover">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-6 mx-auto mb-4 icon-bounce">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-400">Comprehensive cybersecurity solutions to protect your business</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  Threat Detection
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  Data Encryption
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  Compliance Management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                  24/7 Monitoring
                </li>
              </ul>
              <Link to="/cybersecurity" className="w-full btn-neon text-center py-3 font-semibold">
                Explore Security Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of companies already using our advanced solutions to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="btn-neon hover-glow focus-neon px-8 py-4 text-lg font-semibold"
              >
                Start Your Project
                <RocketLaunchIcon className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link 
                to="/pricing" 
                className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
              >
                View Pricing
                <CurrencyDollarIcon className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
