'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
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
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Cpu,
  Link as LinkIcon,
  Server
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'CRM integration',
        'Real-time learning'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 availability',
        'Instant responses',
        'Scalable solutions'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing campaigns',
        'SEO optimization',
        'Brand voice customization'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing'
      ],
      category: 'Content',
      popular: true,
      icon: Brain
    },
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models'
      ],
      benefits: [
        'Data-driven insights',
        'Predictive forecasting',
        'Automated reporting',
        'ROI optimization'
      ],
      category: 'Analytics',
      popular: false,
      icon: BarChart
    },
    {
      id: 'ai-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Real-time monitoring',
        'Cost reduction'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Eye
    },
    {
      id: 'ai-voice',
      name: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions',
      price: '$249/month',
      marketPrice: '$400-1800/month',
      features: [
        'Speech-to-text conversion',
        'Voice synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support'
      ],
      benefits: [
        'Improved accessibility',
        'Voice automation',
        'Call quality insights',
        'Multi-language support'
      ],
      category: 'Voice AI',
      popular: false,
      icon: Mic
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      icon: Zap
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Risk scoring algorithms',
        'Anomaly detection',
        'Automated alert systems'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time protection',
        'False positive reduction',
        'Compliance ready'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'Machine learning-powered maintenance scheduling to prevent equipment failures and optimize uptime',
      price: '$1,299/month',
      marketPrice: '$2500-8000/month',
      features: [
        'IoT sensor integration',
        'Failure prediction models',
        'Maintenance scheduling optimization',
        'Cost reduction analysis',
        'Real-time monitoring'
      ],
      benefits: [
        'Reduce downtime by 70%',
        'Extend equipment life',
        'Optimize maintenance costs',
        'Prevent catastrophic failures'
      ],
      category: 'Industrial AI',
      popular: false,
      icon: Settings
    },
    {
      id: 'ai-personalization',
      name: 'AI Personalization Engine',
      description: 'Advanced recommendation systems and personalization algorithms for enhanced customer experience',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Real-time recommendations',
        'Customer segmentation',
        'Behavioral analysis',
        'A/B testing automation',
        'Cross-platform personalization'
      ],
      benefits: [
        'Increase conversions by 40%',
        'Improve customer engagement',
        'Higher customer lifetime value',
        'Automated optimization'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and inventory optimization',
      price: '$1,599/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier risk assessment',
        'Cost optimization'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve delivery times',
        'Minimize stockouts',
        'Optimize supplier relationships'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Box
    },
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance using advanced computer vision and machine learning',
      price: '$2,999/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Patient risk assessment',
        'Treatment recommendations',
        'HIPAA compliance'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce diagnostic time',
        'Early disease detection',
        'Better patient outcomes'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Heart
    },
    {
      id: 'ai-financial-modeling',
      name: 'AI Financial Modeling',
      description: 'Advanced financial analysis and modeling using machine learning for investment decisions',
      price: '$899/month',
      marketPrice: '$2000-6000/month',
      features: [
        'Portfolio optimization',
        'Risk assessment',
        'Market prediction',
        'Algorithmic trading',
        'Compliance monitoring'
      ],
      benefits: [
        'Improve investment returns',
        'Reduce financial risk',
        'Automated trading strategies',
        'Real-time market analysis'
      ],
      category: 'Finance',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'ai-quantum-computing',
      name: 'AI Quantum Computing Solutions',
      description: 'Revolutionary quantum computing services for complex optimization problems and advanced simulations',
      price: '$5,999/month',
      marketPrice: '$10000-50000/month',
      features: [
        'Quantum algorithm development',
        'Optimization problem solving',
        'Cryptographic security',
        'Drug discovery simulations',
        'Financial modeling',
        'Climate modeling',
        'Quantum machine learning',
        'Custom quantum applications'
      ],
      benefits: [
        'Exponential computational power',
        'Solve impossible problems',
        'Breakthrough discoveries',
        'Competitive advantage',
        'Future-proof technology'
      ],
      category: 'Quantum Computing',
      popular: false,
      icon: Cpu
    },
    {
      id: 'ai-autonomous-systems',
      name: 'AI Autonomous Systems',
      description: 'Self-governing AI systems for autonomous vehicles, drones, and robotic operations',
      price: '$3,999/month',
      marketPrice: '$8000-25000/month',
      features: [
        'Autonomous vehicle AI',
        'Drone navigation systems',
        'Robotic process automation',
        'Predictive maintenance',
        'Real-time decision making',
        'Sensor fusion',
        'Path planning algorithms',
        'Safety monitoring'
      ],
      benefits: [
        '24/7 autonomous operations',
        'Reduced human error',
        'Increased efficiency',
        'Cost optimization',
        'Scalable automation'
      ],
      category: 'Autonomous Systems',
      popular: true,
      icon: Settings
    },
    {
      id: 'ai-climate-solutions',
      name: 'AI Climate Solutions',
      description: 'Advanced AI systems for climate prediction, carbon tracking, and environmental optimization',
      price: '$2,499/month',
      marketPrice: '$5000-15000/month',
      features: [
        'Climate change modeling',
        'Carbon footprint tracking',
        'Renewable energy optimization',
        'Environmental monitoring',
        'Sustainability analytics',
        'Green technology integration',
        'Emission reduction strategies',
        'Climate risk assessment'
      ],
      benefits: [
        'Accurate climate predictions',
        'Reduced carbon footprint',
        'Sustainable operations',
        'Regulatory compliance',
        'Environmental impact'
      ],
      category: 'Climate AI',
      popular: true,
      icon: Heart
    },
    {
      id: 'ai-drug-discovery',
      name: 'AI Drug Discovery Platform',
      description: 'Revolutionary AI platform for pharmaceutical research and drug development',
      price: '$4,999/month',
      marketPrice: '$10000-30000/month',
      features: [
        'Molecular design',
        'Drug interaction prediction',
        'Clinical trial optimization',
        'Side effect analysis',
        'Biomarker discovery',
        'Personalized medicine',
        'Drug repurposing',
        'Regulatory compliance'
      ],
      benefits: [
        'Faster drug development',
        'Reduced research costs',
        'Higher success rates',
        'Personalized treatments',
        'Life-saving discoveries'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Heart
    },
    {
      id: 'ai-space-technology',
      name: 'AI Space Technology',
      description: 'Advanced AI systems for space exploration, satellite management, and space mission optimization',
      price: '$7,999/month',
      marketPrice: '$15000-50000/month',
      features: [
        'Satellite constellation management',
        'Space mission planning',
        'Orbital mechanics optimization',
        'Space debris tracking',
        'Planetary exploration AI',
        'Space weather prediction',
        'Autonomous spacecraft control',
        'Deep space communication'
      ],
      benefits: [
        'Enhanced space missions',
        'Improved satellite operations',
        'Space debris mitigation',
        'Scientific discoveries',
        'Space industry advancement'
      ],
      category: 'Space Technology',
      popular: false,
      icon: Globe
    },
    {
      id: 'ai-neural-interfaces',
      name: 'AI Neural Interfaces',
      description: 'Cutting-edge brain-computer interface technology for medical and research applications',
      price: '$9,999/month',
      marketPrice: '$20000-100000/month',
      features: [
        'Brain signal processing',
        'Neural pattern recognition',
        'Motor control interfaces',
        'Cognitive enhancement',
        'Medical diagnostics',
        'Rehabilitation support',
        'Research applications',
        'Ethical AI integration'
      ],
      benefits: [
        'Restore lost functions',
        'Enhance human capabilities',
        'Medical breakthroughs',
        'Research advancement',
        'Quality of life improvement'
      ],
      category: 'Neural Technology',
      popular: false,
      icon: Brain
    },
    {
      id: 'ai-3d-generation',
      name: 'AI 3D Generation & Metaverse',
      description: 'Advanced AI for 3D content creation, virtual worlds, and metaverse development',
      price: '$1,999/month',
      marketPrice: '$4000-12000/month',
      features: [
        '3D model generation',
        'Virtual world creation',
        'Avatar generation',
        'Real-time rendering',
        'AR/VR integration',
        'Metaverse development',
        '3D animation AI',
        'Spatial computing'
      ],
      benefits: [
        'Rapid 3D content creation',
        'Immersive experiences',
        'Cost-effective development',
        'Creative possibilities',
        'Metaverse ready'
      ],
      category: '3D Technology',
      popular: true,
      icon: Box
    },
    {
      id: 'ai-accounting-assistant',
      name: 'AI Accounting Assistant',
      description: 'Intelligent accounting and financial management system with automated bookkeeping',
      price: '$299/month',
      marketPrice: '$600-2000/month',
      features: [
        'Automated bookkeeping',
        'Expense categorization',
        'Tax preparation',
        'Financial reporting',
        'Audit support',
        'Compliance monitoring',
        'Invoice processing',
        'Budget forecasting'
      ],
      benefits: [
        'Save 90% accounting time',
        'Reduce errors',
        'Automated compliance',
        'Real-time insights',
        'Cost savings'
      ],
      category: 'Finance',
      popular: true,
      icon: DollarSign
    },
    {
      id: 'ai-agricultural-intelligence',
      name: 'AI Agricultural Intelligence',
      description: 'Smart farming solutions with AI-powered crop monitoring and yield optimization',
      price: '$1,499/month',
      marketPrice: '$3000-8000/month',
      features: [
        'Crop monitoring',
        'Yield prediction',
        'Pest detection',
        'Soil analysis',
        'Weather integration',
        'Irrigation optimization',
        'Harvest planning',
        'Supply chain management'
      ],
      benefits: [
        'Increase crop yields by 30%',
        'Reduce resource waste',
        'Predictive farming',
        'Sustainable agriculture',
        'Food security'
      ],
      category: 'Agriculture',
      popular: false,
      icon: Target
    }
  ];
  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Content', name: 'Content', count: services.filter(s => s.category === 'Content').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: services.filter(s => s.category === 'Computer Vision').length },
    { id: 'Voice AI', name: 'Voice AI', count: services.filter(s => s.category === 'Voice AI').length },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Industrial AI', name: 'Industrial AI', count: services.filter(s => s.category === 'Industrial AI').length },
    { id: 'Marketing', name: 'Marketing', count: services.filter(s => s.category === 'Marketing').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: services.filter(s => s.category === 'Supply Chain').length },
    { id: 'Healthcare', name: 'Healthcare', count: services.filter(s => s.category === 'Healthcare').length },
    { id: 'Finance', name: 'Finance', count: services.filter(s => s.category === 'Finance').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: services.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Autonomous Systems', name: 'Autonomous Systems', count: services.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'Climate AI', name: 'Climate AI', count: services.filter(s => s.category === 'Climate AI').length },
    { id: 'Space Technology', name: 'Space Technology', count: services.filter(s => s.category === 'Space Technology').length },
    { id: 'Neural Technology', name: 'Neural Technology', count: services.filter(s => s.category === 'Neural Technology').length },
    { id: '3D Technology', name: '3D Technology', count: services.filter(s => s.category === '3D Technology').length },
    { id: 'Agriculture', name: 'Agriculture', count: services.filter(s => s.category === 'Agriculture').length }
  ];

  const filteredServices = services.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, analytics, computer vision, automation, and machine learning solutions for your business." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, computer vision, automation" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Transform Your Business with Artificial Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation. 
              Our comprehensive AI services are designed to solve complex business challenges and unlock new opportunities.
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let our AI experts help you choose the right solutions for your business needs. 
                Get a free consultation and see how AI can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
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

export default AiServicesPage;