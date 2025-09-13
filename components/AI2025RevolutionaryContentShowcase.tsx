import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Rocket, Target, CheckCircle, BarChart3, Users, DollarSign, Award, BookOpen, Clock } from 'lucide-react';

export default function AI2025RevolutionaryContentShowcase() {
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
      title: "AI 2025 Revolutionary Breakthrough Announcement",
      description: "Discover the most significant AI breakthrough of 2025 that is transforming industries worldwide with unprecedented results.",
      href: "/blog/ai-2025-revolutionary-breakthrough-announcement",
      type: "Blog Post",
      icon: Zap,
      badge: "BREAKTHROUGH",
      badgeColor: "from-red-500 to-pink-500",
      stats: "2000%+ ROI",
      readTime: "8 min read"
    },
    {
      title: "Revolutionary Breakthrough Success Stories",
      description: "Real case studies showing how enterprises achieved 2000%+ ROI and transformed their operations with our AI breakthrough.",
      href: "/case-studies/ai-2025-revolutionary-breakthrough-success",
      type: "Case Study",
      icon: Award,
      badge: "SUCCESS STORY",
      badgeColor: "from-green-500 to-emerald-500",
      stats: "500+ Clients",
      readTime: "12 min read"
    },
    {
      title: "Revolutionary Implementation Guide",
      description: "Complete step-by-step guide to implementing our AI breakthrough and achieving unprecedented results in your organization.",
      href: "/resources/ai-2025-revolutionary-implementation-guide",
      type: "Resource",
      icon: BookOpen,
      badge: "IMPLEMENTATION",
      badgeColor: "from-blue-500 to-purple-500",
      stats: "4-12 Weeks",
      readTime: "15 min read"
    }
  ];

  const additionalContent = [
    {
      title: "AI 2025 Comprehensive Trends Analysis",
      description: "Deep dive into AI trends and predictions for 2025",
      href: "/blog/ai-2025-comprehensive-trends-analysis",
      type: "Blog Post",
      stats: "NEW"
    },
    {
      title: "Global Enterprise Transformation Success",
      description: "How Fortune 500 companies achieved breakthrough results",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      type: "Case Study",
      stats: "1200% ROI"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete toolkit for AI implementation success",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      type: "Resource",
      stats: "ESSENTIAL"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            REVOLUTIONARY BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most significant AI breakthrough of 2025. Explore our comprehensive 
            content library featuring real success stories, implementation guides, and industry insights.
          </p>
        </div>

        {/* Featured Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((item, index) => (
            <div key={index} className="group">
              <Link href={item.href} className="block">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-500">{item.type}</span>
                      </div>
                      <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        <Star className="w-3 h-3" />
                        {item.badge}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {item.stats}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-500">{item.type}</span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {item.stats}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join hundreds of enterprises already benefiting from our revolutionary AI breakthrough.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Get Started Today
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthrough"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2000%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">99.7%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Enterprise Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">10x</div>
            <div className="text-gray-600">Faster Processing</div>
          </div>
        </div>
      </div>
    </div>
  );
}