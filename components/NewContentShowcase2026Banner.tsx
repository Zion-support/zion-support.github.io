import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Brain, 
  Wrench, 
  ArrowRight, 
  Star,
  Zap,
  TrendingUp,
  Users
} from 'lucide-react';

const NewContentShowcase2026Banner = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Innovation Showcase',
      description: 'Revolutionary breakthroughs and future technologies',
      link: '/ai-innovation-showcase-2026',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Wrench,
      title: 'Interactive AI Tools',
      description: 'Advanced AI-powered solutions and applications',
      link: '/ai-tools-interactive-showcase',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Future Predictions',
      description: 'AI trends and predictions for 2026 and beyond',
      link: '/ai-2026-future-predictions',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 mb-6">
            <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-white font-medium">New Content Available</span>
            <Star className="w-4 h-4 ml-2 text-yellow-400 fill-current" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Future of AI</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore revolutionary AI innovations, interactive tools, and breakthrough technologies that are shaping the future in 2026.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Link 
              key={index}
              href={feature.link}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">AI Tools</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400">Innovations</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">Users</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.9★</div>
            <div className="text-gray-400">Rating</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link 
              href="/ai-innovation-showcase-2026"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Brain className="w-5 h-5 mr-2" />
              Explore Innovations
            </Link>
            
            <Link 
              href="/ai-tools-interactive-showcase"
              className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              <Wrench className="w-5 h-5 mr-2" />
              Try AI Tools
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            Join thousands of users discovering the future of AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026Banner;