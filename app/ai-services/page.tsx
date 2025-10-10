'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, BarChart, MessageCircle, Eye, Mic, Workflow, Heart, DollarSign, 
  Globe, Shield, Cpu, Users, FileText, Target, Database, Settings, 
  Calendar, CheckSquare, Monitor, Package, Mail, Phone, MapPin, 
  ArrowRight, Star, Award, Rocket, Sparkles, ExternalLink, CheckCircle,
  Zap, Lock, TrendingUp, Layers, Headphones, Printer, Router, HardDrive
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Real AI Services with actual capabilities and pricing
  const aiServices = [
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing, sentiment analysis, and multi-channel integration',
      icon: MessageCircle,
      price: '$299/month',
      marketPrice: '$500-2000/month',
      category: 'Customer Service',
      features: [
        'Natural language processing (NLP)',
        'Multi-language support (50+ languages)',
        'Sentiment analysis & emotion detection',
        'CRM integration (Salesforce, HubSpot, Pipedrive)',
        'Live chat handoff to human agents',
        'Knowledge base integration',
        'Custom training & fine-tuning',
        'Analytics & performance metrics',
        'Voice & text support',
        'API integration capabilities'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer availability',
        'Instant response times (< 1 second)',
        'Improved customer satisfaction scores',
        'Scalable to handle unlimited conversations',
        'Multi-channel deployment (web, mobile, social)'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/ai-chatbots',
      documentation: 'https://docs.ziontechgroup.com/ai-chatbots',
      supportEmail: 'chatbots@ziontechgroup.com',
      implementationTime: '1-2 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, emails, and marketing materials',
      icon: FileText,
      price: '$199/month',
      marketPrice: '$300-1500/month',
      category: 'Content',
      features: [
        'GPT-4 powered content generation',
        'Blog post & article creation',
        'Social media content (Facebook, Twitter, LinkedIn, Instagram)',
        'Email marketing campaigns',
        'SEO optimization & keyword integration',
        'Brand voice customization',
        'Multi-language content creation',
        'Content calendar management',
        'Plagiarism detection & originality',
        'A/B testing for content performance'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice across all content',
        'SEO-optimized content that ranks higher',
        'Multi-platform publishing automation',
        'Scalable content production',
        'Cost-effective content marketing'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/ai-content-generation',
      documentation: 'https://docs.ziontechgroup.com/ai-content-generation',
      supportEmail: 'content@ziontechgroup.com',
      implementationTime: '3-5 days',
      freeTrial: '14 days'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms for predictive insights',
      icon: BarChart,
      price: '$399/month',
      marketPrice: '$800-3000/month',
      category: 'Analytics',
      features: [
        'Predictive analytics & forecasting',
        'Real-time dashboard creation',
        'Automated report generation',
        'Anomaly detection & alerting',
        'Custom data models & algorithms',
        'Multi-source data integration',
        'Natural language query interface',
        'Advanced data visualization',
        'Machine learning model deployment',
        'ROI & performance optimization'
      ],
      benefits: [
        'Data-driven decision making',
        'Predictive forecasting accuracy up to 95%',
        'Automated reporting saves 20+ hours/week',
        'Identify trends before competitors',
        'Optimize business processes',
        'Reduce manual analysis by 90%'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/ai-data-analytics',
      documentation: 'https://docs.ziontechgroup.com/ai-data-analytics',
      supportEmail: 'analytics@ziontechgroup.com',
      implementationTime: '2-3 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, automation, and medical diagnostics',
      icon: Eye,
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      category: 'Computer Vision',
      features: [
        'Object detection & recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics & processing',
        'Real-time image processing',
        'Medical image analysis',
        'Autonomous vehicle vision',
        'Industrial inspection systems',
        'OCR & document scanning',
        'Custom model training'
      ],
      benefits: [
        'Automated quality control reduces errors by 95%',
        'Enhanced security & surveillance',
        'Real-time monitoring & alerts',
        'Cost reduction through automation',
        'Improved accuracy in medical diagnostics',
        '24/7 visual monitoring capabilities'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/ai-computer-vision',
      documentation: 'https://docs.ziontechgroup.com/ai-computer-vision',
      supportEmail: 'vision@ziontechgroup.com',
      implementationTime: '3-4 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-voice-processing',
      name: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions and accessibility',
      icon: Mic,
      price: '$249/month',
      marketPrice: '$400-1800/month',
      category: 'Voice AI',
      features: [
        'Speech-to-text conversion (99% accuracy)',
        'Text-to-speech synthesis',
        'Voice biometrics & authentication',
        'Call analytics & insights',
        'Multi-language voice support',
        'Real-time transcription',
        'Voice emotion analysis',
        'Automated call routing',
        'Voice command processing',
        'Custom voice model training'
      ],
      benefits: [
        'Improved accessibility for all users',
        'Voice automation reduces manual work',
        'Call quality insights & optimization',
        'Multi-language support for global reach',
        'Enhanced customer experience',
        'Cost-effective voice solutions'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/ai-voice-processing',
      documentation: 'https://docs.ziontechgroup.com/ai-voice-processing',
      supportEmail: 'voice@ziontechgroup.com',
      implementationTime: '1-2 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows with minimal human intervention',
      icon: Workflow,
      price: '$349/month',
      marketPrice: '$600-2500/month',
      category: 'Automation',
      features: [
        'Process mining & discovery',
        'Workflow optimization algorithms',
        'Task automation & orchestration',
        'Exception handling & resolution',
        'Performance monitoring & analytics',
        'Custom workflow creation',
        'Integration with 200+ applications',
        'Machine learning optimization',
        'Error prediction & prevention',
        'Scalable automation architecture'
      ],
      benefits: [
        'Process efficiency improvements up to 70%',
        'Error reduction by 90%',
        'Significant cost savings',
        'Scalable automation across departments',
        'Faster process completion times',
        'Improved compliance & audit trails'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/ai-workflow-automation',
      documentation: 'https://docs.ziontechgroup.com/ai-workflow-automation',
      supportEmail: 'automation@ziontechgroup.com',
      implementationTime: '2-4 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis assistance, drug discovery, patient care optimization, and clinical decision support',
      icon: Heart,
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      category: 'Healthcare',
      features: [
        'Medical image analysis (X-ray, MRI, CT)',
        'Drug discovery algorithms',
        'Patient risk assessment & stratification',
        'Treatment recommendation systems',
        'Clinical trial optimization',
        'Diagnostic assistance & support',
        'Patient monitoring & alerts',
        'Drug interaction checking',
        'Electronic health record integration',
        'HIPAA compliant data processing'
      ],
      benefits: [
        'Improved diagnosis accuracy by 40%',
        'Faster drug development cycles',
        'Better patient outcomes & care',
        'Significant cost reduction in healthcare',
        'Faster treatment decisions',
        'Reduced medical errors & misdiagnosis'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/ai-healthcare',
      documentation: 'https://docs.ziontechgroup.com/ai-healthcare',
      supportEmail: 'healthcare@ziontechgroup.com',
      implementationTime: '4-6 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-financial-services',
      name: 'AI Financial Services',
      description: 'Advanced AI for fraud detection, algorithmic trading, risk management, and financial forecasting',
      icon: DollarSign,
      price: '$699/month',
      marketPrice: '$1200-4000/month',
      category: 'Financial Services',
      features: [
        'Real-time fraud detection algorithms',
        'Algorithmic trading systems',
        'Credit risk assessment & scoring',
        'Market prediction models',
        'Regulatory compliance automation',
        'Investment portfolio optimization',
        'Financial forecasting & planning',
        'Anti-money laundering (AML) detection',
        'Credit scoring & underwriting',
        'Real-time market analysis'
      ],
      benefits: [
        'Reduce fraud losses by 80%',
        'Better trading performance & returns',
        'Improved risk management',
        'Automated compliance reporting',
        'Optimized investment strategies',
        'Real-time financial insights'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/ai-financial-services',
      documentation: 'https://docs.ziontechgroup.com/ai-financial-services',
      supportEmail: 'financial@ziontechgroup.com',
      implementationTime: '3-5 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-ecommerce',
      name: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce optimization with personalized recommendations, pricing, and supply chain management',
      icon: Globe,
      price: '$449/month',
      marketPrice: '$800-2500/month',
      category: 'E-commerce',
      features: [
        'Personalized product recommendations',
        'Dynamic pricing optimization',
        'Inventory management & forecasting',
        'Customer behavior analysis',
        'Conversion rate optimization',
        'Demand forecasting algorithms',
        'Supply chain optimization',
        'Price elasticity analysis',
        'Customer lifetime value prediction',
        'A/B testing automation'
      ],
      benefits: [
        'Increase sales by 35%',
        'Better customer experience & engagement',
        'Optimized pricing strategies',
        'Reduced inventory costs by 30%',
        'Improved delivery times',
        'Better demand planning & forecasting'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/ai-ecommerce',
      documentation: 'https://docs.ziontechgroup.com/ai-ecommerce',
      supportEmail: 'ecommerce@ziontechgroup.com',
      implementationTime: '2-3 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions for threat detection, prevention, and automated incident response',
      icon: Shield,
      price: '$599/month',
      marketPrice: '$1000-3000/month',
      category: 'Cybersecurity',
      features: [
        'Behavioral anomaly detection',
        'Threat intelligence analysis',
        'Automated incident response',
        'Vulnerability assessment & scanning',
        'Security orchestration & automation',
        'Real-time threat monitoring',
        'AI-powered risk scoring',
        'Automated security patching',
        'Network traffic analysis',
        'Malware detection & prevention'
      ],
      benefits: [
        'Proactive threat detection & prevention',
        'Faster incident response times',
        'Reduced security risks by 85%',
        'Automated compliance reporting',
        '24/7 security monitoring',
        'Cost-effective security solutions'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/ai-cybersecurity',
      documentation: 'https://docs.ziontechgroup.com/ai-cybersecurity',
      supportEmail: 'security@ziontechgroup.com',
      implementationTime: '2-4 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-hr-solutions',
      name: 'AI HR Solutions',
      description: 'Intelligent human resources management with AI-powered recruitment, analytics, and workforce optimization',
      icon: Users,
      price: '$299/month',
      marketPrice: '$500-1500/month',
      category: 'Human Resources',
      features: [
        'AI-powered resume screening',
        'Candidate matching algorithms',
        'Employee performance analytics',
        'Predictive attrition modeling',
        'Skills gap analysis',
        'Automated interview scheduling',
        'Employee sentiment analysis',
        'Workforce planning & optimization',
        'Bias detection & mitigation',
        'Talent pipeline management'
      ],
      benefits: [
        'Faster hiring process (50% reduction)',
        'Better candidate-job matching',
        'Reduced HR workload by 60%',
        'Data-driven HR insights',
        'Improved employee retention',
        'Bias-free recruitment processes'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/ai-hr-solutions',
      documentation: 'https://docs.ziontechgroup.com/ai-hr-solutions',
      supportEmail: 'hr@ziontechgroup.com',
      implementationTime: '2-3 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and processing with OCR, NLP, and automated workflows',
      icon: FileText,
      price: '$199/month',
      marketPrice: '$400-1200/month',
      category: 'Document Processing',
      features: [
        'OCR & text extraction (99% accuracy)',
        'Document classification & routing',
        'Data extraction & validation',
        'Contract analysis & review',
        'Invoice processing automation',
        'Compliance checking & validation',
        'Multi-language document support',
        'Automated workflow creation',
        'Document version control',
        'Integration with business systems'
      ],
      benefits: [
        '90% faster document processing',
        'Reduced manual errors by 95%',
        'Automated data entry & validation',
        'Better compliance & audit trails',
        'Cost-effective document management',
        'Scalable document processing'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/ai-document-processing',
      documentation: 'https://docs.ziontechgroup.com/ai-document-processing',
      supportEmail: 'documents@ziontechgroup.com',
      implementationTime: '1-2 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing',
      description: 'Distributed AI processing for real-time decision making at the edge with low latency and offline capability',
      icon: Cpu,
      price: '$549/month',
      marketPrice: '$900-2500/month',
      category: 'Edge Computing',
      features: [
        'Edge AI model deployment',
        'Real-time processing & inference',
        'Low-latency decision making',
        'Offline operation capability',
        'Resource optimization algorithms',
        'IoT device integration',
        'Predictive maintenance AI',
        'Energy efficiency optimization',
        'Distributed model training',
        'Edge-to-cloud synchronization'
      ],
      benefits: [
        'Ultra-low latency processing',
        'Offline operation capability',
        'Reduced bandwidth usage by 70%',
        'Real-time decision making',
        'Improved reliability & uptime',
        'Cost-effective edge solutions'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/ai-edge-computing',
      documentation: 'https://docs.ziontechgroup.com/ai-edge-computing',
      supportEmail: 'edge@ziontechgroup.com',
      implementationTime: '3-4 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-quantum-computing',
      name: 'AI Quantum Computing Solutions',
      description: 'Quantum-enhanced AI algorithms for complex optimization and machine learning problems requiring exponential computational power',
      icon: Brain,
      price: '$2,999/month',
      marketPrice: '$5000-20000/month',
      category: 'Quantum AI',
      features: [
        'Quantum machine learning algorithms',
        'Complex optimization problem solving',
        'Cryptographic security enhancement',
        'Drug discovery acceleration',
        'Financial modeling optimization',
        'Climate simulation & analysis',
        'Quantum neural networks',
        'Hybrid classical-quantum processing',
        'Quantum error correction',
        'Quantum advantage demonstration'
      ],
      benefits: [
        'Exponential speed improvements',
        'Breakthrough problem solving capabilities',
        'Future-proof technology investment',
        'Competitive advantage in research',
        'Revolutionary computational power',
        'Next-generation AI capabilities'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/ai-quantum-computing',
      documentation: 'https://docs.ziontechgroup.com/ai-quantum-computing',
      supportEmail: 'quantum@ziontechgroup.com',
      implementationTime: '6-8 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-autonomous-systems',
      name: 'AI Autonomous Systems',
      description: 'Self-operating AI systems for robotics, autonomous vehicles, and industrial automation with minimal human intervention',
      icon: Cpu,
      price: '$1,499/month',
      marketPrice: '$3000-12000/month',
      category: 'Autonomous Systems',
      features: [
        'Autonomous vehicle AI systems',
        'Robotic process automation (RPA)',
        'Smart manufacturing systems',
        'Predictive maintenance AI',
        'Autonomous drone operations',
        'Smart city infrastructure AI',
        'Industrial IoT integration',
        'Real-time decision making',
        'Safety & compliance monitoring',
        'Adaptive learning algorithms'
      ],
      benefits: [
        '24/7 autonomous operation',
        'Reduced human intervention by 90%',
        'Improved efficiency & productivity',
        'Cost optimization through automation',
        'Enhanced safety & reliability',
        'Scalable autonomous solutions'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/ai-autonomous-systems',
      documentation: 'https://docs.ziontechgroup.com/ai-autonomous-systems',
      supportEmail: 'autonomous@ziontechgroup.com',
      implementationTime: '4-6 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'ai-blockchain',
      name: 'AI Blockchain Solutions',
      description: 'Decentralized AI applications with blockchain integration for secure, transparent, and verifiable operations',
      icon: Shield,
      price: '$899/month',
      marketPrice: '$1500-6000/month',
      category: 'Blockchain AI',
      features: [
        'Decentralized AI model training',
        'Blockchain-based data verification',
        'Smart contract AI integration',
        'Cryptocurrency trading algorithms',
        'NFT generation & analysis',
        'DeFi protocol optimization',
        'Supply chain transparency',
        'Secure multi-party computation',
        'Decentralized data marketplaces',
        'AI governance & consensus'
      ],
      benefits: [
        'Enhanced security & transparency',
        'Decentralized control & ownership',
        'Innovation leadership in Web3',
        'Verifiable AI operations',
        'Reduced single points of failure',
        'Community-driven AI development'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/ai-blockchain',
      documentation: 'https://docs.ziontechgroup.com/ai-blockchain',
      supportEmail: 'blockchain@ziontechgroup.com',
      implementationTime: '4-5 weeks',
      freeTrial: '14 days'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'Customer Service', name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length },
    { id: 'Content', name: 'Content', count: aiServices.filter(s => s.category === 'Content').length },
    { id: 'Analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
    { id: 'Voice AI', name: 'Voice AI', count: aiServices.filter(s => s.category === 'Voice AI').length },
    { id: 'Automation', name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
    { id: 'Healthcare', name: 'Healthcare', count: aiServices.filter(s => s.category === 'Healthcare').length },
    { id: 'Financial Services', name: 'Financial Services', count: aiServices.filter(s => s.category === 'Financial Services').length },
    { id: 'E-commerce', name: 'E-commerce', count: aiServices.filter(s => s.category === 'E-commerce').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: aiServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Human Resources', name: 'Human Resources', count: aiServices.filter(s => s.category === 'Human Resources').length },
    { id: 'Document Processing', name: 'Document Processing', count: aiServices.filter(s => s.category === 'Document Processing').length },
    { id: 'Edge Computing', name: 'Edge Computing', count: aiServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'Quantum AI', name: 'Quantum AI', count: aiServices.filter(s => s.category === 'Quantum AI').length },
    { id: 'Autonomous Systems', name: 'Autonomous Systems', count: aiServices.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'Blockchain AI', name: 'Blockchain AI', count: aiServices.filter(s => s.category === 'Blockchain AI').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
              AI Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Cutting-edge artificial intelligence solutions that transform your business. 
              From chatbots to quantum computing, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">16+</div>
              <div className="text-gray-300">AI Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">14</div>
              <div className="text-gray-300">Day Free Trial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 group ${
                  service.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 5 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 5} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                    {service.benefits.length > 3 && (
                      <li className="text-sm text-cyan-400">
                        +{service.benefits.length - 3} more benefits
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-slate-800/50 rounded-xl">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Implementation:</span>
                      <div className="text-white font-semibold">{service.implementationTime}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Free Trial:</span>
                      <div className="text-green-400 font-semibold">{service.freeTrial}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Try Free Demo
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="flex space-x-2">
                    <a
                      href={service.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-800/50 text-gray-300 py-2 px-4 rounded-xl font-medium hover:bg-slate-700/50 hover:text-white transition-all duration-300 text-center"
                    >
                      Documentation
                    </a>
                    <a
                      href={`mailto:${service.supportEmail}`}
                      className="flex-1 bg-slate-800/50 text-gray-300 py-2 px-4 rounded-xl font-medium hover:bg-slate-700/50 hover:text-white transition-all duration-300 text-center"
                    >
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your AI transformation journey today. All services include 14-day free trial, 
            implementation support, and 24/7 technical assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;