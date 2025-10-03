// import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, Star, Award, Target, DollarSign } from 'lucide-react';

const AIAdvertisingBanner: React.FC = () => {
  const advertisingFeatures = [
    {
      icon: '🚀',
      title: 'AI-Powered Marketing Automation',
      description: 'Increase conversion rates by 300% with intelligent ad targeting and personalized campaigns',
      metric: '300% ROI',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🎯',
      title: 'Predictive Customer Analytics',
      description: 'Predict customer behavior with 95% accuracy using advanced machine learning models',
      metric: '95% Accuracy',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💰',
      title: 'Dynamic Pricing Optimization',
      description: 'Maximize revenue with AI-driven pricing strategies that adapt in real-time',
      metric: '40% Revenue Boost',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📊',
      title: 'Real-Time Campaign Optimization',
      description: 'Automatically optimize ad spend and targeting for maximum performance',
      metric: '60% Cost Reduction',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const successStories = [
    {
      company: 'Fortune 500 Retailer',
      result: '$50M Revenue Increase',
      timeframe: '6 months',
      icon: '🏆'
    },
    {
      company: 'Global E-commerce Platform',
      result: '400% Ad Performance Boost',
      timeframe: '3 months',
      icon: '⚡'
    },
    {
      company: 'Enterprise SaaS Company',
      result: '85% Customer Acquisition Cost Reduction',
      timeframe: '4 months',
      icon: '📈'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30">
              <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold text-yellow-300">AI-POWERED ADVERTISING</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-500/30">
              <TrendingUp className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-sm font-semibold text-green-300">300% ROI GUARANTEED</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🎯 Revolutionize Your Advertising with AI
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your marketing campaigns with our <span className="font-bold text-yellow-300">breakthrough AI advertising platform</span>. 
            Achieve <span className="font-bold text-green-300">300% ROI</span>, <span className="font-bold text-blue-300">95% targeting accuracy</span>, 
            and <span className="font-bold text-purple-300">60% cost reduction</span> with intelligent automation.
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8">
            <Target className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-bold text-lg">
              ⚡ Proven Results: $50M+ Revenue Generated • 400% Performance Boost • 85% Cost Savings
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advertisingFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Metric Badge */}
                <div className="mb-6">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${feature.color} text-white text-sm font-bold shadow-lg`}>
                    <Zap className="w-4 h-4" />
                    {feature.metric}
                  </span>
                </div>

                {/* Learn More Button */}
                <a
                  href="/services-advertising"
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              🏆 Proven Success Stories
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real results from companies using our AI advertising platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl mb-4">{story.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{story.company}</h4>
                <div className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {story.result}
                </div>
                <div className="text-sm text-gray-400">in {story.timeframe}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                🚀 Ready to Transform Your Advertising?
              </h3>
              <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-lg">
                Join 500+ companies already using our AI advertising platform to achieve 
                <span className="font-bold text-yellow-300"> 300% ROI</span> and 
                <span className="font-bold text-green-300"> $50M+ revenue increases</span>. 
                Start your free trial today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </a>
                <a
                  href="/demo"
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Watch Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">300%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">95%</div>
              <div className="text-sm text-gray-300">Targeting Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300 mb-2">60%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAdvertisingBanner;