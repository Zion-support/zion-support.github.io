'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Automate your business processes with our advanced AI automation solutions." />
        <meta name="keywords" content="AI automation, process automation, business automation, AI solutions, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">AI Automation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Automate your business processes with our advanced AI automation solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Workflow Automation</h3>
                <p className="text-gray-300 mb-4">
                  Streamline your business processes with intelligent workflow automation.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Document Processing</h3>
                <p className="text-gray-300 mb-4">
                  Automate document processing and data extraction with AI.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Service</h3>
                <p className="text-gray-300 mb-4">
                  Enhance customer service with AI-powered chatbots and automation.
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

export default AiAutomationPage
