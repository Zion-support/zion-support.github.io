'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  Award,
  Rocket,
  Eye,
  Mic,
  Target,
  Heart,
  Settings,
  Box,
  Cpu,
  FileText,
  MessageSquare,
  Link,
  Server
} from 'lucide-react'

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Customer Service', 'Content', 'Analytics', 'Computer Vision', 'Voice AI', 'Automation', 'Security', 'Marketing', 'Finance', 'Healthcare', 'Development']

  const aiServices = [
    {
      id: 'ai-chatbots',
      icon: MessageSquare,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support',
      features: [
        'Natural language processing',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and emotion detection',
        'CRM integration (Salesforce, HubSpot)',
        'Real-time learning and adaptation',
        'Voice and video chat support',
        'Custom AI model training',
        'Advanced analytics and reporting'
      ],
      price: '$299/month',
      marketPrice: '$500-2000/month',
      benefits: [
        'Reduce support costs by 60%',
        '24/7 availability',
        'Instant responses',
        'Scalable solutions'
      ],
      category: 'Customer Service',
      popular: true,
      link: 'https://ziontechgroup.com/ai-chatbots',
      savings: '70% off market rate'
    },
    {
      id: 'ai-content-generation',
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing materials',
      features: [
        'Blog post generation',
        'Social media content creation',
        'Email marketing campaigns',
        'SEO optimization',
        'Brand voice customization',
        'Multi-platform publishing',
        'Content calendar management',
        'Performance analytics'
      ],
      price: '$199/month',
      marketPrice: '$300-1500/month',
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing'
      ],
      category: 'Content',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-generation',
      savings: '65% off market rate'
    },
    {
      id: 'ai-data-analytics',
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms for data-driven decisions',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models',
        'Data visualization',
        'Machine learning insights',
        'ROI optimization'
      ],
      price: '$399/month',
      marketPrice: '$800-3000/month',
      benefits: [
        'Data-driven insights',
        'Predictive forecasting',
        'Automated reporting',
        'ROI optimization'
      ],
      category: 'Analytics',
      popular: true,
      link: 'https://ziontechgroup.com/ai-data-analytics',
      savings: '75% off market rate'
    },
    {
      id: 'ai-computer-vision',
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation with real-time processing',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing',
        'Custom model training',
        'API integration',
        'Edge computing support'
      ],
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Real-time monitoring',
        'Cost reduction'
      ],
      category: 'Computer Vision',
      popular: true,
      link: 'https://ziontechgroup.com/ai-computer-vision',
      savings: '60% off market rate'
    },
    {
      id: 'ai-voice-processing',
      icon: Mic,
      title: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions and accessibility',
      features: [
        'Speech-to-text conversion',
        'Voice synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support',
        'Real-time processing',
        'Custom voice training',
        'API integration'
      ],
      price: '$249/month',
      marketPrice: '$400-1800/month',
      benefits: [
        'Improved accessibility',
        'Voice automation',
        'Call quality insights',
        'Multi-language support'
      ],
      category: 'Voice AI',
      popular: false,
      link: 'https://ziontechgroup.com/ai-voice-processing',
      savings: '70% off market rate'
    },
    {
      id: 'ai-workflow-automation',
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring',
        'Integration capabilities',
        'Custom automation rules',
        'Analytics and reporting'
      ],
      price: '$349/month',
      marketPrice: '$600-2500/month',
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      link: 'https://ziontechgroup.com/ai-workflow-automation',
      savings: '70% off market rate'
    },
    {
      id: 'ai-fraud-detection',
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Risk scoring algorithms',
        'Anomaly detection',
        'Automated alert systems',
        'Machine learning models',
        'API integration',
        'Compliance reporting'
      ],
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time protection',
        'False positive reduction',
        'Compliance ready'
      ],
      category: 'Security',
      popular: true,
      link: 'https://ziontechgroup.com/ai-fraud-detection',
      savings: '70% off market rate'
    },
    {
      id: 'ai-personalization',
      icon: Target,
      title: 'AI Personalization Engine',
      description: 'Advanced recommendation systems and personalization algorithms for enhanced customer experience',
      features: [
        'Real-time recommendations',
        'Customer segmentation',
        'Behavioral analysis',
        'A/B testing automation',
        'Cross-platform personalization',
        'Machine learning models',
        'API integration',
        'Performance analytics'
      ],
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      benefits: [
        'Increase conversions by 40%',
        'Improve customer engagement',
        'Higher customer lifetime value',
        'Automated optimization'
      ],
      category: 'Marketing',
      popular: true,
      link: 'https://ziontechgroup.com/ai-personalization',
      savings: '70% off market rate'
    },
    {
      id: 'ai-financial-modeling',
      icon: TrendingUp,
      title: 'AI Financial Modeling',
      description: 'Advanced financial analysis and modeling using machine learning for investment decisions',
      features: [
        'Portfolio optimization',
        'Risk assessment',
        'Market prediction',
        'Algorithmic trading',
        'Compliance monitoring',
        'Real-time analysis',
        'Custom models',
        'API integration'
      ],
      price: '$899/month',
      marketPrice: '$2000-6000/month',
      benefits: [
        'Improve investment returns',
        'Reduce financial risk',
        'Automated trading strategies',
        'Real-time market analysis'
      ],
      category: 'Finance',
      popular: true,
      link: 'https://ziontechgroup.com/ai-financial-modeling',
      savings: '70% off market rate'
    },
    {
      id: 'ai-healthcare-diagnostics',
      icon: Heart,
      title: 'AI Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance using advanced computer vision and machine learning',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Patient risk assessment',
        'Treatment recommendations',
        'Drug interaction checking',
        'HIPAA compliance',
        'Integration with EMR systems',
        'Clinical decision support'
      ],
      price: '$2,999/month',
      marketPrice: '$5000-20000/month',
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce diagnostic time',
        'Early disease detection',
        'Better patient outcomes'
      ],
      category: 'Healthcare',
      popular: false,
      link: 'https://ziontechgroup.com/ai-healthcare-diagnostics',
      savings: '70% off market rate'
    },
    {
      id: 'ai-code-assistant',
      icon: Cpu,
      title: 'AI Code Assistant',
      description: 'Intelligent code generation, review, and optimization with automated bug detection and suggestions',
      features: [
        'Code generation',
        'Automated code review',
        'Bug detection',
        'Performance optimization',
        'Documentation generation',
        'Test case generation',
        'Security analysis',
        'IDE integration'
      ],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: [
        'Reduce development time by 50%',
        'Improve code quality',
        'Automated testing',
        'Faster debugging'
      ],
      category: 'Development',
      popular: true,
      link: 'https://ziontechgroup.com/ai-code-assistant',
      savings: '70% off market rate'
    },
    {
      id: 'ai-customer-insights',
      icon: Users,
      title: 'AI Customer Insights',
      description: 'Advanced customer analytics and behavioral insights to improve customer experience and retention',
      features: [
        'Customer journey mapping',
        'Behavioral analysis',
        'Churn prediction',
        'Lifetime value calculation',
        'Segmentation analysis',
        'Sentiment analysis',
        'Real-time dashboards',
        'API integration'
      ],
      price: '$699/month',
      marketPrice: '$1500-5000/month',
      benefits: [
        'Improve customer retention',
        'Increase customer lifetime value',
        'Predict customer behavior',
        'Optimize marketing campaigns'
      ],
      category: 'Analytics',
      popular: true,
      link: 'https://ziontechgroup.com/ai-customer-insights',
      savings: '70% off market rate'
    }
  ]

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: 'Cutting-Edge AI',
      description: 'Latest machine learning and AI technologies for maximum performance and accuracy.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance with industry standards and regulations.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: 'Rapid Deployment',
      description: 'Quick setup and deployment with minimal configuration and maximum efficiency.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: 'Proven ROI',
      description: 'Measurable results with average 300% return on investment for our AI implementations.'
    }
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'AI Models Deployed' },
    { icon: TrendingUp, value: '99.9%', label: 'Accuracy Rate' },
    { icon: Shield, value: '100%', label: 'Secure & Compliant' },
    { icon: Award, value: '4.9/5', label: 'Customer Rating' },
    { icon: Rocket, value: '24/7', label: 'AI Support' },
    { icon: Star, value: '50+', label: 'AI Services' }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services designed to transform your business. From chatbots to computer vision, we provide cutting-edge AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI chatbots, computer vision, AI analytics, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced artificial intelligence solutions designed to transform your business operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <span>Call: (302) 464-0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with cutting-edge technology and designed for maximum business impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Services`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      {service.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                      )}
                    </div>
                    {service.savings && (
                      <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can help you achieve your business goals. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
              <div className="mt-6 text-white/80">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AiServicesPage
