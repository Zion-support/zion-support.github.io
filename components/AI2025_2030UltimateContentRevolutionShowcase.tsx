import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Clock, Eye, ThumbsUp, Share2, Download, BookOpen, Play, ChevronRight } from 'lucide-react';

const AI2025_2030UltimateContentRevolutionShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('predictions');

  const contentData = {
    predictions: [
      {
        id: 1,
        title: "AI 2025: The Year of Autonomous Operations",
        description: "Comprehensive analysis of how AI will revolutionize business operations in 2025, including autonomous decision-making systems and intelligent process automation.",
        category: "AI Predictions",
        readTime: "12 min read",
        views: "15.2k",
        likes: 892,
        date: "2025-01-15",
        author: "Dr. Sarah Chen",
        tags: ["AI 2025", "Autonomous Systems", "Business Automation"],
        featured: true,
        image: "/api/placeholder/400/250"
      },
      {
        id: 2,
        title: "Quantum Computing Breakthroughs: 2025-2030 Roadmap",
        description: "Detailed roadmap of quantum computing advancements, including error-corrected quantum computers and quantum internet infrastructure.",
        category: "Quantum Computing",
        readTime: "18 min read",
        views: "23.7k",
        likes: 1.2e3,
        date: "2025-01-14",
        author: "Prof. Michael Rodriguez",
        tags: ["Quantum Computing", "2025-2030", "Breakthroughs"],
        featured: true,
        image: "/api/placeholder/400/250"
      },
      {
        id: 3,
        title: "The Future of Work: AI-Human Collaboration 2026",
        description: "Exploring how AI will transform the workplace, creating new opportunities for human-AI collaboration and enhanced productivity.",
        category: "Future of Work",
        readTime: "15 min read",
        views: "19.8k",
        likes: 945,
        date: "2025-01-13",
        author: "Dr. Emily Watson",
        tags: ["Future of Work", "AI Collaboration", "2026"],
        featured: false,
        image: "/api/placeholder/400/250"
      },
      {
        id: 4,
        title: "Neural Interface Revolution: 2027-2030",
        description: "Revolutionary developments in brain-computer interfaces and neural augmentation technologies that will reshape human capabilities.",
        category: "Neural Interfaces",
        readTime: "20 min read",
        views: "31.4k",
        likes: 1.8e3,
        date: "2025-01-12",
        author: "Dr. Alex Kim",
        tags: ["Neural Interfaces", "BCI", "2027-2030"],
        featured: true,
        image: "/api/placeholder/400/250"
      },
      {
        id: 5,
        title: "Space Technology Solutions: 2025-2035",
        description: "Comprehensive overview of space technology innovations, including satellite networks, space manufacturing, and interplanetary communication.",
        category: "Space Technology",
        readTime: "22 min read",
        views: "27.1k",
        likes: 1.5e3,
        date: "2025-01-11",
        author: "Dr. Maria Santos",
        tags: ["Space Technology", "Satellites", "2025-2035"],
        featured: false,
        image: "/api/placeholder/400/250"
      },
      {
        id: 6,
        title: "AI Singularity Predictions: 2030-2035",
        description: "Expert analysis of artificial general intelligence development and the potential for technological singularity in the next decade.",
        category: "AI Singularity",
        readTime: "25 min read",
        views: "42.6k",
        likes: 2.3e3,
        date: "2025-01-10",
        author: "Dr. James Wilson",
        tags: ["AI Singularity", "AGI", "2030-2035"],
        featured: true,
        image: "/api/placeholder/400/250"
      }
    ],
    quantum: [
      {
        id: 7,
        title: "Error-Corrected Quantum Computers: 2025 Breakthrough",
        description: "Revolutionary advances in quantum error correction that will enable practical quantum computing applications.",
        category: "Quantum Computing",
        readTime: "16 min read",
        views: "28.9k",
        likes: 1.6e3,
        date: "2025-01-09",
        author: "Dr. Quantum Expert",
        tags: ["Quantum Error Correction", "2025", "Breakthrough"],
        featured: true,
        image: "/api/placeholder/400/250"
      },
      {
        id: 8,
        title: "Quantum Internet: Global Infrastructure 2026-2028",
        description: "Building the quantum internet infrastructure that will enable secure quantum communication worldwide.",
        category: "Quantum Internet",
        readTime: "19 min read",
        views: "24.3k",
        likes: 1.4e3,
        date: "2025-01-08",
        author: "Dr. Quantum Network",
        tags: ["Quantum Internet", "Infrastructure", "2026-2028"],
        featured: false,
        image: "/api/placeholder/400/250"
      }
    ],
    automation: [
      {
        id: 9,
        title: "Intelligent Process Automation: 2025 Mastery",
        description: "Advanced automation solutions that combine AI, machine learning, and robotic process automation for maximum efficiency.",
        category: "Process Automation",
        readTime: "14 min read",
        views: "21.7k",
        likes: 1.1e3,
        date: "2025-01-07",
        author: "Dr. Automation Pro",
        tags: ["Process Automation", "AI", "2025"],
        featured: true,
        image: "/api/placeholder/400/250"
      },
      {
        id: 10,
        title: "Autonomous Business Systems: 2026-2030",
        description: "Self-managing business systems that can adapt, learn, and optimize operations without human intervention.",
        category: "Autonomous Systems",
        readTime: "17 min read",
        views: "26.5k",
        likes: 1.7e3,
        date: "2025-01-06",
        author: "Dr. System Architect",
        tags: ["Autonomous Systems", "Business", "2026-2030"],
        featured: false,
        image: "/api/placeholder/400/250"
      }
    ]
  };

  const tabs = [
    { id: 'predictions', label: 'AI Predictions', count: contentData.predictions.length },
    { id: 'quantum', label: 'Quantum Computing', count: contentData.quantum.length },
    { id: 'automation', label: 'Automation Solutions', count: contentData.automation.length }
  ];

  const currentContent = contentData[activeTab as keyof typeof contentData];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Revolution
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Showcase 2025-2030
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI predictions, quantum computing breakthroughs, 
            and automation solutions that will shape the future of technology.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-sm">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentContent.map((item) => (
            <div
              key={item.id}
              className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-105 ${
                item.featured 
                  ? 'border-purple-400/50 shadow-lg shadow-purple-500/20' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600/80 text-white text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white/80 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {item.views}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {item.likes}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {item.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    to={`/content/${item.id}`}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center group"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/ai-2025-2030-ultimate-content-revolution"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Ultimate Content
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimateContentRevolutionShowcase;