import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2025 Predictions',
      excerpt: 'Explore the latest trends and predictions for AI adoption in enterprise environments.',
      category: 'AI Insights',
      date: 'January 15, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers',
      excerpt: 'Understanding how quantum computing is revolutionizing problem-solving capabilities.',
      category: 'Quantum Computing',
      date: 'January 10, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'AI Automation: Transforming Business Processes',
      excerpt: 'Learn how AI automation is reshaping traditional business workflows.',
      category: 'Automation',
      date: 'January 5, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'How artificial intelligence is both enhancing and challenging cybersecurity practices.',
      category: 'Cybersecurity',
      date: 'December 28, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Blockchain and Web3: The Next Digital Revolution',
      excerpt: 'Understanding the impact of blockchain technology on modern business operations.',
      category: 'Blockchain',
      date: 'December 20, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'IoT and Edge Computing: Connecting the Future',
      excerpt: 'Exploring the convergence of IoT devices and edge computing technologies.',
      category: 'IoT',
      date: 'December 15, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop',
      featured: false
    }
  ];

  const categories = ['All', 'AI Insights', 'Quantum Computing', 'Automation', 'Cybersecurity', 'Blockchain', 'IoT'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Blog & Insights
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and innovations in AI, quantum computing, 
              and cutting-edge technology solutions.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            {blogPosts.filter(post => post.featured).map(post => (
              <div key={post.id} className="cyber-card hologram-card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm ml-4">{post.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-6 text-lg">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                      <button className="cyber-button">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    category === 'All' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map(post => (
              <article key={post.id} className="cyber-card hologram-card overflow-hidden group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 cyber-card hologram-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter and never miss the latest AI and technology insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-cyan-500 focus:outline-none"
              />
              <button className="cyber-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;