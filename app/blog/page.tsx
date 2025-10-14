
import React from 'react';'
import { Helmet } from 'react-helmet-async';'
import { Right, User } from 'lucide-react';'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Right, User, Calendar } from 'lucide-react';

const BlogPage: React.FC = () => {
=======
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
      excerpt: 'Learn the essential steps and strategies for successful cloud migration projects.',
      author: 'Mike Chen',
      date: '2024-01-12',
      category: 'cloud',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cybersecurity Threats in 2024: What You Need to Know',
      excerpt: 'Stay ahead of emerging cybersecurity threats and protect your organization.',
      author: 'Alex Rodriguez',
      date: '2024-01-10',
      category: 'security',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Building Scalable AI Applications: A Developer\'s Guide',
      excerpt: 'Technical insights on creating robust and scalable AI applications.',
      author: 'Sarah Johnson',
      date: '2024-01-08',
      category: 'ai',
      readTime: '10 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Multi-Cloud Strategy: Benefits and Implementation',
      excerpt: 'Discover how a multi-cloud approach can enhance your business resilience.',
      author: 'Mike Chen',
      date: '2024-01-05',
      category: 'cloud',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Zero Trust Security: A Modern Approach to Cybersecurity',
      excerpt: 'Implement zero trust principles to strengthen your security posture.',
      author: 'Alex Rodriguez',
      date: '2024-01-03',
      category: 'security',
      readTime: '9 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

>>>>>>> cursor/fix-errors-and-merge-to-main-ce9c
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Blog - Zion Tech Group</title>

        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends." />
        <meta name="keywords" content="blog, AI insights, cloud computing, cybersecurity, technology trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay updated with the latest insights on AI, cloud computing, cybersecurity, 
                and technology trends from our expert team.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:bg-white/20 transition-colors group">
                  <div className="h-48 bg-gray-600"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-blue-400 capitalize">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{post.readTime}</span>
                      <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights, 
                trends, and updates from the world of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};


export default BlogPage;

