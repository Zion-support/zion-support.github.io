'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Play, Star, Users, Clock, Zap, Shield, Brain, BarChart } from 'lucide-react'

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics')

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and data visualization',
      duration: '5 minutes',
      difficulty: 'Beginner',
      rating: 4.9,
      users: 1250,
      icon: BarChart,
      features: ['Real-time dashboards', 'Custom reports', 'Data integration', 'Mobile app']
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      description: 'Automate business processes with intelligent workflows',
      duration: '7 minutes',
      difficulty: 'Intermediate',
      rating: 4.8,
      users: 980,
      icon: Zap,
      features: ['Process automation', 'Task scheduling', 'Integration tools', 'Custom workflows']
    },
    {
      id: 'ai-security',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and security monitoring',
      duration: '6 minutes',
      difficulty: 'Advanced',
      rating: 4.9,
      users: 750,
      icon: Shield,
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring']
    },
    {
      id: 'ai-crm',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management',
      duration: '8 minutes',
      difficulty: 'Intermediate',
      rating: 4.7,
      users: 1100,
      icon: Users,
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI analytics demo was incredible. We could see exactly how it would transform our data analysis process.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'Data Director',
      content: 'The automation demo showed us how we could save hours of manual work every day. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureTech Ltd.',
      role: 'Security Manager',
      content: 'The cybersecurity demo gave us confidence in our security posture. The AI threat detection is impressive.',
      rating: 5
    }
  ]

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo)

  return (
    <>
      <Helmet>
        <title>Interactive Demos - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See exactly how our technology can transform your business." />
        <meta name="keywords" content="interactive demos, AI demos, technology demonstrations, product showcase, business solutions" />
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
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Start Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
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
                Select a demo to explore our solutions in detail.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                    selectedDemo === demo.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-purple-400 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      selectedDemo === demo.id ? 'bg-white/20' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                    }`}>
                      <demo.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm">{demo.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{demo.title}</h3>
                  <p className="text-sm mb-4">{demo.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {demo.users}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Demo Details */}
        {selectedDemoData && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <selectedDemoData.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{selectedDemoData.title}</h3>
                        <div className="flex items-center mt-2">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-gray-300">{selectedDemoData.rating} • {selectedDemoData.users} users</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                        <div className="text-white font-semibold">{selectedDemoData.duration}</div>
                        <div className="text-gray-400 text-sm">Duration</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                        <div className="text-white font-semibold">{selectedDemoData.difficulty}</div>
                        <div className="text-gray-400 text-sm">Level</div>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      <Play className="mr-2 h-5 w-5" />
                      Start Interactive Demo
                    </button>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-300">
                See what business leaders think about our demos and solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a personalized demo with our experts to see how our solutions can specifically benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Schedule Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
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