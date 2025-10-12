'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cloud, Shield, Zap, Database, Globe, Users } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function CloudServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime.',
      features: ['AWS Migration', 'Azure Migration', 'GCP Migration', 'Hybrid Cloud Setup'],
      pricing: 'Starting at $2,500/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure.',
      features: ['Identity Management', 'Data Encryption', 'Threat Detection', 'Compliance'],
      pricing: 'Starting at $1,800/month'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Optimization',
      description: 'Optimize your cloud costs and performance for maximum efficiency.',
      features: ['Cost Analysis', 'Performance Tuning', 'Auto Scaling', 'Resource Management'],
      pricing: 'Starting at $1,200/month'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Cloud Database',
      description: 'Managed database services with high availability and scalability.',
      features: ['Database Setup', 'Backup & Recovery', 'Performance Monitoring', 'Scaling'],
      pricing: 'Starting at $1,500/month'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Multi-Cloud Strategy',
      description: 'Implement multi-cloud solutions for redundancy and flexibility.',
      features: ['Multi-Cloud Setup', 'Load Balancing', 'Disaster Recovery', 'Vendor Management'],
      pricing: 'Starting at $3,000/month'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'Cloud Support',
      description: '24/7 cloud support and monitoring for your infrastructure.',
      features: ['24/7 Monitoring', 'Incident Response', 'Performance Optimization', 'Expert Support'],
      pricing: 'Starting at $2,000/month'
    }
  ]

  const benefits = [
    {
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand.',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce infrastructure costs with pay-as-you-go pricing.',
      icon: <Database className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Reliability',
      description: 'High availability and disaster recovery capabilities.',
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Global Reach',
      description: 'Deploy applications worldwide with edge computing.',
      icon: <Globe className="w-6 h-6 text-orange-500" />
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Analyze your current infrastructure and cloud readiness.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive cloud migration strategy.'
    },
    {
      step: '03',
      title: 'Migration',
      description: 'Execute the migration with minimal business disruption.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously optimize and monitor your cloud environment.'
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Support' },
    { number: '100+', label: 'Cloud Migrations' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including migration, security, optimization, and support." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud security" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with comprehensive cloud solutions. Migrate, secure, and optimize your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Cloud Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-purple-400 font-semibold mb-4">{service.pricing}</div>
                  <a
                    href="/contact"
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Cloud?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Cloud Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how cloud services can transform your business infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Cloud Consultation
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
