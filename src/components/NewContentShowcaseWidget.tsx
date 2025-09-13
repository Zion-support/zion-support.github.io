import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Video, Download, ArrowRight, Star, Clock, Users } from 'lucide-react';

const NewContentShowcaseWidget = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const featuredContent = [
    {
      id: 1,
      type: 'guide',
      title: 'AI 2025: Ultimate Business Automation Mastery',
      description: 'Comprehensive guide to transforming your business operations with cutting-edge AI solutions.',
      category: 'Automation',
      readTime: '15 min read',
      rating: 4.9,
      downloads: '2.3k',
      icon: BookOpen,
      link: '/blog/ai-2025-ultimate-business-automation-mastery',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 2,
      type: 'toolkit',
      title: 'AI 2025 Automation Implementation Toolkit',
      description: 'Complete toolkit with templates, guides, checklists, and best practices for successful automation.',
      category: 'Resources',
      readTime: '50+ resources',
      rating: 4.8,
      downloads: '1.8k',
      icon: Download,
      link: '/resources/ai-2025-automation-implementation-toolkit',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const recentContent = [
    {
      id: 3,
      type: 'tutorial',
      title: 'Quantum Computing Solutions for Enterprise',
      description: 'Advanced quantum computing implementations for business optimization and problem-solving.',
      category: 'Quantum',
      readTime: '12 min read',
      rating: 4.7,
      downloads: '1.5k',
      icon: Video,
      link: '/tutorials/quantum-computing-enterprise-solutions',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      type: 'guide',
      title: 'Neural Interface Revolution 2025',
      description: 'Next-generation brain-computer interfaces and their applications in business and healthcare.',
      category: 'Neural',
      readTime: '18 min read',
      rating: 4.9,
      downloads: '2.1k',
      icon: FileText,
      link: '/blog/neural-interface-revolution-2025',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const content = activeTab === 'featured' ? featuredContent : recentContent;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-purple-500/20 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Latest Content & Resources</h3>
          <div className="flex bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'featured'
                  ? 'bg-white/20 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'recent'
                  ? 'bg-white/20 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Recent
            </button>
          </div>
        </div>
        <p className="text-gray-300 text-sm">
          Discover our latest guides, toolkits, and resources for AI implementation and business transformation.
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-400 mb-1">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      {item.downloads}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-white/10 text-xs font-medium text-white rounded-full mb-2">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.readTime}
                  </div>
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  >
                    Explore
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/content-showcase"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
          >
            View All Content
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcaseWidget;