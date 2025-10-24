'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Footer from './Footer';

interface ContentPreviewCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  category?: string;
  readTime?: string;
  publishedAt?: string;
  author?: string;
  className?: string;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({
  title = "Content Preview Card",
  description = "Advanced content preview solution for modern businesses.",
  imageUrl = "/api/placeholder/400/250",
  category = "Technology",
  readTime = "5 min read",
  publishedAt = "2024-01-01",
  author = "Zion Tech Group",
  className = ""
}) => {
  return (
    <>
      <Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
            <div className="relative max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                  Get Started
                </button>
                <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* Content Preview Card */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {category}
                  </span>
                  <span>•</span>
                  <span>{readTime}</span>
                  <span>•</span>
                  <span>{publishedAt}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                
                <div className="aspect-video bg-gray-800 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={imageUrl} 
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{author}</p>
                      <p className="text-gray-400 text-sm">Content Creator</p>
                    </div>
                  </div>
                  
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
                <p className="text-gray-300 text-lg">
                  Discover the powerful features that make our content preview solution perfect for your business.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                  <p className="text-gray-300">Advanced AI algorithms for intelligent content analysis.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                  <p className="text-gray-300">Grows with your business needs and requirements.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Secure</h3>
                  <p className="text-gray-300">Enterprise-grade security and data protection.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Efficient</h3>
                  <p className="text-gray-300">Optimized performance for maximum productivity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Join thousands of businesses already using our content preview solution to transform their operations.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Your Free Trial
              </button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContentPreviewCard;