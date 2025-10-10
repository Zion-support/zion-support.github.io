'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  BarChart, 
  FileText, 
  Mail, 
  DollarSign, 
  Box, 
  Target, 
  TrendingUp, 
  Globe, 
  Search,
  CheckCircle, 
  ArrowRight, 
  Phone,
  Mail as MailIcon,
  MapPin,
  Zap,
  Users,
  Settings,
  Shield,
  Clock,
  Star,
  Sparkles,
  Cpu,
  Database,
  Smartphone,
  Cloud,
  Lock,
  Code,
  Palette,
  Headphones,
  Monitor
} from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'all',
    'Analytics',
    'Content',
    'Marketing',
    'Finance',
    'Productivity',
    'Social Media',
    'SEO',
    'Communication'
  ]

  const services = [
    {
      id: 1,
      title: 'Analytics Dashboard',
      description: 'Comprehensive business analytics dashboard with real-time insights and custom reporting.',
      icon: BarChart,
      category: 'Analytics',
      features: [
        'Real-time data visualization',
        'Custom dashboards',
        'Automated reporting',
        'Data export capabilities',
        'Mobile responsive design'
      ],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Custom reports', 'Easy integration']
    },
    {
      id: 2,
      title: 'Content Generator',
      description: 'AI-powered content creation tool for blogs, social media, and marketing materials.',
      icon: FileText,
      category: 'Content',
      features: [
        'AI content generation',
        'Multiple content types',
        'SEO optimization',
        'Brand voice customization',
        'Bulk content creation'
      ],
      price: 'Starting at $19/month',
      marketPrice: '$30-150/month',
      benefits: ['Save 80% content time', 'Consistent quality', 'SEO optimized', 'Brand aligned']
    },
    {
      id: 3,
      title: 'Email Marketing',
      description: 'Advanced email marketing platform with automation, segmentation, and analytics.',
      icon: Mail,
      category: 'Marketing',
      features: [
        'Email automation',
        'Advanced segmentation',
        'A/B testing',
        'Analytics and reporting',
        'Template library'
      ],
      price: 'Starting at $39/month',
      marketPrice: '$60-300/month',
      benefits: ['Higher open rates', 'Automated campaigns', 'Better segmentation', 'Detailed analytics']
    },
    {
      id: 4,
      title: 'Expense Tracker',
      description: 'Smart expense tracking and financial management for businesses and individuals.',
      icon: DollarSign,
      category: 'Finance',
      features: [
        'Receipt scanning',
        'Category management',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support'
      ],
      price: 'Starting at $15/month',
      marketPrice: '$25-100/month',
      benefits: ['Better financial control', 'Tax ready', 'Automated tracking', 'Multi-currency']
    },
    {
      id: 5,
      title: 'Inventory Management',
      description: 'Complete inventory management system with real-time tracking and analytics.',
      icon: Box,
      category: 'Productivity',
      features: [
        'Real-time inventory tracking',
        'Low stock alerts',
        'Barcode scanning',
        'Supplier management',
        'Analytics dashboard'
      ],
      price: 'Starting at $49/month',
      marketPrice: '$80-400/month',
      benefits: ['Reduce stockouts', 'Optimize inventory', 'Save time', 'Better forecasting']
    },
    {
      id: 6,
      title: 'Lead Scoring',
      description: 'Intelligent lead scoring system to identify and prioritize high-value prospects.',
      icon: Target,
      category: 'Marketing',
      features: [
        'AI-powered scoring',
        'Behavioral tracking',
        'Custom scoring rules',
        'CRM integration',
        'Performance analytics'
      ],
      price: 'Starting at $35/month',
      marketPrice: '$50-250/month',
      benefits: ['Higher conversion rates', 'Better lead quality', 'Automated scoring', 'ROI optimization']
    },
    {
      id: 7,
      title: 'SEO Optimizer',
      description: 'Comprehensive SEO tool for keyword research, content optimization, and rank tracking.',
      icon: TrendingUp,
      category: 'SEO',
      features: [
        'Keyword research',
        'Content optimization',
        'Rank tracking',
        'Competitor analysis',
        'Technical SEO audit'
      ],
      price: 'Starting at $25/month',
      marketPrice: '$40-200/month',
      benefits: ['Better search rankings', 'Increased organic traffic', 'Competitive advantage', 'Data-driven SEO']
    },
    {
      id: 8,
      title: 'Social Manager',
      description: 'All-in-one social media management platform for scheduling, monitoring, and analytics.',
      icon: Globe,
      category: 'Social Media',
      features: [
        'Multi-platform posting',
        'Content scheduling',
        'Social listening',
        'Analytics dashboard',
        'Team collaboration'
      ],
      price: 'Starting at $45/month',
      marketPrice: '$70-350/month',
      benefits: ['Save time', 'Better engagement', 'Consistent posting', 'Detailed analytics']
    },
    {
      id: 9,
      title: 'Appointment Scheduler',
      description: 'Smart appointment booking system with calendar integration and automated reminders.',
      icon: Clock,
      category: 'Productivity',
      features: [
        'Online booking',
        'Calendar integration',
        'Automated reminders',
        'Payment processing',
        'Custom availability'
      ],
      price: 'Starting at $20/month',
      marketPrice: '$30-150/month',
      benefits: ['Reduce no-shows', 'Automated scheduling', 'Better customer experience', 'Time savings']
    },
    {
      id: 10,
      title: 'Chat Analytics',
      description: 'Advanced analytics for customer support chats with sentiment analysis and insights.',
      icon: Headphones,
      category: 'Analytics',
      features: [
        'Sentiment analysis',
        'Response time tracking',
        'Customer satisfaction',
        'Agent performance',
        'Trend analysis'
      ],
      price: 'Starting at $30/month',
      marketPrice: '$50-200/month',
      benefits: ['Better customer service', 'Agent optimization', 'Sentiment insights', 'Performance tracking']
    },
    {
      id: 11,
      title: 'Document Processor',
      description: 'AI-powered document processing and management system with OCR and automation.',
      icon: FileText,
      category: 'Productivity',
      features: [
        'OCR text extraction',
        'Document classification',
        'Automated workflows',
        'Version control',
        'Search and retrieval'
      ],
      price: 'Starting at $35/month',
      marketPrice: '$55-250/month',
      benefits: ['Automated processing', 'Better organization', 'Time savings', 'Easy search']
    },
    {
      id: 12,
      title: 'Support Bot',
      description: 'Intelligent customer support chatbot with natural language processing and learning capabilities.',
      icon: Cpu,
      category: 'Communication',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Knowledge base integration',
        'Escalation to humans',
        'Analytics and insights'
      ],
      price: 'Starting at $40/month',
      marketPrice: '$60-300/month',
      benefits: ['24/7 support', 'Instant responses', 'Reduced workload', 'Better customer satisfaction']
    }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const benefits = [
    'Affordable pricing starting at $15/month',
    'No long-term contracts required',
    'Easy setup and integration',
    '24/7 customer support',
    'Regular updates and new features'
  ]

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Users' },
    { icon: Star, value: '4.9/5', label: 'User Rating' },
    { icon: Zap, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '50%', label: 'Cost Savings' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Affordable Business Tools</title>
        <meta name="description" content="Affordable micro SaaS solutions for small businesses. Analytics, content generation, email marketing, and more. Start from $15/month." />
        <meta name="keywords" content="micro saas, small business tools, affordable software, analytics, content generation, email marketing, productivity tools" />
      </Helmet>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Affordable, powerful business tools designed for small and medium businesses. 
              Get enterprise-level features without the enterprise price tag.
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

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
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
                  placeholder="Search micro SaaS solutions..."
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
                      Get Started
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
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable, powerful tools that help your business grow
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Affordable Pricing</h3>
                <p className="text-gray-300">Starting from just $15/month, our solutions are designed to be accessible for small businesses.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Easy Setup</h3>
                <p className="text-gray-300">Get up and running in minutes with our intuitive setup process and comprehensive documentation.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">No Contracts</h3>
                <p className="text-gray-300">Cancel anytime with no long-term commitments. Pay monthly and scale as you grow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Boost Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start with our micro SaaS solutions and see the difference they can make for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
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

export default MicroSaasPage