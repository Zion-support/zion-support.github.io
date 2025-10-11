'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Cloud, Shield, Code, BarChart, Zap, CheckCircle, ArrowRight } from 'lucide-react'

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including machine learning, NLP, computer vision, and predictive analytics.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/ai-services',
      price: 'Starting at $1,500/month'
    },
    {
      icon: Cloud,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud infrastructure, cybersecurity, custom development, and managed services.',
      features: ['Cloud Infrastructure', 'Cybersecurity', 'Custom Development', 'Managed Services'],
      link: '/it-services',
      price: 'Starting at $1,500/month'
    },
    {
      icon: Zap,
      title: 'Micro SaaS Solutions',
      description: 'Ready-to-use AI-powered business tools that solve specific problems and boost productivity instantly.',
      features: ['Analytics Dashboards', 'Automation Tools', 'Content Generation', 'Customer Support'],
      link: '/micro-saas',
      price: 'Starting at $29/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Threat Detection', 'Data Protection', 'Compliance', 'Incident Response'],
      link: '/cybersecurity',
      price: 'Starting at $2,500/month'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights and business intelligence with advanced analytics.',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Reporting'],
      link: '/data-analytics',
      price: 'Starting at $2,000/month'
    },
    {
      icon: Code,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses with multi-cloud support.',
      features: ['AWS Integration', 'Azure Services', 'Google Cloud', 'Hybrid Solutions'],
      link: '/cloud-infrastructure',
      price: 'Starting at $2,200/month'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group-hover:shadow-lg"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicesPage