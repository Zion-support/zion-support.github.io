'use client';

import React from 'react';
import Link from 'next/link';
ArrowRightCalendarTrendingUpUsersStarClockEyeBookOpenVideoFileText

const LatestContent2025PromotionBanner = () => {
  const latestContent = [
    {
      id: 1,
      title: "AI Revolution 2025: 'What', 's Next?",
      type: 'article',
      readTime: '8 min',
      views: '15.2k',
      rating: 4.9,
      published: '2 hours ago',
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs",
      type: 'video',
      readTime: '12 min',
      views: '8.7k',
      rating: 4.8,
      published: '5 hours ago',
      featured: false
    },
    {
      id: 3,
      title: "Automation Best Practices Guide",
      type: 'guide',
      readTime: '15 min',
      views: '12.1k',
      rating: 4.9,
      published: '1 day ago',
      featured: true
    },
    {
      id: 4,
      title: "Future of Work: AI Integration",
      type: 'whitepaper',
      readTime: '20 min',
      views: '6.3k',
      rating: 4.7,
      published: '2 days ago',
      featured: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'guide': return <BookOpen className="w-4 h-4" />;
      case 'whitepaper': return <FileText className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Latest Content
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fresh Insights & Breakthroughs
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay ahead with our latest articlesguidesand insights on cutting-edge technology and AI innovations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {latestContent.map((content) => (
            <div key={content.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(content.type)}
                  <span className="text-sm font-medium capitalize">{content.type}</span>
                </div>
                {content.featured && (
                  <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                {content.title}
              </h3>
              
              <div className="flex items-center justify-between text-sm text-blue-100 mb-4">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {content.readTime}
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {content.views}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{content.rating}</span>
                </div>
                <span className="text-xs text-blue-200">{content.published}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { number: '50+'label: 'New Articles This Week' },
            { number: '1M+'label: 'Monthly Readers' },
            { number: '95%'label: 'Reader Satisfaction' },
            { number: '24/7'label: 'Content Updates' }
          ].map((statindex) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
          <p className="text-lg text-blue-100 mb-8">
            Get instant notifications when we publish new content and breakthrough insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestContent2025PromotionBanner;