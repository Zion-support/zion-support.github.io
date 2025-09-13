import React from 'react';
import { Metadata } from 'next';
import { Brain, Zap, Globe, Shield, TrendingUp, Users, Rocket, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Predictions 2025-2030 - Future Technology Trends | Zion Tech Group',
  description: 'Comprehensive predictions for AI and technology trends from 2025-2030. Expert insights on quantum computing, neural interfaces, and revolutionary breakthroughs.',
  keywords: 'AI predictions, future technology, 2025-2030 trends, quantum computing, neural interfaces, technology forecasting',
  openGraph: {
    title: 'AI Predictions 2025-2030 - Future Technology Trends',
    description: 'Explore expert predictions for AI and technology evolution over the next 5 years.',
    type: 'website',
  },
};

const predictions = [
  {
    year: 2025,
    title: "Consciousness-Level AI Emergence",
    description: "First AI systems demonstrating self-awareness and autonomous decision-making capabilities will emerge, marking a paradigm shift in artificial intelligence.",
    icon: Brain,
    probability: 85,
    impact: "Revolutionary",
    category: "AI Consciousness"
  },
  {
    year: 2025,
    title: "Quantum-Neural Fusion Breakthrough",
    description: "Successful integration of quantum computing with neural networks will enable processing speeds 1000x faster than current systems.",
    icon: Zap,
    probability: 90,
    impact: "Transformative",
    category: "Quantum AI"
  },
  {
    year: 2026,
    title: "Neural Interface Commercialization",
    description: "Direct brain-computer interfaces will become commercially available, enabling seamless human-AI collaboration.",
    icon: Target,
    probability: 75,
    impact: "Revolutionary",
    category: "Neural Tech"
  },
  {
    year: 2026,
    title: "Autonomous Business Operations",
    description: "Complete business process automation will be achieved, with AI systems managing entire organizations without human intervention.",
    icon: Globe,
    probability: 80,
    impact: "Transformative",
    category: "Business AI"
  },
  {
    year: 2027,
    title: "AI-Powered Scientific Discovery",
    description: "AI systems will independently discover new scientific principles and accelerate research across all fields by 100x.",
    icon: Rocket,
    probability: 70,
    impact: "Revolutionary",
    category: "Scientific AI"
  },
  {
    year: 2027,
    title: "Universal AI Translation",
    description: "Real-time translation between any languages, including non-human communication patterns, will become seamless.",
    icon: Users,
    probability: 85,
    impact: "Transformative",
    category: "Communication AI"
  },
  {
    year: 2028,
    title: "AI-Generated Virtual Worlds",
    description: "AI will create fully immersive virtual environments that are indistinguishable from reality, revolutionizing entertainment and education.",
    icon: Globe,
    probability: 65,
    impact: "Revolutionary",
    category: "Virtual Reality AI"
  },
  {
    year: 2028,
    title: "Predictive Healthcare AI",
    description: "AI systems will predict and prevent diseases before they occur, extending human lifespan by 20-30 years.",
    icon: Shield,
    probability: 75,
    impact: "Transformative",
    category: "Healthcare AI"
  },
  {
    year: 2029,
    title: "AI-Human Hybrid Intelligence",
    description: "Seamless integration of human and AI intelligence will create hybrid cognitive systems with unprecedented capabilities.",
    icon: Brain,
    probability: 60,
    impact: "Revolutionary",
    category: "Hybrid Intelligence"
  },
  {
    year: 2029,
    title: "Autonomous Space Exploration",
    description: "AI-controlled spacecraft will autonomously explore and colonize other planets, expanding human presence beyond Earth.",
    icon: Rocket,
    probability: 70,
    impact: "Revolutionary",
    category: "Space AI"
  },
  {
    year: 2030,
    title: "Artificial General Intelligence",
    description: "First true AGI systems will emerge, capable of performing any intellectual task that a human can do.",
    icon: Brain,
    probability: 50,
    impact: "Revolutionary",
    category: "AGI"
  },
  {
    year: 2030,
    title: "AI-Driven Economic Systems",
    description: "Entire economic systems will be managed by AI, optimizing resource allocation and eliminating inefficiencies globally.",
    icon: TrendingUp,
    probability: 65,
    impact: "Transformative",
    category: "Economic AI"
  }
];

const timeline = [
  {
    year: 2025,
    title: "Foundation Year",
    description: "Consciousness-level AI emergence and quantum-neural fusion breakthroughs establish the foundation for future developments.",
    keyEvents: ["Consciousness AI", "Quantum-Neural Fusion", "Enhanced Automation"]
  },
  {
    year: 2026,
    title: "Integration Year",
    description: "Neural interfaces and autonomous business operations become mainstream, integrating AI deeply into human society.",
    keyEvents: ["Neural Interfaces", "Autonomous Operations", "Advanced Robotics"]
  },
  {
    year: 2027,
    title: "Discovery Year",
    description: "AI accelerates scientific discovery and enables universal communication, transforming how we understand and interact with the world.",
    keyEvents: ["Scientific AI", "Universal Translation", "Enhanced Research"]
  },
  {
    year: 2028,
    title: "Transformation Year",
    description: "Virtual worlds and predictive healthcare revolutionize entertainment, education, and medical care.",
    keyEvents: ["Virtual Worlds", "Predictive Healthcare", "Immersive Tech"]
  },
  {
    year: 2029,
    title: "Hybrid Year",
    description: "Human-AI hybrid intelligence emerges, and autonomous space exploration begins, expanding human capabilities beyond Earth.",
    keyEvents: ["Hybrid Intelligence", "Space Exploration", "Enhanced Cognition"]
  },
  {
    year: 2030,
    title: "Revolution Year",
    description: "Artificial General Intelligence and AI-driven economic systems mark the beginning of a new era in human civilization.",
    keyEvents: ["AGI Emergence", "Economic AI", "Civilization 2.0"]
  }
];

export default function AIPredictions2025_2030() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-8">
            <span className="text-indigo-300 text-sm font-medium">🔮 Future Predictions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Predictions
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              2025-2030
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive predictions for AI and technology evolution over the next 5 years. 
            Based on expert analysis and current technological trends.
          </p>
        </div>
      </section>

      {/* Predictions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Predictions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the most anticipated AI breakthroughs and technological advancements coming in the next 5 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {predictions.map((prediction, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/20 rounded-lg">
                    <prediction.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{prediction.year}</div>
                    <div className="text-sm text-gray-400">{prediction.probability}%</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {prediction.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {prediction.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Impact:</span>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      prediction.impact === 'Revolutionary' 
                        ? 'bg-red-500/20 text-red-300' 
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {prediction.impact}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Category:</span>
                    <span className="text-sm font-medium text-purple-300">{prediction.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Probability:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000"
                          style={{ width: `${prediction.probability}%` }}
                        />
                      </div>
                      <span className="text-sm text-white">{prediction.probability}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology Evolution Timeline
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A year-by-year breakdown of how AI and technology will evolve and transform our world.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((year, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{year.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{year.title}</h3>
                    <p className="text-gray-300 mb-4">{year.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {year.keyEvents.map((event, eventIndex) => (
                        <span
                          key={eventIndex}
                          className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm rounded-full"
                        >
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-indigo-500 to-purple-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prepare for the Future
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay ahead of the curve with our AI solutions and expert guidance. 
              Be ready for the technological revolution that's coming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                Start Your AI Journey
              </button>
              <button className="px-8 py-4 border border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300">
                Download Full Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}