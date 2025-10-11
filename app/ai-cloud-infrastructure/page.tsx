import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, Server, Shield, BarChart } from 'lucide-react'

export default function AICloudInfrastructurePage() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with AI-powered optimization.',
      benefits: ['Automated migration', 'Cost optimization', 'Performance monitoring', 'Security compliance']
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive infrastructure management with AI-powered automation.',
      benefits: ['Automated scaling', 'Resource optimization', 'Monitoring', 'Maintenance']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance with AI-powered threat detection.',
      benefits: ['Threat detection', 'Compliance monitoring', 'Security analytics', 'Automated responses']
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
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cloud infrastructure solutions for modern businesses." />
        <meta name="keywords" content="AI cloud infrastructure, cloud computing, artificial intelligence, infrastructure management, cloud solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered cloud infrastructure solutions for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
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
                Discover how our AI platform can revolutionize your cloud infrastructure.
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
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your AI cloud infrastructure needs and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}