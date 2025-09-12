import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Rocket, Target, CheckCircle, Clock, Users, Award, BookOpen } from 'lucide-react';

const AI2025RevolutionaryContentShowcase: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover the most transformative AI technologies of 2025 that are revolutionizing industries with unprecedented ROI and breakthrough capabilities.",
      type: "Blog Post",
      category: "Breakthrough Technology",
      readTime: "15 min read",
      views: "125K+",
      rating: 4.9,
      roi: "2000%+",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      image: "/images/ai-2025-breakthroughs.jpg",
      badges: ["BREAKTHROUGH", "NEW", "ESSENTIAL"],
      highlights: [
        "Quantum-AI Fusion Technology",
        "Neural Interface Breakthroughs", 
        "Autonomous AI Systems",
        "2000%+ ROI Case Studies"
      ]
    },
    {
      id: 2,
      title: "Global Enterprise Transformation: 2000% ROI Success",
      description: "How a Fortune 500 manufacturing company achieved 2000% ROI through revolutionary AI transformation in just 18 months.",
      type: "Case Study",
      category: "Enterprise Success",
      readTime: "12 min read",
      views: "98K+",
      rating: 4.8,
      roi: "2000%",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      image: "/images/enterprise-transformation.jpg",
      badges: ["BREAKTHROUGH SUCCESS", "FORTUNE 500", "HIGH ROI"],
      highlights: [
        "Fortune 500 Manufacturing",
        "18-Month Implementation",
        "$2.4B Revenue Increase",
        "85% Cost Reduction"
      ]
    },
    {
      id: 3,
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "The most comprehensive guide to AI implementation in 2025. Achieve 2000% ROI with proven frameworks, templates, and step-by-step strategies.",
      type: "Resource Guide",
      category: "Implementation",
      readTime: "45 min read",
      views: "156K+",
      rating: 4.9,
      roi: "2000%+",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      image: "/images/ai-toolkit-2025.jpg",
      badges: ["ESSENTIAL TOOLKIT", "50K+ DOWNLOADS", "UPDATED DAILY"],
      highlights: [
        "47 Implementation Templates",
        "23 ROI Calculators",
        "156 Best Practice Guides",
        "12 Industry Frameworks"
      ]
    }
  ];

  const quickStats = [
    { label: "Total Content", value: "500+", icon: Brain },
    { label: "Success Stories", value: "150+", icon: Star },
    { label: "Average ROI", value: "2000%", icon: TrendingUp },
    { label: "Active Users", value: "50K+", icon: Users }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              REVOLUTIONARY CONTENT
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              BREAKTHROUGH 2025
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Content Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most transformative AI content of 2025. Breakthrough technologies, 
            success stories, and implementation guides that deliver unprecedented ROI.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {content.badges.map((badge, index) => (
                    <span 
                      key={index}
                      className={`px-2 py-1 text-xs font-bold rounded-full ${
                        index === 0 ? 'bg-red-500 text-white' :
                        index === 1 ? 'bg-yellow-500 text-black' :
                        'bg-green-500 text-white'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-semibold">{content.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                    {content.type}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-semibold rounded-full">
                    {content.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <div className="space-y-1">
                    {content.highlights.slice(0, 2).map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{content.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{content.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span>{content.roi} ROI</span>
                  </div>
                </div>

                {/* CTA */}
                <Link 
                  href={content.href}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all group"
                >
                  <span>Explore Content</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI 2025?
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Join thousands of companies achieving 2000%+ ROI with our revolutionary AI solutions and implementation guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources/ai-2025-ultimate-implementation-toolkit"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Get Implementation Toolkit
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2"
              >
                <Target className="w-5 h-5" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025RevolutionaryContentShowcase;