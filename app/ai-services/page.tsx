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
  Truck
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
      ]
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
      ]
    },
    {
      id: 11,
      name: 'AI Quantum Machine Learning',
      description: 'Next-generation quantum machine learning platform with quantum neural networks and quantum optimization',
      icon: Brain,
      features: [
        'Quantum Neural Networks',
        'Quantum Optimization',
        'Quantum Data Processing',
        'Hybrid Classical-Quantum Models',
        'Quantum Error Correction',
        'Quantum Simulation',
        'Advanced Algorithms',
        'Performance Monitoring'
      ],
      category: 'Quantum AI',
      popular: true,
      rating: 4.9,
      users: '200+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        '1000x faster computation',
        'Quantum advantage in optimization',
        'Breakthrough problem solving',
        'Future-ready technology'
      ]
    },
    {
      id: 12,
      name: 'AI Autonomous Vehicle Systems',
      description: 'Advanced AI systems for autonomous vehicles with real-time decision making and safety optimization',
      icon: Car,
      features: [
        'Real-time Object Detection',
        'Path Planning & Navigation',
        'Collision Avoidance',
        'Traffic Pattern Analysis',
        'Weather Adaptation',
        'Predictive Maintenance',
        'Safety Monitoring',
        'Fleet Management'
      ],
      category: 'Autonomous Systems',
      popular: true,
      rating: 4.8,
      users: '150+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $2,499/mo',
      capabilities: [
        '99.9% safety accuracy',
        'Real-time decision making',
        'Weather-independent operation',
        'Fleet optimization'
      ]
    },
    {
      id: 13,
      name: 'AI Space Technology Platform',
      description: 'AI-powered space technology solutions for satellite management, space exploration, and orbital mechanics',
      icon: Rocket,
      features: [
        'Satellite Constellation Management',
        'Orbital Mechanics Optimization',
        'Space Weather Prediction',
        'Mission Planning',
        'Resource Optimization',
        'Communication Networks',
        'Earth Observation',
        'Space Debris Tracking'
      ],
      category: 'Space Technology',
      popular: false,
      rating: 4.7,
      users: '50+',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        'Precision orbital calculations',
        'Real-time space monitoring',
        'Mission success optimization',
        'Advanced space analytics'
      ]
    },
    {
      id: 14,
      name: 'AI Climate Change Solutions',
      description: 'Comprehensive AI platform for climate monitoring, carbon tracking, and environmental impact assessment',
      icon: Globe,
      features: [
        'Climate Data Analysis',
        'Carbon Footprint Tracking',
        'Environmental Impact Assessment',
        'Renewable Energy Optimization',
        'Emission Prediction',
        'Sustainability Planning',
        'Green Technology Integration',
        'Climate Risk Assessment'
      ],
      category: 'Climate Tech',
      popular: true,
      rating: 4.8,
      users: '300+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        'Real-time climate monitoring',
        'Carbon reduction strategies',
        'Environmental compliance',
        'Sustainability optimization'
      ]
    },
    {
      id: 15,
      name: 'AI Drug Discovery Platform',
      description: 'Advanced AI platform for pharmaceutical research, drug discovery, and molecular analysis',
      icon: Stethoscope,
      features: [
        'Molecular Analysis',
        'Drug Target Identification',
        'Compound Screening',
        'Clinical Trial Optimization',
        'Side Effect Prediction',
        'Drug Interaction Analysis',
        'Personalized Medicine',
        'Regulatory Compliance'
      ],
      category: 'Pharmaceutical AI',
      popular: true,
      rating: 4.9,
      users: '100+',
      color: 'from-teal-500 to-cyan-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '50% faster drug discovery',
        'Reduced development costs',
        'Improved success rates',
        'Personalized treatments'
      ]
    },
    {
      id: 16,
      name: 'AI Financial Crime Detection',
      description: 'Advanced AI system for detecting financial crimes, fraud, and money laundering in real-time',
      icon: Shield,
      features: [
        'Real-time Fraud Detection',
        'Money Laundering Analysis',
        'Transaction Monitoring',
        'Risk Scoring',
        'Pattern Recognition',
        'Compliance Reporting',
        'Alert Management',
        'Investigation Support'
      ],
      category: 'Financial Security',
      popular: true,
      rating: 4.8,
      users: '400+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $1,799/mo',
      capabilities: [
        '99.5% fraud detection accuracy',
        'Real-time monitoring',
        'Regulatory compliance',
        'Cost reduction'
      ]
    },
    {
      id: 17,
      name: 'AI Agricultural Intelligence',
      description: 'Smart farming AI platform with crop monitoring, yield prediction, and precision agriculture',
      icon: Sprout,
      features: [
        'Crop Monitoring',
        'Yield Prediction',
        'Soil Analysis',
        'Weather Integration',
        'Pest Detection',
        'Irrigation Optimization',
        'Harvest Planning',
        'Market Analysis'
      ],
      category: 'AgTech',
      popular: false,
      rating: 4.6,
      users: '250+',
      color: 'from-lime-500 to-green-600',
      pricing: 'Starting at $899/mo',
      capabilities: [
        '30% yield increase',
        'Resource optimization',
        'Predictive farming',
        'Sustainable agriculture'
      ]
    },
    {
      id: 18,
      name: 'AI Energy Grid Management',
      description: 'Intelligent energy grid optimization with demand forecasting and renewable energy integration',
      icon: Zap,
      features: [
        'Grid Optimization',
        'Demand Forecasting',
        'Renewable Integration',
        'Load Balancing',
        'Energy Storage',
        'Fault Detection',
        'Maintenance Scheduling',
        'Cost Optimization'
      ],
      category: 'Energy Tech',
      popular: true,
      rating: 4.7,
      users: '180+',
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $2,199/mo',
      capabilities: [
        '25% energy efficiency',
        'Grid stability improvement',
        'Renewable integration',
        'Cost optimization'
      ]
    },
    {
      id: 19,
      name: 'AI Legal Research Platform',
      description: 'Advanced AI platform for legal research, case analysis, and document review',
      icon: Scale,
      features: [
        'Legal Document Analysis',
        'Case Law Research',
        'Contract Review',
        'Compliance Checking',
        'Precedent Analysis',
        'Legal Writing Assistance',
        'Risk Assessment',
        'Document Automation'
      ],
      category: 'Legal Tech',
      popular: false,
      rating: 4.6,
      users: '120+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $1,499/mo',
      capabilities: [
        '90% time savings',
        'Comprehensive research',
        'Risk mitigation',
        'Document accuracy'
      ]
    },
    {
      id: 20,
      name: 'AI Holographic Interface',
      description: 'Revolutionary holographic AI interface for immersive data visualization and interaction',
      icon: Eye,
      features: [
        '3D Data Visualization',
        'Holographic Displays',
        'Gesture Recognition',
        'Spatial Computing',
        'Immersive Analytics',
        'Collaborative Workspaces',
        'Real-time Rendering',
        'Multi-user Support'
      ],
      category: 'Immersive Tech',
      popular: true,
      rating: 4.8,
      users: '80+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $3,499/mo',
      capabilities: [
        'Immersive data interaction',
        '3D visualization',
        'Collaborative workspaces',
        'Next-gen interface'
      ]
    },
    {
      id: 21,
      name: 'AI Neural Memory Assistant',
      description: 'Advanced AI system that mimics human memory patterns for enhanced learning and recall',
      icon: Brain,
      features: [
        'Memory Pattern Analysis',
        'Learning Optimization',
        'Recall Enhancement',
        'Knowledge Graph Building',
        'Contextual Memory',
        'Learning Acceleration',
        'Memory Consolidation',
        'Adaptive Learning'
      ],
      category: 'Cognitive AI',
      popular: false,
      rating: 4.5,
      users: '90+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $1,199/mo',
      capabilities: [
        'Enhanced learning speed',
        'Improved memory retention',
        'Adaptive learning patterns',
        'Cognitive enhancement'
      ]
    },
    {
      id: 22,
      name: 'AI Quantum Financial Oracle',
      description: 'Quantum-powered financial prediction system with advanced market analysis and trading insights',
      icon: BarChart,
      features: [
        'Quantum Market Analysis',
        'Financial Prediction',
        'Risk Assessment',
        'Portfolio Optimization',
        'Trading Algorithms',
        'Market Sentiment Analysis',
        'Cryptocurrency Analysis',
        'Economic Forecasting'
      ],
      category: 'Quantum Finance',
      popular: true,
      rating: 4.9,
      users: '60+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        'Quantum advantage in finance',
        'Advanced market predictions',
        'Risk optimization',
        'Trading performance'
      ]
    },
    {
      id: 23,
      name: 'AI Fashion Design Studio',
      description: 'AI-powered fashion design platform with trend analysis, pattern generation, and sustainable design',
      icon: Palette,
      features: [
        'Trend Analysis',
        'Pattern Generation',
        'Color Coordination',
        'Sustainable Design',
        'Size Optimization',
        'Fabric Selection',
        'Style Recommendations',
        'Market Analysis'
      ],
      category: 'Fashion Tech',
      popular: false,
      rating: 4.4,
      users: '150+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        'Trend prediction accuracy',
        'Design optimization',
        'Sustainable fashion',
        'Market alignment'
      ]
    },
    {
      id: 24,
      name: 'AI Insurance Risk Assessment',
      description: 'Advanced AI platform for insurance risk evaluation, claims processing, and fraud detection',
      icon: Shield,
      features: [
        'Risk Evaluation',
        'Claims Processing',
        'Fraud Detection',
        'Policy Optimization',
        'Underwriting Support',
        'Customer Profiling',
        'Pricing Models',
        'Compliance Monitoring'
      ],
      category: 'InsurTech',
      popular: true,
      rating: 4.7,
      users: '200+',
      color: 'from-blue-500 to-indigo-600',
      pricing: 'Starting at $1,399/mo',
      capabilities: [
        'Accurate risk assessment',
        'Faster claims processing',
        'Fraud reduction',
        'Cost optimization'
      ]
    },
    {
      id: 25,
      name: 'AI Manufacturing Intelligence',
      description: 'Comprehensive AI platform for manufacturing optimization, quality control, and predictive maintenance',
      icon: Settings,
      features: [
        'Production Optimization',
        'Quality Control',
        'Predictive Maintenance',
        'Supply Chain Integration',
        'Energy Management',
        'Safety Monitoring',
        'Performance Analytics',
        'Automation Control'
      ],
      category: 'Manufacturing AI',
      popular: true,
      rating: 4.8,
      users: '300+',
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $1,599/mo',
      capabilities: [
        '25% production increase',
        'Quality improvement',
        'Predictive maintenance',
        'Cost reduction'
      ]
    }
  ];

  const categories = ['All', 'Analytics', 'Automation', 'Security', 'Document Processing', 'Customer Experience', 'Content Creation', 'Industrial AI', 'Financial AI', 'Healthcare AI', 'Supply Chain', 'Quantum AI', 'Autonomous Systems', 'Space Technology', 'Climate Tech', 'Pharmaceutical AI', 'Financial Security', 'AgTech', 'Energy Tech', 'Legal Tech', 'Immersive Tech', 'Cognitive AI', 'Quantum Finance', 'Fashion Tech', 'InsurTech', 'Manufacturing AI'];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered solutions
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
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

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-400">
                  {service.users} users
                </div>
                <div className="text-sm text-gray-400">
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

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of companies already using our AI solutions
          </p>
          <button className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;