import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI-Powered Content Tools | Zion Tech Group - Content Optimization Suite',
  description: 'Advanced AI content optimization tools for headlines, email subject lines, and marketing copy. Boost engagement with intelligent content generation and A/B testing.',
  keywords: 'AI content tools, content optimization, email subject lines, headline generator, marketing copy AI, content A/B testing',
};

export default function AIPoweredContentToolsPage() {
  const tools = [
    {
      name: "HeadlineMaster AI",
      description: "AI-powered headline generator that creates compelling, SEO-optimized headlines for B2B marketing campaigns",
      features: [
        "Industry-specific optimization",
        "A/B testing capabilities",
        "Performance analytics",
        "SEO score analysis",
        "Multi-language support"
      ],
      pricing: "Starting from $29/month",
      useCases: ["Blog posts", "Social media", "Email campaigns", "Ad copy"]
    },
    {
      name: "EmailSubjectAI",
      description: "Intelligent email subject line generator with open rate prediction and performance optimization",
      features: [
        "Open rate prediction",
        "A/B testing framework",
        "Industry benchmarks",
        "Personalization engine",
        "Spam filter optimization"
      ],
      pricing: "Starting from $49/month",
      useCases: ["Newsletter campaigns", "Sales emails", "Marketing automation", "Transactional emails"]
    },
    {
      name: "ContentAnalyzer Pro",
      description: "AI-powered content analysis tool that evaluates readability, engagement potential, and SEO performance",
      features: [
        "Readability scoring",
        "Engagement prediction",
        "SEO optimization suggestions",
        "Sentiment analysis",
        "Competitor analysis"
      ],
      pricing: "Starting from $39/month",
      useCases: ["Blog optimization", "Social media content", "Website copy", "Marketing materials"]
    },
    {
      name: "PodcastTranscriber AI",
      description: "Advanced podcast transcription service with speaker identification and content optimization suggestions",
      features: [
        "Speaker identification",
        "Content summarization",
        "Keyword extraction",
        "Chapter generation",
        "Multi-language support"
      ],
      pricing: "Starting from $19/month",
      useCases: ["Podcast production", "Content repurposing", "SEO optimization", "Accessibility compliance"]
    }
  ];

  const benefits = [
    {
      title: "Increased Engagement",
      description: "Average 40% improvement in click-through rates with AI-optimized content",
      icon: "📈"
    },
    {
      title: "Time Savings",
      description: "Reduce content creation time by 60% with automated optimization",
      icon: "⏰"
    },
    {
      title: "SEO Performance",
      description: "Boost organic traffic by 35% with SEO-optimized content",
      icon: "🔍"
    },
    {
      title: "A/B Testing",
      description: "Data-driven content optimization with built-in testing capabilities",
      icon: "🧪"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Content Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your content strategy with our suite of AI-powered tools designed to optimize headlines, 
            email subject lines, and marketing copy for maximum engagement and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started - Free Trial
            </Link>
            <Link 
              href="/pricing" 
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {tool.pricing}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {tool.useCases.map((useCase, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our AI Content Tools?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Comparison */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Market-Leading Performance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-blue-100">Higher engagement rates than traditional content</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <p className="text-blue-100">Reduction in content creation time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">35%</div>
              <p className="text-blue-100">Increase in organic traffic</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI-powered content tools to boost engagement, 
            save time, and drive better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+13024640950" 
              className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              📞 Call: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ✉️ Email: kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-gray-500">
            📍 364 E Main St STE 1008, Middletown, DE 19709
          </p>
        </div>
      </div>
    </div>
  );
}