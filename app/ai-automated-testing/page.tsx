'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AIAutomatedTestingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Test Generation',
      description: 'Automatically generate comprehensive test cases using advanced AI algorithms.',
      benefits: ['Test case generation', 'Edge case detection', 'Coverage optimization', 'Smart test selection']
    },
    {
      icon: Zap,
      title: 'Automated Test Execution',
      description: 'Execute tests automatically with intelligent scheduling and parallel processing.',
      benefits: ['Parallel execution', 'Smart scheduling', 'Resource optimization', 'Performance monitoring']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Ensure code quality with comprehensive testing and validation frameworks.',
      benefits: ['Quality metrics', 'Bug detection', 'Regression testing', 'Performance validation']
    },
    {
      icon: BarChart,
      title: 'Test Analytics',
      description: 'Advanced analytics and reporting for test results and quality insights.',
      benefits: ['Test reporting', 'Quality metrics', 'Trend analysis', 'Performance insights']
    }
  ];

  const benefits = [
    'Reduce testing time by 70%',
    'Improve test coverage by 60%',
    'Eliminate manual testing errors',
    'Accelerate development cycles',
    'Enhance code quality and reliability',
    'Optimize testing resource utilization'
  ];

  return (
    <>
      <Helmet>
        <title>AI Automated Testing - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered automated testing solutions. Generate, execute, and analyze tests with intelligent automation." />
        <meta name="keywords" content="AI testing, automated testing, test automation, quality assurance, AI QA, test generation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Automated
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Testing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered automated testing solutions. Generate, execute, and analyze tests 
            with intelligent automation and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Start Free Trial
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
              Cutting-edge AI technology for comprehensive test automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
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
              Why Choose Our AI Automated Testing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered test automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of teams already using our AI testing platform
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Automate Your Testing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start using AI-powered automated testing to improve quality and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIAutomatedTestingPage;