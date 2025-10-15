import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  TrendingUp,
  Star,
  Share2,
  Bookmark,
  ExternalLink,
  Phone,
  Mail
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'technology', name: 'Technology', count: 6 },
    { id: 'business', name: 'Business', count: 5 },
    { id: 'security', name: 'Cybersecurity', count: 5 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Content Writer Pro',
      excerpt: 'Our latest micro SAAS solution is transforming content creation with advanced AI capabilities and multi-language support.',
      content: 'Zion Tech Group is proud to announce the launch of AI Content Writer Pro, our most advanced content creation platform yet. This revolutionary tool combines cutting-edge artificial intelligence with user-friendly design to help businesses create high-quality content at scale...',
      category: 'ai',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '🤖',
      tags: ['AI', 'Content Creation', 'Micro SAAS', 'Product Launch'],
      featured: true,
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'Enterprise AI Automation: The Future of Business Process Optimization',
      excerpt: 'How AI automation is revolutionizing enterprise operations and delivering unprecedented efficiency gains.',
      content: 'In today\'s rapidly evolving business landscape, organizations are constantly seeking ways to optimize their operations and improve efficiency. Enterprise AI automation has emerged as a game-changing solution that promises to transform how businesses operate...',
      category: 'ai',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '⚡',
      tags: ['AI Automation', 'Enterprise', 'Process Optimization', 'Efficiency'],
      featured: false,
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: 'Cybersecurity Trends 2024: What Every Business Needs to Know',
      excerpt: 'Essential cybersecurity insights and trends that will shape the digital landscape in 2024.',
      content: 'As we navigate through 2024, cybersecurity remains a top priority for organizations worldwide. The threat landscape continues to evolve, with cybercriminals employing increasingly sophisticated techniques to breach systems and steal sensitive data...',
      category: 'security',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      image: '🔒',
      tags: ['Cybersecurity', 'Trends', 'Security', '2024'],
      featured: true,
      views: 1450,
      likes: 112
    },
    {
      id: 4,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Comprehensive guide to successful cloud migration strategies and implementation best practices.',
      content: 'Cloud migration has become a critical initiative for organizations looking to modernize their infrastructure and improve scalability. However, a successful migration requires careful planning, execution, and ongoing optimization...',
      category: 'technology',
      author: 'Michael Chen',
      date: '2024-01-08',
      readTime: '8 min read',
      image: '☁️',
      tags: ['Cloud Migration', 'AWS', 'Azure', 'Best Practices'],
      featured: false,
      views: 890,
      likes: 54
    },
    {
      id: 5,
      title: 'The Rise of Micro SAAS: How Small Solutions Are Making Big Impact',
      excerpt: 'Exploring the micro SAAS revolution and how specialized tools are transforming business operations.',
      content: 'The software-as-a-service (SAAS) landscape has undergone a significant transformation in recent years. While large, comprehensive platforms continue to dominate, a new category of specialized solutions has emerged: micro SAAS...',
      category: 'business',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '📊',
      tags: ['Micro SAAS', 'Business', 'Innovation', 'Technology'],
      featured: false,
      views: 720,
      likes: 43
    },
    {
      id: 6,
      title: 'AI in Healthcare: Transforming Patient Care Through Technology',
      excerpt: 'How artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes.',
      content: 'The healthcare industry is experiencing a technological renaissance, with artificial intelligence playing a pivotal role in transforming patient care. From diagnostic imaging to personalized treatment plans, AI is enabling healthcare providers to deliver more accurate, efficient, and personalized care...',
      category: 'ai',
      author: 'Dr. Lisa Wang',
      date: '2024-01-03',
      readTime: '9 min read',
      image: '🏥',
      tags: ['AI', 'Healthcare', 'Technology', 'Patient Care'],
      featured: true,
      views: 1680,
      likes: 156
    }
  ];

  const filteredArticles = activeFilter === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeFilter);

  const featuredArticles = newsArticles.filter(article => article.featured);

  return (
    <>
      <Helmet>
        <title>News & Insights - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, insights, and trends in AI, technology, and business. Expert analysis and thought leadership from Zion Tech Group." />
        <meta name="keywords" content="tech news, ai news, technology insights, business trends, cybersecurity news, cloud computing" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              News & Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest trends, insights, and developments in AI, technology, and business. 
              Expert analysis and thought leadership from our team of industry professionals.
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article) => (
                <div key={article.id} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{article.image}</div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{article.date}</div>
                        <div className="text-sm text-blue-400 font-semibold capitalize">{article.category}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{article.title}</h3>
                    <p className="text-gray-300 mb-4">{article.excerpt}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {article.views} views
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-red-400 transition-colors">
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-blue-400 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="text-blue-400 hover:text-blue-300 flex items-center font-semibold">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{article.image}</div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{article.date}</div>
                      <div className="text-sm text-blue-400 font-semibold capitalize">{article.category}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {article.views}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {article.likes}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-red-400 transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-blue-400 hover:text-blue-300 flex items-center font-semibold text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights, trends, and updates from the world of AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't just read about the latest trends - implement them in your business. 
              Contact us today for a free consultation and discover how our solutions can help you stay ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;