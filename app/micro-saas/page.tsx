'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, DollarSign, Users, Clock, Shield, BarChart, Code, Cloud } from 'lucide-react'

const MicroSaaSPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics.',
      features: ['Real-time data visualization', 'AI-powered predictions', 'Custom reports', 'API integrations'],
      pricing: '$299/month',
      category: 'Analytics'
    },
    {
      icon: Users,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solution with natural language processing and multi-language support.',
      features: ['24/7 customer support', 'Multi-language support', 'Integration with CRM', 'Analytics dashboard'],
      pricing: '$199/month',
      category: 'Customer Service'
    },
    {
      icon: Code,
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistant that helps developers write better code faster.',
      features: ['Code completion', 'Bug detection', 'Code review', 'Documentation generation'],
      pricing: '$149/month',
      category: 'Development'
    },
    {
      icon: Cloud,
      title: 'AI Content Generator',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      features: ['Blog post generation', 'Social media content', 'SEO optimization', 'Multi-format output'],
      pricing: '$99/month',
      category: 'Content'
    },
    {
      icon: Shield,
      title: 'AI Security Monitor',
      description: 'Advanced threat detection and security monitoring for your applications.',
      features: ['Real-time threat detection', 'Automated responses', 'Compliance monitoring', 'Security reports'],
      pricing: '$399/month',
      category: 'Security'
    },
    {
      icon: Clock,
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation and workflow optimization.',
      features: ['Process automation', 'Workflow optimization', 'Integration management', 'Performance tracking'],
      pricing: '$249/month',
      category: 'Automation'
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
              Ready-to-Deploy Micro-SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Launch your software business with our pre-built, AI-powered micro-SaaS applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-cyan-400 bg-cyan-400/20 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-green-400">{service.pricing}</span>
                    <span className="text-sm text-gray-400">per month</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105">
                  Get Started
                </button>
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
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-gray-300">
              Our micro-SaaS platform provides all the essential components for a successful SaaS business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{feature}</span>
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