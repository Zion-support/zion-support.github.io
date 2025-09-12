import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Star, Clock, User, BookOpen, Download } from 'lucide-react';

export default function AI2031ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2031 Future Predictions",
      description: "Comprehensive analysis of AGI emergence, quantum AI integration, and neural interface technologies that will reshape our world by 2031.",
      href: "/blog/ai-2031-future-predictions",
      type: "Blog Post",
      readTime: "15 min",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500"
    },
    {
      title: "AI 2031 Enterprise Transformation",
      description: "Real-world case study showing how a Fortune 500 company achieved 10,000% ROI through AI 2031 technology implementation.",
      href: "/case-studies/ai-2031-enterprise-transformation-breakthrough",
      type: "Case Study",
      readTime: "12 min",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      badge: "10,000% ROI",
      badgeColor: "bg-green-500"
    },
    {
      title: "AI 2031 Implementation Master Guide",
      description: "Complete roadmap for implementing AGI, quantum AI, and neural interfaces in your organization with step-by-step strategies.",
      href: "/resources/ai-2031-implementation-master-guide",
      type: "Implementation Guide",
      readTime: "45 min",
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-500",
      badge: "MASTER GUIDE",
      badgeColor: "bg-blue-500"
    }
  ];

  const additionalContent = [
    {
      title: "Quantum AI Integration Strategies",
      description: "Advanced quantum computing integration for exponential AI performance gains.",
      href: "/resources/quantum-ai-integration-strategies-2031",
      type: "Technical Guide",
      readTime: "20 min",
      icon: Zap,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Neural Interface Business Applications",
      description: "How brain-computer interfaces will transform workforce productivity and human-AI collaboration.",
      href: "/blog/neural-interface-business-applications-2031",
      type: "Analysis",
      readTime: "18 min",
      icon: Target,
      gradient: "from-teal-500 to-green-500"
    },
    {
      title: "AGI Deployment Best Practices",
      description: "Proven methodologies for successfully deploying Artificial General Intelligence in enterprise environments.",
      href: "/resources/agi-deployment-best-practices-2031",
      type: "Best Practices",
      readTime: "25 min",
      icon: Brain,
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-4 py-2 mb-4 text-sm font-semibold">
            <Star className="w-4 h-4 mr-2" />
            AI 2031 CONTENT COLLECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master the Future of
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Artificial Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive resources covering AGI, quantum AI, and neural interfaces. 
            Everything you need to prepare for the AI revolution of 2031.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured AI 2031 Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${content.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${content.gradient} rounded-lg`}>
                      <content.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`${content.badgeColor} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                      {content.badge}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {content.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {content.type}
                    </span>
                  </div>
                  
                  <Link
                    href={content.href}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional AI 2031 Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalContent.map((content, index) => (
              <Link
                key={index}
                href={content.href}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200 hover:border-purple-200"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex items-center justify-center w-10 h-10 bg-gradient-to-r ${content.gradient} rounded-lg flex-shrink-0`}>
                    <content.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {content.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {content.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {content.readTime}
                      </span>
                      <span className="text-purple-600 font-semibold group-hover:gap-1 flex items-center">
                        Read
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI 2031?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get started with our comprehensive AI 2031 implementation package and join the companies 
            already achieving breakthrough results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2031-implementation-master-guide"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Complete Package
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              🚀 Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}