import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Network, 
  Cpu, 
  Rocket, 
  Globe,
  ArrowRight,
  Star,
  Clock,
  User,
  TrendingUp,
  Sparkles,
  Play,
  BookOpen
} from 'lucide-react';
const EnhancedFeaturedContent2026 = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const featuredContent = [
    {
      id: 51,
      title: "Synthetic Intelligence 2026: Beyond Artificial Intelligence",
      excerpt: "The next evolution of AI that combines consciousness, creativity, and emotional intelligence in ways never seen before.",
      author: "Dr. Elena Rodriguez",
      authorRole: "Chief Synthetic Intelligence Officer",
      publishDate: "2026-01-25",
      readTime: "14 min read",
      category: "Synthetic Intelligence",
      tags: ["Synthetic Intelligence", "Consciousness", "Creativity", "AI Evolution"],
      featured: true,
      imageUrl: "/images/blog/synthetic-intelligence-2026.jpg",
      slug: "synthetic-intelligence-2026-beyond-artificial-intelligence",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      views: 12500,
      likes: 890
    },
    {
      id: 52,
      title: "Quantum Neural Fusion: The Future of Computing",
      excerpt: "Revolutionary technology that combines quantum computing with neural networks to create exponentially more powerful AI systems.",
      author: "Dr. Marcus Chen",
      authorRole: "Quantum Neural Research Director",
      publishDate: "2026-01-26",
      readTime: "16 min read",
      category: "Quantum Computing",
      tags: ["Quantum Neural", "Fusion Computing", "AI Breakthrough", "Quantum AI"],
      featured: true,
      imageUrl: "/images/blog/quantum-neural-fusion-2026.jpg",
      slug: "quantum-neural-fusion-future-computing",
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      views: 9800,
      likes: 756
    },
    {
      id: 53,
      title: "Interdimensional Data Networks: Computing Across Realities",
      excerpt: "Revolutionary networking technology that enables data transmission and processing across multiple dimensions and parallel universes.",
      author: "Dr. Sarah Kim",
      authorRole: "Interdimensional Technology Lead",
      publishDate: "2026-01-27",
      readTime: "18 min read",
      category: "Interdimensional Tech",
      tags: ["Interdimensional", "Data Networks", "Parallel Universes", "Reality Computing"],
      featured: true,
      imageUrl: "/images/blog/interdimensional-data-networks-2026.jpg",
      slug: "interdimensional-data-networks-computing-realities",
      icon: Network,
      color: "from-green-600 to-emerald-600",
      views: 11200,
      likes: 923
    },
    {
      id: 54,
      title: "Consciousness Transfer Technology: Digital Immortality",
      excerpt: "Revolutionary technology that enables human consciousness to be transferred to digital substrates, achieving true digital immortality.",
      author: "Dr. James Wilson",
      authorRole: "Consciousness Transfer Research Director",
      publishDate: "2026-01-28",
      readTime: "20 min read",
      category: "Consciousness Technology",
      tags: ["Consciousness Transfer", "Digital Immortality", "Brain-Computer Interface", "Human Enhancement"],
      featured: true,
      imageUrl: "/images/blog/consciousness-transfer-technology-2026.jpg",
      slug: "consciousness-transfer-technology-digital-immortality",
      icon: Cpu,
      color: "from-orange-600 to-red-600",
      views: 15600,
      likes: 1245
    },
    {
      id: 55,
      title: "Autonomous Business Ecosystems: Self-Managing Organizations",
      excerpt: "Revolutionary AI systems that can autonomously manage entire business operations, making decisions and driving growth without human intervention.",
      author: "Dr. Maria Rodriguez",
      authorRole: "Autonomous Business Systems Lead",
      publishDate: "2026-01-29",
      readTime: "15 min read",
      category: "Autonomous Systems",
      tags: ["Autonomous Business", "Self-Managing", "AI Organizations", "Business Automation"],
      featured: true,
      imageUrl: "/images/blog/autonomous-business-ecosystems-2026.jpg",
      slug: "autonomous-business-ecosystems-self-managing-organizations",
      icon: Rocket,
      color: "from-indigo-600 to-purple-600",
      views: 8900,
      likes: 678
    },
    {
      id: 56,
      title: "Reality Engineering: Shaping the Physical World with Code",
      excerpt: "Revolutionary technology that allows programmers to directly manipulate physical reality through advanced quantum programming interfaces.",
      author: "Dr. Alex Chen",
      authorRole: "Reality Engineering Architect",
      publishDate: "2026-01-30",
      readTime: "17 min read",
      category: "Reality Technology",
      tags: ["Reality Engineering", "Quantum Programming", "Physics Manipulation", "Code Reality"],
      featured: true,
      imageUrl: "/images/blog/reality-engineering-shaping-world-code.jpg",
      slug: "reality-engineering-shaping-physical-world-code",
      icon: Globe,
      color: "from-teal-600 to-blue-600",
      views: 13400,
      likes: 987
    }
  ];
  const tabs = [
    { id: 'featured', label: 'Featured', count: featuredContent.length },
    { id: 'trending', label: 'Trending', count: 12 },
    { id: 'latest', label: 'Latest', count: 8 },
    { id: 'popular', label: 'Popular', count: 15 }
  ];
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };
  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-semibold">REVOLUTIONARY CONTENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore the Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Technology
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover groundbreaking innovations, cutting-edge research, and revolutionary technologies 
              that are reshaping our world in 2026 and beyond.
            </p>
          </motion.div>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {tab.label}
              <span className="ml-2 text-sm opacity-75">({tab.count})</span>
            </button>
          ))}
        </div>
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${post.color}`}>
                      <post.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-semibold">4.9</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Play className="w-4 h-4" />
                      <span className="text-sm font-medium">Interactive Preview</span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-purple-400 text-sm font-semibold">{post.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.publishDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{formatNumber(post.views)} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{formatNumber(post.likes)} likes</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all group-hover:gap-3"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore More Revolutionary Content?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators and technology enthusiasts who are already exploring 
              the cutting-edge content that's shaping tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ultimate-content-showcase-2026"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                <Play className="w-5 h-5" />
                Explore All Content
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all"
              >
                <BookOpen className="w-5 h-5" />
                View Blog
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

export default EnhancedFeaturedContent2026;