import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Brain, Zap, Globe, BookOpen, Target, DollarSign, Clock } from 'lucide-react';

export default function AI2031ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2031 Future Predictions",
      description: "Comprehensive analysis of AGI emergence, quantum AI integration, and neural interface breakthroughs that will reshape our world.",
      href: "/blog/ai-2031-future-predictions",
      type: "Blog Post",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: Brain,
      metrics: "15 min read",
      featured: true
    },
    {
      title: "AI 2031 Enterprise Transformation: 5000% ROI",
      description: "Real-world Fortune 500 case study showing how companies achieved unprecedented returns through strategic AI 2031 implementation.",
      href: "/case-studies/ai-2031-enterprise-transformation-breakthrough",
      type: "Case Study",
      badge: "5000% ROI",
      badgeColor: "bg-green-500",
      icon: TrendingUp,
      metrics: "12 min read",
      featured: true
    },
    {
      title: "AI 2031 Implementation Master Guide",
      description: "Complete roadmap for implementing AI 2031 technologies with step-by-step strategies, best practices, and proven methodologies.",
      href: "/resources/ai-2031-implementation-master-guide",
      type: "Master Guide",
      badge: "MASTER GUIDE",
      badgeColor: "bg-purple-500",
      icon: BookOpen,
      metrics: "45 min read",
      featured: true
    }
  ];

  const additionalContent = [
    {
      title: "Quantum AI Integration Strategies",
      description: "Advanced techniques for integrating quantum computing with AI systems for exponential performance gains.",
      href: "/resources/quantum-ai-integration-strategies-2031",
      type: "Technical Guide",
      badge: "QUANTUM",
      badgeColor: "bg-indigo-500",
      icon: Zap,
      metrics: "20 min read"
    },
    {
      title: "Neural Interface Implementation Guide",
      description: "Step-by-step guide to deploying brain-computer interfaces for enhanced human-AI collaboration.",
      href: "/resources/neural-interface-implementation-2031",
      type: "Implementation Guide",
      badge: "NEURAL",
      badgeColor: "bg-pink-500",
      icon: Brain,
      metrics: "25 min read"
    },
    {
      title: "AGI Deployment Best Practices",
      description: "Proven methodologies for safely deploying Artificial General Intelligence systems in enterprise environments.",
      href: "/resources/agi-deployment-best-practices-2031",
      type: "Best Practices",
      badge: "AGI",
      badgeColor: "bg-orange-500",
      icon: Target,
      metrics: "30 min read"
    },
    {
      title: "AI 2031 ROI Calculator",
      description: "Interactive tool to calculate potential returns from AI 2031 implementation in your organization.",
      href: "/tools/ai-2031-roi-calculator",
      type: "Tool",
      badge: "CALCULATOR",
      badgeColor: "bg-blue-500",
      icon: DollarSign,
      metrics: "Interactive"
    },
    {
      title: "AI 2031 Security Framework",
      description: "Comprehensive security protocols and frameworks for protecting AI 2031 systems and data.",
      href: "/resources/ai-2031-security-framework",
      type: "Security Guide",
      badge: "SECURITY",
      badgeColor: "bg-red-600",
      icon: Globe,
      metrics: "18 min read"
    },
    {
      title: "AI 2031 Workforce Transformation",
      description: "Strategies for preparing and training your workforce for the AI 2031 revolution.",
      href: "/resources/ai-2031-workforce-transformation",
      type: "HR Guide",
      badge: "WORKFORCE",
      badgeColor: "bg-teal-500",
      icon: Globe,
      metrics: "22 min read"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full px-6 py-3 mb-6 text-sm font-bold shadow-lg">
            <Star className="w-4 h-4 mr-2" />
            🚀 AI 2031 CONTENT COLLECTION - JANUARY 2025
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Most Advanced AI Content
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Ever Created</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Discover our comprehensive collection of AI 2031 resources, featuring breakthrough predictions, 
            real-world case studies, and complete implementation guides. Everything you need to succeed in the AI revolution.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">25+</div>
              <div className="text-sm text-gray-600">Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">5000%</div>
              <div className="text-sm text-gray-600">Max ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">10,000+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">2031</div>
              <div className="text-sm text-gray-600">Future Ready</div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <content.icon className="w-8 h-8 text-purple-600 mr-3" />
                      <span className="text-sm text-gray-500 font-semibold">{content.type}</span>
                    </div>
                    <span className={`${content.badgeColor} text-white text-xs px-3 py-1 rounded-full font-bold`}>
                      {content.badge}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{content.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{content.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.metrics}
                    </div>
                    <Link
                      href={content.href}
                      className="text-purple-600 hover:text-purple-800 font-semibold flex items-center text-sm"
                    >
                      {content.type === "Master Guide" ? "Download" : "Read More"} 
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Resource Library</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((content, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <content.icon className="w-6 h-6 text-gray-600 mr-2" />
                    <span className="text-xs text-gray-500 font-semibold">{content.type}</span>
                  </div>
                  <span className={`${content.badgeColor} text-white text-xs px-2 py-1 rounded-full font-bold`}>
                    {content.badge}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">{content.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{content.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {content.metrics}
                  </div>
                  <Link
                    href={content.href}
                    className="text-purple-600 hover:text-purple-800 font-semibold flex items-center text-sm"
                  >
                    Access <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI 2031?</h3>
          <p className="text-xl mb-8 opacity-90">
            Get instant access to all resources and start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2"
            >
              Get Expert Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}