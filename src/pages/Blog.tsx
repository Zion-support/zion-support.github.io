
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Blog: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI: Autonomous Systems in 2025',
      excerpt: 'Explore how autonomous AI systems are revolutionizing industries and what this means for the future of business and technology.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Technology',
      image: '/images/blog/ai-future.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: What\'s Next?',
      excerpt: 'Discover the latest developments in quantum computing and how they\'re paving the way for unprecedented computational power.',
      author: 'Dr. Michael Rodriguez',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Quantum Technology',
      image: '/images/blog/quantum-computing.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Learn about emerging cybersecurity challenges and how AI-powered solutions are helping organizations stay protected.',
      author: 'Alex Thompson',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/images/blog/cybersecurity-ai.jpg',
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Building Scalable AI Infrastructure: Best Practices',
      excerpt: 'Essential guidelines for creating robust and scalable AI infrastructure that can grow with your business needs.',
      author: 'Jennifer Lee',
      date: '2025-01-08',
      readTime: '5 min read',
      category: 'AI Infrastructure',
      image: '/images/blog/ai-infrastructure.jpg'
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing in IoT Applications',
      excerpt: 'How edge computing is transforming IoT deployments and enabling real-time decision making at the network edge.',
      author: 'David Kim',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'IoT & Edge Computing',
      image: '/images/blog/edge-computing.jpg'
    },
    {
      id: 6,
      title: 'Machine Learning in Healthcare: Current Applications and Future Prospects',
      excerpt: 'Exploring how ML is revolutionizing healthcare delivery and improving patient outcomes across various medical fields.',
      author: 'Dr. Emily Watson',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'Healthcare AI',
      image: '/images/blog/healthcare-ml.jpg'
    },
    {
      id: 7,
      title: 'Blockchain and AI: Synergistic Technologies for the Future',
      excerpt: 'Understanding how blockchain and AI can work together to create more secure, transparent, and intelligent systems.',
      author: 'Marcus Johnson',
      date: '2024-12-30',
      readTime: '7 min read',
      category: 'Blockchain & AI',
      image: '/images/blog/blockchain-ai.jpg'
    },
    {
      id: 8,
      title: 'Sustainable Technology: Green AI and Energy-Efficient Computing',
      excerpt: 'How AI is helping create more sustainable computing solutions and reduce the environmental impact of technology.',
      author: 'Lisa Chen',
      date: '2024-12-28',
      readTime: '6 min read',
      category: 'Sustainable Tech',
      image: '/images/blog/green-ai.jpg'
    },
    {
      id: 9,
      title: 'The Evolution of Natural Language Processing',
      excerpt: 'From rule-based systems to transformer models: tracing the remarkable evolution of NLP technology.',
      author: 'Dr. Robert Singh',
      date: '2024-12-25',
      readTime: '8 min read',
      category: 'NLP & AI',
      image: '/images/blog/nlp-evolution.jpg'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Quantum Technology',
    'Cybersecurity',
    'AI Infrastructure',
    'IoT & Edge Computing',
    'Healthcare AI',
    'Blockchain & AI',
    'Sustainable Tech',
    'NLP & AI'
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000'));
      case 'trending':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

=======
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight,
  BookOpen,
  Brain,
  Zap,
  Shield,
  Cpu,
  Network,
  Globe,
  TrendingUp,
  Star,
  Eye,
  Heart,
  Share2,
  Filter,
  ChevronDown
} from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All Articles', icon: BookOpen, count: 156, color: 'from-gray-500 to-slate-500' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 45, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Zap, count: 23, color: 'from-blue-500 to-cyan-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 38, color: 'from-red-500 to-orange-500' },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: 29, color: 'from-green-500 to-emerald-500' },
    { id: '5g', name: '5G & Networks', icon: Network, count: 18, color: 'from-indigo-500 to-blue-500' },
    { id: 'industry', name: 'Industry Insights', icon: Globe, count: 33, color: 'from-yellow-500 to-orange-500' },
    { id: 'trends', name: 'Tech Trends', icon: TrendingUp, count: 28, color: 'from-pink-500 to-rose-500' }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "The Future of AI: Quantum-Enhanced Machine Learning in 2025",
      excerpt: "Discover how quantum computing is revolutionizing artificial intelligence, enabling breakthroughs in drug discovery, financial modeling, and autonomous systems that were previously impossible.",
      author: "Dr. Sarah Chen",
      authorAvatar: "SC",
      publishDate: "2025-01-15",
      readTime: "8 min read",
      category: "ai",
      tags: ["AI", "Quantum Computing", "Machine Learning", "Future Tech"],
      image: "/api/placeholder/600/400",
      views: "12.5k",
      likes: 847,
      featured: true
    },
    {
      id: 2,
      title: "SOC2 Compliance Automation: A Complete Guide for Enterprises",
      excerpt: "Learn how automated compliance management can reduce audit time by 80% while improving security posture and reducing human error in regulatory reporting.",
      author: "Michael Rodriguez",
      authorAvatar: "MR",
      publishDate: "2025-01-12",
      readTime: "12 min read",
      category: "cybersecurity",
      tags: ["SOC2", "Compliance", "Automation", "Security"],
      image: "/api/placeholder/600/400",
      views: "8.9k",
      likes: 623,
      featured: true
    },
    {
      id: 3,
      title: "5G Enterprise Networks: Transforming Business Connectivity",
      excerpt: "Explore how 5G technology is enabling new business models, from autonomous factories to real-time healthcare monitoring, and learn what it takes to implement enterprise-grade 5G solutions.",
      author: "Lisa Thompson",
      authorAvatar: "LT",
      publishDate: "2025-01-10",
      readTime: "10 min read",
      category: "5g",
      tags: ["5G", "Enterprise", "Connectivity", "IoT"],
      image: "/api/placeholder/600/400",
      views: "7.2k",
      likes: 445,
      featured: true
    }
  ];

  const recentArticles = [
    {
      id: 4,
      title: "Building Autonomous Business Operations: A Step-by-Step Guide",
      excerpt: "Transform your business processes with AI-powered automation. Learn the key steps to implement autonomous operations that can reduce costs by 40% and improve efficiency by 60%.",
      author: "David Kim",
      authorAvatar: "DK",
      publishDate: "2025-01-08",
      readTime: "15 min read",
      category: "ai",
      tags: ["AI", "Automation", "Business Operations", "Digital Transformation"],
      image: "/api/placeholder/400/250",
      views: "5.8k",
      likes: 312
    },
    {
      id: 5,
      title: "Quantum Neural Networks: The Next Frontier in AI",
      excerpt: "Dive deep into quantum neural networks and discover how they're solving complex problems in cryptography, optimization, and scientific research that classical computers cannot handle.",
      author: "Dr. Elena Petrov",
      authorAvatar: "EP",
      publishDate: "2025-01-06",
      readTime: "18 min read",
      category: "quantum",
      tags: ["Quantum Computing", "Neural Networks", "AI", "Research"],
      image: "/api/placeholder/400/250",
      views: "4.6k",
      likes: 289
    },
    {
      id: 6,
      title: "Micro SAAS Solutions: Scaling Your Business with Custom Software",
      excerpt: "Discover how micro SAAS solutions can help small and medium businesses compete with enterprise-level technology while maintaining flexibility and cost-effectiveness.",
      author: "Alex Johnson",
      authorAvatar: "AJ",
      publishDate: "2025-01-04",
      readTime: "11 min read",
      category: "industry",
      tags: ["SAAS", "Business", "Software", "Scaling"],
      image: "/api/placeholder/400/250",
      views: "3.9k",
      likes: 201
    },
    {
      id: 7,
      title: "Edge Computing in IoT: Reducing Latency for Real-Time Applications",
      excerpt: "Learn how edge computing is revolutionizing IoT applications by bringing computation closer to data sources, enabling real-time decision making in autonomous vehicles and smart cities.",
      author: "Rachel Green",
      authorAvatar: "RG",
      publishDate: "2025-01-02",
      readTime: "9 min read",
      category: "infrastructure",
      tags: ["Edge Computing", "IoT", "Real-Time", "Infrastructure"],
      image: "/api/placeholder/400/250",
      views: "3.2k",
      likes: 178
    },
    {
      id: 8,
      title: "AI-Powered IT Asset Management: Maximizing ROI on Technology Investments",
      excerpt: "Discover how AI can transform your IT asset management, from predictive maintenance to cost optimization, helping you get more value from your technology investments.",
      author: "Carlos Mendez",
      authorAvatar: "CM",
      publishDate: "2024-12-30",
      readTime: "13 min read",
      category: "ai",
      tags: ["AI", "IT Management", "Asset Management", "ROI"],
      image: "/api/placeholder/400/250",
      views: "2.8k",
      likes: 156
    },
    {
      id: 9,
      title: "The Rise of Quantum-Safe Cryptography: Preparing for the Future",
      excerpt: "As quantum computers become more powerful, traditional encryption methods are at risk. Learn about quantum-safe cryptography and how to future-proof your security infrastructure.",
      author: "Dr. James Wilson",
      authorAvatar: "JW",
      publishDate: "2024-12-28",
      readTime: "16 min read",
      category: "cybersecurity",
      tags: ["Quantum", "Cryptography", "Security", "Future-Proofing"],
      image: "/api/placeholder/400/250",
      views: "2.5k",
      likes: 134
    }
  ];

  const allArticles = [...featuredArticles, ...recentArticles];

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedArticles = filteredArticles.sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return b.views.localeCompare(a.views, undefined, { numeric: true });
      case 'trending':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

=======
<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Insights & Innovation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Stay ahead of the curve with expert insights on AI, quantum computing, 
            cybersecurity, and the latest technology trends.
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
=======
      {/* Featured Posts */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Featured Articles
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-6xl text-purple-400/30">📚</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <UserIcon className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Read More</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Latest Articles
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-4xl text-purple-400/30">📖</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Read Article</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Never Miss an Update
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get the latest insights delivered to your inbox. Stay informed about AI breakthroughs, 
              technology trends, and industry developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
=======
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
