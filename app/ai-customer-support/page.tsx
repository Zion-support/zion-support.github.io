'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiCustomerSupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Enhance your customer support with AI-powered solutions and chatbots." />
        <meta name="keywords" content="AI customer support, customer service, AI chatbots, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">AI Customer Support</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your customer support with AI-powered solutions and chatbots.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">AI Chatbots</h3>
                <p className="text-gray-300 mb-4">
                  Intelligent chatbots that provide instant support and answers to customer queries.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ticket Routing</h3>
                <p className="text-gray-300 mb-4">
                  Automatically route support tickets to the right team members.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Knowledge Base</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered knowledge base for instant answers and self-service support.
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

export default AiCustomerSupportPage
