'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, FileText, Zap, ArrowRight, CheckCircle, Star, PenTool, Image, Video } from 'lucide-react';

export default function AiContentGenerationPage() {
  const features = [
    {
      title: "AI-Powered Writing",
      description: "Generate high-quality content with advanced AI writing capabilities",
      icon: <PenTool className="w-8 h-8" />,
      benefits: ["Natural language generation", "Context-aware writing", "Multiple writing styles", "SEO optimization"]
    },
    {
      title: "Multi-Format Content",
      description: "Create content in various formats including text, images, and videos",
      icon: <FileText className="w-8 h-8" />,
      benefits: ["Blog posts", "Social media content", "Marketing copy", "Technical documentation"]
    },
    {
      title: "Content Optimization",
      description: "Automatically optimize content for engagement and performance",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["A/B testing", "Performance analytics", "Engagement tracking", "Conversion optimization"]
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts",
      description: "AI-generated blog content with SEO optimization",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Social Media",
      description: "Engaging social media posts and captions",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Marketing Copy",
      description: "Compelling marketing materials and advertisements",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: "Technical Docs",
      description: "Comprehensive technical documentation",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "95%", label: "Content Quality" },
    { number: "10x", label: "Faster Creation" },
    { number: "80%", label: "Cost Reduction" },
    { number: "24/7", label: "Availability" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content with AI-powered writing tools. Blog posts, social media, marketing copy, and more." />
        <meta name="keywords" content="AI content generation, content writing, blog posts, social media content, marketing copy" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Content Generation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Generate high-quality content at scale with our advanced AI writing tools. 
              Create engaging blog posts, social media content, marketing copy, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Content Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI content generation platform provides intelligent writing tools that help you create engaging content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Content Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Generate various types of content for all your marketing and communication needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI content generation experts help you create compelling content that engages your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}