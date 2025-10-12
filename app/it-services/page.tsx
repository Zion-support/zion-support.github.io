'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Cloud, Shield, Server, Database, Smartphone, Globe, Code, Network, Users, Clock, Star, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: 'Cloud Migration Pro',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      pricing: 'Starting at $2,999',
      category: 'Infrastructure',
      popular: true
    },
    {
      icon: <Code className="w-6 h-6 text-green-500" />,
      title: 'DevOps & CI/CD Pro',
      description: 'Accelerate your development workflow with automated pipelines and infrastructure as code.',
      pricing: 'Starting at $1,999/month',
      category: 'Development',
      popular: true
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      pricing: 'Starting at $499/month',
      category: 'Security',
      popular: false
    },
    {
      icon: <Database className="w-6 h-6 text-purple-500" />,
      title: 'Database Services',
      description: 'Expert database management, optimization, and migration services.',
      pricing: 'Starting at $299/month',
      category: 'Data',
      popular: false
    },
    {
      icon: <Server className="w-6 h-6 text-orange-500" />,
      title: 'Data Center',
      description: 'Reliable data center solutions with 99.9% uptime guarantee.',
      pricing: 'Starting at $199/month',
      category: 'Infrastructure',
      popular: false
    },
    {
      icon: <Smartphone className="w-6 h-6 text-cyan-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android.',
      pricing: 'Starting at $5,999/project',
      category: 'Development',
      popular: false
    }
  ];

  const categories = ['All', 'Infrastructure', 'Development', 'Security', 'Data'];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: '40% Cost Reduction',
      description: 'Optimize your IT infrastructure and reduce operational costs significantly.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: '99.9% Uptime',
      description: 'Reliable infrastructure ensures maximum availability for your business.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols protect your data and systems.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current IT infrastructure and requirements.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Custom strategy development tailored to your business objectives.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Professional execution with minimal disruption to your operations.',
      icon: '🚀'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing maintenance and 24/7 support to ensure optimal performance.',
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="IT Services - Professional Technology Solutions | Zion Tech Group"
        description="Comprehensive IT services including cloud migration, DevOps, cybersecurity, and infrastructure management. Transform your technology with expert solutions."
        keywords="IT services, cloud migration, DevOps, cybersecurity, infrastructure, technology consulting, IT solutions"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            IT Services
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              That Scale
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to modernize your infrastructure, enhance security, 
            and accelerate your digital transformation journey.
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
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional technology solutions tailored to your business needs and objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-bold text-purple-400">{service.pricing}</div>
                  <div className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    {service.category}
                  </div>
                </div>
                <Link 
                  to={`/contact?service=${service.title}`}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful IT transformation and implementation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-purple-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results and expertise that drive real business value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our IT experts help you modernize your technology stack and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage