import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Smartphone, Database, Shield, Zap, Brain, Code, Star, Cloud, BarChart3, MessageSquare, Cpu, Eye, Wifi } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSaasServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const microSaasServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, automated scheduling, and team collaboration features.',
      features: ['Smart prioritization algorithms', 'Automated scheduling', 'Real-time progress tracking', 'Team collaboration tools', 'Time tracking & analytics', 'Integration with 50+ apps'],
      pricing: '$19/month',
      popular: true,
      link: '/ai-task-manager',
      category: 'Productivity',
      marketPrice: '$25-35/month',
      benefits: ['Increase productivity by 40%', 'Reduce task completion time by 30%', 'Improve team coordination']
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: 'AI Expense Tracker Plus',
      description: 'Advanced expense tracking with receipt scanning, AI categorization, and comprehensive financial insights.',
      features: ['Receipt scanning with OCR', 'AI-powered categorization', 'Smart budget alerts', 'Tax preparation tools', 'Multi-currency support', 'Financial reporting'],
      pricing: '$14/month',
      popular: false,
      link: '/ai-expense-tracker',
      category: 'Finance',
      marketPrice: '$20-30/month',
      benefits: ['Save 5+ hours per month', 'Reduce expense errors by 90%', 'Improve tax accuracy']
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager Enterprise',
      description: 'Enterprise-grade password management with AI-powered security recommendations and breach monitoring.',
      features: ['Zero-knowledge encryption', 'AI password generation', 'Security audit & scoring', 'Multi-device sync', 'Breach monitoring', 'Team sharing controls'],
      pricing: '$24/month',
      popular: true,
      link: '/ai-password-manager',
      category: 'Security',
      marketPrice: '$30-45/month',
      benefits: ['Eliminate password reuse', 'Prevent 99% of password attacks', 'Comply with security standards']
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator Pro',
      description: 'Professional invoice creation with smart templates, automated payment tracking, and tax compliance.',
      features: ['AI-powered templates', 'Automated generation', 'Payment tracking & reminders', 'Tax calculations', 'Multi-language support', 'Client portal integration'],
      pricing: '$29/month',
      popular: false,
      link: '/ai-invoice-generator',
      category: 'Finance',
      marketPrice: '$35-50/month',
      benefits: ['Reduce invoicing time by 80%', 'Improve payment collection by 25%', 'Ensure tax compliance']
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Health Tracker Premium',
      description: 'Comprehensive health monitoring with AI insights, personalized recommendations, and medical integration.',
      features: ['Health data monitoring', 'AI-powered insights', 'Goal tracking & reminders', 'Wellness recommendations', 'Medical data integration', 'Telehealth connectivity'],
      pricing: '$16/month',
      popular: true,
      link: '/ai-health-tracker',
      category: 'Health',
      marketPrice: '$25-40/month',
      benefits: ['Improve health outcomes', 'Reduce healthcare costs', 'Personalized wellness plans']
    },
    {
      icon: <Code className="w-12 h-12 text-yellow-500" />,
      title: 'AI Smart Calendar Pro',
      description: 'Intelligent calendar management with smart scheduling, conflict resolution, and meeting optimization.',
      features: ['AI-powered scheduling', 'Conflict resolution', 'Meeting optimization', 'Time blocking', 'Integration with 100+ apps', 'Analytics & insights'],
      pricing: '$22/month',
      popular: false,
      link: '/ai-smart-calendar',
      category: 'Productivity',
      marketPrice: '$30-45/month',
      benefits: ['Optimize meeting efficiency', 'Reduce scheduling conflicts', 'Improve time management']
    },
    {
      icon: <Cloud className="w-12 h-12 text-cyan-500" />,
      title: 'AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflow management.',
      features: ['OCR & text extraction', 'AI data classification', 'Automated workflows', 'Document templates', 'Version control', 'Team collaboration'],
      pricing: '$35/month',
      popular: true,
      link: '/ai-document-processor',
      category: 'Productivity',
      marketPrice: '$50-75/month',
      benefits: ['Process documents 10x faster', 'Reduce manual data entry by 95%', 'Improve accuracy']
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-indigo-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Automated reports', 'Custom visualizations', 'Data integration', 'Mobile app'],
      pricing: '$45/month',
      popular: true,
      link: '/ai-analytics-dashboard',
      category: 'Analytics',
      marketPrice: '$60-100/month',
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Automate reporting']
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-pink-500" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with natural language processing and multi-channel support.',
      features: ['Natural language processing', 'Multi-channel support', 'Ticket routing', 'Knowledge base integration', 'Sentiment analysis', 'Performance analytics'],
      pricing: '$39/month',
      popular: false,
      link: '/ai-customer-support-bot',
      category: 'Customer Service',
      marketPrice: '$55-80/month',
      benefits: ['Reduce support costs by 60%', 'Improve response time by 80%', 'Increase customer satisfaction']
    },
    {
      icon: <Cpu className="w-12 h-12 text-teal-500" />,
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistant with code generation, debugging, and optimization recommendations.',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Code review', 'Documentation generation', 'Multi-language support'],
      pricing: '$49/month',
      popular: true,
      link: '/ai-code-assistant',
      category: 'Development',
      marketPrice: '$70-120/month',
      benefits: ['Increase coding speed by 50%', 'Reduce bugs by 40%', 'Improve code quality']
    },
    {
      icon: <Eye className="w-12 h-12 text-amber-500" />,
      title: 'AI Image Analyzer',
      description: 'Computer vision platform for image analysis, object detection, and automated visual content processing.',
      features: ['Object detection', 'Image classification', 'OCR capabilities', 'Quality assessment', 'Batch processing', 'API integration'],
      pricing: '$32/month',
      popular: false,
      link: '/ai-image-analyzer',
      category: 'Computer Vision',
      marketPrice: '$45-70/month',
      benefits: ['Automate visual tasks', 'Improve accuracy', 'Scale image processing']
    },
    {
      icon: <Wifi className="w-12 h-12 text-violet-500" />,
      title: 'AI Network Monitor',
      description: 'Intelligent network monitoring with anomaly detection, performance optimization, and security alerts.',
      features: ['Real-time monitoring', 'Anomaly detection', 'Performance optimization', 'Security alerts', 'Traffic analysis', 'Automated responses'],
      pricing: '$42/month',
      popular: true,
      link: '/ai-network-monitor',
      category: 'Infrastructure',
      marketPrice: '$60-90/month',
      benefits: ['Prevent network issues', 'Optimize performance', 'Enhance security']
    }
  ]

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Health', 'Analytics', 'Customer Service', 'Development', 'Computer Vision', 'Infrastructure']

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory)

  const stats = [
    { number: '50,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '15+', label: 'Micro SAAS Apps' },
    { number: '24/7', label: 'Support' }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process and guided onboarding.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Powerful tools at micro-SaaS prices, perfect for small businesses and individuals.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate tasks and improve productivity.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support to help you get the most out of your tools.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Specialized micro software solutions designed for specific business needs. AI-powered tools for productivity, finance, security, and more." />
        <meta name="keywords" content="micro SaaS, software solutions, productivity tools, AI tools, business software" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Specialized micro software solutions designed for specific business needs and workflows. 
              Powerful tools at micro-SaaS prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
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
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of specialized micro software solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">
                      {service.pricing}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300 ml-1">4.8</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: <span className="line-through">{service.marketPrice}</span>
                    <span className="text-green-400 ml-2 font-semibold">Save up to 30%</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Try Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver powerful, affordable tools designed for modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start using our micro SaaS solutions today and experience the power of specialized tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}