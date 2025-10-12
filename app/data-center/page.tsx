'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Server, Shield, Zap, Cloud, Users, BarChart3, Cpu, Database } from 'lucide-react'

const DataCenterPage: React.FC = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Data Center Design',
      description: 'Design and implement scalable data center solutions for your business needs.',
      features: ['Infrastructure Planning', 'Power & Cooling', 'Security Design', 'Scalability Planning'],
      price: 'Starting at $299/hour'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to cloud platforms.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Post-Migration Support'],
      price: 'Starting at $399/hour'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Solutions',
      description: 'Comprehensive security measures for your data center infrastructure.',
      features: ['Physical Security', 'Network Security', 'Access Control', 'Monitoring Systems'],
      price: 'Starting at $249/hour'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Power & Cooling',
      description: 'Optimize power consumption and cooling systems for maximum efficiency.',
      features: ['Power Management', 'Cooling Optimization', 'Energy Efficiency', 'Environmental Monitoring'],
      price: 'Starting at $199/hour'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Storage Solutions',
      description: 'High-performance storage solutions for your data center needs.',
      features: ['SAN/NAS Design', 'Backup Solutions', 'Disaster Recovery', 'Performance Optimization'],
      price: 'Starting at $179/hour'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Monitoring & Management',
      description: '24/7 monitoring and management of your data center infrastructure.',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Systems', 'Maintenance Planning'],
      price: 'Starting at $399/month'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: 'Improved Efficiency',
      description: 'Optimize data center performance and reduce operational costs by up to 30%'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Enhanced Security',
      description: 'Protect your infrastructure with enterprise-grade security measures'
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-500" />,
      title: 'Scalability',
      description: 'Scale your infrastructure to handle growing business demands'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: 'Expert Support',
      description: 'Get 24/7 support from certified data center professionals'
    }
  ]

  const technologies = [
    'VMware', 'Hyper-V', 'Docker', 'Kubernetes', 'OpenStack', 'Terraform', 'Ansible', 'Nagios'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Data Center Solutions - Zion Tech Group"
        description="Expert data center solutions including design, migration, security, and management. Scalable and secure infrastructure for your business."
        keywords="data center, infrastructure, cloud migration, data center design, server management, Zion Tech Group"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Center <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced data center solutions. 
            Powered by cutting-edge technology and industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Data Center Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our certified professionals deliver reliable, secure, and scalable data center solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Data Center Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data center solutions designed to meet your specific business requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{service.price}</span>
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have expertise in a wide range of data center technologies and platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <p className="text-gray-300 text-sm font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Data Center?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our data center solutions can help improve your infrastructure and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DataCenterPage
