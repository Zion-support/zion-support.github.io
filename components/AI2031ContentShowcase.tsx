import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Globe, TrendingUp, Star, BookOpen, BarChart3, Users, Clock } from 'lucide-react';

export default function AI2031ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2031 Future Predictions",
      description: "Comprehensive analysis of revolutionary AI technologies that will reshape our world by 2031.",
      href: "/blog/ai-2031-future-predictions",
      type: "Blog Post",
      icon: Brain,
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      stats: "15 min read",
      featured: true
    },
    {
      title: "AI 2031 Enterprise Transformation",
      description: "Real case study of Fortune 500 companies achieving 10,000% ROI through AI 2031 technologies.",
      href: "/case-studies/ai-2031-enterprise-transformation-breakthrough",
      type: "Case Study",
      icon: TrendingUp,
      badge: "10,000% ROI",
      badgeColor: "bg-green-500",
      stats: "12 min read",
      featured: true
    },
    {
      title: "AI 2031 Implementation Master Guide",
      description: "Complete roadmap to implementing AI 2031 technologies for unprecedented business transformation.",
      href: "/resources/ai-2031-implementation-master-guide",
      type: "Implementation Guide",
      icon: BookOpen,
      badge: "MASTER GUIDE",
      badgeColor: "bg-yellow-500",
      stats: "45 min read",
      featured: true
    }
  ];

  const additionalContent = [
    {
      title: "Quantum AI Integration Strategies",
      description: "How to integrate quantum computing with AI systems for exponential performance gains.",
      href: "/resources/quantum-ai-integration-strategies",
      type: "Resource",
      icon: Zap,
      badge: "NEW",
      badgeColor: "bg-blue-500",
      stats: "20 min read"
    },
    {
      title: "Neural Interface Business Applications",
      description: "Practical applications of brain-computer interfaces in enterprise environments.",
      href: "/resources/neural-interface-business-applications",
      type: "Resource",
      icon: Globe,
      badge: "BREAKTHROUGH",
      badgeColor: "bg-purple-500",
      stats: "18 min read"
    },
    {
      title: "AGI System Deployment Guide",
      description: "Step-by-step guide to deploying Artificial General Intelligence systems in your organization.",
      href: "/resources/agi-system-deployment-guide",
      type: "Deployment Guide",
      icon: Brain,
      badge: "ESSENTIAL",
      badgeColor: "bg-indigo-500",
      stats: "25 min read"
    },
    {
      title: "AI 2031 ROI Calculator",
      description: "Calculate your potential return on investment with AI 2031 technology implementation.",
      href: "/tools/ai-2031-roi-calculator",
      type: "Tool",
      icon: BarChart3,
      badge: "FREE",
      badgeColor: "bg-green-500",
      stats: "Interactive"
    },
    {
      title: "Fortune 500 AI 2031 Success Stories",
      description: "Detailed case studies of how major corporations achieved breakthrough results with AI 2031.",
      href: "/case-studies/fortune-500-ai-2031-success-stories",
      type: "Case Studies",
      icon: Users,
      badge: "EXCLUSIVE",
      badgeColor: "bg-orange-500",
      stats: "30 min read"
    },
    {
      title: "AI 2031 Technology Timeline",
      description: "Comprehensive timeline of AI 2031 technology development and deployment milestones.",
      href: "/resources/ai-2031-technology-timeline",
      type: "Timeline",
      icon: Clock,
      badge: "UPDATED",
      badgeColor: "bg-teal-500",
      stats: "10 min read"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6 text-sm font-bold">
            <Star className="w-4 h-4 mr-2" />
            🚀 AI 2031 CONTENT SHOWCASE
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover the Future of 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Artificial Intelligence</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of AI 2031 resources, case studies, and implementation guides. 
            Everything you need to prepare for the next decade of AI transformation.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ⭐ Featured Content
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-3">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">{item.type}</div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {item.stats}
                        </div>
                      </div>
                    </div>
                    <span className={`${item.badgeColor} text-white text-xs px-3 py-1 rounded-full font-bold`}>
                      {item.badge}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            📚 Complete AI 2031 Resource Library
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:border-purple-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gray-100 text-gray-700 rounded-lg p-2 flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-600">{item.type}</span>
                        <span className={`${item.badgeColor} text-white text-xs px-2 py-1 rounded-full font-bold`}>
                          {item.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        {item.stats}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-purple-600 font-semibold hover:text-purple-700 transition-colors text-sm"
                  >
                    Explore
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            🚀 Ready to Transform Your Business with AI 2031?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Get started with our comprehensive AI 2031 implementation guide and expert consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2031-implementation-master-guide"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg flex items-center gap-2 mx-auto"
            >
              <BookOpen className="w-5 h-5" />
              Download Master Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              💬 Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}