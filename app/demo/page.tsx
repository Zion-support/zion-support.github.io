import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Play, Star, ArrowRight, CheckCircle, Zap, Shield, Users } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics')

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Interactive data visualization and insights powered by artificial intelligence',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Automated insights'],
      duration: '5 minutes',
      rating: 4.9,
      users: 1250
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Manager',
      description: 'Comprehensive cloud resource management and optimization platform',
      features: ['Resource monitoring', 'Cost optimization', 'Auto-scaling', 'Security compliance'],
      duration: '8 minutes',
      rating: 4.8,
      users: 890
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Intelligent workflow automation with decision-making capabilities',
      features: ['Workflow design', 'AI decision engine', 'Exception handling', 'Performance monitoring'],
      duration: '6 minutes',
      rating: 4.9,
      users: 1100
    }
  ]

  const benefits = [
    {
      icon: Play,
      title: 'Interactive Experience',
      description: 'Hands-on demos that let you explore our solutions'
    },
    {
      icon: Star,
      title: 'Real Examples',
      description: 'See actual use cases and success stories'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our guided demos'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Interactive Demos - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See exactly how our technology can transform your business." />
        <meta name="keywords" content="demos, interactive demos, AI solutions, technology demos, product showcase" />
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
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Demo
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Demo
              </h2>
              <p className="text-xl text-gray-300">
                Select from our collection of interactive demonstrations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                    selectedDemo === demo.id ? 'ring-2 ring-cyan-400 bg-white/10' : 'hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedDemo(demo.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 mr-1" />
                          <span className="text-sm font-semibold">{demo.rating}</span>
                        </div>
                        <div className="text-gray-400 text-sm">{demo.users} users</div>
                      </div>
                    </div>
                    <div className="text-cyan-400 text-sm font-semibold">{demo.duration}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{demo.title}</h3>
                  <p className="text-gray-300 mb-6">{demo.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start Demo
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Try Our Demos?
              </h2>
              <p className="text-xl text-gray-300">
                Experience the power of our solutions before you commit
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Live Demo
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default DemoPage