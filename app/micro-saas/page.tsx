'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Zap, Users, TrendingUp, ArrowRight, CheckCircle, Star, Shield, Globe } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const MicroSaasPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Get your SaaS product to market in weeks, not months with our proven development process.',
      benefits: ['Quick MVP development', 'Agile methodology', 'Fast iteration cycles', 'Time-to-market optimization']
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Beautiful, intuitive interfaces that your users will love and engage with.',
      benefits: ['User experience design', 'Responsive layouts', 'Accessibility compliance', 'Performance optimization']
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from startup to enterprise scale.',
      benefits: ['Cloud-native design', 'Auto-scaling infrastructure', 'Database optimization', 'Load balancing']
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security to protect your data and your users.',
      benefits: ['Data encryption', 'Authentication systems', 'API security', 'Compliance ready']
    }
  ]

  const saasProducts = [
    {
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns.',
      category: 'Content Creation',
      price: '$29/month',
      features: ['AI-powered writing', 'Multiple content types', 'SEO optimization', 'Brand voice training']
    },
    {
      title: 'Task Management Pro',
      description: 'Streamline team collaboration with intelligent task management and project tracking.',
      category: 'Productivity',
      price: '$19/month',
      features: ['Team collaboration', 'Project tracking', 'Time management', 'Reporting dashboard']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive business analytics with real-time insights and custom reports.',
      category: 'Analytics',
      price: '$39/month',
      features: ['Real-time data', 'Custom reports', 'Data visualization', 'Export capabilities']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Scalable Software Products</title>
        <meta name="description" content="Build and scale your micro SaaS business with our comprehensive development services. From MVP to enterprise, we help you create successful software products." />
        <meta name="keywords" content="micro SaaS, software development, SaaS products, MVP development, scalable applications" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build and scale your micro SaaS business with our comprehensive development services. From MVP to enterprise, we help you create successful software products.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Your SaaS
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300">Everything you need to build and scale your software business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SaaS Products Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured SaaS Products</h2>
              <p className="text-xl text-gray-300">Examples of successful micro SaaS solutions we've built</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saasProducts.map((product, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-blue-400 font-semibold">{product.category}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your SaaS idea and turn it into a successful software product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default MicroSaasPage