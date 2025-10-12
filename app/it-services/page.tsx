'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, Users, Clock, DollarSign, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const ITServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('services')

  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with optimized performance and cost efficiency.',
      features: ['AWS, Azure, GCP migration', 'Data migration', 'Application modernization', 'Cost optimization'],
      pricing: 'Starting at $2,500',
      category: 'Cloud Services',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      features: ['Security audits', 'Threat monitoring', 'Incident response', 'Compliance management'],
      pricing: 'Starting at $1,500/month',
      category: 'Security',
      popular: true
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server setup & configuration', 'Network monitoring', 'Performance optimization', '24/7 support'],
      pricing: 'Starting at $2,000/month',
      category: 'Infrastructure',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data visualization', 'Business intelligence', 'Predictive analytics', 'Custom dashboards'],
      pricing: 'Starting at $2,000/month',
      category: 'Analytics',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      features: ['Native app development', 'Cross-platform solutions', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $5,000',
      category: 'Development',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions to meet your specific business requirements.',
      features: ['Web applications', 'Desktop software', 'API development', 'System integration'],
      pricing: 'Starting at $3,000',
      category: 'Development',
      popular: false
    }
  ]

  const benefits = [
    'Reduce IT costs by up to 40%',
    'Improve system performance by 300%',
    'Enhance security posture significantly',
    'Accelerate digital transformation',
    'Increase operational efficiency',
    'Future-proof your technology stack'
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current IT infrastructure and business needs.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Development of a customized IT strategy aligned with your business goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Expert execution of the recommended solutions with minimal disruption.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Ongoing monitoring and optimization to ensure maximum performance.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their IT services helped us modernize our systems and improve efficiency by 200%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5
    }
  ]

  const categories = ['All', 'Cloud Services', 'Security', 'Infrastructure', 'Analytics', 'Development']

  const filteredServices = activeTab === 'All' 
    ? services 
    : services.filter(service => service.category === activeTab)

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, infrastructure management, data analytics, and custom software development. Expert technology solutions for your business." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure management, data analytics, software development, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Comprehensive IT services to transform your business operations, enhance security, 
                and drive digital innovation with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-2 border border-white/20">
                <button
                  onClick={() => setActiveTab('services')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'services'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Our Services
                </button>
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'benefits'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Why Choose Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tab */}
        {activeTab === 'services' && (
          <>
            {/* Category Filter */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveTab(category)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === category
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative">
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </div>
                        </div>
                      )}
                      
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      
                      <div className="mb-4">
                        <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {service.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                      </div>
                      
                      <div className="text-2xl font-bold text-purple-400 mb-6">{service.pricing}</div>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to="/contact"
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
                  <p className="text-lg text-gray-300 mb-8">
                    We combine deep technical expertise with business acumen to deliver 
                    IT solutions that drive real business value and competitive advantage.
                  </p>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                  <div className="space-y-6">
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our IT experts help you build a technology foundation that drives business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ITServicesPage