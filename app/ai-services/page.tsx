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
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone,
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Database, 
  Users, 
  Settings,
  Cpu,
  Bot,
  Sparkles,
  Layers,
  Workflow,
  BarChart3,
  Smartphone,
  Cloud,
  Lock,
  Code,
  Palette,
  Headphones,
  Mail,
  MapPin
} from 'lucide-react'

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'all',
    'Customer Service',
    'Content',
    'Analytics',
    'Computer Vision',
    'Voice AI',
    'Automation',
    'Security',
    'Mobile',
    'Infrastructure',
    'Design'
  ]

  const features = [
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that provides 24/7 customer support and engagement.',
      icon: Bot,
      category: 'Customer Service',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'Integration with CRM systems',
        'Real-time learning capabilities'
      ],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions']
    },
    {
      id: 2,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing.',
      icon: FileText,
      category: 'Content',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing campaigns',
        'SEO-optimized content',
        'Brand voice customization'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms.',
      icon: BarChart3,
      category: 'Analytics',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models'
      ],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization']
    },
    {
      id: 4,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation.',
      icon: Eye,
      category: 'Computer Vision',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing'
      ],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction']
    },
    {
      id: 5,
      title: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions.',
      icon: Headphones,
      category: 'Voice AI',
      features: [
        'Speech-to-text conversion',
        'Voice synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support'
      ],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['Improved accessibility', 'Voice automation', 'Call quality insights', 'Multi-language support']
    },
    {
      id: 6,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows.',
      icon: Workflow,
      category: 'Automation',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring'
      ],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation']
    },
    {
      id: 7,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security monitoring using AI algorithms.',
      icon: Shield,
      category: 'Security',
      features: [
        'Threat detection',
        'Behavioral analysis',
        'Incident response',
        'Vulnerability assessment',
        'Compliance monitoring'
      ],
      price: 'Starting at $499/month',
      marketPrice: '$800-4000/month',
      benefits: ['Proactive security', 'Reduced false positives', 'Faster incident response', 'Compliance assurance']
    },
    {
      id: 8,
      title: 'AI Mobile Applications',
      description: 'Custom mobile apps with integrated AI features for iOS and Android.',
      icon: Smartphone,
      category: 'Mobile',
      features: [
        'AI-powered features',
        'Cross-platform development',
        'Offline AI capabilities',
        'Real-time processing',
        'Custom integrations'
      ],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Enhanced user experience', 'Intelligent features', 'Competitive advantage', 'Future-proof solutions']
    },
    {
      id: 9,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure and model deployment on cloud platforms.',
      icon: Cloud,
      category: 'Infrastructure',
      features: [
        'Model deployment',
        'Auto-scaling',
        'GPU optimization',
        'Data pipeline management',
        'Monitoring and logging'
      ],
      price: 'Starting at $699/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Scalable infrastructure', 'Cost optimization', 'High availability', 'Easy deployment']
    },
    {
      id: 10,
      title: 'AI Design Assistant',
      description: 'AI-powered design tools for graphics, UI/UX, and creative content generation.',
      icon: Palette,
      category: 'Design',
      features: [
        'Automated design generation',
        'Brand consistency',
        'A/B testing optimization',
        'Color and layout suggestions',
        'Template customization'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1200/month',
      benefits: ['Faster design process', 'Consistent branding', 'Creative inspiration', 'Cost-effective solutions']
    }
  ]

  const filteredServices = features.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, data analytics, computer vision, AI automation" />
      </Helmet>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From chatbots to computer vision, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </a>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">Category: </span>
                    <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold">Our Price:</span>
                      <span className="text-white font-bold">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Market Price:</span>
                      <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/contact"
                      className="flex items-center text-white hover:text-purple-400 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Increase Efficiency by 60%</h3>
                <p className="text-gray-300">Our AI solutions automate repetitive tasks and optimize workflows, delivering measurable efficiency gains.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Reduce Costs by 40%</h3>
                <p className="text-gray-300">Automation and AI-driven optimization significantly reduce operational costs and resource requirements.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enhanced Decision Making</h3>
                <p className="text-gray-300">AI-powered insights and predictive analytics enable data-driven decision making at scale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our AI experts to discuss your requirements and get a customized solution that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AIServicesPage