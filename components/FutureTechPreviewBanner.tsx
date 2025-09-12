import React from 'react';
import { ArrowRight, Brain, Cpu, Eye, Rocket, Zap } from 'lucide-react';

const FutureTechPreviewBanner: React.FC = () => {
  const futureTechs = [
    {
      icon: Brain,
      title: "Neural Interfaces",
      description: "Direct brain-computer communication for enhanced productivity",
      timeline: "2026-2027",
      status: "In Development"
    },
    {
      icon: Eye,
      title: "Quantum Computing",
      description: "Revolutionary computing power for complex problem solving",
      timeline: "2027-2028",
      status: "Research Phase"
    },
    {
      icon: Cpu,
      title: "AI Consciousness",
      description: "Self-aware artificial intelligence systems",
      timeline: "2028-2030",
      status: "Conceptual"
    },
    {
      icon: Zap,
      title: "Energy Revolution",
      description: "Clean, unlimited energy solutions",
      timeline: "2026-2027",
      status: "Pilot Program"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M50 50m-50 0a50 50 0 1 1 100 0a50 50 0 1 1 -100 0"/%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 rounded-full px-4 py-2 mb-6 border border-purple-500/30">
            <Rocket className="h-4 w-4" />
            <span className="text-sm font-medium">FUTURE TECHNOLOGY PREVIEW</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future is
            <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Being Built Today
            </span>
          </h2>
          
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Get an exclusive preview of the revolutionary technologies we're developing 
            that will reshape the world in the next decade.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 rounded-full px-4 py-2 border border-green-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">LIVE RESEARCH & DEVELOPMENT</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {futureTechs.map((tech, index) => (
            <div 
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl mb-4">
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{tech.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tech.status === 'In Development' ? 'bg-green-500/20 text-green-300' :
                    tech.status === 'Research Phase' ? 'bg-yellow-500/20 text-yellow-300' :
                    tech.status === 'Pilot Program' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {tech.status}
                  </span>
                </div>
                
                <p className="text-purple-100 text-sm mb-4">{tech.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-200">Expected: {tech.timeline}</span>
                  <button className="text-purple-300 hover:text-white transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Innovation Journey
            </h3>
            <p className="text-purple-100 mb-6">
              Be among the first to experience these groundbreaking technologies. 
              Get exclusive access to beta programs and early releases.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechPreviewBanner;