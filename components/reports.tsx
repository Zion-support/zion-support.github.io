<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  FileText,
  Download, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  TrendingUp,
  BarChart3,
  Brain,
  Atom,
  Globe,
  Shield,
  Zap,
  Eye,
  Clock,
  Award
} from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
const ReportsPage: React.FC = () => {
  const reports = [
    {
      title: 'The Future of Quantum Computing in Enterprise: 2024-2030',
      excerpt: 'Comprehensive analysis of quantum computing adoption trends, market opportunities, and strategic implications for businesses across industries.',
      date: '2024-01-15',
      author: 'Dr. Sarah Chen & Quantum Research Team',
      category: 'Technology Trends',
      tags: ['Quantum ComputingEnterpriseMarket AnalysisFuture Tech'],
      pages: 45,
      downloads: 1247,
      views: 5678,
      featured: true,
      icon: <Atom className=&quot;w-8 h-8&quot; />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Adoption in Fortune 500 Companies: ROI Analysis & Best Practices',
      excerpt: 'In-depth study of artificial intelligence implementation success stories, return on investment metrics, and strategic recommendations.',
      date: '2024-01-10',
      author: 'AI Research Division',
      category: 'Business Intelligence',
      tags: ['AIROIFortune 500Best Practices'],
      pages: 38,
      downloads: 892,
      views: 3456,
      featured: false,
      icon: <Brain className=&quot;w-8 h-8&quot; />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Threats in the Age of AI: 2024 Threat Landscape',
      excerpt: 'Analysis of emerging cybersecurity challenges, AI-powered threats, and defense strategies for modern organizations.',
      date: '2024-01-08',
      author: 'Cybersecurity Research Team',
      category: 'Security',
      tags: ['CybersecurityAI ThreatsThreat LandscapeDefense'],
      pages: 52,
      downloads: 1567,
      views: 6789,
      featured: false,
      icon: <Shield className=&quot;w-8 h-8&quot; />,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Global Tech Investment Trends: Venture Capital & Innovation Funding',
      excerpt: 'Comprehensive overview of technology investment patterns, emerging sectors, and funding opportunities worldwide.',
      date: '2024-01-05',
      author: 'Market Research Team',
      category: 'Market Analysis',
      tags: ['Venture CapitalInvestmentInnovationGlobal Markets'],
      pages: 41,
      downloads: 734,
      views: 2890,
      featured: false,
      icon: <TrendingUp className=&quot;w-8 h-8&quot; />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Edge Computing & IoT: Transforming Industries in Real-Time',
      excerpt: 'Research on edge computing adoption, Internet of Things integration, and industry transformation opportunities.',
      date: '2024-01-03',
      author: 'IoT Research Division',
      category: 'Emerging Tech',
      tags: ['Edge ComputingIoTIndustry 4.0Real-time'],
      pages: 36,
      downloads: 623,
      views: 2345,
      featured: false,
      icon: <Zap className=&quot;w-8 h-8&quot; />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Sustainable Technology: Green Computing & Environmental Impact',
      excerpt: 'Analysis of sustainable technology practices, environmental impact assessment, and green computing solutions.',
      date: '2024-01-01',
      author: 'Sustainability Research Team',
      category: 'Sustainability',
      tags: ['Green ComputingSustainabilityEnvironmental ImpactClean Tech'],
      pages: 43,
      downloads: 445,
      views: 1789,
      featured: false,
      icon: <Globe className=&quot;w-8 h-8&quot; />,
      color: 'from-teal-500 to-green-500'
    }
  ],

  return (
    <UltraAdvancedFuturisticBackground>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Research Reports - Zion Tech Group | Industry Analysis & Technology Insights</title>
          <meta name=&quot;description&quot; content=&quot;Access Zion Tech Group's comprehensive research reports, whitepapers, and industry analysis covering AI, quantum computing, cybersecurity, and emerging technologies.&quot; />
=======
import React from 'react';
import Head from 'next/head';
import {_FileText, _Download, _Calendar, _User, _Tag, _ArrowRight, _TrendingUp, _BarChart3, _Brain, _Atom, _Globe, _Shield, _Zap, _Eye, _Clock, _Award} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

const ReportsPage: React.FC = () => {_const _reports = [
    {
      title: 'The Future of Quantum Computing in Enterprise: 2024-2030', _excerpt: 'Comprehensive analysis of quantum computing adoption trends, _market opportunities, _and strategic implications for businesses across industries.', _date: '2024-01-15', _author: 'Dr. Sarah Chen & Quantum Research Team', _category: 'Technology Trends', _tags: ['Quantum Computing', _'Enterprise', _'Market Analysis', _'Future Tech'], _pages: 45, _downloads: 1247, _views: 5678, _featured: true, _icon: <Atom className="w-8 h-8" />, _color: 'from-purple-500 to-pink-500'},
    {_title: 'AI Adoption in Fortune 500 Companies: ROI Analysis & Best Practices', _excerpt: 'In-depth study of artificial intelligence implementation success stories, _return on investment metrics, _and strategic recommendations.', _date: '2024-01-10', _author: 'AI Research Division', _category: 'Business Intelligence', _tags: ['AI', _'ROI', _'Fortune 500', _'Best Practices'], _pages: 38, _downloads: 892, _views: 3456, _featured: false, _icon: <Brain className="w-8 h-8" />, _color: 'from-blue-500 to-cyan-500'},
    {_title: 'Cybersecurity Threats in the Age of AI: 2024 Threat Landscape', _excerpt: 'Analysis of emerging cybersecurity challenges, _AI-powered threats, _and defense strategies for modern organizations.', _date: '2024-01-08', _author: 'Cybersecurity Research Team', _category: 'Security', _tags: ['Cybersecurity', _'AI Threats', _'Threat Landscape', _'Defense'], _pages: 52, _downloads: 1567, _views: 6789, _featured: false, _icon: <Shield className="w-8 h-8" />, _color: 'from-red-500 to-orange-500'},
    {_title: 'Global Tech Investment Trends: Venture Capital & Innovation Funding', _excerpt: 'Comprehensive overview of technology investment patterns, _emerging sectors, _and funding opportunities worldwide.', _date: '2024-01-05', _author: 'Market Research Team', _category: 'Market Analysis', _tags: ['Venture Capital', _'Investment', _'Innovation', _'Global Markets'], _pages: 41, _downloads: 734, _views: 2890, _featured: false, _icon: <TrendingUp className="w-8 h-8" />, _color: 'from-green-500 to-emerald-500'},
    {_title: 'Edge Computing & IoT: Transforming Industries in Real-Time', _excerpt: 'Research on edge computing adoption, _Internet of Things integration, _and industry transformation opportunities.', _date: '2024-01-03', _author: 'IoT Research Division', _category: 'Emerging Tech', _tags: ['Edge Computing', _'IoT', _'Industry 4.0', _'Real-time'], _pages: 36, _downloads: 623, _views: 2345, _featured: false, _icon: <Zap className="w-8 h-8" />, _color: 'from-yellow-500 to-orange-500'},
    {_title: 'Sustainable Technology: Green Computing & Environmental Impact', _excerpt: 'Analysis of sustainable technology practices, _environmental impact assessment, _and green computing solutions.', _date: '2024-01-01', _author: 'Sustainability Research Team', _category: 'Sustainability', _tags: ['Green Computing', _'Sustainability', _'Environmental Impact', _'Clean Tech'], _pages: 43, _downloads: 445, _views: 1789, _featured: false, _icon: <Globe className="w-8 h-8" />, _color: 'from-teal-500 to-green-500'}
  ];

  return (_<UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Research Reports - Zion Tech Group | Industry Analysis & Technology Insights</title>
          <meta name="description" content="Access Zion Tech Group's comprehensive research reports, _whitepapers, _and industry analysis covering AI, _quantum computing, _cybersecurity, _and emerging technologies." />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Head>

        <QuickNavigation />

<<<<<<< HEAD
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {categories.map((category) => (
            <Link 
              key={category.name}
              href={category.href}
              className=&quot;group bg-slate-900/50 border border-white/10 rounded-lg p-8 hover:border-cyan-400/50 transition-all hover:scale-105&quot;
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {_categories.map((category) => (_<Link 
              key={category.name}
              href={_category.href}
              className="group bg-slate-900/50 border border-white/10 rounded-lg p-8 hover:border-cyan-400/50 transition-all hover:scale-105"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Research Reports
            </motion.h1>
            <motion.p 
<<<<<<< HEAD
              className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12&quot;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
=======
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Access our comprehensive research, _industry analysis, _and technology insights that drive innovation and strategic decision-making.
            </motion.p>
            
            <motion.div
<<<<<<< HEAD
              className=&quot;flex flex-wrap justify-center gap-4 text-sm text-gray-400&quot;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className=&quot;flex items-center space-x-2&quot;>
                <FileText className=&quot;w-5 h-5&quot; />
                <span>{reports.length} Reports Available</span>
              </span>
              <span className=&quot;flex items-center space-x-2&quot;>
                <Download className=&quot;w-5 h-5&quot; />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.downloads, 0))} Downloads</span>
              </span>
              <span className=&quot;flex items-center space-x-2&quot;>
                <Eye className=&quot;w-5 h-5&quot; />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.views, 0))} Views</span>
=======
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.4}}
            >
              <span className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>{_reports.length} Reports Available</span>
              </span>
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>{_formatNumber(reports.reduce((sum, _r) => sum + r.downloads, _0))} Downloads</span>
              </span>
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>{_formatNumber(_reports.reduce((sum, _r) => sum + r.views, _0))} Views</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </span>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Featured Report */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div 
              className=&quot;text-center mb-16&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
=======
        {_/* Featured Report */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Featured Report
              </h2>
            </motion.div>

            {_reports.filter(report => report.featured).map(_(report, _index) => (
              <motion.div
                key={index}
<<<<<<< HEAD
                className=&quot;bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12 hover:border-cyan-400/40 transition-all duration-300&quot;
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className=&quot;flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8&quot;>
                  <div className={`w-24 h-24 bg-gradient-to-br ${report.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
                    {report.icon}
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center space-x-4 mb-4&quot;>
                      <span className=&quot;bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium&quot;>
                        {report.category}
                      </span>
                      <span className=&quot;text-gray-400 text-sm flex items-center space-x-1&quot;>
                        <Calendar className=&quot;w-4 h-4&quot; />
                        <span>{formatDate(report.date)}</span>
                      </span>
                    </div>
                    <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>{report.title}</h3>
                    <p className=&quot;text-xl text-gray-300 leading-relaxed mb-6&quot;>{report.excerpt}</p>
                    
                    <div className=&quot;flex flex-wrap items-center gap-6 mb-6&quot;>
                      <span className=&quot;text-gray-400 text-sm flex items-center space-x-1&quot;>
                        <User className=&quot;w-4 h-4&quot; />
                        <span>{report.author}</span>
                      </span>
                      <span className=&quot;text-gray-400 text-sm flex items-center space-x-1&quot;>
                        <FileText className=&quot;w-4 h-4&quot; />
                        <span>{report.pages} pages</span>
                      </span>
                      <span className=&quot;text-gray-400 text-sm flex items-center space-x-1&quot;>
                        <Download className=&quot;w-4 h-4&quot; />
                        <span>{formatNumber(report.downloads)} downloads</span>
                      </span>
                      <span className=&quot;text-gray-400 text-sm flex items-center space-x-1&quot;>
                        <Eye className=&quot;w-4 h-4&quot; />
                        <span>{formatNumber(report.views)} views</span>
                      </span>
                    </div>
                    
                    <div className=&quot;flex flex-wrap gap-2 mb-6&quot;>
                      {report.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className=&quot;bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm&quot;>
                          {tag}
=======
                className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12 hover:border-cyan-400/40 transition-all duration-300"
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8}}
                viewport={_{ once: true}}
              >
                <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
                  <div className={_`w-24 h-24 bg-gradient-to-br ${report.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
                    {_report.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {_report.category}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{_formatDate(report.date)}</span>
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{_report.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">{_report.excerpt}</p>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-6">
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{_report.author}</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{_report.pages} pages</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{_formatNumber(report.downloads)} downloads</span>
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{_formatNumber(report.views)} views</span>
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {_report.tags.map(_(tag, _tagIndex) => (
                        <span key={tagIndex} className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {_tag}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                  <button className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2&quot;>
                    <Download className=&quot;w-5 h-5&quot; />
                    <span>Download Full Report</span>
                  </button>
                  <button className=&quot;border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-2&quot;>
                    <Eye className=&quot;w-5 h-5&quot; />
                    <span>Preview Report</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

<<<<<<< HEAD
        {/* Categories Filter */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-black/20&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div 
              className=&quot;text-center mb-16&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
=======
        {_/* Categories Filter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                All Reports
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Explore our comprehensive research across different technology domains
              </p>
            </motion.div>

            {_/* Category Pills */}
            <motion.div 
<<<<<<< HEAD
              className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
=======
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              viewport={_{ once: true}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_categories.map(_(category, _index) => (
                <button
                  key={index}
                  className={_`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}`}
                >
                  {_category.name} ({_category.count})
                </button>
              ))}
            </motion.div>

<<<<<<< HEAD
            {/* Reports Grid */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {reports.filter(report => !report.featured).map((report, index) => (
                <motion.article
                  key={index}
                  className=&quot;bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
=======
            {_/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_reports.filter(report => !report.featured).map(_(report, _index) => (
                <motion.article
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30"
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  viewport={_{ once: true}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className={_`w-16 h-16 bg-gradient-to-br ${report.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                    {_report.icon}
                  </div>
                  
<<<<<<< HEAD
                  <div className=&quot;flex items-center space-x-4 mb-4&quot;>
                    <span className=&quot;bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium&quot;>
                      {report.category}
                    </span>
                    <span className=&quot;text-gray-400 text-sm flex items-center space-x-1&quot;>
                      <Calendar className=&quot;w-4 h-4&quot; />
                      <span>{formatDate(report.date)}</span>
                    </span>
                  </div>
                  
                  <h3 className=&quot;text-xl font-bold text-white mb-4 line-clamp-3&quot;>{report.title}</h3>
                  <p className=&quot;text-gray-300 mb-6 line-clamp-4&quot;>{report.excerpt}</p>
                  
                  <div className=&quot;flex items-center justify-between mb-6&quot;>
                    <span className=&quot;text-gray-400 text-sm flex items-center space-x-1&quot;>
                      <FileText className=&quot;w-4 h-4&quot; />
                      <span>{report.pages} pages</span>
                    </span>
                    <span className=&quot;text-gray-400 text-sm flex items-center space-x-1&quot;>
                      <Download className=&quot;w-4 h-4&quot; />
                      <span>{formatNumber(report.downloads)}</span>
                    </span>
                  </div>
                  
                  <div className=&quot;flex items-center justify-between&quot;>
                    <span className=&quot;text-gray-400 text-sm flex items-center space-x-1&quot;>
                      <User className=&quot;w-4 h-4&quot; />
                      <span>{report.author.split('&')[0].trim()}</span>
=======
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {_report.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{_formatDate(report.date)}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-3">{_report.title}</h3>
                  <p className="text-gray-300 mb-6 line-clamp-4">{_report.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <FileText className="w-4 h-4" />
                      <span>{_report.pages} pages</span>
                    </span>
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{_formatNumber(report.downloads)}</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{_report.author.split('&')[0].trim()}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                    <button className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-200 inline-flex items-center space-x-1&quot;>
                      <span>Download</span>
                      <Download className=&quot;w-4 h-4&quot; />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              className=&quot;bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
=======
        {_/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12"
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Need Custom Research?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges.
              </p>
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                <a
                  href=&quot;/contact&quot;
                  className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2&quot;
                >
                  <span>Request Custom Research</span>
                  <ArrowRight className=&quot;w-5 h-5&quot; />
                </a>
                <a
                  href=&quot;/services&quot;
                  className=&quot;border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200&quot;
                >
                  View Research Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
},

export default ReportsPage,