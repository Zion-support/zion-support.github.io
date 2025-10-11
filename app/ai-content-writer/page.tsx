'use client';
import React from 'react';
import { CheckCircle, ArrowRight, PenTool, FileText, Zap, Brain, Target, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: <PenTool className="w-8 h-8 text-blue-400" />,
      title: 'AI Writing Assistant',
      description: 'Advanced AI-powered content creation with natural language processing.',
      benefits: ['SEO Optimization', 'Tone Matching', 'Grammar Check', 'Plagiarism Detection']
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'Content Templates',
      description: 'Pre-built templates for blogs, articles, social media, and marketing content.',
      benefits: ['Blog Posts', 'Social Media', 'Email Campaigns', 'Product Descriptions']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'Fast Generation',
      description: 'Generate high-quality content in seconds with our advanced AI models.',
      benefits: ['Instant Creation', 'Bulk Generation', 'Auto-formatting', 'Quick Edits']
    },
    {
      icon: <Brain className="w-8 h-8 text-red-400" />,
      title: 'Smart Research',
      description: 'AI-powered research and fact-checking for accurate, up-to-date content.',
      benefits: ['Topic Research', 'Fact Verification', 'Trend Analysis', 'Source Citation']
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: 'Audience Targeting',
      description: 'Create content tailored to specific audiences and demographics.',
      benefits: ['Demographic Analysis', 'Interest Mapping', 'Language Adaptation', 'Cultural Sensitivity']
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Team Collaboration',
      description: 'Collaborate with your team on content creation and editing.',
      benefits: ['Real-time Editing', 'Comment System', 'Version Control', 'Approval Workflow']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Writer | Zion Tech Group</title>
        <meta name="description" content="Professional AI content writing solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="AI content writer, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Writer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional AI content writing solutions by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Writing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create high-quality content with AI assistance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
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
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Contact us today to learn more about our AI content writing solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default AIContentWriterPage;