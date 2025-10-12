'use client'
import React from 'react'
import SEOHead from './components/SEOHead'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, Smartphone, Brain, Cpu, Lock, BarChart3, Users, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
      price: 'Starting at $299/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our advanced security solutions and compliance management.',
      price: 'Starting at $199/month'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate to the cloud with zero downtime and enhanced performance.',
      price: 'Starting at $499/month'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with our advanced analytics and visualization tools.',
      price: 'Starting at $149/month'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      price: 'Starting at $399/month'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Global Reach',
      description: 'Scale your business worldwide with our international deployment and support services.',
      price: 'Starting at $249/month'
    }
  ]

  const microSaasServices = [
    {
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation with SEO optimization and brand voice matching.',
      price: '$49/month',
      features: ['SEO Optimization', 'Brand Voice Matching', 'Multi-language Support', 'Content Calendar']
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and custom reporting.',
      price: '$79/month',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization']
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer service automation with 24/7 multilingual support.',
      price: '$99/month',
      features: ['24/7 Support', 'Multilingual', 'Ticket Management', 'Live Chat Integration']
    },
    {
      icon: <Settings className="w-6 h-6 text-orange-500" />,
      title: 'AI Workflow Automation',
      description: 'Automate repetitive tasks and streamline business processes with AI.',
      price: '$129/month',
      features: ['Process Automation', 'Task Scheduling', 'Integration Hub', 'Performance Tracking']
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
      content: 'Their AI solutions helped us automate 80% of our processes. Incredible efficiency gains.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, digital transformation, cloud computing, 5G implementation, micro SAAS, artificial intelligence, business automation"
      />
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Advanced AI</span>
              <br />
              and IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive growth, enhance security, 
              and streamline operations for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="text-lg font-semibold text-green-400 mb-4">{feature.price}</div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, focused tools designed to solve specific business challenges with AI-powered intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-lg font-semibold text-green-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 text-sm"
                  >
                    Get Started
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from businesses that have transformed with our solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business? Contact us today for a free consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of businesses already using our solutions to drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}