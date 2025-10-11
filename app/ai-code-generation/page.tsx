import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Code, Zap, Bug, BarChart } from 'lucide-react'

export default function AICodeGenerationPage() {
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

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Helmet>
        <title>AI Code Generation - Zion Tech Group</title>
        <meta name="description" content="AI-powered code generation solution for modern development." />
        <meta name="keywords" content="AI code generation, artificial intelligence, code generation, AI solutions, intelligent programming" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Generation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered code generation solution for modern development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                Advanced AI technology for code generation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
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
              Why Choose Our AI Code Generation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Code Generation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your AI code generation needs and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}