'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { TestTube, Zap, Shield, Clock, Target, CheckCircle } from 'lucide-react'

const AIAutomatedTestingPage: React.FC = () => {
  const features = [
    {
      icon: TestTube,
      title: 'Intelligent Test Generation',
      description: 'AI-powered test case generation that creates comprehensive test suites automatically.',
      benefits: ['Automatic generation', 'Comprehensive coverage', 'Edge case detection', 'Smart test design']
    },
    {
      icon: Zap,
      title: 'Automated Execution',
      description: 'Run tests automatically across multiple environments and platforms with intelligent scheduling.',
      benefits: ['Multi-environment', 'Parallel execution', 'Smart scheduling', 'Continuous testing']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Advanced quality checks and validation to ensure your software meets the highest standards.',
      benefits: ['Quality validation', 'Bug detection', 'Performance testing', 'Security scanning']
    },
    {
      icon: Clock,
      title: 'Real-time Monitoring',
      description: 'Monitor test execution in real-time with instant notifications and detailed reporting.',
      benefits: ['Real-time monitoring', 'Instant alerts', 'Detailed reports', 'Progress tracking']
    },
    {
      icon: Target,
      title: 'Precision Testing',
      description: 'Target specific areas of your application with intelligent test selection and prioritization.',
      benefits: ['Smart selection', 'Priority testing', 'Focused coverage', 'Efficient execution']
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Coverage',
      description: 'Ensure complete test coverage across all components, integrations, and user scenarios.',
      benefits: ['Full coverage', 'Integration testing', 'User scenarios', 'Regression testing']
    }
  ]

  const benefits = [
    'Reduce testing time by 80%',
    'Increase test coverage by 95%',
    'Eliminate 90% of manual testing',
    'Improve software quality by 70%'
  ]

  return (
    <>
      <Helmet>
        <title>AI Automated Testing - Zion Tech Group | Intelligent Test Automation</title>
        <meta name="description" content="Revolutionary AI-powered automated testing solution that generates, executes, and manages comprehensive test suites with intelligent insights and quality assurance." />
        <meta name="keywords" content="AI testing, automated testing, test automation, quality assurance, intelligent testing, software testing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Automated Testing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered automated testing solution that generates, executes, and manages comprehensive test suites with intelligent insights and quality assurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Testing Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to automate and optimize your testing process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Automated Testing?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your testing process with intelligent automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 text-white">✓</div>
                  </div>
                  <p className="text-gray-300 text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Automate Your Testing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI automated testing can revolutionize your quality assurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIAutomatedTestingPage