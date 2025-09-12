import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AISustainabilityGuide2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Sustainability Guide 2025: Building Green AI Systems"
        description="Comprehensive guide to building sustainable AI systems. Download our free 50-page guide covering green AI strategies, optimization techniques, and implementation frameworks."
        keywords="AI sustainability guide, green AI, sustainable technology, AI energy efficiency, environmental AI"
        url="/resources/ai-sustainability-guide-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Resources
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Free Download</span>
          </div>
          
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🌱 SUSTAINABILITY GUIDE</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Sustainability Guide 2025: Building Green AI Systems
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Download our comprehensive 50-page guide to building sustainable AI systems. 
            Learn proven strategies, optimization techniques, and implementation frameworks 
            that reduce environmental impact while maintaining performance.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>📄 50 pages</span>
            <span>⏱️ 45 min read</span>
            <span>📥 2.1K downloads</span>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 mb-12">
          <div className="text-center">
            <div className="text-6xl mb-4">🌱</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Download Your Free AI Sustainability Guide
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get instant access to our comprehensive guide covering everything you need 
              to build environmentally responsible AI systems.
            </p>
            
            <div className="bg-white rounded-lg p-6 mb-6 max-w-md mx-auto">
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Download Free Guide
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What's Included in This Guide
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Environmental Impact Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    Learn how to measure and monitor the environmental impact of your AI systems, 
                    including carbon footprint, energy consumption, and resource usage.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Model Optimization Techniques</h3>
                  <p className="text-gray-600 text-sm">
                    Discover proven methods for optimizing AI models to reduce energy consumption 
                    by 50-90% while maintaining or improving performance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Efficient Training Methods</h3>
                  <p className="text-gray-600 text-sm">
                    Master techniques like gradient checkpointing, mixed precision training, 
                    and distributed training optimization to reduce training energy consumption.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Renewable Energy Integration</h3>
                  <p className="text-gray-600 text-sm">
                    Learn how to power your AI systems with renewable energy and implement 
                    carbon offset programs for maximum environmental benefit.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Edge Computing Strategies</h3>
                  <p className="text-gray-600 text-sm">
                    Implement edge AI solutions that can be 10-100x more energy efficient 
                    than cloud processing for many applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sustainable Architecture Patterns</h3>
                  <p className="text-gray-600 text-sm">
                    Design AI systems using hierarchical patterns, adaptive resource allocation, 
                    and lifecycle management for maximum sustainability.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">7</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Implementation Roadmap</h3>
                  <p className="text-gray-600 text-sm">
                    Follow our step-by-step 12-month implementation plan to transform your 
                    AI systems into sustainable, environmentally responsible solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">8</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tools and Frameworks</h3>
                  <p className="text-gray-600 text-sm">
                    Access our curated list of tools, frameworks, and platforms for 
                    measuring and optimizing AI sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why This Guide Matters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-semibold text-gray-900 mb-2">Environmental Impact</h3>
              <p className="text-gray-600 text-sm">
                Reduce your AI carbon footprint by up to 90% while maintaining performance
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Cost Savings</h3>
              <p className="text-gray-600 text-sm">
                Cut AI operational costs by 40-60% through energy efficiency improvements
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold text-gray-900 mb-2">Competitive Advantage</h3>
              <p className="text-gray-600 text-sm">
                Position your organization as a sustainability leader in the AI space
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-900">Chapter 1: The Environmental Impact of AI</span>
                <span className="text-sm text-gray-500">Pages 1-8</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-900">Chapter 2: Measuring AI Sustainability</span>
                <span className="text-sm text-gray-500">Pages 9-16</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-900">Chapter 3: Model Optimization Techniques</span>
                <span className="text-sm text-gray-500">Pages 17-24</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-900">Chapter 4: Efficient Training Methods</span>
                <span className="text-sm text-gray-500">Pages 25-32</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-900">Chapter 5: Renewable Energy Integration</span>
                <span className="text-sm text-gray-500">Pages 33-38</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-900">Chapter 6: Edge Computing Strategies</span>
                <span className="text-sm text-gray-500">Pages 39-44</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-900">Chapter 7: Implementation Roadmap</span>
                <span className="text-sm text-gray-500">Pages 45-50</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">📋</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Implementation Checklist 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete checklist for implementing AI systems with sustainability in mind
                </p>
              </div>
            </Link>
            
            <Link href="/resources/ai-cost-optimization-playbook" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Cost Optimization Playbook
                </h3>
                <p className="text-gray-600 text-sm">
                  Reduce AI costs while improving performance and sustainability
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Sustainable AI?</h2>
          <p className="text-xl opacity-90 mb-6">
            Download our comprehensive guide and start building environmentally responsible AI systems today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Download Free Guide
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}