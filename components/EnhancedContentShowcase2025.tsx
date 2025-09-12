import React from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ArrowRight, Star, TrendingUp, Zap, Target, Award, Clock, Users, BarChart3, Lightbulb, Globe, CheckCircle, BookOpen, Play, FileText, Calculator, Eye, Heart, Share2 } from 'lucide-react';

export default function EnhancedContentShowcase2025() {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Comprehensive Trends Analysis",
      description: "Deep dive into the most significant AI trends shaping 2025. From enterprise automation to quantum computing breakthroughs.",
      type: "blog",
      category: "Trends",
      readTime: "15 min",
      views: "12.5k",
      likes: "892",
      url: "/blog/ai-2025-comprehensive-trends-analysis",
      badge: "NEW",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
      icon: TrendingUp,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      featured: true
    },
    {
      id: 2,
      title: "Energy Sector AI Transformation: 2,500% ROI",
      description: "How a leading energy company achieved unprecedented efficiency gains through comprehensive AI transformation.",
      type: "case-study",
      category: "Energy",
      readTime: "12 min",
      views: "8.7k",
      likes: "634",
      url: "/case-studies/ai-2025-energy-sector-transformation-breakthrough",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-green-500/20 text-green-300 border-green-400/30",
      icon: Award,
      iconColor: "text-green-400",
      bgColor: "bg-green-500/10",
      featured: true
    },
    {
      id: 3,
      title: "AI 2025 Comprehensive Implementation Playbook",
      description: "The complete, step-by-step guide to implementing AI in your organization. From strategy to execution.",
      type: "resource",
      category: "Implementation",
      readTime: "45 min",
      views: "15.2k",
      likes: "1.2k",
      url: "/resources/ai-2025-comprehensive-implementation-playbook",
      badge: "ESSENTIAL",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
      icon: Target,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10",
      featured: true
    },
    {
      id: 4,
      title: "Manufacturing AI Breakthrough: 1,800% ROI",
      description: "How a manufacturing giant achieved record efficiency through AI automation and predictive maintenance.",
      type: "case-study",
      category: "Manufacturing",
      readTime: "10 min",
      views: "6.3k",
      likes: "445",
      url: "/case-studies/ai-2025-manufacturing-automation-breakthrough",
      badge: "SUCCESS",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-400/30",
      icon: Zap,
      iconColor: "text-orange-400",
      bgColor: "bg-orange-500/10",
      featured: false
    },
    {
      id: 5,
      title: "AI Security & Governance Framework 2025",
      description: "Complete security framework and governance guidelines to ensure safe and compliant AI implementation.",
      type: "resource",
      category: "Security",
      readTime: "20 min",
      views: "9.1k",
      likes: "567",
      url: "/resources/ai-2025-security-governance-framework",
      badge: "CRITICAL",
      badgeColor: "bg-red-500/20 text-red-300 border-red-400/30",
      icon: Shield,
      iconColor: "text-red-400",
      bgColor: "bg-red-500/10",
      featured: false
    },
    {
      id: 6,
      title: "Healthcare AI Revolution: 1,500% ROI",
      description: "Medical AI breakthrough achieving unprecedented patient outcomes and operational efficiency.",
      type: "case-study",
      category: "Healthcare",
      readTime: "14 min",
      views: "7.8k",
      likes: "523",
      url: "/case-studies/ai-2025-healthcare-diagnostic-revolution",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-pink-500/20 text-pink-300 border-pink-400/30",
      icon: Heart,
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/10",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: 30, active: true },
    { name: "Blog Posts", count: 15, active: false },
    { name: "Case Studies", count: 8, active: false },
    { name: "Resources", count: 7, active: false }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800 border-indigo-200">
            🚀 LATEST CONTENT
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Latest AI Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Stay ahead with cutting-edge AI insights, proven case studies, and comprehensive guides. 
            Our latest content drop includes 30+ new resources to accelerate your AI journey.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">30+</div>
              <div className="text-sm text-gray-600">New Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">2,500%</div>
              <div className="text-sm text-gray-600">Max ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Pages of Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`px-6 py-2 ${category.active ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content) => (
            <Link key={content.id} href={content.url} className="group">
              <Card className={`p-6 hover:shadow-xl transition-all duration-300 group-hover:scale-105 ${content.bgColor} border-0`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${content.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                      <content.icon className={`w-6 h-6 ${content.iconColor}`} />
                    </div>
                    <div>
                      <Badge className={`${content.badgeColor} mb-2`}>
                        {content.badge}
                      </Badge>
                      <div className="text-sm text-gray-600 font-medium">
                        {content.category}
                      </div>
                    </div>
                  </div>
                  {content.featured && (
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {content.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {content.likes}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" className="p-2">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-800">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-sm text-gray-500">
                    {content.type === 'blog' && '📝 Article'}
                    {content.type === 'case-study' && '🏆 Case Study'}
                    {content.type === 'resource' && '📚 Resource'}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg text-indigo-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already using our resources to achieve 
              breakthrough results with AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore All Content
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}