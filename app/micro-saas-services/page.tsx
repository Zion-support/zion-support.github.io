import React from 'react'
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, MessageCircle, Zap, Users, BarChart3 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const MicroSaasServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Create high-quality content at scale with our advanced AI writing tools and content management systems.',
      features: ['Blog posts and articles', 'Social media content', 'Marketing copy', 'Product descriptions'],
      pricing: 'Starting at $29/month',
      link: '/micro-saas-services/ai-content-generator',
      popular: true,
      users: '2,500+',
      rating: '4.8'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and automated assistance.',
      features: ['Natural language processing', 'Multi-channel support', 'Analytics dashboard', 'Custom training'],
      pricing: 'Starting at $49/month',
      link: '/micro-saas-services/ai-chatbot-builder',
      popular: true,
      users: '1,800+',
      rating: '4.7'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization'],
      pricing: 'Starting at $39/month',
      link: '/micro-saas-services/ai-analytics-dashboard',
      popular: false,
      users: '1,200+',
      rating: '4.6'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Lead Generation',
      description: 'Automate lead generation and qualification with our AI-powered prospecting tools.',
      features: ['Lead scoring', 'Email automation', 'CRM integration', 'Performance tracking'],
      pricing: 'Starting at $59/month',
      link: '/micro-saas-services/ai-lead-generation',
      popular: false,
      users: '950+',
      rating: '4.5'
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      title: 'AI Email Assistant',
      description: 'Enhance your email productivity with AI-powered writing, scheduling, and management tools.',
      features: ['Smart replies', 'Email scheduling', 'Template suggestions', 'Sentiment analysis'],
      pricing: 'Starting at $19/month',
      link: '/micro-saas-services/ai-email-assistant',
      popular: false,
      users: '3,200+',
      rating: '4.9'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security Monitor',
      description: 'Protect your business with AI-powered security monitoring and threat detection.',
      features: ['Threat detection', 'Real-time alerts', 'Compliance monitoring', 'Incident response'],
      pricing: 'Starting at $79/month',
      link: '/micro-saas-services/ai-security-monitor',
      popular: false,
      users: '650+',
      rating: '4.7'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Integrations' }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface and pre-built templates.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: 'Scalable',
      description: 'Grow with your business - our solutions scale from startup to enterprise.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Secure',
      description: 'Enterprise-grade security with encryption, compliance, and data protection.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Support',
      description: 'Dedicated support team to help you succeed with our micro SaaS solutions.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems with AI-powered tools and automation." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, productivity tools, Zion Tech Group" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SaaS Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of specialized micro SaaS tools designed to solve specific business problems 
              with AI-powered automation and intelligent workflows.
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
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized tools designed to solve specific business challenges with AI-powered automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-white">{service.pricing}</span>
                    {service.popular && (
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{service.users} users</span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      {service.rating}
                    </div>
                  </div>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of specialized tools designed for specific business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Start using our micro SaaS solutions today and see the difference AI-powered automation can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Get Free Trial
                </Link>
                <Link
                  to="/ai-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore AI Services
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

export default MicroSaasServicesPage