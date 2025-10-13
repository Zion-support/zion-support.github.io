import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "Explore the latest AI trends that are reshaping business operations and driving innovation.",
      date: "2024-01-15",
      author: "Zion Tech Team",
      category: "AI"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Learn about the essential cybersecurity measures every business should implement.",
      date: "2024-01-10",
      author: "Zion Tech Team",
      category: "Security"
    },
    {
      id: 3,
      title: "5G Technology and Its Impact on IoT",
      excerpt: "Discover how 5G is revolutionizing the Internet of Things and enabling new possibilities.",
      date: "2024-01-05",
      author: "Zion Tech Team",
      category: "5G"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, cybersecurity, 5G technology, and digital transformation from Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights on technology, AI, and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
                <span>•</span>
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              
              <div className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {post.category}
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                <span className="text-sm font-medium">Read More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter for the latest updates
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+13024640950" 
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="text-lg">📞</span>
              <span>+1 302 464 0950</span>
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="text-lg">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </a>
            <a 
              href="https://ziontechgroup.com" 
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="text-lg">🌐</span>
              <span>ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
