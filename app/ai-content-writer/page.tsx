import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, PenTool, Brain, Target, Zap, CheckCircle, FileText } from "lucide-react";

const AIContentWriterPage = () => {
  const features = [
    {
      icon: <PenTool className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Writing',
      description: 'Generate high-quality, engaging content using advanced AI algorithms trained on millions of articles.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Smart Content Ideas',
      description: 'Get intelligent content suggestions based on trending topics and your target audience.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with built-in SEO analysis and suggestions.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Multiple Formats',
      description: 'Create blogs, articles, social media posts, emails, and more in various tones and styles.'
    },
    {
      icon: <FileText className="w-8 h-8 text-red-500" />,
      title: 'Content Templates',
      description: 'Use pre-built templates for different content types to maintain consistency and quality.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-indigo-500" />,
      title: 'Quality Assurance',
      description: 'Built-in grammar checking, plagiarism detection, and readability analysis ensure top-quality content.'
    }
  ];

  const benefits = [
    'Save 80% of content creation time',
    'Generate SEO-optimized content automatically',
    'Maintain consistent brand voice across all content',
    'Scale content production without additional writers',
    'Improve content engagement and conversion rates',
    'Access to trending topics and keywords'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Create high-quality, SEO-optimized content with our AI-powered writing assistant. Generate blogs, articles, and marketing copy in minutes." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Content Writer</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create compelling, SEO-optimized content at scale with our AI-powered writing assistant. 
            Generate blogs, articles, social media posts, and marketing copy in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Writing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Writing Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to create professional content at scale
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Content Writer?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your content marketing with intelligent automation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Start creating high-quality content in minutes with our intuitive AI writing assistant.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Start Writing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Transform Your Content Marketing</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of marketers already using our AI content writer to scale their content production.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentWriterPage;