'use client'
import React from 'react'
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      id: '1',
      title: 'AI Task Manager',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization'],
      price: '$29/month',
      category: 'Productivity',
      icon: Zap
    },
    {
      id: '2',
      title: 'Data Insights Pro',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform.',
      features: ['Real-time analytics', 'Custom dashboards', 'Predictive modeling', 'Data visualization'],
      price: '$49/month',
      category: 'Analytics',
      icon: BarChart3
    },
    {
      id: '3',
      title: 'SecureChat',
      description: 'Enterprise-grade secure messaging with end-to-end encryption and AI moderation.',
      features: ['End-to-end encryption', 'AI moderation', 'File sharing', 'Team channels'],
      price: '$19/month',
      category: 'Communication',
      icon: MessageSquare
    },
    {
      id: '4',
      title: 'CloudSync',
      description: 'Seamless cloud synchronization with intelligent conflict resolution and version control.',
      features: ['Multi-cloud sync', 'Conflict resolution', 'Version history', 'Automated backups'],
      price: '$39/month',
      category: 'Storage',
      icon: Cloud
    }
  ]

  const categories = ['All', 'Productivity', 'Analytics', 'Communication', 'Storage']

  const benefits = [
    {
      icon: Star,
      title: 'Ready to Use',
      description: 'Deploy in minutes with our pre-built solutions'
    },
    {
      icon: Users,
      title: 'Scalable',
      description: 'Grows with your business from startup to enterprise'
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Affordable pricing with no hidden fees'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Enterprise-grade security and compliance'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="neon-text">Micro SaaS Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Powerful, focused software solutions designed to solve specific business problems with AI and modern technology.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Micro SaaS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
                <benefit.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Our Micro SaaS Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="cyber-card p-6 group hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <product.icon className="h-8 w-8 text-cyan-400" />
                  <span className="text-sm text-cyan-400 font-medium">{product.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <button className="cyber-button px-4 py-2 text-sm font-semibold">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Choose from our range of micro SaaS solutions or let us build a custom solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Custom Solution
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaasPage
