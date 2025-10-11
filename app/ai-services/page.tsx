'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Zap, Target, CheckCircle, ArrowRight, DollarSign, Star, Eye, MessageSquare, BarChart, Code, Shield, Cloud, Users, TrendingUp, Sparkles, Database, Globe, Smartphone, Lock, FileText, Search, Mic, Camera, Cpu, Network, Bot, Workflow } from 'lucide-react'

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced AI analytics platform that transforms raw data into actionable business insights and predictive analytics.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Custom ML Models'],
      pricing: 'Starting at $2,500/month',
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      category: 'Analytics'
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Customer Support',
      description: 'AI-powered customer service solution with natural language processing and automated ticket resolution.',
      features: ['24/7 AI Chatbots', 'Sentiment Analysis', 'Multi-language Support', 'Escalation Management'],
      pricing: 'Starting at $1,200/month',
      link: 'https://ziontechgroup.com/ai-customer-support',
      category: 'Customer Service'
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis for quality control, security, and automation across industries.',
      features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Real-time Processing'],
      pricing: 'Starting at $3,000/month',
      link: 'https://ziontechgroup.com/computer-vision',
      category: 'Computer Vision'
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics Platform',
      description: 'Comprehensive data analysis platform with machine learning algorithms for pattern recognition and insights.',
      features: ['Pattern Recognition', 'Anomaly Detection', 'Data Visualization', 'Automated Insights'],
      pricing: 'Starting at $1,800/month',
      link: 'https://ziontechgroup.com/ai-data-analytics',
      category: 'Data Science'
    },
    {
      icon: Code,
      title: 'AI Code Assistant',
      description: 'Intelligent coding assistant that helps developers write better code faster with AI-powered suggestions.',
      features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation'],
      pricing: 'Starting at $500/month',
      link: 'https://ziontechgroup.com/ai-code-assistant',
      category: 'Development'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered security solution that detects and prevents cyber threats in real-time.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Risk Assessment'],
      pricing: 'Starting at $2,200/month',
      link: 'https://ziontechgroup.com/ai-cybersecurity',
      category: 'Security'
    },
    {
      icon: Cloud,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure on cloud with GPU acceleration and managed ML services.',
      features: ['GPU Clusters', 'Model Training', 'Auto-scaling', 'Managed Services'],
      pricing: 'Starting at $4,000/month',
      link: 'https://ziontechgroup.com/ai-cloud-infrastructure',
      category: 'Infrastructure'
    },
    {
      icon: Users,
      title: 'AI HR Solutions',
      description: 'Intelligent human resources management with AI-powered recruitment and employee analytics.',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Retention Prediction'],
      pricing: 'Starting at $1,500/month',
      link: 'https://ziontechgroup.com/ai-hr-solutions',
      category: 'Human Resources'
    },
    {
      icon: TrendingUp,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for financial institutions including fraud detection and algorithmic trading.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      pricing: 'Starting at $5,000/month',
      link: 'https://ziontechgroup.com/ai-financial-services',
      category: 'Finance'
    },
    {
      icon: Sparkles,
      title: 'AI Content Generation',
      description: 'Intelligent content creation platform that generates high-quality text, images, and videos.',
      features: ['Text Generation', 'Image Creation', 'Video Production', 'Content Optimization'],
      pricing: 'Starting at $800/month',
      link: 'https://ziontechgroup.com/ai-content-generation',
      category: 'Content'
    },
    {
      icon: Database,
      title: 'AI Data Processing',
      description: 'Automated data processing and cleaning using AI algorithms for improved data quality.',
      features: ['Data Cleaning', 'Format Standardization', 'Duplicate Detection', 'Data Validation'],
      pricing: 'Starting at $1,000/month',
      link: 'https://ziontechgroup.com/ai-data-processing',
      category: 'Data Management'
    },
    {
      icon: Globe,
      title: 'AI E-commerce Optimization',
      description: 'AI-powered e-commerce solutions for personalized shopping experiences and inventory management.',
      features: ['Personalization', 'Recommendation Engine', 'Price Optimization', 'Inventory Prediction'],
      pricing: 'Starting at $2,800/month',
      link: 'https://ziontechgroup.com/ai-ecommerce',
      category: 'E-commerce'
    }
  ]

  const services = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Build intelligent systems that learn and adapt to your business needs.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Processing']
    },
    {
      icon: Zap,
      title: 'Natural Language Processing',
      description: 'Transform text and speech into actionable insights and automated responses.',
      features: ['Chatbots', 'Sentiment Analysis', 'Language Translation', 'Text Summarization']
    },
    {
      icon: Target,
      title: 'Computer Vision',
      description: 'Enable machines to interpret and understand visual information.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Quality Control']
    }
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
              Harness the power of artificial intelligence to transform your business operations and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge artificial intelligence services designed to transform your business operations and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-cyan-400">
                    {service.pricing}
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm text-gray-300">(4.8)</span>
                  </div>
                </div>
                
                <a 
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core AI Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core AI Technologies
            </h2>
            <p className="text-xl text-gray-300">
              Fundamental AI technologies that power our advanced solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI can transform your business operations and drive growth.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage