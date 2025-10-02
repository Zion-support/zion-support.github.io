import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  PenTool, 
  Search, 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3, 
  Users, 
  Globe,
  CheckCircle,
  DollarSign,
  Star,
  ArrowRight,
  Brain,
  FileText,
  Image,
  Video,
  Mic,
  Calendar,
  Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Content Optimization Suite - Zion Tech Group',
  description: 'Revolutionary AI-powered content optimization platform that analyzes, improves, and maximizes engagement across all content types.',
  keywords: 'AI content optimization, content marketing, SEO optimization, content analytics, AI writing assistant',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIContentOptimizationSuite() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
          <Brain className="w-4 h-4 mr-2" />
          AI-Powered Content Intelligence
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Content Optimization Suite
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Transform your content strategy with AI that analyzes, optimizes, and maximizes engagement across 
          blogs, social media, videos, and marketing materials. Increase engagement by 300% and reduce content creation time by 70%.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="mailto:kleber@ziontechgroup.com?subject=AI Content Optimization Suite Inquiry"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Optimizing Today
          </Link>
          <Link 
            href="tel:+13024640950"
            className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <PenTool className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Writing Assistant</h3>
          <p className="text-gray-600 mb-4">
            Generate high-quality content with AI that understands your brand voice and optimizes for engagement.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Brand voice consistency</li>
            <li>• Tone optimization</li>
            <li>• Grammar & style enhancement</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <Search className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO Intelligence</h3>
          <p className="text-gray-600 mb-4">
            Advanced SEO analysis with keyword optimization, content scoring, and competitive analysis.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Keyword density optimization</li>
            <li>• Content scoring (0-100)</li>
            <li>• Competitor analysis</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Engagement Analytics</h3>
          <p className="text-gray-600 mb-4">
            Real-time analytics on content performance with predictive engagement scoring.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Engagement prediction</li>
            <li>• Performance tracking</li>
            <li>• Audience insights</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Audience Targeting</h3>
          <p className="text-gray-600 mb-4">
            AI-powered audience analysis and content personalization for maximum impact.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Audience persona analysis</li>
            <li>• Content personalization</li>
            <li>• Behavioral insights</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
            <Image className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Visual Content AI</h3>
          <p className="text-gray-600 mb-4">
            Generate and optimize images, videos, and graphics with AI-powered visual content creation.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• AI image generation</li>
            <li>• Video optimization</li>
            <li>• Graphic design automation</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Automation</h3>
          <p className="text-gray-600 mb-4">
            Automate content workflows, scheduling, and distribution across multiple platforms.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Automated publishing</li>
            <li>• Cross-platform distribution</li>
            <li>• Workflow automation</li>
          </ul>
        </div>
      </div>

      {/* Content Types Supported */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Optimize All Content Types</h2>
          <p className="text-lg text-gray-600">From blog posts to social media, we optimize everything</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog Posts</h3>
            <p className="text-gray-600 text-sm">SEO optimization, readability scoring, and engagement prediction</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h3>
            <p className="text-gray-600 text-sm">Platform-specific optimization and viral potential analysis</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Content</h3>
            <p className="text-gray-600 text-sm">Script optimization, thumbnail generation, and engagement analysis</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Podcasts</h3>
            <p className="text-gray-600 text-sm">Transcript optimization, show notes generation, and SEO enhancement</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 rounded-2xl p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600">Choose the plan that scales with your content needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Creator</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$49<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600">Perfect for individual creators</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                100 content optimizations/month
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                AI writing assistant
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Basic SEO analysis
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Social media optimization
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Email support
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Content Creator Plan - AI Content Optimization"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Team</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$149<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600">Ideal for marketing teams</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                500 content optimizations/month
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Advanced AI writing
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Comprehensive SEO analysis
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Multi-platform optimization
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Priority support
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Marketing Team Plan - AI Content Optimization"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-purple-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
              <p className="text-gray-600">For large organizations</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Unlimited optimizations
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Custom AI models
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                White-label solution
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                API access
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                24/7 dedicated support
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Enterprise Plan - AI Content Optimization"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* ROI Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600">See how our AI Content Optimization Suite transforms content performance</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">300%</h3>
            <p className="text-gray-600">Average increase in content engagement</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">250%</h3>
            <p className="text-gray-600">Improvement in organic search traffic</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">70%</h3>
            <p className="text-gray-600">Reduction in content creation time</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">400%</h3>
            <p className="text-gray-600">ROI within first 6 months</p>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Integrates with Your Tools</h2>
          <p className="text-xl opacity-90">Works seamlessly with your existing content workflow</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">CMS Platforms</h3>
            <p className="text-sm opacity-80">WordPress, Drupal, Contentful</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Social Media</h3>
            <p className="text-sm opacity-80">Facebook, Twitter, LinkedIn, Instagram</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-sm opacity-80">Google Analytics, Adobe Analytics</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-sm opacity-80">Enterprise SSO, GDPR compliant</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Optimize Your Content?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of content creators and marketers using our AI Content Optimization Suite to maximize engagement and drive results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="mailto:kleber@ziontechgroup.com?subject=AI Content Optimization Suite Demo Request"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link 
            href="tel:+13024640950"
            className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 🌐 <Link href="https://ziontechgroup.com" className="text-purple-600 hover:underline">ziontechgroup.com</Link></p>
        </div>
      </div>
    </div>
  );
}