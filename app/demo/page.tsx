'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Play, Pause, RotateCcw, Settings, Eye, Code, BarChart, Users } from 'lucide-react'

const DemoPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai-analytics')
  const [isPlaying, setIsPlaying] = useState(false)

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Real-time data visualization and predictive analytics powered by AI.',
      icon: BarChart,
      features: ['Real-time data processing', 'Predictive insights', 'Interactive dashboards', 'Custom reports']
    },
    {
      id: 'automation',
      title: 'Process Automation',
      description: 'Streamline workflows with intelligent automation and decision-making.',
      icon: Settings,
      features: ['Workflow automation', 'Smart routing', 'Exception handling', 'Performance monitoring']
    },
    {
      id: 'chatbot',
      title: 'AI Chatbot',
      description: 'Intelligent customer service with natural language processing.',
      icon: Users,
      features: ['Natural language understanding', 'Multi-channel support', 'Sentiment analysis', 'Learning capabilities']
    },
    {
      id: 'code-generation',
      title: 'AI Code Generation',
      description: 'Generate code snippets and complete functions using AI.',
      icon: Code,
      features: ['Code generation', 'Syntax highlighting', 'Error detection', 'Best practices']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      rating: 5,
      comment: 'The AI analytics demo was incredible. We could see exactly how it would transform our data insights.'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      rating: 5,
      comment: 'The automation demo showed us how we could save hours of manual work every day.'
    },
    {
      name: 'Emily Rodriguez',
      company: 'CustomerFirst',
      rating: 5,
      comment: 'The chatbot demo was so realistic. It felt like talking to a real customer service agent.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See exactly how our technology can transform your business." />
        <meta name="keywords" content="AI demo, technology demo, interactive demo, AI analytics, automation demo, chatbot demo" />
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
              Experience our AI and IT solutions through interactive demos. 
              See exactly how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Selector */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose a Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    activeDemo === demo.id
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-white/10 bg-white/5 hover:border-cyan-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <demo.icon className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm text-left">{demo.description}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Active Demo Display */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {demos.find(demo => demo.id === activeDemo)?.title}
                  </h3>
                  <p className="text-gray-300">
                    {demos.find(demo => demo.id === activeDemo)?.description}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
                  </button>
                  <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <RotateCcw className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Demo Content */}
              <div className="bg-gray-900 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">Interactive Demo</h4>
                  <p className="text-gray-300 mb-6">
                    This is where the interactive demo would be displayed. 
                    Click the play button to start the demonstration.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {demos.find(demo => demo.id === activeDemo)?.features.map((feature, index) => (
                      <span key={index} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Live Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default DemoPage
