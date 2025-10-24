import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Users, Zap } from 'lucide-react'

const ContentPromotionBanner: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Content Promotion Banner - Zion Tech Group</title>
        <meta name="description" content="Advanced content promotion solution for modern businesses." />
      </Helmet>
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Content Promotion Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make our content promotion solution the best choice for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold">Smart Targeting</h3>
              </div>
              <p className="text-gray-600">
                Reach the right audience with our intelligent content promotion algorithms.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold">Performance Tracking</h3>
              </div>
              <p className="text-gray-600">
                Monitor your content performance with detailed analytics and insights.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">Multi-Platform</h3>
              </div>
              <p className="text-gray-600">
                Promote your content across multiple platforms from a single dashboard.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContentPromotionBanner