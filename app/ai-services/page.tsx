import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including development, consulting, and ready-to-use AI solutions." />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                AI Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge 
              <span className="text-cyan-400 font-semibold"> artificial intelligence solutions</span>. 
              From custom AI development to 
              <span className="text-purple-400 font-semibold"> ready-to-use AI tools</span>, 
              we have everything you need to succeed.
            </p>
          </div>

          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Machine Learning Development */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Machine Learning Development</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Custom machine learning models tailored to your business needs. From data preprocessing to model deployment and monitoring.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom model development
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Data preprocessing & cleaning
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Model training & optimization
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Production deployment
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-cyan-400">$5,000<span className="text-lg text-gray-400">+</span></div>
                <div className="text-sm text-gray-400">Starting at</div>
              </div>
              <a href="/contact" className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold">
                Get Quote
              </a>
            </div>

            {/* Natural Language Processing */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Natural Language Processing</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Advanced NLP solutions for text analysis, sentiment detection, language translation, and conversational AI.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sentiment analysis
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Text classification
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Language translation
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Chatbot development
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-blue-400">$3,500<span className="text-lg text-gray-400">+</span></div>
                <div className="text-sm text-gray-400">Starting at</div>
              </div>
              <a href="/contact" className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold">
                Get Quote
              </a>
            </div>

            {/* Computer Vision */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Computer Vision</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Image and video analysis solutions for object detection, facial recognition, quality control, and automated visual inspection.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Object detection
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Facial recognition
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quality control
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Image classification
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-purple-400">$4,500<span className="text-lg text-gray-400">+</span></div>
                <div className="text-sm text-gray-400">Starting at</div>
              </div>
              <a href="/contact" className="block w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-3 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-semibold">
                Get Quote
              </a>
            </div>

            {/* AI Consulting */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Strategy Consulting</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Strategic AI consulting to help you identify opportunities, plan implementation, and maximize ROI from AI investments.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI readiness assessment
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Technology roadmap
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ROI analysis
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Implementation planning
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-green-400">$200<span className="text-lg text-gray-400">/hour</span></div>
                <div className="text-sm text-gray-400">Starting at</div>
              </div>
              <a href="/contact" className="block w-full bg-gradient-to-r from-green-500 to-blue-600 text-white text-center py-3 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 font-semibold">
                Get Quote
              </a>
            </div>

            {/* AI Integration */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Integration Services</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Seamlessly integrate AI capabilities into your existing systems and workflows with minimal disruption.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  API integration
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Legacy system integration
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Data pipeline setup
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance optimization
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-yellow-400">$150<span className="text-lg text-gray-400">/hour</span></div>
                <div className="text-sm text-gray-400">Starting at</div>
              </div>
              <a href="/contact" className="block w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-center py-3 rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 font-semibold">
                Get Quote
              </a>
            </div>

            {/* AI Training & Support */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Training & Support</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Comprehensive training programs and ongoing support to help your team effectively use and maintain AI solutions.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-pink-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Team training programs
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-pink-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Documentation & guides
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-pink-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 technical support
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-pink-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Model maintenance
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-pink-400">$100<span className="text-lg text-gray-400">/hour</span></div>
                <div className="text-sm text-gray-400">Starting at</div>
              </div>
              <a href="/contact" className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-3 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold">
                Get Quote
              </a>
            </div>
          </div>

          {/* Why Choose Our AI Services */}
          <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our AI Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Our AI solutions have helped 500+ businesses achieve measurable improvements in efficiency and profitability.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Implementation</h3>
                <p className="text-gray-600">Get your AI solutions up and running quickly with our streamlined implementation process.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Every AI solution is tailored to your specific business needs and requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support to ensure your AI solutions run smoothly at all times.</p>
              </div>
            </div>
          </div>

          {/* AI Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Use Cases by Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personalized product recommendations</li>
                  <li>• Dynamic pricing optimization</li>
                  <li>• Inventory demand forecasting</li>
                  <li>• Chatbot customer support</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Medical image analysis</li>
                  <li>• Drug discovery assistance</li>
                  <li>• Patient risk assessment</li>
                  <li>• Treatment recommendation</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Finance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fraud detection</li>
                  <li>• Credit risk assessment</li>
                  <li>• Algorithmic trading</li>
                  <li>• Customer service automation</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Predictive maintenance</li>
                  <li>• Quality control automation</li>
                  <li>• Supply chain optimization</li>
                  <li>• Production scheduling</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Content generation</li>
                  <li>• Customer segmentation</li>
                  <li>• Campaign optimization</li>
                  <li>• Lead scoring</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personalized learning paths</li>
                  <li>• Automated grading</li>
                  <li>• Student performance prediction</li>
                  <li>• Virtual tutoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl md:text-2xl mb-10 text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contact" 
                  className="group relative px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg transform hover:scale-105"
                >
                  <span className="relative z-10">Get Free Consultation</span>
                  <div className="absolute inset-0 bg-white rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-10 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-300">500+</div>
                  <div className="text-cyan-100">AI Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300">24/7</div>
                  <div className="text-blue-100">AI Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-300">Free</div>
                  <div className="text-purple-100">AI Consultation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;