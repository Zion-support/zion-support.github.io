'use client'

import React from 'react'

export const dynamic = 'force-dynamic'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Video, Brain, Zap, Target, CheckCircle, ArrowRight, Play, Edit, Scissors } from 'lucide-react'

const AIVideoEditorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Editing',
      description: 'Intelligent video editing with automatic scene detection, smart cuts, and content-aware editing.'
    },
    {
      icon: Zap,
      title: 'Auto-Enhancement',
      description: 'Automatically improve video quality, color correction, and audio enhancement with AI algorithms.'
    },
    {
      icon: Target,
      title: 'Smart Templates',
      description: 'Choose from AI-generated templates that adapt to your content and brand style automatically.'
    },
    {
      icon: Play,
      title: 'Real-time Preview',
      description: 'See your edits in real-time with instant preview and seamless playback capabilities.'
    }
  ]

  const capabilities = [
    'Automatic scene detection and cutting',
    'AI-powered color correction and grading',
    'Smart audio enhancement and noise reduction',
    'Intelligent text and subtitle generation',
    'Auto-generated thumbnails and previews',
    'One-click social media optimization'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Video
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Editor
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create professional videos with AI-powered editing tools. Automatically enhance, cut, and optimize 
            your content for maximum impact and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Start Editing
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary video editing capabilities powered by artificial intelligence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What You Can Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful capabilities that make video editing effortless and professional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing Videos?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start creating professional videos with AI-powered editing tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIVideoEditorPage