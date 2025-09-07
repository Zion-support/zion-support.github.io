import React from 'react',;'
  const featuredNews = [;
    {;'
      title:'Zion Tech Group Launches Revolutionary AI Consciousness Platform',;''
      excerpt:'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.',;''
      author:'Press Team',;''
      date:'2025-01-15',;''
      author:'Dr. Kleber',;'
      featured:true,;'
      image:'/api/placeholder/600/400',;']'
      tags:['AI ConsciousnessBreakthrough', 'Innovation'],;''
      readTime:'5 min read';'
    },;
    {;'
      title:'Quantum Computing Breakthrough:Solving Complex Optimization Problems',;''
      excerpt:'Our quantum team achieves significant milestone in solving previously impossible computational challenges.',;''
      author:'Research Team',;''
      date:'2025-01-12',;''
      category:'Research',;''
      readTime:'6 min read',;''
      image:'/news/quantum-breakthrough.jpg',;''
      tags:['Quantum ComputingResearch', 'Breakthrough'],;''
      icon:<Atom className="w-6 h-6" />,;"
</Atom>
    <UltraFuturisticBackground>;
</UltraFuturisticBackground>"
      <div className="min-h-screen">;"
</div>
        <Head>;
</Head>
          <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>;"
          <meta name="description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies." />;"
</meta>
        </Head>;
            </motion.div>;
          </div>;
        </section>;"
          <section className="py-20">;"
</section>"
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
</div>
              <motion.div;
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8 }}
                viewport={{ once:true }}"
                className="text-center mb-12";"
              >;
</motion>"
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;"
</h2>
                </h2>;
              </motion.div>;
              ;
              <motion.div;
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8, delay:0.2 }}
                viewport={{ once:true }}"
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl border border-purple-500/20 overflow-hidden";"
              >;
</motion>"
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">;"
</div>"
                  <div className="p-8 lg:p-12">;"
</div>"
                    <div className="flex items-center space-x-4 mb-4">;"
</div>"
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">;"
</span>
                      </span>;"
                      <span className="text-gray-400 text-sm">;"
</span>"
                        <Calendar className="w-4 h-4 inline mr-1" />;"
</Calendar>
                      </span>;
                    </div>;"
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">;"
</h3>
                    </h3>;"
                    <p className="text-lg text-gray-300 mb-6">;"
</p>
                    </p>;"
                    <div className="flex items-center space-x-4 mb-6">;"
</div>"
                      <div className="flex items-center space-x-2">;"
</div>"
                        <User className="w-4 h-4 text-gray-400" />;"
</User>"
                        <span className="text-gray-400">{featuredArticle.author}</span>;"
                      </div>;
                    </div>;"
                    <div className="flex flex-wrap gap-2 mb-6">;"
</div>
                        <span;
                          key={tag}"
                          className="bg-gray-800/50 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700/50";"
                        >;
</span>
                        </span>;
                    </div>;
                    <Link;
                      href={`/news/${featuredArticle.id}`}"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300";"
                    >;
</Link>"
                      <ArrowRight className="w-5 h-5 ml-2" />;"
</ArrowRight>
                    </Link>;
                  </div>;"
                  <div className="relative h-64 lg:h-auto">;"
</div>"
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">;"
</div>"
                      <Newspaper className="w-24 h-24 text-purple-400" />;"
</Newspaper>
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;
          </section>;"
        <section className="py-12 bg-black/50">;"
</section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
            <div className="flex flex-wrap justify-center gap-4">;"
</div>
                <button;
                  key={category.name}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${;
                    category.active;"
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white';''
                      :'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50';'
                  }`}
                >;
</button>'
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>;"
                </button>;
            </div>;
          </section>;"
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;"
</h2>
              </h2>;"
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;"
</p>
              </p>;
            </motion.div>;
            ;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;"
</div>
                <motion.article;
                  key={article.id}
                  initial={{ opacity:0, y:30 }}
                  whileInView={{ opacity:1, y:0 }}
        {/* CTA Section */}"
        <section className="py-20 relative">;"
</motion>"
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;"
</div>
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
                  transition={{ duration:0.6, delay:index * 0.1 }}
                  viewport={{ once:true }}"
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden";"
                >;
</motion>"
                  <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">;"
</div>"
                    <Newspaper className="w-16 h-16 text-purple-400" />;"
</Newspaper>
                  </div>;"
                  <div className="p-6">;"
</div>"
                    <div className="flex items-center space-x-4 mb-4">;"
</div>"
                      <span className="bg-gray-800/50 text-purple-400 text-xs font-semibold px-2 py-1 rounded-full">;"
</span>
                      </span>;"
                      <span className="text-gray-400 text-xs">;"
</span>"
                        <Calendar className="w-3 h-3 inline mr-1" />;"
</Calendar>
                      </span>;
                    </div>;"
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">;"
</h3>
                    </h3>;"
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">;"
</p>
                    </p>;"
                    <div className="flex items-center justify-between mb-4">;"
</div>"
                      <div className="flex items-center space-x-2">;"
</div>"
                        <User className="w-4 h-4 text-gray-400" />;"
</User>"
                        <span className="text-gray-400 text-sm">{article.author}</span>;"
                      </div>;
                    </div>;"
                    <div className="flex flex-wrap gap-2 mb-4">;"
</div>
                        <span;
                          key={tag}"
                          className="bg-gray-800/30 text-gray-400 text-xs px-2 py-1 rounded-full border border-gray-700/30";"
                        >;
</span>
                        </span>;
                    </div>;
                    <Link;
                      href={`/news/${article.id}`}"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300";"
                    >;
</Link>"
                      <ArrowRight className="w-4 h-4 ml-1" />;"
</ArrowRight>
                    </Link>;
                  </div>;"
        <section className="py-20 px-4 sm:px-6 lg:px-8">;"
</section>"
          <div className="max-w-7xl mx-auto">;"
</div>
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.2 }}"
              className="text-center mb-16";"
            >;
</motion>"
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">;"
</div>"
                <Newspaper className="w-4 h-4 mr-2" />;"
</Newspaper>"
        <section className="relative py-20 px-4">;"
</section>"
          <div className="container mx-auto max-w-6xl">;"
</div>
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}"
              className="text-center";"
            >;
</motion>"
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">;"
</h1>
              </div>;"
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">;"
</h1>
              </h1>;"
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;"
</p>
              </p>;
            </motion.div>;
;
        {/* Category Filter */}"
        <section className="py-10 px-4">;"
</section>"
          <div className="container mx-auto max-w-6xl">;"
</div>
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.2 }}"
              className="flex flex-wrap justify-center gap-4";"
            >;
</motion>
                <button;
                  key={category}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${;"
                    category === "All News";""
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white";""
                      :"bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600";""
import React, { useState } from 'react',;''
import { motion } from 'framer-motion',;'
import { ;
  Search, Calendar, Clock, User, Tag, ;
  ArrowRight, ExternalLink, TrendingUp, ;
  BookOpen, Globe, Video;'
} from 'lucide-react',;''
import Link from 'next/link',;'
;
export default function News() {;'
  const [searchTerm, setSearchTerm] = useState(''),;''
  const [selectedCategory, setSelectedCategory] = useState('all'),;'
;
  const categories = [;'
    { id:'all', name:'All News', count:24 },;''
    { id:'ai', name:'AI & Consciousness', count:8 },;''
    { id:'quantum', name:'Quantum Computing', count:6 },;''
    { id:'enterprise', name:'Enterprise IT', count:5 },;''
    { id:'research', name:'Research & Development', count:3 },;''
    { id:'industry', name:'Industry Insights', count:2 }']
  ],;
;
  const featuredNews = [;
    {;
      id:1,;'
      title:'Zion Tech Group Launches Revolutionary AI Consciousness Platform',;''
      excerpt:'Our latest breakthrough in artificial consciousness technology promises to revolutionize how businesses interact with AI systems, enabling unprecedented levels of understanding and collaboration.',;''
      category:'ai',;''
      author:'Dr. Sarah Chen',;''
      date:'2024-01-15',;''
      readTime:'5 min read',;''
      image:'/images/news/ai-consciousness-launch.jpg',;'
      featured:true,;]'
      tags:['AI ConsciousnessPlatform Launch', 'Innovation'];'
    },;
    {;
      id:2,;'
      title:'Quantum Computing Breakthrough:Achieving 1000+ Qubit Stability',;''
      excerpt:'Our quantum research team has achieved a major milestone in quantum computing stability, opening new possibilities for complex computational problems.',;''
      category:'quantum',;''
      author:'Prof. Michael Rodriguez',;''
      date:'2024-01-12',;''
      readTime:'7 min read',;''
      image:'/images/news/quantum-breakthrough.jpg',;'
      featured:true,;'
      tags:['Quantum ComputingResearch', 'Breakthrough'];'
    }
  ],;
;
  const latestNews = [;
    {;
      id:3,;'
      title:'Enterprise AI Adoption:Trends and Best Practices for 2024',;''
      excerpt:'Discover the key trends driving AI adoption in enterprise environments and learn best practices for successful implementation.',;''
      category:'enterprise',;''
      author:'Jennifer Kim',;''
      date:'2024-01-10',;''
      readTime:'4 min read',;''
      image:'/images/news/enterprise-ai-trends.jpg',;']'
      tags:['Enterprise AIBest Practices', '2024 Trends'];'
    },;
    {;
      id:4,;'
      title:'The Future of Autonomous Business Systems',;''
      excerpt:'Exploring how autonomous systems are reshaping business operations and what this means for the future of work.',;''
      category:'research',;''
      author:'Dr. Alex Thompson',;''
      date:'2024-01-08',;''
      readTime:'6 min read',;''
      image:'/images/news/autonomous-systems.jpg',;''
      tags:['Autonomous SystemsFuture of Work', 'Innovation'];'
    },;
    {;
      id:5,;'
      title:'Cybersecurity in the Age of AI:New Threats and Solutions',;''
      excerpt:'How artificial intelligence is both creating new cybersecurity challenges and providing innovative solutions to protect digital assets.',;''
      category:'enterprise',;''
      author:'Marcus Johnson',;''
      date:'2024-01-05',;''
      readTime:'5 min read',;''
      image:'/images/news/ai-cybersecurity.jpg',;''
      tags:['CybersecurityAI Security', 'Digital Protection'];'
    },;
    {;
      id:6,;'
      title:'Quantum Machine Learning:Bridging Two Revolutionary Technologies',;''
      excerpt:'Our research team explores the intersection of quantum computing and machine learning, revealing exciting possibilities for the future.',;''
      category:'quantum',;''
      author:'Dr. Elena Petrova',;''
      date:'2024-01-03',;''
      readTime:'8 min read',;''
      image:'/images/news/quantum-ml.jpg',;''
      tags:['Quantum MLResearch', 'Technology Convergence'];'
    }
  ],;
;
  const industryInsights = [;
    {;
      id:7,;'
      title:'The Rise of Conscious AI:Ethical Considerations and Business Impact',;''
      excerpt:'Examining the ethical implications of AI consciousness and how businesses can navigate this new frontier responsibly.',;''
      category:'industry',;''
      author:'Dr. Robert Chang',;''
      date:'2024-01-01',;''
      readTime:'6 min read',;']'
      tags:['AI EthicsBusiness Impact', 'Consciousness'];'
    },;
    {;
      id:8,;'
      title:'Micro-SaaS Revolution:How Small Teams Are Building Big Solutions',;''
      excerpt:'Exploring the growing trend of micro-SaaS companies and how they are disrupting traditional software markets.',;''
      category:'industry',;''
      author:'Lisa Wang',;''
      date:'2023-12-28',;''
      readTime:'4 min read',;''
      tags:['Micro-SaaSStartups', 'Software Industry'];'
    }
  ],;
;
  const upcomingEvents = [;
    {;
      id:1,;'
      title:'AI Consciousness Summit 2024',;''
      type:'Conference',;''
      date:'2024-02-15',;''
      time:'9:00 AM - 6:00 PM',;''
      location:'San Francisco, CA',;''
      description:'Join industry leaders and researchers for a deep dive into the future of AI consciousness technology.',;''
      registration:'https://ziontechgroup.com/events/ai-consciousness-summit-2024';'
    },;
    {;
      id:2,;'
      title:'Quantum Computing Workshop',;''
      type:'Workshop',;''
      date:'2024-02-22',;''
      time:'1:00 PM - 5:00 PM',;''
      location:'Virtual',;''
      description:'Hands-on workshop covering quantum computing fundamentals and practical applications.',;''
      registration:'https://ziontechgroup.com/events/quantum-workshop';'
    }]
  ],;
;
  const filteredNews = [...featuredNews, ...latestNews, ...industryInsights].filter(article => {;
</button>'
    <div className="min-h-screen bg-black text-white">;"
</div>"
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;"
</section>"
        <div className="max-w-7xl mx-auto text-center">;"
</div>
          <motion.h1 ;
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}"
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6";"
          >;
</motion>
          </motion.h1>;
          <motion.p ;
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.2 }}"
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12";"
          >;
</motion>
          </motion.p>;
          ;
          {/* Search and Filter */}
          <motion.div;
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.4 }}"
            className="max-w-4xl mx-auto";"
          >;
</motion>"
            <div className="relative mb-8">;"
</div>"
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;"
</Search>
              <input;"
                type="text";""
                placeholder="Search news and insights...";"
                value={searchTerm})
                onChange={(e) => setSearchTerm(e.target.value)}
</input>
            </div>;"
            <div className="flex flex-wrap gap-3 justify-center">;"
</div>
                <button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
</button>
                </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;"
      <section className="py-20 px-4 sm:px-6 lg:px-8">;"
</section>"
        <div className="max-w-7xl mx-auto">;"
</div>
          <motion.h2 ;"
    'All NewsCompany News',;''
    'PartnershipsAI & Ethics',;''
    'Quantum TechnologySpace Technology',;''
    'Micro SAASIT Services',;''
    'MetaverseIndustry Insights';'
  ],;
;
  const formatDate = (dateString:string) => {;
</motion>'
    <div className="min-h-screen bg-black text-white">;"
</div>"
      <section className="relative py-20 lg:py-32 overflow-hidden">;"
</section>"
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>;""
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;"
</div>
          <motion.h1 ;
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}"
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6";"
          >;
</motion>
          </motion.h1>;
          <motion.p ;
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.2 }}"
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8";"
          >;
</motion>
          </motion.p>;
          <motion.div ;
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.4 }}"
            className="flex flex-wrap justify-center gap-4";"
          >;
</motion>"
            <a href="#featured" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">;"
</a>
              <span>Read Featured News</span>;"
              <ArrowRight className="w-5 h-5" />;"
</ArrowRight>
            </a>;"
            <a href="#insights" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">;"
</a>
            </a>;
          </motion.div>;
        </div>;
      </section>;"
      <section className="py-8 border-b border-gray-800">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
          <div className="flex flex-wrap gap-2 justify-center">;"
</div>
              <button;
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${;
                  index === 0 ;"
                    ? 'bg-purple-500 text-white' ;''
                    :'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';'
                }`}
              >;
</button>
              </button>;
          </div>;
        </div>;
      </section>;'
      <section id="featured" className="py-20">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
</div>
          <motion.div ;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}"
            className="text-center mb-16";"
          >;
</motion>"
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;"
</p>
            </p>;
          </motion.div>;
          ;"
          <div className="grid lg:grid-cols-3 gap-8">;"
</div>
              <motion.article ;
                key={article.id}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8, delay:index * 0.1 }}
                viewport={{ once:true }}"
                className="bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden";"
              >;
</motion>"
                <div className="h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">;"
</div>"
                  <Newspaper className="w-16 h-16 text-purple-400" />;"
</Newspaper>
                </div>;"
                <div className="p-6">;"
</div>"
                  <div className="flex items-center gap-2 mb-3">;"
</div>"
                    <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">;"
</span>
                    </span>;"
                    <span className="text-xs text-gray-400">{article.readTime}</span>;"
                  </div>;"
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">;"
</h3>
                  </h3>;"
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">;"
</p>
                  </p>;"
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">;"
</div>"
                    <span className="flex items-center gap-1">;"
</span>"
                      <User className="w-4 h-4" />;"
</User>
                    </span>;"
                    <span className="flex items-center gap-1">;"
</span>"
                      <Calendar className="w-4 h-4" />;"
</Calendar>
                    </span>;
                  </div>;"
                  <div className="flex flex-wrap gap-2 mb-4">;"
</div>"
                      <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">;"
</span>
                      </span>;
                  </div>;"
                  <a href={`/news/${article.id}`} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">;"
</a>
                    <span>Read More</span>;"
                    <ArrowRight className="w-4 h-4" />;"
</ArrowRight>
                  </a>;
                </div>;
              </motion.article>;
            ))}
          </div>;
        </div>;
      </section>;"
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
</div>
          <motion.div ;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}"
            className="text-center mb-16";"
          >;
</motion>"
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;"
</p>
            </p>;
          </motion.div>;
          ;"
          <div className="grid lg:grid-cols-2 gap-8">;"
</div>
              <motion.article ;
                key={article.id}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8, delay:index * 0.1 }}
                viewport={{ once:true }}"
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300";"
              >;
</motion>"
                <div className="flex items-center gap-2 mb-3">;"
</div>"
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">;"
</span>
                  </span>;"
                  <span className="text-xs text-gray-400">{article.readTime}</span>;"
                </div>;"
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">;"
</h3>
                </h3>;"
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">;"
</p>
                </p>;"
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">;"
</div>"
                  <span className="flex items-center gap-1">;"
</span>"
                    <User className="w-4 h-4" />;"
</User>
                  </span>;"
                  <span className="flex items-center gap-1">;"
</span>"
                    <Calendar className="w-4 h-4" />;"
</Calendar>
                  </span>;
                </div>;"
                <div className="flex flex-wrap gap-2 mb-4">;"
</div>"
                    <span key={idx} className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">;"
</span>
                    </span>;
                </div>;"
                <a href={`/news/${article.id}`} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">;"
</a>
                  <span>Read More</span>;"
                  <ArrowRight className="w-4 h-4" />;"
</ArrowRight>
                </a>;
              </motion.article>;
            ))}
          </div>;
        </div>;
      </section>;"
      <section id="insights" className="py-20">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
</div>
          <motion.div ;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}"
            className="text-center mb-16";"
          >;
</motion>"
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;"
</p>
            </p>;
          </motion.div>;
          ;"
          <div className="grid lg:grid-cols-3 gap-8">;"
</div>
              <motion.div ;
                key={index}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8, delay:index * 0.1 }}
                viewport={{ once:true }}"
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300";"
              >;
</motion>"
                <div className="flex items-center gap-2 mb-3">;"
</div>"
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">;"
</span>
                  </span>;"
                  <span className="text-xs text-gray-400">{insight.readTime}</span>;"
                </div>;"
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">;"
</h3>
                </h3>;"
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">;"
</p>
                </p>;"
                <div className="flex flex-wrap gap-2 mb-4">;"
</div>"
                    <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">;"
</span>
                    </span>;
                </div>;"
                <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">;"
</a>
                  <span>Read Insight</span>;"
                  <ArrowRight className="w-4 h-4" />;"
</ArrowRight>
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;"
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">;"
</section>"
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;"
</div>
          <motion.div ;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}
          >;
</motion>"
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;"
</p>
            </p>;"
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">;"
</div>
              <input;"
                type="email";""
                placeholder="Enter your email";""
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500";"
              />;
</input>"
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300">;"
</button>
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;"
                    <div className="flex items-center gap-3 mb-4">;"
</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>;
</span>
                      </span>;"
                      <span className="text-gray-400 text-sm flex items-center gap-1">;"
</span>"
                        <Calendar className="w-4 h-4" />;"
</Calendar>
                      </span>;
                    </div>;"
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">;"
</h3>
                    </h3>;"
                    <p className="text-gray-300 mb-4 leading-relaxed">;"
</p>
                    </p>;"
                    <div className="flex items-center justify-between">;"
</div>"
                      <div className="flex items-center gap-4 text-sm text-gray-400">;"
</div>"
                        <span className="flex items-center gap-1">;"
</span>"
                          <User className="w-4 h-4" />;"
</User>
                        </span>;"
                        <span className="flex items-center gap-1">;"
</span>"
                          <Clock className="w-4 h-4" />;"
</Clock>
                        </span>;
                      </div>;"
                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />;"
</ArrowRight>
                    </div>;
                  </div>;
                </div>;
              </motion.article>;
            ))}
          </div>;
        </div>;
      </section>;"
      <section className="py-20 px-4 sm:px-6 lg:px-8">;"
</section>"
        <div className="max-w-7xl mx-auto">;"
</div>
          <motion.h2 ;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}"
            className="text-4xl md:text-5xl font-bold text-center mb-16";"
          >;
</motion>
          </motion.h2>;
          ;"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;"
</div>
              <motion.article;
                key={article.id}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8, delay:index * 0.1 }}
                viewport={{ once:true }}"
                className="group cursor-pointer";"
              >;
</motion>"
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">;"
</div>"
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">;"
</div>"
                    <BookOpen className="w-12 h-12 text-cyan-400" />;"
</BookOpen>
                  </div>;"
                  <div className="p-6">;"
</div>"
                    <div className="flex items-center gap-2 mb-3">;"
</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>;
</span>
                      </span>;
                    </div>;"
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">;"
</h3>
                    </h3>;"
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">;"
</p>
                    </p>;"
                    <div className="flex items-center justify-between text-sm text-gray-400">;"
</div>"
                      <span className="flex items-center gap-1">;"
</span>"
                        <User className="w-4 h-4" />;"
</User>
                      </span>;"
                      <span className="flex items-center gap-1">;"
</span>"
                        <Clock className="w-4 h-4" />;"
</Clock>
                      </span>;
                    </div>;
                  </div>;
                </div>;
              </motion.article>;
            ))}
          </div>;
        </div>;
      </section>;"
      <section className="py-20 px-4 sm:px-6 lg:px-8">;"
</section>"
        <div className="max-w-7xl mx-auto">;"
</div>
          <motion.h2 ;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}"
            className="text-4xl md:text-5xl font-bold text-center mb-16";"
          >;
</motion>
          </motion.h2>;
          ;"
          <div className="grid md:grid-cols-2 gap-8">;"
</div>
              <motion.div;
                key={event.id}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8, delay:index * 0.1 }}
                viewport={{ once:true }}"
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300";"
              >;
</motion>"
                <div className="flex items-start gap-4">;"
</div>"
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">;"
</div>"
                    {event.type === 'Conference' ? <Globe className="w-8 h-8" /> :<Video className="w-8 h-8" />}"
</Globe>
                  </div>;"
                  <div className="flex-1">;"
</div>"
                    <div className="flex items-center gap-2 mb-2">;"
</div>"
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">;"
</span>
                      </span>;
                    </div>;"
                    <h3 className="text-xl font-bold mb-3">;"
</h3>
                    </h3>;"
                    <p className="text-gray-300 mb-4 leading-relaxed">;"
</p>
                    </p>;"
                    <div className="space-y-2 text-sm text-gray-400 mb-4">;"
</div>"
                      <div className="flex items-center gap-2">;"
</div>"
                        <Calendar className="w-4 h-4" />;"
</Calendar>
                      </div>;"
                      <div className="flex items-center gap-2">;"
</div>"
                        <Globe className="w-4 h-4" />;"
</Globe>
                      </div>;
                    </div>;
                    <a;
                      href={event.registration}"
                      target="_blank";""
                      rel="noopener noreferrer";""
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300";"
                    >;
</a>"
                      <ExternalLink className="w-4 h-4" />;"
</ExternalLink>
                    </a>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;"
      <section className="py-20 px-4 sm:px-6 lg:px-8">;"
</section>"
        <div className="max-w-4xl mx-auto text-center">;"
</div>
          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}"
            className="p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20";"
          >;
</motion>"
            <h2 className="text-4xl md:text-5xl font-bold mb-6">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-300 mb-8">;"
</p>
            </p>;"
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">;"
</div>
              <input;"
                type="email";""
                placeholder="Enter your email address";""
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300";"
              />;
</input>"
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">;"
</button>
              </button>;
            </div>;"
            <p className="text-sm text-gray-400 mt-4">;"
</p>
            </p>;
          </motion.div>;
        </div>;
      </section>;"
          <div className="max-w-7xl mx-auto">;"
</div>
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.6 }}"
              className="text-center mb-16";"
            >;
</motion>"
              <h2 className="text-4xl font-bold mb-4">Latest News</h2>;""
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;"
</p>
              </p>;
            </motion.div>;
;"
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;"
</div>
                <motion.article;
                  key={article.title}
                  initial={{ opacity:0, y:20 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.6, delay:0.1 * index }}"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300";"
                >;
</motion>"
                  <div className="flex items-center gap-4 mb-4">;"
</div>"
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">;"
</span>
                    </span>;
                  </div>;"
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>;""
                  <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>;""
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">;"
</div>"
                    <div className="flex items-center gap-2">;"
</div>"
                      <Calendar className="w-4 h-4" />;"
</Calendar>
                    </div>;"
                    <div className="flex items-center gap-2">;"
</div>"
                      <Clock className="w-4 h-4" />;"
</Clock>
                    </div>;
                  </div>;"
                  <button className="w-full px-4 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2">;"
</button>"
                    <ArrowRight className="w-4 h-4" />;"
</ArrowRight>
                  </button>;
                </motion.article>;
              ))}
            </div>;
          </div>;
        </section>;"
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;"
</h2>
              </h2>;"
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">;"
</p>"
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">;"
</section>"
          <div className="max-w-4xl mx-auto text-center">;"
</div>
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.8 }}
            >;
</motion>"
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>;""
              <p className="text-xl text-gray-400 mb-8">;"
</p>
              </p>;"
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">;"
</div>
                <input;"
                  type="email";""
                  placeholder="Enter your email";""
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50";"
                />;
</input>"
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">;"
</button>
                </button>;
              </div>;
            </motion.div>;
;"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;"
</div>
                <motion.article;
                  key={release.title}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.6, delay:index * 0.1 }}
                  viewport={{ once:true }}"
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group";"
                >;
</motion>"
                  <div className="flex items-center gap-2 mb-3">;"
</div>"
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">;"
</span>
                    </span>;"
                    <span className="text-gray-400 text-sm">{release.readTime}</span>;"
                  </div>;"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">;"
</h3>
                  </h3>;"
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">;"
</p>
                  </p>;"
                  <div className="flex items-center gap-2">;"
</div>"
                    <Calendar className="w-4 h-4 text-gray-400" />;"
</Calendar>"
                    <span className="text-gray-400 text-sm">{release.date}</span>;"
                  </div>;
                </motion.article>;
              ))}
            </div>;
          </div>;
        </section>;"
        <section className="py-20 px-4 sm:px-6 lg:px-8">;"
</section>"
          <div className="max-w-7xl mx-auto">;"
</div>
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:true }}"
              className="text-center mb-16";"
            >;
</motion>"
              <h2 className="text-4xl font-bold text-white mb-4">;"
</h2>
              </h2>;"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;"
</p>
              </p>;
            </motion.div>;
;"
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">;"
</div>
                <motion.div;
                  key={category.name}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.6, delay:index * 0.1 }}
                  viewport={{ once:true }}"
                  className="text-center group cursor-pointer";"
                >;
</motion>"
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all duration-300 border border-white/20">;"
</div>"
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">;"
</div>
                    </div>;
                  </div>;"
                  <h3 className="text-sm font-semibold text-white mb-1">;"
</h3>
                  </h3>;"
                  <p className="text-gray-400 text-xs">{category.count} articles</p>;"
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;"
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">;"
</section>"
          <div className="max-w-7xl mx-auto">;"
</div>
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:true }}"
              className="text-center mb-16";"
            >;
</motion>"
              <h2 className="text-4xl font-bold text-white mb-4">;"
</h2>
              </h2>;"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;"
</p>
              </p>;
            </motion.div>;
;"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;"
</div>
                <motion.article;
                  key={news.title}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.6, delay:index * 0.1 }}
                  viewport={{ once:true }}"
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group";"
                >;
</motion>"
                  <div className="flex items-center gap-2 mb-3">;"
</div>"
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">;"
</span>
                    </span>;"
                    <span className="text-gray-400 text-sm">{news.readTime}</span>;"
                  </div>;"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">;"
</h3>
                  </h3>;"
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">;"
</p>
                  </p>;"
                  <div className="flex items-center justify-between">;"
</div>"
                    <div className="flex items-center gap-2">;"
</div>"
                      <User className="w-4 h-4 text-gray-400" />;"
</User>"
                      <span className="text-gray-400 text-sm">{news.author}</span>;"
                    </div>;"
                    <div className="flex items-center gap-2">;"
</div>"
                      <Calendar className="w-4 h-4 text-gray-400" />;"
</Calendar>"
                      <span className="text-gray-400 text-sm">{news.date}</span>;"
                    </div>;
                  </div>;
                </motion.article>;
              ))}
            </div>;
          </div>;
        </section>;"
        <section className="py-20 px-4 sm:px-6 lg:px-8">;"
</section>"
          <div className="max-w-4xl mx-auto text-center">;"
</div>
            <motion.div;
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:true }}
            >;
</motion>"
              <h2 className="text-4xl font-bold text-white mb-4">;"
</h2>
              </h2>;"
              <p className="text-xl text-gray-300 mb-8">;"
</p>
              </p>;"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
</div>
                <a;"
                  href="/contact";""
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105";"
                >;
</a>"
                  <Mic className="ml-2 w-5 h-5" />;"
</Mic>
                </a>;
                <a;"
                  href="/press";""
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300";"
                >;
</a>
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;"
      <section className="py-20 px-4 sm:px-6 lg:px-8">;"
</section>"
        <div className="max-w-4xl mx-auto text-center">;"
</div>
          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}
          >;
</motion>"
            <h2 className="text-4xl md:text-5xl font-bold mb-6">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-300 mb-8">;"
</p>
            </p>;"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
</div>
              <Link ;"
                href="/blog";""
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105";"
              >;
</Link>"
                <ArrowRight className="w-5 h-5 ml-2" />;"
</ArrowRight>
              </Link>;
              <Link ;"
                href="/contact";""
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300";"
              >;
</Link>
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;"
      <section className="py-20">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;"
</div>
          <motion.div ;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}
          >;
</motion>"
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;"
</p>
            </p>;"
            <div className="flex flex-wrap justify-center gap-4">;"
</div>"
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">;"
</a>
                <span>Contact Us</span>;"
                <ArrowRight className="w-5 h-5" />;"
</ArrowRight>
              </a>;"
              <a href="/about" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">;"
</a>
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
    <>;
      <Head>;
</Head>
        <title>News | Zion Tech Group - Latest Updates & Insights</title>;"
        <meta name="description" content="Stay informed with the latest news, company updates, and industry insights from Zion Tech Group." />;"
</meta>"
        <meta property="og:title" content="News - Zion Tech Group" />;"
</meta>"
        <meta property="og:description" content="Latest company news, partnerships, and technology insights." />;"
</meta>"
        <meta name="twitter:card" content="summary_large_image" />;"
</meta>
      </Head>;"
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;"
</div>"
        <main className="container mx-auto px-6 py-12">;"
</main>"
          <section className="text-center mb-16">;"
</section>"
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">;"
</h1>
            </h1>;"
            <p className="text-xl text-white/80 max-w-3xl mx-auto">;"
</p>
            </p>;
          </section>;"
          <section className="mx-auto max-w-6xl">;"
</section>"
            <div className="flex flex-wrap justify-center gap-3 mb-12">;"
</div>
                <button;
                  key={category}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${;"
                    category === "All";""
                      ? "bg-cyan-400 text-white border-cyan-400";""
                      :"bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-cyan-400/50";"
                  }`}
                >;
</button>
                </button>;
            </div>;"
              <div key={article.id} className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-cyan-400/30">;"
</div>"
                <div className="flex items-start gap-6">;"
</div>"
                  <div className="text-6xl">{article.image}</div>;""
                  <div className="flex-1">;"
</div>"
                    <div className="flex items-center gap-2 mb-3">;"
</div>"
                      <span className="px-3 py-1 bg-cyan-400/30 text-cyan-300 text-sm rounded-full border border-cyan-400/50">;"
</span>
                      </span>;"
                      <span className="px-3 py-1 bg-white/20 text-white/80 text-sm rounded-full border border-white/30">;"
</span>
                      </span>;
                    </div>;"
                    <h2 className="text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors">;"
</h2>
                    </h2>;"
                    <p className="text-white/80 mb-4 text-lg leading-relaxed">;"
</p>
                    </p>;"
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-4">;"
</div>
                      <span>By {article.author}</span>;
                      <span></span>;
                      <span>{article.date}</span>;
                      <span></span>;
                      <span>{article.readTime}</span>;
                    </div>;"
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">;"
</button>
                    </button>;
                  </div>;
                </div>;
              </div>;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;"
</div>"
                <article key={article.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">;"
</article>"
                  <div className="text-4xl mb-4 text-center">{article.image}</div>;""
                  <div className="mb-3">;"
</div>"
                    <span className="inline-block px-2 py-1 bg-white/20 text-white/80 text-xs rounded-full border border-white/30">;"
</span>
                    </span>;
                  </div>;"
                  <h3 className="text-lg font-bold mb-3 text-white hover:text-cyan-400 transition-colors">;"
</h3>
                  </h3>;"
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">;"
</p>
                  </p>;"
                  <div className="flex items-center justify-between text-sm text-white/50 mb-4">;"
</div>
                    <span>{article.date}</span>;
                    <span>{article.readTime}</span>;
                  </div>;"
                  <div className="text-xs text-white/60 mb-4">;"
</div>
                  </div>;"
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">;"
</button>
                  </button>;
                </article>;
            </div>;"
            <div className="text-center mt-16">;"
</div>"
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">;"
</div>"
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Stay in the Loop</h2>;""
                <p className="text-white/70 mb-6">;"
</p>
                </p>;"
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">;"
</div>
                  <input;"
                    type="email";""
                    placeholder="Enter your email";""
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50";"
                  />;
</input>"
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">;"
</button>
                  </button>;
                </div>;
              </div>;
            </div>;
          </section>;
        </main>;
      </div>;
    </>;
  );
}
"