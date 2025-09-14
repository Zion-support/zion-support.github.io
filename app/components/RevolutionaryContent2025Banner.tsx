'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

<<<<<<< HEAD
const RevolutionaryContent2025Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide to 1,000% ROI',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      metrics: '1,000% ROI',
      description: 'Fortune 500 companies achieving unprecedented results',
      isNew: true
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 750% ROI',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      metrics: '750% ROI',
      description: 'Transform customer experience with AI-powered solutions',
      isNew: true
    },
    {
      id: 'manufacturing-transformation',
      title: 'AI 2025 Manufacturing Transformation: $4.2B Company Achieves 1,100% ROI',
      url: '/case-studies/ai-2025-manufacturing-transformation-ultimate-success-story',
      metrics: '1,100% ROI',
      description: 'Global manufacturing leader achieves breakthrough results',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % revolutionaryContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = revolutionaryContent[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-20 left-1/2 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                🚀 REVOLUTIONARY 2025 CONTENT
              </span>
              {currentContent.isNew && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  NEW
                </span>
              )}
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-lg opacity-90 mb-4">
              {currentContent.description}
            </p>

            <div className="flex items-center gap-6">
              <div className="text-3xl font-bold text-yellow-300">
                {currentContent.metrics}
              </div>
              <div className="flex gap-3">
                <Link
                  href={currentContent.url}
                  className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                >
                  Read Now
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  View All
                </Link>
              </div>
=======
const RevolutionaryContent2025Banner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-900 px-6 py-2 rounded-full text-sm font-bold mb-6">
            🌟 REVOLUTIONARY 2025 CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
            Transform Your Business with AI
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Revolutionary AI automation strategies that are reshaping industries. 
            Get exclusive access to cutting-edge insights, proven methodologies, and breakthrough case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">🔥</div>
              <h3 className="text-2xl font-bold text-emerald-300">Ultimate Automation Guide</h3>
>>>>>>> origin/cursor/create-and-deploy-new-content-fb00
            </div>
            <p className="text-gray-200 mb-6">
              Complete enterprise guide to AI automation revolution. Learn how Fortune 500 companies 
              are achieving unprecedented ROI through strategic automation implementation.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                <span>15-minute comprehensive guide</span>
              </div>
              <div className="flex items-center text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                <span>Real-world implementation strategies</span>
              </div>
              <div className="flex items-center text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                <span>Industry-specific case studies</span>
              </div>
            </div>
            <Link 
              href="/blog/ai-2025-ultimate-business-automation-revolution-complete-guide"
              className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-900 px-6 py-3 rounded-lg font-semibold hover:from-emerald-300 hover:to-teal-300 transition-all duration-300"
            >
              Read Ultimate Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">⚡</div>
              <h3 className="text-2xl font-bold text-emerald-300">Quantum AI Revolution</h3>
            </div>
            <p className="text-gray-200 mb-6">
              Explore the future of business with Quantum AI. Revolutionary guide to quantum-enhanced 
              artificial intelligence transforming operations and creating competitive advantages.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                <span>18-minute deep dive into quantum AI</span>
              </div>
              <div className="flex items-center text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                <span>Business applications and use cases</span>
              </div>
              <div className="flex items-center text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                <span>Implementation roadmap and ROI</span>
              </div>
            </div>
            <Link 
              href="/blog/quantum-ai-2026-business-transformation-revolutionary-guide"
              className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-900 px-6 py-3 rounded-lg font-semibold hover:from-emerald-300 hover:to-teal-300 transition-all duration-300"
            >
              Explore Quantum AI →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">🏆</div>
              <h3 className="text-2xl font-bold text-emerald-300">Success Story: 340% ROI</h3>
            </div>
            <p className="text-gray-200 mb-6">
              Detailed case study of Fortune 500 company achieving 340% ROI in 12 months. 
              Learn from real implementation challenges, solutions, and results.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-300">$47M</div>
                <div className="text-sm text-gray-200">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-300">12</div>
                <div className="text-sm text-gray-200">Month ROI</div>
              </div>
            </div>
            <Link 
              href="/case-studies/enterprise-ai-automation-success-story-2025"
              className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-900 px-6 py-3 rounded-lg font-semibold hover:from-emerald-300 hover:to-teal-300 transition-all duration-300"
            >
              View Case Study →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">📋</div>
              <h3 className="text-2xl font-bold text-emerald-300">Implementation Checklist</h3>
            </div>
            <p className="text-gray-200 mb-6">
              Comprehensive 8-minute checklist covering all phases of AI automation implementation. 
              Ensure success with our proven step-by-step methodology.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                <span>Pre-implementation assessment</span>
              </div>
              <div className="flex items-center text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                <span>Implementation phases</span>
              </div>
              <div className="flex items-center text-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                <span>Success metrics and KPIs</span>
              </div>
            </div>
            <Link 
              href="/resources/ai-automation-implementation-checklist-2025"
              className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-900 px-6 py-3 rounded-lg font-semibold hover:from-emerald-300 hover:to-teal-300 transition-all duration-300"
            >
              Get Checklist →
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-900 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">🚀 Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6">
            Join thousands of companies already achieving breakthrough results with AI automation. 
            Get expert guidance and proven strategies for your implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services"
              className="bg-emerald-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-colors text-lg"
            >
              Start Your AI Journey
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-emerald-900 text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-900 hover:text-white transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Progress Indicators */}
          <div className="hidden md:flex flex-col gap-2 ml-8">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-8 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-yellow-400'
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-yellow-400 w-8'
                  : 'bg-white bg-opacity-30 hover:bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white hover:text-yellow-300 transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default RevolutionaryContent2025Banner;