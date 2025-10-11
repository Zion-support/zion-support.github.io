'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp,
  Target,
  Globe,
  Smartphone,
  Mail,
  FileText,
  Settings,
  Database,
  Cloud,
  Code,
  Heart,
  Eye,
  Mic,
  ShoppingCart,
  Calendar,
  MessageSquare,
  DollarSign,
  Lock,
  Wifi,
  Monitor,
  Headphones,
  Package,
  Workflow,
  Cpu,
  Server,
  Link as LinkIcon,
  Sparkles,
  Rocket,
  Award,
  Lightbulb,
  PieChart,
  Activity,
  Layers,
  Compass,
  RefreshCw,
  Maximize,
  Minimize,
  Play,
  Pause,
  Square,
  Triangle,
  Circle,
  Hexagon,
  Octagon,
  Pentagon,
  Grid,
  Search,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiInnovationHubPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    {
      id: 'ai-quantum-computing',
      name: 'AI Quantum Computing Platform',
      description: 'Revolutionary quantum computing platform with AI optimization for complex problem solving',
      price: '$5,999/month',
      marketPrice: '$12000-50000/month',
      features: [
        'Quantum algorithm optimization',
        'AI-powered quantum circuit design',
        'Real-time quantum simulation',
        'Hybrid classical-quantum processing',
        'Quantum machine learning models',
        'Quantum cryptography integration',
        'Distributed quantum computing',
        'Quantum error correction'
      ],
      benefits: [
        'Solve complex problems 1000x faster',
        'Breakthrough in optimization',
        'Revolutionary computational power',
        'Future-proof technology'
      ],
      category: 'Quantum AI',
      popular: true,
      icon: Cpu,
      link: 'https://ziontechgroup.com/ai-quantum-computing'
    },
    {
      id: 'ai-neural-interface',
      name: 'AI Neural Interface Pro',
      description: 'Advanced brain-computer interface with AI-powered neural signal processing and control',
      price: '$3,999/month',
      marketPrice: '$8000-25000/month',
      features: [
        'Neural signal acquisition',
        'AI-powered signal processing',
        'Real-time brain activity analysis',
        'Thought-to-text conversion',
        'Neural pattern recognition',
        'Brain state monitoring',
        'Cognitive enhancement protocols',
        'Medical-grade precision'
      ],
      benefits: [
        'Revolutionary human-AI interaction',
        'Enhanced cognitive abilities',
        'Medical breakthrough potential',
        'Next-generation interface'
      ],
      category: 'Neural AI',
      popular: true,
      icon: Brain,
      link: 'https://ziontechgroup.com/ai-neural-interface'
    },
    {
      id: 'ai-holographic-workspace',
      name: 'AI Holographic Workspace',
      description: 'Immersive 3D holographic workspace with AI-powered spatial computing and collaboration',
      price: '$2,999/month',
      marketPrice: '$6000-20000/month',
      features: [
        '3D holographic displays',
        'AI spatial computing',
        'Gesture recognition',
        'Virtual collaboration spaces',
        'Holographic data visualization',
        'Mixed reality integration',
        'AI-powered spatial optimization',
        'Multi-user holographic sessions'
      ],
      benefits: [
        'Revolutionary workspace experience',
        'Enhanced collaboration',
        'Immersive data visualization',
        'Future of remote work'
      ],
      category: 'Spatial AI',
      popular: true,
      icon: Monitor,
      link: 'https://ziontechgroup.com/ai-holographic-workspace'
    },
    {
      id: 'ai-autonomous-vehicles',
      name: 'AI Autonomous Vehicle Platform',
      description: 'Complete autonomous vehicle AI system with advanced perception, decision making, and safety',
      price: '$4,999/month',
      marketPrice: '$10000-30000/month',
      features: [
        'Advanced computer vision',
        'Lidar and radar processing',
        'Real-time decision making',
        'Predictive maintenance',
        'Fleet management AI',
        'Safety monitoring systems',
        'Route optimization',
        'Weather adaptation'
      ],
      benefits: [
        'Revolutionary transportation',
        'Enhanced safety',
        'Reduced accidents',
        'Efficient fleet management'
      ],
      category: 'Autonomous Systems',
      popular: true,
      icon: Car,
      link: 'https://ziontechgroup.com/ai-autonomous-vehicles'
    },
    {
      id: 'ai-drug-discovery',
      name: 'AI Drug Discovery Platform',
      description: 'Advanced AI platform for pharmaceutical drug discovery and molecular design',
      price: '$7,999/month',
      marketPrice: '$15000-50000/month',
      features: [
        'Molecular design AI',
        'Drug-target interaction prediction',
        'Toxicity assessment',
        'Clinical trial optimization',
        'Biomarker discovery',
        'Drug repurposing analysis',
        'Patent analysis',
        'Regulatory compliance'
      ],
      benefits: [
        'Accelerate drug development',
        'Reduce discovery costs',
        'Improve success rates',
        'Save lives faster'
      ],
      category: 'Healthcare AI',
      popular: true,
      icon: Heart,
      link: 'https://ziontechgroup.com/ai-drug-discovery'
    },
    {
      id: 'ai-climate-solutions',
      name: 'AI Climate Solutions Pro',
      description: 'Comprehensive AI platform for climate change mitigation and environmental monitoring',
      price: '$3,499/month',
      marketPrice: '$7000-20000/month',
      features: [
        'Climate modeling and prediction',
        'Carbon footprint optimization',
        'Renewable energy optimization',
        'Environmental monitoring',
        'Disaster prediction',
        'Sustainability analytics',
        'Green technology integration',
        'Climate risk assessment'
      ],
      benefits: [
        'Combat climate change',
        'Optimize energy usage',
        'Predict environmental risks',
        'Sustainable future'
      ],
      category: 'Climate AI',
      popular: true,
      icon: Globe,
      link: 'https://ziontechgroup.com/ai-climate-solutions'
    },
    {
      id: 'ai-space-exploration',
      name: 'AI Space Exploration Platform',
      description: 'Advanced AI system for space exploration, satellite management, and cosmic data analysis',
      price: '$6,999/month',
      marketPrice: '$14000-40000/month',
      features: [
        'Satellite constellation management',
        'Space debris tracking',
        'Cosmic data analysis',
        'Mission planning AI',
        'Space weather prediction',
        'Astronomical object detection',
        'Spacecraft navigation',
        'Interplanetary communication'
      ],
      benefits: [
        'Advance space exploration',
        'Optimize satellite operations',
        'Discover cosmic phenomena',
        'Space technology breakthrough'
      ],
      category: 'Space AI',
      popular: false,
      icon: Rocket,
      link: 'https://ziontechgroup.com/ai-space-exploration'
    },
    {
      id: 'ai-robotic-surgery',
      name: 'AI Robotic Surgery System',
      description: 'Precision AI-powered robotic surgery system with real-time decision making and safety',
      price: '$8,999/month',
      marketPrice: '$18000-60000/month',
      features: [
        'Precision robotic control',
        'Real-time surgical guidance',
        'AI-powered decision support',
        'Minimally invasive procedures',
        'Patient monitoring',
        'Surgical planning optimization',
        'Complication prevention',
        'Medical imaging integration'
      ],
      benefits: [
        'Revolutionary surgical precision',
        'Reduced complications',
        'Faster recovery times',
        'Better patient outcomes'
      ],
      category: 'Medical AI',
      popular: true,
      icon: Heart,
      link: 'https://ziontechgroup.com/ai-robotic-surgery'
    },
    {
      id: 'ai-financial-crime-detection',
      name: 'AI Financial Crime Detection',
      description: 'Advanced AI system for detecting and preventing financial crimes in real-time',
      price: '$2,999/month',
      marketPrice: '$6000-18000/month',
      features: [
        'Real-time transaction monitoring',
        'Pattern recognition algorithms',
        'Anomaly detection',
        'Risk scoring',
        'Compliance monitoring',
        'Fraud prevention',
        'Money laundering detection',
        'Regulatory reporting'
      ],
      benefits: [
        'Prevent financial crimes',
        'Reduce fraud losses',
        'Ensure compliance',
        'Protect financial systems'
      ],
      category: 'Financial AI',
      popular: true,
      icon: Shield,
      link: 'https://ziontechgroup.com/ai-financial-crime-detection'
    },
    {
      id: 'ai-energy-grid-management',
      name: 'AI Energy Grid Management',
      description: 'Smart energy grid management with AI optimization for renewable energy integration',
      price: '$4,499/month',
      marketPrice: '$9000-25000/month',
      features: [
        'Smart grid optimization',
        'Renewable energy integration',
        'Demand response management',
        'Energy storage optimization',
        'Grid stability monitoring',
        'Predictive maintenance',
        'Load balancing',
        'Carbon footprint reduction'
      ],
      benefits: [
        'Optimize energy distribution',
        'Integrate renewables',
        'Reduce energy waste',
        'Sustainable energy future'
      ],
      category: 'Energy AI',
      popular: true,
      icon: Zap,
      link: 'https://ziontechgroup.com/ai-energy-grid-management'
    },
    {
      id: 'ai-agricultural-intelligence',
      name: 'AI Agricultural Intelligence',
      description: 'Comprehensive AI platform for precision agriculture and crop optimization',
      price: '$1,999/month',
      marketPrice: '$4000-12000/month',
      features: [
        'Crop monitoring and analysis',
        'Precision irrigation',
        'Pest and disease detection',
        'Yield prediction',
        'Soil analysis',
        'Weather integration',
        'Automated farming equipment',
        'Supply chain optimization'
      ],
      benefits: [
        'Increase crop yields',
        'Reduce resource usage',
        'Sustainable farming',
        'Food security'
      ],
      category: 'Agricultural AI',
      popular: true,
      icon: Globe,
      link: 'https://ziontechgroup.com/ai-agricultural-intelligence'
    },
    {
      id: 'ai-cyber-defense-matrix',
      name: 'AI Cyber Defense Matrix',
      description: 'Advanced AI-powered cybersecurity platform with threat detection and response',
      price: '$3,999/month',
      marketPrice: '$8000-20000/month',
      features: [
        'Real-time threat detection',
        'AI-powered threat analysis',
        'Automated response systems',
        'Behavioral analysis',
        'Zero-day exploit detection',
        'Network security monitoring',
        'Incident response automation',
        'Threat intelligence integration'
      ],
      benefits: [
        'Advanced threat protection',
        'Automated security response',
        'Reduce security incidents',
        'Comprehensive protection'
      ],
      category: 'Cybersecurity AI',
      popular: true,
      icon: Shield,
      link: 'https://ziontechgroup.com/ai-cyber-defense-matrix'
    },
    {
      id: 'ai-content-creation-studio',
      name: 'AI Content Creation Studio',
      description: 'Complete AI-powered content creation platform for multimedia production',
      price: '$1,499/month',
      marketPrice: '$3000-8000/month',
      features: [
        'AI video generation',
        'Voice synthesis and cloning',
        'Image and graphic creation',
        'Music and audio production',
        '3D model generation',
        'Animation and motion graphics',
        'Content optimization',
        'Multi-platform publishing'
      ],
      benefits: [
        'Revolutionary content creation',
        'Reduce production costs',
        'Faster content delivery',
        'Creative possibilities'
      ],
      category: 'Creative AI',
      popular: true,
      icon: Sparkles,
      link: 'https://ziontechgroup.com/ai-content-creation-studio'
    },
    {
      id: 'ai-personal-assistant-pro',
      name: 'AI Personal Assistant Pro',
      description: 'Advanced AI personal assistant with natural language processing and task automation',
      price: '$299/month',
      marketPrice: '$599-1500/month',
      features: [
        'Natural language understanding',
        'Task automation',
        'Calendar and schedule management',
        'Email and communication handling',
        'Research and information gathering',
        'Decision support',
        'Learning and adaptation',
        'Multi-platform integration'
      ],
      benefits: [
        'Increase productivity',
        'Automate routine tasks',
        'Better time management',
        'Personalized assistance'
      ],
      category: 'Personal AI',
      popular: true,
      icon: Users,
      link: 'https://ziontechgroup.com/ai-personal-assistant-pro'
    },
    {
      id: 'ai-blockchain-analytics',
      name: 'AI Blockchain Analytics',
      description: 'Advanced AI platform for blockchain analysis and cryptocurrency market insights',
      price: '$2,499/month',
      marketPrice: '$5000-15000/month',
      features: [
        'Blockchain transaction analysis',
        'Cryptocurrency market prediction',
        'Smart contract auditing',
        'DeFi protocol analysis',
        'Risk assessment',
        'Compliance monitoring',
        'Trading strategy optimization',
        'Portfolio management'
      ],
      benefits: [
        'Better investment decisions',
        'Risk mitigation',
        'Market opportunity identification',
        'Blockchain insights'
      ],
      category: 'Blockchain AI',
      popular: true,
      icon: LinkIcon,
      link: 'https://ziontechgroup.com/ai-blockchain-analytics'
    },
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing Platform',
      description: 'Distributed AI computing platform for real-time processing at the edge',
      price: '$1,999/month',
      marketPrice: '$4000-12000/month',
      features: [
        'Edge AI model deployment',
        'Real-time processing',
        'Low latency inference',
        'Distributed computing',
        'Offline AI capabilities',
        'Bandwidth optimization',
        'Edge device management',
        'Federated learning'
      ],
      benefits: [
        'Ultra-low latency',
        'Offline AI capabilities',
        'Reduced bandwidth costs',
        'Real-time processing'
      ],
      category: 'Edge AI',
      popular: true,
      icon: Server,
      link: 'https://ziontechgroup.com/ai-edge-computing'
    },
    {
      id: 'ai-voice-synthesis',
      name: 'AI Voice Synthesis Pro',
      description: 'Advanced AI voice synthesis with emotional expression and natural speech',
      price: '$599/month',
      marketPrice: '$1200-3000/month',
      features: [
        'Natural voice synthesis',
        'Emotional expression',
        'Voice cloning',
        'Multi-language support',
        'Real-time generation',
        'Custom voice training',
        'SSML support',
        'API integration'
      ],
      benefits: [
        'Natural-sounding voices',
        'Emotional expression',
        'Voice personalization',
        'Accessibility improvement'
      ],
      category: 'Voice AI',
      popular: true,
      icon: Mic,
      link: 'https://ziontechgroup.com/ai-voice-synthesis'
    },
    {
      id: 'ai-computer-vision-pro',
      name: 'AI Computer Vision Pro',
      description: 'Advanced computer vision platform with object detection and image analysis',
      price: '$1,299/month',
      marketPrice: '$2600-6000/month',
      features: [
        'Object detection and recognition',
        'Facial recognition',
        'Image classification',
        'Video analysis',
        'Real-time processing',
        'Custom model training',
        'API integration',
        'Edge deployment'
      ],
      benefits: [
        'Advanced image analysis',
        'Real-time processing',
        'Custom solutions',
        'High accuracy'
      ],
      category: 'Computer Vision',
      popular: true,
      icon: Eye,
      link: 'https://ziontechgroup.com/ai-computer-vision-pro'
    },
    {
      id: 'ai-natural-language-processing',
      name: 'AI Natural Language Processing',
      description: 'Advanced NLP platform with text analysis, translation, and understanding',
      price: '$899/month',
      marketPrice: '$1800-4500/month',
      features: [
        'Text analysis and classification',
        'Sentiment analysis',
        'Language translation',
        'Named entity recognition',
        'Text summarization',
        'Question answering',
        'Document processing',
        'Multi-language support'
      ],
      benefits: [
        'Advanced text understanding',
        'Multi-language support',
        'Automated text processing',
        'Better insights'
      ],
      category: 'Language AI',
      popular: true,
      icon: FileText,
      link: 'https://ziontechgroup.com/ai-natural-language-processing'
    },
    {
      id: 'ai-recommendation-engine-pro',
      name: 'AI Recommendation Engine Pro',
      description: 'Advanced recommendation system with machine learning and personalization',
      price: '$1,199/month',
      marketPrice: '$2400-6000/month',
      features: [
        'Collaborative filtering',
        'Content-based recommendations',
        'Hybrid approaches',
        'Real-time personalization',
        'A/B testing',
        'Cold start solutions',
        'Scalable architecture',
        'Multi-domain support'
      ],
      benefits: [
        'Increase engagement',
        'Improve conversions',
        'Personalized experience',
        'Better user satisfaction'
      ],
      category: 'Recommendation AI',
      popular: true,
      icon: Target,
      link: 'https://ziontechgroup.com/ai-recommendation-engine-pro'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Grid },
    { id: 'Quantum AI', name: 'Quantum AI', icon: Cpu },
    { id: 'Neural AI', name: 'Neural AI', icon: Brain },
    { id: 'Spatial AI', name: 'Spatial AI', icon: Monitor },
    { id: 'Autonomous Systems', name: 'Autonomous Systems', icon: Car },
    { id: 'Healthcare AI', name: 'Healthcare AI', icon: Heart },
    { id: 'Climate AI', name: 'Climate AI', icon: Globe },
    { id: 'Space AI', name: 'Space AI', icon: Rocket },
    { id: 'Medical AI', name: 'Medical AI', icon: Heart },
    { id: 'Financial AI', name: 'Financial AI', icon: DollarSign },
    { id: 'Energy AI', name: 'Energy AI', icon: Zap },
    { id: 'Agricultural AI', name: 'Agricultural AI', icon: Globe },
    { id: 'Cybersecurity AI', name: 'Cybersecurity AI', icon: Shield },
    { id: 'Creative AI', name: 'Creative AI', icon: Sparkles },
    { id: 'Personal AI', name: 'Personal AI', icon: Users },
    { id: 'Blockchain AI', name: 'Blockchain AI', icon: LinkIcon },
    { id: 'Edge AI', name: 'Edge AI', icon: Server },
    { id: 'Voice AI', name: 'Voice AI', icon: Mic },
    { id: 'Computer Vision', name: 'Computer Vision', icon: Eye },
    { id: 'Language AI', name: 'Language AI', icon: FileText },
    { id: 'Recommendation AI', name: 'Recommendation AI', icon: Target }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>AI Innovation Hub | Zion Tech Group - Cutting-Edge AI Solutions</title>
        <meta name="description" content="Explore our revolutionary AI Innovation Hub featuring quantum computing, neural interfaces, autonomous systems, and breakthrough AI technologies for the future." />
        <meta name="keywords" content="ai innovation, quantum computing, neural interface, autonomous systems, ai breakthrough, future technology, advanced ai" />
        <meta property="og:title" content="AI Innovation Hub | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI solutions for the future" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Innovation Hub | Zion Tech Group" />
        <meta name="twitter:description" content="Explore our revolutionary AI Innovation Hub" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Innovation Hub
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Revolutionary AI Solutions for the Future
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our cutting-edge AI Innovation Hub featuring breakthrough technologies including quantum computing, 
              neural interfaces, autonomous systems, and next-generation AI solutions that are shaping the future of technology.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300">Revolutionary AI Services</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$299-8K</div>
                <div className="text-gray-300">Monthly Pricing</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1000x</div>
                <div className="text-gray-300">Performance Boost</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Future</div>
                <div className="text-gray-300">Ready Technology</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                📧 Email Us
              </a>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-xs text-gray-400">per month</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <a
                      href={service.link}
                      className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                    >
                      Learn More
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="w-full py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Shape the Future?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the AI revolution with our cutting-edge Innovation Hub. From quantum computing to neural interfaces, 
                we're building the future of technology today. Contact us to explore these revolutionary solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AiInnovationHubPage;