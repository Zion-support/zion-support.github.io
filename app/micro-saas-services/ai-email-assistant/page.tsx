
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Clock, CheckCircle } from 'lucide-react'
import Layout from '../../../layout'

export default function AiEmailAssistantPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">AI Email Assistant</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI email assistant solutions for efficient communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <Mail className="h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Drafting</h3>
              <p className="text-gray-300">AI-powered email composition and suggestions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <Clock className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Auto-scheduling</h3>
              <p className="text-gray-300">Intelligent email scheduling and follow-ups</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Check</h3>
              <p className="text-gray-300">Grammar, tone, and content optimization</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
