import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Brain, 
  Rocket, 
  Target,
  TrendingUp,
  Award,
  Globe,
  Shield
} from 'lucide-react';

const FutureTechInnovationBanner: React.FC = () => {
  const innovations = [
    {
      icon: Brain,
      title: "Quantum AI Processing",
      description: "Next-generation quantum-enhanced artificial intelligence",
      impact: "1000x faster computation"
    },
    {
      icon: Zap,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for seamless interaction",
      impact: "Zero-latency control"
    },
    {
      icon: Rocket,
      title: "Autonomous Systems",
      description: "Self-managing AI systems that evolve and optimize continuously",
      impact: "99.9% uptime guaranteed"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Crystal ball accuracy in business forecasting and planning",
      impact: "95% prediction accuracy"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-white/5 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/5 rounded-full animate-pulse delay-3000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-300/40 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-300/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-300/40 rounded-full animate-ping delay-1500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-white/20">
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <span className="text-lg font-bold">FUTURE TECHNOLOGY INNOVATION 2025</span>
            <Zap className="w-6 h-6 text-yellow-300" />
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block">The Future is</span>
            <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Already Here
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed text-purple-100">
            Experience breakthrough technologies that will revolutionize your business. 
            From quantum computing to neural interfaces - the future of AI is now.
          </p>
          
          {/* Key statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">10,000%</div>
              <div className="text-purple-200 font-semibold">Peak ROI Achieved</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-purple-200 font-semibold">Countries Served</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-purple-200 font-semibold">Success Rate</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-purple-200 font-semibold">Support Available</div>
            </div>
          </div>
        </div>

        {/* Innovation showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <innovation.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{innovation.title}</h3>
              <p className="text-purple-100 mb-4 text-sm leading-relaxed">{innovation.description}</p>
              <div className="text-yellow-300 font-semibold text-sm">{innovation.impact}</div>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Be Among the First to Experience the Future
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join the exclusive group of visionaries who are already leveraging tomorrow's technology today. 
            Limited spots available for early adopters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/revolutionary-technology-showcase-2026"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-full font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3"
            >
              Access Future Technology
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="group bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center gap-3"
            >
              Schedule Demo
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          {/* Urgency indicator */}
          <div className="mt-8 inline-flex items-center gap-2 bg-red-500/20 text-red-200 px-6 py-3 rounded-full border border-red-400/30">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Limited Time: Early Access Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechInnovationBanner;