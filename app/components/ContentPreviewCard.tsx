import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Users, Zap } from 'lucide-react'

const ContentPreviewCard: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Content Preview Card - Zion Tech Group</title>
        <meta name="description" content="Advanced content preview solution for modern businesses." />
      </Helmet>
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Content Preview Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make our content preview solution the best choice for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold">Real-time Preview</h3>
              </div>
              <p className="text-gray-600">
                See your content changes instantly as you type, making editing faster and more intuitive.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold">Advanced Analytics</h3>
              </div>
              <p className="text-gray-600">
                Track engagement metrics and optimize your content for better performance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">Collaborative Editing</h3>
              </div>
              <p className="text-gray-600">
                Work together with your team in real-time on content creation and editing.
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

export default ContentPreviewCard