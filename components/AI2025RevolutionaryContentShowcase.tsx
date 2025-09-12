import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Clock, Users, Zap, Brain, Target } from 'lucide-react';

export default function AI2025RevolutionaryContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover the most transformative AI innovations of 2025 that are reshaping industries and creating unprecedented opportunities for growth.",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      type: "Blog Post",
      readTime: "15 min read",
      stats: "2000% ROI",
      icon: "🚀",
      gradient: "from-red-500 to-pink-500",
      badge: "BREAKTHROUGH"
    },
    {
      title: "Global Enterprise Transformation: 2000% ROI",
      description: "How a Fortune 500 company achieved 2000% ROI through revolutionary AI transformation using quantum-neural fusion technology.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      type: "Case Study",
      readTime: "12 min read",
      stats: "2000% ROI",
      icon: "🏆",
      gradient: "from-green-500 to-emerald-500",
      badge: "SUCCESS STORY"
    },
    {
      title: "AI 2025 Comprehensive Trends Analysis",
      description: "Deep dive into the trends shaping AI in 2025 and beyond, with expert insights and future predictions.",
      href: "/blog/ai-2025-comprehensive-trends-analysis",
      type: "Analysis",
      readTime: "20 min read",
      stats: "95% Accuracy",
      icon: "🔮",
      gradient: "from-blue-500 to-purple-500",
      badge: "TRENDS"
    },
    {
      title: "Ultimate Implementation Toolkit 2025",
      description: "Complete guide to implementing AI breakthroughs in your organization with step-by-step instructions and best practices.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      type: "Resource",
      readTime: "30 min read",
      stats: "500+ Deployments",
      icon: "🛠️",
      gradient: "from-purple-500 to-indigo-500",
      badge: "TOOLKIT"
    }
  ];

  const quickStats = [
    { label: "Average ROI", value: "2000%", icon: TrendingUp, color: "text-green-600" },
    { label: "Accuracy Rate", value: "95%", icon: Target, color: "text-blue-600" },
    { label: "Processing Speed", value: "10x Faster", icon: Zap, color: "text-purple-600" },
    { label: "Enterprise Deployments", value: "500+", icon: Users, color: "text-orange-600" }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4 mr-2" />
            REVOLUTIONARY CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most transformative AI innovations of 2025 that are reshaping 
            industries and creating unprecedented opportunities for growth.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${content.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{content.icon}</span>
                      <span className="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {content.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                      {content.title}
                    </h3>
                    <div className="flex items-center text-sm text-white text-opacity-90">
                      <span className="mr-4">{content.type}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{content.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      <span className="font-semibold text-gray-900">{content.stats}</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Discover how our revolutionary AI technology can accelerate your business 
              transformation and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-services-2025"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
              >
                <Brain className="w-5 h-5 mr-2" />
                <span>Explore AI Services</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center group"
              >
                <Users className="w-5 h-5 mr-2" />
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            More Revolutionary Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/ai-2025-ultimate-trends-predictions" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <div className="text-2xl mb-3">🔮</div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI 2025 Ultimate Trends
                </h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive analysis of AI trends and predictions for 2025.
                </p>
              </div>
            </Link>
            <Link href="/case-studies/ai-2025-fortune-500-transformation-breakthrough" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <div className="text-2xl mb-3">🏢</div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Fortune 500 Success (1500% ROI)
                </h4>
                <p className="text-gray-600 text-sm">
                  Another Fortune 500 transformation success story.
                </p>
              </div>
            </Link>
            <Link href="/tools/ai-2025-roi-calculator" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <div className="text-2xl mb-3">🧮</div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI 2025 ROI Calculator
                </h4>
                <p className="text-gray-600 text-sm">
                  Calculate your potential ROI with AI implementation.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}