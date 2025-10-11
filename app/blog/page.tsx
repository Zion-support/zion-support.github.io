import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations for competitive advantage.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      featured: true,
      image: '/images/blog-1.jpg'
    },
    {
      id: 2,
      title: 'Digital Transformation: A Complete Guide for Modern Businesses',
      excerpt: 'Learn how to successfully navigate digital transformation and implement the right technologies for your business growth.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Digital Transformation',
      featured: false,
      image: '/images/blog-2.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for AI-Powered Applications',
      excerpt: 'Essential security measures to protect your AI applications and ensure data privacy in the age of artificial intelligence.',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      featured: false,
      image: '/images/blog-3.jpg'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Optimization: Cost and Performance Strategies',
      excerpt: 'Discover proven strategies to optimize your cloud infrastructure for better performance and reduced costs.',
      author: 'Emily Johnson',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Cloud Computing',
      featured: false,
      image: '/images/blog-4.jpg'
    },
    {
      id: 5,
      title: 'Building Scalable AI Solutions: Architecture and Implementation',
      excerpt: 'Learn the key principles of building AI solutions that can scale with your business growth and user demands.',
      author: 'David Kim',
      date: '2023-12-28',
      readTime: '15 min read',
      category: 'AI & Machine Learning',
      featured: false,
      image: '/images/blog-5.jpg'
    },
    {
      id: 6,
      title: 'The Role of Data Analytics in Business Decision Making',
      excerpt: 'How data analytics transforms business decision-making processes and drives better outcomes across industries.',
      author: 'Lisa Wang',
      date: '2023-12-25',
      readTime: '7 min read',
      category: 'Data Analytics',
      featured: false,
      image: '/images/blog-6.jpg'
    }
  ]

  const categories = [
    'All',
    'AI & Machine Learning',
    'Digital Transformation',
    'Cybersecurity',
    'Cloud Computing',
    'Data Analytics'
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and digital transformation. Expert articles and industry trends." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, digital transformation, machine learning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI & IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Insights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights on artificial intelligence, IT solutions, and digital transformation trends.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 font-semibold">{featuredPost.category}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-400">Featured</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {featuredPost.title}
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center">
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-300">
                Insights and expertise from our team of technology experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <Tag className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 font-semibold text-sm">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest AI and IT insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default BlogPage