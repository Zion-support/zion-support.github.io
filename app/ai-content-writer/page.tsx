'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, PenTool} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: 'AI Writing Assistant',
      description: 'Intelligent writing assistant with natural language processing and AI capabilities.',
      benefits: ['Text generation', 'Writing suggestions', 'Grammar checking', 'Style optimization']
    },
    {
      icon: Brain,
      title: 'Smart Content Creation',
      description: 'Advanced AI algorithms for creating engaging and high-quality content.',
      benefits: ['Content ideas', 'Topic research', 'Writing optimization', 'Engagement enhancement']
    },
    {
      icon: Zap,
      title: 'Real-Time Writing',
      description: 'High-speed content writing with instant feedback and suggestions.',
      benefits: ['Instant writing', 'Live suggestions', 'Quick editing', 'Real-time feedback']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Built-in quality checks and content validation for professional output.',
      benefits: ['Quality validation', 'Error detection', 'Plagiarism checking', 'Compliance verification']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and insights for content performance and engagement.',
      benefits: ['Performance metrics', 'Engagement analysis', 'Trend tracking', 'Optimization insights']
    },
    {
      icon: Target,
      title: 'Custom Writing Styles',
      description: 'Tailored writing styles and tones for specific industries and audiences.',
      benefits: ['Style adaptation', 'Tone matching', 'Industry-specific', 'Audience targeting']
    }
  ];

  const services = [
    {
      title: 'Content Writing',
      description: 'Professional content writing services with AI-powered assistance.',
      icon: PenTool,
      benefits: ['Content creation', 'Writing optimization', 'Quality assurance', 'Delivery']
    },
    {
      title: 'Writing Strategy',
      description: 'Strategic planning and implementation of content writing strategies.',
      icon: Brain,
      benefits: ['Strategy development', 'Content planning', 'Implementation support', 'ROI optimization']
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous support and optimization of content writing systems.',
      icon: Shield,
      benefits: ['System maintenance', 'Performance optimization', 'Issue resolution', 'Updates']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content writer for intelligent content creation and writing assistance." />
        <meta name="keywords" content="AI content writer, content writing, AI writing, writing assistant, content creation" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Content Writer</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced AI-powered content writer for intelligent content creation and writing assistance.
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
              <h2 className="text-4xl font-bold text-white mb-4">Content Writer Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI technology that enhances your writing process
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
                Comprehensive content writing solutions for your business needs
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Write Content?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start using our AI content writer today and create engaging content with ease.
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

export default AiContentWriterPage;