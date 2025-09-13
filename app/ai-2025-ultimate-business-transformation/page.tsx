import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Shield, Globe } from 'lucide-react';

export default function AI2025UltimateBusinessTransformation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 2025: Ultimate Business
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your business with cutting-edge AI solutions that deliver unprecedented results. 
              Join thousands of companies already transforming their operations with our advanced AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/ai-2025-ultimate-breakthrough" 
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300">
              Proven results that speak for themselves
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="h-12 w-12 text-blue-400" />,
                title: "Advanced AI Intelligence",
                description: "State-of-the-art machine learning algorithms that adapt and learn from your business data."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Lightning Fast Processing",
                description: "Process massive datasets in seconds, not hours, with our optimized AI infrastructure."
              },
              {
                icon: <Target className="h-12 w-12 text-green-400" />,
                title: "Precision Accuracy",
                description: "Achieve 99.7% accuracy in predictions and automated decision-making processes."
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-purple-400" />,
                title: "Proven ROI",
                description: "Average 300% ROI within the first 6 months of implementation across all clients."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "TechCorp Solutions",
                industry: "Technology",
                result: "450% increase in efficiency",
                description: "Reduced processing time from 8 hours to 15 minutes using our AI automation platform."
              },
              {
                company: "Global Manufacturing Inc",
                industry: "Manufacturing",
                result: "$2.3M saved annually",
                description: "Optimized supply chain management resulting in 40% cost reduction and zero downtime."
              },
              {
                company: "Financial Services Group",
                industry: "Finance",
                result: "99.9% fraud detection",
                description: "Implemented AI-powered fraud detection system preventing $50M in potential losses."
              }
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.company.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">{story.company}</h3>
                    <p className="text-gray-400">{story.industry}</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-400 mb-2">{story.result}</div>
                <p className="text-gray-300">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI revolution and unlock your business's full potential. 
            Get started with a free consultation and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/ai-2025-ultimate-breakthrough" 
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-white transition-colors"> Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-white transition-colors"> Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}