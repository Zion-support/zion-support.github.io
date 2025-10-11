'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Package, ArrowRight, CheckCircle, Star } from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const products = [
    {
      id: 1,
      name: 'Project Management Pro',
      category: 'Productivity',
      description: 'Streamline your project workflows with our comprehensive project management solution.',
      features: [
        'Task management',
        'Team collaboration',
        'Time tracking',
        'Progress reporting',
        'File sharing'
      ],
      price: '$29/month',
      rating: 4.8,
      users: '10,000+',
      icon: '📊'
    },
    {
      id: 2,
      name: 'Customer Support Hub',
      category: 'Support',
      description: 'Manage customer inquiries and support tickets efficiently with our helpdesk solution.',
      features: [
        'Ticket management',
        'Live chat integration',
        'Knowledge base',
        'Automated responses',
        'Analytics dashboard'
      ],
      price: '$39/month',
      rating: 4.9,
      users: '5,000+',
      icon: '🎧'
    },
    {
      id: 3,
      name: 'Inventory Tracker',
      category: 'Business',
      description: 'Keep track of your inventory with real-time updates and automated reorder alerts.',
      features: [
        'Real-time tracking',
        'Automated alerts',
        'Barcode scanning',
        'Supplier management',
        'Reporting tools'
      ],
      price: '$19/month',
      rating: 4.7,
      users: '8,000+',
      icon: '📦'
    },
    {
      id: 4,
      name: 'Financial Dashboard',
      category: 'Finance',
      description: 'Monitor your business finances with comprehensive reporting and analytics.',
      features: [
        'Expense tracking',
        'Revenue analytics',
        'Budget planning',
        'Tax preparation',
        'Financial reports'
      ],
      price: '$49/month',
      rating: 4.9,
      users: '3,000+',
      icon: '💰'
    }
  ]

  const categories = ['All', 'Productivity', 'Support', 'Business', 'Finance']

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SAAS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused software solutions designed to solve specific business problems efficiently and affordably.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {product.rating}
                    </div>
                    <div className="flex items-center">
                      <Package className="h-4 w-4 mr-1" />
                      {product.users} users
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{product.price}</div>
                  <p className="text-gray-400 text-sm">per month, billed annually</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Try Free Trial
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Micro SAAS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">Focused Solutions</h3>
              <p className="text-gray-300">Each tool is designed to solve a specific problem efficiently</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Affordable Pricing</h3>
              <p className="text-gray-300">Get powerful features without breaking the bank</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Setup</h3>
              <p className="text-gray-300">Start using your tools within minutes, not months</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and discover how our micro SAAS solutions can transform your workflow.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg">
            Start Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaasPage