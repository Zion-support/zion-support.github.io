import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  Eye,
  TrendingUp,
  Sparkles,
  Brain,
  Rocket,
  Star,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function BlogPostNewContent() {
  const relatedPosts = [
    {
      title: "The Future of AI in Healthcare",
      excerpt: "How AI is revolutionizing medical diagnostics and patient care",
      date: "2024-01-15",
      readTime: "8 min",
      href: "/blog/ai-healthcare-future"
    },
    {
      title: "Quantum Computing Meets AI",
      excerpt: "Exploring the intersection of quantum computing and artificial intelligence",
      date: "2024-01-10",
      readTime: "12 min",
      href: "/blog/quantum-ai-computing"
    },
    {
      title: "Legal Tech Revolution",
      excerpt: "How AI is transforming the legal industry",
      date: "2024-01-05",
      readTime: "6 min",
      href: "/blog/legal-tech-revolution"
    }
  ];

  const newServices = [
    {
      name: "AI Legal Document Generator",
      description: "Automatically generate legal documents with AI-powered templates",
      category: "Legal Tech",
      href: "/services/ai-legal-document-generator"
    },
    {
      name: "AI Healthcare Diagnostics",
      description: "Advanced medical AI for diagnostic imaging and patient analysis",
      category: "Healthcare",
      href: "/services/ai-healthcare-diagnostics"
    },
    {
      name: "Quantum AI Cybersecurity",
      description: "Next-generation cybersecurity powered by quantum computing",
      category: "Cybersecurity",
      href: "/services/quantum-ai-cybersecurity"
    },
    {
      name: "AI Financial Trading Platform",
      description: "Advanced algorithmic trading with AI-powered market analysis",
      category: "FinTech",
      href: "/services/ai-financial-trading"
    }
  ];

  return (
    <>
      <SEO 
        title="Introducing 50+ New AI Services: The Future of Technology is Here - Zion Tech Group"
        description="Discover our latest AI innovations including Legal AI, Healthcare Diagnostics, Quantum Cybersecurity, and Financial Trading platforms. Explore the future of technology today."
        keywords="new AI services, AI innovations, legal AI, healthcare AI, quantum cybersecurity, financial AI, artificial intelligence, technology solutions"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Header */}
        <div className="bg-slate-800/50 border-b border-slate-700/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold rounded-full">
                <Sparkles className="w-3 h-3 mr-1" />
                NEW RELEASE
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold rounded-full">
                <Star className="w-3 h-3 mr-1" />
                FEATURED
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🚀 Introducing 50+ New AI Services: The Future of Technology is Here
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>By Zion Tech Group Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 20, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                <span>2,847 views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We're thrilled to announce the launch of our most comprehensive AI service portfolio yet. 
              Today, Zion Tech Group is introducing <strong className="text-white">50+ revolutionary AI services</strong> that span 
              across healthcare, legal technology, cybersecurity, financial services, and beyond.
            </p>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-cyan-400" />
                What's New This Release
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>AI Legal Document Generator with compliance checking</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Healthcare Diagnostics Platform with medical imaging AI</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Quantum AI Cybersecurity Suite for ultra-secure protection</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Advanced Financial Trading Platform with algorithmic trading</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Featured Services */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              🌟 Featured New Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Main Content */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg prose-invert max-w-none mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              The Technology Behind Our Innovations
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Our new AI services leverage cutting-edge technologies including large language models, 
              computer vision, natural language processing, and quantum computing principles. Each service 
              is built with enterprise-grade security, scalability, and performance in mind.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">
              AI Legal Document Generator
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our AI Legal Document Generator revolutionizes how legal professionals create documents. 
              Using advanced natural language processing and machine learning, it can generate contracts, 
              agreements, and legal documents in minutes instead of hours. The system includes compliance 
              checking, risk assessment, and template libraries for various legal scenarios.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">
              Healthcare Diagnostics Platform
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              The Healthcare Diagnostics Platform combines medical imaging AI with patient data analysis 
              to assist healthcare professionals in making more accurate diagnoses. Our AI can analyze 
              X-rays, MRIs, CT scans, and other medical images with 99.7% accuracy, helping doctors 
              identify conditions earlier and more reliably.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">
              Quantum AI Cybersecurity
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our Quantum AI Cybersecurity Suite represents the next generation of digital protection. 
              By combining quantum computing principles with advanced AI, we provide ultra-secure encryption, 
              real-time threat detection, and zero-trust security architecture that adapts to evolving threats.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">
              Financial Trading Platform
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              The AI Financial Trading Platform uses sophisticated algorithms and machine learning to 
              analyze market trends, execute trades, and optimize portfolios. With real-time market 
              analysis and automated trading strategies, it helps financial institutions maximize 
              returns while managing risk effectively.
            </p>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 mb-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Explore Our New AI Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover how our latest AI innovations can transform your business operations and drive unprecedented growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/new-content-showcase"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore All New Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Article Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-12 p-6 bg-slate-800/30 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>Like (247)</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>Comment</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-colors">
              <Bookmark className="w-4 h-4" />
              <span>Save</span>
            </button>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {['AI Services', 'Artificial Intelligence', 'Legal Tech', 'Healthcare AI', 'Cybersecurity', 'FinTech', 'Quantum Computing', 'Machine Learning'].map((tag) => (
                <Link
                  key={tag}
                  to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 rounded-full text-sm transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </motion.div>
        </article>

        {/* Related Posts */}
        <section className="bg-slate-800/30 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
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