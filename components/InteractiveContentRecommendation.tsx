import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, TrendingUp, Star, Zap, Brain, Rocket } from 'lucide-react';

export default function InteractiveContentRecommendation() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: 'AI Cognitive Computing Breakthrough 2026',
      category: 'cognitive',
      roi: 'high',
      type: 'article',
      readTime: '35 min',
      metrics: { accuracy: '99.9%', roi: '$15M+' },
      description: 'Revolutionary brain-inspired AI architectures achieving unprecedented accuracy and efficiency.',
      href: '/blog/ai-cognitive-computing-breakthrough-2026',
      icon: Brain,
      color: 'purple'
    },
    {
      id: 2,
      title: 'AI Space Technology Revolution 2026',
      category: 'space',
      roi: 'mega',
      type: 'article',
      readTime: '28 min',
      metrics: { market: '$50B+', autonomous: '99.9%' },
      description: 'Autonomous space operations and $50B+ market opportunities in space AI technology.',
      href: '/blog/ai-space-tech-revolution-2026',
      icon: Rocket,
      color: 'blue'
    },
    {
      id: 3,
      title: 'AI Mega Transformation: $50M ROI Case Study',
      category: 'transformation',
      roi: 'mega',
      type: 'case-study',
      readTime: '22 min',
      metrics: { roi: '$50M', automation: '99.9%' },
      description: 'Fortune 500 company achieves $50M ROI with comprehensive AI transformation.',
      href: '/case-studies/ai-mega-transformation-2026',
      icon: Star,
      color: 'green'
    },
    {
      id: 4,
      title: 'AI Agent Orchestration 2026: Multi-Agent Systems',
      category: 'automation',
      roi: 'high',
      type: 'article',
      readTime: '22 min',
      metrics: { automation: '95%', roi: '$5M+' },
      description: 'Master multi-agent systems with advanced orchestration patterns and enterprise deployment.',
      href: '/blog/ai-agent-orchestration-2026',
      icon: Zap,
      color: 'blue'
    },
    {
      id: 5,
      title: 'AI Autonomous Enterprise 2026: Self-Managing Operations',
      category: 'autonomous',
      roi: 'high',
      type: 'article',
      readTime: '30 min',
      metrics: { efficiency: '95%', savings: '$25M+' },
      description: 'Complete self-managing business operations with zero-touch AI management systems.',
      href: '/blog/ai-autonomous-enterprise-2026',
      icon: TrendingUp,
      color: 'green'
    },
    {
      id: 6,
      title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
      category: 'quantum',
      roi: 'mega',
      type: 'article',
      readTime: '25 min',
      metrics: { speed: '1000x', accuracy: '95%' },
      description: 'Harness quantum computing for AI breakthroughs with revolutionary capabilities.',
      href: '/blog/ai-quantum-computing-2026',
      icon: Brain,
      color: 'purple'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const roiMatch = selectedROI === 'all' || item.roi === selectedROI;
    return categoryMatch && roiMatch;
  });

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'from-purple-500 to-purple-600 border-purple-200 hover:border-purple-300',
      blue: 'from-blue-500 to-blue-600 border-blue-200 hover:border-blue-300',
      green: 'from-green-500 to-green-600 border-green-200 hover:border-green-300'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getROIColor = (roi: string) => {
    const colors = {
      mega: 'bg-gradient-to-r from-yellow-400 to-orange-500',
      high: 'bg-gradient-to-r from-green-500 to-blue-500',
      medium: 'bg-gradient-to-r from-blue-500 to-purple-500'
    };
    return colors[roi as keyof typeof colors] || colors.medium;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">✨</span>
            AI-Powered Content Discovery
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Personalized AI Content Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most relevant AI content tailored to your interests. Our intelligent system analyzes 
            industry trends, ROI potential, and content quality to recommend the best articles and case studies.
          </p>
        </div>

        {/* Interactive Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Filter by Category</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'all', label: 'All Content', count: contentItems.length },
                  { value: 'cognitive', label: 'Cognitive Computing', count: contentItems.filter(item => item.category === 'cognitive').length },
                  { value: 'space', label: 'Space Technology', count: contentItems.filter(item => item.category === 'space').length },
                  { value: 'transformation', label: 'Transformation', count: contentItems.filter(item => item.category === 'transformation').length },
                  { value: 'automation', label: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
                  { value: 'autonomous', label: 'Autonomous Systems', count: contentItems.filter(item => item.category === 'autonomous').length },
                  { value: 'quantum', label: 'Quantum Computing', count: contentItems.filter(item => item.category === 'quantum').length }
                ].map(filter => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedCategory(filter.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === filter.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Filter by ROI Potential</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'all', label: 'All ROI Levels', count: contentItems.length },
                  { value: 'mega', label: 'Mega ROI ($25M+)', count: contentItems.filter(item => item.roi === 'mega').length },
                  { value: 'high', label: 'High ROI ($5M+)', count: contentItems.filter(item => item.roi === 'high').length },
                  { value: 'medium', label: 'Medium ROI ($1M+)', count: contentItems.filter(item => item.roi === 'medium').length }
                ].map(filter => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedROI(filter.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedROI === filter.value
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredContent.map(item => {
            const IconComponent = item.icon;
            const colorClasses = getColorClasses(item.color);
            const roiColor = getROIColor(item.roi);
            
            return (
              <Link key={item.id} href={item.href} className="group">
                <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 ${colorClasses.split(' ')[2]}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className={`${roiColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                        {item.roi === 'mega' ? 'MEGA ROI' : item.roi === 'high' ? 'HIGH ROI' : 'MEDIUM ROI'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 font-medium capitalize">
                      {item.type === 'case-study' ? '📊 Case Study' : '📝 Article'}
                    </span>
                    <span className="text-sm text-gray-500">{item.readTime} read</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex gap-4 mb-4">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      {item.type === 'case-study' ? 'View Case Study' : 'Read Article'} →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Results Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Showing {filteredContent.length} of {contentItems.length} Content Items
          </h3>
          <p className="text-gray-600 mb-6">
            {filteredContent.length > 0 
              ? `Found ${filteredContent.length} ${selectedCategory === 'all' ? '' : 'category-specific'} content items with ${selectedROI === 'all' ? 'all ROI levels' : selectedROI + ' ROI potential'}.`
              : 'No content matches your current filters. Try adjusting your selection.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              href="/case-studies"
              className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Star className="w-5 h-5 mr-2" />
              View All Case Studies
            </Link>
          </div>
        </div>

        {/* Trending Topics */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Trending AI Topics</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { tag: '#CognitiveComputing2026', color: 'bg-purple-100 text-purple-800' },
              { tag: '#SpaceTechRevolution', color: 'bg-blue-100 text-blue-800' },
              { tag: '#MegaTransformation', color: 'bg-green-100 text-green-800' },
              { tag: '#50MillionROI', color: 'bg-yellow-100 text-yellow-800' },
              { tag: '#AutonomousEnterprise', color: 'bg-indigo-100 text-indigo-800' },
              { tag: '#QuantumAI', color: 'bg-pink-100 text-pink-800' }
            ].map(topic => (
              <span
                key={topic.tag}
                className={`${topic.color} px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer`}
              >
                {topic.tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}