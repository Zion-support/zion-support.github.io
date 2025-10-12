<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-e082
'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, Clock, Award, TrendingUp,
  Cpu, Database, Globe, Smartphone, Lock, Workflow, Sparkles
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom ML models', 'Data visualization'],
      benefits: ['40% increase in decision speed', '25% cost reduction', '99.9% accuracy'],
      link: '/ai-analytics',
      category: 'analytics'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'AI Chatbot & Conversational AI',
      description: 'Intelligent chatbots that understand context and provide human-like interactions.',
      price: 'Starting at $1,499/month',
      features: ['Natural language processing', 'Multi-language support', 'Voice integration', '24/7 availability'],
      benefits: ['80% reduction in support tickets', '60% faster response time', '95% customer satisfaction'],
      link: '/ai-chatbot-builder',
      category: 'conversational'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms.',
      price: 'Starting at $3,999/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      benefits: ['99.8% threat detection rate', '50% faster incident response', 'Zero false positives'],
      link: '/ai-cybersecurity',
      category: 'security'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-400" />,
      title: 'AI Computer Vision',
      description: 'Image and video analysis for quality control, surveillance, and automation.',
      price: 'Starting at $2,499/month',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Real-time processing'],
      benefits: ['90% accuracy improvement', '70% faster processing', '24/7 monitoring'],
      link: '/ai-computer-vision',
      category: 'vision'
    },
    {
      icon: <Mic className="w-8 h-8 text-yellow-400" />,
      title: 'AI Voice Solutions',
      description: 'Speech recognition, synthesis, and voice-controlled applications.',
      price: 'Starting at $1,999/month',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support'],
      benefits: ['95% accuracy rate', 'Real-time processing', 'Custom voice models'],
      link: '/ai-voice-solutions',
      category: 'voice'
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      price: 'Starting at $999/month',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'SEO optimization'],
      benefits: ['10x content production', 'Consistent brand voice', 'SEO optimized'],
      link: '/ai-content-generation',
      category: 'content'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: 'AI Customer Service',
      description: 'Intelligent customer support with sentiment analysis and automated responses.',
      price: 'Starting at $1,799/month',
      features: ['Sentiment analysis', 'Ticket routing', 'Knowledge base', 'Escalation management'],
      benefits: ['85% first-call resolution', '50% cost reduction', '24/7 availability'],
      link: '/ai-customer-service',
      category: 'customer'
    },
    {
      icon: <Workflow className="w-8 h-8 text-indigo-400" />,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent decision-making.',
      price: 'Starting at $2,299/month',
      features: ['Process automation', 'Decision trees', 'Integration APIs', 'Custom workflows'],
      benefits: ['75% process efficiency', '90% error reduction', 'Scalable automation'],
      link: '/ai-workflow-automation',
      category: 'automation'
    }
  ];

  const categories = [
    { id: 'overview', name: 'Overview', icon: <BarChart className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'conversational', name: 'Conversational', icon: <MessageCircle className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'vision', name: 'Computer Vision', icon: <Eye className="w-5 h-5" /> },
    { id: 'voice', name: 'Voice AI', icon: <Mic className="w-5 h-5" /> },
    { id: 'content', name: 'Content', icon: <FileText className="w-5 h-5" /> },
    { id: 'customer', name: 'Customer Service', icon: <Users className="w-5 h-5" /> },
    { id: 'automation', name: 'Automation', icon: <Workflow className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '150+', label: 'AI Experts', icon: <Users className="w-6 h-6 text-purple-400" /> }
  ];

  const filteredServices = activeTab === 'overview' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);

=======
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock, 
  Bot, CpuChip, Database as DbIcon, Layers, Search, Filter, 
  Activity, Zap as ZapIcon, Target as TargetIcon, RefreshCw, 
  Lightbulb, BookOpen, PieChart, LineChart, BarChart3, 
  Brain as BrainIcon, Sparkles as SparklesIcon, Cpu as CpuIcon
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and predictive modeling',
      price: 'Starting at $2,500/month',
      features: [
        'Real-time data processing',
        'Predictive analytics models',
        'Custom dashboard creation',
        'Natural language queries',
        'Automated reporting',
        'Machine learning insights',
        'Data visualization',
        'API integrations'
      ],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      category: 'Analytics',
      rating: 4.9,
      reviews: 234,
      popular: true,
      benefits: [
        'Increase revenue by 25% through data-driven decisions',
        'Reduce analysis time by 80%',
        'Identify new business opportunities',
        'Improve customer retention'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation that learns and adapts to your needs',
      price: 'Starting at $1,800/month',
      features: [
        'Process automation',
        'Document processing',
        'Email automation',
        'Task scheduling',
        'Workflow optimization',
        'Error handling',
        'Performance monitoring',
        'Custom integrations'
      ],
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500',
      category: 'Automation',
      rating: 4.8,
      reviews: 189,
      popular: true,
      benefits: [
        'Save 40+ hours per week on repetitive tasks',
        'Reduce human errors by 95%',
        'Scale operations without additional staff',
        'Improve process consistency'
      ]
    },
    {
      id: 'ai-chatbot-builder',
      title: 'AI Chatbot & Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants that understand context and provide human-like interactions',
      price: 'Starting at $1,200/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context awareness',
        'Sentiment analysis',
        'Voice integration',
        'Custom training',
        'Analytics dashboard',
        'API connections'
      ],
      icon: MessageCircle,
      color: 'from-green-500 to-teal-500',
      category: 'Conversational AI',
      rating: 4.7,
      reviews: 156,
      popular: false,
      benefits: [
        'Handle 80% of customer inquiries automatically',
        'Available 24/7 for customer support',
        'Reduce support costs by 60%',
        'Improve customer satisfaction scores'
      ]
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced threat detection and prevention using machine learning to protect against evolving cyber threats',
      price: 'Starting at $3,500/month',
      features: [
        'Threat detection',
        'Behavioral analysis',
        'Anomaly detection',
        'Automated response',
        'Compliance monitoring',
        'Security analytics',
        'Incident investigation',
        'Risk assessment'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      rating: 4.9,
      reviews: 298,
      popular: true,
      benefits: [
        'Detect threats 10x faster than traditional methods',
        'Reduce false positives by 85%',
        'Prevent 99.9% of known attack patterns',
        'Ensure compliance with security standards'
      ]
    },
    {
      id: 'ai-crm',
      title: 'AI-Enhanced CRM',
      description: 'Intelligent customer relationship management with predictive insights and automated workflows',
      price: 'Starting at $2,200/month',
      features: [
        'Lead scoring',
        'Sales forecasting',
        'Customer segmentation',
        'Automated follow-ups',
        'Churn prediction',
        'Upselling recommendations',
        'Performance analytics',
        'Integration capabilities'
      ],
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      category: 'CRM',
      rating: 4.8,
      reviews: 187,
      popular: true,
      benefits: [
        'Increase sales conversion by 35%',
        'Improve lead quality by 50%',
        'Reduce sales cycle time by 30%',
        'Enhance customer lifetime value'
      ]
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics Platform',
      description: 'Advanced data analytics with machine learning models for comprehensive business intelligence',
      price: 'Starting at $2,800/month',
      features: [
        'Big data processing',
        'Machine learning models',
        'Real-time analytics',
        'Data visualization',
        'Predictive modeling',
        'Statistical analysis',
        'Data mining',
        'Custom algorithms'
      ],
      icon: Database,
      color: 'from-cyan-500 to-blue-500',
      category: 'Analytics',
      rating: 4.9,
      reviews: 245,
      popular: true,
      benefits: [
        'Process data 100x faster than traditional methods',
        'Uncover hidden patterns in data',
        'Make predictions with 90%+ accuracy',
        'Reduce data analysis costs by 70%'
      ]
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare Solutions',
      description: 'Revolutionary AI applications for healthcare including diagnostics, treatment planning, and patient monitoring',
      price: 'Starting at $5,000/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Treatment recommendations',
        'Patient monitoring',
        'Drug discovery support',
        'Clinical decision support',
        'Health risk assessment',
        'Compliance management'
      ],
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 167,
      popular: false,
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce treatment costs by 25%',
        'Enhance patient outcomes',
        'Accelerate drug discovery processes'
      ]
    },
    {
      id: 'ai-financial-services',
      title: 'AI Financial Services',
      description: 'Intelligent financial solutions including fraud detection, risk assessment, and automated trading',
      price: 'Starting at $4,200/month',
      features: [
        'Fraud detection',
        'Risk assessment',
        'Algorithmic trading',
        'Credit scoring',
        'Market analysis',
        'Regulatory compliance',
        'Portfolio optimization',
        'Financial forecasting'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      category: 'Finance',
      rating: 4.8,
      reviews: 198,
      popular: true,
      benefits: [
        'Detect fraud with 99.5% accuracy',
        'Reduce financial risks by 40%',
        'Improve trading performance by 25%',
        'Ensure regulatory compliance'
      ]
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis for object detection, facial recognition, and visual inspection',
      price: 'Starting at $2,000/month',
      features: [
        'Object detection',
        'Facial recognition',
        'Image classification',
        'Video analysis',
        'Quality inspection',
        'Motion tracking',
        'Scene understanding',
        'Real-time processing'
      ],
      icon: Eye,
      color: 'from-violet-500 to-purple-500',
      category: 'Computer Vision',
      rating: 4.7,
      reviews: 134,
      popular: false,
      benefits: [
        'Automate visual inspection processes',
        'Improve accuracy by 95%',
        'Reduce manual labor costs by 80%',
        'Enable real-time decision making'
      ]
    },
    {
      id: 'ai-voice-solutions',
      title: 'AI Voice & Speech Solutions',
      description: 'Advanced speech recognition, text-to-speech, and voice analytics for enhanced communication',
      price: 'Starting at $1,500/month',
      features: [
        'Speech recognition',
        'Text-to-speech',
        'Voice analytics',
        'Language translation',
        'Voice biometrics',
        'Call center automation',
        'Voice commands',
        'Real-time transcription'
      ],
      icon: Mic,
      color: 'from-orange-500 to-red-500',
      category: 'Voice AI',
      rating: 4.6,
      reviews: 112,
      popular: false,
      benefits: [
        'Improve accessibility for users',
        'Automate call center operations',
        'Enable hands-free interactions',
        'Enhance customer experience'
      ]
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, marketing materials, and documentation',
      price: 'Starting at $800/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Marketing copy',
        'Technical documentation',
        'Email campaigns',
        'SEO optimization',
        'Multi-language support',
        'Brand voice training'
      ],
      icon: FileText,
      color: 'from-teal-500 to-cyan-500',
      category: 'Content',
      rating: 4.5,
      reviews: 89,
      popular: false,
      benefits: [
        'Generate content 10x faster',
        'Maintain consistent brand voice',
        'Optimize for SEO automatically',
        'Scale content production'
      ]
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation Pro',
      description: 'Enterprise-grade workflow automation with AI decision-making and process optimization',
      price: 'Starting at $3,000/month',
      features: [
        'Complex workflow design',
        'AI decision making',
        'Process optimization',
        'Exception handling',
        'Performance analytics',
        'Custom integrations',
        'Scalable architecture',
        'Compliance tracking'
      ],
      icon: Settings,
      color: 'from-gray-500 to-slate-500',
      category: 'Automation',
      rating: 4.8,
      reviews: 156,
      popular: true,
      benefits: [
        'Automate complex business processes',
        'Reduce operational costs by 50%',
        'Improve process efficiency by 60%',
        'Ensure compliance and audit trails'
      ]
    }
  ];

  const categories = ['All', 'Analytics', 'Automation', 'Conversational AI', 'Security', 'CRM', 'Healthcare', 'Finance', 'Computer Vision', 'Voice AI', 'Content'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '24/7', label: 'AI Support', icon: Clock }
  ];

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
>>>>>>> 1d6d2e99093980ea16846175955d416ea913ddbc
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, AI consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Services",
            "description": "Advanced artificial intelligence solutions for businesses",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "999",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Brain className="w-4 h-4" />
              <span>Advanced AI Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Technology
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Leverage cutting-edge artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Get AI Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View AI Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
=======
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Database, Smartphone, Globe, Settings, Monitor, Package, Lock, Calendar, Link as LinkIcon, ShoppingCart, TrendingUp, CheckSquare, Cpu, Wifi, MessageSquare, FileText, Heart, DollarSign, Box, Eye, Mic, Workflow, MessageCircle } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Advanced data insights powered by machine learning algorithms',
      features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Data visualization'],
      price: 'Starting at $1,500/month'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI for customer support and engagement',
      features: ['Natural language processing', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      price: 'Starting at $800/month'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security automation using AI',
      features: ['Threat detection', 'Automated response', 'Security monitoring', 'Compliance reporting'],
      price: 'Starting at $2,200/month'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'SEO optimization'],
      price: 'Starting at $600/month'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis for business applications',
      features: ['Object detection', 'Image classification', 'Video analysis', 'Quality control'],
      price: 'Starting at $1,800/month'
    },
    {
      icon: Mic,
      title: 'AI Voice Solutions',
      description: 'Speech recognition and text-to-speech applications',
      features: ['Voice commands', 'Transcription', 'Voice synthesis', 'Multi-language support'],
      price: 'Starting at $1,200/month'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Accuracy Rate', icon: Star },
    { number: '24/7', label: 'AI Monitoring', icon: Award },
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including analytics, chatbots, cybersecurity, content generation, and more." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, analytics, computer vision" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, BarChart, Mail, Mic, Zap, CheckCircle, ArrowRight, Users, Award, Star } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, marketing materials, and more.',
      features: ['Blog Writing', 'Social Media Content', 'Marketing Copy', 'Technical Documentation'],
      price: 'Starting at $500/month',
      color: 'from-purple-500 to-pink-500',
      link: '/ai-content-generator'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot Builder',
      description: 'Intelligent chatbots that provide 24/7 customer support and engagement.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
      price: 'Starting at $800/month',
      color: 'from-cyan-500 to-blue-500',
      link: '/ai-chatbot-builder'
    },
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Advanced analytics and business intelligence powered by artificial intelligence.',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization'],
      price: 'Starting at $1,200/month',
      color: 'from-green-500 to-emerald-500',
      link: '/ai-analytics-dashboard'
    },
    {
      icon: Mail,
      title: 'AI Email Assistant',
      description: 'Smart email management and automated responses for improved productivity.',
      features: ['Email Classification', 'Auto-responses', 'Sentiment Analysis', 'Priority Sorting'],
      price: 'Starting at $600/month',
      color: 'from-orange-500 to-red-500',
      link: '/ai-email-assistant'
    },
    {
      icon: Mic,
      title: 'AI Voice Assistant',
      description: 'Voice-powered AI assistants for hands-free interaction and automation.',
      features: ['Speech Recognition', 'Voice Commands', 'Multi-language Support', 'Custom Wake Words'],
      price: 'Starting at $900/month',
      color: 'from-indigo-500 to-purple-500',
      link: '/ai-voice-assistant'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent process automation to streamline workflows and reduce manual tasks.',
      features: ['Workflow Automation', 'Data Processing', 'Task Scheduling', 'Error Handling'],
      price: 'Starting at $1,000/month',
      color: 'from-yellow-500 to-orange-500',
      link: '/ai-automation'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on high-value activities that drive growth.'
    },
    {
      icon: BarChart,
      title: 'Better Insights',
      description: 'Get actionable insights from your data with advanced AI-powered analytics.'
    },
    {
      icon: Star,
      title: 'Enhanced Customer Experience',
      description: 'Provide 24/7 support and personalized experiences that delight your customers.'
    },
    {
      icon: Zap,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and process optimization.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI services including content generation, chatbots, analytics, email automation, voice assistants, and process automation." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation, voice assistants" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Harness the power of artificial intelligence to transform your business operations, 
                enhance customer experiences, and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free AI Consultation
                </Link>
                <Link 
                  to="/it-services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View IT Services
                </Link>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> 1d6d2e99093980ea16846175955d416ea913ddbc
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, natural language processing, computer vision, and automation. Expert AI solutions for enterprises." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, business intelligence, AI consulting" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions to transform your business operations and drive innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                AI Services
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  & Solutions
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning 
                to natural language processing, we deliver AI that drives real business value.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {/* AI Services Tabs */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
=======
        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
                Comprehensive AI solutions designed to solve real business challenges
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="text-cyan-400 font-semibold text-lg">
                      {service.price}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Business Benefits:</h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
=======
        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI services designed to automate, optimize, and transform your business processes
=======
                Comprehensive artificial intelligence solutions designed to transform your business
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
<<<<<<< HEAD
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
=======
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <Link 
                      to={service.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> 1d6d2e99093980ea16846175955d416ea913ddbc
        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className={`group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    service.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({service.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                    <span className="text-sm text-gray-400">Monthly subscription</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400 text-center">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={`/${service.id}`}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      Get Quote
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                </div>
              ))}
            </div>
          </div>
        </section>

              </div>
=======
                  <div className="text-cyan-400 font-semibold text-sm mb-4">
                    {service.price}
                  </div>
                  <Link 
                    to="/contact"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can automate your processes, enhance customer experiences, and drive growth.
=======
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI solutions can drive innovation and growth for your organization.
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
<<<<<<< HEAD
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
=======
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
                >
                  Start Your AI Journey
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </Link>
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
>>>>>>> 1d6d2e99093980ea16846175955d416ea913ddbc
              </div>
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify opportunities, design solutions, and implement AI that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
=======
              </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
