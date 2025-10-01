import React from 'react';
import { Shield, Sparkles, CheckCircle2, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const October2025NewContentAIEthicsShowcase = () => {
  const contentItems = [
    {
      type: "Comprehensive Guide",
      icon: Shield,
      title: "Enterprise AI Ethics & Governance Framework 2025",
      description: "Complete 7-pillar framework for implementing ethical AI at scale. Proven at 240+ Fortune 500 companies.",
      link: "/blog/ai-2025-oct-01-generative-ai-ethics-governance-framework",
      color: "from-purple-500 to-indigo-600",
      badge: "18 MIN READ",
      highlights: [
        "99.8% compliance achievement",
        "$247M avg. savings in fines",
        "2.8x faster deployments",
        "Complete tech stack"
      ]
    },
    {
      type: "Case Study",
      icon: TrendingUp,
      title: "Fortune 50 Retail: $8.7B AI Ethics Success",
      description: "How a global retailer transformed 12,847 AI models to achieve industry-leading ethics compliance and massive ROI.",
      link: "/case-studies/ai-2025-oct-01-global-retail-ai-ethics-governance-8-7-billion-success",
      color: "from-emerald-500 to-green-600",
      badge: "SUCCESS STORY",
      highlights: [
        "$8.7B total value",
        "18,400% ROI in 24 months",
        "12,847 models transformed",
        "Zero compliance violations"
      ]
    },
    {
      type: "Quick Start Guide",
      icon: Sparkles,
      title: "30-Day AI Ethics Implementation Guide",
      description: "Practical, step-by-step guide to implementing enterprise AI ethics. From zero to operational in 30 days.",
      link: "/guides/ai-ethics-implementation-quick-start-guide-2025",
      color: "from-blue-500 to-cyan-600",
      badge: "ACTIONABLE",
      highlights: [
        "Week-by-week roadmap",
        "Free tools & templates",
        "Real-world examples",
        "Zero to operational"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 animate-pulse">
            <Star className="w-5 h-5 text-slate-900" />
            <span className="font-black text-slate-900 text-sm">
              BREAKTHROUGH CONTENT - OCTOBER 1, 2025
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              AI Ethics & Governance
            </span>
            <br />
            <span className="text-white">Complete Resource Library</span>
          </h2>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
            Everything you need to transform AI ethics from compliance burden to competitive advantage. 
            Proven frameworks, real success stories, and actionable implementation guides.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-400">
              <span className="text-2xl font-black text-green-400">$8.7B</span>
              <span className="text-sm text-purple-200 ml-2">Value Proven</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-blue-400">
              <span className="text-2xl font-black text-blue-400">18,400%</span>
              <span className="text-sm text-purple-200 ml-2">ROI Achieved</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-yellow-400">
              <span className="text-2xl font-black text-yellow-400">30 Days</span>
              <span className="text-sm text-purple-200 ml-2">To Operational</span>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.link}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-2 border-purple-500/30 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-xs font-bold">
                  {item.badge}
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-2xl mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Type */}
                <div className="text-purple-400 font-bold text-sm mb-2 uppercase tracking-wider">
                  {item.type}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black mb-4 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-purple-200 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-purple-100">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-yellow-400 font-bold group-hover:gap-4 transition-all">
                  <span>Explore Now</span>
                  <ArrowRight className="w-5 h-5" />
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
              </Link>
            );
          })}
        </div>

        {/* Why This Matters */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-10 border-2 border-yellow-400 mb-12">
          <h3 className="text-3xl font-black text-center mb-8">
            Why AI Ethics Is Your <span className="text-yellow-300">Competitive Advantage</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl">📈</span>
                Business Impact
              </h4>
              <ul className="space-y-3 text-purple-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>4,780% average ROI</strong> on ethics investments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>$247M average savings</strong> in avoided regulatory fines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>34% increase</strong> in customer lifetime value</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>2.8x faster</strong> AI deployment cycles</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                Risk Mitigation
              </h4>
              <ul className="space-y-3 text-purple-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span><strong>99.8% compliance</strong> across all AI systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span><strong>94% reduction</strong> in bias-related incidents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Zero critical failures</strong> in production</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Industry leadership</strong> positioning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-black mb-6">
            Ready to Lead in <span className="text-yellow-400">AI Ethics</span>?
          </h3>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Join 240+ Fortune 500 companies that have transformed AI ethics into competitive advantage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/guides/ai-ethics-implementation-quick-start-guide-2025"
              className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-xl font-black text-lg hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-6 h-6" />
              <span>Start Your 30-Day Journey</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Expert Assessment</span>
            </Link>
          </div>
          <p className="text-sm text-purple-300 mt-6 font-semibold">
            ⚡ Limited to 20 new engagements in Q4 2025 • Act now
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentAIEthicsShowcase;
