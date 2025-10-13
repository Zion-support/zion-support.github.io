import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowRight,
  Tag,
  Clock,
  Search
} from "lucide-react";

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends shaping the business landscape and how companies are leveraging artificial intelligence for growth.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Learn essential cybersecurity measures that every small business should implement to protect their data and operations.",
      author: "Security Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Security",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "Discover the benefits of cloud migration and follow our comprehensive guide to successfully move your infrastructure to the cloud.",
      author: "Cloud Solutions Team",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Micro SAAS: The Future of Software Distribution",
      excerpt: "Understand how micro SAAS solutions are revolutionizing the software industry and creating new opportunities for businesses.",
      author: "Product Team",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Business",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "5G Technology: Transforming Industries",
      excerpt: "Explore how 5G technology is revolutionizing various industries and creating new possibilities for innovation.",
      author: "5G Solutions Team",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "5G Technology",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "Learn how effective data analytics can help businesses make informed decisions and drive growth.",
      author: "Analytics Team",
      date: "2023-12-25",
      readTime: "9 min read",
      category: "Data Science",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    "All",
    "AI & Technology",
    "Security",
    "Cloud Computing",
    "Business",
    "5G Technology",
    "Data Science"
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Zion Tech Group - Technology Insights and News</title>
        <meta 
          name="description" 
          content="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and industry news from Zion Tech Group experts." 
        />
        <meta 
          name="keywords" 
          content="technology blog, AI news, cybersecurity tips, cloud computing, 5G technology, data analytics, tech insights" 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-cyan-500/10 rounded-2xl">
                <BookOpen className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Insights & News
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with the latest technology trends, expert insights, and industry news 
              from our team of technology professionals.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    category === "All"
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
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
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest technology insights and updates
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 transition-colors"
              />
              <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
