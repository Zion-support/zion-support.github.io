'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Users,
  TrendingUp,
  Target,
  FileText,
  BarChart,
  Eye,
  Mic,
  Database,
  Globe,
  Phone,
  Mail,
  MapPin,
  Activity,
  Lock,
  Smartphone,
  Monitor,
  Server,
  Wifi
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const EdgeComputingSolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'edge-infrastructure',
      name: 'Edge Infrastructure Deployment',
      description: 'Comprehensive edge computing infrastructure deployment with micro data centers and edge servers',
      price: '$12,999/month',
      marketPrice: '$25000-80000/month',
      features: [
        'Micro data center deployment',
        'Edge server configuration',
        'Network connectivity setup',
        'Power and cooling systems',
        'Security implementation',
        'Monitoring and management'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Improve performance by 70%',
        'Lower bandwidth costs by 60%',
        'Enable real-time processing'
      ],
      category: 'Infrastructure',
      popular: true,
      icon: Server
    },
    {
      id: 'edge-ai-processing',
      name: 'Edge AI Processing',
      description: 'Advanced edge AI processing solutions for real-time machine learning and inference at the edge',
      price: '$8,999/month',
      marketPrice: '$15000-50000/month',
      features: [
        'Edge AI model deployment',
        'Real-time inference processing',
        'Model optimization for edge',
        'Distributed AI training',
        'Edge-to-cloud synchronization',
        'AI workload management'
      ],
      benefits: [
        'Enable real-time AI decisions',
        'Reduce cloud processing costs',
        'Improve data privacy',
        'Lower latency for AI applications'
      ],
      category: 'AI Processing',
      popular: true,
      icon: Cpu
    },
    {
      id: 'edge-iot-platform',
      name: 'Edge IoT Platform',
      description: 'Comprehensive edge IoT platform for device management, data processing, and real-time analytics',
      price: '$6,999/month',
      marketPrice: '$12000-40000/month',
      features: [
        'IoT device connectivity',
        'Edge data processing',
        'Real-time analytics',
        'Device management',
        'Data filtering and aggregation',
        'Cloud integration'
      ],
      benefits: [
        'Process data locally',
        'Reduce data transmission costs',
        'Enable real-time insights',
        'Improve device reliability'
      ],
      category: 'IoT Platform',
      popular: true,
      icon: Activity
    },
    {
      id: 'edge-content-delivery',
      name: 'Edge Content Delivery',
      description: 'Advanced edge content delivery network (CDN) for faster content distribution and improved user experience',
      price: '$4,999/month',
      marketPrice: '$8000-25000/month',
      features: [
        'Edge CDN deployment',
        'Content caching optimization',
        'Global content distribution',
        'Video streaming optimization',
        'Dynamic content acceleration',
        'Performance monitoring'
      ],
      benefits: [
        'Improve content delivery speed by 80%',
        'Reduce bandwidth costs by 50%',
        'Enhance user experience',
        'Scale content delivery globally'
      ],
      category: 'Content Delivery',
      popular: false,
      icon: Globe
    },
    {
      id: 'edge-security',
      name: 'Edge Security Solutions',
      description: 'Comprehensive edge security solutions including threat detection, data protection, and access control',
      price: '$7,999/month',
      marketPrice: '$15000-45000/month',
      features: [
        'Edge threat detection',
        'Data encryption at edge',
        'Access control and authentication',
        'Security monitoring',
        'Incident response automation',
        'Compliance management'
      ],
      benefits: [
        'Enhance security at edge',
        'Protect sensitive data',
        'Reduce security risks',
        'Ensure compliance'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'edge-analytics',
      name: 'Edge Analytics Platform',
      description: 'Real-time edge analytics platform for data processing, insights generation, and decision making',
      price: '$5,999/month',
      marketPrice: '$10000-35000/month',
      features: [
        'Real-time data processing',
        'Edge analytics algorithms',
        'Predictive analytics',
        'Anomaly detection',
        'Data visualization',
        'Automated reporting'
      ],
      benefits: [
        'Enable real-time insights',
        'Reduce data processing latency',
        'Improve decision making',
        'Lower cloud processing costs'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'edge-5g-integration',
      name: 'Edge 5G Integration',
      description: 'Edge computing integration with 5G networks for ultra-low latency applications and enhanced connectivity',
      price: '$9,999/month',
      marketPrice: '$20000-60000/month',
      features: [
        '5G edge infrastructure',
        'Ultra-low latency applications',
        'Network slicing optimization',
        'Mobile edge computing',
        '5G core integration',
        'Performance optimization'
      ],
      benefits: [
        'Enable ultra-low latency',
        'Leverage 5G capabilities',
        'Improve application performance',
        'Support new use cases'
      ],
      category: '5G Integration',
      popular: true,
      icon: Wifi
    },
    {
      id: 'edge-hybrid-cloud',
      name: 'Edge Hybrid Cloud',
      description: 'Hybrid cloud-edge architecture for seamless data and application management across edge and cloud environments',
      price: '$11,999/month',
      marketPrice: '$25000-70000/month',
      features: [
        'Hybrid cloud-edge architecture',
        'Data synchronization',
        'Application portability',
        'Workload orchestration',
        'Resource optimization',
        'Unified management'
      ],
      benefits: [
        'Optimize resource utilization',
        'Enable flexible deployment',
        'Improve scalability',
        'Reduce operational complexity'
      ],
      category: 'Hybrid Cloud',
      popular: false,
      icon: Database
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
    { id: 'AI Processing', name: 'AI Processing', count: services.filter(s => s.category === 'AI Processing').length },
    { id: 'IoT Platform', name: 'IoT Platform', count: services.filter(s => s.category === 'IoT Platform').length },
    { id: 'Content Delivery', name: 'Content Delivery', count: services.filter(s => s.category === 'Content Delivery').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: '5G Integration', name: '5G Integration', count: services.filter(s => s.category === '5G Integration').length },
    { id: 'Hybrid Cloud', name: 'Hybrid Cloud', count: services.filter(s => s.category === 'Hybrid Cloud').length }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group | Advanced Edge Computing Technology</title>
        <meta name="description" content="Comprehensive edge computing solutions including infrastructure deployment, AI processing, IoT platforms, and content delivery. Transform your business with cutting-edge edge computing technology." />
        <meta name="keywords" content="edge computing, edge infrastructure, edge AI, edge IoT, edge analytics, edge security, 5G edge, hybrid cloud edge" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 py-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
                ⚡ Trusted by 150+ Organizations
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Edge Computing Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Bring computing power closer to your data and users with cutting-edge edge computing solutions. 
              From AI processing to IoT platforms, we provide comprehensive edge solutions that enable real-time processing and ultra-low latency.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Ultra-Low Latency</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Real-Time Processing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Data Privacy</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Cost Optimization</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  {service.popular && (
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                    <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{service.category}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-green-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-purple-500/20 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Deploy Edge Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 150+ organizations that have already transformed their operations with our edge computing solutions. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free consultation • ✓ Ultra-low latency • ✓ Real-time processing • ✓ 24/7 support</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default EdgeComputingSolutionsPage;