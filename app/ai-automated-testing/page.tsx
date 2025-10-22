'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react'
const AiAutomatedTestingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Testing',
      description: 'Intelligent test generation and execution powered by advanced machine learning algorithms.'
    },
    {
      icon: Zap,
      title: 'Rapid Execution',
      description: 'Execute thousands of tests in minutes with our high-performance testing framework.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive test coverage ensuring your applications meet the highest quality standards.'
    },
    {
      icon: Globe,
      title: 'Cross-Platform',
      description: 'Test across multiple platforms, browsers, and devices with a single test suite.'
    }
  ]
  const benefits = [
    'Reduce testing time by up to 80%',
    'Improve test coverage and quality',
    'Automated test case generation',
    'Continuous integration support',
    'Real-time test reporting',
    'Cost-effective testing solutions'
  ]
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'QA Manager',
      content: 'This AI automated testing solution has revolutionized our QA process. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'Lead Developer',
      content: 'The automated testing capabilities have significantly improved our development workflow.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateCorp',
      role: 'Test Engineer',
      content: 'Outstanding solution that has transformed how we approach software testing.',
      rating: 5
    }
  ]
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Automated Testing - Zion Tech Group | Intelligent QA Solutions</title>
        <meta name="description" content="Revolutionize your testing process with AI-powered automated testing solutions. Improve quality, reduce time, and ensure comprehensive test coverage." />
        <meta name="keywords" content="AI automated testing, QA automation, test automation, quality assurance, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Automated
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Testing
              </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your testing process with AI-powered automated testing solutions. 
              Improve quality, reduce time, and ensure comprehensive test coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Testing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered testing solution offers comprehensive features to transform your QA process
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}
                  <p className="text-gray-300 leading-relaxed">{feature.description}
              ))}
            </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI automated testing can transform your quality assurance process
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300 font-medium">{benefit}
              ))}
            </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from QA teams that have transformed their testing with our AI solutions
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}
              ))}
            </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Testing?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Transform your QA process with AI-powered automated testing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Contact Us
              </section>
      </React.Fragment>
  )
  }
export default AiAutomatedTestingPage
                                                                  </button>
                                                                </div>
                                                              </div>
                                                            </p>
                                                          </h4>
                                                        </div>
                                                      </Users>
                                                    </div>
                                                  </Star>
                                                </div>
                                              </div>
                                            </p>
                                          </div>
                                        </p>
                                      </CheckCircle>
                                    </div>
                                  </div>
                                </p>
                              </div>
                            </p>
                          </h3>
                        </div>
                      </div>
                    </p>
                  </div>
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </meta>
</meta>