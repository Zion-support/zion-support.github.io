'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
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
  Cpu,
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
  Server
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const FiveGImplementationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: '5g-network-design',
      name: '5G Network Design & Planning',
      description: 'Comprehensive 5G network design and planning services for optimal coverage, capacity, and performance',
      price: '$15,999/project',
      marketPrice: '$30000-100000/project',
      features: [
        '5G network architecture design',
        'Coverage and capacity planning',
        'Site selection and optimization',
        'Spectrum analysis and allocation',
        'Interference mitigation',
        'Regulatory compliance planning'
      ],
      benefits: [
        'Optimize network performance by 60%',
        'Reduce deployment costs by 40%',
        'Ensure regulatory compliance',
        'Maximize coverage efficiency'
      ],
      category: 'Network Design',
      popular: true,
      icon: Wifi
    },
    {
      id: '5g-infrastructure-deployment',
      name: '5G Infrastructure Deployment',
      description: 'End-to-end 5G infrastructure deployment including base stations, core network, and edge computing',
      price: '$25,999/project',
      marketPrice: '$50000-200000/project',
      features: [
        '5G base station deployment',
        'Core network implementation',
        'Edge computing infrastructure',
        'Fiber backhaul installation',
        'Power and cooling systems',
        'Network testing and validation'
      ],
      benefits: [
        'Faster deployment by 50%',
        'Lower operational costs by 35%',
        'Improved network reliability',
        'Future-proof infrastructure'
      ],
      category: 'Infrastructure',
      popular: true,
      icon: Server
    },
    {
      id: '5g-security-implementation',
      name: '5G Security Implementation',
      description: 'Comprehensive 5G security solutions including network security, data protection, and threat monitoring',
      price: '$12,999/month',
      marketPrice: '$25000-80000/month',
      features: [
        'Network security architecture',
        'Data encryption and protection',
        'Threat detection and response',
        'Identity and access management',
        'Security monitoring and analytics',
        'Compliance and auditing'
      ],
      benefits: [
        'Enhance security by 80%',
        'Reduce security incidents by 70%',
        'Ensure regulatory compliance',
        'Protect sensitive data'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: '5g-edge-computing',
      name: '5G Edge Computing Solutions',
      description: 'Advanced edge computing implementation for 5G networks with low-latency applications and real-time processing',
      price: '$8,999/month',
      marketPrice: '$15000-50000/month',
      features: [
        'Edge computing infrastructure',
        'Low-latency application deployment',
        'Real-time data processing',
        'Edge AI and ML capabilities',
        'Content delivery optimization',
        'IoT device management'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Improve application performance by 70%',
        'Enable real-time processing',
        'Optimize bandwidth usage'
      ],
      category: 'Edge Computing',
      popular: true,
      icon: Cpu
    },
    {
      id: '5g-iot-integration',
      name: '5G IoT Integration Services',
      description: 'Comprehensive IoT integration services for 5G networks with device management and data analytics',
      price: '$6,999/month',
      marketPrice: '$12000-40000/month',
      features: [
        'IoT device connectivity',
        'Device management platform',
        'Data collection and analytics',
        'Real-time monitoring',
        'Predictive maintenance',
        'Integration with existing systems'
      ],
      benefits: [
        'Connect millions of devices',
        'Enable real-time monitoring',
        'Improve operational efficiency',
        'Reduce maintenance costs'
      ],
      category: 'IoT Integration',
      popular: false,
      icon: Activity
    },
    {
      id: '5g-application-development',
      name: '5G Application Development',
      description: 'Custom 5G application development for enhanced mobile broadband, massive IoT, and ultra-reliable communications',
      price: '$19,999/project',
      marketPrice: '$40000-150000/project',
      features: [
        '5G-native application development',
        'Ultra-reliable low-latency apps',
        'Massive IoT applications',
        'Enhanced mobile broadband',
        'AR/VR applications',
        'Real-time collaboration tools'
      ],
      benefits: [
        'Leverage 5G capabilities',
        'Improve user experience',
        'Enable new use cases',
        'Future-proof applications'
      ],
      category: 'Application Development',
      popular: true,
      icon: Smartphone
    },
    {
      id: '5g-network-optimization',
      name: '5G Network Optimization',
      description: 'Advanced 5G network optimization services for performance tuning, capacity management, and quality assurance',
      price: '$4,999/month',
      marketPrice: '$8000-25000/month',
      features: [
        'Network performance optimization',
        'Capacity planning and management',
        'Quality of service optimization',
        'Interference mitigation',
        'Coverage optimization',
        'Performance monitoring'
      ],
      benefits: [
        'Improve network performance by 50%',
        'Reduce operational costs by 30%',
        'Enhance user experience',
        'Maximize network efficiency'
      ],
      category: 'Optimization',
      popular: false,
      icon: TrendingUp
    },
    {
      id: '5g-testing-validation',
      name: '5G Testing & Validation',
      description: 'Comprehensive 5G testing and validation services including performance testing, security testing, and compliance validation',
      price: '$7,999/month',
      marketPrice: '$15000-45000/month',
      features: [
        'Performance testing and benchmarking',
        'Security vulnerability assessment',
        'Compliance testing and validation',
        'Interoperability testing',
        'Load testing and stress testing',
        'Quality assurance and certification'
      ],
      benefits: [
        'Ensure network reliability',
        'Validate security measures',
        'Meet regulatory requirements',
        'Optimize performance'
      ],
      category: 'Testing',
      popular: true,
      icon: CheckCircle
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Network Design', name: 'Network Design', count: services.filter(s => s.category === 'Network Design').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Edge Computing', name: 'Edge Computing', count: services.filter(s => s.category === 'Edge Computing').length },
    { id: 'IoT Integration', name: 'IoT Integration', count: services.filter(s => s.category === 'IoT Integration').length },
    { id: 'Application Development', name: 'Application Development', count: services.filter(s => s.category === 'Application Development').length },
    { id: 'Optimization', name: 'Optimization', count: services.filter(s => s.category === 'Optimization').length },
    { id: 'Testing', name: 'Testing', count: services.filter(s => s.category === 'Testing').length }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>5G Implementation Services - Zion Tech Group | Advanced 5G Network Solutions</title>
        <meta name="description" content="Comprehensive 5G implementation services including network design, infrastructure deployment, security, edge computing, and IoT integration. Transform your business with cutting-edge 5G technology." />
        <meta name="keywords" content="5G implementation, 5G network design, 5G infrastructure, 5G security, 5G edge computing, 5G IoT, 5G applications, 5G optimization" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 py-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                📡 Trusted by 100+ Telecom Companies
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              5G Implementation Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge 5G technology. From network design to edge computing, 
              we provide comprehensive 5G implementation services that enable ultra-fast connectivity and new possibilities.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Ultra-Fast Speeds</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Low Latency</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Massive IoT Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Future-Proof Technology</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
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
                      ? 'bg-blue-500 text-white'
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
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  {service.popular && (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-blue-400">{service.price}</span>
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
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-slate-800/50 to-blue-900/50 rounded-3xl p-12 border border-blue-500/20 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Deploy 5G Technology?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 100+ telecom companies that have already transformed their networks with our 5G solutions. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free consultation • ✓ Ultra-fast speeds • ✓ Low latency • ✓ 24/7 support</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default FiveGImplementationPage;