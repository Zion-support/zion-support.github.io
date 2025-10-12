'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Building, Shield, Users, Zap, Target, BarChart3, Clock, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const EnterprisePage: React.FC = () => {
  const solutions = [
    {
      icon: <Building className="w-8 h-8 text-blue-500" />,
      title: 'Enterprise Architecture',
      description: 'Design and implement scalable enterprise architectures that support your business growth.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions and compliance frameworks for enterprise environments.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Team Collaboration',
      description: 'Advanced collaboration tools and platforms to enhance team productivity and communication.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Process Automation',
      description: 'Automate complex business processes to improve efficiency and reduce operational costs.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting solutions for data-driven decision making.'
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'Global Integration',
      description: 'Seamless integration across multiple locations and business units worldwide.'
    }
  ]

  const benefits = [
    'Scalable solutions that grow with your business',
    'Enhanced security and compliance',
    'Improved operational efficiency',
    'Reduced total cost of ownership',
    '24/7 enterprise support',
    'Custom solutions tailored to your needs'
  ]

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Building },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50%', label: 'Cost Reduction', icon: BarChart3 },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ]

  return (
    <>
      <Helmet>
        <title>Enterprise Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise-grade solutions for large-scale business operations. Scalable, secure, and reliable technology solutions." />
        <meta name="keywords" content="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive enterprise-grade solutions designed for large-scale business operations. 
              Scalable, secure, and reliable technology solutions that drive growth and innovation.
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

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet the complex needs of large organizations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {solution.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300">{solution.description}</p>
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
                  Why Choose Our Enterprise Solutions?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our enterprise solutions are designed to handle the complexity and scale of large organizations, 
                  providing the reliability, security, and performance you need to succeed.
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
                <h3 className="text-2xl font-bold text-white mb-6">Enterprise Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Custom integration and development</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Enterprise-grade security</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Dedicated account management</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">24/7 enterprise support</span>
                  </div>
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
                  Ready to Transform Your Enterprise?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our enterprise experts help you implement scalable, secure solutions that drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore IT Services
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

export default EnterprisePage