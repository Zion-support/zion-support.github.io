import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const AI2025BreakthroughContentShowcase: React.FC = () => {
  const breakthroughContent = [
    {
      id: 1,
      title: "Revolutionary Neural Architecture 2025",
      description: "Breakthrough in quantum-enhanced neural networks delivering 10,000x faster processing with 99.9% accuracy",
      category: "AI Architecture",
      readTime: "8 min read",
      views: "2.3M",
      likes: "45K",
      image: "/images/ai-neural-architecture-2025.jpg",
      tags: ["Neural Networks", "Quantum AI", "Breakthrough", "2025"],
      featured: true,
      publishedDate: "2025-01-15",
      author: "Dr. Sarah Chen",
      authorRole: "Chief AI Scientist"
    },
    {
      id: 2,
      title: "Autonomous Decision Systems Revolution",
      description: "Self-managing AI systems that make complex business decisions with human-level reasoning and 99.7% accuracy",
      category: "Autonomous Systems",
      readTime: "12 min read",
      views: "1.8M",
      likes: "38K",
      image: "/images/autonomous-decision-systems.jpg",
      tags: ["Autonomous AI", "Decision Making", "Business Intelligence", "2025"],
      featured: true,
      publishedDate: "2025-01-14",
      author: "Marcus Rodriguez",
      authorRole: "Head of Autonomous Systems"
    },
    {
      id: 3,
      title: "Quantum Machine Learning Breakthrough",
      description: "First practical quantum machine learning algorithm achieving quantum supremacy in real-world applications",
      category: "Quantum Computing",
      readTime: "15 min read",
      views: "3.1M",
      likes: "67K",
      image: "/images/quantum-ml-breakthrough.jpg",
      tags: ["Quantum ML", "Quantum Supremacy", "Machine Learning", "2025"],
      featured: true,
      publishedDate: "2025-01-13",
      author: "Dr. Elena Volkov",
      authorRole: "Quantum Computing Director"
    },
    {
      id: 4,
      title: "AI-Powered Predictive Maintenance",
      description: "Revolutionary maintenance system predicting equipment failures with 99.5% accuracy, reducing downtime by 85%",
      category: "Industrial AI",
      readTime: "10 min read",
      views: "1.5M",
      likes: "29K",
      image: "/images/ai-predictive-maintenance.jpg",
      tags: ["Predictive Maintenance", "Industrial AI", "IoT", "2025"],
      featured: false,
      publishedDate: "2025-01-12",
      author: "James Wilson",
      authorRole: "Industrial AI Lead"
    },
    {
      id: 5,
      title: "Natural Language Understanding Revolution",
      description: "Advanced NLP models understanding context, emotion, and intent with unprecedented accuracy and speed",
      category: "Natural Language Processing",
      readTime: "9 min read",
      views: "2.7M",
      likes: "52K",
      image: "/images/nlp-revolution-2025.jpg",
      tags: ["NLP", "Language Understanding", "AI Communication", "2025"],
      featured: false,
      publishedDate: "2025-01-11",
      author: "Dr. Aisha Patel",
      authorRole: "NLP Research Director"
    },
    {
      id: 6,
      title: "Computer Vision Breakthrough 2025",
      description: "Next-generation computer vision achieving superhuman accuracy in object detection, recognition, and analysis",
      category: "Computer Vision",
      readTime: "11 min read",
      views: "2.1M",
      likes: "41K",
      image: "/images/computer-vision-2025.jpg",
      tags: ["Computer Vision", "Image Recognition", "AI Vision", "2025"],
      featured: false,
      publishedDate: "2025-01-10",
      author: "Dr. Michael Zhang",
      authorRole: "Computer Vision Lead"
    }
  ];

  const stats = [
    { label: "Total Breakthroughs", value: "47", icon: Brain },
    { label: "Research Papers", value: "156", icon: Award },
    { label: "Industry Applications", value: "89", icon: Target },
    { label: "Global Impact", value: "2.3B+", icon: Users }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 mr-2" />
            AI 2025 Breakthrough Content
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, research papers, and revolutionary technologies 
            that are reshaping the future of artificial intelligence in 2025.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-yellow-400" />
            Featured Breakthroughs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {breakthroughContent.filter(item => item.featured).map((item) => (
              <div key={item.id} className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">{item.readTime}</span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <span className="text-sm font-semibold">{item.likes}</span>
                      <span className="text-sm">likes</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {item.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{item.author}</div>
                        <div className="text-gray-400 text-xs">{item.authorRole}</div>
                      </div>
                    </div>
                    <Link 
                      to={`/breakthroughs/${item.id}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Brain className="w-6 h-6 mr-3 text-blue-400" />
            All Breakthrough Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakthroughContent.map((item) => (
              <div key={item.id} className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{item.readTime}</span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <span className="text-sm font-semibold">{item.likes}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-3 line-clamp-2 text-sm">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-xs">
                      {item.publishedDate} • {item.author}
                    </div>
                    <Link 
                      to={`/breakthroughs/${item.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                    >
                      Read
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with AI Breakthroughs
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest AI breakthroughs, research papers, and revolutionary technologies 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025BreakthroughContentShowcase;