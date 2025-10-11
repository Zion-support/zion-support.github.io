'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Play, Star, ArrowRight, CheckCircle, Zap, Eye, BarChart } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics')

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-driven insights and automated reporting',
      icon: BarChart,
      duration: '5 min',
      rating: 4.9,
      features: ['Real-time data visualization', 'AI-powered insights', 'Custom dashboards', 'Automated reports']
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot with natural language processing capabilities',
      icon: Zap,
      duration: '3 min',
      rating: 4.8,
      features: ['Natural language processing', 'Multi-language support', 'Context awareness', 'Integration APIs']
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'See how our computer vision technology analyzes and understands images',
      icon: Eye,
      duration: '4 min',
      rating: 4.7,
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Video analysis']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'The AI analytics dashboard completely transformed how we view our data. The insights are incredible!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateLab',
      content: 'The chatbot integration was seamless and our customer satisfaction increased by 40%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO, DataFlow',
      content: 'The computer vision solution helped us automate our quality control process. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | Experience Our AI & IT Solutions</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See exactly how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, technology demo, interactive demo, AI solutions, IT solutions" />
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
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <Play className="w-5 h-5 mr-2 inline" />
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
                Select a demo to experience our solutions firsthand
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${
                    selectedDemo === demo.id ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{demo.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{demo.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">{demo.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{demo.duration}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                    <Play className="w-4 h-4 mr-2 inline" />
                    Play Demo
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-8">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-white/50 mx-auto mb-4" />
                    <p className="text-white/50 text-lg">Interactive Demo</p>
                    <p className="text-white/30 text-sm">Click play to start the demo</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {demos.find(d => d.id === selectedDemo)?.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {demos.find(d => d.id === selectedDemo)?.description}
                </p>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 mr-2 inline" />
                  Launch Full Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300">
                See how our solutions have transformed businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                <ArrowRight className="w-5 h-5 mr-2 inline" />
                Schedule Live Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
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