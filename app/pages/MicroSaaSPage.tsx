import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, Zap, Shield, BarChart3, Users, Settings } from 'lucide-react'

const MicroSaaSPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: Cloud,
      title: 'AI Accounting Assistant',
      description: 'Automate your accounting processes with AI-powered bookkeeping and financial analysis.',
      features: ['Automated Bookkeeping', 'Expense Tracking', 'Financial Reports', 'Tax Preparation'],
      pricing: 'Starting at $29/month'
    },
    {
      icon: Zap,
      title: 'AI Content Moderation Pro',
      description: 'Keep your platform safe with advanced AI-powered content moderation and filtering.',
      features: ['Real-time Moderation', 'Custom Rules', 'Analytics Dashboard', 'API Integration'],
      pricing: 'Starting at $49/month'
    },
    {
      icon: Shield,
      title: 'AI Climate Solutions Pro',
      description: 'Monitor and optimize your environmental impact with AI-driven sustainability insights.',
      features: ['Carbon Tracking', 'Sustainability Reports', 'Goal Setting', 'Industry Benchmarking'],
      pricing: 'Starting at $39/month'
    },
    {
      icon: BarChart3,
      title: 'AI Agricultural Intelligence Pro',
      description: 'Optimize farming operations with AI-powered crop monitoring and yield prediction.',
      features: ['Crop Monitoring', 'Yield Prediction', 'Weather Analysis', 'Resource Optimization'],
      pricing: 'Starting at $59/month'
    },
    {
      icon: Users,
      title: 'AI 3D Generation',
      description: 'Create stunning 3D models and visualizations with AI-powered generation tools.',
      features: ['3D Model Generation', 'Texture Creation', 'Animation Tools', 'Export Options'],
      pricing: 'Starting at $79/month'
    },
    {
      icon: Settings,
      title: 'AI Blockchain Solutions',
      description: 'Integrate blockchain technology with AI for secure, transparent business processes.',
      features: ['Smart Contracts', 'Token Management', 'Security Audits', 'Integration Tools'],
      pricing: 'Starting at $99/month'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our micro SAAS solutions designed for specific business needs. AI-powered tools for accounting, content moderation, climate solutions, and more." />
        <meta name="keywords" content="micro SAAS, AI tools, business software, accounting, content moderation, climate solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Specialized AI-powered tools designed to solve specific business challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Browse Solutions
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Request Demo
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Products
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Choose from our range of specialized AI-powered business tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{product.pricing}</span>
                    <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                      Try Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We can develop custom micro SAAS solutions tailored to your specific business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MicroSaaSPage