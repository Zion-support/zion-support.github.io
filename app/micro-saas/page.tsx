'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
<<<<<<< HEAD
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Search, Filter, ExternalLink, Users, Mail, DollarSign, Eye, Globe, Code } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const microSaasTools = [
    {
      title: 'Zion AI Content Studio Pro',
      description: 'Advanced AI-powered content creation platform with GPT-4 integration, brand voice training, and multi-channel publishing.',
      features: ['GPT-4 & Claude Integration', 'Brand Voice AI Training', 'Multi-language Support (50+ languages)', 'SEO Optimization Engine', 'Content Calendar & Scheduling', 'Plagiarism Detection', 'A/B Testing Tools', 'Social Media Auto-Posting'],
      price: '$89/month',
      marketPrice: '$200-500/month',
      benefits: ['Save 80% content creation time', 'Increase engagement by 300%', 'SEO-optimized content', 'Multi-platform publishing'],
      icon: Zap,
      category: 'content',
      link: 'https://ziontechgroup.com/zion-ai-content-studio-pro'
    },
    {
      title: 'Zion Analytics Intelligence',
      description: 'Real-time business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
      features: ['Real-time Data Visualization', 'AI Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Anomaly Detection', 'ROI Tracking', 'White-label Solutions'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Data-driven decision making', 'Predictive insights', 'Automated reporting', 'Custom dashboards'],
      icon: Star,
      category: 'analytics',
      link: 'https://ziontechgroup.com/zion-analytics-intelligence'
    },
    {
      title: 'Zion Security Shield Pro',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection, automated response, and compliance management.',
      features: ['AI Threat Detection', 'Real-time Monitoring', 'Automated Incident Response', 'Compliance Management (SOC2, GDPR, HIPAA)', 'Vulnerability Scanning', 'Security Training Modules', 'Penetration Testing', '24/7 Security Operations Center'],
      price: '$199/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce security incidents by 95%', 'Automated threat response', 'Compliance assurance', '24/7 monitoring'],
      icon: Shield,
      category: 'security',
      link: 'https://ziontechgroup.com/zion-security-shield-pro'
    },
    {
      title: 'Zion Project Master AI',
      description: 'AI-powered project management with intelligent resource allocation, risk prediction, and automated workflow optimization.',
      features: ['AI Resource Optimization', 'Risk Prediction & Mitigation', 'Automated Task Assignment', 'Time Tracking & Billing', 'Team Collaboration Tools', 'Gantt Chart Automation', 'Budget Forecasting', 'Client Portal Integration'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increase project success rate by 40%', 'Automated resource allocation', 'Risk mitigation', 'Improved team productivity'],
      icon: Clock,
      category: 'productivity',
      link: 'https://ziontechgroup.com/zion-project-master-ai'
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with predictive lead scoring, automated follow-ups, and intelligent sales forecasting.',
      features: ['AI Lead Scoring', 'Automated Follow-up Sequences', 'Sales Forecasting', 'Customer Journey Mapping', 'Email Integration', 'Call Recording & Analysis', 'Pipeline Management', 'Revenue Optimization'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase sales by 35%', 'Automated lead nurturing', 'Better conversion rates', 'Revenue optimization'],
      icon: Users,
      category: 'sales',
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    },
    {
      title: 'Zion Email Automation Pro',
      description: 'Advanced email marketing platform with AI-powered personalization, A/B testing, and behavioral triggers.',
      features: ['AI Personalization Engine', 'Advanced A/B Testing', 'Behavioral Trigger Automation', 'Email Template Builder', 'List Segmentation', 'Deliverability Optimization', 'Analytics & Reporting', 'Integration with 100+ tools'],
      price: '$69/month',
      marketPrice: '$150-500/month',
      benefits: ['Increase open rates by 250%', 'Automated personalization', 'Better deliverability', 'Advanced analytics'],
      icon: Mail,
      category: 'marketing',
      link: 'https://ziontechgroup.com/zion-email-automation-pro'
    },
    {
      title: 'Zion Invoice Genius AI',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial insights.',
      features: ['AI Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking & Reminders', 'Tax Calculation & Filing', 'Client Portal', 'Financial Reporting', 'Integration with Accounting Software'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays by 60%', 'Automated tax calculations', 'Professional invoices'],
      icon: DollarSign,
      category: 'finance',
      link: 'https://ziontechgroup.com/zion-invoice-genius-ai'
    },
    {
      title: 'Zion AI Video Editor Pro',
      description: 'AI-powered video editing platform with automatic editing, voice synthesis, and multi-format export.',
      features: ['AI Auto-Editing', 'Voice Synthesis & Dubbing', 'Multi-format Export', 'Template Library', 'Color Correction AI', 'Audio Enhancement', 'Subtitle Generation', 'Cloud Rendering'],
      price: '$89/month',
      marketPrice: '$200-600/month',
      benefits: ['Save 70% editing time', 'Professional quality output', 'Automated editing', 'Multi-format support'],
      icon: Eye,
      category: 'video',
      link: 'https://ziontechgroup.com/zion-ai-video-editor-pro'
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with real-time translation, context understanding, and industry-specific terminology.',
      features: ['Real-time Translation', 'Context-Aware Translation', 'Industry-Specific Terminology', 'Voice Translation', 'Document Translation', 'Website Translation', 'API Integration', 'Quality Assurance'],
      price: '$79/month',
      marketPrice: '$150-500/month',
      benefits: ['99.5% translation accuracy', 'Real-time translation', 'Industry-specific terms', 'Multi-format support'],
      icon: Globe,
      category: 'translation',
      link: 'https://ziontechgroup.com/zion-ai-translator-pro'
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated bug detection, security analysis, and performance optimization suggestions.',
      features: ['Automated Bug Detection', 'Security Vulnerability Scanning', 'Performance Optimization', 'Code Quality Metrics', 'Best Practice Suggestions', 'Multi-language Support', 'Integration with Git', 'Team Collaboration'],
      price: '$99/month',
      marketPrice: '$200-800/month',
      benefits: ['Reduce bugs by 80%', 'Improve code quality', 'Security vulnerability detection', 'Performance optimization'],
      icon: Code,
      category: 'development',
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer'
    },
    {
      title: 'Zion AI Customer Insights',
      description: 'Advanced customer analytics platform with sentiment analysis, churn prediction, and personalized recommendations.',
      features: ['Sentiment Analysis', 'Churn Prediction', 'Customer Segmentation', 'Personalized Recommendations', 'Behavioral Analytics', 'Survey Analysis', 'NPS Tracking', 'ROI Measurement'],
      price: '$119/month',
      marketPrice: '$250-700/month',
      benefits: ['Increase customer retention by 40%', 'Predict customer churn', 'Personalized experiences', 'Data-driven insights'],
      icon: Users,
      category: 'analytics',
      link: 'https://ziontechgroup.com/zion-ai-customer-insights'
    },
    {
      title: 'Zion AI Climate Tracker',
      description: 'AI-powered climate monitoring and sustainability optimization platform for businesses.',
      features: ['Carbon Footprint Tracking', 'Sustainability Reporting', 'Environmental Impact Analysis', 'Green Energy Optimization', 'ESG Compliance Monitoring', 'Climate Risk Assessment', 'Sustainability Goal Tracking', 'Automated Reporting'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce environmental impact', 'Achieve sustainability goals', 'Comply with regulations', 'Improve brand reputation'],
      icon: Globe,
      category: 'sustainability',
      link: 'https://ziontechgroup.com/zion-ai-climate-tracker'
    },
    {
      title: 'Zion AI Quantum Optimizer',
      description: 'Quantum-enhanced optimization platform for complex business problems and resource allocation.',
      features: ['Quantum Algorithm Integration', 'Complex Optimization Problems', 'Resource Allocation Optimization', 'Supply Chain Optimization', 'Portfolio Optimization', 'Scheduling Optimization', 'Route Optimization', 'Cost Minimization'],
      price: '$299/month',
      marketPrice: '$600-2000/month',
      benefits: ['Solve complex optimization problems', 'Exponential computational speedup', 'Better resource utilization', 'Competitive advantage'],
      icon: Cpu,
      category: 'optimization',
      link: 'https://ziontechgroup.com/zion-ai-quantum-optimizer'
    },
    {
      title: 'Zion AI Metaverse Builder',
      description: 'Comprehensive platform for creating and managing virtual worlds and metaverse experiences.',
      features: ['Virtual World Creation', 'Avatar Management', '3D Asset Library', 'Real-time Collaboration', 'Virtual Economy Management', 'Cross-platform Integration', 'AI-powered NPCs', 'Event Management'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Create immersive experiences', 'Engage users in virtual worlds', 'Monetize virtual environments', 'Future-ready platform'],
      icon: Monitor,
      category: 'metaverse',
      link: 'https://ziontechgroup.com/zion-ai-metaverse-builder'
    },
    {
      title: 'Zion AI Neural Interface',
      description: 'Advanced brain-computer interface platform for enhanced human-AI interaction.',
      features: ['Neural Signal Processing', 'Brain-Computer Interface', 'Cognitive Enhancement', 'Medical Applications', 'Real-time Neural Feedback', 'Custom Interface Design', 'Research Tools', 'Safety Monitoring'],
      price: '$499/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Revolutionary human-AI interaction', 'Medical breakthrough potential', 'Enhanced cognitive capabilities', 'Future technology leadership'],
      icon: Brain,
      category: 'neural',
      link: 'https://ziontechgroup.com/zion-ai-neural-interface'
    },
    {
      title: 'Zion AI Space Analytics',
      description: 'AI-powered space technology platform for satellite management and space data analysis.',
      features: ['Satellite Constellation Management', 'Space Debris Tracking', 'Earth Observation Analysis', 'Space Weather Prediction', 'Mission Planning', 'Autonomous Control', 'Space Resource Utilization', 'Planetary Exploration'],
      price: '$399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Enhanced space operations', 'Improved mission success rates', 'Cost-effective space solutions', 'Advanced space analytics'],
      icon: Globe,
      category: 'space',
      link: 'https://ziontechgroup.com/zion-ai-space-analytics'
    },
    {
      title: 'Zion AI Drug Discovery',
      description: 'AI-powered pharmaceutical research platform for drug discovery and molecular design.',
      features: ['Molecular Design', 'Drug-Target Interaction Prediction', 'ADMET Property Prediction', 'Chemical Synthesis Planning', 'Clinical Trial Optimization', 'Regulatory Compliance', 'Patent Analysis', 'Collaborative Research'],
      price: '$599/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Accelerate drug development', 'Reduce research costs', 'Improve success rates', 'Faster time to market'],
      icon: Heart,
      category: 'pharmaceutical',
      link: 'https://ziontechgroup.com/zion-ai-drug-discovery'
    },
    {
      title: 'Zion AI Robotics Controller',
      description: 'Intelligent robotics control platform for autonomous systems and robotic process automation.',
      features: ['Autonomous Robot Control', 'Computer Vision Integration', 'RPA Implementation', 'Human-Robot Collaboration', 'Predictive Maintenance', 'Custom Robotic Solutions', 'Performance Optimization', 'Safety Monitoring'],
      price: '$249/month',
      marketPrice: '$500-2000/month',
      benefits: ['Increased automation efficiency', 'Reduced operational costs', 'Improved safety', 'Scalable robotic solutions'],
      icon: Settings,
      category: 'robotics',
      link: 'https://ziontechgroup.com/zion-ai-robotics-controller'
    },
    {
      title: 'Zion AI Ethics Monitor',
      description: 'Comprehensive AI ethics and governance platform ensuring responsible AI deployment.',
      features: ['AI Bias Detection', 'Ethical Framework Implementation', 'Algorithmic Auditing', 'Transparency Tools', 'Compliance Monitoring', 'Ethical Decision Support', 'Impact Assessment', 'Continuous Monitoring'],
      price: '$179/month',
      marketPrice: '$350-1000/month',
      benefits: ['Ensure responsible AI use', 'Build trust with stakeholders', 'Comply with regulations', 'Mitigate AI risks'],
      icon: Shield,
      category: 'ethics',
      link: 'https://ziontechgroup.com/zion-ai-ethics-monitor'
    },
    {
      title: 'Zion AI FinTech Pro',
      description: 'Advanced AI platform for financial services including DeFi, crypto, and digital banking.',
      features: ['DeFi Protocol Optimization', 'Cryptocurrency Trading Algorithms', 'Digital Banking Automation', 'Risk Assessment', 'Fraud Detection', 'Regulatory Compliance', 'Smart Contract Development', 'Cross-chain Integration'],
      price: '$349/month',
      marketPrice: '$700-2500/month',
      benefits: ['Enhanced financial services', 'Improved security and compliance', 'Automated financial processes', 'Competitive advantage'],
      icon: TrendingUp,
      category: 'fintech',
      link: 'https://ziontechgroup.com/zion-ai-fintech-pro'
    },
    {
      title: 'Zion AI Education Pro',
      description: 'Revolutionary AI-powered personalized learning platform for educational institutions.',
      features: ['Personalized Learning Paths', 'Adaptive Content Delivery', 'Student Performance Analytics', 'Automated Assessment', 'Learning Style Optimization', 'Parent Dashboards', 'Curriculum Optimization', 'Accessibility Features'],
      price: '$129/month',
      marketPrice: '$250-800/month',
      benefits: ['Improve learning outcomes', 'Personalize education experience', 'Reduce administrative burden', 'Enhance student engagement'],
      icon: Users,
      category: 'education',
      link: 'https://ziontechgroup.com/zion-ai-education-pro'
    },
    {
      title: 'Zion AI Agriculture Pro',
      description: 'Advanced AI solutions for precision agriculture and sustainable farming.',
      features: ['Crop Monitoring', 'Precision Irrigation', 'Pest Detection', 'Yield Prediction', 'Soil Analysis', 'Weather Analysis', 'Automated Equipment', 'Supply Chain Optimization'],
      price: '$199/month',
      marketPrice: '$400-1500/month',
      benefits: ['Increase crop yields', 'Reduce resource waste', 'Improve sustainability', 'Optimize farming operations'],
      icon: Zap,
      category: 'agriculture',
      link: 'https://ziontechgroup.com/zion-ai-agriculture-pro'
    },
    {
      title: 'Zion AI Energy Grid',
      description: 'Intelligent energy grid optimization and smart energy management platform.',
      features: ['Smart Grid Optimization', 'Energy Demand Forecasting', 'Renewable Energy Integration', 'Grid Stability Monitoring', 'Energy Storage Optimization', 'Peak Load Management', 'Distributed Energy Management', 'Real-time Analytics'],
      price: '$279/month',
      marketPrice: '$550-2000/month',
      benefits: ['Optimize energy distribution', 'Reduce energy costs', 'Improve grid reliability', 'Support renewable integration'],
      icon: Zap,
      category: 'energy',
      link: 'https://ziontechgroup.com/zion-ai-energy-grid'
    },
    {
      title: 'Zion AI Financial Crime',
      description: 'Advanced AI system for detecting and preventing financial crimes and money laundering.',
      features: ['Real-time Transaction Monitoring', 'Money Laundering Detection', 'Sanctions Screening', 'KYC/AML Automation', 'Risk Scoring', 'Regulatory Reporting', 'Cross-border Analysis', 'ML Model Updates'],
      price: '$399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Detect financial crimes early', 'Ensure regulatory compliance', 'Reduce false positives', 'Protect financial institutions'],
      icon: Shield,
      category: 'security',
      link: 'https://ziontechgroup.com/zion-ai-financial-crime'
    },
    {
      title: 'Zion AI 3D Generator',
      description: 'Revolutionary AI platform for 3D content creation, models, and virtual environments.',
      features: ['3D Model Generation', 'Texture Application', 'Animation Generation', 'Virtual Environment Creation', 'Asset Optimization', 'Game Engine Integration', 'AR/VR Content', 'Custom Pipeline Development'],
      price: '$229/month',
      marketPrice: '$450-1800/month',
      benefits: ['Reduce 3D creation time by 90%', 'Lower production costs', 'Faster prototyping', 'Enhanced creative capabilities'],
      icon: Box,
      category: '3d',
      link: 'https://ziontechgroup.com/zion-ai-3d-generator'
    },
    {
      title: 'Zion AI Multimodal',
      description: 'Advanced AI assistant processing text, images, audio, and video for comprehensive automation.',
      features: ['Multimodal Processing', 'Cross-modal Understanding', 'Real-time Interactions', 'Custom Model Training', 'API Integration', 'Conversation Management', 'Context-aware Responses', 'Multi-language Support'],
      price: '$179/month',
      marketPrice: '$350-1200/month',
      benefits: ['Unified AI experience', 'Enhanced user interactions', 'Comprehensive automation', 'Future-proof technology'],
      icon: Brain,
      category: 'multimodal',
      link: 'https://ziontechgroup.com/zion-ai-multimodal'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Tools', count: microSaasTools.length },
    { id: 'content', name: 'Content & Marketing', count: microSaasTools.filter(t => t.category === 'content').length },
    { id: 'analytics', name: 'Analytics & BI', count: microSaasTools.filter(t => t.category === 'analytics').length },
    { id: 'security', name: 'Security', count: microSaasTools.filter(t => t.category === 'security').length },
    { id: 'productivity', name: 'Productivity', count: microSaasTools.filter(t => t.category === 'productivity').length },
    { id: 'sales', name: 'Sales & CRM', count: microSaasTools.filter(t => t.category === 'sales').length },
    { id: 'marketing', name: 'Marketing', count: microSaasTools.filter(t => t.category === 'marketing').length },
    { id: 'finance', name: 'Finance', count: microSaasTools.filter(t => t.category === 'finance').length },
    { id: 'social', name: 'Social Media', count: microSaasTools.filter(t => t.category === 'social').length },
    { id: 'video', name: 'Video & Media', count: microSaasTools.filter(t => t.category === 'video').length },
    { id: 'translation', name: 'Translation', count: microSaasTools.filter(t => t.category === 'translation').length },
    { id: 'development', name: 'Development', count: microSaasTools.filter(t => t.category === 'development').length },
    { id: 'sustainability', name: 'Sustainability', count: microSaasTools.filter(t => t.category === 'sustainability').length },
    { id: 'optimization', name: 'Optimization', count: microSaasTools.filter(t => t.category === 'optimization').length },
    { id: 'metaverse', name: 'Metaverse', count: microSaasTools.filter(t => t.category === 'metaverse').length },
    { id: 'neural', name: 'Neural AI', count: microSaasTools.filter(t => t.category === 'neural').length },
    { id: 'space', name: 'Space Technology', count: microSaasTools.filter(t => t.category === 'space').length },
    { id: 'pharmaceutical', name: 'Pharmaceutical', count: microSaasTools.filter(t => t.category === 'pharmaceutical').length },
    { id: 'robotics', name: 'Robotics', count: microSaasTools.filter(t => t.category === 'robotics').length },
    { id: 'ethics', name: 'AI Ethics', count: microSaasTools.filter(t => t.category === 'ethics').length },
    { id: 'fintech', name: 'FinTech', count: microSaasTools.filter(t => t.category === 'fintech').length },
    { id: 'education', name: 'Education', count: microSaasTools.filter(t => t.category === 'education').length },
    { id: 'agriculture', name: 'Agriculture', count: microSaasTools.filter(t => t.category === 'agriculture').length },
    { id: 'energy', name: 'Energy', count: microSaasTools.filter(t => t.category === 'energy').length },
    { id: '3d', name: '3D & AR/VR', count: microSaasTools.filter(t => t.category === '3d').length },
    { id: 'multimodal', name: 'Multimodal AI', count: microSaasTools.filter(t => t.category === 'multimodal').length }
  ]

  const filteredTools = microSaasTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  })

  const features = [
    {
      title: 'Rapid Deployment',
      description: 'Get your micro SaaS solution up and running in days, not months.',
      icon: Zap
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.',
      icon: Star
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI to provide intelligent features and automation.',
      icon: CheckCircle
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security and compliance built-in from day one.',
      icon: Shield
    }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems with AI-powered tools and rapid deployment." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, SaaS solutions, productivity tools" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business problems with AI-powered intelligence and rapid deployment.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredTools.map((tool, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group cyber-card-enhanced">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{tool.price}</div>
                      {tool.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{tool.marketPrice}</div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{tool.title}</h3>                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tool.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {tool.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </a>                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Micro SaaS Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center cyber-card-enhanced">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our ready-made solutions or let us build a custom micro SaaS tool for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default MicroSaasPage