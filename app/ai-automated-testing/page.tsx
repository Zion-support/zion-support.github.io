import React from 'react'
import { Helmet } from 'react-helmet-async'
import { TestTube, Bug, Zap } from 'lucide-react'

export default function AIAutomatedTestingPage() {
  const features = [
    {
      icon: TestTube,
      title: 'Automated Test Generation',
      description: 'AI-powered test generation that creates comprehensive test suites automatically.',
    },
    {
      icon: Bug,
      title: 'Bug Detection',
      description: 'Advanced bug detection and reporting with detailed analysis and recommendations.',
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Lightning-fast test execution with parallel processing and intelligent optimization.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>AI Automated Testing - Zion Tech Group | Advanced Testing Solutions</title>
        <meta name="description" content="AI-powered automated testing solution that generates and executes comprehensive test suites automatically." />
        <meta name="keywords" content="AI testing, automated testing, test generation, bug detection, quality assurance" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Testing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered automated testing solution that generates and executes comprehensive test suites automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need for automated testing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Testing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your AI automated testing needs and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}