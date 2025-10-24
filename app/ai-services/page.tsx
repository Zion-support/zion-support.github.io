<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Helmet } from 'react-helmet-async';
export default function AIServices() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Services - Zion Tech Group</title>
        <meta name="description" content="Ai Services solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Services</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai services solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
=======
import {
import {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  Brain,
  MessageSquare,
  Eye,
  Zap,
  BarChart,
  Box,
  Mic,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
<<<<<<< HEAD
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Cpu,
  Server
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiServicesPage: React.FC = () => {
  const serviceType = 'ai'
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
=======
  Award,
  Stethoscope,
  Truck,
Rocket;
} from 'lucide-react';

const AIServicesPage: React.FC = () => {}
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {}
    setIsLoaded(true);
  }, []);
const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    // Core AI Services
    {}
      id: 1,
      name: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics solutions powered by machine learning and artificial intelligence with real-time insights and predictive modeling',
      icon: BarChart,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        '24/7 availability',
        'Custom integrations',
        'Analytics dashboard'
      ],
      category: 'automation',
      icon: MessageSquare,
      popular: true
    },
    {
      id: 'ai-analytics',
      name: 'AI Business Analytics',
      description: 'Intelligent data analysis and predictive insights for better decision making',
      price: '$499/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Predictive analytics',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        'Data visualization',
        'Trend analysis'
      ],
      category: 'analytics',
      icon: BarChart,
      popular: true
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email campaigns',
        'SEO optimization',
        'Brand voice consistency',
        'Content calendar'
      ],
      category: 'content',
      icon: FileText,
      popular: false
    },
    {
      id: 'ai-customer-service',
      name: 'AI Customer Service',
      description: 'Intelligent customer support with automated ticket routing and resolution',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Automated ticket routing',
        'Smart response suggestions',
        'Customer sentiment analysis',
        'Knowledge base integration',
        'Multi-channel support',
        'Performance analytics'
      ],
<<<<<<< HEAD
      category: 'automation',
=======
      benefits: [
        'Increase open rates by 50%',
        'Boost click-through rates by 35%',
        'Reduce unsubscribe rates',
        'Save 15+ hours per week'
      ],
      useCases: [
        'Newsletter campaigns',
        'Product promotions',
        'Customer retention',
        'Lead nurturing'
      ],
      testimonials: [
        {
          name: 'Lisa Wang',
          company: 'MarketingPro',
          quote: 'Our email engagement rates doubled with AI optimization.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      icon: Target,
      price: '$349/month',
      description: 'Intelligent sales automation platform that identifies leads, nurtures prospects, and closes deals automatically.',
      features: [
        'Lead scoring',
        'Prospect identification',
        'Follow-up automation',
        'Pipeline management',
        'Sales forecasting',
        'CRM integration'
      ],
      benefits: [
        'Increase sales by 40%',
        'Reduce sales cycle by 30%',
        'Improve lead quality',
        'Automate follow-ups'
      ],
      useCases: [
        'B2B sales',
        'Lead generation',
        'Customer acquisition',
        'Sales pipeline management'
      ],
      testimonials: [
        {
          name: 'Robert Taylor',
          company: 'SalesForce Pro',
          quote: 'AI helped us close 60% more deals with less effort.',
          rating: 5
        }
  const services = [
    // Core AI Services;
    {
      id: 1;
      name: 'AI-Powered Analytics Platform'
      description: 'Advanced analytics solutions powered by machine learning and artificial intelligence with real-time insights and predictive modeling'
      icon: BarChart;
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
      popular: true;
      rating: 4.8;
      users: '2,800+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ],
      link: 'https://ziontechgroup.com/ai-analytics-platform'},
    {}
      id: 11,
      name: 'AI Quantum Computing Platform',
      description: 'Revolutionary quantum computing solutions for complex optimization problems, cryptography, and scientific simulations',
      icon: Brain;
      features: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Cryptographic Security',
        'Optimization Problems',
        'Quantum Simulation',
        'Hybrid Classical-Quantum Computing',
        'Quantum Error Correction',
        'Quantum Cloud Access'
      ],
      category: 'Quantum Computing'
      popular: true;
      rating: 4.9;
      users: '150+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        '1000x faster optimization',
        'Unbreakable encryption',
        'Quantum advantage in ML',
        'Scientific breakthrough potential'
      ]
    },
    {}
      id: 12,
      name: 'AI Neural Memory Assistant',
      description: 'Advanced AI system with persistent memory and contextual understanding for personalized assistance',
      icon: Brain,
      features: [
        'Persistent Memory Storage',
        'Contextual Understanding',
        'Personalized Responses',
        'Learning from Interactions',
        'Multi-modal Memory',
        'Emotional Intelligence',
        'Long-term Relationship Building',
        'Adaptive Personality'
      ],
      category: 'Advanced AI',
      popular: true;
      rating: 4.8;
      users: '1,200+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        'Personalized AI experience',
        'Context-aware responses',
        'Emotional intelligence',
        'Long-term memory retention'
      ]
    },
    {}
      id: 13,
      name: 'AI Holographic Workspace',
      description: 'Immersive 3 D workspace with AI-powered collaboration tools and virtual reality integration',
      icon: Globe,
      features: [
        '3D Holographic Interface',
        'Virtual Collaboration',
        'AI-Powered Gestures',
        'Spatial Computing',
        'Mixed Reality Integration',
        'Real-time Translation',
        'Virtual Whiteboarding',
        'Immersive Presentations'
      ],
      category: 'Immersive Technology'
      popular: false;
      rating: 4.7;
      users: '400+',
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        'Immersive collaboration',
        '3 D data visualization',
        'Virtual presence',
        'Next-gen workspace'
      ]
    },
    {}
      id: 14,
      name: 'AI Climate Solutions Pro',
      description: 'AI-powered climate monitoring, carbon footprint tracking, and environmental impact optimization',
      icon: Globe;
      features: [
        'Carbon Footprint Analysis',
        'Climate Risk Assessment',
        'Sustainability Optimization',
        'Environmental Monitoring',
        'Green Energy Management',
        'Waste Reduction AI',
        'Eco-friendly Recommendations',
        'Climate Action Planning'
      ],
      category: 'Climate Tech'
      popular: true;
      rating: 4.9;
      users: '800+'
      color: 'from-green-500 to-emerald-600'
      pricing: 'Starting at $499/mo',
      capabilities: [
        '50% carbon footprint reduction',
        'Real-time environmental monitoring',
        'Sustainability optimization',
        'Climate risk mitigation'
      ]
    },
    {}
      id: 15,
      name: 'AI Drug Discovery Pro',
      description: 'Advanced AI platform for pharmaceutical research, drug discovery, and molecular analysis',
      icon: Stethoscope;
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
      category: 'Pharmaceutical AI'
      popular: false;
      rating: 4.9;
      users: '200+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '10x faster drug discovery',
        '95% accuracy in predictions',
        'Reduced clinical trial costs',
        'Personalized treatment options'
      ]
    },
    {}
      id: 16,
      name: 'AI Fashion Design Studio',
      description: 'AI-powered fashion design with trend analysis, virtual try-on, and sustainable fashion recommendations',
      icon: FileText;
      features: [
        'Trend Analysis',
        'Virtual Try-On',
        'Sustainable Fashion AI',
        'Color Palette Generation',
        'Pattern Recognition',
        'Size Optimization',
        'Fashion Forecasting',
        'Eco-friendly Materials'
      ],
      category: 'Fashion Tech',
      popular: true;
      rating: 4.6;
      users: '1,500+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        'Trend prediction accuracy',
        'Virtual fitting technology',
        'Sustainable design optimization',
        'Personalized fashion recommendations'
      ]
    },
    {}
      id: 17,
      name: 'AI Music Composition Suite',
      description: 'AI-powered music creation with composition, arrangement, and production capabilities',
      icon: FileText;
      features: [
        'AI Composition',
        'Genre Adaptation',
        'Lyric Generation',
        'Instrument Arrangement',
        'Mood-based Creation',
        'Collaborative Composition',
        'Mastering & Mixing',
        'Copyright Protection'
      ],
      category: 'Creative AI',
      popular: true;
      rating: 4.7;
      users: '2,200+',
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        'Professional-quality compositions',
        'Multi-genre versatility',
        'Collaborative AI creation',
        'Copyright-safe generation'
      ]
    },
    {}
      id: 18,
      name: 'AI Energy Management System',
      description: 'Smart energy optimization with AI-powered grid management and renewable energy integration',
      icon: Zap,
      features: [
        'Smart Grid Management',
        'Renewable Energy Optimization',
        'Demand Response',
        'Energy Storage AI',
        'Carbon Footprint Tracking',
        'Predictive Maintenance',
        'Cost Optimization',
        'Grid Stability'
      ],
      category: 'Energy Tech'
      popular: false;
      rating: 4.8;
      users: '600+'
      color: 'from-amber-500 to-yellow-600'
      pricing: 'Starting at $799/mo',
      capabilities: [
        '30% energy cost reduction',
        'Grid stability optimization',
        'Renewable energy integration',
        'Predictive energy management'
      ]
    },
    {}
      id: 19,
      name: 'AI Autonomous Systems Platform',
      description: 'AI-powered autonomous vehicle and drone management with real-time decision making',
      icon: Settings,
      features: [
        'Autonomous Vehicle AI',
        'Drone Fleet Management',
        'Real-time Decision Making',
        'Path Optimization',
        'Collision Avoidance',
        'Weather Adaptation',
        'Fleet Coordination',
        'Safety Monitoring'
      ],
      category: 'Autonomous Systems'
      popular: true;
      rating: 4.9;
      users: '300+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        '99.9% safety record',
        'Real-time autonomous decisions',
        'Fleet optimization',
        'Weather-adaptive navigation'
      ]
    },
    {}
      id: 20,
      name: 'AI Blockchain Solutions',
      description: 'AI-powered blockchain technology with smart contracts, DeFi optimization, and crypto analytics',
      icon: Shield;
      features: [
        'Smart Contract AI',
        'DeFi Optimization',
        'Crypto Analytics',
        'Blockchain Security',
        'Token Economics',
        'Yield Farming AI',
        'Risk Assessment',
        'Regulatory Compliance'
      ],
      category: 'Blockchain AI',
      popular: true;
      rating: 4.8;
      users: '1,800+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        'Automated DeFi strategies',
        'Smart contract optimization',
        'Crypto market analysis',
        'Blockchain security enhancement'
      ]
    },
    // New Advanced AI Services
    {}
      id: 21,
      name: 'AI Quantum Financial Oracle Pro',
      description: 'Revolutionary quantum-powered financial modeling and risk assessment for high-frequency trading and portfolio optimization',
      icon: Brain,
      features: [
        'Quantum Risk Modeling',
        'High-Frequency Trading',
        'Portfolio Optimization',
        'Market Prediction',
        'Risk Assessment',
        'Algorithmic Trading',
        'Real-time Analysis',
        'Quantum Computing Integration'
      ],
      category: 'Quantum Finance'
      popular: true;
      rating: 4.9;
      users: '150+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        '300% faster calculations',
        '99.9% prediction accuracy',
        'Quantum advantage',
        'Real-time risk modeling'
      ],
      link: 'https://ziontechgroup.com/ai-quantum-financial-oracle'},
    {}
      id: 22,
      name: 'AI Neural Memory Assistant Pro',
      description: 'Advanced AI system with persistent memory and contextual understanding for personalized assistance',
      icon: Brain,
      features: [
        'Persistent Memory Storage',
        'Contextual Understanding',
        'Personalized Responses',
        'Learning from Interactions',
        'Multi-modal Memory',
        'Emotional Intelligence',
        'Long-term Relationship Building',
        'Adaptive Personality'
      ],
      category: 'Advanced AI',
      popular: true;
      rating: 4.8;
      users: '1,200+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        'Personalized AI experience',
        'Context-aware responses',
        'Emotional intelligence',
        'Long-term memory retention'
      ],
      link: 'https://ziontechgroup.com/ai-neural-memory-assistant'},
    {}
      id: 23,
      name: 'AI Holographic Workspace Pro',
      description: 'Immersive 3 D workspace with AI-powered collaboration tools and virtual reality integration',
      icon: Globe,
      features: [
        '3D Holographic Interface',
        'Virtual Collaboration',
        'AI-Powered Gestures',
        'Spatial Computing',
        'Mixed Reality Integration',
        'Real-time Translation',
        'Virtual Whiteboarding',
        'Immersive Presentations'
      ],
      category: 'Immersive Technology'
      popular: true;
      rating: 4.7;
      users: '400+',
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        'Immersive collaboration',
        '3 D data visualization',
        'Virtual presence',
        'Next-gen workspace'
      ],
      link: 'https://ziontechgroup.com/ai-holographic-workspace'},
    {}
      id: 24,
      name: 'AI Autonomous Systems Pro',
      description: 'Self-managing systems with advanced AI decision-making and autonomous operations',
      icon: Settings,
      features: [
        'Autonomous Operations',
        'Self-Healing Systems',
        'Predictive Maintenance',
        'Intelligent Monitoring',
        'Adaptive Learning',
        'Risk Management',
        'Real-time Decision Making',
        'Fleet Coordination'
      ],
      category: 'Autonomous Systems'
      popular: true;
      rating: 4.8;
      users: '300+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        '99.9% safety record',
        'Real-time autonomous decisions',
        'Fleet optimization',
        'Weather-adaptive navigation'
      ],
      link: 'https://ziontechgroup.com/ai-autonomous-systems'},
    {}
      id: 25,
      name: 'AI Agricultural Intelligence Pro',
      description: 'Revolutionary AI-powered agricultural solutions for precision farming and crop optimization',
      icon: Globe,
      features: [
        'Crop Monitoring',
        'Yield Prediction',
        'Soil Analysis',
        'Pest Detection',
        'Weather Forecasting',
        'Irrigation Optimization',
        'Harvest Planning',
        'Supply Chain Management'
      ],
      category: 'Agricultural AI'
      popular: true;
      rating: 4.8;
      users: '450+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        '25% increase in crop yield',
        '40% reduction in water usage',
        'Early pest detection',
        'Optimized harvest timing'
      ],
      link: 'https://ziontechgroup.com/ai-agricultural-intelligence-pro'},
    {}
      id: 26,
      name: 'AI Legal Research Pro',
      description: 'Advanced AI-powered legal research and case analysis for law firms and legal departments',
      icon: Scale,
      features: [
        'Case Law Research',
        'Document Analysis',
        'Precedent Finding',
        'Legal Writing',
        'Contract Review',
        'Compliance Checking',
        'Litigation Support',
        'Legal Analytics'
      ],
      category: 'Legal AI'
      popular: true;
      rating: 4.7;
      users: '320+'
      color: 'from-amber-500 to-orange-600'
      pricing: 'Starting at $899/mo',
      capabilities: [
        '80% faster research',
        '95% accuracy in case finding',
        'Automated document analysis',
        'Compliance monitoring'
      ],
      link: 'https://ziontechgroup.com/ai-legal-research-pro'},
    {}
      id: 27,
      name: 'AI Financial Crime Detection Pro',
      description: 'Real-time fraud detection and financial security monitoring with machine learning algorithms',
      icon: Shield,
      features: [
        'Fraud Detection',
        'Risk Assessment',
        'Compliance Monitoring',
        'Transaction Analysis',
        'Pattern Recognition',
        'Real-time Alerts',
        'AML Detection',
        'KYC Automation'
      ],
      category: 'Financial AI',
      popular: true;
      rating: 4.8;
      users: '1,400+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $1,399/mo',
      capabilities: [
        '99.9% fraud detection accuracy',
        'Real-time monitoring',
        'Automated compliance',
        'Risk mitigation'
      ],
      link: 'https://ziontechgroup.com/ai-financial-crime-detection-pro'},
    {}
      id: 28,
      name: 'AI 3 D Generation Studio Pro',
      description: 'AI-powered 3 D model generation and animation with photorealistic rendering capabilities',
      icon: Palette,
      features: [
        '3D Model Generation',
        'Texture Synthesis',
        'Animation Creation',
        'Rigging Automation',
        'Lighting Optimization',
        'Material Generation',
        'Scene Composition',
        'Export Options'
      ],
      category: '3D AI',
      popular: true;
      rating: 4.8;
      users: '1,800+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $999/mo',
      capabilities: [
        '10x faster 3D creation',
        'Photorealistic quality',
        'Automated rigging',
        'Multiple export formats'
      ],
      link: 'https://ziontechgroup.com/ai-3d-generation'},
    {}
      id: 29,
      name: 'AI Mobile App Builder Pro',
      description: 'AI-powered mobile app development with automated coding and intelligent design suggestions',
      icon: Smartphone,
      features: [
        'Auto Code Generation',
        'UI/UX Design',
        'Cross-platform Development',
        'API Integration',
        'Testing Automation',
        'Performance Optimization',
        'App Store Optimization',
        'Analytics Integration'
      ],
      category: 'Mobile AI',
      popular: true;
      rating: 4.7;
      users: '2,200+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $1,199/mo',
      capabilities: [
        'Build apps in hours',
        'Cross-platform compatibility',
        'Auto testing',
        'Performance optimization'
      ],
      link: 'https://ziontechgroup.com/ai-mobile-app-builder'},
    {}
      id: 30,
      name: 'AI Supply Chain Optimization Pro',
      description: 'Intelligent supply chain management with predictive analytics and optimization algorithms',
      icon: Truck,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Planning',
        'Risk Management',
        'Supplier Management',
        'Quality Control',
        'Cost Optimization',
        'Performance Analytics'
      ],
      category: 'Supply Chain AI',
      popular: true;
      rating: 4.8;
      users: '1,100+',
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $1,599/mo',
      capabilities: [
        '20% cost reduction',
        '30% inventory optimization',
        'Real-time tracking',
        'Predictive analytics'
      ],
      link: 'https://ziontechgroup.com/ai-supply-chain-optimization-pro'},
    {}
      id: 31,
      name: 'AI Content Delivery Network Pro',
      description: 'AI-powered content delivery network with intelligent caching and global optimization',
      icon: Globe,
      features: [
        'Intelligent Caching',
        'Global Optimization',
        'Performance Analytics',
        'Security Features',
        'Auto-scaling',
        'Edge Computing',
        'Real-time Monitoring',
        'Cost Optimization'
      ],
      category: 'CDN AI',
      popular: true;
      rating: 4.6;
      users: '3,500+',
      color: 'from-teal-500 to-cyan-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        '50% faster content delivery',
        'Global edge optimization',
        'Intelligent caching',
        'Real-time performance monitoring'
      ],
      link: 'https://ziontechgroup.com/ai-content-delivery-network'},
    {}
      id: 32,
      name: 'AI Business Intelligence Pro',
      description: 'Advanced AI-powered business intelligence with predictive analytics and automated insights',
      icon: BarChart,
      features: [
        'Predictive Analytics',
        'Automated Insights',
        'Natural Language Queries',
        'Real-time Dashboards',
        'Data Visualization',
        'Machine Learning',
        'Custom Reports',
        'Alert System'
      ],
      category: 'BI AI',
      popular: true;
      rating: 4.8;
      users: '2,800+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $1,099/mo',
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ],
      link: 'https://ziontechgroup.com/ai-business-intelligence'},
    {}
      id: 33,
      name: 'AI API Management Pro',
      description: 'Intelligent API management with AI-powered optimization and security',
      icon: Code,
      features: [
        'API Gateway',
        'Rate Limiting',
        'Security Policies',
        'Analytics',
        'Auto-scaling',
        'Load Balancing',
        'Monitoring',
        'Documentation Generation'
      ],
      category: 'API AI',
      popular: true;
      rating: 4.7;
      users: '2,100+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $899/mo',
      capabilities: [
        '99.9% API uptime',
        'Intelligent rate limiting',
        'Auto-scaling',
        'Security optimization'
      ],
      link: 'https://ziontechgroup.com/ai-api-management'},
    {}
      id: 34,
      name: 'AI Cybersecurity Monitor Pro',
      description: 'AI-powered security monitoring with threat detection, vulnerability assessment, and incident response',
      icon: Shield;
      features: [
        'Threat Detection',
        'Vulnerability Scanning',
        'Incident Response',
        'Compliance Monitoring',
        'Security Reports',
        'Risk Assessment',
        'Behavioral Analysis',
        'Automated Response'
      ],
      category: 'Security AI',
      popular: true;
      rating: 4.8;
      users: '1,900+',
      color: 'from-red-500 to-orange-600',
      pricing: 'Starting at $1,499/mo',
      capabilities: [
        '99.9% threat detection accuracy',
        'Real-time security monitoring',
        'Automated incident response',
        'Compliance automation'
      ],
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor'},
    {}
      id: 35,
      name: 'AI Energy Grid Management Pro',
      description: 'Intelligent energy distribution and optimization for smart cities and utilities',
      icon: Zap,
      features: [
        'Grid Optimization',
        'Demand Forecasting',
        'Renewable Integration',
        'Load Balancing',
        'Energy Trading',
        'Carbon Tracking',
        'Smart Meter Analytics',
        'Grid Stability'
      ],
      category: 'Energy AI'
      popular: false;
      rating: 4.7;
      users: '180+',
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $2,299/mo',
      capabilities: [
        '30% energy cost reduction',
        'Grid stability optimization',
        'Renewable energy integration',
        'Predictive energy management'
      ],
      link: 'https://ziontechgroup.com/ai-energy-grid-management'},
    {}
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
      popular: true;
      rating: 4.9;
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
    {}
      id: 3,
      name: 'AI Cybersecurity Platform',
      description: 'Next-generation security solutions with AI-powered threat detection, prevention, and response capabilities',
      icon: Shield;
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
      popular: true;
      rating: 4.7;
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
    {}
      id: 4,
      name: 'AI Document Intelligence Suite',
      description: 'Intelligent document processing with advanced OCR, NLP, and automated data extraction capabilities',
      icon: FileText;
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
      popular: false;
      rating: 4.6;
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
    {}
      id: 5,
      name: 'AI Customer Experience Platform',
      description: 'Comprehensive customer experience management with AI-powered personalization and engagement optimization',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      icon: Users,
      popular: false
    },
    {
      id: 'ai-process-automation',
      name: 'AI Process Automation',
      description: 'Streamline business processes with intelligent automation and workflow optimization',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
<<<<<<< HEAD
        'Workflow automation',
        'Document processing',
        'Data extraction',
        'Task scheduling',
        'Error handling',
        'Process monitoring'
      ],
      category: 'automation',
      icon: Settings,
      popular: true
    },
    {
      id: 'ai-predictive-maintenance',
=======
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
      popular: true;
      rating: 4.8;
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
    {}
      id: 6,
      name: 'AI Content Generation Studio',
      description: 'Advanced content creation platform with AI-powered writing, editing, and optimization capabilities',
      icon: FileText;
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
      popular: true;
      rating: 4.9;
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
    {}
      id: 7,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      name: 'AI Predictive Maintenance',
      description: 'Predict equipment failures and optimize maintenance schedules using AI',
      price: '$799/month',
      marketPrice: '$2000-8000/month',
      features: [
<<<<<<< HEAD
        'Failure prediction',
        'Maintenance scheduling',
        'Cost optimization',
        'Real-time monitoring',
        'Alert system',
        'Performance tracking'
      ],
      category: 'analytics',
=======
        'Predictive Analytics',
        'Equipment Monitoring',
        'Automated Scheduling',
        'Failure Prediction',
        'Maintenance Optimization',
        'Cost Analysis',
        'Integration APIs',
        'Reporting Dashboard'
      ],
      category: 'Industrial AI'
      popular: false;
      rating: 4.7;
      users: '900+'
      color: 'from-orange-500 to-red-600'
      pricing: 'Starting at $499/mo',
      capabilities: [
        '30% reduction in downtime',
        '25% cost savings',
        'Predictive maintenance',
        'Real-time monitoring'
      ]
    },
    {}
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
      popular: true;
      rating: 4.8;
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
    {}
      id: 9,
      name: 'AI Healthcare Diagnostics',
      description: 'Advanced medical AI with diagnostic assistance, treatment recommendations, and patient monitoring capabilities',
      icon: Stethoscope;
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
      category: 'Healthcare AI'
      popular: false;
      rating: 4.9;
      users: '600+'
      color: 'from-teal-500 to-cyan-600'
      pricing: 'Starting at $599/mo',
      capabilities: [
        '98% diagnostic accuracy',
        'Faster diagnosis times',
        'Reduced medical errors',
        'Improved patient outcomes'
      ]
    },
    {}
      id: 10,
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation',
      icon: Truck;
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
      category: 'Supply Chain'
      popular: false;
      rating: 4.6;
      users: '800+'
      color: 'from-amber-500 to-orange-600'
      pricing: 'Starting at $399/mo',
      capabilities: [
        '20% cost reduction',
        '30% inventory optimization',
        'Real-time tracking',
        'Predictive analytics'
      ]
    },
    {}
      id: 11,
      name: 'AI Quantum Financial Oracle',
      description: 'Revolutionary quantum-powered financial modeling and risk assessment for high-frequency trading and portfolio optimization',
      icon: Brain,
      features: [
        'Quantum Risk Modeling',
        'High-Frequency Trading',
        'Portfolio Optimization',
        'Market Prediction',
        'Risk Assessment',
        'Algorithmic Trading',
        'Real-time Analysis',
        'Quantum Computing Integration'
      ],
      category: 'Quantum Finance'
      popular: true;
      rating: 4.9;
      users: '150+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        '300% faster calculations',
        '99.9% prediction accuracy',
        'Quantum advantage',
        'Real-time risk modeling'
      ]
    },
    {}
      id: 12,
      name: 'AI Climate Solutions Pro',
      description: 'Advanced climate modeling and environmental impact analysis with carbon footprint optimization and sustainability planning',
      icon: Globe,
      features: [
        'Climate Modeling',
        'Carbon Footprint Analysis',
        'Sustainability Planning',
        'Environmental Impact Assessment',
        'Renewable Energy Optimization',
        'Emission Tracking',
        'Green Technology Integration',
        'Compliance Monitoring'
      ],
      category: 'Climate Tech'
      popular: true;
      rating: 4.8;
      users: '400+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        '50% carbon footprint reduction',
        'Real-time environmental monitoring',
        'Sustainability optimization',
        'Climate risk assessment'
      ]
    },
    {}
      id: 13,
      name: 'AI Space Technology Pro',
      description: 'Cutting-edge AI solutions for space exploration, satellite management, and space mission optimization',
      icon: Rocket;
      features: [
        'Satellite Management',
        'Mission Planning',
        'Space Weather Prediction',
        'Orbital Mechanics',
        'Space Debris Tracking',
        'Communication Optimization',
        'Navigation Systems',
        'Space Mission Analytics'
      ],
      category: 'Space Tech'
      popular: false;
      rating: 4.9;
      users: '50+',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '99.9% mission success rate',
        'Real-time space monitoring',
        'Advanced orbital calculations',
        'Space debris mitigation'
      ]
    },
    {}
      id: 14,
      name: 'AI Drug Discovery Pro',
      description: 'Revolutionary AI-powered drug discovery platform with molecular modeling, clinical trial optimization, and personalized medicine',
      icon: Stethoscope;
      features: [
        'Molecular Modeling',
        'Drug Design',
        'Clinical Trial Optimization',
        'Personalized Medicine',
        'Side Effect Prediction',
        'Drug Interaction Analysis',
        'Biomarker Discovery',
        'Regulatory Compliance'
      ],
      category: 'Pharmaceutical AI'
      popular: true;
      rating: 4.9;
      users: '200+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        '70% faster drug discovery',
        '90% accuracy in predictions',
        'Personalized treatment plans',
        'Reduced clinical trial costs'
      ]
    },
    {}
      id: 15,
      name: 'AI Neural Memory Assistant',
      description: 'Advanced AI system that mimics human memory patterns for enhanced learning, recall, and cognitive assistance',
      icon: Brain;
      features: [
        'Memory Pattern Recognition',
        'Learning Optimization',
        'Cognitive Assistance',
        'Knowledge Retention',
        'Pattern Recognition',
        'Adaptive Learning',
        'Memory Enhancement',
        'Cognitive Analytics'
      ],
      category: 'Cognitive AI'
      popular: false;
      rating: 4.7;
      users: '300+'
      color: 'from-cyan-500 to-blue-600'
      pricing: 'Starting at $799/mo',
      capabilities: [
        '40% improved learning speed',
        '90% better retention rates',
        'Adaptive memory patterns',
        'Cognitive enhancement'
      ]
    }
  ];

const categories = ['All', 'Analytics', 'Automation', 'Security', 'Document Processing', 'Customer Experience', 'Content Creation', 'Industrial AI', 'Financial AI', 'Healthcare AI', 'Supply Chain', 'Quantum Computing', 'Advanced AI', 'Immersive Technology', 'Climate Tech', 'Pharmaceutical AI', 'Fashion Tech', 'Creative AI', 'Energy Tech', 'Autonomous Systems', 'Blockchain AI', 'Cognitive AI', 'AI Development', 'Quantum ML', 'Space Technology', 'Scientific AI', 'Data Visualization', 'Quantum Security', 'Neural Interface', 'Quantum Optimization', 'Immersive Learning', 'Quantum AI', 'Immersive Workspace', 'Quantum Finance', 'Immersive Design', 'Immersive Analytics', 'Environmental AI', 'Agricultural AI', 'Legal AI', '3D AI', 'Mobile AI', 'CDN AI', 'BI AI', 'API AI', 'Security AI'];

  if (!isLoaded) {}
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center"></div>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <>
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"></div>
      {/* Futuristic Background Effects */}</div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" /></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />

      {/* Animated Grid Pattern */}</div>
      <div className="absolute inset-0 opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px] animate-pulse" />
      </div>

      {/* Header */}
      <div className="relative overflow-hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10"></div>
          <div className="text-center"></div>

            <div className="inline-block mb-6"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 neon-text"></h1>
                AI Services;
              </h1>
              <div className="$2" />
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Transform your business with our comprehensive suite of cutting-edge AI-powered solutions;
            </p>,
,
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12"></div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">35+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20"></div>
                <div className="text-3xl font-bold text-purple-400 mb-2">25K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20"></div>
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400/20"></div>
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <section className="py-20"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1>
              AI Services;
            </h1>
        </div>,
      </div>,
,
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-glow-cyan"></h1>
            AI Services;
          </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-glow-cyan"></p>
              Transform your business with our comprehensive suite of AI-powered solutions;
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8"></div>
              <div className="holographic px-6 py-3 rounded-lg"></div>
                <span className="text-cyan-400 font-semibold">15+ AI Platforms</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg"></div>
                <span className="text-purple-400 font-semibold">25,000+ Companies</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg"></div>
                <span className="text-pink-400 font-semibold">99.9% Accuracy</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"></div>
        <div className="flex flex-wrap justify-center gap-4"></div>
          {categories.map((category) => (}
            <button
              key={category}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover: bg-white/20 hover:border-cyan-400/50 transition-all duration-300 font-medium",
            >,
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
          {services.map((service) => (}
            <div
              key={service.id}

              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden ${}
                service.popular ? 'ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20 neon-glow-purple' : ''
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden ${}
                service.popular ? 'ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20 neon-glow-purple' : ''}
              }`}
            ></div>
              {/* Animated Background */}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" /></div>

              <div className="relative z-10"></div>
                <div className="flex items-start justify-between mb-6"></div>
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}></div>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center space-x-2"></div>
                    {service.popular && (}
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full flex items-center font-bold shadow-lg"></span>
                        <Star className="w-3 h-3 mr-1" />
                        Popular;
                      </span>
                    )}
                    <div className="flex items-center text-yellow-400"></div>
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover: text-cyan-400 transition-colors duration-300">,
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed"></p>
                  {service.description}
                </p>

                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center"></h4>
                    <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                    Key Features:
                  </h4>
                  <ul className="space-y-2"></ul>
                    {service.features.slice(0, 4).map((feature, index) => (}
                      <li key={index} className="flex items-center text-gray-300 text-sm"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (}
                      <li className="text-cyan-400 text-sm font-medium"></li>
                        +{service.features.length - 4} more features;
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6"></div>
                  <div className="text-sm text-gray-400"></div>
                    {service.users} users;
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400 font-medium"></div>
                    {service.category}
                  </div>
                </div>

                <div className="mb-6"></div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2"></div>
                    {service.pricing}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities:</h4>
                  <ul className="space-y-1"></ul>
                    {service.capabilities.map((capability, index) => (}
                      <li key={index} className="flex items-center text-gray-300 text-sm"></li>
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3"></div>
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  ></a>
                    Get Started;
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a;
                    href="/contact"
                    className="w-full border border-cyan-400/50 text-cyan-400 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                  ></a>
                    Learn More;
                  </a>
                </div>
              </div>,
,
            </div>))}
        </div>
      </div>

      {/* CTA Section */}
<div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8"></p>
            Join 25,000+ companies already using our cutting-edge AI solutions. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"></div>
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            ></a>
              Start Your Free Trial;
            </a>
            <a;
              href="tel:+13024640950"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            ></a>
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-purple-100 text-sm"></div>
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
      </div>
    </div>
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Target, BarChart, Users, ArrowRight, CheckCircle, Star, TrendingUp, Shield, Code, Database, Phone, Mail, Globe, Settings, Lock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Marketing Automation',
      description: 'Revolutionize your marketing with AI-powered automation, personalization, and analytics.',
      icon: Target,
      features: ['Automated Campaign Management', 'Predictive Analytics', 'Personalized Content', 'ROI Optimization'],
      price: 'Starting at $2,999/month',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'AI Process Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      icon: Zap,
      features: ['Workflow Automation', 'Document Processing', 'Data Extraction', 'Smart Routing'],
      price: 'Starting at $1,999/month',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights with advanced AI analytics.',
      icon: BarChart,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reporting'],
      price: 'Starting at $3,499/month',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent support solutions.',
      icon: Users,
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', '24/7 Support'],
      price: 'Starting at $1,499/month',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered generation tools.',
      icon: Code,
      features: ['Content Creation', 'SEO Optimization', 'Multi-language Support', 'Brand Consistency'],
      price: 'Starting at $2,499/month',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered security solutions.',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      icon: Shield,
      popular: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'automation', name: 'Automation', count: services.filter(s => s.category === 'automation').length },
    { id: 'analytics', name: 'Analytics', count: services.filter(s => s.category === 'analytics').length },
    { id: 'content', name: 'Content', count: services.filter(s => s.category === 'content').length }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

<<<<<<< HEAD
  const stats = [
    { label: 'AI Services Delivered', value: '500+', icon: Brain },
    { label: 'Client Satisfaction', value: '98%', icon: Heart },
    { label: 'Cost Savings', value: '60%', icon: TrendingUp },
    { label: 'Response Time', value: '<1s', icon: Zap }
  ]

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Professional AI services including chatbots, analytics, content generation, and process automation for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, chatbots, analytics, automation, business intelligence" />
      </Helmet>
=======
      <SEOOptimizer
        title="AI Services - Zion Tech Group"
        description="Advanced AI services including machine learning, NLP, computer vision, automation, and more. Transform your business with cutting-edge artificial intelligence solutions."
        keywords={['AI services', 'machine learning', 'NLP', 'computer vision', 'AI automation', 'predictive analytics', 'AI consulting']}
        canonicalUrl="https://ziontechgroup.com/ai-services"
      />
        <PerformanceOptimizer
          enableImageOptimization={true}
          enableLazyLoading={true}
          enableCodeSplitting={true}
          enablePrefetching={true}
        />
        <AccessibilityEnhancer 
          enableKeyboardNavigation={true}
          enableScreenReaderSupport={true}
          enableHighContrast={true}
          enableFocusManagement={true}
        />
        <SecurityEnhancer 
          enableCSP={true}
          enableHTTPSRedirect={true}
          enableXSSProtection={true}
          enableClickjackingProtection={true}
        />
      <Analytics />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0468
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge AI solutions. From intelligent chatbots to predictive analytics, 
              we deliver AI services that drive growth and efficiency.
            </p>
<<<<<<< HEAD
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                </div>
              ))}
=======
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'ai_services_phone_number'});
    }
  };

  return (
    <>
      <Helmet></Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including automation, analytics, marketing, and cybersecurity solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI marketing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-24 pb-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Transform your business with cutting-edge artificial intelligence solutions designed to drive growth, efficiency, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                ></a>
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                ></Link>
                  <Mail className="w-5 h-5" />
                  Get Quote
                </Link>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="w-12 h-12 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <p className="text-green-400 text-sm font-semibold">Save up to 70%</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/demo"
                      className="px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                    >
                      Demo
                    </Link>
                  </div>
=======
        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
        {/* Services Section */}
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Comprehensive AI solutions tailored to meet your business needs and drive digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"></div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}></div>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6"></ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button>
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white/5"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI Services</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the transformative power of artificial intelligence in your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Serve</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our AI solutions are designed to meet the unique needs of various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4">
<<<<<<< HEAD
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already using our AI services to drive growth, 
              reduce costs, and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
=======
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
<<<<<<< HEAD
    </>
  )
=======
        {/* Process Section */}
        <section className="py-16 bg-white/5"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                A systematic approach to implementing AI solutions in your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
                <p className="text-gray-300">Understand your business needs and identify AI opportunities.</p>
              </div>
              
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy</h3>
                <p className="text-gray-300">Develop a comprehensive AI strategy tailored to your goals.</p>
              </div>
              
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">Deploy AI solutions with minimal disruption to operations.</p>
              </div>
              
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
                <p className="text-gray-300">Continuously monitor and optimize AI performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="max-w-4xl mx-auto text-center"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Let's discuss how our AI services can help you achieve your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                ></a>
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                ></Link>
                  <Mail className="w-5 h-5" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}
=======
    </React.Fragment>
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

<<<<<<< HEAD
export default AiServicesPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
export default AIServicesPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
