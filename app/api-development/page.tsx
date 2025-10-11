'use client'
import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Code, Brain, BarChart, Target, Clock, CheckCircle, ArrowRight, Star, TrendingUp, DollarSign, Globe, Smartphone, MessageSquare, Calendar, FileText, Shield, Settings, Award, Phone, Mail, MapPin, Server, Database, Zap, Lock, Cpu } from 'lucide-react'

const ApiDevelopmentPage: React.FC = () => {
  const features = [
    { icon: Code, title: 'RESTful API Design', description: 'Clean, scalable REST APIs following industry best practices and standards' },
    { icon: Shield, title: 'Security Implementation', description: 'Comprehensive security measures including authentication, authorization, and data encryption' },
    { icon: Zap, title: 'High Performance', description: 'Optimized APIs with caching, rate limiting, and load balancing for maximum efficiency' },
    { icon: Database, title: 'Database Integration', description: 'Seamless integration with various databases and data sources' },
    { icon: Server, title: 'Microservices Architecture', description: 'Scalable microservices architecture for complex applications' },
    { icon: Lock, title: 'API Documentation', description: 'Comprehensive documentation with interactive testing capabilities' }
  ]

  const benefits = [
    'Reduce development time by 60%',
    'Improve system scalability by 300%',
    'Enhance security with enterprise-grade protection',
    'Save 40+ hours on API maintenance monthly',
    'Increase developer productivity by 50%',
    'Ensure 99.9% API uptime and reliability'
  ]

  const services = [
    {
      name: 'Custom API Development',
      price: '$2,500 - $15,000',
      description: 'Tailored APIs built to your specific requirements',
      features: ['Custom endpoint design', 'Database integration', 'Authentication system', 'API documentation', 'Testing & deployment'],
      popular: true
    },
    {
      name: 'API Integration Services',
      price: '$1,500 - $8,000',
      description: 'Connect your systems with third-party APIs',
      features: ['Third-party integrations', 'Data synchronization', 'Error handling', 'Monitoring setup', 'Documentation'],
      popular: false
    },
    {
      name: 'API Maintenance & Support',
      price: '$500 - $2,500/month',
      description: 'Ongoing support and maintenance for your APIs',
      features: ['24/7 monitoring', 'Performance optimization', 'Security updates', 'Bug fixes', 'Feature enhancements'],
      popular: false
    }
  ]

  const technologies = [
    { name: 'Node.js', icon: '🟢', description: 'Fast, scalable server-side JavaScript' },
    { name: 'Python', icon: '🐍', description: 'Versatile language for complex APIs' },
    { name: 'Java', icon: '☕', description: 'Enterprise-grade API development' },
    { name: 'C#', icon: '🔷', description: 'Microsoft ecosystem integration' },
    { name: 'Go', icon: '🐹', description: 'High-performance concurrent APIs' },
    { name: 'PHP', icon: '🐘', description: 'Web-focused API development' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              API Development Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">API Development</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build robust, scalable APIs that power your applications and integrate seamlessly with your business systems. 
              Our expert developers create APIs that are secure, fast, and built to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Free Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">APIs Developed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
              <div className="text-gray-300">Faster Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our API Development Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We build APIs that are secure, scalable, and designed for long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest technologies to build modern, efficient APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our API Development?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver APIs that drive business growth and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <span className="text-gray-300">Requirements Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <span className="text-gray-300">API Design & Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <span className="text-gray-300">Development & Testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <span className="text-gray-300">Deployment & Documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our API Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the service that best fits your project needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative ${service.popular ? 'border-2 border-cyan-500' : 'border border-white/10'}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  service.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your API?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project requirements and create an API that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Free Consultation
            </button>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ApiDevelopmentPage