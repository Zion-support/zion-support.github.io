'use client'
import React, { useState } from 'react'
import SEOHead from '../components/SEOHead'
import FuturisticBackground from '../components/FuturisticBackground'
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Code, 
  Cloud, 
  Smartphone, 
  Mail, 
  BarChart3, 
  Users, 
  Lock, 
  Clock,
  ArrowRight,
  Sparkles,
  Rocket,
  Brain,
  Cpu,
  Eye,
  MessageSquare,
  FileText,
  Image,
  Video,
  Mic
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All AI Services', icon: <Brain className="w-5 h-5" /> },
    { id: 'content', name: 'Content Generation', icon: <FileText className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics & Insights', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-5 h-5" /> },
    { id: 'vision', name: 'Computer Vision', icon: <Eye className="w-5 h-5" /> },
    { id: 'nlp', name: 'Natural Language', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'security', name: 'AI Security', icon: <Shield className="w-5 h-5" /> }
  ]

  const aiServices = [
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation Suite',
      category: 'content',
      description: 'Comprehensive AI-powered content creation platform that generates high-quality articles, blogs, social media posts, and marketing copy.',
      features: [
        'Generate 10,000+ words per hour',
        'SEO-optimized content',
        'Multiple content formats',
        'Brand voice customization',
        'Plagiarism detection',
        'Multi-language support',
        'Content scheduling',
        'Performance analytics'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['50,000 words/month', 'Basic templates', 'Email support', '5 content formats'] },
        pro: { price: 129, period: 'month', features: ['200,000 words/month', 'Advanced templates', 'Priority support', 'All content formats', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited words', 'Custom templates', 'Dedicated support', 'White-label option', 'Custom integrations'] }
      },
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      id: 'ai-analytics-platform',
      name: 'AI Analytics Platform',
      category: 'analytics',
      description: 'Advanced AI-powered analytics platform that provides real-time insights, predictive analytics, and automated reporting for your business.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Automated insights generation',
        'Custom dashboard creation',
        'Data visualization',
        'Trend analysis',
        'Anomaly detection',
        'Mobile app access'
      ],
      pricing: {
        starter: { price: 79, period: 'month', features: ['10 data sources', 'Basic analytics', 'Email reports', 'Email support'] },
        pro: { price: 199, period: 'month', features: ['50 data sources', 'Advanced analytics', 'Real-time reports', 'Priority support', 'API access'] },
        enterprise: { price: 499, period: 'month', features: ['Unlimited sources', 'Custom analytics', 'Dedicated support', 'White-label option', 'Custom integrations'] }
      },
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-analytics-platform'
    },
    {
      id: 'ai-automation-engine',
      name: 'AI Automation Engine',
      category: 'automation',
      description: 'Intelligent automation platform that automates complex business processes using AI and machine learning algorithms.',
      features: [
        'Workflow automation',
        'Process optimization',
        'Task scheduling',
        'Error handling',
        'Performance monitoring',
        'Custom automation rules',
        'Integration capabilities',
        'Scalable architecture'
      ],
      pricing: {
        starter: { price: 99, period: 'month', features: ['10 automation workflows', 'Basic monitoring', 'Email support', 'Standard integrations'] },
        pro: { price: 249, period: 'month', features: ['50 automation workflows', 'Advanced monitoring', 'Priority support', 'All integrations', 'API access'] },
        enterprise: { price: 599, period: 'month', features: ['Unlimited workflows', 'Custom monitoring', 'Dedicated support', 'White-label option', 'Custom integrations'] }
      },
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-automation-engine'
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision Suite',
      category: 'vision',
      description: 'Advanced computer vision platform that provides image recognition, object detection, and visual analysis capabilities.',
      features: [
        'Image recognition',
        'Object detection',
        'Facial recognition',
        'OCR text extraction',
        'Image classification',
        'Video analysis',
        'Real-time processing',
        'Custom model training'
      ],
      pricing: {
        starter: { price: 89, period: 'month', features: ['1,000 images/month', 'Basic recognition', 'Email support', 'Standard models'] },
        pro: { price: 199, period: 'month', features: ['10,000 images/month', 'Advanced recognition', 'Priority support', 'Custom models', 'API access'] },
        enterprise: { price: 499, period: 'month', features: ['Unlimited images', 'Full recognition suite', 'Dedicated support', 'White-label option', 'Custom integrations'] }
      },
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-computer-vision'
    },
    {
      id: 'ai-nlp-platform',
      name: 'AI Natural Language Platform',
      category: 'nlp',
      description: 'Comprehensive natural language processing platform that provides text analysis, sentiment analysis, and language understanding capabilities.',
      features: [
        'Text analysis',
        'Sentiment analysis',
        'Language translation',
        'Text summarization',
        'Named entity recognition',
        'Intent classification',
        'Chatbot integration',
        'Multi-language support'
      ],
      pricing: {
        starter: { price: 69, period: 'month', features: ['10,000 text analyses/month', 'Basic NLP', 'Email support', 'Standard languages'] },
        pro: { price: 159, period: 'month', features: ['100,000 text analyses/month', 'Advanced NLP', 'Priority support', 'All languages', 'API access'] },
        enterprise: { price: 399, period: 'month', features: ['Unlimited analyses', 'Full NLP suite', 'Dedicated support', 'White-label option', 'Custom integrations'] }
      },
      icon: <MessageSquare className="w-8 h-8 text-cyan-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-nlp-platform'
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      category: 'security',
      description: 'Advanced AI-powered cybersecurity platform that provides threat detection, vulnerability assessment, and automated security responses.',
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Incident response',
        'Security monitoring',
        'Compliance checking',
        'Risk assessment',
        'Automated remediation',
        '24/7 monitoring'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['Basic threat detection', 'Email alerts', 'Email support', 'Standard monitoring'] },
        pro: { price: 299, period: 'month', features: ['Advanced threat detection', 'SMS alerts', 'Priority support', 'Advanced monitoring', 'API access'] },
        enterprise: { price: 699, period: 'month', features: ['Full threat detection', 'Custom alerts', 'Dedicated support', 'White-label option', 'Custom integrations'] }
      },
      icon: <Shield className="w-8 h-8 text-red-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-cybersecurity-suite'
    },
    {
      id: 'ai-chatbot-platform',
      name: 'AI Chatbot Platform',
      category: 'nlp',
      description: 'Intelligent chatbot platform that provides natural language understanding, conversation management, and multi-channel deployment.',
      features: [
        'Natural language understanding',
        'Conversation management',
        'Multi-channel deployment',
        'Knowledge base integration',
        'Human handoff',
        'Analytics dashboard',
        'Custom branding',
        'API integration'
      ],
      pricing: {
        starter: { price: 59, period: 'month', features: ['1,000 conversations/month', 'Basic responses', 'Email support', 'Standard channels'] },
        pro: { price: 139, period: 'month', features: ['10,000 conversations/month', 'Advanced responses', 'Priority support', 'All channels', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited conversations', 'Custom responses', 'Dedicated support', 'White-label option', 'Custom integrations'] }
      },
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-chatbot-platform'
    },
    {
      id: 'ai-video-analysis',
      name: 'AI Video Analysis Platform',
      category: 'vision',
      description: 'Advanced video analysis platform that provides object tracking, scene recognition, and automated video processing capabilities.',
      features: [
        'Object tracking',
        'Scene recognition',
        'Motion detection',
        'Video summarization',
        'Real-time analysis',
        'Batch processing',
        'Custom model training',
        'API integration'
      ],
      pricing: {
        starter: { price: 119, period: 'month', features: ['100 hours/month', 'Basic analysis', 'Email support', 'Standard models'] },
        pro: { price: 249, period: 'month', features: ['500 hours/month', 'Advanced analysis', 'Priority support', 'Custom models', 'API access'] },
        enterprise: { price: 599, period: 'month', features: ['Unlimited hours', 'Full analysis suite', 'Dedicated support', 'White-label option', 'Custom integrations'] }
      },
      icon: <Video className="w-8 h-8 text-pink-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-video-analysis'
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      
      <SEOHead 
        title="AI Services - Zion Tech Group"
        description="Discover our comprehensive suite of AI services including content generation, analytics, automation, computer vision, and natural language processing. Advanced AI solutions for modern businesses."
        keywords="AI services, artificial intelligence, machine learning, content generation, analytics, automation, computer vision, natural language processing, AI solutions"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-purple-500/30">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                  <span className="text-purple-300 font-medium">Advanced AI Solutions</span>
                  <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powerful <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              AI Services
            </span> for Your Business
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence with our comprehensive suite of AI services. 
            From content generation to computer vision, we provide cutting-edge AI solutions that drive innovation and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${
                  service.popular ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    {service.popular && (
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 text-sm font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">
                      From ${service.pricing.starter.price}
                      <span className="text-lg text-gray-400">/{service.pricing.starter.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                    </a>
                    <Link
                      to="/contact"
                      className="w-full border border-purple-400/50 text-purple-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20"></div>
                <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  AI Capabilities
                </h2>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI services are powered by cutting-edge machine learning algorithms and neural networks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Brain className="w-12 h-12 text-blue-500" />, title: 'Machine Learning', description: 'Advanced ML algorithms for pattern recognition and prediction' },
              { icon: <Cpu className="w-12 h-12 text-green-500" />, title: 'Deep Learning', description: 'Neural networks for complex data processing and analysis' },
              { icon: <Eye className="w-12 h-12 text-purple-500" />, title: 'Computer Vision', description: 'Image and video analysis with high accuracy' },
              { icon: <MessageSquare className="w-12 h-12 text-orange-500" />, title: 'NLP', description: 'Natural language understanding and generation' }
            ].map((capability, index) => (
              <div key={index} className="group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-30"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our advanced AI services. Get started today and experience the future of technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/contact"
                  className="group relative bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="absolute -inset-1 bg-white rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>Start Your AI Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">+1 302 464 0950</div>
                  <div className="text-blue-200">Call Us Now</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">kleber@ziontechgroup.com</div>
                  <div className="text-blue-200">Email Us</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">24/7 Support</div>
                  <div className="text-blue-200">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}