import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  ExternalLink,
  TrendingUp,
  Award,
  Rocket,
  Globe,
  Brain,
  Atom,
  Zap
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.',
      author: 'Press Team',
      date: '2025-01-15',
      author: 'Dr. Kleber',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI Consciousness', 'Breakthrough', 'Innovation'],
      readTime: '5 min read'
    },
    {
      title: 'Quantum Computing Breakthrough: Solving Complex Optimization Problems',
      excerpt: 'Our quantum team achieves significant milestone in solving previously impossible computational challenges.',
      author: 'Research Team',
      date: '2025-01-12',
      category: 'Research',
      readTime: '6 min read',
      image: '/news/quantum-breakthrough.jpg',
      tags: ['Quantum Computing', 'Research', 'Breakthrough'],
      icon: <Atom className="w-6 h-6" />,
      featured: true
    },
    {
      title: 'Cybersecurity Partnership with Global Tech Leaders',
      excerpt: 'Strategic collaboration to advance AI-powered threat detection and response systems.',
      author: 'Partnerships Team',
      date: '2025-01-10',
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 45 },
    { id: 'ai', name: 'AI & Technology', icon: Brain, count: 18 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 12 },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 8 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 7 }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2025', name: '2025' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' }
  ];

  Newspaper, Calendar, User, Tag, ArrowRight, ExternalLink,
  TrendingUp, Lightbulb, Rocket, Globe, Shield, Zap,
  Clock, BookOpen, Video, Podcast, FileText, Search
} from 'lucide-react';
import Link from 'next/link';
  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>
          <meta name="description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies." />
        </Head>

      id: 1,
      title: "Zion Tech Group Launches Revolutionary Quantum AI Platform",
      excerpt: "Our latest quantum AI platform combines quantum computing with artificial intelligence to deliver unprecedented performance and capabilities for enterprise applications.",
      category: "Product Launch",
      author: "Zion Tech Group Team",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "/images/news/quantum-ai-launch.jpg",
      tags: ["Quantum Computing", "AI", "Product Launch"]
    },
    {
      id: 2,
      title: "New Partnership with Global Healthcare Consortium",
      excerpt: "We're excited to announce our strategic partnership with the Global Healthcare Consortium to revolutionize medical diagnostics using our AI-powered healthcare solutions.",
      category: "Partnership",
      author: "Business Development",
      date: "2025-01-12",
      readTime: "4 min read",
      image: "/images/news/healthcare-partnership.jpg",
      tags: ["Healthcare", "Partnership", "AI"]
    },
    {
      id: 3,
      title: "Breakthrough in Autonomous Cybersecurity Systems",
      excerpt: "Our research team has achieved a major breakthrough in autonomous cybersecurity, developing systems that can detect and respond to threats in real-time without human intervention.",
      category: "Research",
      author: "Research Team",
      date: "2025-01-10",
      readTime: "6 min read",
      image: "/images/news/cybersecurity-breakthrough.jpg",
      tags: ["Cybersecurity", "Research", "Autonomous Systems"]
    },
    {
      id: 4,
      title: "Space Technology Division Expands Operations",
      excerpt: "Our space technology division is expanding operations to support growing demand for satellite operations, space resource mining, and orbital analytics services.",
      category: "Company News",
      author: "Space Technology Team",
      date: "2025-01-08",
      readTime: "3 min read",
      image: "/images/news/space-expansion.jpg",
      tags: ["Space Technology", "Expansion", "Satellites"]
    },
    {
      id: 5,
      title: "AI Ethics and Governance Framework Released",
      excerpt: "We've published our comprehensive AI ethics and governance framework, setting new standards for responsible AI development and deployment in enterprise environments.",
      category: "Policy",
      author: "AI Ethics Team",
      date: "2025-01-05",
      readTime: "7 min read",
      image: "/images/news/ai-ethics-framework.jpg",
      tags: ["AI Ethics", "Governance", "Policy"]
    },
    {
      id: 6,
      title: "Financial Services Innovation Award Winner",
      excerpt: "Zion Tech Group has been recognized as the winner of the Financial Services Innovation Award for our quantum financial modeling and risk assessment platforms.",
      category: "Awards",
      author: "Marketing Team",
      date: "2025-01-03",
      readTime: "3 min read",
      image: "/images/news/financial-award.jpg",
      tags: ["Awards", "Financial Services", "Quantum Computing"]
export default function News() {
  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Quantum Computing Platform',
      excerpt: 'Our latest breakthrough combines artificial intelligence with quantum computing to solve previously unsolvable problems in cryptography, optimization, and scientific research.',
      category: 'Company News',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Quantum Computing', 'Innovation'],
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ArrowRight, Star, Users, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink
} from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary Quantum AI Fusion Platform',
      excerpt: 'Breakthrough platform combines quantum computing with artificial intelligence, creating unprecedented processing capabilities for solving humanity\'s most complex challenges.',
      date: '2025-01-15',
      category: 'Product Launch',
      readTime: '5 min read',
      image: '/images/news/quantum-ai-launch.jpg',
      featured: true,
      slug: 'quantum-ai-fusion-platform-launch'
    },
    {
      title: 'AI Consciousness Evolution Pro: The Future of Emotional Intelligence',
      excerpt: 'Our latest AI platform achieves genuine emotional intelligence and self-awareness, marking a new era in artificial consciousness development.',
      date: '2025-01-10',
      category: 'Technology',
      readTime: '4 min read',
      image: '/images/news/ai-consciousness.jpg',
      featured: false,
      slug: 'ai-consciousness-evolution-pro'
    },
    {
      title: 'Autonomous Business Operations: Transforming Enterprise Management',
      excerpt: 'Discover how our autonomous operations platform is revolutionizing business processes across industries with AI-powered decision making.',
      date: '2025-01-05',
      category: 'Business',
      readTime: '6 min read',
      image: '/images/news/autonomous-business.jpg',
      featured: false,
      slug: 'autonomous-business-operations'
    }
  ];

  const categories = [
    { name: 'All', count: newsArticles.length, active: true },
    { name: 'Product Launch', count: 1, active: false },
    { name: 'Technology', count: 1, active: false },
    { name: 'Business', count: 1, active: false }
  ];

  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Our latest breakthrough in artificial consciousness technology promises to revolutionize how businesses interact with AI systems, enabling unprecedented levels of understanding and collaboration.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/images/news/ai-consciousness-launch.jpg',
      featured: true,
      tags: ['AI Consciousness', 'Platform Launch', 'Innovation']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Achieving 1000+ Qubit Stability',
      excerpt: 'Our quantum research team has achieved a major milestone in quantum computing stability, opening new possibilities for complex computational problems.',
      category: 'quantum',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '/images/news/quantum-breakthrough.jpg',
      featured: true,
      tags: ['Quantum Computing', 'Research', 'Breakthrough']
    }
  ];

  const latestNews = [
    {
      id: 3,
      title: 'Enterprise AI Adoption: Trends and Best Practices for 2024',
      excerpt: 'Discover the key trends driving AI adoption in enterprise environments and learn best practices for successful implementation.',
      category: 'enterprise',
      author: 'Jennifer Kim',
      date: '2024-01-10',
      readTime: '4 min read',
      image: '/images/news/enterprise-ai-trends.jpg',
      tags: ['Enterprise AI', 'Best Practices', '2024 Trends']
    },
    {
      id: 4,
      title: 'The Future of Autonomous Business Systems',
      excerpt: 'Exploring how autonomous systems are reshaping business operations and what this means for the future of work.',
      category: 'research',
      author: 'Dr. Alex Thompson',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '/images/news/autonomous-systems.jpg',
      tags: ['Autonomous Systems', 'Future of Work', 'Innovation']
    },
    {
      id: 5,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How artificial intelligence is both creating new cybersecurity challenges and providing innovative solutions to protect digital assets.',
      category: 'enterprise',
      author: 'Marcus Johnson',
      date: '2024-01-05',
      readTime: '5 min read',
      image: '/images/news/ai-cybersecurity.jpg',
      tags: ['Cybersecurity', 'AI Security', 'Digital Protection']
    },
    {
      id: 6,
      title: 'Quantum Machine Learning: Bridging Two Revolutionary Technologies',
      excerpt: 'Our research team explores the intersection of quantum computing and machine learning, revealing exciting possibilities for the future.',
      category: 'quantum',
      author: 'Dr. Elena Petrova',
      date: '2024-01-03',
      readTime: '8 min read',
      image: '/images/news/quantum-ml.jpg',
      tags: ['Quantum ML', 'Research', 'Technology Convergence']
    }
  ];

  const industryInsights = [
    {
      id: 7,
      title: 'The Rise of Conscious AI: Ethical Considerations and Business Impact',
      excerpt: 'Examining the ethical implications of AI consciousness and how businesses can navigate this new frontier responsibly.',
      category: 'industry',
      author: 'Dr. Robert Chang',
      date: '2024-01-01',
      readTime: '6 min read',
      tags: ['AI Ethics', 'Business Impact', 'Consciousness']
    },
    {
      id: 8,
      title: 'Micro-SaaS Revolution: How Small Teams Are Building Big Solutions',
      excerpt: 'Exploring the growing trend of micro-SaaS companies and how they are disrupting traditional software markets.',
      category: 'industry',
      author: 'Lisa Wang',
      date: '2023-12-28',
      readTime: '4 min read',
      tags: ['Micro-SaaS', 'Startups', 'Software Industry']
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Consciousness Summit 2024',
      type: 'Conference',
      date: '2024-02-15',
      time: '9:00 AM - 6:00 PM',
      location: 'San Francisco, CA',
      description: 'Join industry leaders and researchers for a deep dive into the future of AI consciousness technology.',
      registration: 'https://ziontechgroup.com/events/ai-consciousness-summit-2024'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop',
      type: 'Workshop',
      date: '2024-02-22',
      time: '1:00 PM - 5:00 PM',
      location: 'Virtual',
      description: 'Hands-on workshop covering quantum computing fundamentals and practical applications.',
      registration: 'https://ziontechgroup.com/events/quantum-workshop'
    }
  ];

  const filteredNews = [...featuredNews, ...latestNews, ...industryInsights].filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'from-cyan-500 to-blue-500',
      quantum: 'from-purple-500 to-pink-500',
      enterprise: 'from-green-500 to-emerald-500',
      research: 'from-orange-500 to-red-500',
      industry: 'from-indigo-500 to-purple-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Latest News & Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Stay updated with the latest developments in AI consciousness, quantum computing, 
            and emerging technologies from Zion Tech Group.
          </motion.p>
          
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news and insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
=======
    'All News',
    'Company News',
    'Partnerships',
    'AI & Ethics',
    'Quantum Technology',
    'Space Technology',
    'Micro SAAS',
    'IT Services',
    'Metaverse',
    'Industry Insights'
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6"
          >
            Latest News & Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Stay updated with the latest developments in AI, quantum computing, space technology, and more from Zion Tech Group.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#featured" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Read Featured News</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#insights" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Industry Insights
            </a>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section id="featured" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Featured News
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most important announcements and breakthrough developments.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredNews.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <Newspaper className="w-16 h-16 text-purple-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={`/news/${article.id}`} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Recent News
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay current with our latest developments and industry updates.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {recentNews.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.date)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/news/${article.id}`} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section id="insights" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Industry Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep analysis and thought leadership on emerging technologies and industry trends.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {industryInsights.map((insight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-xs text-gray-400">{insight.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {insight.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  <span>Read Insight</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Latest News
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(2, 8).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Upcoming Events
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {event.type === 'Conference' ? <Globe className="w-8 h-8" /> : <Video className="w-8 h-8" />}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(event.date)} at {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    
                    <a
                      href={event.registration}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Register Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest news, insights, and updates delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Latest News</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our most recent developments and announcements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing.
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-400 mb-8">
                Subscribe to our newsletter for the latest news, insights, and technology updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pressReleases.map((release, index) => (
                <motion.article
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                      {release.category}
                    </span>
                    <span className="text-gray-400 text-sm">{release.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {release.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {release.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{release.date}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* News Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                News Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore news by category to find updates in your areas of interest.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {newsCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all duration-300 border border-white/20">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{category.count} articles</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Recent News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest announcements and developments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentNews.map((news, index) => (
                <motion.article
                  key={news.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                      {news.category}
                    </span>
                    <span className="text-gray-400 text-sm">{news.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{news.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{news.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Media Inquiries
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                For press inquiries, media interviews, or additional information, 
                please contact our communications team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Media Team
                  <Mic className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/press"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Press Kit
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Stay Informed?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our latest research, industry insights, and technology breakthroughs 
              that are shaping the future of AI and quantum computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Blog
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </UltraAdvancedFuturisticBackground>
  );
}
      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions about our news or want to learn more about our latest developments? Contact our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/about" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                About Zion Tech Group
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
      title: "Partnership with TechCorp Announced for Cloud Infrastructure",
      excerpt: "Strategic collaboration to deliver next-generation cloud automation solutions for enterprise clients worldwide.",
      date: "2025-01-18",
      category: "Partnerships",
      author: "Sarah Chen",
      readTime: "2 min read",
      image: "🤝"
    },
    {
      id: 3,
      title: "AI Ethics Guidelines Released for Responsible Development",
      excerpt: "Comprehensive framework ensuring our AI solutions are developed with transparency, fairness, and societal benefit in mind.",
      date: "2025-01-17",
      category: "Innovation",
      author: "Dr. Emily Watson",
      readTime: "4 min read",
      image: "⚖️"
    },
    {
      id: 4,
      title: "New Office Opening in Singapore",
      excerpt: "Expanding our global presence to better serve clients in the Asia-Pacific region with local expertise and support.",
      date: "2025-01-16",
      category: "Company News",
      author: "Marcus Rodriguez",
      readTime: "2 min read",
      image: "🌏"
    },
    {
      id: 5,
      title: "Machine Learning Model Achieves 99.7% Accuracy",
      excerpt: "Breakthrough in predictive analytics demonstrates our commitment to pushing the boundaries of AI performance.",
      date: "2025-01-15",
      category: "Technology",
      author: "Dr. James Wilson",
      readTime: "5 min read",
      image: "🧠"
    },
    {
      id: 6,
      title: "Annual Sustainability Report Published",
      excerpt: "Comprehensive overview of our environmental impact and commitment to sustainable technology development.",
      date: "2025-01-14",
      category: "Sustainability",
      author: "Lisa Park",
      readTime: "6 min read",
      image: "🌱"
    },
    {
      id: 7,
      title: "Customer Success Story: Retail Automation",
      excerpt: "How we helped a major retailer increase efficiency by 300% through intelligent automation systems.",
      date: "2025-01-13",
      category: "Case Studies",
      author: "Alex Thompson",
      readTime: "4 min read",
      image: "📊"
    },
    {
      id: 8,
      title: "New Research Paper on Autonomous Systems",
      excerpt: "Published in leading AI journal, our research explores the future of self-managing technology infrastructure.",
      date: "2025-01-12",
      category: "Research",
      author: "Prof. Maria Garcia",
      readTime: "7 min read",
      image: "📚"
    }
  ];

  const categories = ["All", "Company News", "Partnerships", "Innovation", "Technology", "Sustainability", "Case Studies", "Research"];

  return (
    <>
      <Head>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, product launches, and industry insights from Zion Tech Group. Discover breakthroughs in AI, quantum computing, and technology innovation." />
        <meta name="keywords" content="news, updates, AI news, quantum computing, technology news, company updates, industry insights" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              Latest News & Updates
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Stay informed about the latest breakthroughs in AI, quantum computing, and cutting-edge technology from Zion Tech Group.
            </motion.p>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-300 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        {article.category}
                      </span>
                      <Link 
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}