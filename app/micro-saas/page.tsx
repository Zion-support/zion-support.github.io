'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp } from 'lucide-react'

interface MicroSaasProduct {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  popular: boolean;
  image: string;
  demoUrl: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence and analytics platform with AI-powered insights.',
      features: [
        'Real-time dashboards',
        'AI-powered predictions',
        'Custom reporting',
        'Data visualization',
        'API integrations'
      ],
      pricing: '$29/month',
      category: 'Analytics',
      popular: true,
      image: '/api/placeholder/400/300',
      demoUrl: '/demo/analytics'
    },
    {
      id: '2',
      name: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing.',
      features: [
        '24/7 customer support',
        'Multi-language support',
        'Custom training',
        'Analytics dashboard',
        'Easy integration'
      ],
      pricing: '$19/month',
      category: 'Customer Support',
      popular: false,
      image: '/api/placeholder/400/300',
      demoUrl: '/demo/chat'
    },
    {
      id: '3',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection system.',
      features: [
        'Real-time monitoring',
        'Threat detection',
        'Automated responses',
        'Compliance reporting',
        'Security alerts'
      ],
      pricing: '$49/month',
      category: 'Security',
      popular: false,
      image: '/api/placeholder/400/300',
      demoUrl: '/demo/security'
    },
    {
      id: '4',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform.',
      features: [
        'AI content generation',
        'Multi-format support',
        'Brand consistency',
        'Collaboration tools',
        'Performance analytics'
      ],
      pricing: '$39/month',
      category: 'Content',
      popular: false,
      image: '/api/placeholder/400/300',
      demoUrl: '/demo/content'
    }
  ];

  const categories = ['All', 'Analytics', 'Customer Support', 'Security', 'Content', 'Marketing'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused tools designed to solve specific business challenges. 
              Get started quickly with our ready-to-use SaaS products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Quick Setup</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Team Collaboration</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Scalable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Product</h2>
          {(() => {
            const featuredProduct = microSaasProducts.find(product => product.popular);
            return featuredProduct ? (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredProduct.image}
                      alt={featuredProduct.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {featuredProduct.category}
                      </span>
                      <span className="text-gray-300 text-sm">Most Popular</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {featuredProduct.name}
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      {featuredProduct.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {featuredProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {featuredProduct.pricing}
                      </div>
                      <div className="flex gap-3">
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                          Start Free Trial
                        </button>
                        <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                          View Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })()}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-cyan-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {product.category}
                    </span>
                    {product.popular && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">Popular</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-white">
                      {product.pricing}
                    </div>
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Micro SaaS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quick Deployment</h3>
              <p className="text-gray-300">Get up and running in minutes, not months. Our solutions are designed for immediate implementation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Team Collaboration</h3>
              <p className="text-gray-300">Built with collaboration in mind. Share, manage, and work together seamlessly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Growth</h3>
              <p className="text-gray-300">Start small and scale as you grow. Our solutions adapt to your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose from our range of micro SaaS solutions or let us build a custom solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Browse All Products
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
              Request Custom Solution
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaasPage