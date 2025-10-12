'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Code, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Lock,
  Cpu,
  Wifi,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Building,
  Heart,
  Car
} from 'lucide-react';

export default function HomePage() {
  const aiServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with GPT-4 and Claude integration for marketing, blogs, and social media',
      price: '$299/month',
      features: ['GPT-4 & Claude integration', 'Multi-language support (50+ languages)', 'SEO optimization', 'Brand voice training', 'Content analytics', 'Plagiarism detection'],
      icon: FileText,
      path: '/ai-content-generator'
    },
    {
      name: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI powered by OpenAI and custom models for customer service automation',
      price: '$499/month',
      features: ['OpenAI GPT-4 integration', '24/7 availability', 'Multi-channel support', 'Sentiment analysis', 'Custom training', 'Voice & text support'],
      icon: MessageSquare,
      path: '/ai-chatbot-enterprise'
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with machine learning predictions and automated insights',
      price: '$399/month',
      features: ['Real-time data processing', 'ML-powered predictions', 'Custom dashboards', 'API integration', 'Automated alerts', 'ROI tracking'],
      icon: BarChart3,
      path: '/ai-analytics-dashboard'
    },
    {
      name: 'AI 3D Generation Studio',
      description: 'Create stunning 3D models, animations, and VR/AR content using advanced AI algorithms',
      price: '$799/month',
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'VR/AR support', 'Motion capture', 'Real-time rendering'],
      icon: Camera,
      path: '/ai-3d-generation'
    },
    {
      name: 'AI Drug Discovery Pro',
      description: 'Accelerate pharmaceutical research with AI-powered molecular analysis and drug design',
      price: '$2,999/month',
      features: ['Molecular modeling', 'Drug interaction analysis', 'Clinical trial optimization', 'Regulatory compliance', 'Protein folding prediction', 'Toxicity assessment'],
      icon: Brain,
      path: '/ai-drug-discovery-pro'
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using machine learning and behavioral analysis',
      price: '$1,299/month',
      features: ['Real-time threat monitoring', 'Behavioral analysis', 'Automated response', 'Compliance reporting', 'Zero-day detection', 'Incident response'],
      icon: Shield,
      path: '/ai-cybersecurity-suite'
    },
    {
      name: 'AI Code Assistant Pro',
      description: 'Intelligent code generation, debugging, and optimization using advanced AI models',
      price: '$199/month',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Documentation generation', 'Code review', 'Multi-language support'],
      icon: Code,
      path: '/ai-code-assistant'
    },
    {
      name: 'AI Document Intelligence',
      description: 'Automated document processing, extraction, and analysis using OCR and NLP technologies',
      price: '$149/month',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Contract analysis', 'Invoice processing', 'Compliance checking'],
      icon: FileText,
      path: '/ai-document-intelligence'
    },
    {
      name: 'AI Climate Prediction Engine',
      description: 'Advanced climate modeling and weather prediction using machine learning and satellite data',
      price: '$1,999/month',
      features: ['Weather forecasting', 'Climate modeling', 'Satellite data analysis', 'Risk assessment', 'Agricultural insights', 'Disaster prediction'],
      icon: Globe,
      path: '/ai-climate-prediction-engine'
    }
  ];

  const itServices = [
    {
      name: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud Platform with zero downtime',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Multi-cloud strategy', 'Data security & encryption', 'Performance optimization', '24/7 support', 'Cost optimization'],
      icon: Cloud,
      path: '/cloud-migration'
    },
    {
      name: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines and infrastructure automation',
      price: 'Starting at $3,500',
      features: ['CI/CD pipeline setup', 'Infrastructure as code', 'Container orchestration', 'Monitoring & alerting', 'Team training', 'Security integration'],
      icon: Code,
      path: '/devops-solutions'
    },
    {
      name: 'Cybersecurity Services',
      description: 'Comprehensive security assessment, implementation, and ongoing protection',
      price: 'Starting at $2,500',
      features: ['Security audit & assessment', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring', 'Incident response', 'Security training'],
      icon: Shield,
      path: '/cybersecurity'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern frameworks',
      price: 'Starting at $8,000',
      features: ['iOS & Android native', 'React Native & Flutter', 'App store optimization', 'Push notifications', 'Analytics integration', 'Maintenance support'],
      icon: Smartphone,
      path: '/mobile-development'
    },
    {
      name: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and testing',
      price: 'Starting at $4,000',
      features: ['REST & GraphQL APIs', 'Comprehensive documentation', 'Rate limiting & throttling', 'API testing suite', 'Analytics dashboard', 'Version management'],
      icon: Database,
      path: '/api-development'
    },
    {
      name: 'Database Management',
      description: 'Database design, optimization, and maintenance services for all major databases',
      price: 'Starting at $1,500',
      features: ['Performance tuning', 'Backup & recovery strategies', 'Security hardening', 'Migration support', 'Query optimization', 'Scalability planning'],
      icon: Database,
      path: '/database-management'
    },
    {
      name: 'Blockchain Solutions',
      description: 'Custom blockchain development, smart contracts, and DeFi applications',
      price: 'Starting at $15,000',
      features: ['Smart contract development', 'DeFi applications', 'NFT marketplace', 'Token development', 'Blockchain integration', 'Security auditing'],
      icon: Shield,
      path: '/blockchain-solutions'
    },
    {
      name: 'IoT Development',
      description: 'Internet of Things solutions with edge computing and real-time analytics',
      price: 'Starting at $12,000',
      features: ['IoT device development', 'Edge computing', 'Real-time analytics', 'Data visualization', 'Remote monitoring', 'Predictive maintenance'],
      icon: Wifi,
      path: '/iot-development'
    },
    {
      name: 'Quantum Computing Services',
      description: 'Quantum algorithm development and quantum computing integration',
      price: 'Starting at $25,000',
      features: ['Quantum algorithm design', 'Quantum simulation', 'Optimization problems', 'Cryptography solutions', 'Research collaboration', 'Quantum education'],
      icon: Cpu,
      path: '/quantum-computing'
    }
  ];

  const microSaasServices = [
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights and automation',
      price: '$99/month',
      features: ['AI lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Integration APIs', 'Customer segmentation', 'Revenue optimization'],
      icon: Users,
      path: '/ai-crm'
    },
    {
      name: 'Smart Analytics Platform',
      description: 'Business intelligence with AI-powered insights, reporting, and predictive analytics',
      price: '$149/month',
      features: ['Custom dashboards', 'Predictive analytics', 'Data visualization', 'Export capabilities', 'Real-time alerts', 'ROI tracking'],
      icon: TrendingUp,
      path: '/smart-analytics'
    },
    {
      name: 'Automated Testing Suite',
      description: 'AI-driven automated testing for web and mobile applications with intelligent test generation',
      price: '$199/month',
      features: ['Cross-browser testing', 'Performance testing', 'API testing', 'Test reporting', 'Self-healing tests', 'Visual regression testing'],
      icon: Cpu,
      path: '/ai-automated-testing'
    },
    {
      name: 'Content Management System',
      description: 'AI-enhanced CMS with intelligent content optimization and SEO automation',
      price: '$79/month',
      features: ['SEO optimization', 'Content scheduling', 'Multi-language support', 'Analytics integration', 'AI content suggestions', 'Performance monitoring'],
      icon: FileText,
      path: '/ai-content-management'
    },
    {
      name: 'Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization, A/B testing, and advanced analytics',
      price: '$129/month',
      features: ['A/B testing', 'Behavioral triggers', 'Deliverability optimization', 'ROI tracking', 'Personalization engine', 'List segmentation'],
      icon: Mail,
      path: '/ai-email-marketing'
    },
    {
      name: 'Social Media Manager',
      description: 'AI-powered social media management with content creation and engagement optimization',
      price: '$89/month',
      features: ['Multi-platform posting', 'AI content suggestions', 'Engagement analytics', 'Hashtag optimization', 'Influencer tracking', 'Trend analysis'],
      icon: MessageSquare,
      path: '/ai-social-media-manager'
    },
    {
      name: 'AI Project Management',
      description: 'Intelligent project management with AI-powered resource allocation and timeline optimization',
      price: '$159/month',
      features: ['AI resource allocation', 'Timeline optimization', 'Risk assessment', 'Team collaboration', 'Progress tracking', 'Budget management'],
      icon: BarChart3,
      path: '/ai-project-management'
    },
    {
      name: 'Smart Inventory Management',
      description: 'AI-powered inventory optimization with demand forecasting and automated reordering',
      price: '$179/month',
      features: ['Demand forecasting', 'Automated reordering', 'Inventory optimization', 'Supplier management', 'Cost analysis', 'Multi-location support'],
      icon: Database,
      path: '/smart-inventory'
    },
    {
      name: 'AI Customer Support',
      description: 'Intelligent customer support with automated ticket routing and response generation',
      price: '$119/month',
      features: ['Automated ticket routing', 'AI response generation', 'Knowledge base', 'Multi-channel support', 'Sentiment analysis', 'Performance metrics'],
      icon: MessageSquare,
      path: '/ai-customer-support'
    },
    {
      name: 'Financial Analytics Suite',
      description: 'AI-powered financial analysis with fraud detection and investment insights',
      price: '$249/month',
      features: ['Fraud detection', 'Investment insights', 'Financial forecasting', 'Risk assessment', 'Compliance monitoring', 'Automated reporting'],
      icon: TrendingUp,
      path: '/financial-analytics'
    },
    {
      name: 'AI HR Management',
      description: 'Intelligent human resources management with recruitment automation and performance analytics',
      price: '$199/month',
      features: ['Resume screening', 'Candidate matching', 'Performance analytics', 'Employee engagement', 'Training recommendations', 'Compliance tracking'],
      icon: Users,
      path: '/ai-hr-management'
    },
    {
      name: 'Smart E-commerce Platform',
      description: 'AI-powered e-commerce solution with personalized recommendations and dynamic pricing',
      price: '$299/month',
      features: ['Personalized recommendations', 'Dynamic pricing', 'Inventory management', 'Customer analytics', 'Payment processing', 'Multi-channel selling'],
      icon: Globe,
      path: '/smart-ecommerce'
    }
  ];

  const fiveGServices = [
    {
      name: '5G Network Infrastructure',
      description: 'Complete 5G network design, implementation, and optimization for enterprise and carrier networks',
      price: 'Starting at $50,000',
      features: ['Network planning & design', 'Equipment installation', 'Performance optimization', 'Maintenance support', 'Security implementation', 'Compliance certification'],
      icon: Wifi,
      path: '/5g-network-infrastructure'
    },
    {
      name: '5G Edge Computing',
      description: 'Edge computing solutions for ultra-low latency applications and real-time processing',
      price: 'Starting at $25,000',
      features: ['Edge server deployment', 'Latency optimization', 'Data processing', 'Monitoring tools', 'Load balancing', 'Failover systems'],
      icon: Cpu,
      path: '/5g-edge-computing'
    },
    {
      name: '5G IoT Solutions',
      description: 'Internet of Things implementation with 5G connectivity and real-time analytics',
      price: 'Starting at $15,000',
      features: ['Device integration', 'Data collection', 'Real-time monitoring', 'Analytics dashboard', 'Predictive maintenance', 'Remote management'],
      icon: Globe,
      path: '/5g-iot-solutions'
    },
    {
      name: '5G Private Networks',
      description: 'Dedicated 5G private networks for enterprise and industrial applications',
      price: 'Starting at $75,000',
      features: ['Private network setup', 'Dedicated spectrum', 'Custom security', 'Industrial applications', 'Low latency optimization', '24/7 monitoring'],
      icon: Shield,
      path: '/5g-private-networks'
    },
    {
      name: '5G Mobile Applications',
      description: 'Next-generation mobile applications leveraging 5G capabilities',
      price: 'Starting at $30,000',
      features: ['AR/VR applications', 'Real-time streaming', 'Ultra-low latency', 'High bandwidth utilization', 'Edge integration', 'Cross-platform support'],
      icon: Smartphone,
      path: '/5g-mobile-applications'
    },
    {
      name: '5G Data Analytics',
      description: 'Advanced data analytics platform for 5G network optimization and insights',
      price: 'Starting at $20,000',
      features: ['Network analytics', 'Performance monitoring', 'Predictive insights', 'Real-time dashboards', 'Automated optimization', 'Custom reporting'],
      icon: BarChart3,
      path: '/5g-data-analytics'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Phone }
  ];

  const newServices = [
    {
      name: 'AI-Powered Agriculture',
      description: 'Smart farming solutions with IoT sensors, drone monitoring, and crop optimization',
      price: 'Starting at $5,000',
      features: ['IoT sensor networks', 'Drone monitoring', 'Crop optimization', 'Weather prediction', 'Yield forecasting', 'Automated irrigation'],
      icon: Globe,
      path: '/ai-agriculture'
    },
    {
      name: 'Smart City Solutions',
      description: 'Comprehensive smart city infrastructure with traffic management and energy optimization',
      price: 'Starting at $100,000',
      features: ['Traffic management', 'Energy optimization', 'Waste management', 'Public safety', 'Environmental monitoring', 'Citizen services'],
      icon: Building,
      path: '/smart-city'
    },
    {
      name: 'AI Healthcare Platform',
      description: 'Advanced healthcare solutions with medical imaging, diagnosis assistance, and patient monitoring',
      price: 'Starting at $15,000',
      features: ['Medical imaging AI', 'Diagnosis assistance', 'Patient monitoring', 'Drug discovery', 'Clinical trials', 'Telemedicine'],
      icon: Heart,
      path: '/ai-healthcare'
    },
    {
      name: 'Autonomous Vehicle Systems',
      description: 'Self-driving vehicle technology with computer vision and sensor fusion',
      price: 'Starting at $50,000',
      features: ['Computer vision', 'Sensor fusion', 'Path planning', 'Obstacle detection', 'Real-time processing', 'Safety systems'],
      icon: Car,
      path: '/autonomous-vehicles'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. Transform your business with cutting-edge technology from Zion Tech Group." />
        <meta name="keywords" content="AI solutions, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading the future of technology with advanced AI solutions, comprehensive IT services, 
                5G implementation, and innovative micro SAAS platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/ai-services"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Explore AI Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  AI Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations and drive innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-purple-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions to modernize your infrastructure and accelerate digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, scalable micro SAAS platforms designed to streamline your business processes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-green-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5G Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  5G Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Next-generation 5G infrastructure and applications for ultra-fast connectivity and edge computing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Innovative Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technology solutions for the future of business and society.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {newServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-orange-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to learn more about our services and how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}