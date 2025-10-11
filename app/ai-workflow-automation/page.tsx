'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiWorkflowAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Workflow Automation - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Automate your business workflows with AI-powered automation solutions." />
        <meta name="keywords" content="AI workflow automation, business automation, workflow, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">AI Workflow Automation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Automate your business workflows with AI-powered automation solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Process Automation</h3>
                <p className="text-gray-300 mb-4">
                  Automate repetitive tasks and processes with intelligent AI workflows.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Smart Routing</h3>
                <p className="text-gray-300 mb-4">
                  Intelligently route tasks and requests to the right team members.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Integration</h3>
                <p className="text-gray-300 mb-4">
                  Seamlessly integrate with your existing tools and systems.
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

export default AiWorkflowAutomationPage
