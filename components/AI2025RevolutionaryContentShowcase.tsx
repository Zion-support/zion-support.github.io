import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Rocket, Target, CheckCircle, BarChart3, Users, DollarSign } from 'lucide-react';

const AI2025RevolutionaryContentShowcase: React.FC = () => {
  const featuredContent = [
    {
      id: 'ai-2025-breakthroughs',
      title: 'AI 2025 Revolutionary Breakthroughs',
      description: 'Discover the most revolutionary AI breakthroughs of 2025 that are transforming industries worldwide.',
      type: 'Blog Post',
      readTime: '15 min read',
      metrics: {
        roi: '2000%',
        accuracy: '99.7%',
        efficiency: '15,000%'
      },
      href: '/blog/ai-2025-revolutionary-breakthroughs',
      featured: true,
      tags: ['AI 2025', 'Breakthroughs', 'Technology', 'Innovation']
    },
    {
      id: 'enterprise-transformation',
      title: 'Global Enterprise Transformation: 2000% ROI Success',
      description: 'How a Fortune 500 company achieved unprecedented results through comprehensive AI implementation.',
      type: 'Case Study',
      readTime: '12 min read',
      metrics: {
        roi: '2000%',
        revenue: '$2.4B',
        savings: '$1.8B'
      },
      href: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
      featured: true,
      tags: ['Enterprise', 'ROI', 'Success Story', 'Transformation']
    },
    {
      id: 'quantum-ai-systems',
      title: 'Quantum-Enhanced AI Systems',
      description: 'Explore how quantum computing is revolutionizing AI processing capabilities and solving complex problems.',
      type: 'Technical Guide',
      readTime: '20 min read',
      metrics: {
        speed: '1000x',
        accuracy: '99.9%',
        efficiency: '15,000%'
      },
      href: '/blog/ai-2025-quantum-enhanced-systems',
      featured: false,
      tags: ['Quantum AI', 'Computing', 'Advanced Technology']
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Breakthroughs',
      description: 'Direct brain-computer interfaces achieving 95% accuracy in healthcare and accessibility applications.',
      type: 'Research Report',
      readTime: '18 min read',
      metrics: {
        accuracy: '95%',
        roi: '3000%',
        success: '99.7%'
      },
      href: '/blog/ai-2025-neural-interface-breakthroughs',
      featured: false,
      tags: ['Neural Interfaces', 'Healthcare', 'Accessibility']
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Systems Revolution',
      description: 'Human-level decision-making capabilities in autonomous systems with unprecedented reliability.',
      type: 'Industry Analysis',
      readTime: '16 min read',
      metrics: {
        reliability: '99.7%',
        roi: '8500%',
        efficiency: '5000%'
      },
      href: '/blog/ai-2025-autonomous-systems-revolution',
      featured: false,
      tags: ['Autonomous Systems', 'Manufacturing', 'Automation']
    },
    {
      id: 'multimodal-ai',
      title: 'Multimodal AI Mastery',
      description: 'AI systems processing multiple data types simultaneously with 99.9% accuracy.',
      type: 'Technical Deep Dive',
      readTime: '22 min read',
      metrics: {
        accuracy: '99.9%',
        processing: 'Real-time',
        efficiency: '2000%'
      },
      href: '/blog/ai-2025-multimodal-ai-mastery',
      featured: false,
      tags: ['Multimodal AI', 'Computer Vision', 'NLP']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Blog Post':
        return 'bg-blue-100 text-blue-800';
      case 'Case Study':
        return 'bg-green-100 text-green-800';
      case 'Technical Guide':
        return 'bg-purple-100 text-purple-800';
      case 'Research Report':
        return 'bg-orange-100 text-orange-800';
      case 'Industry Analysis':
        return 'bg-indigo-100 text-indigo-800';
      case 'Technical Deep Dive':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case 'roi':
        return <TrendingUp className="w-4 h-4" />;
      case 'accuracy':
        return <Target className="w-4 h-4" />;
      case 'efficiency':
        return <Zap className="w-4 h-4" />;
      case 'speed':
        return <Rocket className="w-4 h-4" />;
      case 'revenue':
        return <DollarSign className="w-4 h-4" />;
      case 'savings':
        return <BarChart3 className="w-4 h-4" />;
      case 'success':
        return <CheckCircle className="w-4 h-4" />;
      case 'reliability':
        return <Star className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            REVOLUTIONARY CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Breakthroughs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Content Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI 2025 breakthrough content, featuring 
            revolutionary technologies, success stories, and implementation guides that are 
            transforming industries worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                content.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {content.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    FEATURED
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Content Type */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(content.type)}`}>
                    {content.type}
                  </span>
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        {getMetricIcon(key)}
                      </div>
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={content.href}
                  className="inline-flex items-center gap-2 w-full justify-center bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group-hover:bg-blue-700"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already achieving breakthrough results with our 
            proven AI implementation methodology and revolutionary technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ai-implementation-guide-2025"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              <Brain className="w-5 h-5" />
              Get Implementation Guide
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              <Users className="w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2000%</div>
              <div className="text-blue-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.7%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">47</div>
              <div className="text-blue-100">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025RevolutionaryContentShowcase;