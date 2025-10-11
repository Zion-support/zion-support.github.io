'use client'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, Star, Sparkles, Rocket, Brain, Cpu, Network, Layers } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const microSAASServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with GPT-4 integration, SEO optimization, and multi-language support.',
      price: '$29/month',
      features: ['Unlimited content generation', 'SEO optimization', 'Multi-language support', 'Brand voice training'],
      link: '/ai-content-generator'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'CyberGuard Security Suite',
      description: 'Comprehensive cybersecurity monitoring with real-time threat detection and automated response.',
      price: '$99/month',
      features: ['Real-time monitoring', 'Automated threat response', 'Compliance reporting', '24/7 support'],
      link: '/cybersecurity-suite'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'DataViz Analytics Platform',
      description: 'Advanced business intelligence with interactive dashboards and predictive analytics.',
      price: '$49/month',
      features: ['Interactive dashboards', 'Predictive analytics', 'Custom reports', 'API integration'],
      link: '/analytics-platform'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'CloudOps Management',
      description: 'Complete cloud infrastructure management with cost optimization and performance monitoring.',
      price: '$79/month',
      features: ['Multi-cloud support', 'Cost optimization', 'Performance monitoring', 'Auto-scaling'],
      link: '/cloud-management'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-400" />,
      title: 'DevOps Automation Hub',
      description: 'Streamlined CI/CD pipelines with automated testing, deployment, and monitoring.',
      price: '$59/month',
      features: ['CI/CD automation', 'Automated testing', 'Deployment pipelines', 'Performance monitoring'],
      link: '/devops-automation'
    },
    {
      icon: <Network className="w-8 h-8 text-pink-400" />,
      title: 'API Gateway Pro',
      description: 'Enterprise-grade API management with rate limiting, authentication, and analytics.',
      price: '$39/month',
      features: ['Rate limiting', 'Authentication', 'API analytics', 'Documentation generation'],
      link: '/api-gateway'
    }
  ]

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Chatbot Enterprise',
      description: 'Advanced conversational AI with natural language processing and multi-channel support.',
      price: 'Starting at $199/month',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard']
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: 'Computer Vision Solutions',
      description: 'Image recognition, object detection, and visual analytics for business applications.',
      price: 'Starting at $299/month',
      features: ['Image recognition', 'Object detection', 'Visual analytics', 'Custom model training']
    },
    {
      icon: <Layers className="w-8 h-8 text-green-400" />,
      title: 'Machine Learning Platform',
      description: 'End-to-end ML platform with model training, deployment, and monitoring capabilities.',
      price: 'Starting at $399/month',
      features: ['Model training', 'AutoML', 'Model deployment', 'Performance monitoring']
    }
  ]

  const itServices = [
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security assessment, penetration testing, and compliance consulting.',
      price: 'Starting at $150/hour',
      features: ['Security assessment', 'Penetration testing', 'Compliance consulting', 'Incident response']
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: 'Database Management',
      description: 'Database design, optimization, migration, and 24/7 monitoring services.',
      price: 'Starting at $200/hour',
      features: ['Database design', 'Performance optimization', 'Migration services', '24/7 monitoring']
    },
    {
      icon: <Network className="w-8 h-8 text-orange-400" />,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and maintenance for enterprise environments.',
      price: 'Starting at $175/hour',
      features: ['Network design', 'Implementation', 'Maintenance', 'Security hardening']
    }
  ]

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and advanced threat protection.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses with 24/7 technical assistance.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Advanced data processing and analytics to drive informed business decisions.'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section with Futuristic Design */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Advanced <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">AI & IT Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Transform your business with cutting-edge artificial intelligence, cloud computing, and digital transformation services. 
                  <span className="text-cyan-400 font-semibold"> Real solutions. Real results.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="/contact"
                    className="group bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-2xl"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/services"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Our Services
                  </a>
                </div>
                
                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
                    <div className="text-gray-300">AI Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Micro SAAS Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful, affordable micro-services designed to solve specific business challenges with real-world applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-cyan-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-100 to-purple-100 group-hover:from-cyan-200 group-hover:to-purple-200 transition-colors">
                      {service.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <div className="text-2xl font-bold text-cyan-600">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions powered by the latest machine learning and deep learning technologies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-colors">
                      {service.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions and consulting services to keep your technology infrastructure secure and optimized.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-blue-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                      {service.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <div className="text-lg font-bold text-blue-600">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Rocket className="w-4 h-4 text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver innovative technology solutions that drive growth and efficiency for businesses worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-purple-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
