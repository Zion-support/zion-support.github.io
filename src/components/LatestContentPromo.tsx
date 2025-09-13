import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Award, Brain, Target, Zap } from 'lucide-react';

export const LatestContentPromo: React.FC = () => {
  const featuredContent = [
    {
      title: "AI 2026 Breakthroughs",
      description: "Quantum-enhanced neural networks and autonomous AI ecosystems revolutionizing industries",
      url: "/blog/ai-2026-revolutionary-breakthroughs-future",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-emerald-500 to-blue-500",
      badge: "Latest Research",
      stats: "10,000x faster processing"
    },
    {
      title: "Enterprise Success Story",
      description: "Fortune 500 transformation achieving $2.3B revenue impact and 500% ROI",
      url: "/case-studies/ai-2026-global-enterprise-transformation-breakthrough",
      icon: <Target className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      badge: "Case Study",
      stats: "5,059% ROI achieved"
    },
    {
      title: "Innovation Showcase",
      description: "Cutting-edge AI technologies and industry applications transforming businesses worldwide",
      url: "/ai-innovation-showcase-2026",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      badge: "Tech Showcase",
      stats: "$4.3B value created"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-500/30 mb-6">
            <Star className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span className="font-bold text-emerald-300">LATEST BREAKTHROUGHS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Revolutionary AI Content Now Available
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover our latest research, success stories, and technology showcases featuring 
            cutting-edge AI innovations that are reshaping industries and delivering unprecedented results.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`bg-gradient-to-r ${content.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {content.badge}
                  </span>
                  <div className="text-right">
                    <div className="text-sm text-blue-200 font-semibold">{content.stats}</div>
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${content.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {content.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* CTA */}
                <Link
                  to={content.url}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${content.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105`}
                >
                  Explore Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our AI technologies to achieve 
              unprecedented growth and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-innovation-showcase-2026"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-emerald-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105"
              >
                <TrendingUp className="w-5 h-5" />
                Explore All Innovations
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Award className="w-5 h-5" />
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">$4.3B</div>
            <div className="text-sm text-blue-200">Total Value Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">500%</div>
            <div className="text-sm text-blue-200">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.7%</div>
            <div className="text-sm text-blue-200">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">47</div>
            <div className="text-sm text-blue-200">Countries Served</div>
          </div>
        </div>
      </div>
    </div>
  );
};