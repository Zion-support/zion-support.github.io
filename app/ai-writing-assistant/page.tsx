'use client';
import React from 'react';
import { FileText, CheckCircle, Zap, Users, Target, BarChart } from 'lucide-react';;
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWritingAssistantPage: React.FC = () => {
  const features = [
    'AI-powered content generation',
    'Multiple writing styles and tones',
    'SEO optimization suggestions',
    'Grammar and style checking',
    'Plagiarism detection',
    'Content templates library',
    'Multi-language support',
    'Brand voice training',
    'Content scheduling',
    'Performance analytics'
  ];

  const benefits = [
    '10x faster content creation',
    'Consistent brand voice',
    'SEO-optimized content',
    'Reduced editing time',
    'Higher engagement rates',
    'Cost-effective solution'
  ];

  const useCases = [
    {
      title: 'Blog Posts',
      description: 'Generate engaging blog posts on any topic with proper SEO optimization',
      icon: FileText
    },
    {
      title: 'Social Media',
      description: 'Create compelling social media posts for all platforms',
      icon: Users
    },
    {
      title: 'Email Marketing',
      description: 'Write effective email campaigns that convert',
      icon: Target
    },
    {
      title: 'Product Descriptions',
      description: 'Create compelling product descriptions that sell',
      icon: BarChart
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            AI Writing Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content creation with our advanced AI writing assistant. 
            Generate high-quality, engaging content in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="#features"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our AI Writing Assistant?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Perfect For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <useCase.icon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Simple Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  10,000 words/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic templates
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full py-3 px-6 text-center">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card p-8 text-center ring-2 ring-cyan-400">
              <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$149<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  50,000 words/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All templates
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Brand voice training
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full py-3 px-6 text-center">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited words
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom templates
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full py-3 px-6 text-center">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI writing assistant to create better content faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Your Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIWritingAssistantPage;