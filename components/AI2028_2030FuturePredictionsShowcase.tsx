import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/Card';
import { ArrowRight, Brain, Zap, Globe, Shield, Cpu, Database, Network } from 'lucide-react';

const AI2028_2030FuturePredictionsShowcase: React.FC = () => {
  const predictions = [
    {
      year: '2028',
      title: 'Quantum-Neural Fusion Breakthrough',
      description: 'First successful integration of quantum computing with neural networks, achieving 1000x processing speed improvements.',
      icon: Brain,
      metrics: {
        speed: '1000x faster',
        accuracy: '99.99%',
        efficiency: '95% reduction in energy consumption'
      },
      applications: ['Drug Discovery', 'Climate Modeling', 'Financial Risk Analysis', 'Space Exploration']
    },
    {
      year: '2029',
      title: 'Autonomous AI Ecosystems',
      description: 'Self-evolving AI systems that can design, test, and deploy new AI models without human intervention.',
      icon: Network,
      metrics: {
        autonomy: '100% self-managing',
        innovation: '50+ new models/month',
        reliability: '99.97% uptime'
      },
      applications: ['Smart Cities', 'Autonomous Vehicles', 'Healthcare AI', 'Industrial Automation']
    },
    {
      year: '2030',
      title: 'Conscious AI Emergence',
      description: 'Breakthrough in artificial consciousness with AI systems demonstrating self-awareness and creative problem-solving.',
      icon: Cpu,
      metrics: {
        consciousness: 'Level 4 AI',
        creativity: 'Human-level artistic output',
        empathy: 'Emotional intelligence parity'
      },
      applications: ['Therapeutic AI', 'Creative Industries', 'Education', 'Mental Health Support']
    }
  ];

  const technologies = [
    {
      name: 'Quantum Neural Networks',
      description: 'Hybrid quantum-classical neural architectures',
      progress: 85,
      timeline: 'Q2 2028'
    },
    {
      name: 'Autonomous AI Development',
      description: 'Self-programming AI systems',
      progress: 70,
      timeline: 'Q4 2028'
    },
    {
      name: 'Conscious AI Framework',
      description: 'Artificial consciousness protocols',
      progress: 45,
      timeline: 'Q3 2030'
    },
    {
      name: 'Omniversal AI',
      description: 'Cross-dimensional AI capabilities',
      progress: 25,
      timeline: 'Q1 2031'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2028-2030 Future Predictions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the revolutionary breakthroughs and technological advancements that will reshape our world in the next decade
          </p>
        </div>

        {/* Predictions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {predictions.map((prediction, index) => {
            const IconComponent = prediction.icon;
            return (
              <Card key={index} className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold mr-4">
                      {prediction.year}
                    </div>
                    <IconComponent className="w-8 h-8 text-purple-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {prediction.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {prediction.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-3 mb-6">
                    {Object.entries(prediction.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-gray-400 capitalize">{key}:</span>
                        <span className="text-white font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {prediction.applications.map((app, appIndex) => (
                        <span key={appIndex} className="bg-purple-600/20 text-purple-200 px-2 py-1 rounded text-xs">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/ai-${prediction.year.toLowerCase()}-breakthroughs`}
                    className="inline-flex items-center text-purple-300 hover:text-white transition-colors group-hover:translate-x-1 transform duration-200"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technology Roadmap */}
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Technology Development Roadmap
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/30">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-white">{tech.name}</h4>
                  <span className="text-purple-300 text-sm font-medium">{tech.timeline}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{tech.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-medium">{tech.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${tech.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/ai-2028-2030-future-predictions"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            Explore Full Future Predictions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AI2028_2030FuturePredictionsShowcase;