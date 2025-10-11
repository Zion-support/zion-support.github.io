import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Code, Zap, Bug, BarChart } from 'lucide-react'

export default function AICodeAssistantPage() {
  const features = [
    {
      icon: Code,
      title: 'Code Generation',
      description: 'AI-powered code generation that creates high-quality code from natural language descriptions.',
      benefits: ['Natural language input', 'Multiple languages', 'Code optimization', 'Best practices']
    },
    {
      icon: Zap,
      title: 'Code Optimization',
      description: 'Intelligent code optimization that improves performance and efficiency automatically.',
      benefits: ['Performance optimization', 'Memory management', 'Code refactoring', 'Efficiency improvements']
    },
    {
      icon: Bug,
      title: 'Bug Detection',
      description: 'Advanced bug detection and fixing with AI-powered analysis and suggestions.',
      benefits: ['Bug detection', 'Error fixing', 'Code review', 'Quality assurance']
    },
    {
      icon: BarChart,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="Intelligent code assistant powered by advanced AI technology." />
        <meta name="keywords" content="AI code assistant, artificial intelligence, code generation, AI solutions, intelligent programming" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Assistant</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent code assistant powered by advanced AI technology.
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
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300">
                Discover how our AI platform can revolutionize your coding experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Coding?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your AI code assistant needs and get started today.
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