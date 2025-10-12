import React from 'react'
import { Link } from 'react-router-dom'
import { Languages, ArrowRight, Clock } from 'lucide-react'
import Layout from '../layout'

export default function AITranslationServicePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Translation Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Break language barriers with our advanced AI-powered translation technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Languages className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">100+ Languages</h3>
              <p className="text-gray-600">Support for over 100 languages with high accuracy</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
              <p className="text-gray-600">Advanced neural networks for context-aware translation</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Clock className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-time</h3>
              <p className="text-gray-600">Instant translation with minimal latency</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Start Translating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

