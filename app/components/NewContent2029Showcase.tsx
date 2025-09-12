import React from 'react';
import { Brain, Cpu, Database, Zap, Globe, Shield, Rocket, Star } from 'lucide-react';

const NewContent2029Showcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Neural Network Revolution",
      description: "Advanced AI neural networks with quantum computing capabilities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Quantum Processing",
      description: "Next-gen quantum processors for unprecedented computational power",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "AI Data Ecosystems",
      description: "Revolutionary data management systems with AI-driven insights",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Automation",
      description: "Ultra-fast automation systems that adapt in real-time",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global AI Network",
      description: "Worldwide AI infrastructure connecting every continent",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Quantum-encrypted security protocols for ultimate protection",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description: "AI-powered space exploration and satellite networks",
      color: "from-gray-500 to-blue-500"
    },
    {
      icon: Star,
      title: "Innovation Hub",
      description: "Cutting-edge research and development facilities",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Technologies for 2029
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of next-generation AI solutions designed to 
            transform industries and accelerate human progress.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of forward-thinking organizations already using our 2029 AI ecosystem
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your AI Journey
              <Rocket className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2029Showcase;