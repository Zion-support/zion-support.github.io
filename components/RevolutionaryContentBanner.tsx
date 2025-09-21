'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { XMarkIcon, SparklesIcon, BookOpenIcon, DocumentTextIcon, ChartBarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function RevolutionaryContentBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const featuredContent = [
    {
      title: "Neural Interface Breakthrough",
      description: "Revolutionary brain-computer communication transforming human-AI interaction",
      href: "/blog/ai-2025-neural-interface-breakthrough",
      icon: "🧠",
      type: "Article",
      readTime: "12 min read",
      category: "Breakthrough Technology",
      featured: true
    },
    {
      title: "AI Cybersecurity Defense",
      description: "Next-generation AI-powered security protecting against advanced threats",
      href: "/blog/ai-2025-cybersecurity-ai-defense",
      icon: "🛡️",
      type: "Article",
      readTime: "15 min read",
      category: "Cybersecurity",
      featured: true
    },
    {
      title: "$200M Manufacturing Success",
      description: "Fortune 500 manufacturer achieves unprecedented cost savings and efficiency",
      href: "/case-studies/ai-2025-autonomous-manufacturing-success",
      icon: "🏭",
      type: "Case Study",
      readTime: "12 min read",
      category: "Success Story",
      featured: true
    }
  ];

  return (
    <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent transform skew-x-12 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3">
              <RocketLaunchIcon className="h-6 w-6 mr-3 text-yellow-400" />
              <span className="text-lg font-bold">🚀 REVOLUTIONARY CONTENT DROP</span>
            </div>
            <div className="hidden md:flex items-center text-sm opacity-90 bg-white bg-opacity-10 rounded-full px-4 py-2">
              <span>January 28, 2025</span>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-10"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🎉 Revolutionary AI Content Just Released!
          </h2>
          <p className="text-xl md:text-3xl opacity-90 mb-10 max-w-5xl mx-auto leading-relaxed">
            Discover breakthrough technologies that are reshaping industries: Neural Interfaces, AI Cybersecurity Defense, 
            and real-world success stories with proven $200M+ impact. Expert insights to accelerate your transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-10 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-xl shadow-2xl transform hover:scale-105"
            >
              🎯 Explore All Revolutionary Content
            </Link>
            <Link
              href="/mega-content-showcase"
              className="border-3 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-xl transform hover:scale-105"
            >
              📚 Mega Content Library
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl hover:bg-opacity-20 transition-all duration-500 border border-white border-opacity-20 hover:border-opacity-40 hover:shadow-2xl transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{content.icon}</div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">NEW</span>
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">FEATURED</span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">BREAKTHROUGH</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                  {content.title}
                </h3>
                
                <p className="text-sm opacity-90 mb-6 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between text-sm opacity-75">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <BookOpenIcon className="h-4 w-4 mr-1" />
                      {content.readTime}
                    </span>
                    <span className="flex items-center">
                      <DocumentTextIcon className="h-4 w-4 mr-1" />
                      {content.type}
                    </span>
                  </div>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-medium">
                    {content.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
          <div className="bg-white bg-opacity-10 rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl font-bold mb-2 text-yellow-400">$200M+</div>
            <div className="text-sm opacity-90">Proven Cost Savings</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl font-bold mb-2 text-green-400">95%</div>
            <div className="text-sm opacity-90">Efficiency Improvement</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl font-bold mb-2 text-blue-400">99.7%</div>
            <div className="text-sm opacity-90">Threat Detection</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl font-bold mb-2 text-purple-400">Zero</div>
            <div className="text-sm opacity-90">Safety Incidents</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
              Join thousands of organizations already leveraging these breakthrough technologies. 
              Start your transformation journey today with expert guidance and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Start Your Transformation
              </Link>
              <Link
                href="/resources/ai-implementation-master-guide-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                📖 Download Master Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}