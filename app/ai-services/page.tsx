'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Zap, Target, Users, Shield, Globe, Database, Code, Cloud, Smartphone } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Transform your content strategy with AI-powered writing, editing, and optimization tools.',
      features: [
        'Blog post generation - $29/month',
        'Social media content - $19/month',
        'Email marketing copy - $25/month',
        'SEO-optimized content - $39/month'
      ],
      link: '/ai-services/content-generation'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Deploy intelligent chatbots that provide 24/7 customer support and lead generation.',
      features: [
        'Custom chatbot development - $2,500',
        'Multi-language support - $500/month',
        'Integration services - $1,200',
        'Analytics & reporting - $200/month'
      ],
      link: '/ai-services/chatbots'
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: 'AI Marketing Automation',
      description: 'Automate your marketing campaigns with AI-driven personalization and optimization.',
      features: [
        'Email automation - $199/month',
        'Social media management - $149/month',
        'Lead scoring - $299/month',
        'Campaign optimization - $399/month'
      ],
      link: '/ai-services/marketing-automation'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'AI Data Analytics',
      description: 'Unlock insights from your data with advanced AI analytics and predictive modeling.',
      features: [
        'Predictive analytics - $499/month',
        'Data visualization - $299/month',
        'Custom dashboards - $1,500',
        'Real-time insights - $199/month'
      ],
      link: '/ai-services/data-analytics'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-powered threat detection and security automation.',
      features: [
        'Threat detection - $799/month',
        'Fraud prevention - $599/month',
        'Security monitoring - $399/month',
        'Incident response - $1,200/month'
      ],
      link: '/ai-services/security'
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: 'AI Development Services',
      description: 'Custom AI solutions built specifically for your business needs and requirements.',
      features: [
        'Custom AI models - $5,000+',
        'API development - $2,500+',
        'Integration services - $1,500+',
        'Maintenance & support - $500/month'
      ],
      link: '/ai-services/development'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to save time and resources'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'Better Decision Making',
      description: 'Make data-driven decisions with AI-powered insights and predictions'
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: 'Enhanced Customer Experience',
      description: 'Provide personalized experiences and 24/7 support with AI solutions'
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-400" />,
      title: 'Advanced Security',
      description: 'Protect your business with AI-powered threat detection and prevention'
    }
  ]

  const stats = [
    { number: '500+', label: 'AI Projects Delivered' },
    { number: '95%', label: 'Client Satisfaction Rate' },
    { number: '40%', label: 'Average Efficiency Gain' },
    { number: '24/7', label: 'AI Support Available' }
  ]

  const industries = [
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Finance', icon: '💳' },
    { name: 'E-commerce', icon: '🛒' },
    { name: 'Education', icon: '🎓' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Real Estate', icon: '🏠' },
    { name: 'Retail', icon: '🛍️' },
    { name: 'Technology', icon: '💻' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. Content generation, chatbots, marketing automation, data analytics, and custom AI development. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI development, chatbots, content generation, data analytics" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with cutting-edge artificial intelligence solutions. From content generation to custom AI development, we provide comprehensive AI services tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <Link key={index} to={service.link} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver measurable results that drive business growth and efficiency
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI solutions are tailored for various industries and business types
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-20">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl mb-2">{industry.icon}</div>
                  <div className="text-sm text-gray-300">{industry.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our AI services can drive your success and accelerate your digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default AIServicesPage