import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import ResponsiveContainer from '../components/ResponsiveContainer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore how artificial intelligence is transforming business operations and what to expect in 2024.",
      content: "Artificial intelligence continues to revolutionize the business landscape...",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/api/placeholder/600/400",
      slug: "future-ai-business-2024-trends"
    },
    {
      id: 2,
      title: "Micro SAAS Solutions: The New Era of Business Software",
      excerpt: "Discover how micro SAAS solutions are changing the way businesses operate and scale.",
      content: "Micro SAAS solutions are becoming increasingly popular...",
      author: "Zion Tech Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/600/400",
      slug: "micro-saas-solutions-new-era-business-software"
    },
    {
      id: 3,
      title: "5G Technology: Transforming Industries and Creating Opportunities",
      excerpt: "Learn about the impact of 5G technology on various industries and the opportunities it creates.",
      content: "5G technology is set to transform multiple industries...",
      author: "Zion Tech Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "5G Solutions",
      image: "/api/placeholder/600/400",
      slug: "5g-technology-transforming-industries-opportunities"
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential cybersecurity practices every business should implement to protect their data and systems.",
      content: "Cybersecurity is more important than ever...",
      author: "Zion Tech Team",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/600/400",
      slug: "cybersecurity-best-practices-modern-businesses"
    },
    {
      id: 5,
      title: "Cloud Infrastructure: Building Scalable and Reliable Systems",
      excerpt: "How to design and implement cloud infrastructure that scales with your business needs.",
      content: "Cloud infrastructure is the backbone of modern applications...",
      author: "Zion Tech Team",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/600/400",
      slug: "cloud-infrastructure-building-scalable-reliable-systems"
    },
    {
      id: 6,
      title: "The Rise of AI-Powered Customer Service",
      excerpt: "How AI is revolutionizing customer service and improving customer satisfaction.",
      content: "AI-powered customer service is transforming the way businesses interact with customers...",
      author: "Zion Tech Team",
      date: "2023-12-25",
      readTime: "6 min read",
      category: "AI & Technology",
      image: "/api/placeholder/600/400",
      slug: "rise-ai-powered-customer-service"
    }
  ];

  const categories = [
    "All",
    "AI & Technology",
    "Micro SAAS",
    "5G Solutions",
    "Cybersecurity",
    "Cloud Computing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Latest Insights on AI, Technology, and Business | Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology, micro SAAS solutions, and business innovation from Zion Tech Group experts."
        keywords="blog, AI insights, technology trends, micro SAAS, 5G solutions, cybersecurity, cloud computing, business innovation"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Our Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest insights on AI, technology, micro SAAS solutions, 
            and business innovation from our team of experts.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <FuturisticCard
                key={post.id}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-cyan-400 text-sm font-medium">Featured Image</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{post.author}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-center space-x-1 text-cyan-400 hover:text-white transition-colors group"
                    >
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default BlogPage;
