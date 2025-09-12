import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Clock, Users } from 'lucide-react';

const NewContentPromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            New Content Alert
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content Just Dropped
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover our latest AI insights, case studies, and implementation guides 
            that are transforming businesses worldwide in 2025.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Enterprise Integration */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🏢</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Enterprise AI Guide</h3>
                <p className="text-blue-200 text-sm">25 min read</p>
              </div>
            </div>
            <h4 className="font-semibold mb-2">AI Enterprise Integration Success</h4>
            <p className="text-blue-100 text-sm mb-4">
              Master AI enterprise integration with proven strategies and real-world case studies for 300% ROI potential.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                NEW
              </span>
              <Link 
                href="/blog/ai-2025-enterprise-integration-success"
                className="text-white hover:text-blue-200 text-sm font-medium flex items-center"
              >
                Read Now
                <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>

          {/* Multimodal Revolution */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">AI Innovation</h3>
                <p className="text-blue-200 text-sm">18 min read</p>
              </div>
            </div>
            <h4 className="font-semibold mb-2">AI Multimodal Revolution 2025</h4>
            <p className="text-blue-100 text-sm mb-4">
              Explore the groundbreaking multimodal AI revolution transforming human-computer interaction.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">
                TRENDING
              </span>
              <Link 
                href="/blog/ai-2025-multimodal-revolution"
                className="text-white hover:text-blue-200 text-sm font-medium flex items-center"
              >
                Read Now
                <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>

          {/* Manufacturing Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🏭</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Case Study</h3>
                <p className="text-blue-200 text-sm">22 min read</p>
              </div>
            </div>
            <h4 className="font-semibold mb-2">AI Manufacturing Transformation</h4>
            <p className="text-blue-100 text-sm mb-4">
              $75M cost savings success story from a global manufacturing leader's AI transformation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                $75M SAVINGS
              </span>
              <Link 
                href="/case-studies/ai-manufacturing-transformation-2025"
                className="text-white hover:text-blue-200 text-sm font-medium flex items-center"
              >
                Read Now
                <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-200 text-sm">Companies Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">$2.5B+</div>
            <div className="text-blue-200 text-sm">Cost Savings Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-blue-200 text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200 text-sm">Expert Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link 
              href="/content-showcase"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Explore All Content
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get AI Consultation
            </Link>
          </div>
          <p className="text-blue-200 text-sm">
            Join thousands of businesses already transforming with our AI expertise
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBanner;