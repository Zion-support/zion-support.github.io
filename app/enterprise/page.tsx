'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'
import { CheckCircle, TrendingUp, Building, Users, Shield, Globe, Brain, Cloud, Code, BarChart, Zap, ArrowRight, Star, Award, Target, Clock, Settings, Lock, Database, Smartphone, Eye, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const EnterprisePage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions designed for large-scale enterprise environments.',
      benefits: ['Advanced threat protection', 'Compliance management', 'Data encryption', 'Access control']
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that grow with your business needs.',
      benefits: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization']
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: ['Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights']
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: ['Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence']
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: ['Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails']
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-500" />,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']
    }
  ]

  const solutions = [
    {
      title: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions that streamline business processes and improve efficiency.',
      icon: <Building className="w-8 h-8 text-blue-500" />,
      benefits: ['Financial management', 'Supply chain optimization', 'Human resources', 'Project management']
    },
    {
      title: 'Customer Relationship Management',
      description: 'Advanced CRM systems for managing customer relationships and sales processes.',
      icon: <Users className="w-8 h-8 text-green-500" />,
      benefits: ['Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation']
    },
    {
      title: 'Business Intelligence',
      description: 'Powerful BI solutions for data-driven decision making and strategic planning.',
      icon: <BarChart className="w-8 h-8 text-purple-500" />,
      benefits: ['Data visualization', 'Predictive analytics', 'Reporting', 'Performance monitoring']
    },
    {
      title: 'Workflow Automation',
      description: 'Automate complex business processes to improve efficiency and reduce errors.',
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      benefits: ['Process automation', 'Task management', 'Approval workflows', 'Document management']
    }
  ]

  const benefits = [
    'Reduce operational costs by 30%',
    'Improve productivity by 50%',
    'Enhance security and compliance',
    'Streamline business processes',
    'Enable data-driven decisions',
    'Scale with business growth',
    'Integrate with existing systems',
    'Provide 24/7 support and monitoring'
  ]

  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations."
        keywords="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions"
      />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Enterprise
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive enterprise-grade solutions designed for large-scale business operations. 
            Scale, secure, and optimize your enterprise with our advanced technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Enterprise Consultation
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
      <section className="py-16 px-4">
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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive enterprise-grade features designed to meet the complex needs of large organizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to address the complex needs of enterprise organizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {solution.icon}
                  <h3 className="text-2xl font-semibold text-white ml-4">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
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
              Enterprise Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your enterprise with our comprehensive solutions and achieve measurable business outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <p className="text-gray-300">{benefit}</p>
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
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our enterprise experts help you design and implement the perfect solution for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Enterprise Consultation
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
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

export default EnterprisePage