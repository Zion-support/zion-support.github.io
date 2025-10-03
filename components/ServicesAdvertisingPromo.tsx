import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, Target, DollarSign, BarChart3 } from 'lucide-react';
const ServicesAdvertisingPromo: React.FC = () => {
  const advertisingServices = [
    {
      icon: '🎯',
      title: 'AI-Powered Ad Targeting',
      description: 'Hyper-accurate audience targeting with 95% precision using advanced machine learning algorithms',
      metric: '95% Accuracy',
      price: 'Starting at $5K/month',
      features: ['Real-time Optimization', 'Cross-Platform Targeting', 'Behavioral Analysis']
    },
    {
      icon: '📊',
      title: 'Campaign Performance Analytics',
      description: 'Deep insights and predictive analytics to maximize ROI and optimize ad spend across all channels',
      metric: '300% ROI',
      price: 'Starting at $3K/month',
      features: ['Predictive Analytics', 'ROI Optimization', 'Real-time Reporting']
    },
    {
      icon: '🤖',
      title: 'Automated Campaign Management',
      description: 'Fully automated ad campaign creation, optimization, and management with AI-driven decision making',
      metric: '80% Time Savings',
      price: 'Starting at $7K/month',
      features: ['Auto-Campaign Creation', 'Smart Bidding', '24/7 Optimization']
    },
    {
      icon: '💰',
      title: 'Dynamic Pricing Optimization',
      description: 'AI-driven pricing strategies that adapt in real-time to maximize revenue and conversion rates',
      metric: '40% Revenue Boost',
      price: 'Starting at $4K/month',
      features: ['Real-time Pricing', 'A/B Testing', 'Conversion Optimization']
    }
  ];

  const successMetrics = [
    { metric: '300%', label: 'Average ROI Increase', icon: '📈' },
    { metric: '95%', label: 'Targeting Accuracy', icon: '🎯' },
    { metric: '60%', label: 'Cost Reduction', icon: '💰' },
    { metric: '500+', label: 'Successful Campaigns', icon: '🚀' }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30">
              <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold text-yellow-300">AI ADVERTISING SERVICES</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-500/30">
              <TrendingUp className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-sm font-semibold text-green-300">300% ROI GUARANTEED</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            🎯 AI Advertising Services That Deliver Results
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your advertising with our <span className="font-bold text-yellow-300">cutting-edge AI advertising platform</span>. 
            Achieve <span className="font-bold text-green-300">300% ROI</span>, <span className="font-bold text-blue-300">95% targeting accuracy</span>, 
            and <span className="font-bold text-purple-300">60% cost reduction</span> with intelligent automation.
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8">
            <Target className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-bold text-lg">
              ⚡ Proven Results: $50M+ Revenue Generated • 95% Targeting Accuracy • 500+ Successful Campaigns
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {advertisingServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-indigo-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-indigo-500/10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 text-sm font-bold border border-purple-500/30">
                        <Zap className="w-4 h-4" />
                        {service.metric}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className="text-purple-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-bold text-lg">Pricing</span>
                  </div>
                  <div className="text-white font-bold text-xl">{service.price}</div>
                </div>

                {/* CTA Button */}
                <a
                  href="/contact"
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              📊 Proven Success Metrics
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real results from our AI advertising platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{metric.icon}</div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {metric.metric}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                🚀 Ready to Transform Your Advertising?
              </h3>
              <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-lg">
                Join 500+ companies already using our AI advertising platform to achieve 
                <span className="font-bold text-purple-300"> 300% ROI</span> and 
                <span className="font-bold text-green-300"> $50M+ revenue increases</span>. 
                Start your free consultation today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Start Free Consultation</span>
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Success Stories</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAdvertisingPromo;