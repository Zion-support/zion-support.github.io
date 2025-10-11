'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, DollarSign, Star, Users, Clock, Shield, BarChart, Code, Smartphone, Globe, Database, Lock, TrendingUp, Brain, Cloud, Target, Sparkles } from 'lucide-react'

const MicroSaaSPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: Brain,
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'SEO optimization'],
      pricing: '$29/month',
      link: 'https://ziontechgroup.com/ai-content-generator',
      category: 'AI Tools'
    },
    {
      icon: BarChart,
      title: 'Business Analytics Dashboard',
      description: 'Real-time business intelligence and analytics platform for data-driven decisions.',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'KPI tracking'],
      pricing: '$49/month',
      link: 'https://ziontechgroup.com/business-analytics',
      category: 'Analytics'
    },
    {
      icon: Code,
      title: 'API Management Suite',
      description: 'Complete API lifecycle management with monitoring, security, and documentation.',
      features: ['API gateway', 'Rate limiting', 'Authentication', 'Documentation'],
      pricing: '$39/month',
      link: 'https://ziontechgroup.com/api-management',
      category: 'Development'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform for iOS and Android applications.',
      features: ['Drag & drop builder', 'Native performance', 'Push notifications', 'App store deployment'],
      pricing: '$79/month',
      link: 'https://ziontechgroup.com/mobile-builder',
      category: 'Mobile'
    },
    {
      icon: Globe,
      title: 'Website Performance Monitor',
      description: 'Comprehensive website monitoring with uptime tracking and performance optimization.',
      features: ['Uptime monitoring', 'Performance metrics', 'Alert system', 'Detailed reports'],
      pricing: '$19/month',
      link: 'https://ziontechgroup.com/performance-monitor',
      category: 'Monitoring'
    },
    {
      icon: Database,
      title: 'Database Backup Pro',
      description: 'Automated database backup and recovery solution for all major database systems.',
      features: ['Automated backups', 'Point-in-time recovery', 'Cross-platform support', 'Encryption'],
      pricing: '$34/month',
      link: 'https://ziontechgroup.com/database-backup',
      category: 'Data Management'
    },
    {
      icon: Lock,
      title: 'Security Scanner',
      description: 'Automated security vulnerability scanning and compliance monitoring.',
      features: ['Vulnerability scanning', 'Compliance checks', 'Security reports', 'Remediation guidance'],
      pricing: '$59/month',
      link: 'https://ziontechgroup.com/security-scanner',
      category: 'Security'
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization Tool',
      description: 'Comprehensive SEO analysis and optimization recommendations for better search rankings.',
      features: ['Keyword research', 'Site audit', 'Competitor analysis', 'Rank tracking'],
      pricing: '$44/month',
      link: 'https://ziontechgroup.com/seo-optimizer',
      category: 'Marketing'
    },
    {
      icon: Cloud,
      title: 'Cloud Cost Optimizer',
      description: 'Intelligent cloud resource optimization to reduce costs and improve efficiency.',
      features: ['Cost analysis', 'Resource optimization', 'Usage monitoring', 'Savings recommendations'],
      pricing: '$69/month',
      link: 'https://ziontechgroup.com/cloud-optimizer',
      category: 'Cloud'
    },
    {
      icon: Target,
      title: 'Lead Generation Engine',
      description: 'Automated lead generation and qualification system for sales teams.',
      features: ['Lead scoring', 'Email sequences', 'CRM integration', 'Analytics dashboard'],
      pricing: '$89/month',
      link: 'https://ziontechgroup.com/lead-generation',
      category: 'Sales'
    },
    {
      icon: Sparkles,
      title: 'Customer Support Bot',
      description: 'AI-powered customer support chatbot with natural language processing.',
      features: ['24/7 support', 'Multi-language', 'Ticket management', 'Knowledge base'],
      pricing: '$39/month',
      link: 'https://ziontechgroup.com/support-bot',
      category: 'Customer Service'
    },
    {
      icon: Users,
      title: 'Team Collaboration Hub',
      description: 'Project management and team collaboration platform with advanced features.',
      features: ['Task management', 'File sharing', 'Video calls', 'Time tracking'],
      pricing: '$54/month',
      link: 'https://ziontechgroup.com/collaboration-hub',
      category: 'Productivity'
    }
  ]

  const features = [
    'Rapid deployment and setup',
    'Scalable architecture',
    'Built-in analytics and monitoring',
    'Custom branding options',
    'API integration capabilities',
    'Multi-tenant support',
    'Automated billing and subscriptions',
    '24/7 technical support'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Launch your software-as-a-service business quickly with our pre-built micro-SaaS platform.
            </p>
          </div>
        </div>
      </section>

      {/* Micro-SaaS Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro-SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Ready-to-deploy software solutions that solve real business problems with competitive pricing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
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
                  <div className="text-2xl font-bold text-cyan-400">
                    {service.pricing}
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm text-gray-300">(4.9)</span>
                  </div>
                </div>
                
                <a 
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  <span>Try Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to launch and scale your SaaS business successfully.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300 bg-white/5 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your SaaS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our micro-SaaS platform and launch your software business in weeks, not months.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <Zap className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaaSPage