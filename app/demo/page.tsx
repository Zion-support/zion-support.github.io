import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Play, Star, Users, Clock, ArrowRight, CheckCircle, Zap, BarChart, Shield, Cloud } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics')

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and automated reporting',
      duration: '5 min',
      rating: 4.9,
      users: 1250,
      icon: BarChart,
      features: ['Real-time data visualization', 'AI-powered insights', 'Custom dashboards', 'Automated reports']
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Intelligent automation solutions for business processes and workflow optimization',
      duration: '7 min',
      rating: 4.8,
      users: 2100,
      icon: Zap,
      features: ['Workflow automation', 'Task optimization', 'Error reduction', 'Cost savings']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security monitoring and threat detection for modern businesses',
      duration: '6 min',
      rating: 4.9,
      users: 850,
      icon: Shield,
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with automated resource management and optimization',
      duration: '8 min',
      rating: 4.7,
      users: 1650,
      icon: Cloud,
      features: ['Auto-scaling', 'Cost optimization', 'Disaster recovery', 'Performance monitoring']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI analytics dashboard transformed how we make business decisions. The insights are incredibly accurate and actionable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      role: 'CEO',
      content: 'Our process automation reduced manual work by 80%. The ROI was evident within the first month.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureTech Ltd.',
      role: 'Security Director',
      content: 'The cybersecurity suite provides peace of mind with its comprehensive threat detection and monitoring.',
      rating: 5
    }
  ]

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo)

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See exactly how our technology can transform your business." />
        <meta name="keywords" content="AI demo, IT solutions demo, technology showcase, interactive demo, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
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
                <Play className="w-5 h-5 mr-2" />
                Start Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
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
                Select from our range of interactive demonstrations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/5 backdrop-blur-sm text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <demo.icon className="w-8 h-8 mr-3" />
                    <div className="text-left">
                      <h3 className="font-bold text-lg">{demo.title}</h3>
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 mr-1" />
                        {demo.rating}
                        <Users className="w-4 h-4 ml-3 mr-1" />
                        {demo.users}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-left">{demo.description}</p>
                </button>
              ))}
            </div>

            {/* Selected Demo Details */}
            {selectedDemoData && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                    <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                    
                    <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {selectedDemoData.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        {selectedDemoData.rating}/5
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {selectedDemoData.users} users
                      </div>
                    </div>

                    <ul className="space-y-2 mb-8">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center">
                      <Play className="w-5 h-5 mr-2" />
                      Launch Demo
                    </button>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <selectedDemoData.icon className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-gray-400">Interactive Demo Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300">
                Real feedback from businesses that have experienced our solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center">
                Schedule Live Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
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