import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  ShoppingCart,
  DollarSign,
  Star as StarIcon,
  Heart,
  Share2
} from 'lucide-react';

export const metadata = {
  title: 'AI Marketplace - Zion Tech Group | AI Solutions & Tools',
  description: 'Discover and purchase AI solutions, tools, and services from Zion Tech Group and our partner ecosystem.',
  keywords: 'AI marketplace, AI tools, AI solutions, AI services, AI products, Zion Tech Group marketplace',
};

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            AI Marketplace
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Discover, purchase, and deploy cutting-edge AI solutions, tools, and services from Zion Tech Group and our trusted partner ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Top-rated AI solutions and tools trusted by Fortune 500 companies worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(4.9)</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum AI Computing Platform</h3>
              <p className="text-gray-600 mb-4">
                Revolutionary quantum-enhanced AI platform delivering 1000x performance gains for enterprise applications.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span className="text-2xl font-bold text-green-600">$50,000</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span>500+ users</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mr-2">
                  <ShoppingCart className="w-4 h-4 inline mr-2" />
                  Purchase
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Enterprise Suite</h3>
              <p className="text-gray-600 mb-4">
                Complete autonomous business operations platform achieving 95% automation across all processes.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span className="text-2xl font-bold text-green-600">$25,000</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span>1.2k+ users</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mr-2">
                  <ShoppingCart className="w-4 h-4 inline mr-2" />
                  Purchase
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(4.9)</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Business Intelligence Pro</h3>
              <p className="text-gray-600 mb-4">
                Advanced AI-powered analytics platform providing real-time insights and predictive business intelligence.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span className="text-2xl font-bold text-green-600">$15,000</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span>800+ users</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mr-2">
                  <ShoppingCart className="w-4 h-4 inline mr-2" />
                  Purchase
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(4.7)</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Cybersecurity Suite</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade AI security platform with automated threat detection and response capabilities.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span className="text-2xl font-bold text-green-600">$20,000</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span>600+ users</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mr-2">
                  <ShoppingCart className="w-4 h-4 inline mr-2" />
                  Purchase
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud AI Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud infrastructure optimized for AI workloads with automatic scaling and cost optimization.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span className="text-2xl font-bold text-green-600">$10,000</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span>1.5k+ users</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mr-2">
                  <ShoppingCart className="w-4 h-4 inline mr-2" />
                  Purchase
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                    <StarIcon className="w-4 h-4 fill-current" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(4.9)</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Intelligence Platform</h3>
              <p className="text-gray-600 mb-4">
                AI-powered data processing and analytics platform for real-time insights and decision making.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span className="text-2xl font-bold text-green-600">$12,000</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span>900+ users</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mr-2">
                  <ShoppingCart className="w-4 h-4 inline mr-2" />
                  Purchase
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find AI solutions tailored to your specific needs and industry requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/marketplace/ai-platforms" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Platforms</h3>
              <p className="text-gray-600 text-sm">Complete AI platforms and frameworks</p>
              <div className="mt-4 text-sm text-blue-600 group-hover:text-blue-700">
                25+ Products →
              </div>
            </Link>

            <Link to="/marketplace/machine-learning" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Cpu className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600 text-sm">ML tools, libraries, and frameworks</p>
              <div className="mt-4 text-sm text-green-600 group-hover:text-green-700">
                40+ Products →
              </div>
            </Link>

            <Link to="/marketplace/data-analytics" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
              <p className="text-gray-600 text-sm">Analytics tools and data processing</p>
              <div className="mt-4 text-sm text-purple-600 group-hover:text-purple-700">
                30+ Products →
              </div>
            </Link>

            <Link to="/marketplace/security" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Security</h3>
              <p className="text-gray-600 text-sm">Security tools and compliance solutions</p>
              <div className="mt-4 text-sm text-red-600 group-hover:text-red-700">
                15+ Products →
              </div>
            </Link>

            <Link to="/marketplace/cloud-infrastructure" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                <Cloud className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600 text-sm">Cloud platforms and infrastructure tools</p>
              <div className="mt-4 text-sm text-indigo-600 group-hover:text-indigo-700">
                20+ Products →
              </div>
            </Link>

            <Link to="/marketplace/automation" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automation</h3>
              <p className="text-gray-600 text-sm">Process automation and workflow tools</p>
              <div className="mt-4 text-sm text-orange-600 group-hover:text-orange-700">
                35+ Products →
              </div>
            </Link>

            <Link to="/marketplace/apis" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                <Database className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">APIs & Integrations</h3>
              <p className="text-gray-600 text-sm">AI APIs and integration solutions</p>
              <div className="mt-4 text-sm text-teal-600 group-hover:text-teal-700">
                50+ Products →
              </div>
            </Link>

            <Link to="/marketplace/consulting" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Consulting Services</h3>
              <p className="text-gray-600 text-sm">Expert AI consulting and support</p>
              <div className="mt-4 text-sm text-pink-600 group-hover:text-pink-700">
                10+ Services →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Program */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partner Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our partner ecosystem and showcase your AI solutions to enterprise customers worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Why Partner with Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Global Reach</h4>
                    <p className="text-gray-600">Access to Fortune 500 customers and enterprise decision makers worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Technical Support</h4>
                    <p className="text-gray-600">Comprehensive technical support and integration assistance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Revenue Sharing</h4>
                    <p className="text-gray-600">Competitive revenue sharing model with performance incentives</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Marketing Support</h4>
                    <p className="text-gray-600">Co-marketing opportunities and joint go-to-market initiatives</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Ready to Partner?</h3>
              <p className="text-gray-600 mb-6">
                Join our partner program and start selling your AI solutions through our marketplace today.
              </p>
              <div className="space-y-4">
                <Link 
                  to="/contact" 
                  className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold"
                >
                  Apply to Partner Program
                </Link>
                <Link 
                  to="/partners" 
                  className="block w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-center font-semibold"
                >
                  Learn More About Partners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Browse our marketplace and find the perfect AI solutions for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Custom Solution
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}