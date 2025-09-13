import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Award, TrendingUp, Zap, Brain, Target } from 'lucide-react';

const AI2025UltimateBreakthroughContentShowcase: React.FC = () => {
  const breakthroughContent = [
    {
      id: 1,
      title: "Neural Quantum Fusion Architecture",
      description: "Revolutionary AI system combining quantum computing with neural networks for unprecedented processing power.",
      category: "AI Architecture",
      readTime: "15 min",
      views: "12.5K",
      rating: 4.9,
      featured: true,
      image: "/api/placeholder/400/250",
      tags: ["Quantum AI", "Neural Networks", "Breakthrough"],
      benefits: ["10,000x faster processing", "99.9% accuracy", "Real-time learning"]
    },
    {
      id: 2,
      title: "Autonomous Business Process Optimization",
      description: "Self-evolving AI systems that continuously optimize business operations without human intervention.",
      category: "Automation",
      readTime: "12 min",
      views: "8.7K",
      rating: 4.8,
      featured: true,
      image: "/api/placeholder/400/250",
      tags: ["Automation", "Business Intelligence", "AI"],
      benefits: ["2,500% ROI", "Zero downtime", "Predictive optimization"]
    },
    {
      id: 3,
      title: "Quantum Error Correction Breakthrough",
      description: "Advanced error correction algorithms enabling stable quantum computing at scale.",
      category: "Quantum Computing",
      readTime: "18 min",
      views: "15.2K",
      rating: 4.9,
      featured: true,
      image: "/api/placeholder/400/250",
      tags: ["Quantum Computing", "Error Correction", "Breakthrough"],
      benefits: ["99.99% reliability", "Scalable quantum systems", "Commercial viability"]
    },
    {
      id: 4,
      title: "Transcendent Intelligence Framework",
      description: "Next-generation AI framework that transcends current limitations in reasoning and creativity.",
      category: "AI Research",
      readTime: "20 min",
      views: "9.3K",
      rating: 4.7,
      featured: false,
      image: "/api/placeholder/400/250",
      tags: ["AI Research", "Transcendent AI", "Framework"],
      benefits: ["Creative problem solving", "Abstract reasoning", "Human-like intuition"]
    },
    {
      id: 5,
      title: "Edge Quantum Computing Solutions",
      description: "Distributed quantum computing infrastructure for real-time processing at the edge.",
      category: "Edge Computing",
      readTime: "14 min",
      views: "6.8K",
      rating: 4.6,
      featured: false,
      image: "/api/placeholder/400/250",
      tags: ["Edge Computing", "Quantum", "Infrastructure"],
      benefits: ["Ultra-low latency", "Distributed processing", "Real-time insights"]
    },
    {
      id: 6,
      title: "AI-Powered Predictive Analytics Revolution",
      description: "Advanced predictive models that forecast business trends with unprecedented accuracy.",
      category: "Analytics",
      readTime: "16 min",
      views: "11.4K",
      rating: 4.8,
      featured: false,
      image: "/api/placeholder/400/250",
      tags: ["Predictive Analytics", "AI", "Business Intelligence"],
      benefits: ["95% prediction accuracy", "Real-time forecasting", "Actionable insights"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 mb-6">
            <Award className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-semibold">Ultimate Breakthrough Content</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2025 Revolutionary
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Breakthrough Showcase
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore the most groundbreaking AI research, quantum computing breakthroughs, and automation solutions that will define the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {breakthroughContent.map((content) => (
            <div 
              key={content.id} 
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-105 ${
                content.featured 
                  ? 'border-purple-400/50 hover:border-purple-400/80' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {content.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-center font-semibold">
                  ⭐ Featured Breakthrough
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                    {content.category}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Award className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">{content.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-white/10 text-gray-300 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2 mb-6">
                  {content.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-green-300">
                      <Zap className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {content.views}
                  </div>
                </div>
                
                <Link 
                  to={`/breakthrough-content/${content.id}`}
                  className="group/link w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <span>Explore Breakthrough</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/ai-2025-breakthroughs"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Brain className="w-5 h-5 mr-2" />
            <span>View All 2025 Breakthroughs</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateBreakthroughContentShowcase;