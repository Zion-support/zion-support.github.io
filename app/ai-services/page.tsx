'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Stethoscope,
  Truck,
  Cpu,
  Rocket,
  Scale,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    // Core AI Services
    {
      id: 1,
      name: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics solutions powered by machine learning and artificial intelligence with real-time insights and predictive modeling',
      icon: BarChart,
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Custom Dashboard Creation',
        'Ad Performance Analysis',
        'ROI Optimization',
        'A/B Testing Automation',
        'Cross-Platform Integration',
        'Natural Language Queries',
        'Automated Reporting'
      ],
      category: 'Analytics',
      popular: true,
      rating: 4.8,
      users: '2,800+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ],
      link: 'https://ziontechgroup.com/ai-analytics-platform'
    },
    {
      id: 2,
      name: 'AI Workflow Automation Suite',
      description: 'Comprehensive business process automation with intelligent decision-making and self-optimizing workflows',
      icon: Zap,
      features: [
        'Visual Process Designer',
        'Smart Workflow Engine',
        'Error Detection & Recovery',
        'Performance Optimization',
        'Integration Hub',
        'Custom Triggers',
        'Analytics Dashboard',
        'Compliance Monitoring'
      ],
      category: 'Automation',
      popular: true,
      rating: 4.9,
      users: '3,200+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        '80% reduction in manual tasks',
        '99.9% workflow reliability',
        'Real-time process monitoring',
        'Intelligent error handling'
      ]
    },
    {
      id: 3,
      name: 'AI Cybersecurity Platform',
      description: 'Next-generation security solutions with AI-powered threat detection, prevention, and response capabilities',
      icon: Shield,
      features: [
        'Advanced Threat Detection',
        'Behavioral Anomaly Analysis',
        'Automated Incident Response',
        'Security Analytics',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Zero Trust Architecture',
        'Threat Intelligence'
      ],
      category: 'Security',
      popular: true,
      rating: 4.7,
      users: '1,500+',
      color: 'from-red-500 to-orange-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        '99.9% threat detection accuracy',
        'Real-time security monitoring',
        'Automated incident response',
        'Compliance automation'
      ]
    },
    {
      id: 4,
      name: 'AI Document Intelligence Suite',
      description: 'Intelligent document processing with advanced OCR, NLP, and automated data extraction capabilities',
      icon: FileText,
      features: [
        'Advanced OCR Processing',
        'Intelligent Data Extraction',
        'Document Classification',
        'Automated Workflows',
        'Multi-language Support',
        'Quality Assurance',
        'Integration APIs',
        'Compliance Tracking'
      ],
      category: 'Document Processing',
      popular: false,
      rating: 4.6,
      users: '1,800+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $149/mo',
      capabilities: [
        '95% accuracy in data extraction',
        '50% faster processing times',
        'Multi-format support',
        'Automated validation'
      ]
    },
    {
      id: 5,
      name: 'AI Customer Experience Platform',
      description: 'Comprehensive customer experience management with AI-powered personalization and engagement optimization',
      icon: Users,
      features: [
        'Customer Journey Mapping',
        'Personalization Engine',
        'Sentiment Analysis',
        'Predictive Customer Behavior',
        'Omnichannel Support',
        'Real-time Recommendations',
        'Customer Segmentation',
        'Engagement Analytics'
      ],
      category: 'Customer Experience',
      popular: true,
      rating: 4.8,
      users: '2,100+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $249/mo',
      capabilities: [
        '40% increase in customer satisfaction',
        '60% improvement in engagement',
        'Real-time personalization',
        'Predictive customer insights'
      ]
    },
    {
      id: 6,
      name: 'AI Content Generation Studio',
      description: 'Advanced content creation platform with AI-powered writing, editing, and optimization capabilities',
      icon: FileText,
      features: [
        'Multi-format Content Creation',
        'SEO Optimization',
        'Brand Voice Training',
        'Content Templates',
        'Plagiarism Detection',
        'Performance Analytics',
        'Multi-language Support',
        'Collaboration Tools'
      ],
      category: 'Content Creation',
      popular: true,
      rating: 4.9,
      users: '3,500+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $179/mo',
      capabilities: [
        '10x faster content creation',
        'SEO-optimized content',
        'Brand consistency',
        'Multi-platform publishing'
      ]
    },
    {
      id: 7,
      name: 'AI Predictive Maintenance',
      description: 'Intelligent maintenance solutions with predictive analytics and automated scheduling for industrial equipment',
      icon: Settings,
      features: [
        'Predictive Analytics',
        'Equipment Monitoring',
        'Automated Scheduling',
        'Failure Prediction',
        'Maintenance Optimization',
        'Cost Analysis',
        'Integration APIs',
        'Reporting Dashboard'
      ],
      category: 'Industrial AI',
      popular: false,
      rating: 4.7,
      users: '900+',
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $499/mo',
      capabilities: [
        '30% reduction in downtime',
        '25% cost savings',
        'Predictive maintenance',
        'Real-time monitoring'
      ]
    },
    {
      id: 8,
      name: 'AI Financial Intelligence',
      description: 'Advanced financial analysis and forecasting with AI-powered risk assessment and investment optimization',
      icon: BarChart,
      features: [
        'Financial Forecasting',
        'Risk Assessment',
        'Investment Analysis',
        'Fraud Detection',
        'Portfolio Optimization',
        'Market Analysis',
        'Compliance Monitoring',
        'Real-time Alerts'
      ],
      category: 'Financial AI',
      popular: true,
      rating: 4.8,
      users: '1,200+',
      color: 'from-emerald-500 to-green-600',
      pricing: 'Starting at $349/mo',
      capabilities: [
        '95% accuracy in predictions',
        'Real-time risk monitoring',
        'Automated compliance',
        'Investment optimization'
      ]
    },
    {
      id: 9,
      name: 'AI Healthcare Diagnostics',
      description: 'Advanced medical AI with diagnostic assistance, treatment recommendations, and patient monitoring capabilities',
      icon: Stethoscope,
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Treatment Recommendations',
        'Patient Monitoring',
        'Drug Interaction Analysis',
        'Clinical Decision Support',
        'Electronic Health Records',
        'Compliance Tracking'
      ],
      category: 'Healthcare AI',
      popular: false,
      rating: 4.9,
      users: '600+',
      color: 'from-teal-500 to-cyan-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        '98% diagnostic accuracy',
        'Faster diagnosis times',
        'Reduced medical errors',
        'Improved patient outcomes'
      ]
    },
    {
      id: 10,
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation',
      icon: Truck,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Logistics Automation',
        'Supplier Management',
        'Quality Control',
        'Cost Optimization',
        'Risk Assessment',
        'Performance Analytics'
      ],
      category: 'Supply Chain',
      popular: false,
      rating: 4.6,
      users: '800+',
      color: 'from-amber-500 to-orange-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        '20% cost reduction',
        '30% inventory optimization',
        'Real-time tracking',
        'Predictive analytics'
      ],
      link: 'https://ziontechgroup.com/ai-supply-chain-optimization'
    },

    // Advanced AI Services
    {
      id: 11,
      name: 'AI Quantum Computing Platform',
      description: 'Revolutionary quantum computing solutions with quantum machine learning, optimization, and cryptography',
      icon: Brain,
      features: [
        'Quantum Machine Learning',
        'Quantum Optimization',
        'Quantum Cryptography',
        'Quantum Simulation',
        'Quantum Error Correction',
        'Hybrid Classical-Quantum',
        'Quantum Cloud Access',
        'Quantum Algorithm Development'
      ],
      category: 'Quantum AI',
      popular: true,
      rating: 4.9,
      users: '50+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $9,999/mo',
      capabilities: [
        'Exponential speedup for complex problems',
        'Quantum advantage in optimization',
        'Unbreakable quantum encryption',
        'Revolutionary problem solving'
      ],
      link: 'https://ziontechgroup.com/ai-quantum-computing'
    },
    {
      id: 12,
      name: 'AI Autonomous Systems Platform',
      description: 'Advanced autonomous systems with self-learning capabilities, real-time adaptation, and intelligent decision making',
      icon: Cpu,
      features: [
        'Self-Learning Algorithms',
        'Real-time Adaptation',
        'Sensor Fusion',
        'Decision Making',
        'Safety Protocols',
        'Performance Optimization',
        'Edge Computing',
        'Autonomous Navigation'
      ],
      category: 'Autonomous Systems',
      popular: true,
      rating: 4.8,
      users: '200+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        'Fully autonomous operation',
        'Self-improving algorithms',
        'Real-time decision making',
        'Zero human intervention'
      ],
      link: 'https://ziontechgroup.com/ai-autonomous-systems'
    },
    {
      id: 13,
      name: 'AI Blockchain Intelligence',
      description: 'Intelligent blockchain solutions with smart contract optimization, DeFi integration, and automated compliance',
      icon: Shield,
      features: [
        'Smart Contract Optimization',
        'DeFi Integration',
        'Automated Compliance',
        'Token Economics',
        'Cross-chain Interoperability',
        'Security Auditing',
        'Decentralized Governance',
        'NFT Intelligence'
      ],
      category: 'Blockchain AI',
      popular: true,
      rating: 4.7,
      users: '300+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        'Automated smart contract deployment',
        'Intelligent DeFi strategies',
        'Cross-chain asset management',
        'Automated compliance monitoring'
      ],
      link: 'https://ziontechgroup.com/ai-blockchain-intelligence'
    },
    {
      id: 14,
      name: 'AI Space Technology Platform',
      description: 'Cutting-edge AI platform for space mission planning, satellite optimization, and space resource management',
      icon: Rocket,
      features: [
        'Mission Planning',
        'Satellite Optimization',
        'Space Resource Mapping',
        'Orbital Mechanics',
        'Space Weather Prediction',
        'Launch Optimization',
        'Space Debris Tracking',
        'Interplanetary Navigation'
      ],
      category: 'Space Tech',
      popular: false,
      rating: 4.9,
      users: '25+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $19,999/mo',
      capabilities: [
        'Autonomous space mission planning',
        'Real-time satellite optimization',
        'Space resource discovery',
        'Interplanetary mission support'
      ],
      link: 'https://ziontechgroup.com/ai-space-technology'
    },
    {
      id: 15,
      name: 'AI Climate Intelligence Platform',
      description: 'Advanced AI system for climate modeling, carbon tracking, and environmental impact optimization',
      icon: Globe,
      features: [
        'Climate Modeling',
        'Carbon Footprint Tracking',
        'Renewable Energy Optimization',
        'Environmental Impact Analysis',
        'Sustainability Reporting',
        'Green Tech Integration',
        'Climate Risk Assessment',
        'Carbon Credit Trading'
      ],
      category: 'Climate AI',
      popular: true,
      rating: 4.8,
      users: '400+',
      color: 'from-teal-500 to-cyan-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        'Accurate climate predictions',
        'Carbon footprint reduction',
        'Renewable energy optimization',
        'Environmental compliance'
      ],
      link: 'https://ziontechgroup.com/ai-climate-intelligence'
    },
    {
      id: 16,
      name: 'AI Drug Discovery Platform',
      description: 'Revolutionary AI platform for pharmaceutical drug discovery with molecular simulation and clinical trial optimization',
      icon: Stethoscope,
      features: [
        'Molecular Simulation',
        'Drug Target Identification',
        'Clinical Trial Design',
        'Side Effect Prediction',
        'Patent Analysis',
        'Regulatory Compliance',
        'Drug Repurposing',
        'Personalized Medicine'
      ],
      category: 'Healthcare AI',
      popular: true,
      rating: 4.9,
      users: '100+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $7,999/mo',
      capabilities: [
        'Faster drug discovery process',
        'Reduced development costs',
        'Higher success rates',
        'Personalized treatment options'
      ],
      link: 'https://ziontechgroup.com/ai-drug-discovery'
    },
    {
      id: 17,
      name: 'AI Financial Crime Detection',
      description: 'Advanced AI system for real-time financial crime detection, fraud prevention, and compliance monitoring',
      icon: Shield,
      features: [
        'Real-time Fraud Detection',
        'Money Laundering Prevention',
        'Transaction Analysis',
        'Risk Scoring',
        'Compliance Monitoring',
        'Regulatory Reporting',
        'Behavioral Analysis',
        'Anomaly Detection'
      ],
      category: 'FinTech AI',
      popular: true,
      rating: 4.8,
      users: '500+',
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $2,499/mo',
      capabilities: [
        '99.9% fraud detection accuracy',
        'Real-time transaction monitoring',
        'Automated compliance reporting',
        'Risk assessment automation'
      ],
      link: 'https://ziontechgroup.com/ai-financial-crime-detection'
    },
    {
      id: 18,
      name: 'AI Agricultural Intelligence',
      description: 'Precision agriculture AI platform with crop monitoring, yield prediction, and sustainable farming optimization',
      icon: Globe,
      features: [
        'Crop Monitoring',
        'Yield Prediction',
        'Soil Analysis',
        'Pest Detection',
        'Irrigation Optimization',
        'Sustainability Tracking',
        'Weather Integration',
        'Farm Management'
      ],
      category: 'AgTech AI',
      popular: true,
      rating: 4.7,
      users: '600+',
      color: 'from-green-500 to-lime-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        '30% increase in crop yields',
        '50% reduction in water usage',
        'Automated pest detection',
        'Sustainable farming practices'
      ],
      link: 'https://ziontechgroup.com/ai-agricultural-intelligence'
    },
    {
      id: 19,
      name: 'AI Energy Grid Management',
      description: 'Smart energy grid management system with real-time optimization, renewable integration, and demand response',
      icon: Zap,
      features: [
        'Grid Optimization',
        'Renewable Integration',
        'Demand Response',
        'Energy Storage',
        'Predictive Maintenance',
        'Carbon Tracking',
        'Smart Metering',
        'Load Balancing'
      ],
      category: 'Energy AI',
      popular: false,
      rating: 4.8,
      users: '150+',
      color: 'from-yellow-500 to-amber-600',
      pricing: 'Starting at $5,999/mo',
      capabilities: [
        '40% improvement in grid efficiency',
        '60% renewable energy integration',
        'Real-time demand response',
        'Predictive maintenance'
      ],
      link: 'https://ziontechgroup.com/ai-energy-grid-management'
    },
    {
      id: 20,
      name: 'AI Legal Research Platform',
      description: 'Advanced AI legal research platform with case analysis, document review, and automated legal insights',
      icon: Scale,
      features: [
        'Legal Research',
        'Document Analysis',
        'Case Law Analysis',
        'Contract Review',
        'Compliance Tracking',
        'Legal Writing',
        'Precedent Analysis',
        'Risk Assessment'
      ],
      category: 'Legal AI',
      popular: true,
      rating: 4.7,
      users: '250+',
      color: 'from-purple-500 to-indigo-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        '90% faster legal research',
        'Automated document review',
        'Case outcome prediction',
        'Compliance monitoring'
      ],
      link: 'https://ziontechgroup.com/ai-legal-research'
    }
  ];

  const categories = ['All', 'Analytics', 'Automation', 'Security', 'Document Processing', 'Customer Experience', 'Content Creation', 'Industrial AI', 'Financial AI', 'Healthcare AI', 'Supply Chain', 'Quantum AI', 'Autonomous Systems', 'Blockchain AI', 'Space Tech', 'Climate AI', 'FinTech AI', 'AgTech AI', 'Energy AI', 'Legal AI'];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px] animate-pulse" />
      </div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-block mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 neon-text">
                AI Services
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of cutting-edge AI-powered solutions
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">15K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400/20">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden ${
                service.popular ? 'ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20' : ''
              }`}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {service.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full flex items-center font-bold shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    )}
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-400">
                    {service.users} users
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400 font-medium">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-lg font-semibold text-cyan-400 mb-2">
                    {service.pricing}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities:</h4>
                  <ul className="space-y-1">
                    {service.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400/50 text-cyan-400 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies already using our revolutionary AI solutions to drive innovation and growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-white text-cyan-600 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/25 inline-flex items-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 (302) 464-0950
            </a>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-200">+1 (302) 464-0950</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-200">kleber@ziontechgroup.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Address</h3>
              <p className="text-gray-200">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;