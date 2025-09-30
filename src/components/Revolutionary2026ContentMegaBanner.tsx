import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, Star, Rocket, Brain, Atom, Bot, Gem, Microscope } from 'lucide-react';
import { revolutionaryBreakthroughs2025, breakthroughServices2025, latestCaseStudies2025, promotionalBanners2025 } from '../content/revolutionary-ai-breakthroughs-2025';

const Revolutionary2026ContentMegaBanner: React.FC = () => {
  const getIconComponent = (icon: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      '🧠': Brain,
      '⚛️': Atom,
      '🤖': Bot,
      '💎': Gem,
      '🔬': Microscope,
      '🚀': Rocket
    };
    return iconMap[icon] || Sparkles;
  };

  return (
    <div className="py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-bold text-yellow-300">REVOLUTIONARY BREAKTHROUGHS 2025</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm font-bold text-green-300">6 BREAKTHROUGH TECHNOLOGIES</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-400/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-400/30">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold text-purple-300">LIMITED EARLY ACCESS</span>
            </div>
          </div>

          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Revolutionary AI Breakthroughs 2025
          </h2>
          
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of AI with <span className="font-bold text-yellow-300">6 breakthrough technologies</span> that are revolutionizing enterprise operations:
            <span className="block mt-2 text-xl text-cyan-300">
              Meta-Cognitive AI • Quantum-Neural Networks • Autonomous Operations • Conscious AI Agents • Holographic Computing • Neuromorphic AI
            </span>
          </p>
        </div>

        {/* Revolutionary Breakthroughs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {revolutionaryBreakthroughs2025.map((breakthrough, index) => {
            const IconComponent = getIconComponent(breakthrough.icon);
            return (
              <div
                key={breakthrough.id}
                className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {breakthrough.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    {breakthrough.trending && (
                      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                        <TrendingUp className="w-3 h-3" />
                        <span>TRENDING</span>
                      </div>
                    )}
                    {breakthrough.featured && (
                      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold shadow-lg">
                        <Star className="w-3 h-3" />
                        <span>FEATURED</span>
                      </div>
                    )}
                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-xs font-semibold border border-blue-500/30">
                      BREAKTHROUGH
                    </span>
                  </div>
                </div>

                {/* Category & Impact */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-400 text-xs font-semibold border border-pink-500/30">
                    {breakthrough.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                  {breakthrough.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {breakthrough.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-green-400">{breakthrough.impact}</div>
                    <div className="text-xs text-gray-400">Impact</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-blue-400">{breakthrough.savings}</div>
                    <div className="text-xs text-gray-400">Savings</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    {breakthrough.readTime}
                  </span>
                  <span>{new Date(breakthrough.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>

                {/* CTA Button */}
                <a
                  href={`/blog/${breakthrough.slug}`}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>Explore Breakthrough</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Promotional Banners */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {promotionalBanners2025.map((banner, index) => (
            <div
              key={banner.id}
              className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 rounded-3xl opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full filter blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full filter blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">{banner.title}</h3>
                <p className="text-lg text-gray-300 mb-4">{banner.subtitle}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">{banner.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {banner.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-sm text-gray-300">{stat.label}</span>
                      <span className="text-sm font-semibold text-blue-400">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Urgency */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-400 text-sm font-semibold rounded-full border border-red-500/30">
                    {banner.urgency}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={banner.href}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                >
                  <Rocket className="w-4 h-4" />
                  <span>{banner.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 via-purple-500 to-pink-500">
            <div className="bg-slate-950 rounded-2xl px-12 py-16">
              <h3 className="text-4xl font-bold text-white mb-6">
                🚀 Ready to Experience the AI Revolution?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join 500+ leading organizations already transforming their operations with our breakthrough AI technologies. 
                Get early access to revolutionary innovations and achieve unprecedented results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Get Early Access</span>
                </a>
                <a
                  href="/revolutionary-breakthroughs-2025"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Explore All Breakthroughs</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-300">6</div>
              <div className="text-sm text-gray-400">Revolutionary Breakthroughs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-300">500+</div>
              <div className="text-sm text-gray-400">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300">$50M+</div>
              <div className="text-sm text-gray-400">Average Annual Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300">98%</div>
              <div className="text-sm text-gray-400">Automation Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revolutionary2026ContentMegaBanner;