'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Cloud, Shield, Zap, Settings, Database, Users, Target, TrendingUp } from 'lucide-react'

const CloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Architecture',
      description: 'Design and implement robust multi-cloud solutions across AWS, Azure, and GCP.',
      benefits: ['Cloud strategy', 'Migration planning', 'Cost optimization', 'Security compliance']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security measures to protect your cloud infrastructure and data.',
      benefits: ['Identity management', 'Data encryption', 'Network security', 'Compliance monitoring']
    },
    {
      icon: Zap,
      title: 'Auto-Scaling',
      description: 'Automatically scale resources based on demand to optimize performance and costs.',
      benefits: ['Dynamic scaling', 'Load balancing', 'Performance monitoring', 'Cost optimization']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Secure and efficient data storage, backup, and recovery solutions.',
      benefits: ['Data backup', 'Disaster recovery', 'Data migration', 'Storage optimization']
    }
  ]

  const benefits = [
    'Reduce infrastructure costs by 40%',
    'Improve system reliability by 99.9%',
    'Scale resources automatically',
    'Enhance security and compliance',
    'Simplify IT management',
    'Enable global accessibility'
  ]

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of applications and data to the cloud.',
      icon: Cloud,
      features: ['Assessment', 'Planning', 'Migration', 'Optimization']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Implement DevOps practices and continuous integration/deployment.',
      icon: Settings,
      features: ['Automation', 'Monitoring', 'Deployment', 'Testing']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud environments.',
      icon: Shield,
      features: ['Access control', 'Data protection', 'Compliance', 'Monitoring']
    },
    {
      title: 'Cloud Monitoring',
      description: '24/7 monitoring and management of your cloud infrastructure.',
      icon: Target,
      features: ['Performance monitoring', 'Alerting', 'Reporting', 'Optimization']
    }
  ]

  const infrastructureStats = [
    { label: 'Uptime', value: '99.9%', icon: Shield },
    { label: 'Cost Savings', value: '40%', icon: TrendingUp },
    { label: 'Performance', value: '3x Faster', icon: Zap },
    { label: 'Security', value: '100%', icon: Target }
  ]

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group | Scalable Cloud Solutions</title>
        <meta name="description" content="Build and manage scalable cloud infrastructure with our expert solutions. Multi-cloud architecture, security, and optimization services." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, DevOps, cloud security, scalable solutions, multi-cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build and manage scalable cloud infrastructure with our expert solutions. Multi-cloud architecture, security, and optimization services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Cloud Assessment
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Infrastructure Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Cloud Infrastructure?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Infrastructure Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {infrastructureStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our cloud infrastructure solutions. Get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default CloudInfrastructurePage