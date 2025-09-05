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
      author: 'Zion Tech Group',
      readTime: '5 min read',
      featured: true,
      image: '/images/news/ai-consciousness-breakthrough.jpg',
      tags: ['AI Consciousness', 'Breakthrough', 'Research', 'Innovation']
    },
    {
      id: 2,
      title: 'Series C Funding Round: Zion Tech Group Raises $250M for Global Expansion',
      excerpt: 'Major investment round led by leading venture capital firms to accelerate AI consciousness platform development and international market expansion.',
      category: 'company',
      date: '2025-01-10',
      author: 'Zion Tech Group',
      readTime: '3 min read',
      featured: true,
      image: '/images/news/series-c-funding.jpg',
      tags: ['Funding', 'Investment', 'Growth', 'Expansion']
    },
    {
      id: 3,
      title: 'Quantum-Secure Cloud Infrastructure Launches in Partnership with Microsoft Azure',
      excerpt: 'World\'s first quantum-secure cloud platform provides unbreakable encryption for enterprise customers, setting new security standards.',
      category: 'partnerships',
      date: '2025-01-05',
      author: 'Zion Tech Group',
      readTime: '4 min read',
      featured: true,
      image: '/images/news/quantum-azure-partnership.jpg',
      tags: ['Quantum Computing', 'Microsoft Azure', 'Security', 'Partnership']
    }
  ];

  const latestNews = [
    {
      id: 4,
      title: 'AI Customer Success Platform Achieves 99.9% Customer Retention Rate',
      excerpt: 'Revolutionary AI-powered customer success solution demonstrates exceptional results in preventing churn and improving customer satisfaction.',
      category: 'product',
      date: '2025-01-12',
      author: 'Sarah Chen',
      readTime: '4 min read',
      featured: false,
      image: '/images/news/ai-customer-success.jpg',
      tags: ['AI', 'Customer Success', 'Retention', 'Platform']
    },
    {
      id: 5,
      title: 'Zion Tech Group Named to Forbes AI 50 List for Second Consecutive Year',
      excerpt: 'Recognition as one of the world\'s most innovative AI companies highlights our leadership in artificial intelligence and quantum computing.',
      category: 'company',
      date: '2025-01-08',
      author: 'Zion Tech Group',
      readTime: '2 min read',
      featured: false,
      image: '/images/news/forbes-ai-50.jpg',
      tags: ['Recognition', 'Forbes', 'AI Leadership', 'Innovation']
    },
    {
      id: 6,
      title: 'New Research Paper: &quot;Quantum Neural Networks for Drug Discovery&quot;',
      excerpt: 'Breakthrough research demonstrates quantum computing applications in pharmaceutical research, potentially accelerating drug development by decades.',
      category: 'research',
      date: '2025-01-03',
      author: 'Dr. Michael Rodriguez',
      readTime: '8 min read',
      featured: false,
      image: '/images/news/quantum-drug-discovery.jpg',
      tags: ['Quantum Computing', 'Drug Discovery', 'Research', 'Healthcare']
    },
    {
      id: 7,
      title: 'Strategic Partnership with Deloitte for Enterprise AI Implementation',
      excerpt: 'Collaboration to deliver AI consciousness solutions to Fortune 500 companies, accelerating digital transformation initiatives.',
      category: 'partnerships',
      date: '2024-12-28',
      author: 'Zion Tech Group',
      readTime: '3 min read',
      featured: false,
      image: '/images/news/deloitte-partnership.jpg',
      tags: ['Partnership', 'Deloitte', 'Enterprise', 'AI Implementation']
    },
    {
      id: 8,
      title: 'AI Autonomous Business Operations Platform Beta Launch',
      excerpt: 'Revolutionary platform enables fully autonomous business management with AI-driven decision making and process optimization.',
      category: 'product',
      date: '2024-12-20',
      author: 'Zion Tech Group',
      readTime: '6 min read',
      featured: false,
      image: '/images/news/ai-autonomous-business.jpg',
      tags: ['AI', 'Autonomous Operations', 'Business', 'Platform']
    },
    {
      id: 9,
      title: 'Zion Tech Group Expands to European Markets',
      excerpt: 'Strategic expansion into European Union markets with new offices in London, Berlin, and Paris to serve growing demand.',
      category: 'company',
      date: '2024-12-15',
      author: 'Zion Tech Group',
      readTime: '3 min read',
      featured: false,
      image: '/images/news/european-expansion.jpg',
      tags: ['Expansion', 'Europe', 'International', 'Growth']
    }
  ];

  const pressReleases = [
    {
      title: 'Zion Tech Group Announces Revolutionary AI Consciousness Breakthrough',
      date: '2025-01-15',
      summary: 'Major milestone in artificial intelligence research with implications for human-AI collaboration and consciousness studies.'
    },
    {
      title: 'Series C Funding Round: $250M Investment for Global Expansion',
      date: '2025-01-10',
      summary: 'Strategic investment to accelerate AI consciousness platform development and international market expansion.'
    },
    {
      title: 'Quantum-Secure Cloud Partnership with Microsoft Azure',
      date: '2025-01-05',
      summary: 'World\'s first quantum-secure cloud infrastructure for enterprise customers.'
    }
  ];

  const mediaResources = [
    {
      title: 'Company Fact Sheet',
      description: 'Key facts, figures, and company information for media and investors.',
      type: 'PDF',
      size: '2.1 MB',
      download: '/media/zion-tech-group-fact-sheet.pdf'
    },
    {
      title: 'Executive Biographies',
      description: 'Professional backgrounds and photos of Zion Tech Group leadership team.',
      type: 'ZIP',
      size: '15.3 MB',
      download: '/media/executive-bios.zip'
    },
    {
      title: 'Company Logo Package',
      description: 'High-resolution logos and brand assets for media use.',
      type: 'ZIP',
      size: '8.7 MB',
      download: '/media/logo-package.zip'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our AI and quantum computing platforms.',
      type: 'ZIP',
      size: '25.1 MB',
      download: '/media/product-screenshots.zip'
    }
  ];

  const filteredNews = [...featuredNews, ...latestNews].filter(news => {
    const categoryMatch = selectedCategory === 'all' || news.category === selectedCategory;
    const searchMatch = searchQuery === '' || 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
import React from 'react';
import SEO from '../components/SEO';

export default function NewsPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>
          <meta name=&quot;description&quot; content=&quot;Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies.&quot; />
        </Head>

        {/* Hero Section */}
        <section className=&quot;relative pt-32 pb-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.h1 
              className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center&quot;
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;>
                Latest News & Updates
              </div>
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6&quot;>
                News & Press
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
                Stay updated with the latest developments, breakthroughs, and innovations 
                from Zion Tech Group and the technology industry.
              </p>
            </motion.div>

        {/* Category Filter */}
        <section className=&quot;py-10 px-4&quot;>
          <div className=&quot;container mx-auto max-w-6xl&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;flex flex-wrap justify-center gap-4&quot;
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    category === &quot;All News&quot;
                      ? &quot;bg-gradient-to-r from-blue-500 to-purple-600 text-white&quot;
                      : &quot;bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600&quot;
import React, { useState } from 'react';
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Newspaper, Globe, Award, Users, Rocket, Brain, 
  ArrowRight, ExternalLink, Calendar, Tag, Star
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function NewsPage() {
  const newsItems = [
    {
      title: &quot;Zion Tech Group Named Top AI Innovation Company 2025&quot;,
      category: &quot;Awards & Recognition&quot;,
      date: &quot;January 15, 2025&quot;,
      excerpt: &quot;Zion Tech Group has been recognized as one of the top AI innovation companies of 2025 by TechCrunch, highlighting our breakthrough work in autonomous AI systems and quantum computing integration.&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      source: &quot;TechCrunch&quot;,
      url: &quot;#&quot;,
      featured: true,
      icon: Award,
      color: &quot;from-yellow-500 to-orange-500&quot;
    },
    {
      title: &quot;Revolutionary Quantum AI Breakthrough Announced&quot;,
      category: &quot;Technology Innovation&quot;,
      date: &quot;January 10, 2025&quot;,
      excerpt: &quot;Zion Tech Group announces a major breakthrough in quantum AI integration, achieving unprecedented performance improvements in machine learning algorithms through quantum-enhanced neural networks.&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      source: &quot;MIT Technology Review&quot;,
      url: &quot;#&quot;,
      featured: false,
      icon: Brain,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;Partnership with Fortune 500 Financial Institution&quot;,
      category: &quot;Business Development&quot;,
      date: &quot;January 5, 2025&quot;,
      excerpt: &quot;Zion Tech Group announces strategic partnership with leading financial institution to deploy AI-powered risk assessment and fraud detection systems across their global operations.&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      source: &quot;Business Insider&quot;,
      url: &quot;#&quot;,
      featured: false,
      icon: Users,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;New Cybersecurity Division Launch&quot;,
      category: &quot;Company News&quot;,
      date: &quot;December 28, 2024&quot;,
      excerpt: &quot;Zion Tech Group expands its service portfolio with the launch of a dedicated cybersecurity division, offering quantum-resistant encryption and AI-powered threat detection solutions.&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      source: &quot;Security Weekly&quot;,
      url: &quot;#&quot;,
      featured: false,
      icon: Rocket,
      color: &quot;from-red-500 to-orange-500&quot;
    },
    {
      title: &quot;Record-Breaking AI Model Performance&quot;,
      category: &quot;Research & Development&quot;,
      date: &quot;December 20, 2024&quot;,
      excerpt: &quot;Our research team achieves record-breaking performance in natural language processing, with our latest AI model outperforming industry benchmarks by 40% in accuracy and 60% in speed.&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      source: &quot;AI Research Journal&quot;,
      url: &quot;#&quot;,
      featured: false,
      icon: Brain,
      color: &quot;from-emerald-500 to-teal-500&quot;
    },
    {
      title: &quot;Global Expansion: New Office in Singapore&quot;,
      category: &quot;Company News&quot;,
      date: &quot;December 15, 2024&quot;,
      excerpt: &quot;Zion Tech Group announces the opening of its new Asia-Pacific headquarters in Singapore, expanding our global reach and strengthening partnerships in the region.&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      source: &quot;Singapore Business Times&quot;,
      url: &quot;#&quot;,
      featured: false,
      icon: Globe,
      color: &quot;from-indigo-500 to-purple-500&quot;
    }
  ];

  const categories = [&quot;All&quot;, &quot;Awards & Recognition&quot;, &quot;Technology Innovation&quot;, &quot;Business Development&quot;, &quot;Company News&quot;, &quot;Research & Development&quot;];
  const [selectedCategory, setSelectedCategory] = React.useState(&quot;All&quot;);

  const filteredNews = selectedCategory === &quot;All&quot; 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>News & Press - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Stay updated with Zion Tech Group's latest news, press releases, awards, and media coverage. Discover our innovations in AI, quantum computing, and technology.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;News & Press - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Stay updated with our latest news, awards, and media coverage.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/news&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              News & Press
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
              Stay updated with our latest innovations, awards, and media coverage
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;mb-12&quot;
          >
            <p className=&quot;text-lg text-white/70 max-w-2xl mx-auto mb-8&quot;>
              Discover the latest developments in AI, quantum computing, and technology 
              innovation from Zion Tech Group and our global team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className=&quot;py-16 px-6&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-12&quot;
            >
              <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Featured News</h2>
              <p className=&quot;text-white/70&quot;>Latest headlines and major announcements</p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
              {featuredNews.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300&quot;
                >
                  <div className=&quot;p-8&quot;>
                    <div className=&quot;flex items-center gap-3 mb-4&quot;>
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                        <item.icon className=&quot;w-6 h-6 text-white&quot; />
                      </div>
                      <div className=&quot;flex items-center gap-2&quot;>
                        <span className=&quot;text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full&quot;>
                          {item.category}
                        </span>
                        <span className=&quot;text-xs text-white/40 bg-white/5 px-2 py-1 rounded&quot;>
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{item.title}</h3>
                    <p className=&quot;text-white/70 mb-6&quot;>{item.excerpt}</p>
                    
                    <div className=&quot;flex items-center justify-between text-sm text-white/60 mb-4&quot;>
                      <div className=&quot;flex items-center gap-2&quot;>
                        <Calendar className=&quot;w-4 h-4&quot; />
                        <span>{item.date}</span>
                      </div>
                      <div className=&quot;flex items-center gap-2&quot;>
                        <Newspaper className=&quot;w-4 h-4&quot; />
                        <span>{item.source}</span>
                      </div>
                    </div>
                    
                    <button className=&quot;w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2&quot;>
                      Read Full Article
                      <ExternalLink className=&quot;w-4 h-4&quot; />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className=&quot;py-8 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Latest News</h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Stay informed about our latest developments and industry recognition
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {filteredNews.filter(item => !item.featured).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300&quot;
              >
                <div className=&quot;p-6&quot;>
                  <div className=&quot;flex items-center gap-3 mb-4&quot;>
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                      <item.icon className=&quot;w-5 h-5 text-white&quot; />
                    </div>
                    <span className=&quot;text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full&quot;>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className=&quot;text-lg font-bold text-white mb-3 line-clamp-2&quot;>{item.title}</h3>
                  <p className=&quot;text-white/70 text-sm mb-4 line-clamp-3&quot;>{item.excerpt}</p>
                  
                  <div className=&quot;flex items-center justify-between text-xs text-white/60 mb-4&quot;>
                    <div className=&quot;flex items-center gap-1&quot;>
                      <Calendar className=&quot;w-3 h-3&quot; />
                      <span>{item.date}</span>
                    </div>
                    <div className=&quot;flex items-center gap-1&quot;>
                      <Newspaper className=&quot;w-3 h-3&quot; />
                      <span>{item.source}</span>
                    </div>
                  </div>
                  
                  <button className=&quot;w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105&quot;>
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
                    <a
                      href={`/news/${news.id}`}
                      className=&quot;inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium&quot;
                    >
                      Read More
                      <ArrowRight className=&quot;w-4 h-4&quot; />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className=&quot;text-sm text-gray-400 mt-4&quot;>
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold mb-4&quot;>Latest News</h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Stay updated with our most recent developments and announcements
              </p>
            </motion.div>

            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className=&quot;bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300&quot;
                >
                  <div className=&quot;flex items-center gap-4 mb-4&quot;>
                    <span className=&quot;px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30&quot;>
                      {article.category}
                    </span>
                  </div>
                  <h3 className=&quot;text-xl font-semibold mb-3 line-clamp-2&quot;>{article.title}</h3>
                  <p className=&quot;text-gray-400 mb-4 line-clamp-3&quot;>{article.excerpt}</p>
                  <div className=&quot;flex items-center justify-between text-sm text-gray-500 mb-4&quot;>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <Calendar className=&quot;w-4 h-4&quot; />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <Clock className=&quot;w-4 h-4&quot; />
                      {article.readTime}
                    </div>
                  </div>
                  <button className=&quot;w-full px-4 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2&quot;>
                    Read More
                    <ArrowRight className=&quot;w-4 h-4&quot; />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
              <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
                Stay Updated
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-2xl mx-auto mb-8&quot;>
                Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing.
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className=&quot;text-4xl font-bold mb-6&quot;>Stay Updated</h2>
              <p className=&quot;text-xl text-gray-400 mb-8&quot;>
                Subscribe to our newsletter for the latest news, insights, and technology updates
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto&quot;>
                <input
                  type=&quot;email&quot;
                  placeholder=&quot;Enter your email&quot;
                  className=&quot;flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50&quot;
                />
                <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&quot;>
                  Subscribe
                </button>
              </div>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {pressReleases.map((release, index) => (
                <motion.article
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group&quot;
                >
                  <div className=&quot;flex items-center gap-2 mb-3&quot;>
                    <span className=&quot;px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium&quot;>
                      {release.category}
                    </span>
                    <span className=&quot;text-gray-400 text-sm&quot;>{release.readTime}</span>
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300&quot;>
                    {release.title}
                  </h3>
                  <p className=&quot;text-gray-300 text-sm mb-4 leading-relaxed&quot;>
                    {release.excerpt}
                  </p>
                  <div className=&quot;flex items-center gap-2&quot;>
                    <Calendar className=&quot;w-4 h-4 text-gray-400&quot; />
                    <span className=&quot;text-gray-400 text-sm&quot;>{release.date}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* News Categories */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
                News Categories
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Explore news by category to find updates in your areas of interest.
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6&quot;>
              {newsCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;text-center group cursor-pointer&quot;
                >
                  <div className=&quot;w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all duration-300 border border-white/20&quot;>
                    <div className=&quot;text-purple-400 group-hover:text-purple-300 transition-colors duration-300&quot;>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className=&quot;text-sm font-semibold text-white mb-1&quot;>
                    {category.name}
                  </h3>
                  <p className=&quot;text-gray-400 text-xs&quot;>{category.count} articles</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-black/20&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
                Recent News
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Stay updated with our latest announcements and developments.
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {recentNews.map((news, index) => (
                <motion.article
                  key={news.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group&quot;
                >
                  <div className=&quot;flex items-center gap-2 mb-3&quot;>
                    <span className=&quot;px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium&quot;>
                      {news.category}
                    </span>
                    <span className=&quot;text-gray-400 text-sm&quot;>{news.readTime}</span>
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300&quot;>
                    {news.title}
                  </h3>
                  <p className=&quot;text-gray-300 text-sm mb-4 leading-relaxed&quot;>
                    {news.excerpt}
                  </p>
                  <div className=&quot;flex items-center justify-between&quot;>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <User className=&quot;w-4 h-4 text-gray-400&quot; />
                      <span className=&quot;text-gray-400 text-sm&quot;>{news.author}</span>
                    </div>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <Calendar className=&quot;w-4 h-4 text-gray-400&quot; />
                      <span className=&quot;text-gray-400 text-sm&quot;>{news.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
                Media Inquiries
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                For press inquiries, media interviews, or additional information, 
                please contact our communications team.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Contact Media Team
                  <Mic className=&quot;ml-2 w-5 h-5&quot; />
                </Link>
                <a
                  href=&quot;/press&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300&quot;
                >
                  Press Kit
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
              Ready to Stay Informed?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Explore our latest research, industry insights, and technology breakthroughs 
              that are shaping the future of AI and quantum computing.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link 
                href=&quot;/blog&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;
              >
                Explore Our Blog
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
              <Link 
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300&quot;
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
      <section className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Get in Touch
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
              Have questions about our news or want to learn more about our latest developments? Contact our team.
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
              <a href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2&quot;>
                <span>Contact Us</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a href=&quot;/about&quot; className=&quot;border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300&quot;>
                About Zion Tech Group
              </Link>
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Media & Press Inquiries
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Journalists and media representatives can access our press kit, company information, and arrange interviews with our leadership team.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105&quot;>
                Download Press Kit
              </button>
              <button className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;>
                Contact Media Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>
        {/* Latest News */}
        <section className=&quot;py-20 bg-black/50&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
                Latest News
              </h2>
              <p className=&quot;text-xl text-gray-400&quot;>
                Recent updates and announcements
              </p>
            </motion.div>
            
            <div className=&quot;grid lg:grid-cols-2 gap-8&quot;>
              {filteredNews.filter(news => !news.featured).map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;flex gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300&quot;
                >
                  <div className=&quot;w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0&quot;>
                    <Newspaper className=&quot;w-12 h-12 text-gray-400&quot; />
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center gap-2 mb-2&quot;>
                      <span className=&quot;px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs border border-purple-500/30&quot;>
                        {news.category}
                      </span>
                      <span className=&quot;text-gray-400 text-xs&quot;>
                        {news.readTime}
                      </span>
                    </div>
                    <h3 className=&quot;text-lg font-bold text-white mb-2 line-clamp-2&quot;>
                      {news.title}
                    </h3>
                    <p className=&quot;text-gray-300 text-sm mb-3 line-clamp-2&quot;>
                      {news.excerpt}
                    </p>
                    <div className=&quot;flex items-center justify-between text-xs text-gray-400&quot;>
                      <span>{formatDate(news.date)}</span>
                      <span>{news.author}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredNews.filter(news => !news.featured).length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className=&quot;text-center py-12&quot;
              >
                <p className=&quot;text-gray-400 text-lg&quot;>
                  No news articles match your current filters. Try adjusting your search or category selection.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Press Releases */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
                Press Releases
              </h2>
              <p className=&quot;text-xl text-gray-400&quot;>
                Official company announcements and media releases
              </p>
            </motion.div>
            
            <div className=&quot;max-w-4xl mx-auto space-y-6&quot;>
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className=&quot;p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300&quot;
                >
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>
                    {release.title}
                  </h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>
                    {release.summary}
                  </p>
                  <div className=&quot;flex items-center justify-between&quot;>
                    <span className=&quot;text-gray-400 text-sm&quot;>
                      {formatDate(release.date)}
                    </span>
                    <a
                      href=&quot;/contact&quot;
                      className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium&quot;
                    >
                      Request Full Release
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className=&quot;py-20 bg-black/50&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
                Media Resources
              </h2>
              <p className=&quot;text-xl text-gray-400&quot;>
                Downloadable assets and resources for media and journalists
              </p>
            </motion.div>
            
            <div className=&quot;grid lg:grid-cols-2 gap-8&quot;>
              {mediaResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className=&quot;p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300&quot;
                >
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>
                    {resource.title}
                  </h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>
                    {resource.description}
                  </p>
                  <div className=&quot;flex items-center justify-between&quot;>
                    <div className=&quot;flex items-center gap-4 text-sm text-gray-400&quot;>
                      <span className=&quot;px-2 py-1 bg-gray-700/50 rounded&quot;>
                        {resource.type}
                      </span>
                      <span>{resource.size}</span>
                    </div>
                    <a
                      href={resource.download}
                      className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium&quot;
                    >
                      Download
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10&quot;>
          <div className=&quot;container mx-auto px-4 text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Stay Updated
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
                Get the latest news, product updates, and industry insights delivered to your inbox. Never miss a breakthrough announcement.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Subscribe to Updates
                </Link>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300&quot;
                >
                  Media Inquiries
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
    <div className=&quot;min-h-[60vh] px-6 py-24&quot;>
      <SEO title=&quot;News | Zion Tech Group&quot; description=&quot;News and press from Zion Tech Group&quot; />
      <div className=&quot;max-w-3xl mx-auto&quot;>
        <h1 className=&quot;text-4xl font-bold text-white mb-4&quot;>News & Press</h1>
        <p className=&quot;text-gray-300&quot;>Press releases and announcements will appear here.</p>
      </div>

      <EnhancedFooter />
    </div>
  );
}
