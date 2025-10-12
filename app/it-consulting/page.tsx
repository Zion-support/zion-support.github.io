'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cpu, Cloud, Shield, Database, Users, Clock, Star, Target, DollarSign, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Strategy & Migration',
      description: 'Comprehensive cloud strategy development and seamless migration to AWS, Azure, or Google Cloud',
      features: [
        'Cloud readiness assessment',
        'Migration planning and execution',
        'Cost optimization strategies',
        'Security and compliance setup',
        'Performance monitoring',
        'Disaster recovery planning'
      ],
      pricing: 'Starting at $5,000',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity Consulting',
      description: 'Protect your business with comprehensive cybersecurity strategies and implementation',
      features: [
        'Security assessment and auditing',
        'Threat modeling and risk analysis',
        'Security architecture design',
        'Compliance management (GDPR, HIPAA, SOC 2)',
        'Incident response planning',
        'Security training and awareness'
      ],
      pricing: 'Starting at $3,000',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Strategy & Analytics',
      description: 'Transform your data into actionable insights with strategic data management and analytics',
      features: [
        'Data architecture design',
        'Data governance and quality',
        'Analytics platform implementation',
        'Machine learning integration',
        'Data visualization and reporting',
        'Data privacy and compliance'
      ],
      pricing: 'Starting at $4,000',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation with strategic IT consulting',
      features: [
        'Digital strategy development',
        'Process automation and optimization',
        'Technology stack modernization',
        'Change management and training',
        'ROI measurement and optimization',
        'Continuous improvement planning'
      ],
      pricing: 'Starting at $10,000',
      popular: false
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current IT infrastructure, identify pain points, and understand your business objectives.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Based on our assessment, we develop a comprehensive IT strategy tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Implementation Planning',
      description: 'We create detailed implementation plans with timelines, resources, and milestones.'
    },
    {
      step: '04',
      title: 'Execution & Support',
      description: 'Our team executes the plan while providing ongoing support and monitoring progress.'
    }
  ]

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Consulting - Zion Tech Group | Strategic Technology Consulting</title>
        <meta name="description" content="Expert IT consulting services including cloud migration, cybersecurity, data strategy, and digital transformation. Strategic technology solutions for your business." />
        <meta name="keywords" content="IT consulting, cloud migration, cybersecurity, data strategy, digital transformation, technology consulting" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <Cpu className="inline-block w-16 h-16 mr-4 text-blue-400" />
            IT Consulting
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Strategic technology consulting to transform your business. 
            From cloud migration to cybersecurity, we provide expert guidance and implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT consulting services designed to address your specific business challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-semibold">{service.pricing}</span>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT consulting services can help you achieve your technology goals and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITConsultingPage