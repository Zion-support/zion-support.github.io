import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, User } from 'lucide-react';


const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Analytics Platform',
      excerpt: 'Our new AI Analytics Pro platform delivers unprecedented insights with 99.9% accuracy and real-time processing capabilities.',
      author: 'Sarah Johnson',
      date: '2024-01-20',
      category: 'Product Launch',
      readTime: '3 min read',
      image: '/api/placeholder/600/400',
      featured: true,
      external: false
    },
    {
      id: 2,
      title: 'Zion Tech Group Partners with Microsoft for Enhanced Cloud Solutions',
      excerpt: 'Strategic partnership brings advanced Azure AI services to our clients, enabling faster deployment and better performance.',
      author: 'Michael Chen',
      date: '2024-01-18',
      category: 'Partnership',
      readTime: '4 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      external: false
    },
    {
      id: 3,
      title: 'Forbes Recognizes Zion Tech Group as Top AI Company 2024',
      excerpt: 'We are honored to be featured in Forbes list of top AI companies, recognizing our innovation and impact in the industry.',
      author: 'Emily Rodriguez',
      date: '2024-01-15',
      category: 'Awards',
      readTime: '2 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      external: true,
      externalUrl: 'https://forbes.com/ai-companies-2024'
    },
    {
      id: 4,
      title: 'New 5G Solutions Drive Smart City Innovation',
      excerpt: 'Our latest 5G implementation in Smart City projects shows 40% improvement in connectivity and data processing speeds.',
      author: 'David Kim',
      date: '2024-01-12',
      category: 'Technology',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      external: false
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands Global Operations to Europe',
      excerpt: 'New European headquarters in London will serve clients across the region with localized support and expertise.',
      author: 'Lisa Wang',
      date: '2024-01-10',
      category: 'Company News',
      readTime: '3 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      external: false
    },
    {
      id: 6,
      title: 'Cybersecurity Solutions Achieve SOC 2 Type II Certification',
      excerpt: 'Our security platform now meets the highest industry standards, providing enterprise-grade protection for all clients.',
      author: 'James Wilson',
      date: '2024-01-08',
      category: 'Security',
      readTime: '4 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      external: false
    }
  ];

const categories = ['All', 'Product Launch', 'Partnership', 'Awards', 'Technology', 'Company News', 'Security'];

const featuredArticle = newsArticles.find(article => article.featured);
  return (
    <>
      <Helmet>
        <title>News - Zion Tech Group | Latest Updates & Announcements</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Read about our product launches, partnerships, and industry recognition." />
        <meta name="keywords" content="news, announcements, product launches, partnerships, awards, technology updates, company news" />
        <meta property="og:title" content="News - Zion Tech Group" />
        <meta property="og:description" content="Latest news and updates from Zion Tech Group" />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">News</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Stay updated with our latest announcements, product launches, partnerships, and industry insights.
              </p>
            </div>
          </div>
        </section>
        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-16 px-4">
            
        <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Story</h2>
              
        <div className="bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300">
                
        <div className="md:flex">
                  
        <div className="md:w-1/2">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
        <div className="md:w-1/2 p-8">
                    
        <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {featuredArticle.category}
                      </span>
                      <span className="text-gray-400 text-sm">{featuredArticle.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredArticle.title}</h3>
                    
          <p className="text-gray-300 mb-6">{featuredArticle.excerpt}</p>
                    
        <div className="flex items-center justify-between">
                      
        <div className="flex items-center space-x-4 text-sm text-gray-400">
                        
        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredArticle.author}</span>
                        </div>
                        
        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <a
                        href={featuredArticle.external ? featuredArticle.externalUrl : `/news/${featuredArticle.id}`}
                        target={featuredArticle.external ? "_blank" : "_self"}
                        rel={featuredArticle.external ? "noopener noreferrer" : ""}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Read More</span>
                        {featuredArticle.external ? (
                          <ExternalLink className="w-4 h-4" />
                        ) : (
                          <ArrowRight className="w-4 h-4" />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Category Filter */}
        <section className="py-8 px-4">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    category === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* News Grid */}
        <section className="py-16 px-4 pb-20">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">All News</h2>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article) => (
                <article key={article.id} className="bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
        <div className="p-6">
                    
        <div className="flex items-center space-x-4 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    
          <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                    
        <div className="flex items-center justify-between">
                      
        <div className="flex items-center space-x-4 text-sm text-gray-400">
                        
        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        
        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <a
                        href={article.external ? article.externalUrl : `/news/${article.id}`}
                        target={article.external ? "_blank" : "_self"}
                        rel={article.external ? "noopener noreferrer" : ""}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Read</span>
                        {article.external ? (
                          <ExternalLink className="w-4 h-4" />
                        ) : (
                          <ArrowRight className="w-4 h-4" />
                        )}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter to get the latest news, updates, and insights delivered to your inbox.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default NewsPage;