import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Brain, Zap, Target, TrendingUp, Star, Cpu, Atom, Settings } from 'lucide-react';

const RevolutionaryTechnologyShowcase2025: React.FC = () => {
  const technologies = [
    {
      id: 1,
      name: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling thought-controlled computing and enhanced cognitive capabilities.",
      category: "Neural Technology",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-300",
      features: ["Thought Control", "Enhanced Cognition", "Real-time Processing"],
      impact: "10x Mental Performance",
      status: "Available 2025"
    },
    {
      id: 2,
      name: "Quantum Internet Infrastructure",
      description: "Ultra-secure quantum communication networks providing unhackable data transmission and quantum cloud computing.",
      category: "Quantum Technology",
      icon: Atom,
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-300",
      features: ["Unhackable Security", "Quantum Cloud", "Global Network"],
      impact: "100% Security Guarantee",
      status: "Beta Testing"
    },
    {
      id: 3,
      name: "Autonomous AI Orchestrators",
      description: "Self-managing AI systems that coordinate complex business operations and make strategic decisions autonomously.",
      category: "AI Technology",
      icon: Settings,
      color: "from-emerald-500 to-teal-500",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-300",
      features: ["Autonomous Operations", "Strategic Planning", "Self-Optimization"],
      impact: "2,500% ROI",
      status: "Deployed"
    },
    {
      id: 4,
      name: "Edge Quantum Computing",
      description: "Distributed quantum computing infrastructure enabling real-time quantum processing at the edge of networks.",
      category: "Edge Computing",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500",
      borderColor: "border-indigo-400/30",
      textColor: "text-indigo-300",
      features: ["Ultra-Low Latency", "Distributed Processing", "Real-time Insights"],
      impact: "1,000x Speed Boost",
      status: "Pilot Program"
    },
    {
      id: 5,
      name: "Transcendent Intelligence",
      description: "Next-generation AI that transcends current limitations in reasoning, creativity, and abstract thinking.",
      category: "AI Research",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-400/30",
      textColor: "text-orange-300",
      features: ["Creative Problem Solving", "Abstract Reasoning", "Human-like Intuition"],
      impact: "Unlimited Potential",
      status: "Research Phase"
    },
    {
      id: 6,
      name: "Space Technology Integration",
      description: "Advanced space-based computing and communication systems for global connectivity and off-world operations.",
      category: "Space Technology",
      icon: Rocket,
      color: "from-blue-500 to-indigo-500",
      borderColor: "border-blue-400/30",
      textColor: "text-blue-300",
      features: ["Global Coverage", "Off-world Operations", "Satellite Networks"],
      impact: "Global Reach",
      status: "Launching 2025"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 mb-6">
            <Rocket className="w-5 h-5 text-indigo-400 mr-2" />
            <span className="text-indigo-300 font-semibold">Revolutionary Technology 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technology Showcase
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the most groundbreaking technologies that will reshape industries, transform businesses, and redefine what's possible in 2025 and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={tech.id} 
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${tech.borderColor} hover:bg-white/10`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${tech.color} bg-opacity-20 ${tech.textColor} rounded-full text-sm font-semibold`}>
                    {tech.category}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                    {tech.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {tech.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {tech.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {tech.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <Zap className="w-4 h-4 mr-2 text-indigo-400" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex items-center ${tech.textColor} font-semibold`}>
                    <Target className="w-4 h-4 mr-2" />
                    {tech.impact}
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">Revolutionary</span>
                  </div>
                </div>
                
                <Link 
                  to={`/technology/${tech.id}`}
                  className={`group/link w-full bg-gradient-to-r ${tech.color} hover:opacity-90 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center`}
                >
                  <span>Explore Technology</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-indigo-400/30">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-indigo-400" />
              Technology Impact Metrics
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-300 mb-2">10,000x</div>
                <div className="text-gray-300">Performance Boost</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-300 mb-2">2,500%</div>
                <div className="text-gray-300">ROI Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300 mb-2">Zero</div>
                <div className="text-gray-300">Downtime</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
              <Star className="w-8 h-8 mr-3 text-purple-400" />
              Why Choose Our Technology?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="text-white font-semibold mb-1">Cutting-Edge Innovation</div>
                  <div className="text-gray-300 text-sm">Latest breakthroughs in AI, quantum computing, and automation</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="text-white font-semibold mb-1">Proven Results</div>
                  <div className="text-gray-300 text-sm">Guaranteed ROI and measurable business impact</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="text-white font-semibold mb-1">Future-Ready</div>
                  <div className="text-gray-300 text-sm">Technologies designed for the next decade of growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/revolutionary-technology-2025"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Rocket className="w-5 h-5 mr-2" />
            <span>Explore All Revolutionary Technologies</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTechnologyShowcase2025;