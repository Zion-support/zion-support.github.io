import React from 'react';
import { Brain, Building, Target, Cpu, Shield, Check, Phone, Mail, MapPin, TrendingUp, Zap, Globe } from 'lucide-react';

export default function ComprehensiveServicesShowcase() {
  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'AI-Powered Analytics' },
        { name: 'Machine Learning Models' },
        { name: 'Natural Language Processing' }
      ],
      description: 'Cutting-edge AI solutions for modern businesses'
    },
    {
      id: 'it-services',
      name: 'IT Infrastructure',
      icon: <Building className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Cloud Infrastructure' },
        { name: 'Cybersecurity Solutions' },
        { name: 'DevOps Automation' }
      ],
      description: 'Comprehensive IT solutions for enterprise needs'
    },
    {
      id: 'consulting',
      name: 'Strategic Consulting',
      icon: <Target className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Digital Transformation' },
        { name: 'Process Optimization' },
        { name: 'Technology Strategy' }
      ],
      description: 'Strategic guidance for technology adoption'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete suite of innovative services designed for the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
              <p className="text-gray-300 mb-6">{category.description}</p>
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}