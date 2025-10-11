'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, TestTube} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiAutomatedTestingPage: React.FC = () => {
  const features = [
    {
      icon: TestTube,
      title: 'Automated Test Generation',
      description: 'AI-powered test case generation for comprehensive test coverage.',
      benefits: ['Test case generation', 'Coverage analysis', 'Edge case detection', 'Test optimization']
    },
    {
      icon: Zap,
      title: 'Real-Time Testing',
      description: 'Continuous testing with real-time feedback and instant results.',
      benefits: ['Continuous testing', 'Real-time feedback', 'Instant results', 'Automated execution']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Intelligent analysis of test results and failure patterns.',
      benefits: ['Failure analysis', 'Pattern recognition', 'Root cause analysis', 'Smart recommendations']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive quality assurance with automated validation.',
      benefits: ['Quality validation', 'Regression testing', 'Performance testing', 'Security testing']
    },
    {
      icon: BarChart,
      title: 'Test Analytics',
      description: 'Detailed analytics and reporting for test performance and coverage.',
      benefits: ['Test metrics', 'Coverage reports', 'Performance analytics', 'Trend analysis']
    },
    {
      icon: Target,
      title: 'Custom Test Suites',
      description: 'Customizable test suites tailored to your specific requirements.',
      benefits: ['Custom configuration', 'Flexible testing', 'Integration testing', 'API testing']
    }
  ];

  const services = [
    {
      title: 'Test Automation Setup',
      description: 'Complete setup of automated testing infrastructure for your project.',
      icon: TestTube,
      benefits: ['Infrastructure setup', 'Tool configuration', 'Test framework', 'CI/CD integration']
    },
    {
      title: 'Test Strategy Consulting',
      description: 'Expert guidance on implementing effective testing strategies.',
      icon: Brain,
      benefits: ['Strategy development', 'Best practices', 'Implementation support', 'Training']
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous support and maintenance of your testing systems.',
      icon: Shield,
      benefits: ['System maintenance', 'Issue resolution', 'Updates', 'Performance optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Automated Testing - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered automated testing solutions for comprehensive quality assurance and test automation." />
        <meta name="keywords" content="AI automated testing, test automation, quality assurance, AI testing, automated test generation" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Automated Testing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your testing process with AI-powered automated testing solutions for comprehensive quality assurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Automated Testing Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI technology that automates your testing processes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive automated testing solutions for your quality assurance needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Testing?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start using our AI automated testing platform today and ensure quality at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AiAutomatedTestingPage;