import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Rocket, Database, Zap, TrendingUp, Star, Clock } from 'lucide-react';

export default function NewContent2026ShowcaseBanner() {
  const featuredContent = [
    {
      title: 'AI Neural Interfaces 2026',
      description: 'Brain-computer integration with 95% accuracy and 10x faster processing',
      href: '/blog/ai-neural-interfaces-2026',
      icon: Brain,
      color: 'purple',
      metrics: { accuracy: '95%', speed: '10x', market: '$50B' },
      readTime: '25 min',
      type: 'article'
    },
    {
      title: 'AI Space Technology 2026',
      description: 'Autonomous spacecraft and intelligent mission planning with 99.9% success',
      href: '/blog/ai-space-tech-2026',
      icon: Rocket,
      color: 'blue',
      metrics: { market: '$100B', success: '99.9%', speed: '50x' },
      readTime: '30 min',
      type: 'article'
    },
    {
      title: 'AI Synthetic Data 2026',
      description: 'Privacy-preserving data generation with 99% accuracy and 90% cost reduction',
      href: '/blog/ai-synthetic-data-2026',
      icon: Database,
      color: 'green',
      metrics: { accuracy: '99%', cost: '90%', privacy: '100%' },
      readTime: '22 min',
      type: 'article'
    }
  ];

  const successStories = [
    {
      title: 'Neural Interface Success',
      description: 'Fortune 500 company achieved $15M ROI with 300% productivity gains',
      href: '/case-studies/ai-neural-interface-success-2026',
      metric: '$15M ROI',
      type: 'case-study'
    },
    {
      title: 'Space Tech Success',
      description: '99.9% mission success rate with autonomous spacecraft operations',
      href: '/case-studies/ai-space-tech-success-2026',
      metric: '99.9% Success',
      type: 'case-study'
    },
    {
      title: 'Synthetic Data Success',
      description: '90% cost reduction with privacy-preserving data solutions',
      href: '/case-studies/ai-synthetic-data-success-2026',
      metric: '90% Cost Cut',
      type: 'case-study'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-500 to-pink-500',
      blue: 'from-blue-500 to-cyan-500',
      green: 'from-green-500 to-teal-500'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  const getTextColor = (color: string) => {
    const colorMap = {
      purple: 'text-purple-600',
      blue: 'text-blue-600',
      green: 'text-green-600'
    };
    return colorMap[color] || 'text-gray-600';
  };

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 NEW 2026 CONTENT SHOWCASE
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI innovations, neural interfaces, space technology, and synthetic data solutions 
            that are reshaping the future of technology in 2026
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link key={index} href={item.href} className="group">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200 hover:scale-105">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(item.color)} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-sm font-medium ${getTextColor(item.color)}`}>
                            📝 {item.type === 'article' ? 'Article' : 'Case Study'}
                          </span>
                          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            NEW 2026
                          </span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.readTime} read
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-6">
                      {item.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex gap-4 mb-6">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-2xl font-bold ${getTextColor(item.color)}`}>{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        {item.type === 'article' ? 'Technical Guide' : 'Success Story'}
                      </div>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proven Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Link key={index} href={story.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-orange-200 hover:scale-105">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      CASE STUDY
                    </span>
                    <span className="text-sm text-gray-500">Fortune 500</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {story.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {story.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-orange-600">{story.metric}</div>
                    <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:text-orange-700 transition-colors">
                      View Story
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Explore the Future of AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Discover our complete library of AI innovations, case studies, and success stories 
              that are transforming businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2 inline" />
                Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                <TrendingUp className="w-5 h-5 mr-2 inline" />
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}