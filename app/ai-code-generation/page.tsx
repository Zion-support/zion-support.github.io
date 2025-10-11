'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Code, Zap, Brain, Settings, BarChart } from 'lucide-react'

const AiCodeGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Automated Code Generation',
      description: 'Generate high-quality code automatically from natural language descriptions.',
      benefits: ['Natural language input', 'Multi-language support', 'Code optimization', 'Best practices']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quickly prototype applications and features with AI-generated code.',
      benefits: ['Fast development', 'Rapid iteration', 'Quick testing', 'Immediate results']
    },
    {
      icon: Brain,
      title: 'Intelligent Code Understanding',
      description: 'AI that understands requirements and generates appropriate code solutions.',
      benefits: ['Context awareness', 'Requirement analysis', 'Smart generation', 'Error prevention']
    },
    {
      icon: Settings,
      title: 'Customizable Generation',
      description: 'Customize code generation to match your coding style and standards.',
      benefits: ['Style adaptation', 'Custom templates', 'Team standards', 'Personal preferences']
    },
    {
      icon: BarChart,
      title: 'Quality Assurance',
      description: 'Ensure generated code meets quality standards and best practices.',
      benefits: ['Code review', 'Quality checks', 'Standards compliance', 'Performance optimization']
    }
  ]

  const benefits = [
    'Reduce development time by 70%',
    'Improve code quality and consistency',
    'Accelerate prototyping and MVP development',
    'Enable rapid iteration and testing',
    'Reduce manual coding effort',
    'Enhance team productivity and efficiency'
  ]

  return (
    <>
      <Helmet>
        <title>AI Code Generation - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered code generation platform for automated code creation, rapid prototyping, and enhanced development productivity." />
        <meta name="keywords" content="AI code generation, automated coding, code automation, development tools, programming assistance" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(244,63,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Code
              <span className="block bg-gradient-to-r from-rose-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Generation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Generate high-quality code automatically with AI-powered code generation. 
              Transform ideas into working code with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-rose-500 to-blue-600 hover:from-rose-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Advanced Code Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to generate and optimize code automatically
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-rose-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-rose-400 mr-2" />
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
                Why Choose Our Code Generation?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive development success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-rose-400 mx-auto mb-4" />
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
                Ready to Generate Code?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your code generation needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-rose-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-rose-600 hover:to-blue-700 transition-all duration-300">
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

export default AiCodeGenerationPage