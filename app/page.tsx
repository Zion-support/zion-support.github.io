import React from 'react'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ]

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
      link: '/ai-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our advanced security solutions and threat monitoring systems.',
      link: '/it-services'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Services',
      description: 'Scale your infrastructure with our cloud migration and management services.',
      link: '/cloud-services'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with our advanced analytics and visualization tools.',
      link: '/ai-services'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: '5G Implementation',
      description: 'Stay ahead with next-generation 5G network solutions and IoT integration.',
      link: '/5g-implementation'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with our comprehensive digital transformation services.',
      link: '/digital-transformation'
    }
  ]

  const services = [
    {
      title: 'AI Services',
      description: 'Comprehensive AI solutions for modern businesses',
      icon: <Zap className="w-6 h-6" />,
      link: '/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Complete IT infrastructure and support',
      icon: <Shield className="w-6 h-6" />,
      link: '/it-services'
    },
    {
      title: 'Micro SAAS',
      description: 'Affordable micro applications for small businesses',
      icon: <Database className="w-6 h-6" />,
      link: '/micro-saas-services'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud solutions and migration',
      icon: <Cloud className="w-6 h-6" />,
      link: '/cloud-services'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}AI & Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="text-blue-400 mb-4 flex justify-center group-hover:text-blue-300 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
