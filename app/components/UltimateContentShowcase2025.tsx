import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Clock, Download, ExternalLink, CheckCircle, Zap, Target, Award } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contentData = {
    blog: [
      {
        id: 'advanced-automation-revolution',
        title: 'AI 2025: The Advanced Automation Revolution - Ultimate Enterprise Guide',
        description: 'Transform your business with next-generation AI automation solutions achieving 600% average ROI and $2.8 billion in annual savings.',
        url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
        readingTime: '25 min read',
        tags: ['AI Automation', 'Enterprise', 'ROI', '2025'],
        metrics: {
          roi: '600%',
          savings: '$2.8B',
          efficiency: '89%',
          uptime: '99.7%'
        },
        featured: true,
        isNew: true
      },
      {
        id: 'edge-computing-revolution',
        title: 'AI 2025: The Edge Computing Revolution - Ultimate Enterprise Guide',
        description: 'Achieve 450% ROI with real-time intelligence and edge computing solutions for enterprise transformation.',
        url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
        readingTime: '18 min read',
        tags: ['Edge Computing', 'Real-Time', 'ROI', '2025'],
        metrics: {
          roi: '450%',
          savings: '$1.2B',
          latency: '67% reduction',
          uptime: '99.5%'
        },
        featured: true,
        isNew: true
      },
      {
        id: 'blockchain-integration',
        title: 'AI 2025: Blockchain Integration Revolution - Enterprise Implementation Guide',
        description: 'Revolutionize your enterprise with AI-powered blockchain solutions delivering 600% ROI and $6.8M savings.',
        url: '/blog/ai-2025-blockchain-integration-enterprise-guide',
        readingTime: '20 min read',
        tags: ['Blockchain', 'Enterprise', 'ROI', '2025'],
        metrics: {
          roi: '600%',
          savings: '$6.8M',
          costReduction: '89%',
          security: '99.9%'
        },
        featured: true,
        isNew: true
      }
    ],
    caseStudies: [
      {
        id: 'fortune-500-transformation',
        title: 'Fortune 500 AI Transformation 2025: Ultimate Success Story',
        description: 'How a global manufacturing giant achieved $3.2B annual savings with 700% ROI in 18 months.',
        url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
        readingTime: '22 min read',
        tags: ['Fortune 500', 'Success Story', 'ROI', 'Manufacturing'],
        metrics: {
          roi: '700%',
          savings: '$3.2B',
          efficiency: '89%',
          satisfaction: '98%'
        },
        featured: true,
        isNew: true
      },
      {
        id: 'healthcare-transformation',
        title: 'AI Healthcare Transformation 2025: 450% ROI Success Story',
        description: 'Revolutionary healthcare AI implementation delivering 450% ROI and $12M annual savings.',
        url: '/case-studies/ai-healthcare-transformation-2025-success-story',
        readingTime: '18 min read',
        tags: ['Healthcare', 'AI Transformation', 'ROI', 'Success'],
        metrics: {
          roi: '450%',
          savings: '$12M',
          satisfaction: '94%',
          efficiency: '67%'
        },
        featured: true,
        isNew: true
      }
    ],
    resources: [
      {
        id: 'transformation-master-guide',
        title: 'AI Transformation Master Guide 2025: Ultimate Edition',
        description: 'The complete blueprint for enterprise AI success - from strategy to 700% ROI with comprehensive implementation framework.',
        url: '/resources/ai-transformation-master-guide-2025-ultimate-edition',
        readingTime: '45 min read',
        tags: ['Master Guide', 'Strategy', 'ROI', 'Implementation'],
        metrics: {
          roi: '700%',
          successRate: '98%',
          projects: '500+',
          satisfaction: '98%'
        },
        featured: true,
        isNew: true,
        downloadable: true
      },
      {
        id: 'implementation-checklist',
        title: 'AI Implementation Checklist 2025 - Complete Implementation Guide',
        description: 'Step-by-step checklist for successful AI implementation with 95% success rate and 300-500% ROI.',
        url: '/resources/ai-transformation-checklist-2025',
        readingTime: '15 min read',
        tags: ['Checklist', 'Implementation', 'Guide', 'Success'],
        metrics: {
          successRate: '95%',
          roi: '300-500%',
          timeReduction: '67%',
          projects: '1000+'
        },
        featured: true,
        isNew: true,
        downloadable: true
      }
    ]
  };

  const allContent = [
    ...contentData.blog.map(item => ({ ...item, type: 'blog' })),
    ...contentData.caseStudies.map(item => ({ ...item, type: 'case-study' })),
    ...contentData.resources.map(item => ({ ...item, type: 'resource' }))
  ];

  const filteredContent = activeTab === 'all' 
    ? allContent 
    : allContent.filter(item => item.type === activeTab);

  const tabs = [
    { id: 'all', label: 'All Content', count: allContent.length },
    { id: 'blog', label: 'Blog Posts', count: contentData.blog.length },
    { id: 'case-study', label: 'Case Studies', count: contentData.caseStudies.length },
    { id: 'resource', label: 'Resources', count: contentData.resources.length }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <TrendingUp className="w-4 h-4" />;
      case 'case-study': return <Award className="w-4 h-4" />;
      case 'resource': return <Download className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That's
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Transforming Businesses</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI transformation content, featuring real-world success stories, 
            proven strategies, and implementation guides that have delivered <strong className="text-blue-600">$2.8+ billion in savings</strong> across 500+ enterprises.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">700%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">$3.2B</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
              <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Content Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-1 capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.isNew && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.readingTime}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6">
                <div className="flex space-x-3">
                  <Link
                    href={item.url}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  {item.downloadable && (
                    <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center">
                      <Download className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ enterprises that have achieved 700% ROI with our proven AI transformation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Get Free Assessment
                <Target className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                Browse All Resources
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;