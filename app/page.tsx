import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/ai-services'
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, and infrastructure management.',
      benefits: ['Cloud Migration', 'Cybersecurity', 'DevOps', 'Infrastructure Management'],
      link: '/it-services'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-500" />,
      title: 'Micro SaaS',
      description: 'Specialized micro software solutions designed for specific business needs and workflows.',
      benefits: ['Custom Solutions', 'Rapid Deployment', 'Scalable Architecture', 'Cost Effective'],
      link: '/micro-saas-services'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: '5G Implementation',
      description: 'Next-generation 5G network implementation and optimization for enhanced connectivity.',
      benefits: ['Network Design', 'Infrastructure Setup', 'Performance Optimization', 'Security Implementation'],
      link: '/5g-implementation'
    },
    {
      icon: <Cloud className="w-12 h-12 text-orange-500" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration', 'Infrastructure Setup', 'Security Solutions', 'Cost Optimization'],
      link: '/cloud-services'
    },
    {
      icon: <Database className="w-12 h-12 text-red-500" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation', 'Digital Workforce', 'Customer Experience', 'Data Strategy'],
      link: '/digital-transformation'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, 5G implementation, cloud services, digital transformation, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative z-10">
            {/* Neon Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20 blur-3xl rounded-full transform scale-150"></div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Advanced AI & IT Solutions
              </span>
              {/* Neon Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 blur-sm rounded-lg -z-10"></div>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4 relative z-10">
              Transform your business with cutting-edge artificial intelligence and information technology solutions designed to accelerate growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/about"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 group-hover:text-green-300 transition-colors duration-300" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-pulse"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
            <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-6 left-8 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-500"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-1500"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/about"
                  className="group border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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