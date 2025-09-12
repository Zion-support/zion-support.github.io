import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Clock, Users } from 'lucide-react';

export default function NewContentShowcase2025() {
  const featuredContent = [
    {
      title: "The Multimodal AI Revolution",
      description: "Explore how multimodal AI is transforming industries by combining text, vision, audio, and other modalities.",
      type: "Blog Post",
      readTime: "15 min",
      url: "/blog/ai-2025-multimodal-revolution",
      category: "AI Innovation",
      featured: true
    },
    {
      title: "AI Financial Services Breakthrough",
      description: "How a Fortune 500 company achieved $50M revenue increase using AI-powered automation.",
      type: "Case Study",
      readTime: "12 min",
      url: "/case-studies/ai-2025-financial-services-breakthrough",
      category: "Success Story",
      featured: true
    },
    {
      title: "Ultimate AI Implementation Guide",
      description: "Complete step-by-step guide to successfully implementing AI in your organization.",
      type: "Master Guide",
      readTime: "25 min",
      url: "/resources/ai-2025-implementation-master-guide-ultimate",
      category: "Implementation",
      featured: true
    }
  ];

  const stats = [
    { label: "New Articles", value: "150+", icon: Star },
    { label: "Case Studies", value: "45+", icon: Users },
    { label: "Resources", value: "80+", icon: Clock }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Fresh AI Content for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, case studies, and implementation guides 
            from our team of AI experts. Stay ahead of the curve with cutting-edge content.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {content.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">
                    {content.type}
                  </span>
                  <Link 
                    href={content.url}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI solutions to drive 
            innovation, increase efficiency, and achieve breakthrough results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services/ai-consulting"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/content-showcase"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-flex items-center justify-center"
            >
              Explore All Content
            </Link>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link 
            href="/blog"
            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
              Latest Blog Posts
            </h4>
            <p className="text-sm text-gray-600">
              Stay updated with the latest AI trends and insights
            </p>
          </Link>
          
          <Link 
            href="/case-studies"
            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
              Success Stories
            </h4>
            <p className="text-sm text-gray-600">
              Real-world AI implementations and their results
            </p>
          </Link>
          
          <Link 
            href="/resources"
            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
              Implementation Guides
            </h4>
            <p className="text-sm text-gray-600">
              Step-by-step guides and best practices
            </p>
          </Link>
          
          <Link 
            href="/webinars"
            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
              Webinars & Events
            </h4>
            <p className="text-sm text-gray-600">
              Live sessions with AI experts and thought leaders
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}