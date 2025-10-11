'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiChatbotBuilderPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Build intelligent chatbots with our AI chatbot builder. No coding required." />
        <meta name="keywords" content="AI chatbot builder, chatbot, AI solutions, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">AI Chatbot Builder</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Build intelligent chatbots with our AI chatbot builder. No coding required.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Easy Setup</h3>
                <p className="text-gray-300 mb-4">
                  Create and deploy chatbots in minutes with our intuitive drag-and-drop interface.
                </p>
                <div className="text-cyan-400 font-semibold">Get Started →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Smart Responses</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered responses that understand context and provide accurate answers.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Multi-Platform</h3>
                <p className="text-gray-300 mb-4">
                  Deploy your chatbot across multiple platforms including web, mobile, and social media.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default AiChatbotBuilderPage
