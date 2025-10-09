import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
      author: 'John Doe',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cybersecurity Best Practices for Enterprise AI Systems',
      excerpt: 'Learn how to secure your AI implementations with enterprise-grade security measures and best practices.',
      author: 'Jane Smith',
      date: '2024-01-10',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Quantum Computing: The Next Frontier in Business Technology',
      excerpt: 'Discover how quantum computing is revolutionizing problem-solving and what it means for your business.',
      author: 'Mike Johnson',
      date: '2024-01-05',
      category: 'Emerging Tech',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Automating Business Processes with AI: A Complete Guide',
      excerpt: 'Step-by-step guide to implementing AI automation in your business processes for maximum efficiency.',
      author: 'Sarah Wilson',
      date: '2024-01-01',
      category: 'Automation',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cloud Infrastructure: Building Scalable AI Solutions',
      excerpt: 'Learn how to design and implement cloud infrastructure that can scale with your AI applications.',
      author: 'David Chen',
      date: '2023-12-28',
      category: 'Cloud Computing',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'ROI of AI Implementation: Measuring Success in Business',
      excerpt: 'How to measure and maximize the return on investment from your AI implementations.',
      author: 'Emily Davis',
      date: '2023-12-25',
      category: 'Business Strategy',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cybersecurity',
    'Emerging Tech',
    'Automation',
    'Cloud Computing',
    'Business Strategy'
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, cybersecurity, and emerging technologies from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, cybersecurity, automation, cloud computing, business technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Our Blog
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Stay ahead of the curve with insights, trends, and expert advice on AI, IT solutions, 
                and emerging technologies that are shaping the future of business.
              </p>
            </div>
          </section>

          {/* Categories */}
          <section className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full transition-all ${
                    index === 0
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Blog Posts */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 rounded-t-lg mb-6 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Featured Image</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div>{post.readTime}</div>
                    </div>

                    <div className="mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest blog posts, insights, and technology trends delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                />
                <button className="cyber-button px-6 py-3">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
