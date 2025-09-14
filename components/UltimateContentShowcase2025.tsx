import React, { useState } from 'react';
import Link from 'next/link';

<<<<<<< HEAD
const UltimateContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution',
      description: 'Transform your business with 500% ROI, $200M savings, and 99.8% satisfaction rates.',
      category: 'automation',
      type: 'blog',
      url: '/ai-2025-ultimate-automation-revolution',
      metrics: {
        roi: '500%',
        savings: '$200M',
        satisfaction: '99.8%',
        timeline: '12 months'
      },
      featured: true,
      image: '🤖'
    },
    {
      id: 'quantum-ai-breakthrough',
      title: 'Quantum AI 2026: The Business Breakthrough',
      description: 'Experience the quantum revolution with 400-600% ROI and 1,200% speed improvements.',
      category: 'quantum',
      type: 'blog',
      url: '/quantum-ai-2026-business-breakthrough',
      metrics: {
        roi: '400-600%',
        speed: '1,200%',
        accuracy: '99.97%',
        market: '$100B'
      },
      featured: true,
      image: '⚛️'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation Success',
      description: 'How a $2B company achieved 567% ROI in 18 months with comprehensive AI implementation.',
      category: 'case-study',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '156%',
        timeline: '18 months'
      },
      featured: true,
      image: '🏆'
    },
    {
      id: 'enterprise-automation-guide',
      title: 'AI Implementation Master Guide 2025',
      description: 'Complete roadmap to achieving 500% ROI with AI automation in your organization.',
      category: 'guide',
      type: 'resource',
      url: '/resources/ai-automation-implementation-guide-2025',
      metrics: {
        roi: '500%',
        success: '94%',
        timeline: '12-18 months',
        projects: '500+'
      },
      featured: false,
      image: '📚'
    },
    {
      id: 'quantum-implementation-guide',
      title: 'Quantum AI Implementation Guide 2026',
      description: 'From strategy to 567% ROI - complete framework for quantum AI transformation.',
      category: 'quantum',
      type: 'resource',
      url: '/resources/quantum-ai-implementation-guide-2026',
      metrics: {
        roi: '567%',
        timeframe: '6 months',
        phases: '3 phases',
        payback: '3.8 months'
      },
      featured: false,
      image: '⚛️'
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation Success',
      description: 'How a $200M health system achieved 300% ROI with AI-powered patient care.',
      category: 'case-study',
      type: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      metrics: {
        roi: '300%',
        savings: '$18.7M',
        satisfaction: '95%',
        efficiency: '67%'
      },
      featured: false,
      image: '🏥'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'automation', label: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'quantum', label: 'Quantum AI', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'guide', label: 'Guides', count: contentItems.filter(item => item.category === 'guide').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredContent = contentItems.filter(item => item.featured);
  const regularContent = filteredContent.filter(item => !item.featured);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI transformation content, 
            featuring revolutionary guides, success stories, and implementation frameworks.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.label} ({category.count})
=======
import React, { useState } from 'react';
import { Star, TrendingUp, Users, DollarSign, Clock, ArrowRight, Filter } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings?: string;
    efficiency?: string;
    satisfaction?: string;
  };
  readingTime: string;
  tags: string[];
  featured: boolean;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'advanced-analytics-revolution',
      title: 'AI 2025: The Advanced Analytics Revolution - Ultimate Guide to 900% ROI',
      type: 'blog',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      metrics: {
        roi: '900%',
        savings: '$8.2M annually',
        efficiency: '450%',
        satisfaction: '99.9%'
      },
      readingTime: '22 min read',
      tags: ['Advanced Analytics', 'AI', 'ROI', 'Fortune 500'],
      featured: true
    },
    {
      id: 'manufacturing-transformation-1200-roi',
      title: 'AI 2025 Manufacturing Transformation: $3.2B Company Achieves 1,200% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-manufacturing-transformation-1200-roi-success',
      metrics: {
        roi: '1,200%',
        savings: '$450M annually',
        efficiency: '78%',
        satisfaction: '96%'
      },
      readingTime: '18 min read',
      tags: ['Manufacturing', 'AI Transformation', 'ROI', 'Case Study'],
      featured: true
    },
    {
      id: 'implementation-master-roadmap-ultimate',
      title: 'AI 2025 Implementation Master Roadmap: From Strategy to 1,000% ROI in 12 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-roadmap-ultimate-guide',
      metrics: {
        roi: '1,000%',
        savings: '$5.2M annually',
        efficiency: '94%',
        satisfaction: '94%'
      },
      readingTime: '35 min read',
      tags: ['AI Implementation', 'Strategy', 'ROI', 'Master Guide'],
      featured: true
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 750% ROI',
      type: 'blog',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      metrics: {
        roi: '750%',
        savings: '$6.8M annually',
        efficiency: '340%',
        satisfaction: '99.8%'
      },
      readingTime: '20 min read',
      tags: ['Customer Experience', 'AI', 'ROI', 'Personalization'],
      featured: true
    },
    {
      id: 'financial-services-transformation-850-roi',
      title: 'AI 2025 Financial Services Transformation: $2.1B Bank Achieves 850% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-financial-services-transformation-850-roi-success',
      metrics: {
        roi: '850%',
        savings: '$180M annually',
        efficiency: '340%',
        satisfaction: '99.5%'
      },
      readingTime: '16 min read',
      tags: ['Financial Services', 'AI Transformation', 'ROI', 'Case Study'],
      featured: true
    },
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025: The Edge Computing Revolution - Ultimate Guide to 450% ROI',
      type: 'blog',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      metrics: {
        roi: '450%',
        savings: '$2.3M annually',
        efficiency: '67%',
        satisfaction: '99.7%'
      },
      readingTime: '18 min read',
      tags: ['Edge Computing', 'AI', 'ROI', 'Latency'],
      featured: false
    }
  ];

  const filteredContent = contentItems.filter(item => 
    activeFilter === 'all' || item.type === activeFilter
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getROIColor = (roi: string) => {
    const roiValue = parseInt(roi.replace('%', ''));
    if (roiValue >= 1000) return 'text-red-600';
    if (roiValue >= 750) return 'text-orange-600';
    if (roiValue >= 500) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900">Revolutionary AI Content 2025</h2>
            <Star className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI insights, case studies, and implementation guides that are delivering 
            unprecedented ROI for Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">1,200%</div>
                <div className="text-sm text-gray-600">Max ROI Achieved</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <DollarSign className="h-8 w-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">$450M</div>
                <div className="text-sm text-gray-600">Max Annual Savings</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Max Accuracy</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-orange-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Months to ROI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { key: 'all', label: 'All Content', count: contentItems.length },
            { key: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
            { key: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
            { key: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
>>>>>>> origin/cursor/create-and-deploy-new-content-1ade
            </button>
          ))}
        </div>

<<<<<<< HEAD
        {/* Featured Content */}
        {activeCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredContent.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{item.image}</span>
                      <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-purple-700 capitalize">
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-purple-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={item.url}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 text-center block"
                    >
                      Explore Content
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{item.image}</span>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-700 capitalize">
                      {item.type}
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-2 rounded text-center">
                      <div className="text-sm font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block text-sm"
                >
                  Read More
                </Link>
=======
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.toUpperCase()}
                  </div>
                  {item.featured && (
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-xs font-medium text-yellow-600">FEATURED</span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className={`text-xl font-bold ${getROIColor(item.metrics.roi)}`}>
                      {item.metrics.roi}
                    </div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {item.metrics.savings || item.metrics.efficiency}
                    </div>
                    <div className="text-xs text-gray-600">
                      {item.metrics.savings ? 'Savings' : 'Efficiency'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{item.readingTime}</span>
                  </div>
                  <a
                    href={item.url}
                    className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:space-x-2 transition-all"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-1ade
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Success Metrics Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Content Impact Summary</h3>
            <p className="text-lg opacity-90">Comprehensive coverage of AI transformation topics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500%+</div>
              <div className="text-sm opacity-90">Average ROI Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$2.8B+</div>
              <div className="text-sm opacity-90">Total Savings Highlighted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-sm opacity-90">Content Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%+</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get personalized guidance and start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/resources"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all"
            >
              Browse All Resources
            </Link>
=======
        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join 500+ Fortune 500 companies achieving unprecedented ROI with our proven AI strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resources"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore All Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Expert Consultation
              </a>
            </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-1ade
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;