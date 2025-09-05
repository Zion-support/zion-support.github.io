import React from 'react';
import Head from 'next/head';
import {_Newspaper, _Calendar, _User, _Tag, _ArrowRight, _ExternalLink, _TrendingUp, _Award, _Rocket, _Globe, _Brain, _Atom, _Zap} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

const NewsPage: React.FC = () => {_const _newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform', _excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.', _author: 'Press Team', _date: '2025-01-15', _author: 'Zion Tech Group', _readTime: '5 min read', _featured: true, _image: '/images/news/ai-consciousness-breakthrough.jpg', _tags: ['AI Consciousness', _'Breakthrough', _'Research', _'Innovation']},
    {_id: 2, _title: 'Series C Funding Round: Zion Tech Group Raises $250M for Global Expansion', _excerpt: 'Major investment round led by leading venture capital firms to accelerate AI consciousness platform development and international market expansion.', _category: 'company', _date: '2025-01-10', _author: 'Zion Tech Group', _readTime: '3 min read', _featured: true, _image: '/images/news/series-c-funding.jpg', _tags: ['Funding', _'Investment', _'Growth', _'Expansion']},
    {_id: 3, _title: 'Quantum-Secure Cloud Infrastructure Launches in Partnership with Microsoft Azure', _excerpt: 'World\'s first quantum-secure cloud platform provides unbreakable encryption for enterprise customers, _setting new security standards.', _category: 'partnerships', _date: '2025-01-05', _author: 'Zion Tech Group', _readTime: '4 min read', _featured: true, _image: '/images/news/quantum-azure-partnership.jpg', _tags: ['Quantum Computing', _'Microsoft Azure', _'Security', _'Partnership']}
  ];

  const _latestNews = [
    {_id: 4, _title: 'AI Customer Success Platform Achieves 99.9% Customer Retention Rate', _excerpt: 'Revolutionary AI-powered customer success solution demonstrates exceptional results in preventing churn and improving customer satisfaction.', _category: 'product', _date: '2025-01-12', _author: 'Sarah Chen', _readTime: '4 min read', _featured: false, _image: '/images/news/ai-customer-success.jpg', _tags: ['AI', _'Customer Success', _'Retention', _'Platform']},
    {_id: 5, _title: 'Zion Tech Group Named to Forbes AI 50 List for Second Consecutive Year', _excerpt: 'Recognition as one of the world\'s most innovative AI companies highlights our leadership in artificial intelligence and quantum computing.', _category: 'company', _date: '2025-01-08', _author: 'Zion Tech Group', _readTime: '2 min read', _featured: false, _image: '/images/news/forbes-ai-50.jpg', _tags: ['Recognition', _'Forbes', _'AI Leadership', _'Innovation']},
    {_id: 6, _title: 'New Research Paper: "Quantum Neural Networks for Drug Discovery"', _excerpt: 'Breakthrough research demonstrates quantum computing applications in pharmaceutical research, _potentially accelerating drug development by decades.', _category: 'research', _date: '2025-01-03', _author: 'Dr. Michael Rodriguez', _readTime: '8 min read', _featured: false, _image: '/images/news/quantum-drug-discovery.jpg', _tags: ['Quantum Computing', _'Drug Discovery', _'Research', _'Healthcare']},
    {_id: 7, _title: 'Strategic Partnership with Deloitte for Enterprise AI Implementation', _excerpt: 'Collaboration to deliver AI consciousness solutions to Fortune 500 companies, _accelerating digital transformation initiatives.', _category: 'partnerships', _date: '2024-12-28', _author: 'Zion Tech Group', _readTime: '3 min read', _featured: false, _image: '/images/news/deloitte-partnership.jpg', _tags: ['Partnership', _'Deloitte', _'Enterprise', _'AI Implementation']},
    {_id: 8, _title: 'AI Autonomous Business Operations Platform Beta Launch', _excerpt: 'Revolutionary platform enables fully autonomous business management with AI-driven decision making and process optimization.', _category: 'product', _date: '2024-12-20', _author: 'Zion Tech Group', _readTime: '6 min read', _featured: false, _image: '/images/news/ai-autonomous-business.jpg', _tags: ['AI', _'Autonomous Operations', _'Business', _'Platform']},
    {_id: 9, _title: 'Zion Tech Group Expands to European Markets', _excerpt: 'Strategic expansion into European Union markets with new offices in London, _Berlin, _and Paris to serve growing demand.', _category: 'company', _date: '2024-12-15', _author: 'Zion Tech Group', _readTime: '3 min read', _featured: false, _image: '/images/news/european-expansion.jpg', _tags: ['Expansion', _'Europe', _'International', _'Growth']}
  ];

  const _pressReleases = [
    {_title: 'Zion Tech Group Announces Revolutionary AI Consciousness Breakthrough', _date: '2025-01-15', _summary: 'Major milestone in artificial intelligence research with implications for human-AI collaboration and consciousness studies.'},
    {_title: 'Series C Funding Round: $250M Investment for Global Expansion', _date: '2025-01-10', _summary: 'Strategic investment to accelerate AI consciousness platform development and international market expansion.'},
    {_title: 'Quantum-Secure Cloud Partnership with Microsoft Azure', _date: '2025-01-05', _summary: 'World\'s first quantum-secure cloud infrastructure for enterprise customers.'}
  ];

  const _mediaResources = [
    {_title: 'Company Fact Sheet', _description: 'Key facts, _figures, _and company information for media and investors.', _type: 'PDF', _size: '2.1 MB', _download: '/media/zion-tech-group-fact-sheet.pdf'},
    {_title: 'Executive Biographies', _description: 'Professional backgrounds and photos of Zion Tech Group leadership team.', _type: 'ZIP', _size: '15.3 MB', _download: '/media/executive-bios.zip'},
    {_title: 'Company Logo Package', _description: 'High-resolution logos and brand assets for media use.', _type: 'ZIP', _size: '8.7 MB', _download: '/media/logo-package.zip'},
    {_title: 'Product Screenshots', _description: 'High-quality screenshots of our AI and quantum computing platforms.', _type: 'ZIP', _size: '25.1 MB', _download: '/media/product-screenshots.zip'}
  ];

  const _filteredNews = [...featuredNews, ...latestNews].filter(news => {_const _categoryMatch = selectedCategory === 'all' || news.category === selectedCategory;
    const _searchMatch = searchQuery === '' || 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;});

  const _formatDate = (_dateString: string) => {_const _date = new Date(dateString);
    return date.toLocaleDateString('en-US', _{ 
      year: 'numeric', _month: 'long', _day: 'numeric'});
  };
import React from 'react';
import SEO from '../components/SEO';

export default function NewsPage() {_return (_<UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>
          <meta name="description" content="Stay updated with Zion Tech Group's latest news, _product launches, _partnerships, _and industry insights. Read about our breakthroughs in AI, _quantum computing, _and emerging technologies." />
        </Head>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Latest News & Updates
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                News & Press
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest developments, _breakthroughs, _and innovations 
                from Zion Tech Group and the technology industry.
              </p>
            </motion.div>

        {_/* Category Filter */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              className="flex flex-wrap justify-center gap-4"
            >
              {_categories.map((category, _index) => (
                <button
                  key={category}
                  className={_`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    category === "All News"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600"
import React, _{ useState} from 'react';
import React from 'react';
import Head from 'next/head';
import {_Newspaper, _Globe, _Award, _Users, _Rocket, _Brain, _ArrowRight, _ExternalLink, _Calendar, _Tag, _Star} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function NewsPage() {_const _newsItems = [
    {
      title: "Zion Tech Group Named Top AI Innovation Company 2025", _category: "Awards & Recognition", _date: "January 15, _2025", _excerpt: "Zion Tech Group has been recognized as one of the top AI innovation companies of 2025 by TechCrunch, _highlighting our breakthrough work in autonomous AI systems and quantum computing integration.", _image: "/api/placeholder/600/400", _source: "TechCrunch", _url: "#", _featured: true, _icon: Award, _color: "from-yellow-500 to-orange-500"},
    {_title: "Revolutionary Quantum AI Breakthrough Announced", _category: "Technology Innovation", _date: "January 10, _2025", _excerpt: "Zion Tech Group announces a major breakthrough in quantum AI integration, _achieving unprecedented performance improvements in machine learning algorithms through quantum-enhanced neural networks.", _image: "/api/placeholder/600/400", _source: "MIT Technology Review", _url: "#", _featured: false, _icon: Brain, _color: "from-purple-500 to-pink-500"},
    {_title: "Partnership with Fortune 500 Financial Institution", _category: "Business Development", _date: "January 5, _2025", _excerpt: "Zion Tech Group announces strategic partnership with leading financial institution to deploy AI-powered risk assessment and fraud detection systems across their global operations.", _image: "/api/placeholder/600/400", _source: "Business Insider", _url: "#", _featured: false, _icon: Users, _color: "from-blue-500 to-cyan-500"},
    {_title: "New Cybersecurity Division Launch", _category: "Company News", _date: "December 28, _2024", _excerpt: "Zion Tech Group expands its service portfolio with the launch of a dedicated cybersecurity division, _offering quantum-resistant encryption and AI-powered threat detection solutions.", _image: "/api/placeholder/600/400", _source: "Security Weekly", _url: "#", _featured: false, _icon: Rocket, _color: "from-red-500 to-orange-500"},
    {_title: "Record-Breaking AI Model Performance", _category: "Research & Development", _date: "December 20, _2024", _excerpt: "Our research team achieves record-breaking performance in natural language processing, _with our latest AI model outperforming industry benchmarks by 40% in accuracy and 60% in speed.", _image: "/api/placeholder/600/400", _source: "AI Research Journal", _url: "#", _featured: false, _icon: Brain, _color: "from-emerald-500 to-teal-500"},
    {_title: "Global Expansion: New Office in Singapore", _category: "Company News", _date: "December 15, _2024", _excerpt: "Zion Tech Group announces the opening of its new Asia-Pacific headquarters in Singapore, _expanding our global reach and strengthening partnerships in the region.", _image: "/api/placeholder/600/400", _source: "Singapore Business Times", _url: "#", _featured: false, _icon: Globe, _color: "from-indigo-500 to-purple-500"}
  ];

  const _categories = ["All", "Awards & Recognition", "Technology Innovation", "Business Development", "Company News", "Research & Development"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const _filteredNews = selectedCategory === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const _featuredNews = newsItems.filter(item => item.featured);

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>News & Press - Zion Tech Group</title>
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, _press releases, _awards, _and media coverage. Discover our innovations in AI, _quantum computing, _and technology." />
        <meta property="og:title" content="News & Press - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with our latest news, _awards, _and media coverage." />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              News & Press
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest innovations, _awards, _and media coverage
            </p>
          </motion.div>

          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Discover the latest developments in AI, _quantum computing, _and technology 
              innovation from Zion Tech Group and our global team.
            </p>
          </motion.div>
        </div>
      </section>

      {_/* Featured News */}
      {_featuredNews.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured News</h2>
              <p className="text-white/70">Latest headlines and major announcements</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {_featuredNews.map((item, _index) => (
                <motion.div
                  key={item.title}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={_`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full">
                          {_item.category}
                        </span>
                        <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{_item.title}</h3>
                    <p className="text-white/70 mb-6">{_item.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{_item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Newspaper className="w-4 h-4" />
                        <span>{_item.source}</span>
                      </div>
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {_/* Category Filter */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {_categories.map(_(category) => (_<button
                key={category}
                onClick={_() => setSelectedCategory(category)}
                className={_`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
              >
                {_category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {_/* News Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Latest News</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay informed about our latest developments and industry recognition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_filteredNews.filter(item => !item.featured).map(_(item, _index) => (
              <motion.div
                key={item.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={_`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full">
                      {_item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{_item.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">{_item.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{_item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Newspaper className="w-3 h-3" />
                      <span>{_item.source}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Press Kit CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
                    <a
                      href={_`/news/${news.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.6}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Latest News</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our most recent developments and announcements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_newsArticles.filter(article => !article.featured).map(_(article, _index) => (
                <motion.article
                  key={article.title}
                  initial={_{ opacity: 0, _y: 20}}
                  animate={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: 0.1 * index}}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
                      {_article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{_article.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{_article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {_new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {_article.readTime}
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

        {_/* Newsletter Signup */}
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing.
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.8}}
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
              {_pressReleases.map(_(release, _index) => (
                <motion.article
                  key={release.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                      {_release.category}
                    </span>
                    <span className="text-gray-400 text-sm">{_release.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {_release.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {_release.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{_release.date}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {_/* News Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
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
              {_newsCategories.map(_(category, _index) => (
                <motion.div
                  key={category.name}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all duration-300 border border-white/20">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {_category.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {_category.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{_category.count} articles</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* Recent News */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
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
              {_recentNews.map(_(news, _index) => (
                <motion.article
                  key={news.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                      {_news.category}
                    </span>
                    <span className="text-gray-400 text-sm">{_news.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {_news.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {_news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{_news.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{_news.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {_/* Media Contact */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
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
      {_/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
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
      {_/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
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
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Media & Press Inquiries
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Journalists and media representatives can access our press kit, company information, and arrange interviews with our leadership team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Download Press Kit
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Contact Media Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>
        {_/* Latest News */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest News
              </h2>
              <p className="text-xl text-gray-400">
                Recent updates and announcements
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {_filteredNews.filter(news => !news.featured).map(_(news, _index) => (
                <motion.div
                  key={news.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="flex gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs border border-purple-500/30">
                        {_news.category}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {_news.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {_news.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {_news.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{_formatDate(news.date)}</span>
                      <span>{_news.author}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {_filteredNews.filter(news => !news.featured).length === 0 && (
              <motion.div
                initial={{ opacity: 0}}
                animate={_{ opacity: 1}}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  No news articles match your current filters. Try adjusting your search or category selection.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {_/* Press Releases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Press Releases
              </h2>
              <p className="text-xl text-gray-400">
                Official company announcements and media releases
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {_pressReleases.map(_(release, _index) => (
                <motion.div
                  key={release.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.2}}
                  viewport={_{ once: true}}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {_release.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {_release.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {_formatDate(release.date)}
                    </span>
                    <a
                      href="/contact"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Request Full Release
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* Media Resources */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Media Resources
              </h2>
              <p className="text-xl text-gray-400">
                Downloadable assets and resources for media and journalists
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {_mediaResources.map(_(resource, _index) => (
                <motion.div
                  key={resource.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.2}}
                  viewport={_{ once: true}}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {_resource.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {_resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-gray-700/50 rounded">
                        {_resource.type}
                      </span>
                      <span>{_resource.size}</span>
                    </div>
                    <a
                      href={_resource.download}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Download
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the latest news, product updates, and industry insights delivered to your inbox. Never miss a breakthrough announcement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe to Updates
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Media Inquiries
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="News | Zion Tech Group" description="News and press from Zion Tech Group" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">News & Press</h1>
        <p className="text-gray-300">Press releases and announcements will appear here.</p>
      </div>

      <EnhancedFooter />
    </div>
  );
}
