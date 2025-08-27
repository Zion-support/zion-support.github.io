import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Tag,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Code,
  Network,
  Atom,
  TrendingUp,
  Lightbulb,
  Zap,
  Globe,
  Database,
  Server,
  Cpu,
  Lock,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 5 },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket, count: 3 },
    { id: 'development', name: 'Development', icon: Code, count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.",
      author: "Kleber",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Business", "Technology", "Trends"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures that every small business should implement to protect against cyber threats.",
      author: "Zion Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cybersecurity",
      tags: ["Security", "Small Business", "Best Practices", "Cyber Threats"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step approach to migrating your business to the cloud while minimizing downtime and risks.",
      author: "Zion Team",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Cloud & DevOps",
      tags: ["Cloud", "Migration", "DevOps", "Strategy"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 4,
      title: 'Cloud-Native Development: Building Scalable Applications for the Future',
      excerpt: 'Master the principles of cloud-native development and learn how to build applications that scale effortlessly in modern cloud environments.',
      author: 'Alex Rodriguez',
      authorRole: 'Lead Cloud Architect',
      publishDate: '2025-01-08',
      readTime: '7 min read',
      category: 'Cloud & DevOps',
      tags: ['Cloud Native', 'Microservices', 'Kubernetes', 'Scalability'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=400'
    },
    {
      id: 5,
      title: 'The Rise of Quantum Computing: What Businesses Need to Know',
      excerpt: 'Explore the revolutionary potential of quantum computing and how it will transform industries from finance to pharmaceuticals.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Quantum Research Lead',
      publishDate: '2025-01-06',
      readTime: '8 min read',
      category: 'Emerging Tech',
      tags: ['Quantum Computing', 'Innovation', 'Research', 'Future Tech'],
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=400'
    },
    {
      id: 6,
      title: 'AI-Powered Cybersecurity: The Next Generation of Threat Detection',
      excerpt: 'Discover how artificial intelligence is revolutionizing cybersecurity and providing unprecedented protection against sophisticated attacks.',
      author: 'Marcus Johnson',
      authorRole: 'Cybersecurity Expert',
      publishDate: '2025-01-04',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['AI Security', 'Threat Detection', 'Machine Learning', 'Cyber Defense'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=400'
    }
  ];

  const popularTags = [
    'AI & Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Blockchain',
    'IoT', 'DevOps', 'Digital Transformation', 'Data Analytics', 'Machine Learning',
    'Quantum Computing', 'Edge Computing', '5G Technology', 'AR/VR', 'FinTech'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' ||
                           post.category.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Zion Tech Blog
            </h1>
            <p className="text-xl lg:text-2xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Insights, trends, and expert analysis on the latest in technology, AI, and digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-zion-slate-light text-xl">
              Find insights in your area of interest
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan/20 border-zion-cyan text-zion-cyan'
                    : 'bg-zion-slate border-zion-slate-light/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <category.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-medium">{category.name}</div>
                <div className="text-xs opacity-70">{category.count} posts</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
            </h2>
            <p className="text-zion-slate-light text-xl">
              {filteredPosts.length} articles found
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-zion-slate-dark rounded-xl overflow-hidden border border-zion-slate-light/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/90 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-zion-slate-light/10 text-zion-slate-light text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300 font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tags Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Popular Topics</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Explore articles by topic and discover insights that matter to your business
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <motion.button
                key={tag}
                className="px-6 py-3 bg-zion-blue-light/10 border border-zion-purple/30 rounded-lg text-zion-slate-light hover:bg-zion-purple/20 hover:border-zion-purple/50 hover:text-white transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Tag className="inline h-4 w-4 mr-2" />
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest technology insights, industry trends, and expert analysis delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="px-8 py-3 bg-white text-zion-purple font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-zion-slate-light text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help drive your digital transformation and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-purple hover:bg-zion-purple/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="border-2 border-zion-purple/30 text-white hover:bg-zion-purple/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
