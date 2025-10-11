'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, TestTube, Zap, Shield, Clock, Users } from 'lucide-react'

const AIAutomatedTestingPage: React.FC = () => {
  const features = [
    {
      icon: TestTube,
      title: 'Automated Test Generation',
      description: 'AI-powered test case generation based on code analysis and requirements.',
      benefits: ['Unit test generation', 'Integration test creation', 'Edge case detection', 'Test coverage optimization']
    },
    {
      icon: Zap,
      title: 'Intelligent Test Execution',
      description: 'Smart test execution with parallel processing and intelligent prioritization.',
      benefits: ['Parallel execution', 'Smart prioritization', 'Flaky test detection', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive quality assurance with automated bug detection and reporting.',
      benefits: ['Bug detection', 'Quality metrics', 'Regression testing', 'Performance monitoring']
    },
    {
      icon: Clock,
      title: 'Continuous Testing',
      description: 'Continuous testing integration with CI/CD pipelines for faster feedback.',
      benefits: ['CI/CD integration', 'Real-time feedback', 'Automated deployment', 'Quality gates']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate with your team on testing strategies and quality assurance.',
      benefits: ['Shared test suites', 'Team dashboards', 'Quality reports', 'Knowledge sharing']
    }
  ]

  const benefits = [
    'Reduce testing time by 70%',
    'Improve test coverage and quality',
    'Accelerate development cycles',
    'Reduce manual testing effort',
    'Enhance team productivity',
    'Ensure consistent quality standards'
  ]

  return (
    <>
      <Helmet>
        <title>AI Automated Testing - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered automated testing solution for modern software development. Generate, execute, and optimize tests with intelligent automation." />
        <meta name="keywords" content="automated testing, AI testing, test automation, quality assurance, software testing, test generation" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,146,60,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Automated
              <span className="block bg-gradient-to-r from-orange-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Testing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your testing process with AI-powered automated testing. 
              Generate, execute, and optimize tests with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Advanced Testing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to automate and optimize your testing process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
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
                Why Choose Our Testing Solution?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive quality and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-orange-400 mx-auto mb-4" />
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
                Ready to Automate Your Testing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your testing needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-blue-700 transition-all duration-300">
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

export default AIAutomatedTestingPage