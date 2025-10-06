import React from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, ArrowRight, Zap, Rocket, Star, BarChart3, Target, Users, Award } from 'lucide-react';

const UltimateBusinessIntelligenceShowcase2025: React.FC = () => {
  const showcaseItems = [
    {
      id: 1,
      title: 'AI-Powered Predictive Analytics',
      description: 'Transform raw data into actionable insights with 99.9% accuracy and real-time processing.',
      icon: '📊',
      metrics: {
        accuracy: '99.9%',
        speed: '10x faster',
        roi: '300%'
      },
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Autonomous Decision Making',
      description: 'Self-optimizing systems that make intelligent decisions without human intervention.',
      icon: '🤖',
      metrics: {
        automation: '95%',
        efficiency: '400%',
        cost: '60% reduction'
      },
      gradient: 'from-purple-500 to-fuchsia-600'
    },
    {
      id: 3,
      title: 'Real-Time Intelligence Dashboard',
      description: 'Live monitoring and analysis with instant insights across all business functions.',
      icon: '📈',
      metrics: {
        realtime: '100%',
        uptime: '99.99%',
        insights: '1000+ daily'
      },
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-xl">
              ULTIMATE BUSINESS INTELLIGENCE SHOWCASE 2025
            </span>
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Revolutionary AI-Powered Business Intelligence
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of enterprise intelligence with cutting-edge AI solutions that deliver unprecedented insights and competitive advantage.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {showcaseItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{item.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-cyan-400 font-bold">{value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-2xl text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: BarChart3, value: '30,000%', label: 'Average ROI' },
            { icon: Target, value: '99.9%', label: 'Accuracy Rate' },
            { icon: Users, value: '500+', label: 'Enterprise Clients' },
            { icon: Award, value: '100%', label: 'Success Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 500+ enterprises achieving unprecedented results with AI-powered business intelligence. 
            Get expert guidance from Zion Tech Group's transformation specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Your Transformation</span>
            </Link>
            
            <Link
              href="/enterprise"
              className="group flex items-center gap-3 border-2 border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;