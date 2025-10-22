'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
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
  Star,
  Clock,
  Users,
  Settings,
  Code,
  Target,
  TrendingUp,
  Heart,
  FileText,
  Cpu,
  Server,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const aiServices = [
    {
      id: 'ai-chatbots',
      name: 'AI Chatbots & NLP',
      description: 'Intelligent conversational AI for customer service and support',
      icon: Brain,
      features: ['Natural language processing', 'Multi-language support', '24/7 availability', 'Custom integrations'],
      price: 'Starting at $299/month',
      popular: true
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing',
      icon: FileText,
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'SEO optimization'],
      price: 'Starting at $199/month',
      popular: false
    },
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and insights powered by artificial intelligence',
      icon: BarChart3,
      features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      price: 'Starting at $499/month',
      popular: true
    },
    {
      id: 'ai-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis using advanced computer vision technology',
      icon: Cpu,
      features: ['Image recognition', 'Object detection', 'Video analysis', 'Quality control'],
      price: 'Starting at $399/month',
      popular: false
    }
  ]

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster recovery', '24/7 monitoring'],
      price: 'Starting at $599/month',
      popular: true
    },
    {
      id: 'api-development',
      name: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integrations',
      icon: Code,
      features: ['RESTful APIs', 'GraphQL', 'API documentation', 'Rate limiting'],
      price: 'Starting at $399/month',
      popular: false
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      icon: Shield,
      features: ['Security audits', 'Penetration testing', 'Compliance', 'Incident response'],
      price: 'Starting at $799/month',
      popular: true
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Optimized database solutions for performance and scalability',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Migration'],
      price: 'Starting at $299/month',
      popular: false
    }
  ]

  const microSaasProducts = [
    {
      id: 'ai-social-media',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI-powered content',
      icon: Smartphone,
      features: ['Auto-posting', 'Content generation', 'Analytics', 'Scheduling'],
      price: 'Starting at $99/month',
      popular: true
    },
    {
      id: 'ai-video-generator',
      name: 'AI Video Generator',
      description: 'Create professional videos using artificial intelligence',
      icon: Globe,
      features: ['Text-to-video', 'Auto-editing', 'Templates', 'Multi-format export'],
      price: 'Starting at $149/month',
      popular: false
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Intelligent voice assistants for customer service',
      icon: Phone,
      features: ['Voice recognition', 'Natural responses', 'Multi-language', 'Integration'],
      price: 'Starting at $199/month',
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with AI insights',
      icon: BarChart3,
      features: ['Real-time data', 'Predictive analytics', 'Custom reports', 'Alerts'],
      price: 'Starting at $299/month',
      popular: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', count: aiServices.length + itServices.length + microSaasProducts.length },
    { id: 'ai', name: 'AI Services', count: aiServices.length },
    { id: 'it', name: 'IT Services', count: itServices.length },
    { id: 'saas', name: 'Micro SaaS', count: microSaasProducts.length }
  ]

  const getFilteredServices = () => {
    switch (selectedCategory) {
      case 'ai':
        return aiServices
      case 'it':
        return itServices
      case 'saas':
        return microSaasProducts
      default:
        return [...aiServices, ...itServices, ...microSaasProducts]
    }
  }

  const stats = [
    { label: 'Services Delivered', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Response Time', value: '<2 hours', icon: Clock },
    { label: 'Success Rate', value: '100%', icon: TrendingUp }
  ]

  return (
    <>
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including chatbots, cloud infrastructure, cybersecurity, and custom development solutions." />
        <meta name="keywords" content="AI services, IT services, cloud infrastructure, cybersecurity, API development, micro SaaS" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive AI and IT solutions designed to transform your business. 
              From intelligent automation to robust infrastructure, we've got you covered.
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
              {getFilteredServices().map((service) => (
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
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <p className="text-green-400 text-sm font-semibold">Flexible pricing</p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your needs. 
              Our team of experts is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default ServicesPage