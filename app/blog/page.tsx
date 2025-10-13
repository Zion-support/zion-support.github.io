import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar,
  User,
  ArrowRight,
  Clock,
  Tag,
  Search,
  Filter,
  TrendingUp,
  BookOpen,
  MessageSquare,
  Share2,
  Heart,
  Eye
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping the business landscape and discover how companies are leveraging artificial intelligence to gain competitive advantages.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Business', 'Technology', 'Innovation'],
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      excerpt: 'Learn essential cybersecurity strategies to protect your organization from evolving threats and maintain robust security posture in the digital age.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400',
      tags: ['Security', 'Enterprise', 'Best Practices', 'Protection'],
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Navigate the complexities of cloud migration with our comprehensive guide covering planning, execution, and optimization strategies for successful digital transformation.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/400',
      tags: ['Cloud', 'Migration', 'Digital Transformation', 'Strategy'],
      views: 1450,
      likes: 112
    },
    {
      id: 4,
      title: '5G Technology: Revolutionizing Connectivity and Business Operations',
      excerpt: 'Discover how 5G technology is transforming industries and enabling new possibilities for businesses across various sectors.',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '7 min read',
      category: '5G Solutions',
      image: '/api/placeholder/600/400',
      tags: ['5G', 'Connectivity', 'Innovation', 'Business'],
      views: 890,
      likes: 54
    },
    {
      id: 5,
      title: 'Micro SAAS: The Future of Business Software',
      excerpt: 'Explore the growing trend of micro SAAS solutions and how they are changing the way businesses approach software adoption and implementation.',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'Micro SAAS',
      image: '/api/placeholder/600/400',
      tags: ['SAAS', 'Software', 'Business', 'Innovation'],
      views: 720,
      likes: 43
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Learn how to harness the power of data analytics to make informed business decisions and drive growth through data-driven strategies.',
      author: 'James Wilson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Data Analytics',
      image: '/api/placeholder/600/400',
      tags: ['Analytics', 'Data', 'Insights', 'Business Intelligence'],
      views: 1100,
      likes: 78
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Cybersecurity',
    'Cloud Computing',
    '5G Solutions',
    'Micro SAAS',
    'Data Analytics'
  ];

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog | Zion Tech Group - Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, industry insights, and expert analysis from Zion Tech Group. Discover articles on AI, cybersecurity, cloud computing, and more."
        keywords="technology blog, AI insights, cybersecurity news, cloud computing, 5G technology, micro SAAS, data analytics, tech trends"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and cutting-edge technology analysis 
              from our team of experienced professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#featured"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Read Latest Posts
              </FuturisticButton>
              <FuturisticButton
                href="#newsletter"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Subscribe to Newsletter
              </FuturisticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section id="featured" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Featured Post
                  </span>
                  <span className="text-cyan-400 text-sm">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{featuredPost.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FuturisticButton
                    href={`/blog/${featuredPost.id}`}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                  <div className="flex items-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <BookOpen className="w-32 h-32 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 h-48 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-cyan-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 inline" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter and never miss out on the latest technology trends and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
            <FuturisticButton
              href="#"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Subscribe
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
