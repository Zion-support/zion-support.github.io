'use client';

import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3 } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
import { CheckCircle, ArrowRight, Brain, Zap, Database, Code, Smartphone, Cpu, MessageCircle, Calendar, Users } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3 } from 'lucide-react';
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Brain, Zap, Shield, Globe, BarChart3, MessageSquare, Users, Code, Eye, FileText, Target, Clock, DollarSign, TrendingUp, Database, Cloud, Smartphone } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba

export default function AIServicesPage() {
  const services = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
<<<<<<< HEAD
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
=======
      id: 'ai-content-generation',
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation',
      features: [
        'SEO-optimized content generation',
        'Multi-language support (50+ languages)',
        'Brand voice training and customization',
        'Content templates and frameworks',
        'Plagiarism detection and originality scoring',
        'Content scheduling and automation',
        'Team collaboration tools',
        'Analytics and performance tracking'
      ],
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
      pricing: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      category: 'Content & Marketing',
      popular: true,
      useCases: ['Content Marketing', 'Social Media Management', 'Blog Writing', 'Technical Documentation']
    },
    {
      id: 'ai-analytics-intelligence',
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform raw data into actionable insights with AI-powered analytics and predictive modeling',
      features: [
        'Real-time data processing and visualization',
        'Predictive analytics and forecasting',
        'Custom KPI dashboards and reports',
        'Automated anomaly detection',
        'Natural language query interface',
        'Machine learning model deployment',
        'Data integration and ETL processes',
        'ROI and performance optimization'
      ],
      pricing: 'Starting at $99/month',
      marketPrice: '$200-1000/month',
      category: 'Data & Analytics',
      popular: true,
      useCases: ['Business Intelligence', 'Sales Forecasting', 'Customer Analytics', 'Performance Monitoring']
    },
    {
<<<<<<< HEAD
      id: 'ai-customer-service',
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'AI Customer Service Solutions',
      description: 'Intelligent customer support with chatbots, sentiment analysis, and automated ticket routing',
      features: [
        '24/7 AI-powered chatbots',
        'Natural language processing (NLP)',
        'Sentiment analysis and emotion detection',
        'Automated ticket classification and routing',
        'Knowledge base integration',
        'Multi-channel support (web, email, social)',
        'Human handoff and escalation',
        'Performance analytics and optimization'
      ],
      pricing: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      category: 'Customer Experience',
      popular: true,
      useCases: ['Customer Support', 'Lead Qualification', 'FAQ Automation', 'Ticket Management']
    },
    {
      id: 'ai-computer-vision',
      icon: <Eye className="w-8 h-8 text-orange-500" />,
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis for object detection, facial recognition, and visual content understanding',
      features: [
        'Object detection and classification',
        'Facial recognition and verification',
        'Image and video content analysis',
        'OCR and text extraction from images',
        'Quality control and defect detection',
        'Real-time video processing',
        'Custom model training and deployment',
        'API integration and SDK support'
      ],
      pricing: 'Starting at $199/month',
      marketPrice: '$300-2000/month',
      category: 'Computer Vision',
      popular: false,
      useCases: ['Quality Control', 'Security & Surveillance', 'Document Processing', 'Medical Imaging']
    },
    {
      id: 'ai-automation',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Process Automation',
      description: 'Intelligent automation for repetitive tasks, workflow optimization, and business process enhancement',
      features: [
        'Robotic Process Automation (RPA)',
        'Workflow design and optimization',
        'Document processing and data extraction',
        'Email and communication automation',
        'Integration with existing systems',
        'Exception handling and error recovery',
        'Performance monitoring and analytics',
        'Scalable cloud deployment'
      ],
      pricing: 'Starting at $149/month',
<<<<<<< HEAD
      link: '/predictive-analytics',
=======
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with powerful AI-driven analytics tools.',
      features: ['Predictive analytics', 'Data visualization', 'Custom dashboards', 'Real-time insights'],
      pricing: 'Starting at $39/month',
      link: '/ai-analytics',
      popular: false
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI chatbots for customer support, sales, and engagement.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard'],
      pricing: 'Starting at $59/month',
      link: '/ai-chatbot',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: 'AI Business Intelligence',
      description: 'Advanced AI-powered business intelligence and data analysis solutions.',
      features: ['Predictive modeling', 'Automated reporting', 'Data integration', 'Custom insights'],
      pricing: 'Starting at $79/month',
      link: '/ai-business-intelligence',
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
      popular: false
=======
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI technology.',
      features: ['Blog posts and articles', 'Social media content', 'Marketing copy', 'Product descriptions'],
      price: 'Starting at $29/month',
      link: '/ai-content-generator'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and automated assistance.',
      features: ['24/7 customer support', 'Lead qualification', 'FAQ automation', 'Multi-language support'],
      price: 'Starting at $49/month',
      link: '/ai-chatbot-builder'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reporting'],
      price: 'Starting at $39/month',
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Automate email management, scheduling, and responses with intelligent AI assistance.',
      features: ['Smart email sorting', 'Auto-responses', 'Meeting scheduling', 'Priority detection'],
      price: 'Starting at $19/month',
      link: '/ai-email-assistant'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Integrate voice-activated AI assistants into your applications and workflows.',
      features: ['Voice commands', 'Speech recognition', 'Natural language processing', 'Multi-platform support'],
      price: 'Starting at $59/month',
      link: '/ai-voice-assistant'
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-500" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation.',
      features: ['Workflow automation', 'Task scheduling', 'Data processing', 'Integration management'],
      price: 'Starting at $79/month',
      link: '/ai-automation'
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our advanced AI writing tools and content management systems.',
      features: [
        'Blog posts and articles',
        'Social media content',
        'Product descriptions',
        'Email campaigns',
        'Technical documentation',
        'Multi-language support'
      ],
      pricing: 'Starting at $2,500/month',
      popular: true,
      link: '/ai-content-generation'
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics and reporting solutions.',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Data visualization',
        'Machine learning models',
        'Custom algorithms'
      ],
      pricing: 'Starting at $3,000/month',
      popular: false,
      link: '/ai-data-analytics'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered security solutions that adapt and learn from threats.',
      features: [
        'Threat detection',
        'Automated response',
        'Fraud prevention',
        'Security monitoring',
        'Compliance management',
        'Incident response'
      ],
      pricing: 'Starting at $4,000/month',
      popular: true,
      link: '/ai-cybersecurity'
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Workflow Automation',
      description: 'Streamline your business processes with intelligent automation that learns and improves over time.',
      features: [
        'Process automation',
        'Task optimization',
        'Workflow management',
        'Integration solutions',
        'Performance monitoring',
        'Custom workflows'
      ],
      pricing: 'Starting at $2,000/month',
      popular: false,
      link: '/ai-workflow-automation'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent chatbots and automated support systems.',
      features: [
        '24/7 chatbot support',
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        'Ticket management',
        'Human handoff'
      ],
      pricing: 'Starting at $1,500/month',
      popular: false,
      link: '/ai-customer-support'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'AI Sales Automation',
      description: 'Boost your sales performance with AI-powered lead generation, qualification, and conversion tools.',
      features: [
        'Lead scoring',
        'Sales forecasting',
        'Email automation',
        'CRM integration',
        'Performance analytics',
        'A/B testing'
      ],
      pricing: 'Starting at $2,200/month',
      popular: true,
      link: '/ai-sales-automation'
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
      marketPrice: '$250-1500/month',
      category: 'Automation',
      popular: true,
      useCases: ['Document Processing', 'Data Entry', 'Email Automation', 'Workflow Optimization']
    },
    {
      id: 'ai-cybersecurity',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection, security monitoring, and automated incident response using AI',
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly detection',
        'Automated incident response',
        'Vulnerability assessment and scanning',
        'Security log analysis and correlation',
        'Phishing and malware detection',
        'Compliance monitoring and reporting',
        '24/7 security operations center (SOC)'
      ],
      pricing: 'Starting at $299/month',
      marketPrice: '$500-5000/month',
      category: 'Security',
      popular: false,
      useCases: ['Threat Detection', 'Incident Response', 'Compliance Monitoring', 'Security Analytics']
    },
    {
      id: 'ai-natural-language-processing',
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: 'AI Natural Language Processing',
      description: 'Advanced text analysis, language understanding, and conversational AI for business applications',
      features: [
        'Text classification and sentiment analysis',
        'Named entity recognition (NER)',
        'Language translation and localization',
        'Text summarization and extraction',
        'Conversational AI and chatbots',
        'Document analysis and understanding',
        'Custom model training and fine-tuning',
        'Multi-language support and processing'
      ],
      pricing: 'Starting at $79/month',
      marketPrice: '$150-800/month',
      category: 'Language Processing',
      popular: true,
      useCases: ['Text Analysis', 'Language Translation', 'Document Processing', 'Conversational AI']
    },
    {
      id: 'ai-predictive-modeling',
      icon: <TrendingUp className="w-8 h-8 text-pink-500" />,
      title: 'AI Predictive Modeling',
      description: 'Machine learning models for forecasting, risk assessment, and data-driven decision making',
      features: [
        'Time series forecasting and prediction',
        'Risk assessment and scoring models',
        'Customer lifetime value prediction',
        'Churn prediction and prevention',
        'Demand forecasting and planning',
        'Fraud detection and prevention',
        'Model training and validation',
        'Real-time prediction APIs'
      ],
      pricing: 'Starting at $199/month',
      marketPrice: '$300-2000/month',
      category: 'Predictive Analytics',
      popular: false,
      useCases: ['Sales Forecasting', 'Risk Assessment', 'Customer Analytics', 'Fraud Detection']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      services: ['Medical Image Analysis', 'Patient Data Analytics', 'Drug Discovery', 'Diagnostic Assistance']
    },
    {
      name: 'Finance',
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      services: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring']
    },
    {
      name: 'E-commerce',
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      services: ['Recommendation Engines', 'Price Optimization', 'Inventory Management', 'Customer Analytics']
    },
    {
      name: 'Manufacturing',
      icon: <Code className="w-6 h-6 text-orange-500" />,
      services: ['Quality Control', 'Predictive Maintenance', 'Supply Chain Optimization', 'Process Automation']
    },
    {
      name: 'Education',
      icon: <Brain className="w-6 h-6 text-cyan-500" />,
      services: ['Personalized Learning', 'Content Generation', 'Student Analytics', 'Automated Assessment']
    },
    {
      name: 'Real Estate',
      icon: <Target className="w-6 h-6 text-red-500" />,
      services: ['Property Valuation', 'Market Analysis', 'Lead Generation', 'Virtual Tours']
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
    }
  ];

  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60% through intelligent automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
=======
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Rapid Implementation',
      description: 'Get your AI solutions up and running in weeks, not months, with our proven implementation methodology'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, compliance certifications, and data protection'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'Built for scale with cloud-native architecture that grows with your business needs'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Expert Support',
      description: 'Dedicated AI specialists and 24/7 support to ensure your success and maximize ROI'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      company: 'Chief Technology Officer, MedTech Solutions',
      content: 'Zion Tech Group\'s AI analytics solution helped us reduce patient diagnosis time by 40% while improving accuracy. The implementation was seamless.',
      rating: 5,
      service: 'AI Analytics & Business Intelligence'
    },
    {
      name: 'James Rodriguez',
      company: 'VP of Operations, RetailMax',
      content: 'Their AI automation platform transformed our inventory management. We\'ve seen a 60% reduction in stockouts and 25% improvement in efficiency.',
      rating: 5,
      service: 'AI Process Automation'
    },
    {
      name: 'Lisa Chen',
      company: 'Marketing Director, ContentCorp',
      content: 'The AI content generation service has revolutionized our content strategy. We\'re producing 5x more content with higher quality and better engagement.',
      rating: 5,
      service: 'AI Content Generation'
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    }
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
  ];

  const stats = [
    { number: '1000+', label: 'AI Models' },
    { number: '99.9%', label: 'Accuracy' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Languages' }
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 300%.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Savings',
      description: 'Reduce operational costs by automating manual processes and improving resource utilization.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Better Insights',
      description: 'Gain deeper insights into your business data with AI-powered analytics and reporting.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Availability',
      description: 'AI solutions work around the clock to provide continuous support and monitoring.'
    }
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your business needs and identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a customized AI implementation strategy for your business.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy AI solutions with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously monitor and optimize AI performance for maximum ROI.'
    }
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
  ];

=======
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: '24/7 Availability',
      description: 'AI systems work around the clock to ensure continuous service and support.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'Cost Effective',
      description: 'Reduce operational costs by up to 60% with intelligent automation.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'Easily scale your AI solutions as your business grows and evolves.'
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'Continuous Learning',
      description: 'AI systems improve over time, delivering better results with each interaction.'
    }
  ];

>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'Advanced AI Models',
      description: 'Cutting-edge AI technology powered by the latest machine learning models'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance with industry standards'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Real-time Processing',
      description: 'Lightning-fast AI processing and instant results'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: 'Global Scale',
      description: 'Deploy AI solutions across multiple regions and languages'
    }
  ];

>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Discover our comprehensive AI services including content generation, chatbots, analytics, and more. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, analytics, automation" />
=======
        <meta name="description" content="Advanced AI services including content generation, automation, cybersecurity, and analytics solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, automation, cybersecurity, analytics" />
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, analytics, automation, computer vision, and more. Expert implementation and support." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, computer vision, natural language processing, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Leading AI Solutions Provider
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
<<<<<<< HEAD
              Harness the power of artificial intelligence to transform your business with our cutting-edge AI solutions.
=======
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation solutions." />
      </Helmet>
=======
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, data analytics, cybersecurity, and automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, data analytics, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your operations.
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              AI Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence solutions designed to drive growth, efficiency, and innovation.
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
        <meta name="description" content="Comprehensive AI services including content generation, automation, cybersecurity, analytics, and chatbots. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, automation, cybersecurity, analytics, chatbots, business intelligence" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered solutions designed to drive growth, efficiency, and innovation.
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
=======
              Transform your business with cutting-edge artificial intelligence solutions. From content generation to predictive analytics, 
              we deliver AI-powered tools that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
              <Link 
                to="/about" 
=======
              <Link
                to="/about"
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
=======
              <Link
                to="#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
              >
                Explore Services
              </Link>
            </div>
<<<<<<< HEAD
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
=======
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-400">AI Projects Delivered</div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Expert Support</div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to deliver measurable results and drive business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
=======
        <meta name="description" content="Discover our comprehensive AI services including content generation, chatbots, analytics, and more. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, analytics, automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services That
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Transform</span>
            <br />
            Your Business
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leverage the power of artificial intelligence to automate processes, gain insights, and drive growth. 
            Our comprehensive AI solutions are designed to meet your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/ai-services#services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Services
            </Link>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
          </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
        </div>
      </section>

      {/* Services Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI services designed to solve real business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
=======
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of AI services tailored to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative ${
                    service.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
<<<<<<< HEAD
=======
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address every aspect of your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      {service.icon}
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <span className="text-sm text-purple-300">{service.category}</span>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-yellow-400 text-sm font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-lg font-bold text-white">{service.pricing}</div>
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Use Cases</div>
                      <div className="text-sm text-white">{service.useCases.slice(0, 2).join(', ')}</div>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Solutions for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI implementations tailored to your industry's unique challenges and opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {industry.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{industry.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-300 text-sm">
=======
                  
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
                </div>
<<<<<<< HEAD

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
              </div>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI services tailored to meet your specific business needs and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to meet your specific business needs and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
                <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
            ))}
=======
              ))}
            </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
          </div>
        </section>

<<<<<<< HEAD
      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of cutting-edge AI technology tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our AI services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the key benefits of implementing AI solutions in your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to successfully implementing AI solutions in your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-bold text-white">{service.pricing}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI services to drive growth and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/ai-services#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Services
              </Link>
<<<<<<< HEAD
=======
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
=======
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver AI solutions that drive real business value and measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-purple-400" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI solutions have transformed businesses across industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-sm text-purple-300">{testimonial.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Let's discuss how our AI services can transform your business. 
                Get a free consultation and custom AI strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/micro-saas"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Explore Micro SaaS Tools
                </Link>
              </div>
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI services can help you achieve your business goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
                  
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-white mb-2">{service.pricing}</p>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
            </div>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Let's discuss how our AI solutions can drive innovation and growth in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            <Link
              to="/it-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore IT Services
            </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      </section>
<<<<<<< HEAD
=======

      <Footer />
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver cutting-edge AI solutions with enterprise-grade security and support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of businesses already using our AI solutions to drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your AI Journey
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    </div>
=======
        </section>
      </div>
    </>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default AIServicesPage;
=======
export default AIServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
}
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
export default AIServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
export default AIServicesPage;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
=======
export default AIServicesPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
=======
export default AIServicesPage;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7149
