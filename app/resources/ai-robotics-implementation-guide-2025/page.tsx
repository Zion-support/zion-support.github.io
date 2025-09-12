import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AIRoboticsImplementationGuide2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Robotics Implementation Guide 2025 - Complete Resource"
        description="Comprehensive guide to implementing AI robotics and automation in your organization. Step-by-step instructions, best practices, and case studies."
        keywords="AI robotics implementation, automation guide, collaborative robots, industrial automation, AI resources"
        url="/resources/ai-robotics-implementation-guide-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 FREE RESOURCE - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Robotics Implementation Guide 2025
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Your complete roadmap to implementing AI-powered robotics and automation in your organization. 
            This comprehensive guide covers everything from initial assessment to full deployment.
          </p>
        </header>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Download Your Free Guide</h2>
          <p className="text-lg mb-6 opacity-90">
            Get instant access to our comprehensive AI robotics implementation guide. 
            Join 3,000+ professionals who have already downloaded this resource.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Download Now
            </button>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Inside This Guide</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">📋 Chapter 1: Foundation</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Understanding AI robotics concepts</li>
                  <li>• Business case development</li>
                  <li>• Technology assessment framework</li>
                  <li>• ROI calculation templates</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🎯 Chapter 2: Planning</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Use case identification</li>
                  <li>• Technical requirements analysis</li>
                  <li>• Resource planning and budgeting</li>
                  <li>• Timeline and milestone creation</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🛠️ Chapter 3: Implementation</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Technology stack selection</li>
                  <li>• Robot selection and configuration</li>
                  <li>• Integration strategies</li>
                  <li>• Safety and compliance</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🚀 Chapter 4: Deployment</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Pilot program execution</li>
                  <li>• Testing and validation</li>
                  <li>• User training and adoption</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Future?</h3>
          <p className="text-lg mb-6 opacity-90">
            Transform your operations with AI-powered robotics and automation. Our experts can help you 
            design and implement the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/blog/ai-2025-robotics-automation"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Read Related Article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}