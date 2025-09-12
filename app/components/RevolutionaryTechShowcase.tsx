import React from 'react';
import { Microscope, Atom, Cpu, Network, Brain, Database, Shield, Zap } from 'lucide-react';

const RevolutionaryTechShowcase: React.FC = () => {
  const technologies = [
    {
      icon: Microscope,
      title: "Quantum Computing",
      description: "Revolutionary quantum processors that solve problems impossible for classical computers",
      category: "Computing",
      color: "from-purple-600 to-indigo-600"
    },
    {
      icon: Atom,
      title: "Molecular AI",
      description: "AI systems that understand and manipulate matter at the molecular level",
      category: "Chemistry",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Cpu,
      title: "Neural Processing Units",
      description: "Specialized chips designed specifically for AI workloads and neural networks",
      category: "Hardware",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Network,
      title: "Distributed AI",
      description: "AI systems that operate across vast networks of connected devices",
      category: "Networking",
      color: "from-orange-600 to-red-600"
    },
    {
      icon: Brain,
      title: "Consciousness AI",
      description: "Advanced AI systems with emergent consciousness and self-awareness",
      category: "Cognitive",
      color: "from-pink-600 to-purple-600"
    },
    {
      icon: Database,
      title: "Quantum Databases",
      description: "Database systems that leverage quantum principles for instant data retrieval",
      category: "Storage",
      color: "from-indigo-600 to-blue-600"
    },
    {
      icon: Shield,
      title: "AI Security Matrix",
      description: "Advanced security systems that protect against AI-powered threats",
      category: "Security",
      color: "from-gray-600 to-slate-600"
    },
    {
      icon: Zap,
      title: "Energy AI",
      description: "AI systems that optimize and manage energy consumption across all systems",
      category: "Energy",
      color: "from-yellow-600 to-orange-600"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Technologies
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Discover breakthrough technologies that are reshaping our world and creating 
            new possibilities for the future of humanity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl rounded-tr-2xl"></div>
              
              <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                  {tech.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                {tech.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {tech.description}
              </p>
              
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of innovators, researchers, and visionaries who are already 
              building the future with our revolutionary technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Building Tomorrow
                <Zap className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
                Explore Research
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase;