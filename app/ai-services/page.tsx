'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Zap, Target, CheckCircle, ArrowRight, Star, DollarSign, Clock, Users, Shield, Globe, Code, BarChart, Eye, MessageCircle, FileText, Image, Video, Music, ShoppingCart, CreditCard, Smartphone, Monitor, Database, Cloud, Lock, TrendingUp, Settings, Calendar, Mail, Phone, MapPin, Award, Lightbulb, Cpu, Database as DbIcon, Wifi, MessageSquare, Rocket, Clock as ClockIcon, Heart, Box, Package, Mic, Workflow, Gauge } from 'lucide-react'

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain },
    { id: 'machine-learning', name: 'Machine Learning', icon: Cpu },
    { id: 'nlp', name: 'Natural Language', icon: MessageCircle },
    { id: 'computer-vision', name: 'Computer Vision', icon: Eye },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'content', name: 'Content AI', icon: FileText },
    { id: 'business', name: 'Business AI', icon: TrendingUp }
  ]

  const aiServices = [
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation Suite',
      category: 'content',
      description: 'Advanced AI-powered content creation platform with multi-format support and brand consistency.',
      features: ['GPT-4 Integration', 'Multi-language Support', 'Brand Voice Training', 'SEO Optimization', 'Content Templates', 'Plagiarism Detection'],
      pricing: { starter: 99, professional: 299, enterprise: 799 },
      icon: FileText,
      popular: true,
      useCases: ['Blog Writing', 'Social Media', 'Email Marketing', 'Product Descriptions'],
      benefits: ['300% faster content creation', 'Consistent brand voice', 'SEO-optimized output', 'Multi-language support']
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder Pro',
      category: 'nlp',
      description: 'Intelligent chatbot platform with natural language processing and seamless human handoff.',
      features: ['NLP Processing', 'Multi-language Support', 'Human Handoff', 'Knowledge Base Integration', 'Analytics Dashboard', 'Custom Training'],
      pricing: { starter: 149, professional: 399, enterprise: 999 },
      icon: MessageCircle,
      popular: true,
      useCases: ['Customer Support', 'Lead Generation', 'Sales Assistance', 'FAQ Automation'],
      benefits: ['24/7 availability', 'Instant responses', 'Reduced support costs', 'Improved customer satisfaction']
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics Platform',
      category: 'analytics',
      description: 'Intelligent data analysis with predictive insights and automated reporting.',
      features: ['Predictive Analytics', 'Real-time Processing', 'Automated Reports', 'Data Visualization', 'Anomaly Detection', 'Custom Models'],
      pricing: { starter: 199, professional: 499, enterprise: 1299 },
      icon: BarChart,
      popular: false,
      useCases: ['Business Intelligence', 'Predictive Modeling', 'Risk Assessment', 'Performance Optimization'],
      benefits: ['Data-driven decisions', 'Predictive insights', 'Automated reporting', 'Real-time monitoring']
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision Suite',
      category: 'computer-vision',
      description: 'Advanced image and video analysis with object detection and recognition capabilities.',
      features: ['Object Detection', 'Facial Recognition', 'Image Classification', 'Video Analysis', 'Quality Control', 'Real-time Processing'],
      pricing: { starter: 179, professional: 449, enterprise: 1199 },
      icon: Eye,
      popular: false,
      useCases: ['Quality Control', 'Security Systems', 'Medical Imaging', 'Retail Analytics'],
      benefits: ['Automated quality checks', 'Enhanced security', 'Improved accuracy', 'Real-time analysis']
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      category: 'automation',
      description: 'Intelligent process automation with machine learning-powered decision making.',
      features: ['Process Automation', 'Smart Routing', 'Decision Trees', 'Integration Hub', 'Performance Analytics', 'Custom Workflows'],
      pricing: { starter: 129, professional: 349, enterprise: 899 },
      icon: Zap,
      popular: true,
      useCases: ['Document Processing', 'Email Automation', 'Data Entry', 'Approval Workflows'],
      benefits: ['Reduced manual work', 'Faster processing', 'Improved accuracy', 'Cost savings']
    },
    {
      id: 'ai-predictive-modeling',
      name: 'AI Predictive Modeling',
      category: 'machine-learning',
      description: 'Advanced machine learning models for forecasting and predictive analytics.',
      features: ['Time Series Analysis', 'Regression Models', 'Classification', 'Clustering', 'Model Training', 'A/B Testing'],
      pricing: { starter: 249, professional: 599, enterprise: 1499 },
      icon: Target,
      popular: false,
      useCases: ['Sales Forecasting', 'Demand Planning', 'Risk Assessment', 'Customer Behavior'],
      benefits: ['Accurate predictions', 'Risk mitigation', 'Optimized planning', 'Competitive advantage']
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant Platform',
      category: 'nlp',
      description: 'Intelligent voice recognition and natural language processing for voice-enabled applications.',
      features: ['Speech Recognition', 'Natural Language Understanding', 'Voice Synthesis', 'Multi-language', 'Custom Commands', 'Integration APIs'],
      pricing: { starter: 199, professional: 499, enterprise: 1299 },
      icon: Mic,
      popular: false,
      useCases: ['Voice Commands', 'Call Centers', 'Accessibility', 'Smart Devices'],
      benefits: ['Hands-free operation', 'Improved accessibility', 'Enhanced user experience', 'Multi-language support']
    },
    {
      id: 'ai-recommendation-engine',
      name: 'AI Recommendation Engine',
      category: 'machine-learning',
      description: 'Intelligent recommendation system for personalized user experiences and increased engagement.',
      features: ['Collaborative Filtering', 'Content-based Filtering', 'Real-time Recommendations', 'A/B Testing', 'Analytics Dashboard', 'Custom Algorithms'],
      pricing: { starter: 179, professional: 449, enterprise: 1199 },
      icon: TrendingUp,
      popular: true,
      useCases: ['E-commerce', 'Content Platforms', 'Streaming Services', 'Social Media'],
      benefits: ['Increased engagement', 'Higher conversion rates', 'Personalized experiences', 'Revenue growth']
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection System',
      category: 'machine-learning',
      description: 'Advanced fraud detection using machine learning algorithms and real-time monitoring.',
      features: ['Real-time Monitoring', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'False Positive Reduction', 'Compliance Reporting'],
      pricing: { starter: 299, professional: 699, enterprise: 1799 },
      icon: Shield,
      popular: false,
      useCases: ['Financial Services', 'E-commerce', 'Insurance', 'Healthcare'],
      benefits: ['Reduced fraud losses', 'Real-time protection', 'Compliance assurance', 'Cost savings']
    },
    {
      id: 'ai-sentiment-analysis',
      name: 'AI Sentiment Analysis',
      category: 'nlp',
      description: 'Intelligent sentiment analysis for social media, reviews, and customer feedback.',
      features: ['Multi-language Support', 'Real-time Analysis', 'Emotion Detection', 'Trend Analysis', 'API Integration', 'Custom Models'],
      pricing: { starter: 99, professional: 249, enterprise: 599 },
      icon: Heart,
      popular: false,
      useCases: ['Social Media Monitoring', 'Customer Feedback', 'Brand Reputation', 'Market Research'],
      benefits: ['Brand monitoring', 'Customer insights', 'Risk identification', 'Market intelligence']
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      category: 'automation',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflows.',
      features: ['OCR Technology', 'Data Extraction', 'Form Processing', 'Document Classification', 'Workflow Automation', 'API Integration'],
      pricing: { starter: 149, professional: 399, enterprise: 999 },
      icon: FileText,
      popular: true,
      useCases: ['Invoice Processing', 'Contract Analysis', 'Data Entry', 'Compliance'],
      benefits: ['Automated processing', 'Reduced errors', 'Faster turnaround', 'Cost efficiency']
    },
    {
      id: 'ai-image-generation',
      name: 'AI Image Generation',
      category: 'computer-vision',
      description: 'Advanced AI image generation with style transfer and brand consistency features.',
      features: ['Style Transfer', 'Brand Consistency', 'High Resolution', 'Batch Generation', 'API Access', 'Custom Training'],
      pricing: { starter: 79, professional: 199, enterprise: 499 },
      icon: Image,
      popular: false,
      useCases: ['Marketing Materials', 'Product Images', 'Social Media', 'Design Assets'],
      benefits: ['Cost-effective creation', 'Brand consistency', 'Rapid prototyping', 'Unlimited variations']
    },
    {
      id: 'ai-video-analysis',
      name: 'AI Video Analysis',
      category: 'computer-vision',
      description: 'Intelligent video processing with object detection, scene analysis, and content moderation.',
      features: ['Object Detection', 'Scene Analysis', 'Content Moderation', 'Real-time Processing', 'Batch Analysis', 'Custom Models'],
      pricing: { starter: 199, professional: 499, enterprise: 1299 },
      icon: Video,
      popular: false,
      useCases: ['Content Moderation', 'Security Monitoring', 'Quality Control', 'Analytics'],
      benefits: ['Automated moderation', 'Enhanced security', 'Quality assurance', 'Real-time insights']
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights',
      category: 'analytics',
      description: 'Intelligent customer behavior analysis and personalized engagement strategies.',
      features: ['Behavior Analysis', 'Segmentation', 'Personalization', 'Churn Prediction', 'Lifetime Value', 'Engagement Scoring'],
      pricing: { starter: 179, professional: 449, enterprise: 1199 },
      icon: Users,
      popular: true,
      useCases: ['Customer Retention', 'Personalization', 'Marketing Optimization', 'Product Development'],
      benefits: ['Improved retention', 'Personalized experiences', 'Higher engagement', 'Revenue growth']
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      category: 'machine-learning',
      description: 'Intelligent supply chain management with demand forecasting and optimization algorithms.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Assessment', 'Cost Optimization', 'Real-time Tracking'],
      pricing: { starter: 299, professional: 699, enterprise: 1799 },
      icon: Package,
      popular: false,
      useCases: ['Inventory Management', 'Logistics Optimization', 'Demand Planning', 'Cost Reduction'],
      benefits: ['Reduced costs', 'Improved efficiency', 'Better planning', 'Risk mitigation']
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      category: 'machine-learning',
      description: 'Specialized AI solutions for healthcare including medical imaging and diagnostic assistance.',
      features: ['Medical Imaging', 'Diagnostic Assistance', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support', 'Compliance'],
      pricing: { starter: 499, professional: 1299, enterprise: 2999 },
      icon: Heart,
      popular: false,
      useCases: ['Medical Diagnosis', 'Drug Discovery', 'Patient Care', 'Research'],
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Better outcomes', 'Cost efficiency']
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory)

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  }

  const stats = [
    { value: '500+', label: 'AI Models Deployed', icon: <Brain className="w-8 h-8 text-cyan-400" /> },
    { value: '99.9%', label: 'Accuracy Rate', icon: <Target className="w-8 h-8 text-green-400" /> },
    { value: '24/7', label: 'AI Monitoring', icon: <Clock className="w-8 h-8 text-blue-400" /> },
    { value: '50+', label: 'AI Experts', icon: <Users className="w-8 h-8 text-purple-400" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations, 
              drive innovation, and achieve unprecedented growth with our comprehensive AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start AI Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                      <span key={index} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Pricing:</h4>
                  <div className="flex justify-between text-sm">
                    <div className="text-gray-300">
                      <span className="text-green-400">Starter:</span> ${service.pricing.starter}/mo
                    </div>
                    <div className="text-gray-300">
                      <span className="text-blue-400">Pro:</span> ${service.pricing.pro}/mo
                    </div>
                    <div className="text-gray-300">
                      <span className="text-purple-400">Enterprise:</span> ${service.pricing.enterprise}/mo
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                    Get Started
                  </button>
                  <button className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible AI Service Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your AI needs. All plans include implementation support and training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-300">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 AI services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard templates
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Start Free Trial
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-300">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10 AI services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Start Free Trial
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799<span className="text-lg text-gray-300">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited AI services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label solution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom development
                </li>
              </ul>
              <button className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our AI experts to discuss your requirements and start your AI transformation journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300 text-center">{contactInfo.address}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start AI Journey
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage