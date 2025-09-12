import React from 'react';
import Link from 'next/link';
import Card from './ui/Card';
import { ArrowRight, Star, TrendingUp, Download, Award, Target, Zap, Users, BarChart3, Lightbulb, Clock, CheckCircle } from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const featuredContent = [
    {
      title: "AI 2026: Enterprise Transformation Mastery",
      description: "The definitive guide to mastering enterprise AI transformation in 2026. Learn from Fortune 500 success stories and implement proven strategies that deliver 300-800% ROI.",
      type: "Blog Post",
      category: "Enterprise AI",
      readTime: "15 min read",
      difficulty: "Advanced",
      rating: 4.9,
      reviews: 127,
      image: "/images/ai-2026-enterprise-mastery.jpg",
      url: "/blog/ai-2026-enterprise-transformation-mastery",
      features: ["4-Phase Framework", "ROI Optimization", "Fortune 500 Insights", "Implementation Guide"],
      isNew: true,
      isTrending: true
    },
    {
      title: "Fortune 500 AI Transformation: 800% ROI Breakthrough",
      description: "Discover how a Fortune 500 manufacturing giant achieved 800% ROI through comprehensive AI transformation, reducing costs by 60% and increasing efficiency by 75%.",
      type: "Case Study",
      category: "Success Stories",
      readTime: "12 min read",
      difficulty: "Intermediate",
      rating: 4.8,
      reviews: 89,
      image: "/images/fortune-500-ai-case-study.jpg",
      url: "/case-studies/ai-2026-fortune-500-transformation-breakthrough",
      features: ["800% ROI", "60% Cost Reduction", "18-Month Journey", "Real Metrics"],
      isNew: true,
      isTrending: true
    },
    {
      title: "AI 2026 Ultimate Implementation Toolkit",
      description: "The most comprehensive AI implementation toolkit for 2026. Includes templates, checklists, frameworks, and step-by-step guides for successful AI transformation.",
      type: "Resource",
      category: "Implementation",
      readTime: "Toolkit",
      difficulty: "All Levels",
      rating: 4.9,
      reviews: 156,
      image: "/images/ai-toolkit-ultimate.jpg",
      url: "/resources/ai-2026-implementation-toolkit-ultimate",
      features: ["25+ Templates", "15+ Checklists", "10+ Frameworks", "500+ Pages"],
      isNew: true,
      isTrending: true
    }
  ];

  const contentCategories = [
    {
      title: "Enterprise AI Mastery",
      description: "Advanced guides for enterprise AI transformation",
      count: 12,
      icon: Target,
      color: "blue",
      url: "/blog/ai-2026-enterprise-transformation-mastery"
    },
    {
      title: "Success Stories",
      description: "Real-world case studies with proven results",
      count: 8,
      icon: Award,
      color: "green",
      url: "/case-studies"
    },
    {
      title: "Implementation Tools",
      description: "Templates, checklists, and frameworks",
      count: 15,
      icon: Download,
      color: "purple",
      url: "/resources"
    },
    {
      title: "ROI Calculators",
      description: "Tools to measure and project AI ROI",
      count: 5,
      icon: BarChart3,
      color: "orange",
      url: "/tools"
    }
  ];

  const stats = [
    { label: "Total Content Pieces", value: "150+", icon: FileText },
    { label: "Average ROI", value: "400%", icon: TrendingUp },
    { label: "Success Stories", value: "50+", icon: Award },
    { label: "Implementation Guides", value: "25+", icon: Target }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="font-semibold">🚀 ULTIMATE 2026 CONTENT COLLECTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for AI Success in 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive library of AI resources, case studies, and implementation tools 
            has helped hundreds of organizations achieve breakthrough results. Get access to 
            proven strategies that deliver 300-800% ROI.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-white border-0 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Featured Content</h3>
            <Link 
              href="/mega-content-showcase-2026"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              View All Content <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">
                        {content.type === "Blog Post" ? "📝" : content.type === "Case Study" ? "📊" : "🛠️"}
                      </div>
                      <div className="text-lg font-semibold">{content.type}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    {content.isNew && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {content.isTrending && (
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        TRENDING
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-semibold">{content.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      {content.category}
                    </span>
                    <span className="text-gray-500 text-sm">{content.readTime}</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{content.difficulty}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {content.reviews} reviews
                    </div>
                    <Link 
                      href={content.url}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Content Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentCategories.map((category, index) => (
              <Link key={index} href={category.url}>
                <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h4>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{category.count}+</div>
                  <div className="text-sm text-gray-500">Resources Available</div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h3>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Join hundreds of organizations that have achieved breakthrough results with our 
            comprehensive AI resources and implementation guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/mega-content-showcase-2026"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Custom Implementation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;