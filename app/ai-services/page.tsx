<<<<<<< HEAD
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
import { CheckCircle, ArrowRight, Brain, Zap, Eye, MessageCircle, BarChart, Shield, Users, Clock, DollarSign, Star } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
import { CheckCircle, ArrowRight, Brain, Zap, Star, Eye, MessageSquare, BarChart3, Cog } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Brain, Database, Smartphone, Shield, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
import { CheckCircle, Zap, Shield, Globe, Cloud, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, ArrowRight, Star, Users, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34

export default function AIServicesPage() {
  const services = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Brain className="w-8 h-8 text-blue-500" />,
<<<<<<< HEAD
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation solutions.',
      features: ['Workflow automation', 'Process optimization', 'Custom integrations', 'Real-time monitoring'],
      pricing: 'Starting at $49/month',
      link: '/ai-automation',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions to protect your digital assets and detect threats.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting'],
      pricing: 'Starting at $99/month',
      link: '/ai-cybersecurity',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with powerful AI-driven analytics tools.',
      features: ['Predictive analytics', 'Data visualization', 'Custom dashboards', 'Real-time insights'],
      pricing: 'Starting at $39/month',
      link: '/ai-analytics',
      popular: false
<<<<<<< HEAD
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'Machine Learning',
      description: 'Build intelligent systems that learn and adapt to your business needs.',
      features: ['Predictive Modeling', 'Pattern Recognition', 'Automated Learning', 'Real-time Adaptation'],
      pricing: 'Starting at $99/month',
      link: '/machine-learning',
      popular: true
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'Natural Language Processing',
      description: 'Transform text and speech into actionable insights and automated responses.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      pricing: 'Starting at $89/month',
      link: '/nlp',
      popular: false
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Computer Vision',
      description: 'Extract meaningful information from images and videos for business automation.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis'],
      pricing: 'Starting at $119/month',
      link: '/computer-vision',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors to make data-driven business decisions.',
      features: ['Trend Analysis', 'Risk Assessment', 'Performance Prediction', 'Scenario Planning'],
      pricing: 'Starting at $149/month',
      link: '/predictive-analytics',
      popular: false
=======
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials using advanced AI models.',
      features: ['Blog posts and articles', 'Social media content', 'Marketing copy', 'Product descriptions'],
      pricing: 'Starting at $500/month',
      link: '/ai-services/content-generation'
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Development',
      description: 'Intelligent chatbots that understand context and provide personalized customer support.',
      features: ['24/7 customer support', 'Multi-language support', 'Integration with existing systems', 'Analytics and insights'],
      pricing: 'Starting at $1,200 setup',
      link: '/ai-services/chatbot'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Advanced analytics powered by AI to help you make data-driven business decisions.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
      pricing: 'Starting at $800/month',
      link: '/ai-services/analytics'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'AI Process Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Workflow automation', 'Document processing', 'Email automation', 'Task scheduling'],
      pricing: 'Starting at $2,000/month',
      link: '/ai-services/automation'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Mobile Applications',
      description: 'Mobile apps enhanced with AI capabilities for better user experience and functionality.',
      features: ['Voice recognition', 'Image processing', 'Personalized recommendations', 'Offline AI processing'],
      pricing: 'Starting at $5,000',
      link: '/ai-services/mobile'
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-500" />,
      title: 'AI Security Solutions',
      description: 'Advanced security systems powered by AI to protect your business from threats.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting'],
      pricing: 'Starting at $1,500/month',
      link: '/ai-services/security'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy.',
      features: [
        'Generate 10,000+ words daily',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      pricing: '$29/month',
      popular: true,
=======
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Generate high-quality content for blogs, articles, social media, and marketing materials using advanced AI.',
      features: ['Natural Language Processing', 'Multiple Content Types', 'SEO Optimization', 'Brand Voice Matching'],
      pricing: 'Starting at $500/month',
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
      link: '/ai-content-generator'
    },
    {
<<<<<<< HEAD
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbots',
      description: 'Build intelligent chatbots that can handle customer inquiries, provide support, and improve user experience.',
      features: ['Natural Conversations', 'Multi-language Support', 'Integration Ready', 'Analytics Dashboard'],
      pricing: 'Starting at $300/month',
      link: '/ai-chatbot-builder'
    },
    {
<<<<<<< HEAD
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered security solution that protects your business from cyber threats and data breaches.',
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Security analytics',
        '24/7 SOC support'
      ],
      pricing: '$99/month',
      popular: false,
      link: '/ai-cybersecurity'
    },
    {
      icon: <Globe className="w-12 h-12 text-orange-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics and reporting platform.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Data visualization',
        'API integrations'
=======
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent chatbots for customer service, sales, and support with advanced NLP and machine learning capabilities.',
      features: [
        'Natural language processing',
        'Multi-channel deployment',
        'Analytics dashboard',
        'Custom integrations',
        '24/7 availability',
        'Sentiment analysis'
      ],
      pricing: '$99/month',
      popular: false,
      link: '/ai-chatbot-builder'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom visualizations',
        'Automated reporting',
        'Data integration',
        'Machine learning models'
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
      ],
      pricing: '$149/month',
      popular: false,
      link: '/ai-analytics-dashboard'
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing copy, and technical documentation.',
      features: ['Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Content Templates'],
      pricing: 'Starting at $99/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Build intelligent chatbots for customer service, sales, and support with natural language processing.',
      features: ['Multi-channel Integration', 'Custom Training', 'Analytics Dashboard', '24/7 Support'],
      pricing: 'Starting at $199/month',
      link: '/ai-chatbot-builder',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Reports', 'Data Visualization'],
      pricing: 'Starting at $299/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered responses, scheduling, and priority classification.',
      features: ['Smart Responses', 'Email Scheduling', 'Priority Classification', 'Spam Detection'],
      pricing: 'Starting at $49/month',
      link: '/ai-email-assistant',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'AI Voice Assistant',
      description: 'Custom voice assistants for mobile and web applications with natural language understanding.',
      features: ['Voice Recognition', 'Multi-language', 'Custom Commands', 'Integration APIs'],
      pricing: 'Starting at $149/month',
      link: '/ai-voice-assistant',
      popular: false
    },
    {
      icon: <Cpu className="w-8 h-8 text-red-500" />,
      title: 'AI Automation Suite',
      description: 'Complete automation solution for business processes using AI and machine learning.',
      features: ['Workflow Automation', 'Process Optimization', 'Error Detection', 'Performance Monitoring'],
      pricing: 'Starting at $399/month',
      link: '/ai-automation',
      popular: true
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics and business intelligence solutions.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      pricing: 'Starting at $400/month',
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows with our intelligent automation solutions.',
      features: ['Workflow Automation', 'Process Optimization', 'Error Reduction', 'Cost Savings'],
      pricing: 'Starting at $800/month',
      link: '/ai-automation'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Create voice-enabled applications and virtual assistants for enhanced user interaction.',
      features: ['Speech Recognition', 'Natural Language Understanding', 'Multi-platform Support', 'Custom Commands'],
      pricing: 'Starting at $600/month',
      link: '/ai-voice-assistant'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      title: 'AI Security',
      description: 'Protect your business with AI-powered security solutions and threat detection systems.',
      features: ['Threat Detection', 'Anomaly Detection', 'Real-time Monitoring', 'Automated Response'],
      pricing: 'Starting at $700/month',
      link: '/ai-cybersecurity'
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
    }
  ]

<<<<<<< HEAD
  const benefits = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60% through intelligent automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Availability',
      description: 'AI services work around the clock without breaks or downtime',
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalability',
      description: 'Easily scale your AI solutions as your business grows',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Accuracy',
      description: 'Achieve 95%+ accuracy in AI-powered tasks and predictions',
      icon: <Star className="w-6 h-6 text-yellow-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The AI content generator has revolutionized our marketing strategy. We\'ve seen a 300% increase in content output.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Our chatbot handles 80% of customer inquiries automatically, freeing up our team for complex issues.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Analytics Pro',
      content: 'The predictive analytics dashboard gives us insights we never had before. Game-changing technology.',
      rating: 5
    }
=======
=======
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation with SEO optimization and brand voice customization.',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content scheduling', 'Plagiarism detection'],
      pricing: '$299/month',
      popular: true,
      category: 'Content'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analysis solutions for various industries.',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Quality inspection', 'Visual search'],
      pricing: '$499/month',
      popular: false,
      category: 'Vision'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: 'Conversational AI',
      description: 'Intelligent chatbots and virtual assistants for customer service and support.',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', 'Intent recognition', 'Integration APIs'],
      pricing: '$399/month',
      popular: true,
      category: 'Conversation'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-500" />,
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting, trend analysis, and business intelligence.',
      features: ['Predictive modeling', 'Trend analysis', 'Risk assessment', 'Demand forecasting', 'Performance optimization'],
      pricing: '$599/month',
      popular: false,
      category: 'Analytics'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security Solutions',
      description: 'Intelligent threat detection and cybersecurity solutions powered by AI.',
      features: ['Threat detection', 'Anomaly detection', 'Fraud prevention', 'Security monitoring', 'Incident response'],
      pricing: '$799/month',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: 'AI for HR & Recruitment',
      description: 'Automated resume screening, candidate matching, and HR process optimization.',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Bias detection', 'Performance analysis'],
      pricing: '$349/month',
      popular: false,
      category: 'HR'
    }
=======
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Automate your email marketing with AI that personalizes content and optimizes send times.',
      features: [
        'Smart subject line generation',
        'Personalized content',
        'Send time optimization',
        'A/B testing automation',
        'Performance tracking',
        'List segmentation'
      ],
      pricing: '$79/month',
      popular: false,
      link: '/ai-email-assistant'
    },
    {
      icon: <Eye className="w-12 h-12 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants with natural language understanding and speech synthesis.',
      features: [
        'Voice recognition',
        'Text-to-speech',
        'Custom wake words',
        'Multi-language support',
        'API integration',
        'Cloud deployment'
      ],
      pricing: '$199/month',
      popular: false,
      link: '/ai-voice-assistant'
    },
    {
      icon: <Cog className="w-12 h-12 text-cyan-500" />,
      title: 'AI Automation Suite',
      description: 'Complete automation solution that streamlines business processes with AI-powered workflows.',
      features: [
        'Workflow automation',
        'Task scheduling',
        'Data processing',
        'API integrations',
        'Custom triggers',
        'Performance monitoring'
      ],
      pricing: '$299/month',
      popular: false,
      link: '/ai-automation'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'AI Support' },
    { number: '50+', label: 'Enterprise Clients' }
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
  ];

  const aiCapabilities = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your specific business needs and data patterns.'
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-green-500" />,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis, sentiment detection, and language understanding capabilities.'
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-500" />,
      title: 'Computer Vision',
      description: 'Image and video analysis, object recognition, and visual intelligence solutions.'
    },
    {
      icon: <BarChart className="w-12 h-12 text-orange-500" />,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting to help you make informed business decisions.'
    },
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive tasks and business processes.'
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: 'AI Ethics & Governance',
      description: 'Responsible AI implementation with bias detection and ethical guidelines.'
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Better Insights',
      description: 'Get actionable insights from your data with AI analytics'
=======
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: '24/7 Availability',
      description: 'AI services work around the clock to serve your customers and optimize your operations.'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Scalable Solutions',
<<<<<<< HEAD
      description: 'AI solutions that grow with your business needs'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
      description: 'Our AI solutions scale with your business, handling increased demand automatically.'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: 'Proven Results',
      description: 'Our AI services have helped 500+ businesses increase efficiency by up to 300%.'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
    }
  ]

<<<<<<< HEAD
  const stats = [
<<<<<<< HEAD
    { number: '1000+', label: 'AI Models' },
    { number: '99.9%', label: 'Accuracy' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Languages' }
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
  ];
=======
    { number: '95%', label: 'Accuracy Rate' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Availability' },
    { number: '10x', label: 'Faster Processing' }
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1

=======
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: 'Proven Results',
      description: 'Our AI solutions have helped businesses increase efficiency by up to 80% and reduce costs by 60%.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Cost Effective',
      description: 'Get enterprise-grade AI solutions at a fraction of the cost of building in-house capabilities.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
      title: 'Expert Support',
      description: 'Our AI experts provide ongoing support and optimization to ensure maximum value from your investment.'
    }
  ];

>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
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
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
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
=======
      <section className="pt-20 px-4 py-20">
=======
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, NLP, computer vision, and predictive analytics from Zion Tech Group." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, predictive analytics, AI automation, artificial intelligence" />
=======
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, cybersecurity, and analytics solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, cybersecurity, analytics" />
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
        <meta name="description" content="Advanced AI services including content generation, chatbots, analytics, and automation solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, automation" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
<<<<<<< HEAD
              Advanced AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business with our cutting-edge AI solutions.
=======
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions designed to drive growth and efficiency.
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your growth.
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
<<<<<<< HEAD
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
<<<<<<< HEAD
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
=======
              <Link
                to="/micro-saas-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Micro SAAS
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Free Consultation
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
              </Link>
=======
        <meta name="description" content="Transform your business with our comprehensive AI services. Content generation, chatbots, analytics, automation, and more." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              AI Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with our comprehensive AI services. From content generation to automation, 
              we provide cutting-edge artificial intelligence solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
            </div>
=======
        <meta name="description" content="Advanced AI services including content generation, chatbots, analytics, and automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced AI
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From content generation to automation, we deliver AI that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our AI Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver measurable results and exceptional value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
              </div>
            ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
      </main>

      {/* Services Grid */}
<<<<<<< HEAD
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
=======
      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center px-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
              Choose from our comprehensive suite of AI services designed to solve real business challenges
=======
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to meet your specific business needs and drive digital transformation.
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
=======
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
=======
          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
=======
              Comprehensive AI solutions designed to accelerate your business growth and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
<<<<<<< HEAD
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
=======
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered solutions designed to automate, optimize, and accelerate your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                <div className="mb-6">
                  <span className="text-lg font-semibold text-purple-600">{service.pricing}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
                </div>

                <Link
                  to={service.link}
<<<<<<< HEAD
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
=======
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
<<<<<<< HEAD
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI expertise across all major domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                </div>
                <Link 
                  to={service.link} 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
              </div>
            ))}
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of cutting-edge AI technology tailored to your business needs
=======
      {/* Benefits Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI services are designed to deliver measurable results and drive business growth.
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
<<<<<<< HEAD
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
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Link
                  to={service.link}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
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
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive your success and give you a competitive advantage.
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
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
=======
      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Service Packages</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive AI service packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
<<<<<<< HEAD
=======
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
=======
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our AI Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive AI solutions to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {aiServices.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
                <Link 
<<<<<<< HEAD
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
=======
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                  <ArrowRight className="w-4 h-4 ml-2" />
=======
          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI solutions are designed to deliver measurable results and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can help you achieve your goals and drive innovation.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI services can drive your success and accelerate your growth.
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
<<<<<<< HEAD
                </Link>
                <Link 
                  to="/it-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore IT Services
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
                </Link>
              </div>
=======
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">{service.pricing}</span>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to discover how our AI services can accelerate your growth and efficiency.
=======
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free AI consultation and discover how artificial intelligence can transform your business.
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
                
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-white flex items-center">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    {service.pricing}
                  </div>
                  <Link
                    to={service.link}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Harness AI Power?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can transform your business operations and drive growth.
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
<<<<<<< HEAD
<<<<<<< HEAD
                  Get Free Consultation
=======
                  Get Free AI Consultation
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
<<<<<<< HEAD
                  Learn More
=======
                  Learn About Us
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
                  Get Free Consultation
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
                </Link>
=======
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Pricing
                </button>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
              </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/it-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View IT Services
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      </section>
=======
      </main>
      
      <Footer />
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
      </main>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
      </section>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
=======
      </section>
      
      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
    </div>
<<<<<<< HEAD
  );
};

<<<<<<< HEAD
export default AIServicesPage;
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default AIServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
  )
}
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
export default AIServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
export default AIServicesPage;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
=======
export default AIServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-c7ba
