import React from 'react';
import { Brain, Cloud, Cpu, Database, Globe, Lock, Rocket, Shield } from 'lucide-react';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const technologies = [
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Intelligent process automation that learns and adapts to your business needs.",
      color: "from-blue-500 to-cyan-500",
      features: ["Machine Learning", "Natural Language Processing", "Predictive Analytics"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and high-performance cloud solutions for modern businesses.",
      color: "from-purple-500 to-pink-500",
      features: ["Multi-Cloud Strategy", "Auto-Scaling", "Cost Optimization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Advanced security measures to protect your digital assets and data.",
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Zero Trust Architecture", "Compliance Management"]
    },
    {
      icon: Database,
      title: "Data Analytics Platform",
      description: "Transform raw data into actionable insights with our advanced analytics tools.",
      color: "from-green-500 to-emerald-500",
      features: ["Real-time Analytics", "Data Visualization", "Business Intelligence"]
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Complete digital overhaul to modernize your business operations.",
      color: "from-indigo-500 to-purple-500",
      features: ["Process Optimization", "Digital Workflows", "Change Management"]
    },
    {
      icon: Rocket,
      title: "Innovation Labs",
      description: "Cutting-edge research and development for next-generation solutions.",
      color: "from-yellow-500 to-orange-500",
      features: ["R&D Projects", "Prototype Development", "Technology Scouting"]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <Cpu className="h-4 w-4" />
            <span className="text-sm font-medium">REVOLUTIONARY TECHNOLOGY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leading the Future of
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technology Innovation
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our cutting-edge technologies are transforming industries and 
            creating new possibilities for businesses worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} mb-6`}>
                <tech.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
              <p className="text-gray-600 mb-6">{tech.description}</p>
              
              <div className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`}></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`mt-6 w-full py-3 px-4 bg-gradient-to-r ${tech.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Explore All Technologies
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;