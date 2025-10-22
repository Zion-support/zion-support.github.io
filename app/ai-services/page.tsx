'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  Brain,
  MessageSquare,
  Eye,
  Zap,
  BarChart,
  Box,
  Mic,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Cpu,
  Server
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiServicesPage: React.FC = () => {
  const serviceType = 'ai'
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        '24/7 availability',
        'Custom integrations',
        'Analytics dashboard'
      ],
      category: 'automation',
      icon: MessageSquare,
      popular: true
    },
    {
      id: 'ai-analytics',
      name: 'AI Business Analytics',
      description: 'Intelligent data analysis and predictive insights for better decision making',
      price: '$499/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Predictive analytics',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        'Data visualization',
        'Trend analysis'
      ],
      category: 'analytics',
      icon: BarChart,
      popular: true
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email campaigns',
        'SEO optimization',
        'Brand voice consistency',
        'Content calendar'
      ],
      category: 'content',
      icon: FileText,
      popular: false
    },
    {
      id: 'ai-customer-service',
      name: 'AI Customer Service',
      description: 'Intelligent customer support with automated ticket routing and resolution',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Automated ticket routing',
        'Smart response suggestions',
        'Customer sentiment analysis',
        'Knowledge base integration',
        'Multi-channel support',
        'Performance analytics'
      ],
      category: 'automation',
      icon: Users,
      popular: false
    },
    {
      id: 'ai-process-automation',
      name: 'AI Process Automation',
      description: 'Streamline business processes with intelligent automation and workflow optimization',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Workflow automation',
        'Document processing',
        'Data extraction',
        'Task scheduling',
        'Error handling',
        'Process monitoring'
      ],
      category: 'automation',
      icon: Settings,
      popular: true
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'Predict equipment failures and optimize maintenance schedules using AI',
      price: '$799/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Failure prediction',
        'Maintenance scheduling',
        'Cost optimization',
        'Real-time monitoring',
        'Alert system',
        'Performance tracking'
      ],
      category: 'analytics',
      icon: Shield,
      popular: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'automation', name: 'Automation', count: services.filter(s => s.category === 'automation').length },
    { id: 'analytics', name: 'Analytics', count: services.filter(s => s.category === 'analytics').length },
    { id: 'content', name: 'Content', count: services.filter(s => s.category === 'content').length }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const stats = [
    { label: 'AI Services Delivered', value: '500+', icon: Brain },
    { label: 'Client Satisfaction', value: '98%', icon: Heart },
    { label: 'Cost Savings', value: '60%', icon: TrendingUp },
    { label: 'Response Time', value: '<1s', icon: Zap }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Professional AI services including chatbots, analytics, content generation, and process automation for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, chatbots, analytics, automation, business intelligence" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge AI solutions. From intelligent chatbots to predictive analytics, 
              we deliver AI services that drive growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="w-12 h-12 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <p className="text-green-400 text-sm font-semibold">Save up to 70%</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/demo"
                      className="px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                    >
                      Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already using our AI services to drive growth, 
              reduce costs, and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default AiServicesPage