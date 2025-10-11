'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Code, Zap, Brain, Settings, BarChart } from 'lucide-react'

const AiCodeAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Intelligent Code Completion',
      description: 'AI-powered code completion that understands context and suggests optimal solutions.',
      benefits: ['Context-aware suggestions', 'Multi-language support', 'Smart autocomplete', 'Error prevention']
    },
    {
      icon: Zap,
      title: 'Real-time Assistance',
      description: 'Get instant help and suggestions while coding in real-time.',
      benefits: ['Instant feedback', 'Live suggestions', 'Real-time debugging', 'Immediate assistance']
    },
    {
      icon: Brain,
      title: 'Code Understanding',
      description: 'AI that understands your codebase and provides intelligent insights.',
      benefits: ['Code analysis', 'Pattern recognition', 'Refactoring suggestions', 'Best practices']
    },
    {
      icon: Settings,
      title: 'Customizable Experience',
      description: 'Tailor the AI assistant to your coding style and preferences.',
      benefits: ['Personalized suggestions', 'Custom rules', 'Team configurations', 'Learning adaptation']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track your coding productivity and improvement over time.',
      benefits: ['Productivity metrics', 'Code quality scores', 'Learning progress', 'Performance insights']
    }
  ]

  const benefits = [
    'Increase coding speed by 40%',
    'Reduce bugs and errors by 60%',
    'Improve code quality and consistency',
    'Accelerate learning and skill development',
    'Enhance team collaboration and knowledge sharing',
    'Boost overall development productivity'
  ]

  return (
    <>
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered code assistant for intelligent code completion, real-time assistance, and enhanced development productivity." />
        <meta name="keywords" content="AI code assistant, code completion, development tools, programming assistant, code intelligence" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Code
              <span className="block bg-gradient-to-r from-amber-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enhance your coding experience with AI-powered assistance. 
              Get intelligent code completion, real-time help, and productivity insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Code Assistant Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to enhance your coding experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-amber-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Code Assistant?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive development success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Enhance Your Coding?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your code assistant needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AiCodeAssistantPage