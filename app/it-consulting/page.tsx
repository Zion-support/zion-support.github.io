'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Settings, Shield, Cloud, Database, Code, Users, Clock, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      title: 'IT Strategy & Planning',
      description: 'Develop comprehensive IT strategies aligned with your business objectives and growth plans.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Assessment',
      description: 'Evaluate and strengthen your security posture with comprehensive vulnerability assessments.'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Optimize your data architecture and implement best practices for data governance and compliance.'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'System Integration',
      description: 'Connect disparate systems and applications to create a unified, efficient technology ecosystem.'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'Team Training',
      description: 'Empower your team with the knowledge and skills needed to leverage new technologies effectively.'
    }
  ]

  const benefits = [
    'Reduced IT costs and improved efficiency',
    'Enhanced security and compliance',
    'Scalable and future-proof solutions',
    'Expert guidance and support',
    'Faster implementation and deployment',
    'Ongoing maintenance and optimization'
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current IT infrastructure, identify pain points, and understand your business goals.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive IT strategy tailored to your specific needs and objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the plan with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously monitor and optimize your systems for peak performance.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>IT Consulting | Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services to transform your technology infrastructure. Strategic planning, cloud migration, cybersecurity, and more." />
        <meta name="keywords" content="IT consulting, technology strategy, cloud migration, cybersecurity, system integration, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Consulting
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your technology infrastructure with our expert IT consulting services. 
              We help businesses optimize their IT operations, enhance security, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
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

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Consulting Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to optimize your technology infrastructure and drive business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Our IT Consulting?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our experienced consultants bring deep technical expertise and business acumen 
                  to help you make informed technology decisions that drive real business value.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                <div className="space-y-6">
                  {process.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our IT consulting services can help optimize your technology 
                  and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default ITConsultingPage