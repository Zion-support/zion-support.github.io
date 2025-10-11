'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiCodeAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent code suggestions and recommendations.',
      benefits: ['Smart code completion', 'Bug detection', 'Code optimization', 'Real-time suggestions']
    },
    {
      icon: BarChart,
      title: 'Code Analytics',
      description: 'Comprehensive code analysis with performance insights and recommendations.',
      benefits: ['Performance metrics', 'Code quality scores', 'Optimization suggestions', 'Best practices']
    },
    {
      icon: Target,
      title: 'Precision Coding',
      description: 'Target specific coding goals with AI-powered assistance and guidance.',
      benefits: ['Goal tracking', 'Code review', 'Pattern recognition', 'Learning assistance']
    },
    {
      icon: TrendingUp,
      title: 'Productivity Boost',
      description: 'Increase your coding productivity with intelligent automation and suggestions.',
      benefits: ['Faster development', 'Reduced errors', 'Code generation', 'Automated testing']
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="Intelligent code assistant powered by advanced AI technology." />
        <meta name="keywords" content="AI code assistant, artificial intelligence, code generation, AI solutions, intelligent programming" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">AI Code Assistant</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Enhance your coding experience with intelligent AI-powered assistance and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Get Started</button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI code assistant can revolutionize your development workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Enhance Your Coding?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers already using our AI code assistant.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">Start Your Free Trial</button>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AiCodeAssistantPage;