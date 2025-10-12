'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Star, Sparkles, Rocket, DollarSign, Clock, Award, Wifi, FileText, Mail, Calendar, ShoppingCart, CreditCard, PieChart, Search, Share2, Headphones, Monitor, Smartphone as Phone, Laptop, Server, Wrench, Lightbulb, Heart, ThumbsUp } from 'lucide-react'

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation with SEO optimization, multi-language support, and brand voice consistency.',
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      link: '/micro-saas/ai-content-writer-pro',
      price: '$29/month',
      features: ['Unlimited content generation', 'SEO optimization', 'Multi-language support', 'Brand voice training', 'Plagiarism detection'],
      category: 'Content & Marketing'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time business intelligence dashboard with customizable widgets and automated reporting.',
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      link: '/micro-saas/analytics-dashboard',
      price: '$49/month',
      features: ['Real-time data visualization', 'Custom dashboards', 'Automated reports', 'Data export', 'Team collaboration'],
      category: 'Analytics & BI'
    },
    {
      title: 'Appointment Scheduler',
      description: 'Smart scheduling system with automated reminders, calendar integration, and payment processing.',
      icon: <Calendar className="w-8 h-8 text-green-400" />,
      link: '/micro-saas/appointment-scheduler',
      price: '$19/month',
      features: ['Automated scheduling', 'Calendar sync', 'Payment integration', 'SMS/Email reminders', 'Multi-timezone support'],
      category: 'Productivity'
    },
    {
      title: 'Chat Analytics',
      description: 'Advanced conversation analytics for customer support teams with sentiment analysis and performance metrics.',
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      link: '/micro-saas/chat-analytics',
      price: '$39/month',
      features: ['Sentiment analysis', 'Response time tracking', 'Customer satisfaction scores', 'Agent performance metrics', 'Real-time monitoring'],
      category: 'Customer Support'
    },
    {
      title: 'Content Generator',
      description: 'AI-powered content creation tool for blogs, social media, and marketing materials.',
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      link: '/micro-saas/content-generator',
      price: '$24/month',
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'Ad copy creation', 'Content templates'],
      category: 'Content & Marketing'
    },
    {
      title: 'Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflows.',
      icon: <FileText className="w-8 h-8 text-orange-400" />,
      link: '/micro-saas/document-processor',
      price: '$59/month',
      features: ['OCR technology', 'Data extraction', 'Automated workflows', 'Document classification', 'API integration'],
      category: 'Document Management'
    },
    {
      title: 'Email Marketing',
      description: 'Comprehensive email marketing platform with automation, segmentation, and analytics.',
      icon: <Mail className="w-8 h-8 text-red-400" />,
      link: '/micro-saas/email-marketing',
      price: '$34/month',
      features: ['Email automation', 'Advanced segmentation', 'A/B testing', 'Analytics dashboard', 'Template library'],
      category: 'Marketing'
    },
    {
      title: 'Expense Tracker',
      description: 'Smart expense management with receipt scanning, categorization, and financial reporting.',
      icon: <CreditCard className="w-8 h-8 text-emerald-400" />,
      link: '/micro-saas/expense-tracker',
      price: '$14/month',
      features: ['Receipt scanning', 'Automatic categorization', 'Expense reports', 'Budget tracking', 'Team management'],
      category: 'Finance'
    },
    {
      title: 'Inventory Management',
      description: 'Complete inventory tracking with real-time updates, low stock alerts, and supplier management.',
      icon: <ShoppingCart className="w-8 h-8 text-indigo-400" />,
      link: '/micro-saas/inventory-management',
      price: '$44/month',
      features: ['Real-time tracking', 'Low stock alerts', 'Supplier management', 'Barcode scanning', 'Reporting tools'],
      category: 'E-commerce'
    },
    {
      title: 'Lead Scoring',
      description: 'AI-powered lead qualification and scoring system to improve conversion rates.',
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      link: '/micro-saas/lead-scoring',
      price: '$39/month',
      features: ['AI lead scoring', 'Behavioral tracking', 'CRM integration', 'Custom scoring models', 'Performance analytics'],
      category: 'Sales'
    },
    {
      title: 'SEO Optimizer',
      description: 'Comprehensive SEO analysis and optimization tool with keyword research and competitor analysis.',
      icon: <Search className="w-8 h-8 text-teal-400" />,
      link: '/micro-saas/seo-optimizer',
      price: '$29/month',
      features: ['Keyword research', 'Site audit', 'Competitor analysis', 'Rank tracking', 'Content optimization'],
      category: 'SEO & Marketing'
    },
    {
      title: 'Social Manager',
      description: 'All-in-one social media management platform with scheduling, analytics, and engagement tools.',
      icon: <Share2 className="w-8 h-8 text-purple-400" />,
      link: '/micro-saas/social-manager',
      price: '$34/month',
      features: ['Multi-platform posting', 'Content calendar', 'Engagement tracking', 'Analytics dashboard', 'Team collaboration'],
      category: 'Social Media'
    },
    {
      title: 'Support Bot',
      description: 'AI-powered customer support chatbot with natural language processing and ticket management.',
      icon: <Headphones className="w-8 h-8 text-cyan-400" />,
      link: '/micro-saas/support-bot',
      price: '$49/month',
      features: ['AI chatbot', 'Ticket management', 'Knowledge base', 'Multi-language support', 'Analytics'],
      category: 'Customer Support'
    }
  ]

  const categories = ['All', 'Content & Marketing', 'Analytics & BI', 'Productivity', 'Customer Support', 'Document Management', 'Marketing', 'Finance', 'E-commerce', 'Sales', 'SEO & Marketing', 'Social Media']

  const stats = [
    { number: '50+', label: 'Micro-SaaS Solutions', icon: <Rocket className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> }
=======
import { 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Users,
  Mail,
  Cpu,
  FileText,
  BarChart3,
  Phone,
  MapPin,
  Sparkles,
  Rocket,
  Target,
  TrendingUp
} from 'lucide-react'
import FuturisticBackground from '../components/FuturisticBackground'
import { NeonText, NeonButton, NeonCard, PulsingDot, AnimatedGradient } from '../components/NeonEffects'
import { microSaasServices } from '../data/services'

export default function MicroSaasPage() {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Users': <Users className="w-6 h-6" />,
    'Mail': <Mail className="w-6 h-6" />,
    'Cpu': <Cpu className="w-6 h-6" />,
    'FileText': <FileText className="w-6 h-6" />,
    'BarChart3': <BarChart3 className="w-6 h-6" />,
    'Zap': <Zap className="w-6 h-6" />
  }

  const stats = [
    { number: '50+', label: 'Micro SAAS Tools', icon: Zap },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Target },
    { number: '24/7', label: 'Support Available', icon: Rocket },
    { number: '1000+', label: 'Happy Customers', icon: Users }
>>>>>>> origin/main
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FuturisticBackground />
      <Helmet>
<<<<<<< HEAD
        <title>Micro-SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro-SaaS solutions for modern businesses. AI-powered tools, analytics, productivity, and more. Starting from $14/month." />
        <meta name="keywords" content="micro-saas, saas solutions, business tools, productivity, analytics, AI tools, automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Micro-SaaS Solutions for{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful, affordable micro-SaaS tools designed to streamline your business operations. 
            From AI-powered content creation to advanced analytics - everything you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="#pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Micro-SaaS Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive suite of micro-SaaS tools designed for every business need
=======
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of specialized AI-powered micro SAAS tools designed for specific business needs. Affordable, scalable, and easy to deploy solutions." />
        <meta name="keywords" content="micro saas, AI tools, business automation, CRM, email marketing, document processing, Zion Tech Group" />
      </Helmet>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <PulsingDot color="#8b5cf6" size={12} className="inline-block mr-2" />
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Specialized AI Tools</span>
            <PulsingDot color="#a855f7" size={12} className="inline-block ml-2" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <NeonText className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent" intensity="high">
              Micro SAAS Solutions
            </NeonText>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Specialized AI-powered tools designed for specific business needs. 
            Start small, scale big with our affordable and easy-to-deploy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/pricing'}
            >
              View Pricing
            </NeonButton>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <NeonCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <NeonText intensity="medium">{stat.number}</NeonText>
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </NeonCard>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <NeonText intensity="medium">Our Micro SAAS Tools</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Affordable, specialized tools that solve specific business challenges with AI power.
>>>>>>> origin/main
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {service.icon}
                    <div className="ml-3">
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-cyan-500/10 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start your free trial today and experience the power of our micro-SaaS solutions. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
=======
              <NeonCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      {iconMap[service.icon] || <Zap className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-2xl font-bold text-purple-400">{service.price}</p>
                      {service.marketPrice && (
                        <p className="text-sm text-gray-400 line-through">{service.marketPrice}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Capabilities:</h4>
                    <ul className="space-y-1">
                      {service.capabilities.slice(0, 3).map((capability, capIndex) => (
                        <li key={capIndex} className="text-xs text-gray-400">
                          • {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex justify-between items-center text-sm">
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      📞 Call Now
                    </a>
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      ✉️ Email
                    </a>
                  </div>
                </div>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Why Choose Our Micro SAAS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                <NeonText intensity="medium">Why Choose Our Micro SAAS Tools?</NeonText>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We combine affordability with powerful AI capabilities for maximum business impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quick Deployment</h3>
                <p className="text-gray-300">Get up and running in minutes with our easy-to-use tools and comprehensive documentation.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Focused Solutions</h3>
                <p className="text-gray-300">Each tool is designed to solve specific business challenges with laser-focused precision.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
                <p className="text-gray-300">Start small and scale as your business grows with our flexible pricing and feature options.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <AnimatedGradient className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              <NeonText intensity="high">Ready to Transform Your Business?</NeonText>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Choose from our collection of AI-powered micro SAAS tools and start solving 
              your business challenges today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton 
                variant="accent" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Get Free Consultation
              </NeonButton>
              <NeonButton 
                variant="secondary" 
                size="lg"
                onClick={() => window.location.href = '/pricing'}
                className="border-2 border-white text-white hover:bg-white/10"
              >
                View All Pricing
              </NeonButton>
            </div>
            <div className="mt-8 text-center">
              <p className="text-white/80 text-sm mb-2">Contact us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  📞 +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ✉️ kleber@ziontechgroup.com
                </a>
              </div>
              <p className="text-white/60 text-xs mt-2">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </AnimatedGradient>
        </section>
      </div>
>>>>>>> origin/main
    </div>
  )
}