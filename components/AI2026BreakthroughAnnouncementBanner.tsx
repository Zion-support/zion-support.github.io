import React from 'react';
import Link from 'next/link';
import { 
  Rocket
  Brain
  Zap
  ArrowRight
  Star,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Cpu
} from 'lucide-react';

const AI2026BreakthroughAnnouncementBanner = () => {
  const breakthroughs = [
    {
      icon: Brain,
      title: 'Quantum-Neural Fusion',
      description: 'Revolutionary integration achieving unprecedented AI capabilities',
      impact: '1000x Performance Boost',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Autonomous AI Agents',
      description: 'Self-evolving agents with independent decision-making abilities',
      impact: '95% Automation Rate',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Unbreakable AI security using quantum encryption',
      impact: 'Zero Breaches',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/15 to-purple-600/15"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Announcement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 mb-6">
            <Rocket className="w-5 h-5 mr-2 text-red-400" />
            <span className="text-white font-medium">BREAKTHROUGH ANNOUNCEMENT</span>
            <Star className="w-4 h-4 ml-2 text-yellow-400 fill-current animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI 2026
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Breakthrough</span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionary AI technologies that will transform industries and redefine human-AI collaboration. 
            Experience the future of artificial intelligence today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/ai-innovation-showcase-2026"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Brain className="w-5 h-5 mr-2" />
              Explore Breakthroughs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Join the Revolution
            </Link>
          </div>
        </div>

        {/* Breakthrough Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {breakthroughs.map((breakthroughindex) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${breakthrough.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <breakthrough.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {breakthrough.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {breakthrough.description}
                </p>
                
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-green-300 font-medium">{breakthrough.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Impact Stats */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Global Impact</h2>
            <p className="text-xl text-gray-300">Transforming industries and empowering organizations worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">180+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-400">Users</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">AI Systems</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Be Part of the AI Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking organizations already transforming their operations with our breakthrough AI technologies. 
              The future is hereand 'it', 's waiting for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-innovation-showcase-2026"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Now
              </Link>
              
              <Link 
                href="/contact"
                className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Started
              </Link>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              Free consultation • No commitment • Immediate results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026BreakthroughAnnouncementBanner;