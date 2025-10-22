'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users, TrendingUp, Globe } from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      category: 'content',
      icon: Zap,
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization'],
      price: '$29/month',
      users: '1,200+',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting tool for small to medium businesses.',
      category: 'analytics',
      icon: TrendingUp,
      features: ['Real-time metrics', 'Custom reports', 'Data visualization', 'Export capabilities'],
      price: '$19/month',
      users: '850+',
      rating: 4.6
    },
    {
      id: 3,
      title: 'Team Collaboration Hub',
      description: 'Streamline team communication and project management with our all-in-one platform.',
      category: 'productivity',
      icon: Users,
      features: ['Task management', 'File sharing', 'Video calls', 'Project tracking'],
      price: '$39/month',
      users: '2,100+',
      rating: 4.9
    },
    {
      id: 4,
      title: 'Security Monitor',
      description: 'Advanced security monitoring and threat detection for your digital assets.',
      category: 'security',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance reports'],
      price: '$49/month',
      users: '650+',
      rating: 4.7
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'content', name: 'Content' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'security', name: 'Security' }
  ]

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )

  return (
    <>
      <Helmet>
        <title>Micro SAAS - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Professional micro SAAS solutions powered by advanced AI and cutting-edge technology." />
        <meta name="keywords" content="micro saas, AI solutions, IT services, automation, technology, business solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SAAS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS tools to boost your business productivity and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-gray-300 text-sm">{product.rating}</span>
                      <span className="text-gray-500 text-sm ml-2">({product.users})</span>
                    </div>
                    <span className="text-purple-400 font-semibold">{product.price}</span>
                  </div>
                  
                  <button className="w-full flex items-center justify-center text-purple-400 hover:text-purple-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our micro SAAS solutions can help you streamline your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MicroSaasPage