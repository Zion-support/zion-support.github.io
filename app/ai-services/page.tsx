'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, CheckCircle, Zap, Shield, Globe, Database, Code, Cloud, Smartphone } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our advanced AI content generation tools.',
      features: ['Blog posts and articles', 'Social media content', 'Product descriptions', 'Marketing copy'],
      href: '/ai-content-generator'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that understands context and provides human-like responses.',
      features: ['Customer support automation', 'Lead qualification', '24/7 availability', 'Multi-language support'],
      href: '/ai-chatbot-builder'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with powerful AI-driven analytics.',
      features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      href: '/ai-analytics-dashboard'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI workflows.',
      features: ['Process automation', 'Workflow optimization', 'Error reduction', 'Cost savings'],
      href: '/ai-automation'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security',
      description: 'Protect your business with AI-powered security solutions and threat detection.',
      features: ['Threat detection', 'Fraud prevention', 'Security monitoring', 'Compliance management'],
      href: '/ai-cybersecurity'
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'AI Cloud Solutions',
      description: 'Scalable AI infrastructure and cloud-based AI services for any business size.',
      features: ['Cloud AI platforms', 'Scalable infrastructure', 'API integration', 'Managed services'],
      href: '/ai-cloud-infrastructure'
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Better Decision Making',
      description: 'Make data-driven decisions with AI-powered insights'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Scalable Solutions',
      description: 'AI solutions that grow with your business needs'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Custom AI solutions designed specifically for your requirements'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build and rigorously test your AI solutions'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Deploy your AI solutions with ongoing support and optimization'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, chatbots, content generation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From content generation to automation, we deliver AI that works.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-300">Comprehensive AI services tailored to your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300">The benefits of partnering with us for your AI needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Implementation Process</h2>
            <p className="text-xl text-gray-300">A proven approach to successful AI implementation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
