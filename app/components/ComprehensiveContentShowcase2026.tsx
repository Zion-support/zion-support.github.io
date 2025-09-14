import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Users, TrendingUp, Award, FileText, BarChart3, Target, Zap } from 'lucide-react';

const ComprehensiveContentShowcase2026 = () => {
  const contentItems = [
    {
      id: 'enterprise-automation-breakthrough',
      type: 'blog',
      title: 'AI 2026: Enterprise Automation Breakthrough - 400% ROI in 90 Days',
      excerpt: 'Discover how Fortune 500 companies are achieving unprecedented 400% ROI through next-generation AI automation systems.',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation'],
      readTime: '12 min read',
      publishDate: '2025-01-17',
      featured: true,
      metrics: {
        roi: '400%',
        timeframe: '90 days',
        companies: '500+',
        savings: '$50M+'
      }
    },
    {
      id: 'fortune-500-transformation',
      type: 'case-study',
      title: 'Fortune 500 AI Transformation: $50M Annual Savings in 6 Months',
      excerpt: 'How a Fortune 500 manufacturing company achieved $50M in annual savings through comprehensive AI transformation.',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Cost Savings'],
      readTime: '15 min read',
      publishDate: '2025-01-17',
      featured: true,
      metrics: {
        savings: '$50M',
        timeframe: '6 months',
        roi: '300%',
        employees: '50,000+'
      }
    },
    {
      id: 'ai-implementation-master-guide',
      type: 'resource',
      title: 'AI Implementation Master Guide 2026: From Strategy to 400% ROI',
      excerpt: 'The definitive guide to AI implementation in 2026. Step-by-step framework, proven strategies, and real-world examples.',
      url: '/resources/ai-implementation-master-guide-2026',
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
      readTime: '45 min read',
      publishDate: '2025-01-17',
      featured: true,
      metrics: {
        pages: '100+',
        steps: '200+',
        examples: '50+',
        frameworks: '10+'
      }
    },
    {
      id: 'autonomous-systems-revolution',
      type: 'blog',
      title: 'AI 2025: The Next Generation Autonomous Systems Revolution',
      excerpt: 'Explore the revolutionary autonomous systems that are transforming industries and delivering unprecedented business value.',
      url: '/blog/ai-2025-next-generation-autonomous-systems-revolution',
      tags: ['AI', 'Autonomous Systems', 'Business Transformation', 'ROI'],
      readTime: '10 min read',
      publishDate: '2025-01-17',
      featured: false,
      metrics: {
        efficiency: '500%',
        accuracy: '99%',
        cost: '60%',
        time: '80%'
      }
    },
    {
      id: 'global-enterprise-success',
      type: 'case-study',
      title: 'Global Enterprise AI Transformation: $2.8B Ultimate Success Story',
      excerpt: 'A comprehensive case study of how a global enterprise achieved $2.8B in value through strategic AI implementation.',
      url: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success',
      tags: ['Case Study', 'AI Transformation', 'Enterprise', 'Success Story'],
      readTime: '18 min read',
      publishDate: '2025-01-17',
      featured: false,
      metrics: {
        value: '$2.8B',
        timeframe: '18 months',
        roi: '450%',
        regions: '40+'
      }
    },
    {
      id: 'autonomous-systems-guide',
      type: 'resource',
      title: 'AI 2025 Autonomous Systems Implementation Master Guide',
      excerpt: 'Complete implementation guide for autonomous systems with proven frameworks and real-world success stories.',
      url: '/resources/ai-2025-autonomous-systems-implementation-master-guide',
      tags: ['Implementation Guide', 'AI', 'Best Practices', 'ROI'],
      readTime: '35 min read',
      publishDate: '2025-01-17',
      featured: false,
      metrics: {
        chapters: '15+',
        checklists: '25+',
        templates: '10+',
        examples: '30+'
      }
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <FileText className="w-5 h-5" />;
      case 'case-study':
        return <BarChart3 className="w-5 h-5" />;
      case 'resource':
        return <Target className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'text-blue-600 bg-blue-100';
      case 'case-study':
        return 'text-green-600 bg-green-100';
      case 'resource':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            BREAKTHROUGH CONTENT 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="block text-blue-600">That Delivers Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the strategies, case studies, and implementation guides that are helping organizations achieve 400% ROI in 90 days.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {contentItems.filter(item => item.featured).map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={item.url}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="ml-1 capitalize">{item.type.replace('-', ' ')}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.readTime}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Key Metric */}
                  <div className="mb-4">
                    <div className="text-lg font-bold text-blue-600">
                      {Object.entries(item.metrics)[0][1]}
                    </div>
                    <div className="text-xs text-gray-500 capitalize">
                      {Object.entries(item.metrics)[0][0].replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>

                  <Link 
                    href={item.url}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across Industries</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our content is based on real implementations and proven methodologies that deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">400%</div>
              <div className="text-blue-100 text-sm font-medium">Average ROI</div>
              <div className="text-blue-200 text-xs">Within 90 days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">$100M+</div>
              <div className="text-blue-100 text-sm font-medium">Total Savings</div>
              <div className="text-blue-200 text-xs">Across all clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">95%</div>
              <div className="text-blue-100 text-sm font-medium">Success Rate</div>
              <div className="text-blue-200 text-xs">Following our guides</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">500+</div>
              <div className="text-blue-100 text-sm font-medium">Projects</div>
              <div className="text-blue-200 text-xs">Successfully delivered</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get started with our proven AI implementation framework and join the companies achieving 400% ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get Expert Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/resources"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveContentShowcase2026;