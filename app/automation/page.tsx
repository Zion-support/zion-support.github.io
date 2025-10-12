'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import { ArrowRight, Bot, Zap, Settings, Workflow, CheckCircle, Clock, Users, DollarSign, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AutomationPage() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation solutions that learn and adapt to your business processes.',
      features: ['Machine Learning', 'Process Optimization', 'Adaptive Workflows', 'Smart Decision Making'],
      price: 'Starting at $249/month',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Business Process Automation',
      description: 'Streamline repetitive tasks and workflows with automated solutions.',
      features: ['Workflow Design', 'Task Automation', 'Integration Management', 'Performance Monitoring'],
      price: 'Starting at $199/month',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Marketing Automation',
      description: 'Automate your marketing campaigns and customer engagement processes.',
      features: ['Email Campaigns', 'Lead Nurturing', 'Social Media Automation', 'Analytics Tracking'],
      price: 'Starting at $179/month',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'IT Process Automation',
      description: 'Automate IT operations, monitoring, and maintenance tasks.',
      features: ['System Monitoring', 'Automated Backups', 'Incident Response', 'Performance Optimization'],
      price: 'Starting at $299/month',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    }
  ]

  const automationTypes = [
    { name: 'Customer Service', description: 'Automate customer support with AI chatbots and ticketing systems' },
    { name: 'Sales Processes', description: 'Streamline lead generation, qualification, and follow-up processes' },
    { name: 'HR Operations', description: 'Automate recruitment, onboarding, and employee management' },
    { name: 'Financial Management', description: 'Automate invoicing, expense tracking, and financial reporting' },
    { name: 'Inventory Management', description: 'Automate stock tracking, ordering, and supply chain processes' },
    { name: 'Data Processing', description: 'Automate data collection, validation, and analysis workflows' }
  ]

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Savings',
      description: 'Reduce manual work by up to 80% with intelligent automation'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Cost Reduction',
      description: 'Lower operational costs through efficient automated processes'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Improved Accuracy',
      description: 'Eliminate human errors with consistent automated workflows'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: '24/7 Operations',
      description: 'Keep your business running around the clock with automated systems'
    }
  ]

  const stats = [
    { number: '80%', label: 'Time Reduction' },
    { number: '60%', label: 'Cost Savings' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Automation' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEOHead 
        title="Automation Services - Zion Tech Group"
        description="Intelligent business automation solutions including AI-powered automation, process optimization, marketing automation, and IT process automation. Streamline your operations."
        keywords="automation, business process automation, AI automation, marketing automation, workflow automation, process optimization, intelligent automation"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"></div>
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6 animate-pulse">
                🤖 Intelligent Automation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">Business Automation</span> Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Streamline your business operations with intelligent automation solutions. 
              Reduce costs, improve efficiency, and scale your business with AI-powered automation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Automation Solutions?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Automation Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive automation solutions designed to optimize your business processes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`${service.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${service.borderColor} hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-pink-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Automation</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive automation solutions for every aspect of your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automationTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-500/30 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {type.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500 via-pink-600 to-cyan-600 rounded-3xl p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-10"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Automate Your Business Today
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Start your automation journey and transform your business operations with intelligent solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-purple-600 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                  >
                    Get Automation Assessment
                    <Bot className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="https://ziontechgroup.com/automation-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Request Demo
                    <Zap className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}