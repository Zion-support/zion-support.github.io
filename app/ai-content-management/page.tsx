import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Image, Video, Music, Globe, Search, Filter, Zap, Brain, Shield, Users, BarChart } from 'lucide-react';

const AIContentManagementPage = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      title: "Intelligent Content Creation",
      description: "AI-powered content generation for blogs, articles, social media, and marketing materials.",
      benefits: ["Automated writing", "SEO optimization", "Brand voice consistency", "Multi-language support"]
    },
    {
      icon: <Image className="w-8 h-8 text-green-400" />,
      title: "Visual Content Management",
      description: "Smart image and video processing with automatic tagging, optimization, and enhancement.",
      benefits: ["Auto-tagging", "Image optimization", "Video processing", "Visual search"]
    },
    {
      icon: <Search className="w-8 h-8 text-purple-400" />,
      title: "Smart Content Discovery",
      description: "Advanced search and recommendation engine to help users find relevant content quickly.",
      benefits: ["Semantic search", "Content recommendations", "Trend analysis", "User behavior insights"]
    },
    {
      icon: <Filter className="w-8 h-8 text-yellow-400" />,
      title: "Content Curation",
      description: "Automated content filtering, categorization, and quality assessment using AI algorithms.",
      benefits: ["Quality scoring", "Auto-categorization", "Spam detection", "Content moderation"]
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: "Workflow Automation",
      description: "Streamline content workflows with automated approval processes and publishing schedules.",
      benefits: ["Auto-approval", "Scheduled publishing", "Workflow optimization", "Team collaboration"]
    },
    {
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      title: "Analytics & Insights",
      description: "Comprehensive content performance analytics and AI-driven insights for optimization.",
      benefits: ["Performance tracking", "Engagement metrics", "ROI analysis", "Predictive analytics"]
    }
  ];

  const capabilities = [
    { name: "Natural Language Processing", description: "Advanced NLP for content understanding and generation" },
    { name: "Computer Vision", description: "Image and video analysis for visual content management" },
    { name: "Machine Learning", description: "Continuous learning from content patterns and user behavior" },
    { name: "Content Optimization", description: "AI-driven suggestions for improving content performance" },
    { name: "Multi-language Support", description: "Automatic translation and localization capabilities" },
    { name: "Brand Consistency", description: "Maintain brand voice and style across all content" }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Manage product descriptions, reviews, and marketing content at scale",
      icon: <Globe className="w-6 h-6 text-blue-400" />
    },
    {
      industry: "Media & Publishing",
      description: "Automate content creation, curation, and distribution workflows",
      icon: <FileText className="w-6 h-6 text-green-400" />
    },
    {
      industry: "Marketing",
      description: "Generate personalized content for campaigns and customer engagement",
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      industry: "Education",
      description: "Create and manage educational content with adaptive learning features",
      icon: <Brain className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered content management system with intelligent creation, curation, and optimization capabilities." />
        <meta name="keywords" content="AI content management, content automation, intelligent curation, content optimization, AI writing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Content Management
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your content strategy with AI-powered creation, curation, and optimization. 
                Scale your content operations while maintaining quality and brand consistency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive content management powered by cutting-edge artificial intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technologies powering your content management system
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{capability.name}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI content management solutions tailored for different industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {useCase.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{useCase.industry}</h3>
                  </div>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Choose AI Content Management?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">10x Faster Content Creation</h3>
                      <p className="text-gray-300">Generate high-quality content at unprecedented speed with AI assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Consistent Quality</h3>
                      <p className="text-gray-300">Maintain brand voice and quality standards across all content</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <BarChart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Data-Driven Insights</h3>
                      <p className="text-gray-300">Make informed content decisions with AI-powered analytics</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Free 14-day trial
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    No credit card required
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    24/7 support included
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Easy integration
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Start Your Free Trial
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI to transform their content operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started Now
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentManagementPage;