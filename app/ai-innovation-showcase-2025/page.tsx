import React from 'react';
import { Metadata } from 'next';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Globe, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Innovation Showcase 2025 - Revolutionary Breakthroughs | Zion Tech Group',
  description: 'Discover the most advanced AI innovations and breakthroughs of 2025. Explore cutting-edge technologies, quantum computing solutions, and neural interface revolutions.',
  keywords: 'AI innovation, artificial intelligence, quantum computing, neural interfaces, breakthrough technology, 2025 predictions',
  openGraph: {
    title: 'AI Innovation Showcase 2025 - Revolutionary Breakthroughs',
    description: 'Explore the future of AI with our comprehensive showcase of 2025 innovations and breakthrough technologies.',
    type: 'website',
  },
};

const innovations = [
  {
    id: 1,
    title: "Quantum-Neural Fusion Architecture",
    description: "Revolutionary AI system that combines quantum computing with neural networks for unprecedented processing power and decision-making capabilities.",
    icon: Brain,
    impact: "1000x faster processing",
    category: "Quantum AI",
    status: "In Development"
  },
  {
    id: 2,
    title: "Consciousness-Level AI Systems",
    description: "Advanced AI models that demonstrate self-awareness and autonomous decision-making capabilities, marking a new era in artificial intelligence.",
    icon: Target,
    impact: "95% accuracy in complex reasoning",
    category: "Consciousness AI",
    status: "Beta Testing"
  },
  {
    id: 3,
    title: "Neural Interface Revolution",
    description: "Direct brain-computer interfaces that enable seamless communication between human consciousness and AI systems.",
    icon: Zap,
    impact: "Real-time thought processing",
    category: "Neural Tech",
    status: "Pilot Program"
  },
  {
    id: 4,
    title: "Autonomous Business Operations",
    description: "Complete business process automation using advanced AI agents that can manage entire organizations without human intervention.",
    icon: Globe,
    impact: "90% operational efficiency",
    category: "Business AI",
    status: "Production Ready"
  },
  {
    id: 5,
    title: "Predictive Analytics Engine",
    description: "AI system that can predict market trends, customer behavior, and business outcomes with 99.7% accuracy.",
    icon: TrendingUp,
    impact: "99.7% prediction accuracy",
    category: "Analytics",
    status: "Live"
  },
  {
    id: 6,
    title: "AI Security Fortress",
    description: "Advanced cybersecurity AI that can detect and prevent threats in real-time, protecting against even the most sophisticated attacks.",
    icon: Shield,
    impact: "99.9% threat detection",
    category: "Security",
    status: "Deployed"
  }
];

const stats = [
  { label: "AI Models Deployed", value: "50,000+", icon: Brain },
  { label: "Businesses Transformed", value: "10,000+", icon: Users },
  { label: "Processing Speed Increase", value: "1000x", icon: Zap },
  { label: "Global Reach", value: "150+ Countries", icon: Globe }
];

export default function AIInnovationShowcase2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-300 text-sm font-medium">🚀 2025 Innovation Showcase</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Innovation
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Showcase 2025
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the most revolutionary AI breakthroughs and cutting-edge technologies that are reshaping our world in 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center group">
              Explore Innovations
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI Breakthroughs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the most advanced AI technologies that are transforming industries and reshaping the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation) => (
              <div key={innovation.id} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg">
                    <innovation.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                    {innovation.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {innovation.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {innovation.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Impact:</span>
                    <span className="text-sm font-medium text-purple-300">{innovation.impact}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Category:</span>
                    <span className="text-sm font-medium text-blue-300">{innovation.category}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-medium rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already using our AI innovations to revolutionize their operations and achieve unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Start Your AI Journey
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}