import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Generator Pro | Zion Tech Group',
  description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials. Generate high-quality, SEO-optimized content at scale.',
  keywords: 'AI content generator, content creation, blog writing, social media content, marketing automation, SEO content'
};

export default function AIContentGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Content Generator Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Transform your content marketing with our advanced AI-powered platform. Generate high-quality, 
            SEO-optimized content for blogs, social media, and marketing materials at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Content Generator Inquiry"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Start Free Trial
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              Contact Sales
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600">
            AI Content Generator page is under construction.
          </p>
        </div>
      </div>
    </div>
  );
}