<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';
  const featuredNews = [;
    {;
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform';,;
      excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.';,;
      author: 'Press Team';,;
      date: '2025-01-15';,;
      author: 'Dr. Kleber';,;
      featured: true;,;
      image: '/api/placeholder/600/400';,;']
      tags: ['AI ConsciousnessBreakthrough';, 'Innovation'],;
      readTime:'5 min read';
    },;
      title: 'Quantum Computing Breakthrough:Solving Complex Optimization Problems';,;
      excerpt: 'Our quantum team achieves significant milestone in solving previously impossible computational challenges.';,;
      author: 'Research Team';,;
      date: '2025-01-12';,;
      category: 'Research';,;
      readTime: '6 min read';,;
      image: '/news/quantum-breakthrough.jpg';,;
      tags: ['Quantum ComputingResearch';, 'Breakthrough'],;
      icon: <Atom className="w-6 h-6" />;,;"

    <UltraFuturisticBackground>;
"
      <div className="min-h-screen">;"
</div>
        <Head>;

      featured:true;
    },;
    {;
<<<<<<< HEAD

=======
      }
      "id":2,;
      "title":"New Partnership with Global Healthcare Consortium",;"
      "excerpt":"We're excited to announce our strategic partnership with the Global Healthcare Consortium to revolutionize medical diagnostics using our AI-powered healthcare solutions.",;"
      "category":"Partnership",;"
      "author":"Business Development",;"
      "date":"2025-01-12",;"
      "readTime":"4 min read",;"
      "image":"/images/news/healthcare-partnership.jpg",;"
      "tags":["Healthcare", "Partnership", "AI"];"
    },;
    {;
      id:3,;
      title:"Breakthrough in Autonomous Cybersecurity Systems",;
      excerpt:"Our research team has achieved a major breakthrough in autonomous cybersecurity, developing systems that can detect and respond to threats in real-time without human intervention.",;
      category:"Research",;
      author:"Research Team",;
      date:"2025-01-10",;
      readTime:"6 min read",;
      image:"/images/news/cybersecurity-breakthrough.jpg",;
      tags:["Cybersecurity", "Research", "Autonomous Systems"];
    },;
    {;
      id:4,;
      title:"Space Technology Division Expands Operations",;
      excerpt:"Our space technology division is expanding operations to support growing demand for satellite operations, space resource mining, and orbital analytics services.",;
      category:"Company News",;
      author:"Space Technology Team",;
      date:"2025-01-08",;
      readTime:"3 min read",;
      image:"/images/news/space-expansion.jpg",;
      tags:["Space Technology", "Expansion", "Satellites"];
    },;
    {;
      id:5,;
      title:"AI Ethics and Governance Framework Released",;
      excerpt:"We've published our comprehensive AI ethics and governance framework, setting new standards for responsible AI development and deployment in enterprise environments.",;
      category:"Policy",;
      author:"AI Ethics Team",;
      date:"2025-01-05",;
      readTime:"7 min read",;
      image:"/images/news/ai-ethics-framework.jpg",;
      tags:["AI Ethics", "Governance", "Policy"];
    },;
    {;
      id:6,;
      title:"Financial Services Innovation Award Winner",;
      excerpt:"Zion Tech Group has been recognized as the winner of the Financial Services Innovation Award for our quantum financial modeling and risk assessment platforms.",;
      category:"Awards",;
      author:"Marketing Team",;
      date:"2025-01-03",;
      readTime:"3 min read",;
      image:"/images/news/financial-award.jpg",;
      tags:["Awards", "Financial Services", "Quantum Computing"];
export default function News() {;

      id:2,;
            </motion.div>;
          </div>;
        </section>;
;
        {/* Featured Article */}
        {featuredArticle && (;
          <section className="py-20">;
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
              <motion.div;
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8 }}
                viewport={{ once:true }}
                className="text-center mb-12";
              >;
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
                  Featured Story;
                </h2>;
              </motion.div>;
              ;
              <motion.div;
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8, delay:0.2 }}
                viewport={{ once:true }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl border border-purple-500/20 overflow-hidden";
              >;
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">;
                  <div className="p-8 lg:p-12">;
                    <div className="flex items-center space-x-4 mb-4">;
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">;
                        {featuredArticle.category}
                      </span>;
                      <span className="text-gray-400 text-sm">;
                        <Calendar className="w-4 h-4 inline mr-1" />;
                        {new Date(featuredArticle.date).toLocaleDateString()}
                      </span>;
                    </div>;
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">;
                      {featuredArticle.title}
                    </h3>;
                    <p className="text-lg text-gray-300 mb-6">;
                      {featuredArticle.excerpt}
                    </p>;
                    <div className="flex items-center space-x-4 mb-6">;
                      <div className="flex items-center space-x-2">;
                        <User className="w-4 h-4 text-gray-400" />;
                        <span className="text-gray-400">{featuredArticle.author}</span>;
                      </div>;
                    </div>;
                    <div className="flex flex-wrap gap-2 mb-6">;
                      {featuredArticle.tags.map((tag) => (;
                        <span;
                          key={tag}
                          className="bg-gray-800/50 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700/50";
                        >;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                    <Link;
                      href={`/news/${featuredArticle.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300";
                    >;
                      Read Full Article;
                      <ArrowRight className="w-5 h-5 ml-2" />;
                    </Link>;
                  </div>;
                  <div className="relative h-64 lg:h-auto">;
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">;
                      <Newspaper className="w-24 h-24 text-purple-400" />;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;
          </section>;
        )}
;
        {/* Category Filter */}
        <section className="py-12 bg-black/50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="flex flex-wrap justify-center gap-4">;
              {categories.map((category) => (;
                <button;
                  key={category.name}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${;
                    category.active;
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white';
                      :'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50';
                  }`}
                >;
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>;
                </button>;
              ))}
            </div>;
          </section>;
        )}
;
        {/* News Grid */}
              viewport={{ once:true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
                Latest News;
              </h2>;
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Stay updated with our latest developments and breakthroughs;
              </p>;
            </motion.div>;
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {newsArticles.filter(article => !article.featured).map((article, index) => (;
                <motion.article;
                  key={article.id}
                  initial={{ opacity:0, y:30 }}
                  whileInView={{ opacity:1, y:0 }}
        {/* CTA Section */}
        <section className="py-20 relative">;
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
                  transition={{ duration:0.6, delay:index * 0.1 }}
                  viewport={{ once:true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden";
                >;
                  <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">;
                    <Newspaper className="w-16 h-16 text-purple-400" />;
                  </div>;
                  <div className="p-6">;
                    <div className="flex items-center space-x-4 mb-4">;
                      <span className="bg-gray-800/50 text-purple-400 text-xs font-semibold px-2 py-1 rounded-full">;
                        {article.category}
                      </span>;
                      <span className="text-gray-400 text-xs">;
                        <Calendar className="w-3 h-3 inline mr-1" />;
                        {new Date(article.date).toLocaleDateString()}
                      </span>;
                    </div>;
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">;
                      {article.title}
                    </h3>;
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">;
                      {article.excerpt}
                    </p>;
                    <div className="flex items-center justify-between mb-4">;
                      <div className="flex items-center space-x-2">;
                        <User className="w-4 h-4 text-gray-400" />;
                        <span className="text-gray-400 text-sm">{article.author}</span>;
                      </div>;
                    </div>;
                    <div className="flex flex-wrap gap-2 mb-4">;
                      {article.tags.slice(0, 2).map((tag) => (;
                        <span;
                          key={tag}
                          className="bg-gray-800/30 text-gray-400 text-xs px-2 py-1 rounded-full border border-gray-700/30";
                        >;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                    <Link;
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300";
                    >;
                      Read More;
                      <ArrowRight className="w-4 h-4 ml-1" />;
                    </Link>;
                  </div>;
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.2 }}
              className="text-center mb-16";
            >;
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">;
                <Newspaper className="w-4 h-4 mr-2" />;
        <section className="relative py-20 px-4">;
          <div className="container mx-auto max-w-6xl">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="text-center";
            >;
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">;
                Latest News & Updates;
              </div>;
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">;
                News & Press;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
                Stay updated with the latest developments, breakthroughs, and innovations ;
                from Zion Tech Group and the technology industry.;
              </p>;
            </motion.div>;
;
        {/* Category Filter */}
        <section className="py-10 px-4">;
          <div className="container mx-auto max-w-6xl">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.2 }}
              className="flex flex-wrap justify-center gap-4";
            >;
              {categories.map((category, index) => (;
                <button;
                  key={category}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${;
                    category === "All News";
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white";
                      :"bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600";
import React, { useState } from 'react',;
import { motion } from 'framer-motion',;
            </motion.div>;
          </div>;
        </section>;"
          <section className="py-20">;"
</section>"
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
              <motion.div;
                initial={{ opacity: 0;, y: 30 ;}}
                whileInView={{ opacity: 1;, y: 0 ;}}
                transition={{ duration: 0.8 ;}}
                viewport={{ once: true ;}}"
                className="text-center mb-12";"
              >;
</motion>"
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;"
</h2>
                </h2>;
                transition={{ duration: 0.8;, delay: 0.2 ;}}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl border border-purple-500/20 overflow-hidden";"
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">;"
</div>"
                  <div className="p-8 lg:p-12">;"
                    <div className="flex items-center space-x-4 mb-4">;"
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">;"
</span>
                      </span>;"
                      <span className="text-gray-400 text-sm">;"
</span>"
                        <Calendar className="w-4 h-4 inline mr-1" />;"

                      </span>;
                    </div>;"
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">;"
</h3>
                    </h3>;"
                    <p className="text-lg text-gray-300 mb-6">;"
</p>
                    </p>;"
                    <div className="flex items-center space-x-4 mb-6">;"
                      <div className="flex items-center space-x-2">;"
                        <User className="w-4 h-4 text-gray-400" />;"
                        <span className="text-gray-400">{featuredArticle.author}</span>;"
                    <div className="flex flex-wrap gap-2 mb-6">;"
                        <span;
                          key={tag}"
                          className="bg-gray-800/50 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700/50";"
                    <Link;
                      href={`/news/${featuredArticle.id}`}"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300";"
                      <ArrowRight className="w-5 h-5 ml-2" />;"

                  <div className="relative h-64 lg:h-auto">;"
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">;"
                      <Newspaper className="w-24 h-24 text-purple-400" />;"

        <section className="py-12 bg-black/50">;"
            <div className="flex flex-wrap justify-center gap-4">;"
                <button;
                  key={category.name}`;
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${;
                    category.active;"
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white';
                      :'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50';`;
                  }`}
</button>
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>;"
                </button>;
              </h2>;"
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;"
              </p>;
            ;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;"
                <motion.article;
                  key={article.id}
        {/* CTA Section */}"
        <section className="py-20 relative">;"
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;"
              initial={{ opacity: 0;, y: 20 ;}}
                  transition={{ duration: 0.6;, delay: index * 0.1 ;}}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden";"
                  <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">;"
                    <Newspaper className="w-16 h-16 text-purple-400" />;"

                  <div className="p-6">;"
                      <span className="bg-gray-800/50 text-purple-400 text-xs font-semibold px-2 py-1 rounded-full">;"
                      <span className="text-gray-400 text-xs">;"
                        <Calendar className="w-3 h-3 inline mr-1" />;"

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">;"
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">;"
                    <div className="flex items-center justify-between mb-4">;"
                        <span className="text-gray-400 text-sm">{article.author}</span>;"
                    <div className="flex flex-wrap gap-2 mb-4">;"
                          className="bg-gray-800/30 text-gray-400 text-xs px-2 py-1 rounded-full border border-gray-700/30";"
                    <Link;`;
                      href={`/news/${article.id}`}"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300";"
                      <ArrowRight className="w-4 h-4 ml-1" />;"

        <section className="py-20 px-4 sm:px-6 lg:px-8">;"
          <div className="max-w-7xl mx-auto">;"
              animate={{ opacity: 1;, y: 0 ;}}
              transition={{ duration: 0.6;, delay: 0.2 ;}}"
              className="text-center mb-16";"
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">;"
                <Newspaper className="w-4 h-4 mr-2" />;"
        <section className="relative py-20 px-4">;"
          <div className="container mx-auto max-w-6xl">;"
              transition={{ duration: 0.8 ;}}"
              className="text-center";"
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">;"
</h1>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">;"
              </h1>;"
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;"
        {/* Category Filter */}"
        <section className="py-10 px-4">;"
              transition={{ duration: 0.8;, delay: 0.2 ;}}"
              className="flex flex-wrap justify-center gap-4";"
</motion>
                  key={category}`;
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${;"
                    category === "All News";""
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white";""
                      :"bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600";""
import React, { useState } from 'react';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { ;
  Search, Calendar, Clock, User, Tag, ;
  ArrowRight, ExternalLink, TrendingUp, ;
  BookOpen, Globe, Video;
} from 'lucide-react',;
<<<<<<< HEAD

import Link from 'next/link';
export default function News() {;

    }
  const latestNews = [;

      id: 3;,;
      title: 'Enterprise AI Adoption:Trends and Best Practices for 2024';,;
      excerpt: 'Discover the key trends driving AI adoption in enterprise environments and learn best practices for successful implementation.';,;
      category: 'enterprise';,;
      author: 'Jennifer Kim';,;
      date: '2024-01-10';,;
      readTime: '4 min read';,;
      image: '/images/news/enterprise-ai-trends.jpg';,;']
      tags: ['Enterprise AIBest Practices';, '2024 Trends'];
      id: 4;,;
      title: 'The Future of Autonomous Business Systems';,;
      excerpt: 'Exploring how autonomous systems are reshaping business operations and what this means for the future of work.';,;
      category: 'research';,;
      author: 'Dr. Alex Thompson';,;
      date: '2024-01-08';,;
      image: '/images/news/autonomous-systems.jpg';,;
      tags: ['Autonomous SystemsFuture of Work';, 'Innovation'];
      id: 5;,;
      title: 'Cybersecurity in the Age of AI:New Threats and Solutions';,;
      excerpt: 'How artificial intelligence is both creating new cybersecurity challenges and providing innovative solutions to protect digital assets.';,;
      author: 'Marcus Johnson';,;
      date: '2024-01-05';,;
      image: '/images/news/ai-cybersecurity.jpg';,;
      tags: ['CybersecurityAI Security';, 'Digital Protection'];
      id: 6;,;
      title: 'Quantum Machine Learning:Bridging Two Revolutionary Technologies';,;
      excerpt: 'Our research team explores the intersection of quantum computing and machine learning;, revealing exciting possibilities for the future.',;
      author: 'Dr. Elena Petrova';,;
      date: '2024-01-03';,;
      readTime: '8 min read';,;
      image: '/images/news/quantum-ml.jpg';,;
      tags: ['Quantum MLResearch';, 'Technology Convergence'];
  const industryInsights = [;
      id: 7;,;
      title: 'The Rise of Conscious AI:Ethical Considerations and Business Impact';,;
      excerpt: 'Examining the ethical implications of AI consciousness and how businesses can navigate this new frontier responsibly.';,;
      category: 'industry';,;
      author: 'Dr. Robert Chang';,;
      date: '2024-01-01';,;
      readTime: '6 min read';,;']
      tags: ['AI EthicsBusiness Impact';, 'Consciousness'];
      id: 8;,;
      title: 'Micro-SaaS Revolution:How Small Teams Are Building Big Solutions';,;
      excerpt: 'Exploring the growing trend of micro-SaaS companies and how they are disrupting traditional software markets.';,;
      author: 'Lisa Wang';,;
      date: '2023-12-28';,;
      tags: ['Micro-SaaSStartups';, 'Software Industry'];
  const upcomingEvents = [;


      registration:'https://ziontechgroup.com/events/ai-consciousness-summit-2024';
    },;
    {;
      id:2,;
      title:'Quantum Computing Workshop',;
      type:'Workshop',;
      date:'2024-02-22',;
      time:'1:00 PM - 5:00 PM',;


      registration:'https://ziontechgroup.com/events/quantum-workshop';
    }]
  const filteredNews = [...featuredNews, ...latestNews, ...industryInsights].filter(article => {;
    <div className="min-h-screen bg-black text-white">;"
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;"
        <div className="max-w-7xl mx-auto text-center">;"
          <motion.h1 ;
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6";"
          </motion.h1>;
          <motion.p ;
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12";"

          </motion.p>;
          {/* Search and Filter */}

            transition={{ duration: 0.8;, delay: 0.4 ;}}"
            className="max-w-4xl mx-auto";"
            <div className="relative mb-8">;"
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;"

              <input;"
                type="text";""
                placeholder="Search news and insights...";"
                value={searchTerm})
                onChange={(e) => setSearchTerm(e.target.value)}
</input>
            <div className="flex flex-wrap gap-3 justify-center">;"
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}

          <motion.div ;

=======
import Link from 'next/link';
export default function News() {;

          <motion.h2 ;"
    'All NewsCompany News',;
    'PartnershipsAI & Ethics',;
    'Quantum TechnologySpace Technology',;
    'Micro SAASIT Services',;
    'MetaverseIndustry Insights';
  const formatDate = (dateString:string) => {;
      <section className="relative py-20 lg:py-32 overflow-hidden">;"
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>;""
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;"
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6";"
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8";"
          <motion.div ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <a href="#featured" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">;"
</a>
              <span>Read Featured News</span>;"
              <ArrowRight className="w-5 h-5" />;"

            </a>;"
            <a href="#insights" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">;"
            </a>;
      <section className="py-8 border-b border-gray-800">;"
          <div className="flex flex-wrap gap-2 justify-center">;"
                key={index}`;
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${;
                  index === 0 ;"
                    ? 'bg-purple-500 text-white' ;
                    :'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';`;
      </section>;
      <section id="featured" className="py-20">;"
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">;"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;"
          <div className="grid lg:grid-cols-3 gap-8">;"
              <motion.article ;
                transition={{ duration: 0.8;, delay: index * 0.1 ;}}
                className="bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden";"
                <div className="h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">;"

                  <div className="flex items-center gap-2 mb-3">;"
                    <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">;"
                    <span className="text-xs text-gray-400">{article.readTime}</span>;"
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">;"
                    <span className="flex items-center gap-1">;"
                      <User className="w-4 h-4" />;"

                      <Calendar className="w-4 h-4" />;"

                      <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">;"
                  </div>;"`;
                  <a href={`/news/${article.id}`} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">;"
                    <span>Read More</span>;"
                    <ArrowRight className="w-4 h-4" />;"

              </motion.article>;
            ))}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">;"
          <div className="grid lg:grid-cols-2 gap-8">;"
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300";"
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">;"
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">;"

                    <span key={idx} className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">;"

      <section id="insights" className="py-20">;"
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300";"
                  <span className="text-xs text-gray-400">{insight.readTime}</span>;"
                <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">;"
                  <span>Read Insight</span>;"

            viewport={{ once: true ;}}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;"
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">;"
                type="email";""
                placeholder="Enter your email";""
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500";"
              />;
</input>"
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300">;"
                    <div className="flex items-center gap-3 mb-4">;"
</div>`;
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>;
                      <span className="text-gray-400 text-sm flex items-center gap-1">;"

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">;"
                    <p className="text-gray-300 mb-4 leading-relaxed">;"
                    <div className="flex items-center justify-between">;"
                      <div className="flex items-center gap-4 text-sm text-gray-400">;"

                          <Clock className="w-4 h-4" />;"

                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />;"

          <motion.h2 ;
            className="text-4xl md:text-5xl font-bold text-center mb-16";"
          </motion.h2>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;"
                className="group cursor-pointer";"
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">;"
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">;"
                    <BookOpen className="w-12 h-12 text-cyan-400" />;"

                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>;
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">;"
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">;"
                    <div className="flex items-center justify-between text-sm text-gray-400">;"

          <div className="grid md:grid-cols-2 gap-8">;"
                key={event.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300";"
                <div className="flex items-start gap-4">;"
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">;"
                    {event.type === 'Conference' ? <Globe className="w-8 h-8" /> :<Video className="w-8 h-8" />}"

                  <div className="flex-1">;"
                    <div className="flex items-center gap-2 mb-2">;"
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">;"
                    <h3 className="text-xl font-bold mb-3">;"
                    <div className="space-y-2 text-sm text-gray-400 mb-4">;"
                      <div className="flex items-center gap-2">;"

                        <Globe className="w-4 h-4" />;"

                    <a;
                      href={event.registration}"
                      target="_blank";""
                      rel="noopener noreferrer";""
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300";"
</a>"
                      <ExternalLink className="w-4 h-4" />;"

        <div className="max-w-4xl mx-auto text-center">;"
            className="p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20";"
            <h2 className="text-4xl md:text-5xl font-bold mb-6">;"
            <p className="text-xl text-gray-300 mb-8">;"
                placeholder="Enter your email address";""
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300";"
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">;"
            <p className="text-sm text-gray-400 mt-4">;"
              transition={{ duration: 0.6;, delay: 0.6 ;}}"
              <h2 className="text-4xl font-bold mb-4">Latest News</h2>;""
                  key={article.title}
                  transition={{ duration: 0.6;, delay: 0.1 * index ;}}"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300";"
                  <div className="flex items-center gap-4 mb-4">;"
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">;"
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>;""
                  <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>;""
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">;"

                  <button className="w-full px-4 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2">;"
</button>"

              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">;"
</p>"
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">;"
              transition={{ duration: 0.6;, delay: 0.8 ;}}
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>;""
              <p className="text-xl text-gray-400 mb-8">;"
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">;"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50";"
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">;"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;"
                  key={release.title}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group";"
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">;"
                    <span className="text-gray-400 text-sm">{release.readTime}</span>;"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">;"
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">;"
                    <Calendar className="w-4 h-4 text-gray-400" />;"
                    <span className="text-gray-400 text-sm">{release.date}</span>;"
              <h2 className="text-4xl font-bold text-white mb-4">;"
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">;"
                  key={category.name}
                  className="text-center group cursor-pointer";"
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all duration-300 border border-white/20">;"
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">;"
                  <h3 className="text-sm font-semibold text-white mb-1">;"
                  <p className="text-gray-400 text-xs">{category.count} articles</p>;"
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">;"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;"
                  key={news.title}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },;
    {;
      id:3,;
      title:"AI Ethics Guidelines Released for Responsible Development",;
      excerpt:"Comprehensive framework ensuring our AI solutions are developed with transparency, fairness, and societal benefit in mind.",;
      date:"2025-01-17",;
      category:"Innovation",;
      author:"Dr. Emily Watson",;
      readTime:"4 min read",;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },;
    {;
      id:4,;
      title:"New Office Opening in Singapore",;
      excerpt:"Expanding our global presence to better serve clients in the Asia-Pacific region with local expertise and support.",;
      date:"2025-01-16",;
      category:"Company News",;
      author:"Marcus Rodriguez",;
      readTime:"2 min read",;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },;
    {;
      id:5,;
      title:"Machine Learning Model Achieves 99.7% Accuracy",;
      excerpt:"Breakthrough in predictive analytics demonstrates our commitment to pushing the boundaries of AI window.window.window.performance.",;
      date:"2025-01-15",;
      category:"Technology",;
      author:"Dr. James Wilson",;
      readTime:"5 min read",;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },;
    {;
      id:6,;
      title:"Annual Sustainability Report Published",;
      excerpt:"Comprehensive overview of our environmental impact and commitment to sustainable technology development.",;
      date:"2025-01-14",;
      category:"Sustainability",;
      author:"Lisa Park",;
      readTime:"6 min read",;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },;
    {;
      id:7,;
      title:"Customer Success Story:Retail Automation",;
      excerpt:"How we helped a major retailer increase efficiency by 300% through intelligent automation systems.",;
      date:"2025-01-13",;
      category:"Case Studies",;
      author:"Alex Thompson",;
      readTime:"4 min read",;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },;
    {;
      id:8,;
      title:"New Research Paper on Autonomous Systems",;
      excerpt:"Published in leading AI journal, our research explores the future of self-managing technology infrastructure.",;
      date:"2025-01-12",;
      category:"Research",;
      author:"Prof. Maria Garcia",;
      readTime:"7 min read",;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  ],;
;
  const categories = ["All", "Company News", "Partnerships", "Innovation", "Technology", "Sustainability", "Case Studies", "Research"],;
;
  return (;

    <>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <title>News | Zion Tech Group - Latest Updates & Insights</title>;"
        <meta name="description" content="Stay informed with the latest news, company updates, and industry insights from Zion Tech Group." />;"
</meta>"
        <meta property="og:title" content="News - Zion Tech Group" />;"
        <meta property="og: description" content="Latest company news;, partnerships, and technology insights." />;"
        <meta name="twitter:card" content="summary_large_image" />;"
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;"
        <main className="container mx-auto px-6 py-12">;"
</main>"
          <section className="text-center mb-16">;"
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">;"
            <p className="text-xl text-white/80 max-w-3xl mx-auto">;"
          <section className="mx-auto max-w-6xl">;"
            <div className="flex flex-wrap justify-center gap-3 mb-12">;"
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${;"
                    category === "All";""
                      ? "bg-cyan-400 text-white border-cyan-400";""
                      :"bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-cyan-400/50";"`;
              <div key={article.id} className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-cyan-400/30">;"
                <div className="flex items-start gap-6">;"
                  <div className="text-6xl">{article.image}</div>;""
                      <span className="px-3 py-1 bg-cyan-400/30 text-cyan-300 text-sm rounded-full border border-cyan-400/50">;"
                      <span className="px-3 py-1 bg-white/20 text-white/80 text-sm rounded-full border border-white/30">;"
                    <h2 className="text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors">;"
                    <p className="text-white/80 mb-4 text-lg leading-relaxed">;"
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-4">;"
<<<<<<< HEAD

                      <span>By {article.author}</span>;

                      <span>{article.readTime}</span>;

=======
                      <span>By {article.author}</span>;

                      <span>{article.readTime}</span>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">;"
                <article key={article.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">;"
</article>"
                  <div className="text-4xl mb-4 text-center">{article.image}</div>;""
                  <div className="mb-3">;"
                    <span className="inline-block px-2 py-1 bg-white/20 text-white/80 text-xs rounded-full border border-white/30">;"
                  <h3 className="text-lg font-bold mb-3 text-white hover:text-cyan-400 transition-colors">;"
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">;"
                  <div className="flex items-center justify-between text-sm text-white/50 mb-4">;"
                  <div className="text-xs text-white/60 mb-4">;"
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">;"
                </article>;
            <div className="text-center mt-16">;"
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">;"
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Stay in the Loop</h2>;""
                <p className="text-white/70 mb-6">;"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50";"
<<<<<<< HEAD

        </main>;
    </>;

  );
}

=======
        </main>;
    </>;

  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
