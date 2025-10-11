'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Play } from 'lucide-react'

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Real-time data visualization and predictive analytics',
      features: ['Live data feeds', 'Interactive charts', 'Predictive insights', 'Custom dashboards'],
      rating: 5
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI for customer service',
      features: ['Natural language processing', 'Multi-language support', 'Context awareness', 'Integration APIs'],
      rating: 5
    },
    {
      id: 'ai-content',
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced AI',
      features: ['Text generation', 'Image creation', 'SEO optimization', 'Brand consistency'],
      rating: 5
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation and optimization',
      features: ['Process automation', 'Task scheduling', 'Error handling', 'Performance monitoring'],
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Live Demo - Zion Tech Group | See Our AI Solutions in Action</title>
        <meta name="description" content="Experience our AI solutions through interactive demos. See how our technology can transform your business with real-time demonstrations." />
        <meta name="keywords" content="AI demo, live demonstration, interactive demo, AI solutions, technology showcase" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              See It in
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Action
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience our AI solutions through interactive demos. See how our technology can transform your business with real-time demonstrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Start Demo
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Demo
              </h2>
              <p className="text-xl text-gray-300">
                Select from our range of AI solutions to see them in action
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? 'bg-white/20 ring-2 ring-purple-400'
                      : 'hover:bg-white/20'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{demo.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(demo.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {demos.map((demo) => (
              selectedDemo === demo.id && (
                <div key={demo.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">{demo.title}</h3>
                    <p className="text-xl text-gray-300 mb-6">{demo.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {demo.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/10">
                      <h4 className="text-xl font-bold text-white mb-4">Interactive Demo</h4>
                      <p className="text-gray-300 mb-6">
                        Experience this solution in real-time. Click the button below to start the interactive demonstration.
                      </p>
                      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Launch Demo
                      </button>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to schedule a personalized demo tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Schedule Live Demo
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DemoPage;