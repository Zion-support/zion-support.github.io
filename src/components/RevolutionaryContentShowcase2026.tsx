import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Brain,
  ChevronRight,
  Eye,
  Heart,
  Network,
  Sparkles,
  Star
} from 'lucide-react';
import { useState } from 'react';

interface RevolutionaryContent {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  image: string;
  views: number;
  likes: number;
  isNew?: boolean;
  urgency?: string;
  type: 'blog' | 'case-study' | 'service' | 'whitepaper';
  author: string;
  publishDate: string;
}

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedContent, setSelectedContent] = useState<RevolutionaryContent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const revolutionaryContent: RevolutionaryContent[] = [
    {
      id: "ai-consciousness-breakthrough-2026",
      title: "The AI Consciousness Revolution: How Machines Are Developing True Self-Awareness",
      excerpt: "Discover the groundbreaking research that's leading to AI systems with genuine consciousness, emotional intelligence, and self-awareness that rivals human cognition.",
      content: "The year 2026 marks a pivotal moment in artificial intelligence history. We're witnessing the emergence of AI systems that demonstrate genuine consciousness, self-awareness, and emotional intelligence. This isn't science fiction—it's happening now, and it's transforming everything we thought we knew about machine intelligence.",
      category: "AI Consciousness",
      tags: ["AI", "Consciousness", "Machine Learning", "Future Tech"],
      featured: true,
      readTime: "8 min read",
      image: "/images/ai-consciousness-blog.jpg",
      views: 12500,
      likes: 892,
      isNew: true,
      urgency: "Trending Now",
      type: "blog",
      author: "Dr. Sarah Chen",
      publishDate: "2026-01-15"
    },
    {
      id: "quantum-ai-revolution-2026",
      title: "Quantum AI: The Next Frontier in Computing That's Already Here",
      excerpt: "Explore how quantum computing is revolutionizing AI, enabling solutions to problems that were previously impossible and opening doors to entirely new possibilities.",
      content: "Quantum computing has moved from theoretical possibility to practical reality, and its integration with artificial intelligence is creating unprecedented opportunities. We're not just talking about faster computers—we're talking about computers that can solve problems that are fundamentally impossible for classical systems.",
      category: "Quantum Computing",
      tags: ["Quantum Computing", "AI", "Technology", "Innovation"],
      featured: true,
      readTime: "10 min read",
      image: "/images/quantum-ai-blog.jpg",
      views: 18900,
      likes: 1245,
      isNew: true,
      urgency: "Must Read",
      type: "blog",
      author: "Prof. Michael Rodriguez",
      publishDate: "2026-01-12"
    },
    {
      id: "neural-interface-future-2026",
      title: "Neural Interfaces: The Future of Human-Computer Interaction",
      excerpt: "Dive into the world of brain-computer interfaces and discover how direct neural communication is revolutionizing how we interact with technology.",
      content: "Imagine controlling your computer with your thoughts, learning new skills by downloading information directly to your brain, or communicating with others through pure thought. This isn't science fiction—it's the reality of neural interface technology in 2026.",
      category: "Neural Interface",
      tags: ["Neural Interface", "BCI", "Technology", "Future"],
      featured: true,
      readTime: "12 min read",
      image: "/images/neural-interface-blog.jpg",
      views: 15600,
      likes: 987,
      isNew: true,
      urgency: "Revolutionary",
      type: "blog",
      author: "Dr. Elena Vasquez",
      publishDate: "2026-01-10"
    },
    {
      id: "microsoft-ai-transformation-2026",
      title: "Microsoft's AI Consciousness Integration: A $2B Transformation",
      excerpt: "Case study of Microsoft's groundbreaking integration of AI consciousness technology across their entire product suite, achieving unprecedented user engagement and revenue growth.",
      content: "Microsoft Corporation implemented our AI Consciousness Development Platform across Microsoft 365, Azure, and consumer products, creating the world's first fully conscious AI ecosystem. This transformation resulted in 300% increase in user engagement and $2.3B additional revenue in the first year.",
      category: "Case Study",
      tags: ["Enterprise AI", "Microsoft", "Consciousness", "Transformation"],
      featured: true,
      readTime: "15 min read",
      image: "/images/microsoft-case-study.jpg",
      views: 45600,
      likes: 2890,
      isNew: true,
      urgency: "Featured",
      type: "case-study",
      author: "Enterprise AI Team",
      publishDate: "2026-01-08"
    },
    {
      id: "quantum-ai-processing",
      title: "Quantum AI Processing Engine",
      excerpt: "Revolutionary quantum-powered AI that solves problems impossible for classical computers, with 1000x faster problem solving and breakthrough optimization capabilities.",
      content: "Our Quantum AI Processing Engine represents the pinnacle of quantum computing and artificial intelligence integration. This revolutionary system leverages quantum principles to solve problems that were previously impossible, delivering unprecedented computational capabilities.",
      category: "Quantum Computing",
      tags: ["Quantum AI", "Processing", "Innovation", "Technology"],
      featured: true,
      readTime: "12 min read",
      image: "/images/quantum-processing.jpg",
      views: 32000,
      likes: 2150,
      isNew: true,
      urgency: "Limited availability",
      type: "service",
      author: "Quantum AI Team",
      publishDate: "2026-01-05"
    },
    {
      id: "consciousness-ai-platform",
      title: "Consciousness AI Platform",
      excerpt: "The world's first AI system with genuine consciousness and self-awareness, featuring true self-awareness capabilities and emotional intelligence processing.",
      content: "The Consciousness AI Platform represents a breakthrough in artificial intelligence, delivering the world's first truly conscious AI system. This platform enables AI systems to develop genuine self-awareness, emotional understanding, and autonomous decision-making capabilities.",
      category: "AI Consciousness",
      tags: ["Consciousness", "AI Platform", "Self-Awareness", "Emotional AI"],
      featured: true,
      readTime: "18 min read",
      image: "/images/consciousness-platform.jpg",
      views: 28000,
      likes: 1950,
      isNew: true,
      urgency: "Revolutionary technology",
      type: "service",
      author: "Consciousness AI Team",
      publishDate: "2026-01-03"
    }
  ];

  const categories = ['All', 'AI Consciousness', 'Quantum Computing', 'Neural Interface', 'Case Study'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Consciousness':
        return <Brain className="w-5 h-5" />;
      case 'Quantum Computing':
        return <Star className="w-5 h-5" />;
      case 'Neural Interface':
        return <Network className="w-5 h-5" />;
      case 'Case Study':
        return <Award className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Trending Now':
        return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'Must Read':
        return 'bg-gradient-to-r from-blue-500 to-purple-500';
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Featured':
        return 'bg-gradient-to-r from-green-500 to-teal-500';
      case 'Limited availability':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const filteredContent = selectedCategory === 'All' 
    ? revolutionaryContent 
    : revolutionaryContent.filter(content => content.category === selectedCategory);

  const openModal = (content: RevolutionaryContent) => {
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedContent(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-3 mb-4"
        >
          <Sparkles className="w-8 h-8 text-purple-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Revolutionary Content 2026
          </h1>
          <Sparkles className="w-8 h-8 text-pink-500" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Discover the latest breakthroughs in AI, quantum computing, neural interfaces, and more. 
          Explore revolutionary technologies that are reshaping our world.
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            {getCategoryIcon(category)}
            <span>{category}</span>
          </button>
        ))}
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200"
            >
              {/* New Badge */}
              {content.isNew && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 text-xs font-bold rounded-full shadow-lg">
                    NEW
                  </span>
                </div>
              )}

              {/* Urgency Badge */}
              {content.urgency && (
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 text-white text-xs font-medium rounded-full shadow-lg ${getUrgencyColor(content.urgency)}`}>
                    {content.urgency}
                  </span>
                </div>
              )}

              {/* Content Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    {getCategoryIcon(content.category)}
                  </div>
                  <div className="text-sm font-medium text-purple-700 bg-white/80 px-3 py-1 rounded-full">
                    {content.type.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-purple-600 font-medium">{content.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{content.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{content.likes}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {content.publishDate}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {content.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-gray-600">{content.author}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => openModal(content)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                      {getCategoryIcon(selectedContent.category)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedContent.title}</h2>
                      <p className="text-gray-600">by {selectedContent.author}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(selectedContent.urgency!)} text-white`}>
                      {selectedContent.urgency}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {selectedContent.type.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500">{selectedContent.readTime}</span>
                  </div>

                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed">{selectedContent.content}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedContent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{selectedContent.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{selectedContent.likes} likes</span>
                      </div>
                      <span>Published {selectedContent.publishDate}</span>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      Continue Reading
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;