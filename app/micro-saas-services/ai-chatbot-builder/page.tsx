
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, MessageCircle, Zap } from 'lucide-react'
import Layout from '../../../layout'

export default function AiChatbotBuilderPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">AI Chatbot Builder</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI chatbot builder solutions for intelligent customer service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <Bot className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Bots</h3>
              <p className="text-gray-300">Build intelligent chatbots with natural language processing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <MessageCircle className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Multi-channel</h3>
              <p className="text-gray-300">Deploy across web, mobile, and messaging platforms</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <Zap className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quick Setup</h3>
              <p className="text-gray-300">Get your chatbot running in minutes, not days</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
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
