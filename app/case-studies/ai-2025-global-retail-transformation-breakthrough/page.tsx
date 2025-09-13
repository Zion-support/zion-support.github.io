import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Share2, TrendingUp, DollarSign, Users, ShoppingCart, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Global Retail Transformation: 300% Revenue Growth with AI Implementation',
  description: 'Discover how a global retail giant achieved 300% revenue growth, 85% cost reduction, and revolutionized customer experience through comprehensive AI transformation.',
  keywords: 'retail AI transformation, customer experience, revenue growth, cost reduction, AI case study, retail automation',
  openGraph: {
    title: 'Global Retail Transformation: 300% Revenue Growth with AI Implementation',
    description: 'Discover how a global retail giant achieved 300% revenue growth, 85% cost reduction, and revolutionized customer experience through comprehensive AI transformation.',
    type: 'article',
    publishedTime: '2025-01-14T00:00:00Z',
    authors: ['Zion Tech Group'],
  },
}

export default function GlobalRetailTransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-purple-800/20 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="font-bold text-xl">Zion Tech Group</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 inline mr-2" />
                Back to Case Studies
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Case Study Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              January 14, 2025
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Zion Tech Group
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              15 min read
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Global Retail Transformation: 300% Revenue Growth with AI Implementation
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Discover how a global retail giant transformed their operations using comprehensive AI solutions, 
            achieving unprecedented revenue growth, dramatic cost reductions, and revolutionized customer 
            experiences across all touchpoints.
          </p>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <div className="flex items-center space-x-2 text-gray-400">
              <Star className="w-4 h-4" />
              <span>Success Story</span>
            </div>
          </div>
        </div>

        {/* Key Results Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-green-400 mb-2">300%</p>
            <p className="text-gray-300 text-sm">Revenue Growth</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center">
            <DollarSign className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-blue-400 mb-2">85%</p>
            <p className="text-gray-300 text-sm">Cost Reduction</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-purple-400 mb-2">250%</p>
            <p className="text-gray-300 text-sm">Customer Satisfaction</p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 text-center">
            <ShoppingCart className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-orange-400 mb-2">180%</p>
            <p className="text-gray-300 text-sm">Conversion Rate</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Executive Summary</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A global retail chain with 2,000+ stores across 45 countries was struggling with declining 
                sales, rising operational costs, and poor customer experience. Traditional retail methods 
                were no longer competitive in the digital-first marketplace.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">The Solution</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Zion Tech Group implemented a comprehensive AI transformation strategy across all retail 
                operations, including customer experience, inventory management, pricing optimization, 
                and predictive analytics.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Retail Operations?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the retail revolution with AI-powered solutions that deliver measurable results. 
              Our proven methodologies and cutting-edge technology can help your organization achieve 
              similar transformational outcomes.
            </p>

            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Transformation</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-purple-800/20 bg-black/20 backdrop-blur-md mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-white transition-colors ml-2">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-white transition-colors ml-2">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}