import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, User, Calendar, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'ai', name: 'AI & Machine Learning', count: 5 },
    { id: 'cloud', name: 'Cloud Computing', count: 4 },
    { id: 'security', name: 'Cybersecurity', count: 3 }
  ];

  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming businesses across industries.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'ai',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and considerations for a successful cloud migration strategy.',
      author: 'Mike Chen',
      date: '2024-01-12',
      category: 'cloud',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cybersecurity Threats in 2024: What You Need to Know',
      excerpt: 'Stay ahead of emerging cybersecurity threats and protect your business effectively.',
      author: 'Alex Rodriguez',
      date: '2024-01-10',
      category: 'security',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Digital Transformation: A Strategic Approach',
      excerpt: 'Discover how to plan and execute a successful digital transformation initiative.',
      author: 'Emma Wilson',
      date: '2024-01-08',
      category: 'ai',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Machine Learning in Healthcare: Real-World Applications',
      excerpt: 'Explore how ML is revolutionizing healthcare and improving patient outcomes.',
      author: 'Dr. Lisa Park',
      date: '2024-01-05',
      category: 'ai',
      readTime: '9 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Cloud Security: Protecting Your Data in the Cloud',
      excerpt: 'Essential security measures and best practices for cloud-based systems.',
      author: 'David Kim',
      date: '2024-01-03',
      category: 'cloud',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
      <Helmet>"""
        <title>Blog - Zion Tech Group</title>""""
        <meta name="description" content="Latest insights on AI, cloud computing, cybersecurity, and digital transformation from Zion Tech Group." />""""
        <meta name="keywords" content="blog, AI insights, cloud computing, cybersecurity, digital transformation, technology trends" />"
      </Helmet>""
"""
      {/* Hero Section */}""""
      <section className="relative py-20 overflow-hidden">""""
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>""""
        <div className="container mx-auto px-4 relative z-10">""""
          <div className="text-center">""""
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">""
              Our Blog"""
            </h1>""""
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation.
            </p>
          </div>
        </div>"
      </section>""
"""
      {/* Categories */}""""
      <section className="py-12">""""
        <div className="container mx-auto px-4">""""
          <div className="flex flex-wrap justify-center gap-4">"
            {categories.map((category) => (""
              <button"""
                key={category.id}"""">
                className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 text-white hover:bg-white/20 transition-colors">
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>"
      </section>""
"""
      {/* Blog Posts */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-4">""""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"""
            {posts.map((post) => (""""
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-colors group">""""
                <div className="aspect-video bg-gray-700 relative overflow-hidden">"
                  <img"
                    src={post.image"
                    alt={post.title}"""">
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300""">"
                  />""""
                  <div className="absolute top-4 left-4">""""
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>"
                  </div>"
                "
                """"
                <div className="p-6">""""
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">"
                    {post.title"
                  </h2>""""
                  <p className="text-gray-300 mb-4 line-clamp-3">"
                    {post.excerpt}""
                  </p>"""
                  """"
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">""""
                    <div className="flex items-center space-x-4">""""
                      <div className="flex items-center">""""
                        <User className="w-4 h-4 mr-1" />"
                        {post.author"
                      </div>""""
                      <div className="flex items-center">""""
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>"
                    <span>{post.readTime}</span>"
                  "
                  """"
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">"""
                    Read More""""
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>"
      </section>""
"""
      {/* Newsletter Signup */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-4">""""
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20 text-center">""""
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>""""
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">""
              Subscribe to our newsletter and never miss the latest insights on technology and innovation."""
            </p>""""
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">"""
              <input""""
                type="email"""""
                placeholder="Enter your email""""">
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent""">"
              />""""
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>"
  );""
};"""
"""
export default BlogPage;"""
