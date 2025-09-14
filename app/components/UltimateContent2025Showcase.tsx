'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, CheckCircle, Award, Clock, ArrowRight, Zap, Star, Users, DollarSign } from 'lucide-react';

<<<<<<< HEAD
const UltimateContent2025Showcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
=======
interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  roi: string;
  savings: string;
  readingTime: string;
  featured: boolean;
  description: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
    accuracy: string;
  };
}

const UltimateContent2025Showcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4

  const featuredContent = [
    {
<<<<<<< HEAD
      id: 'ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      description: 'Master enterprise automation with AI in 2025. Achieve 1,200% ROI, $500M+ savings, and 99.8% efficiency with our proven framework.',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%',
        success_rate: '98%'
      },
      reading_time: '35 min read',
      featured: true,
      is_new: true
    },
    {
      id: 'fortune-500-ai-success-2025',
      title: 'Fortune 500 AI Success 2025: $2.8B Annual Savings',
      type: 'case-study',
      description: 'How a Fortune 500 manufacturing company achieved $2.8B annual savings and 1,500% ROI through comprehensive AI transformation in just 8 months.',
      url: '/case-studies/fortune-500-ai-success-2025',
      metrics: {
        annual_savings: '$2.8B',
        roi: '1,500%',
        implementation_time: '8 months',
        efficiency_gains: '89%'
      },
      reading_time: '20 min read',
      featured: true,
      is_new: true
    },
    {
      id: 'ai-roi-guide-2025',
      title: 'AI ROI Guide 2025: Achieve 1,200% ROI',
      type: 'resource',
      description: 'Complete guide to achieving 1,200% ROI with AI implementation in 2025. Proven framework for enterprise success.',
      url: '/resources/ai-roi-guide-2025',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%'
      },
      reading_time: '15 min read',
      featured: true,
      is_new: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
=======
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide to 1,500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      roi: '1,500%',
      savings: '$8.2B',
      readingTime: '25 min read',
      featured: true,
      description: 'Transform your enterprise with cutting-edge AI solutions that deliver unprecedented returns on investment through strategic implementation.',
      metrics: {
        roi: '1,500%',
        savings: '$8.2B',
        efficiency: '450%',
        accuracy: '99.7%'
      }
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $4.2B Company Achieves 1,500% ROI with Revolutionary AI Implementation',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1500-roi-ultimate-success-2025',
      roi: '1,500%',
      savings: '$89M',
      readingTime: '22 min read',
      featured: true,
      description: 'How a global manufacturing leader transformed operations and achieved unprecedented returns through strategic AI deployment.',
      metrics: {
        roi: '1,500%',
        savings: '$89M',
        efficiency: '450%',
        accuracy: '99.8%'
      }
    },
    {
      id: 'autonomous-systems',
      title: 'AI 2025: The Autonomous Business Systems Revolution - Ultimate Guide to 2,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-business-systems-revolution-ultimate-guide',
      roi: '2,000%',
      savings: '$12.8B',
      readingTime: '30 min read',
      featured: true,
      description: 'Transform your enterprise with fully autonomous AI systems that deliver unprecedented returns and operational excellence.',
      metrics: {
        roi: '2,000%',
        savings: '$12.8B',
        efficiency: '600%',
        accuracy: '99.9%'
      }
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 1,500% ROI in 18 Months',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-roadmap-2025-comprehensive-1500-roi',
      roi: '1,500%',
      savings: '$8.2B',
      readingTime: '35 min read',
      featured: true,
      description: 'The comprehensive guide to achieving unprecedented returns through strategic AI implementation with proven frameworks.',
      metrics: {
        roi: '1,500%',
        savings: '$8.2B',
        efficiency: '400%',
        accuracy: '95%'
      }
    }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className="w-5 h-5" />;
      case 'case-study':
        return <CheckCircle className="w-5 h-5" />;
      case 'resource':
        return <Award className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
    }
  }, []);

<<<<<<< HEAD
  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
=======
  const getTypeGradient = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-blue-600';
      case 'case-study':
        return 'from-green-500 to-green-600';
      case 'resource':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            <span>ULTIMATE CONTENT 2025 REVOLUTION</span>
          </div>
<<<<<<< HEAD
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ultimate AI Success Content 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the latest AI transformation strategies, success stories, and implementation guides that are delivering extraordinary results for enterprises worldwide.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Details */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="text-sm opacity-75">
                  {currentContent.reading_time}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm opacity-75 capitalize">
                      {key.replace('_', ' ')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 text-center"
                >
                  Read Full Content
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🤖</div>
                <div className="text-3xl font-bold mb-2">AI 2025</div>
                <div className="text-lg opacity-90 mb-4">Ultimate Success</div>
                <div className="text-4xl font-bold text-yellow-400">
                  {currentContent.metrics.roi}
                </div>
                <div className="text-sm opacity-75">ROI Achieved</div>
              </div>
=======
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Unprecedented Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the proven strategies and frameworks that have generated <strong>$8.2 billion in savings</strong> 
            and achieved <strong>1,500%+ ROI</strong> across 500+ successful enterprise implementations.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1,500%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-white" />
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">$8.2B+</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">99.7%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Content Navigation */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
=======
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { key: 'all', label: 'All Content', count: contentItems.length },
            { key: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
            { key: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
            { key: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300 hover:text-purple-600'
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{item.metrics.efficiency}</div>
                    <div className="text-sm text-gray-600">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{item.metrics.accuracy}</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className={`w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${getTypeGradient(item.type)} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 group`}
                >
                  <span>Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-opacity-20 ${
                index === currentSlide ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  NEW
                </span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  {content.type.toUpperCase()}
                </span>
              </div>
              
              <h4 className="font-bold mb-2 line-clamp-2">
                {content.title}
              </h4>
              
              <div className="text-sm opacity-75 mb-3">
                {content.reading_time}
              </div>
              
              <div className="text-lg font-bold text-yellow-400">
                {content.metrics.roi} ROI
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
<<<<<<< HEAD
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join 500+ enterprises that have already transformed their operations with our AI solutions.
=======
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join 500+ companies that have achieved unprecedented success with our proven AI strategies.
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
<<<<<<< HEAD
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-400 hover:to-blue-500 transition-all duration-300"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Explore Services
=======
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Resources
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors duration-300"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
      </div>
    </section>
  );
};

export default UltimateContent2025Showcase;