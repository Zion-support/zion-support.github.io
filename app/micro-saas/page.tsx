'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BarChart, MessageCircle, Shield, Cloud, FileText, Users, Target, Calendar, Mail, Package, DollarSign, Settings, Monitor, CheckSquare, Globe, Eye, Code, Database, Zap, ArrowRight, Star, CheckCircle, Award, TrendingUp } from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      name: 'Zion Analytics Pro',
      href: '/zion-analytics-pro',
      icon: BarChart,
      description: 'Business intelligence platform with real-time analytics and predictive insights',
      price: 'From $29/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Multi-platform integration', 'Custom reporting'],
      category: 'Analytics',
      popular: true
    },
    {
      name: 'Zion Chat AI',
      href: '/zion-chat-ai',
      icon: MessageCircle,
      description: 'AI-powered customer support chatbot with natural language processing',
      price: 'From $19/month',
      features: ['24/7 AI support', 'Multi-language', 'Custom training', 'Analytics dashboard'],
      category: 'AI & Automation',
      popular: true
    },
    {
      name: 'Zion Security Shield',
      href: '/zion-security-shield',
      icon: Shield,
      description: 'Comprehensive cybersecurity monitoring and threat detection platform',
      price: 'From $49/month',
      features: ['Real-time monitoring', 'Threat detection', 'Compliance reporting', 'Incident response'],
      category: 'Security',
      popular: false
    },
    {
      name: 'Zion Cloud Vault',
      href: '/zion-cloud-vault',
      icon: Cloud,
      description: 'Secure cloud backup and disaster recovery solution for businesses',
      price: 'From $39/month',
      features: ['Automated backups', 'Disaster recovery', 'Data encryption', 'Multi-cloud support'],
      category: 'Cloud & Storage',
      popular: false
    },
    {
      name: 'Zion Content Studio',
      href: '/zion-content-studio',
      icon: FileText,
      description: 'AI-powered content creation platform for blogs, social media, and marketing',
      price: 'From $29/month',
      features: ['AI writing assistant', 'Content templates', 'SEO optimization', 'Multi-format export'],
      category: 'Content & Marketing',
      popular: true
    },
    {
      name: 'Zion CRM Intelligence',
      href: '/zion-crm-intelligence',
      icon: Users,
      description: 'AI-enhanced customer relationship management with predictive insights',
      price: 'From $59/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automation workflows'],
      category: 'CRM & Sales',
      popular: false
    },
    {
      name: 'Zion Data Sync',
      href: '/zion-data-sync',
      icon: Database,
      description: 'Data integration platform connecting all your business applications',
      price: 'From $39/month',
      features: ['Real-time sync', '100+ integrations', 'Data transformation', 'Error handling'],
      category: 'Data & Integration',
      popular: false
    },
    {
      name: 'Zion Lead Magnet',
      href: '/zion-lead-magnet',
      icon: Target,
      description: 'Lead generation platform with automated nurturing and scoring',
      price: 'From $49/month',
      features: ['Landing pages', 'Email sequences', 'Lead scoring', 'Analytics tracking'],
      category: 'Marketing',
      popular: false
    },
    {
      name: 'Zion Project Master',
      href: '/zion-project-master',
      icon: Calendar,
      description: 'AI-powered project management with intelligent task allocation',
      price: 'From $39/month',
      features: ['Smart scheduling', 'Resource optimization', 'Progress tracking', 'Team collaboration'],
      category: 'Productivity',
      popular: false
    },
    {
      name: 'Zion Email Automation',
      href: '/zion-email-automation',
      icon: Mail,
      description: 'Advanced email marketing automation with AI-driven personalization',
      price: 'From $29/month',
      features: ['Email sequences', 'A/B testing', 'Personalization', 'Deliverability optimization'],
      category: 'Marketing',
      popular: false
    },
    {
      name: 'Zion Inventory Smart',
      href: '/zion-inventory-smart',
      icon: Package,
      description: 'Intelligent inventory management with demand forecasting',
      price: 'From $49/month',
      features: ['Demand forecasting', 'Stock optimization', 'Supplier management', 'Cost tracking'],
      category: 'Operations',
      popular: false
    },
    {
      name: 'Zion Invoice Genius',
      href: '/zion-invoice-genius',
      icon: DollarSign,
      description: 'AI-powered invoicing and payment processing platform',
      price: 'From $19/month',
      features: ['Auto-invoicing', 'Payment processing', 'Expense tracking', 'Financial reporting'],
      category: 'Finance',
      popular: false
    }
  ]

  const categories = [
    { name: 'All', count: microSaasServices.length, active: true },
    { name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length, active: false },
    { name: 'AI & Automation', count: microSaasServices.filter(s => s.category === 'AI & Automation').length, active: false },
    { name: 'Security', count: microSaasServices.filter(s => s.category === 'Security').length, active: false },
    { name: 'Cloud & Storage', count: microSaasServices.filter(s => s.category === 'Cloud & Storage').length, active: false },
    { name: 'Content & Marketing', count: microSaasServices.filter(s => s.category === 'Content & Marketing').length, active: false },
    { name: 'CRM & Sales', count: microSaasServices.filter(s => s.category === 'CRM & Sales').length, active: false },
    { name: 'Data & Integration', count: microSaasServices.filter(s => s.category === 'Data & Integration').length, active: false },
    { name: 'Marketing', count: microSaasServices.filter(s => s.category === 'Marketing').length, active: false },
    { name: 'Productivity', count: microSaasServices.filter(s => s.category === 'Productivity').length, active: false },
    { name: 'Operations', count: microSaasServices.filter(s => s.category === 'Operations').length, active: false },
    { name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length, active: false }
  ]

  const stats = [
    { number: '50+', label: 'Micro SAAS Products', icon: Package },
    { number: '10,000+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: MessageCircle }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Zion\'s micro SAAS products have transformed our business operations. The analytics platform alone increased our efficiency by 40%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, GrowthCorp',
      content: 'The AI chatbot reduced our support costs by 60% while improving customer satisfaction. Incredible value!',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Enterprise Solutions',
      content: 'Zion Content Studio has revolutionized our content strategy. We\'re producing 3x more content with half the effort.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Award className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">50+ Micro SAAS Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Micro SAAS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of micro SAAS products designed to solve specific business challenges. 
              From AI-powered analytics to automated workflows, we have the tools you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Browse All Products
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Pricing
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Micro SAAS Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of specialized tools designed for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`cyber-card group relative ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cyan-400 font-medium bg-cyan-500/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by <span className="text-cyan-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about our micro SAAS products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our micro SAAS products to achieve their goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaasPage