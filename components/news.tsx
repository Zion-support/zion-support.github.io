<<<<<<< HEAD
import React from 'react',
  const featuredNews = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.',
      author: 'Press Team',
      date: '2025-01-15',
      author: 'Dr. Kleber',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI ConsciousnessBreakthroughInnovation'],
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
<<<<<<< HEAD
      tags: ['Quantum ComputingResearchBreakthrough'],
      icon: <Atom className="w-6 h-6" />,
=======
      tags: ['Quantum Computing', 'Research', 'Breakthrough'],
      icon: <Atom className=&quot;w-6 h-6&quot; />,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      featured: true
    },
    {
      title: 'Cybersecurity Partnership with Global Tech Leaders',
      excerpt: 'Strategic collaboration to advance AI-powered threat detection and response systems.',
      author: 'Partnerships Team',
      date: '2025-01-10',
  const [searchQuery, setSearchQuery] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [selectedYear, setSelectedYear] = useState('all'),

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 45 },
    { id: 'ai', name: 'AI & Technology', icon: Brain, count: 18 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 12 },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 8 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 7 }
  ],

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2025', name: '2025' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' }
  ],
=======
import React from 'react';
  const _featuredNews = [
    {_title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform', _excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.', _author: 'Press Team', _date: '2025-01-15', _author: 'Dr. Kleber', _featured: true, _image: '/api/placeholder/600/400', _tags: ['AI Consciousness', _'Breakthrough', _'Innovation'], _readTime: '5 min read'},
    {_title: 'Quantum Computing Breakthrough: Solving Complex Optimization Problems', _excerpt: 'Our quantum team achieves significant milestone in solving previously impossible computational challenges.', _author: 'Research Team', _date: '2025-01-12', _category: 'Research', _readTime: '6 min read', _image: '/news/quantum-breakthrough.jpg', _tags: ['Quantum Computing', _'Research', _'Breakthrough'], _icon: <Atom className="w-6 h-6" />, _featured: true},
    {_title: 'Cybersecurity Partnership with Global Tech Leaders', _excerpt: 'Strategic collaboration to advance AI-powered threat detection and response systems.', _author: 'Partnerships Team', _date: '2025-01-10', _const [searchQuery, _setSearchQuery] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [selectedYear, _setSelectedYear] = useState('all');

  const _categories = [
    { id: 'all', _name: 'All News', _icon: Newspaper, _count: 45},
    {_id: 'ai', _name: 'AI & Technology', _icon: Brain, _count: 18},
    {_id: 'quantum', _name: 'Quantum Computing', _icon: Atom, _count: 12},
    {_id: 'space', _name: 'Space Technology', _icon: Rocket, _count: 8},
    {_id: 'security', _name: 'Cybersecurity', _icon: Shield, _count: 7}
  ];

  const _years = [
    {_id: 'all', _name: 'All Years'},
    {_id: '2025', _name: '2025'},
    {_id: '2024', _name: '2024'},
    {_id: '2023', _name: '2023'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  Newspaper, Calendar, User, Tag, ArrowRight, ExternalLink,
  TrendingUp, Lightbulb, Rocket, Globe, Shield, Zap,
  Clock, BookOpen, Video, Podcast, FileText, Search
} from 'lucide-react',
import Link from 'next/link',
  return (
    <UltraFuturisticBackground>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>
          <meta name=&quot;description&quot; content=&quot;Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies.&quot; />
        </Head>

      id: 1,
      title: &quot;Zion Tech Group Launches Revolutionary Quantum AI Platform&quot;,
      excerpt: &quot;Our latest quantum AI platform combines quantum computing with artificial intelligence to deliver unprecedented performance and capabilities for enterprise applications.&quot;,
      category: &quot;Product Launch&quot;,
      author: &quot;Zion Tech Group Team&quot;,
      date: &quot;2025-01-15&quot;,
      readTime: &quot;5 min read&quot;,
      image: &quot;/images/news/quantum-ai-launch.jpg&quot;,
      tags: [&quot;Quantum Computing&quot;, &quot;AI&quot;, &quot;Product Launch&quot;]
    },
<<<<<<< HEAD
    {
      id: 2,
      title: &quot;New Partnership with Global Healthcare Consortium&quot;,
      excerpt: &quot;We're excited to announce our strategic partnership with the Global Healthcare Consortium to revolutionize medical diagnostics using our AI-powered healthcare solutions.&quot;,
      category: &quot;Partnership&quot;,
      author: &quot;Business Development&quot;,
      date: &quot;2025-01-12&quot;,
      readTime: &quot;4 min read&quot;,
      image: &quot;/images/news/healthcare-partnership.jpg&quot;,
      tags: [&quot;Healthcare&quot;, &quot;Partnership&quot;, &quot;AI&quot;]
    },
    {
      id: 3,
      title: &quot;Breakthrough in Autonomous Cybersecurity Systems&quot;,
      excerpt: &quot;Our research team has achieved a major breakthrough in autonomous cybersecurity, developing systems that can detect and respond to threats in real-time without human intervention.&quot;,
      category: &quot;Research&quot;,
      author: &quot;Research Team&quot;,
      date: &quot;2025-01-10&quot;,
      readTime: &quot;6 min read&quot;,
      image: &quot;/images/news/cybersecurity-breakthrough.jpg&quot;,
      tags: [&quot;Cybersecurity&quot;, &quot;Research&quot;, &quot;Autonomous Systems&quot;]
    },
    {
      id: 4,
      title: &quot;Space Technology Division Expands Operations&quot;,
      excerpt: &quot;Our space technology division is expanding operations to support growing demand for satellite operations, space resource mining, and orbital analytics services.&quot;,
      category: &quot;Company News&quot;,
      author: &quot;Space Technology Team&quot;,
      date: &quot;2025-01-08&quot;,
      readTime: &quot;3 min read&quot;,
      image: &quot;/images/news/space-expansion.jpg&quot;,
      tags: [&quot;Space Technology&quot;, &quot;Expansion&quot;, &quot;Satellites&quot;]
    },
    {
      id: 5,
      title: &quot;AI Ethics and Governance Framework Released&quot;,
      excerpt: &quot;We've published our comprehensive AI ethics and governance framework, setting new standards for responsible AI development and deployment in enterprise environments.&quot;,
      category: &quot;Policy&quot;,
      author: &quot;AI Ethics Team&quot;,
      date: &quot;2025-01-05&quot;,
      readTime: &quot;7 min read&quot;,
      image: &quot;/images/news/ai-ethics-framework.jpg&quot;,
      tags: [&quot;AI Ethics&quot;, &quot;Governance&quot;, &quot;Policy&quot;]
    },
    {
      id: 6,
      title: &quot;Financial Services Innovation Award Winner&quot;,
      excerpt: &quot;Zion Tech Group has been recognized as the winner of the Financial Services Innovation Award for our quantum financial modeling and risk assessment platforms.&quot;,
      category: &quot;Awards&quot;,
      author: &quot;Marketing Team&quot;,
      date: &quot;2025-01-03&quot;,
      readTime: &quot;3 min read&quot;,
      image: &quot;/images/news/financial-award.jpg&quot;,
      tags: [&quot;Awards&quot;, &quot;Financial Services&quot;, &quot;Quantum Computing&quot;]
=======
    {_id: 2, _title: "New Partnership with Global Healthcare Consortium", _excerpt: "We're excited to announce our strategic partnership with the Global Healthcare Consortium to revolutionize medical diagnostics using our AI-powered healthcare solutions.", _category: "Partnership", _author: "Business Development", _date: "2025-01-12", _readTime: "4 min read", _image: "/images/news/healthcare-partnership.jpg", _tags: ["Healthcare", _"Partnership", _"AI"]},
    {_id: 3, _title: "Breakthrough in Autonomous Cybersecurity Systems", _excerpt: "Our research team has achieved a major breakthrough in autonomous cybersecurity, _developing systems that can detect and respond to threats in real-time without human intervention.", _category: "Research", _author: "Research Team", _date: "2025-01-10", _readTime: "6 min read", _image: "/images/news/cybersecurity-breakthrough.jpg", _tags: ["Cybersecurity", _"Research", _"Autonomous Systems"]},
    {_id: 4, _title: "Space Technology Division Expands Operations", _excerpt: "Our space technology division is expanding operations to support growing demand for satellite operations, _space resource mining, _and orbital analytics services.", _category: "Company News", _author: "Space Technology Team", _date: "2025-01-08", _readTime: "3 min read", _image: "/images/news/space-expansion.jpg", _tags: ["Space Technology", _"Expansion", _"Satellites"]},
    {_id: 5, _title: "AI Ethics and Governance Framework Released", _excerpt: "We've published our comprehensive AI ethics and governance framework, _setting new standards for responsible AI development and deployment in enterprise environments.", _category: "Policy", _author: "AI Ethics Team", _date: "2025-01-05", _readTime: "7 min read", _image: "/images/news/ai-ethics-framework.jpg", _tags: ["AI Ethics", _"Governance", _"Policy"]},
    {_id: 6, _title: "Financial Services Innovation Award Winner", _excerpt: "Zion Tech Group has been recognized as the winner of the Financial Services Innovation Award for our quantum financial modeling and risk assessment platforms.", _category: "Awards", _author: "Marketing Team", _date: "2025-01-03", _readTime: "3 min read", _image: "/images/news/financial-award.jpg", _tags: ["Awards", _"Financial Services", _"Quantum Computing"]
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
export default function News() {
  const _featuredNews = [
    {
<<<<<<< HEAD
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Quantum Computing Platform',
      excerpt: 'Our latest breakthrough combines artificial intelligence with quantum computing to solve previously unsolvable problems in cryptography, optimization, and scientific research.',
      category: 'Company News',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      tags: ['AIQuantum ComputingInnovation'],
import Head from 'next/head',
=======
      id: 1, _title: 'Zion Tech Group Launches Revolutionary AI-Powered Quantum Computing Platform', _excerpt: 'Our latest breakthrough combines artificial intelligence with quantum computing to solve previously unsolvable problems in cryptography, _optimization, _and scientific research.', _category: 'Company News', _author: 'Dr. Sarah Chen', _date: '2024-01-15', _readTime: '5 min read', _image: '/api/placeholder/600/400', _tags: ['AI', _'Quantum Computing', _'Innovation'], _import Head from 'next/head';

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
export default function NewsPage() {
  const _newsArticles = [
    {
<<<<<<< HEAD
      id: 1,
      title: &quot;Zion Tech Group Launches New AI-Powered Automation Platform&quot;,
      excerpt: &quot;Our latest innovation brings autonomous decision-making capabilities to enterprise environments, revolutionizing how businesses operate.&quot;,
      date: &quot;2025-01-19&quot;,
      category: &quot;Company News&quot;,
      author: &quot;Zion Tech Group&quot;,
      readTime: &quot;3 min read&quot;,
      image: &quot;🚀&quot;,
      featured: true
    },
    {
      id: 2,
            </motion.div>
=======
      id: 1, _title: "Zion Tech Group Launches New AI-Powered Automation Platform", _excerpt: "Our latest innovation brings autonomous decision-making capabilities to enterprise environments, _revolutionizing how businesses operate.", _date: "2025-01-19", _category: "Company News", _author: "Zion Tech Group", _readTime: "3 min read", _image: "🚀", _featured: true},
    {_id: 2, _</motion.div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </section>

        {/* Featured Article */}
<<<<<<< HEAD
        {featuredArticle && (
          <section className=&quot;py-20&quot;>
            <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className=&quot;text-center mb-12&quot;
=======
        {_featuredArticle && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8}}
                viewport={_{ once: true}}
                className="text-center mb-12"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
                  Featured Story
                </h2>
              </motion.div>
              
              <motion.div
<<<<<<< HEAD
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl border border-purple-500/20 overflow-hidden&quot;
              >
                <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-0&quot;>
                  <div className=&quot;p-8 lg:p-12&quot;>
                    <div className=&quot;flex items-center space-x-4 mb-4&quot;>
                      <span className=&quot;bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full&quot;>
                        {featuredArticle.category}
                      </span>
                      <span className=&quot;text-gray-400 text-sm&quot;>
                        <Calendar className=&quot;w-4 h-4 inline mr-1&quot; />
                        {new Date(featuredArticle.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className=&quot;text-2xl lg:text-3xl font-bold text-white mb-4&quot;>
                      {featuredArticle.title}
                    </h3>
                    <p className=&quot;text-lg text-gray-300 mb-6&quot;>
                      {featuredArticle.excerpt}
                    </p>
                    <div className=&quot;flex items-center space-x-4 mb-6&quot;>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <User className=&quot;w-4 h-4 text-gray-400&quot; />
                        <span className=&quot;text-gray-400&quot;>{featuredArticle.author}</span>
                      </div>
                    </div>
                    <div className=&quot;flex flex-wrap gap-2 mb-6&quot;>
                      {featuredArticle.tags.map((tag) => (
=======
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.2}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl border border-purple-500/20 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {_featuredArticle.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {_new Date(featuredArticle.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {_featuredArticle.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-6">
                      {_featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">{_featuredArticle.author}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {_featuredArticle.tags.map(_(tag) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <span
                          key={tag}
                          className=&quot;bg-gray-800/50 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700/50&quot;
                        >
                          {_tag}
                        </span>
                      ))}
                    </div>
                    <Link
<<<<<<< HEAD
                      href={`/news/${featuredArticle.id}`}
                      className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300&quot;
=======
                      href={_`/news/${featuredArticle.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      Read Full Article
                      <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                    </a>
                  </div>
                  <div className=&quot;relative h-64 lg:h-auto&quot;>
                    <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center&quot;>
                      <Newspaper className=&quot;w-24 h-24 text-purple-400&quot; />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

<<<<<<< HEAD
        {/* Category Filter */}
        <section className=&quot;py-12 bg-black/50&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
              {categories.map((category) => (
=======
        {_/* Category Filter */}
        <section className="py-12 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {_categories.map(_(category) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <button
                  key={category.name}
                  className={_`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'}`}
                >
<<<<<<< HEAD
                  {category.name}
                  <span className=&quot;ml-2 text-sm opacity-75&quot;>({category.count})</span>
=======
                  {_category.name}
                  <span className="ml-2 text-sm opacity-75">({_category.count})</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </button>
              ))}
            </div>
          </section>
        )}

<<<<<<< HEAD
        {/* News Grid */}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* News Grid */}
              viewport={_{ once: true}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
                Latest News
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Stay updated with our latest developments and breakthroughs
              </p>
            </motion.div>
            
<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
        {/* CTA Section */}
        <section className=&quot;py-20 relative&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden&quot;
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_newsArticles.filter(article => !article.featured).map(_(article, _index) => (
                <motion.article
                  key={article.id}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
        {_/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className=&quot;relative h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center&quot;>
                    <Newspaper className=&quot;w-16 h-16 text-purple-400&quot; />
                  </div>
<<<<<<< HEAD
                  <div className=&quot;p-6&quot;>
                    <div className=&quot;flex items-center space-x-4 mb-4&quot;>
                      <span className=&quot;bg-gray-800/50 text-purple-400 text-xs font-semibold px-2 py-1 rounded-full&quot;>
                        {article.category}
                      </span>
                      <span className=&quot;text-gray-400 text-xs&quot;>
                        <Calendar className=&quot;w-3 h-3 inline mr-1&quot; />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className=&quot;text-xl font-bold text-white mb-3 line-clamp-2&quot;>
                      {article.title}
                    </h3>
                    <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>
                      {article.excerpt}
                    </p>
                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <User className=&quot;w-4 h-4 text-gray-400&quot; />
                        <span className=&quot;text-gray-400 text-sm&quot;>{article.author}</span>
                      </div>
                    </div>
                    <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                      {article.tags.slice(0, 2).map((tag) => (
=======
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-gray-800/50 text-purple-400 text-xs font-semibold px-2 py-1 rounded-full">
                        {_article.category}
                      </span>
                      <span className="text-gray-400 text-xs">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        {_new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {_article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {_article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{_article.author}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {_article.tags.slice(0, _2).map(_(tag) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <span
                          key={tag}
                          className=&quot;bg-gray-800/30 text-gray-400 text-xs px-2 py-1 rounded-full border border-gray-700/30&quot;
                        >
                          {_tag}
                        </span>
                      ))}
                    </div>
                    <Link
<<<<<<< HEAD
                      href={`/news/${article.id}`}
                      className=&quot;inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300&quot;
=======
                      href={_`/news/${article.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      Read More
                      <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                    </a>
                  </div>
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=&quot;text-center mb-16&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.2}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6&quot;>
                <Newspaper className=&quot;w-4 h-4 mr-2&quot; />
        <section className=&quot;relative py-20 px-4&quot;>
          <div className=&quot;container mx-auto max-w-6xl&quot;>
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
        {/* Category Filter */}
        <section className=&quot;py-10 px-4&quot;>
          <div className=&quot;container mx-auto max-w-6xl&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;flex flex-wrap justify-center gap-4&quot;
=======
        {_/* Category Filter */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              className="flex flex-wrap justify-center gap-4"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_categories.map(_(category, _index) => (
                <button
                  key={category}
<<<<<<< HEAD
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
<<<<<<< HEAD
                    category === "All News"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600"
import React, { useState } from 'react',
import { motion } from 'framer-motion',
=======
                    category === &quot;All News&quot;
                      ? &quot;bg-gradient-to-r from-blue-500 to-purple-600 text-white&quot;
                      : &quot;bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600&quot;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  Search, Calendar, Clock, User, Tag, 
  ArrowRight, ExternalLink, TrendingUp, 
  BookOpen, Globe, Video
} from 'lucide-react',
import Link from 'next/link',
export default function News() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'ai', name: 'AI & Consciousness', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 6 },
    { id: 'enterprise', name: 'Enterprise IT', count: 5 },
    { id: 'research', name: 'Research & Development', count: 3 },
    { id: 'industry', name: 'Industry Insights', count: 2 }
  ],

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
      tags: ['AI ConsciousnessPlatform LaunchInnovation']
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
      tags: ['Quantum ComputingResearchBreakthrough']
    }
  ],

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
      tags: ['Enterprise AIBest Practices2024 Trends']
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
      tags: ['Autonomous SystemsFuture of WorkInnovation']
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
      tags: ['CybersecurityAI SecurityDigital Protection']
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
      tags: ['Quantum MLResearchTechnology Convergence']
    }
  ],

  const industryInsights = [
    {
      id: 7,
      title: 'The Rise of Conscious AI: Ethical Considerations and Business Impact',
      excerpt: 'Examining the ethical implications of AI consciousness and how businesses can navigate this new frontier responsibly.',
      category: 'industry',
      author: 'Dr. Robert Chang',
      date: '2024-01-01',
      readTime: '6 min read',
      tags: ['AI EthicsBusiness ImpactConsciousness']
    },
    {
      id: 8,
      title: 'Micro-SaaS Revolution: How Small Teams Are Building Big Solutions',
      excerpt: 'Exploring the growing trend of micro-SaaS companies and how they are disrupting traditional software markets.',
      category: 'industry',
      author: 'Lisa Wang',
      date: '2023-12-28',
      readTime: '4 min read',
      tags: ['Micro-SaaSStartupsSoftware Industry']
    }
  ],

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
  ],
=======
                  className={_`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    category === "All News"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600"
import React, _{ useState} from 'react';
import {_Search, _Calendar, _Clock, _User, _Tag, _ArrowRight, _ExternalLink, _TrendingUp, _BookOpen, _Globe, _Video} from 'lucide-react';
import Link from 'next/link';

export default function News() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');

  const _categories = [
    { id: 'all', _name: 'All News', _count: 24},
    {_id: 'ai', _name: 'AI & Consciousness', _count: 8},
    {_id: 'quantum', _name: 'Quantum Computing', _count: 6},
    {_id: 'enterprise', _name: 'Enterprise IT', _count: 5},
    {_id: 'research', _name: 'Research & Development', _count: 3},
    {_id: 'industry', _name: 'Industry Insights', _count: 2}
  ];

  const _featuredNews = [
    {_id: 1, _title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform', _excerpt: 'Our latest breakthrough in artificial consciousness technology promises to revolutionize how businesses interact with AI systems, _enabling unprecedented levels of understanding and collaboration.', _category: 'ai', _author: 'Dr. Sarah Chen', _date: '2024-01-15', _readTime: '5 min read', _image: '/images/news/ai-consciousness-launch.jpg', _featured: true, _tags: ['AI Consciousness', _'Platform Launch', _'Innovation']},
    {_id: 2, _title: 'Quantum Computing Breakthrough: Achieving 1000+ Qubit Stability', _excerpt: 'Our quantum research team has achieved a major milestone in quantum computing stability, _opening new possibilities for complex computational problems.', _category: 'quantum', _author: 'Prof. Michael Rodriguez', _date: '2024-01-12', _readTime: '7 min read', _image: '/images/news/quantum-breakthrough.jpg', _featured: true, _tags: ['Quantum Computing', _'Research', _'Breakthrough']}
  ];

  const _latestNews = [
    {_id: 3, _title: 'Enterprise AI Adoption: Trends and Best Practices for 2024', _excerpt: 'Discover the key trends driving AI adoption in enterprise environments and learn best practices for successful implementation.', _category: 'enterprise', _author: 'Jennifer Kim', _date: '2024-01-10', _readTime: '4 min read', _image: '/images/news/enterprise-ai-trends.jpg', _tags: ['Enterprise AI', _'Best Practices', _'2024 Trends']},
    {_id: 4, _title: 'The Future of Autonomous Business Systems', _excerpt: 'Exploring how autonomous systems are reshaping business operations and what this means for the future of work.', _category: 'research', _author: 'Dr. Alex Thompson', _date: '2024-01-08', _readTime: '6 min read', _image: '/images/news/autonomous-systems.jpg', _tags: ['Autonomous Systems', _'Future of Work', _'Innovation']},
    {_id: 5, _title: 'Cybersecurity in the Age of AI: New Threats and Solutions', _excerpt: 'How artificial intelligence is both creating new cybersecurity challenges and providing innovative solutions to protect digital assets.', _category: 'enterprise', _author: 'Marcus Johnson', _date: '2024-01-05', _readTime: '5 min read', _image: '/images/news/ai-cybersecurity.jpg', _tags: ['Cybersecurity', _'AI Security', _'Digital Protection']},
    {_id: 6, _title: 'Quantum Machine Learning: Bridging Two Revolutionary Technologies', _excerpt: 'Our research team explores the intersection of quantum computing and machine learning, _revealing exciting possibilities for the future.', _category: 'quantum', _author: 'Dr. Elena Petrova', _date: '2024-01-03', _readTime: '8 min read', _image: '/images/news/quantum-ml.jpg', _tags: ['Quantum ML', _'Research', _'Technology Convergence']}
  ];

  const _industryInsights = [
    {_id: 7, _title: 'The Rise of Conscious AI: Ethical Considerations and Business Impact', _excerpt: 'Examining the ethical implications of AI consciousness and how businesses can navigate this new frontier responsibly.', _category: 'industry', _author: 'Dr. Robert Chang', _date: '2024-01-01', _readTime: '6 min read', _tags: ['AI Ethics', _'Business Impact', _'Consciousness']},
    {_id: 8, _title: 'Micro-SaaS Revolution: How Small Teams Are Building Big Solutions', _excerpt: 'Exploring the growing trend of micro-SaaS companies and how they are disrupting traditional software markets.', _category: 'industry', _author: 'Lisa Wang', _date: '2023-12-28', _readTime: '4 min read', _tags: ['Micro-SaaS', _'Startups', _'Software Industry']}
  ];

  const _upcomingEvents = [
    {_id: 1, _title: 'AI Consciousness Summit 2024', _type: 'Conference', _date: '2024-02-15', _time: '9:00 AM - 6:00 PM', _location: 'San Francisco, _CA', _description: 'Join industry leaders and researchers for a deep dive into the future of AI consciousness technology.', _registration: 'https://ziontechgroup.com/events/ai-consciousness-summit-2024'},
    {_id: 2, _title: 'Quantum Computing Workshop', _type: 'Workshop', _date: '2024-02-22', _time: '1:00 PM - 5:00 PM', _location: 'Virtual', _description: 'Hands-on workshop covering quantum computing fundamentals and practical applications.', _registration: 'https://ziontechgroup.com/events/quantum-workshop'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredNews = [...featuredNews, ...latestNews, ...industryInsights].filter(article => {_const _matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
<<<<<<< HEAD
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory,
    return matchesSearch && matchesCategory
  }),

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  },

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'from-cyan-500 to-blue-500',
      quantum: 'from-purple-500 to-pink-500',
      enterprise: 'from-green-500 to-emerald-500',
      research: 'from-orange-500 to-red-500',
      industry: 'from-indigo-500 to-purple-500'
    },
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600'
  },

  return (
    <div className=&quot;min-h-screen bg-black text-white&quot;>
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;
=======
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const _matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;});

  const _formatDate = (_dateString: string) => {_return new Date(dateString).toLocaleDateString('en-US', _{
      year: 'numeric', _month: 'long', _day: 'numeric'});
  };

  const _getCategoryColor = (_category: string) => {_const _colors = {
      ai: 'from-cyan-500 to-blue-500', _quantum: 'from-purple-500 to-pink-500', _enterprise: 'from-green-500 to-emerald-500', _research: 'from-orange-500 to-red-500', _industry: 'from-indigo-500 to-purple-500'};
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (_<div className="min-h-screen bg-black text-white">
      {_/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Latest News & Insights
          </motion.h1>
          <motion.p 
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12&quot;
=======
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Stay updated with the latest developments in AI consciousness, _quantum computing, _and emerging technologies from Zion Tech Group.
          </motion.p>
          
          {_/* Search and Filter */}
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=&quot;max-w-4xl mx-auto&quot;
=======
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
            className="max-w-4xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;relative mb-8&quot;>
              <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
              <input
<<<<<<< HEAD
                type=&quot;text&quot;
                placeholder=&quot;Search news and insights...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300&quot;
              />
            </div>
            
            <div className=&quot;flex flex-wrap gap-3 justify-center&quot;>
              {categories.map((category) => (
                <button
=======
                type="text"
                placeholder="Search news and insights..."
                value={_searchTerm}
                onChange={_(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {_categories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'}`}
                >
                  {_category.name} ({_category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured News Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
=======
      {_/* Featured News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.h2 
    'All NewsCompany NewsPartnershipsAI & EthicsQuantum TechnologySpace TechnologyMicro SAASIT Services',
    'MetaverseIndustry Insights'
  ],

<<<<<<< HEAD
  const formatDate = (dateString: string) => {
    const date = new Date(dateString),
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  },

  return (
    <div className=&quot;min-h-screen bg-black text-white&quot;>
      {/* Hero Section */}
      <section className=&quot;relative py-20 lg:py-32 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20&quot;></div>
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6&quot;
=======
  const _formatDate = (_dateString: string) => {_const _date = new Date(dateString);
    return date.toLocaleDateString('en-US', _{
      year: 'numeric', _month: 'long', _day: 'numeric'});
  };

  return (_<div className="min-h-screen bg-black text-white">
      {_/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Latest News & Insights
          </motion.h1>
          <motion.p 
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8&quot;
=======
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Stay updated with the latest developments in AI, _quantum computing, _space technology, _and more from Zion Tech Group.
          </motion.p>
          <motion.div 
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=&quot;flex flex-wrap justify-center gap-4&quot;
=======
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
            className="flex flex-wrap justify-center gap-4"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <a href=&quot;#featured&quot; className=&quot;bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2&quot;>
              <span>Read Featured News</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </a>
            <a href=&quot;#insights&quot; className=&quot;border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300&quot;>
              Industry Insights
            </a>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Category Filter */}
      <section className=&quot;py-8 border-b border-gray-800&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-wrap gap-2 justify-center&quot;>
            {categories.map((category, index) => (
=======
      {_/* Category Filter */}
      <section className="py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {_categories.map((category, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <button
                key={index}
                className={_`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                {_category}
              </button>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured News */}
      <section id=&quot;featured&quot; className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Featured News */}
      <section id="featured" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Featured News
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Our most important announcements and breakthrough developments.
            </p>
          </motion.div>
          
<<<<<<< HEAD
          <div className=&quot;grid lg:grid-cols-3 gap-8&quot;>
            {featuredNews.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden&quot;
=======
          <div className="grid lg:grid-cols-3 gap-8">
            {_featuredNews.map(_(article, _index) => (
              <motion.article 
                key={article.id}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center&quot;>
                  <Newspaper className=&quot;w-16 h-16 text-purple-400&quot; />
                </div>
<<<<<<< HEAD
                <div className=&quot;p-6&quot;>
                  <div className=&quot;flex items-center gap-2 mb-3&quot;>
                    <span className=&quot;text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full&quot;>
                      {article.category}
                    </span>
                    <span className=&quot;text-xs text-gray-400&quot;>{article.readTime}</span>
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3 line-clamp-2&quot;>
                    {article.title}
                  </h3>
                  <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>
                    {article.excerpt}
                  </p>
                  <div className=&quot;flex items-center justify-between text-sm text-gray-400 mb-4&quot;>
                    <span className=&quot;flex items-center gap-1&quot;>
                      <User className=&quot;w-4 h-4&quot; />
                      {article.author}
                    </span>
                    <span className=&quot;flex items-center gap-1&quot;>
                      <Calendar className=&quot;w-4 h-4&quot; />
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className=&quot;text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded&quot;>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={`/news/${article.id}`} className=&quot;inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300&quot;>
=======
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                      {_article.category}
                    </span>
                    <span className="text-xs text-gray-400">{_article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {_article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {_article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {_article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {_formatDate(article.date)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {_article.tags.map(_(tag, _idx) => (
                      <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                        {_tag}
                      </span>
                    ))}
                  </div>
                  <a href={_`/news/${article.id}`} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>Read More</span>
                    <ArrowRight className=&quot;w-4 h-4&quot; />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Recent News */}
      <section className=&quot;py-20 bg-gradient-to-r from-gray-900 to-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Recent News */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Recent News
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Stay current with our latest developments and industry updates.
            </p>
          </motion.div>
          
<<<<<<< HEAD
          <div className=&quot;grid lg:grid-cols-2 gap-8&quot;>
            {recentNews.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-center gap-2 mb-3&quot;>
                  <span className=&quot;text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full&quot;>
                    {article.category}
                  </span>
                  <span className=&quot;text-xs text-gray-400&quot;>{article.readTime}</span>
                </div>
                <h3 className=&quot;text-lg font-bold text-white mb-3 line-clamp-2&quot;>
                  {article.title}
                </h3>
                <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-2&quot;>
                  {article.excerpt}
                </p>
                <div className=&quot;flex items-center justify-between text-sm text-gray-400 mb-4&quot;>
                  <span className=&quot;flex items-center gap-1&quot;>
                    <User className=&quot;w-4 h-4&quot; />
                    {article.author}
                  </span>
                  <span className=&quot;flex items-center gap-1&quot;>
                    <Calendar className=&quot;w-4 h-4&quot; />
                    {formatDate(article.date)}
                  </span>
                </div>
                <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className=&quot;text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded&quot;>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/news/${article.id}`} className=&quot;inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300&quot;>
=======
          <div className="grid lg:grid-cols-2 gap-8">
            {_recentNews.map(_(article, _index) => (
              <motion.article 
                key={article.id}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                    {_article.category}
                  </span>
                  <span className="text-xs text-gray-400">{_article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {_article.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {_article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {_article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {_formatDate(article.date)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {_article.tags.map(_(tag, _idx) => (
                    <span key={idx} className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                      {_tag}
                    </span>
                  ))}
                </div>
                <a href={_`/news/${article.id}`} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <span>Read More</span>
                  <ArrowRight className=&quot;w-4 h-4&quot; />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Industry Insights */}
      <section id=&quot;insights&quot; className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Industry Insights */}
      <section id="insights" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Industry Insights
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Deep analysis and thought leadership on emerging technologies and industry trends.
            </p>
          </motion.div>
          
<<<<<<< HEAD
          <div className=&quot;grid lg:grid-cols-3 gap-8&quot;>
            {industryInsights.map((insight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-center gap-2 mb-3&quot;>
                  <span className=&quot;text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full&quot;>
                    {insight.category}
                  </span>
                  <span className=&quot;text-xs text-gray-400&quot;>{insight.readTime}</span>
                </div>
                <h3 className=&quot;text-lg font-bold text-white mb-3 line-clamp-2&quot;>
                  {insight.title}
                </h3>
                <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>
                  {insight.excerpt}
                </p>
                <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                  {insight.tags.map((tag, idx) => (
                    <span key={idx} className=&quot;text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded&quot;>
                      {tag}
=======
          <div className="grid lg:grid-cols-3 gap-8">
            {_industryInsights.map(_(insight, _index) => (_<motion.div 
                key={index}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                    {_insight.category}
                  </span>
                  <span className="text-xs text-gray-400">{_insight.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {_insight.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {_insight.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {_insight.tags.map((tag, _idx) => (
                    <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                      {_tag}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  ))}
                </div>
                <a href=&quot;#&quot; className=&quot;inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300&quot;>
                  <span>Read Insight</span>
                  <ArrowRight className=&quot;w-4 h-4&quot; />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Newsletter Signup */}
      <section className=&quot;py-20 bg-gradient-to-r from-gray-900 to-black&quot;>
        <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
=======
      {_/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div 
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Stay Updated
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
              <input
                type=&quot;email&quot;
                placeholder=&quot;Enter your email&quot;
                className=&quot;flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500&quot;
              />
              <button className=&quot;px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300&quot;>
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

}
<<<<<<< HEAD
                    <div className=&quot;flex items-center gap-3 mb-4&quot;>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className=&quot;text-gray-400 text-sm flex items-center gap-1&quot;>
                        <Calendar className=&quot;w-4 h-4&quot; />
                        {formatDate(article.date)}
                      </span>
                    </div>
                    
                    <h3 className=&quot;text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                      {article.title}
                    </h3>
                    
                    <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                      {article.excerpt}
                    </p>
                    
                    <div className=&quot;flex items-center justify-between&quot;>
                      <div className=&quot;flex items-center gap-4 text-sm text-gray-400&quot;>
                        <span className=&quot;flex items-center gap-1&quot;>
                          <User className=&quot;w-4 h-4&quot; />
                          {article.author}
                        </span>
                        <span className=&quot;flex items-center gap-1&quot;>
                          <Clock className=&quot;w-4 h-4&quot; />
                          {article.readTime}
=======
                    <div className="flex items-center gap-3 mb-4">
                      <span className={_`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {_categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {_formatDate(article.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {_article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {_article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {_article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {_article.readTime}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </span>
                      </div>
                      
                      <ArrowRight className=&quot;w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300&quot; />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Latest News Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-4xl md:text-5xl font-bold text-center mb-16&quot;
=======
      {_/* Latest News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Latest News
          </motion.h2>
          
<<<<<<< HEAD
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {filteredNews.slice(2, 8).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group cursor-pointer&quot;
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_filteredNews.slice(2, _8).map(_(article, _index) => (
              <motion.article
                key={article.id}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group cursor-pointer"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300&quot;>
                  <div className=&quot;aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center&quot;>
                    <BookOpen className=&quot;w-12 h-12 text-cyan-400&quot; />
                  </div>
                  
<<<<<<< HEAD
                  <div className=&quot;p-6&quot;>
                    <div className=&quot;flex items-center gap-2 mb-3&quot;>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2&quot;>
                      {article.title}
                    </h3>
                    
                    <p className=&quot;text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3&quot;>
                      {article.excerpt}
                    </p>
                    
                    <div className=&quot;flex items-center justify-between text-sm text-gray-400&quot;>
                      <span className=&quot;flex items-center gap-1&quot;>
                        <User className=&quot;w-4 h-4&quot; />
                        {article.author}
                      </span>
                      <span className=&quot;flex items-center gap-1&quot;>
                        <Clock className=&quot;w-4 h-4&quot; />
                        {article.readTime}
=======
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={_`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {_categories.find(c => c.id === article.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {_article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {_article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {_article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {_article.readTime}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Upcoming Events Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-4xl md:text-5xl font-bold text-center mb-16&quot;
=======
      {_/* Upcoming Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Upcoming Events
          </motion.h2>
          
<<<<<<< HEAD
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-start gap-4&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0&quot;>
                    {event.type === 'Conference' ? <Globe className=&quot;w-8 h-8&quot; /> : <Video className=&quot;w-8 h-8&quot; />}
                  </div>
                  
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center gap-2 mb-2&quot;>
                      <span className=&quot;px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full&quot;>
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className=&quot;text-xl font-bold mb-3&quot;>
                      {event.title}
                    </h3>
                    
                    <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                      {event.description}
                    </p>
                    
                    <div className=&quot;space-y-2 text-sm text-gray-400 mb-4&quot;>
                      <div className=&quot;flex items-center gap-2&quot;>
                        <Calendar className=&quot;w-4 h-4&quot; />
                        {formatDate(event.date)} at {event.time}
                      </div>
                      <div className=&quot;flex items-center gap-2&quot;>
                        <Globe className=&quot;w-4 h-4&quot; />
                        {event.location}
=======
          <div className="grid md:grid-cols-2 gap-8">
            {_upcomingEvents.map(_(event, _index) => (
              <motion.div
                key={event.id}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {_event.type === 'Conference' ? <Globe className="w-8 h-8" /> : <Video className="w-8 h-8" />}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {_event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      {_event.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {_event.description}
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {_formatDate(event.date)} at {_event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        {_event.location}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                    
                    <a
<<<<<<< HEAD
                      href={event.registration}
                      target=&quot;_blank&quot;
                      rel=&quot;noopener noreferrer&quot;
                      className=&quot;inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&quot;
=======
                      href={_event.registration}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      Register Now
                      <ExternalLink className=&quot;w-4 h-4&quot; />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Newsletter Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20&quot;
=======
      {_/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
              Stay Updated
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Get the latest news, insights, and updates delivered directly to your inbox.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
              <input
                type=&quot;email&quot;
                placeholder=&quot;Enter your email address&quot;
                className=&quot;flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300&quot;
              />
              <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;>
                Subscribe
              </button>
            </div>
            
            <p className=&quot;text-sm text-gray-400 mt-4&quot;>
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className=&quot;text-center mb-16&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.6}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl font-bold mb-4&quot;>Latest News</h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Stay updated with our most recent developments and announcements
              </p>
            </motion.div>

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
        {/* Newsletter Signup */}
              <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
=======
        {_/* Newsletter Signup */}
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Stay Updated
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-2xl mx-auto mb-8&quot;>
                Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing.
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.8}}
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

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* News Categories */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* News Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
                News Categories
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Explore news by category to find updates in your areas of interest.
              </p>
            </motion.div>

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Recent News */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-black/20&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Recent News */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
                Recent News
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Stay updated with our latest announcements and developments.
              </p>
            </motion.div>

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Media Contact */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
        {_/* Media Contact */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
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
                </a>
                <a
                  href=&quot;/press&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300&quot;
                >
                  Press Kit
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
      {_/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
              Ready to Stay Informed?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Explore our latest research, industry insights, and technology breakthroughs 
              that are shaping the future of AI and quantum computing.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <Link 
                href=&quot;/blog&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;
              >
                Explore Our Blog
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </a>
              <Link 
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300&quot;
              >
                Contact Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
<<<<<<< HEAD
      {/* Call to Action */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
=======
      {_/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div 
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Get in Touch
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
              Have questions about our news or want to learn more about our latest developments? Contact our team.
            </p>
<<<<<<< HEAD
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 hover: from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
=======
            <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
              <a href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                <span>Contact Us</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </a>
              <a href=&quot;/about&quot; className=&quot;border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300&quot;>
                About Zion Tech Group
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
      title: &quot;Partnership with TechCorp Announced for Cloud Infrastructure&quot;,
      excerpt: &quot;Strategic collaboration to deliver next-generation cloud automation solutions for enterprise clients worldwide.&quot;,
      date: &quot;2025-01-18&quot;,
      category: &quot;Partnerships&quot;,
      author: &quot;Sarah Chen&quot;,
      readTime: &quot;2 min read&quot;,
      image: &quot;🤝&quot;
    },
<<<<<<< HEAD
    {
      id: 3,
      title: &quot;AI Ethics Guidelines Released for Responsible Development&quot;,
      excerpt: &quot;Comprehensive framework ensuring our AI solutions are developed with transparency, fairness, and societal benefit in mind.&quot;,
      date: &quot;2025-01-17&quot;,
      category: &quot;Innovation&quot;,
      author: &quot;Dr. Emily Watson&quot;,
      readTime: &quot;4 min read&quot;,
      image: &quot;⚖️&quot;
    },
    {
      id: 4,
      title: &quot;New Office Opening in Singapore&quot;,
      excerpt: &quot;Expanding our global presence to better serve clients in the Asia-Pacific region with local expertise and support.&quot;,
      date: &quot;2025-01-16&quot;,
      category: &quot;Company News&quot;,
      author: &quot;Marcus Rodriguez&quot;,
      readTime: &quot;2 min read&quot;,
      image: &quot;🌏&quot;
    },
    {
      id: 5,
<<<<<<< HEAD
      title: "Machine Learning Model Achieves 99.7% Accuracy",
      excerpt: "Breakthrough in predictive analytics demonstrates our commitment to pushing the boundaries of AI window.window.window.performance.",
      date: "2025-01-15",
      category: "Technology",
      author: "Dr. James Wilson",
      readTime: "5 min read",
      image: "🧠"
=======
      title: &quot;Machine Learning Model Achieves 99.7% Accuracy&quot;,
      excerpt: &quot;Breakthrough in predictive analytics demonstrates our commitment to pushing the boundaries of AI performance.&quot;,
      date: &quot;2025-01-15&quot;,
      category: &quot;Technology&quot;,
      author: &quot;Dr. James Wilson&quot;,
      readTime: &quot;5 min read&quot;,
      image: &quot;🧠&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    },
    {
      id: 6,
      title: &quot;Annual Sustainability Report Published&quot;,
      excerpt: &quot;Comprehensive overview of our environmental impact and commitment to sustainable technology development.&quot;,
      date: &quot;2025-01-14&quot;,
      category: &quot;Sustainability&quot;,
      author: &quot;Lisa Park&quot;,
      readTime: &quot;6 min read&quot;,
      image: &quot;🌱&quot;
    },
    {
      id: 7,
      title: &quot;Customer Success Story: Retail Automation&quot;,
      excerpt: &quot;How we helped a major retailer increase efficiency by 300% through intelligent automation systems.&quot;,
      date: &quot;2025-01-13&quot;,
      category: &quot;Case Studies&quot;,
      author: &quot;Alex Thompson&quot;,
      readTime: &quot;4 min read&quot;,
      image: &quot;📊&quot;
    },
    {
      id: 8,
      title: &quot;New Research Paper on Autonomous Systems&quot;,
      excerpt: &quot;Published in leading AI journal, our research explores the future of self-managing technology infrastructure.&quot;,
      date: &quot;2025-01-12&quot;,
      category: &quot;Research&quot;,
      author: &quot;Prof. Maria Garcia&quot;,
      readTime: &quot;7 min read&quot;,
      image: &quot;📚&quot;
    }
  ],

<<<<<<< HEAD
  const categories = ["All", "Company News", "Partnerships", "Innovation", "Technology", "Sustainability", "Case Studies", "Research"],
=======
  const categories = [&quot;All&quot;, &quot;Company News&quot;, &quot;Partnerships&quot;, &quot;Innovation&quot;, &quot;Technology&quot;, &quot;Sustainability&quot;, &quot;Case Studies&quot;, &quot;Research&quot;];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    {_id: 3, _title: "AI Ethics Guidelines Released for Responsible Development", _excerpt: "Comprehensive framework ensuring our AI solutions are developed with transparency, _fairness, _and societal benefit in mind.", _date: "2025-01-17", _category: "Innovation", _author: "Dr. Emily Watson", _readTime: "4 min read", _image: "⚖️"},
    {_id: 4, _title: "New Office Opening in Singapore", _excerpt: "Expanding our global presence to better serve clients in the Asia-Pacific region with local expertise and support.", _date: "2025-01-16", _category: "Company News", _author: "Marcus Rodriguez", _readTime: "2 min read", _image: "🌏"},
    {_id: 5, _title: "Machine Learning Model Achieves 99.7% Accuracy", _excerpt: "Breakthrough in predictive analytics demonstrates our commitment to pushing the boundaries of AI performance.", _date: "2025-01-15", _category: "Technology", _author: "Dr. James Wilson", _readTime: "5 min read", _image: "🧠"},
    {_id: 6, _title: "Annual Sustainability Report Published", _excerpt: "Comprehensive overview of our environmental impact and commitment to sustainable technology development.", _date: "2025-01-14", _category: "Sustainability", _author: "Lisa Park", _readTime: "6 min read", _image: "🌱"},
    {_id: 7, _title: "Customer Success Story: Retail Automation", _excerpt: "How we helped a major retailer increase efficiency by 300% through intelligent automation systems.", _date: "2025-01-13", _category: "Case Studies", _author: "Alex Thompson", _readTime: "4 min read", _image: "📊"},
    {_id: 8, _title: "New Research Paper on Autonomous Systems", _excerpt: "Published in leading AI journal, _our research explores the future of self-managing technology infrastructure.", _date: "2025-01-12", _category: "Research", _author: "Prof. Maria Garcia", _readTime: "7 min read", _image: "📚"}
  ];

  const _categories = ["All", "Company News", "Partnerships", "Innovation", "Technology", "Sustainability", "Case Studies", "Research"];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
        <title>News | Zion Tech Group - Latest Updates & Insights</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Stay informed with the latest news, company updates, and industry insights from Zion Tech Group.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;News - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Latest company news, partnerships, and technology insights.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
=======
        <meta name="description" content="Stay informed with the latest news, _company updates, _and industry insights from Zion Tech Group." />
        <meta property="og:title" content="News - Zion Tech Group" />
        <meta property="og:description" content="Latest company news, _partnerships, _and technology insights." />
        <meta name="twitter:card" content="summary_large_image" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white&quot;>
        <main className=&quot;container mx-auto px-6 py-12&quot;>
          <section className=&quot;text-center mb-16&quot;>
            <h1 className=&quot;text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent&quot;>
              Latest News
            </h1>
<<<<<<< HEAD
            <p className=&quot;text-xl text-white/80 max-w-3xl mx-auto&quot;>
              Stay updated with company news, partnerships, innovations, and industry insights
            </p>
          </section>

          <section className=&quot;mx-auto max-w-6xl&quot;>
            {/* Category Filter */}
            <div className=&quot;flex flex-wrap justify-center gap-3 mb-12&quot;>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                    category === &quot;All&quot;
                      ? &quot;bg-cyan-400 text-white border-cyan-400&quot;
                      : &quot;bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-cyan-400/50&quot;
                  }`}
=======
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stay updated with company news, _partnerships, _innovations, _and industry insights
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            {_/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {_categories.map((category) => (
                <button
                  key={category}
                  className={_`px-4 py-2 rounded-full border transition-all duration-200 ${
                    category === "All"
                      ? "bg-cyan-400 text-white border-cyan-400"
                      : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-cyan-400/50"}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  {_category}
                </button>
              ))}
            </div>

<<<<<<< HEAD
            {/* Featured Article */}
            {newsArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className=&quot;bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-cyan-400/30&quot;>
                <div className=&quot;flex items-start gap-6&quot;>
                  <div className=&quot;text-6xl&quot;>{article.image}</div>
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center gap-2 mb-3&quot;>
                      <span className=&quot;px-3 py-1 bg-cyan-400/30 text-cyan-300 text-sm rounded-full border border-cyan-400/50&quot;>
                        Featured
                      </span>
                      <span className=&quot;px-3 py-1 bg-white/20 text-white/80 text-sm rounded-full border border-white/30&quot;>
                        {article.category}
                      </span>
                    </div>
                    <h2 className=&quot;text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors&quot;>
                      {article.title}
                    </h2>
                    <p className=&quot;text-white/80 mb-4 text-lg leading-relaxed&quot;>
                      {article.excerpt}
                    </p>
                    <div className=&quot;flex items-center gap-4 text-sm text-white/60 mb-4&quot;>
                      <span>By {article.author}</span>
=======
            {_/* Featured Article */}
            {_newsArticles.filter(article => article.featured).map(_(article) => (
              <div key={article.id} className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-cyan-400/30">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{_article.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-400/30 text-cyan-300 text-sm rounded-full border border-cyan-400/50">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/20 text-white/80 text-sm rounded-full border border-white/30">
                        {_article.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors">
                      {_article.title}
                    </h2>
                    <p className="text-white/80 mb-4 text-lg leading-relaxed">
                      {_article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                      <span>By {_article.author}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <span>•</span>
                      <span>{_article.date}</span>
                      <span>•</span>
                      <span>{_article.readTime}</span>
                    </div>
                    <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200&quot;>
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            ))}

<<<<<<< HEAD
            {/* News Grid */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {newsArticles.filter(article => !article.featured).map((article) => (
                <article key={article.id} className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105&quot;>
                  <div className=&quot;text-4xl mb-4 text-center&quot;>{article.image}</div>
                  <div className=&quot;mb-3&quot;>
                    <span className=&quot;inline-block px-2 py-1 bg-white/20 text-white/80 text-xs rounded-full border border-white/30&quot;>
                      {article.category}
                    </span>
                  </div>
                  <h3 className=&quot;text-lg font-bold mb-3 text-white hover:text-cyan-400 transition-colors&quot;>
                    {article.title}
                  </h3>
                  <p className=&quot;text-white/70 mb-4 text-sm leading-relaxed&quot;>
                    {article.excerpt}
                  </p>
                  <div className=&quot;flex items-center justify-between text-sm text-white/50 mb-4&quot;>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className=&quot;text-xs text-white/60 mb-4&quot;>
                    By {article.author}
=======
            {_/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_newsArticles.filter(article => !article.featured).map(_(article) => (
                <article key={article.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4 text-center">{_article.image}</div>
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-white/20 text-white/80 text-xs rounded-full border border-white/30">
                      {_article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                    {_article.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {_article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/50 mb-4">
                    <span>{_article.date}</span>
                    <span>{_article.readTime}</span>
                  </div>
                  <div className="text-xs text-white/60 mb-4">
                    By {_article.author}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                  <button className=&quot;w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200&quot;>
                    Read More
                  </button>
                </article>
              ))}
            </div>

<<<<<<< HEAD
            {/* Newsletter Signup */}
            <div className=&quot;text-center mt-16&quot;>
              <div className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-8&quot;>
                <h2 className=&quot;text-2xl font-bold mb-4 text-cyan-400&quot;>Stay in the Loop</h2>
                <p className=&quot;text-white/70 mb-6&quot;>
=======
            {_/* Newsletter Signup */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Stay in the Loop</h2>
                <p className="text-white/70 mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Get the latest news and updates delivered directly to your inbox. Never miss an important announcement.
                </p>
<<<<<<< HEAD
                <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
=======
                <div className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  <input
                    type=&quot;email&quot;
                    placeholder=&quot;Enter your email&quot;
                    className=&quot;flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50&quot;
                  />
                  <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200&quot;>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
