import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Brain, Rocket, Database, Zap, TrendingUp, Star } from 'lucide-react';

export default function InteractiveContentRecommendation() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: 'AI Neural Interfaces 2026: Brain-Computer Integration Revolution',
      category: 'neural',
      type: 'article',
      readTime: '25 min',
      description: 'Discover how AI neural interfaces are revolutionizing human-computer interaction with 95% accuracy and 10x faster processing.',
      metrics: { accuracy: '95%', speed: '10x', market: '$50B' },
      href: '/blog/ai-neural-interfaces-2026',
      featured: true,
      icon: Brain,
      color: 'purple'
    },
    {
      id: 2,
      title: 'AI Space Technology 2026: Next-Generation Space Intelligence',
      category: 'space',
      type: 'article',
      readTime: '30 min',
      description: 'Explore how AI is revolutionizing space technology with autonomous spacecraft and intelligent mission planning.',
      metrics: { market: '$100B', success: '99.9%', speed: '50x' },
      href: '/blog/ai-space-tech-2026',
      featured: true,
      icon: Rocket,
      color: 'blue'
    },
    {
      id: 3,
      title: 'AI Synthetic Data 2026: Privacy-Preserving Data Generation',
      category: 'privacy',
      type: 'article',
      readTime: '22 min',
      description: 'Learn how AI synthetic data is revolutionizing data privacy with 99% accuracy and 90% cost reduction.',
      metrics: { accuracy: '99%', cost: '90%', privacy: '100%' },
      href: '/blog/ai-synthetic-data-2026',
      featured: true,
      icon: Database,
      color: 'green'
    },
    {
      id: 4,
      title: 'AI Neural Interface Success: $15M ROI Case Study',
      category: 'neural',
      type: 'case-study',
      readTime: '18 min',
      description: 'See how a Fortune 500 company achieved 300% productivity gains with neural interface implementation.',
      metrics: { roi: '$15M', productivity: '300%', accuracy: '95%' },
      href: '/case-studies/ai-neural-interface-success-2026',
      featured: false,
      icon: TrendingUp,
      color: 'orange'
    },
    {
      id: 5,
      title: 'AI Space Tech Success: 99.9% Mission Success Rate',
      category: 'space',
      type: 'case-study',
      readTime: '20 min',
      description: 'Discover how AI transformed space mission success rates and enabled autonomous operations.',
      metrics: { success: '99.9%', missions: '1000+', efficiency: '50x' },
      href: '/case-studies/ai-space-tech-success-2026',
      featured: false,
      icon: Zap,
      color: 'cyan'
    },
    {
      id: 6,
      title: 'AI Synthetic Data Success: 90% Cost Reduction',
      category: 'privacy',
      type: 'case-study',
      readTime: '16 min',
      description: 'Learn how a Fortune 500 company achieved 90% cost reduction with synthetic data solutions.',
      metrics: { cost: '90%', compliance: '100%', savings: '$10M+' },
      href: '/case-studies/ai-synthetic-data-success-2026',
      featured: false,
      icon: Star,
      color: 'emerald'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'neural', label: 'Neural Interfaces', count: contentItems.filter(item => item.category === 'neural').length },
    { id: 'space', label: 'Space Technology', count: contentItems.filter(item => item.category === 'space').length },
    { id: 'privacy', label: 'Privacy & Data', count: contentItems.filter(item => item.category === 'privacy').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-500 to-pink-500',
      blue: 'from-blue-500 to-cyan-500',
      green: 'from-green-500 to-teal-500',
      orange: 'from-orange-500 to-red-500',
      cyan: 'from-cyan-500 to-blue-500',
      emerald: 'from-emerald-500 to-green-500'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  const getTextColor = (color: string) => {
    const colorMap = {
      purple: 'text-purple-600',
      blue: 'text-blue-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
      cyan: 'text-cyan-600',
      emerald: 'text-emerald-600'
    };
    return colorMap[color] || 'text-gray-600';
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4 mr-2 inline" />
              AI-Powered Recommendations
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Personalized Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most relevant AI content tailored to your interests. Our intelligent system 
            analyzes trending topics and success patterns to recommend the best content for you.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-gray-200 hover:scale-105">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(item.color)} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getTextColor(item.color)}`}>
                            {item.type === 'article' ? '📝 Article' : '📊 Case Study'}
                          </span>
                          {item.featured && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              FEATURED
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.readTime} read
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-4 mb-4">
                    {Object.entries(item.metrics).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-lg font-bold ${getTextColor(item.color)}`}>{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      {item.category === 'neural' && '🧠 Neural Computing'}
                      {item.category === 'space' && '🚀 Space Technology'}
                      {item.category === 'privacy' && '🔒 Privacy & Data'}
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Explore More AI Content?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover our complete library of AI articles, case studies, and success stories 
              that are transforming businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2 inline" />
                Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
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