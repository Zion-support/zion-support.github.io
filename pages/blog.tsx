import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Cloud Security Best Practices for Enterprise Applications',
    excerpt: 'Essential security measures every enterprise should implement in their cloud infrastructure.',
    content: 'Cloud security is paramount in today\'s digital landscape...',
    author: 'Michael Chen',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Security',
    image: '/blog/cloud-security.jpg',
    tags: ['Cloud Security', 'Enterprise', 'Best Practices', 'Infrastructure']
  },
  {
    id: 2,
    title: 'The Future of AI in Business: Trends and Predictions for 2024',
    excerpt: 'Exploring how artificial intelligence is transforming business operations and what to expect in the coming year.',
    content: 'Artificial intelligence continues to revolutionize the way businesses operate...',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-03',
    readTime: '8 min read',
    category: 'AI & Technology',
    image: '/blog/ai-future.jpg',
    tags: ['AI', 'Business', 'Technology', 'Future Trends']
  },
  {
    id: 3,
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'A comprehensive guide to designing and implementing microservices that can grow with your business.',
    content: 'Microservices architecture has become the go-to approach for building scalable applications...',
    author: 'Alex Rodriguez',
    date: '2024-01-01',
    readTime: '10 min read',
    category: 'Cloud Computing',
    image: '/blog/microservices.jpg',
    tags: ['Microservices', 'Architecture', 'Scalability', 'Development']
  },
  {
    id: 4,
    title: 'Cybersecurity Threats in 2024: What You Need to Know',
    excerpt: 'An overview of the latest cybersecurity threats and how to protect your organization.',
    content: 'As technology evolves, so do the threats that target our digital infrastructure...',
    author: 'Jennifer Lee',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Cybersecurity',
    image: '/blog/cybersecurity-threats.jpg',
    tags: ['Cybersecurity', 'Threats', 'Security', 'Protection']
  },
  {
    id: 5,
    title: 'The Rise of Quantum Computing: Implications for Business',
    excerpt: 'Understanding quantum computing and its potential impact on various industries.',
    content: 'Quantum computing represents a paradigm shift in computational power...',
    author: 'Dr. Michael Chen',
    date: '2023-12-25',
    readTime: '9 min read',
    category: 'AI & Technology',
    image: '/blog/quantum-computing.jpg',
    tags: ['Quantum Computing', 'Technology', 'Innovation', 'Future']
  },
  {
    id: 6,
    title: 'Digital Transformation: A Complete Guide for Enterprises',
    excerpt: 'How to successfully navigate digital transformation in your organization.',
    content: 'Digital transformation is no longer optional for businesses that want to remain competitive...',
    author: 'Lisa Wang',
    date: '2023-12-20',
    readTime: '12 min read',
    category: 'Digital Transformation',
    image: '/blog/digital-transformation.jpg',
    tags: ['Digital Transformation', 'Enterprise', 'Strategy', 'Innovation']
  }
];

const blogCategories = [
  "All Posts",
  "AI & Technology",
  "Cloud Computing",
  "Cybersecurity",
  "SaaS",
  "Digital Transformation"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and trends in technology, AI, and business" />
        <meta name="keywords" content="blog, technology news, AI trends, business insights, tech articles" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Tech <span className="text-yellow-400">Insights</span> & Trends
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Stay ahead with the latest insights, trends, and best practices in technology and business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Updated
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Subscribe to our newsletter for the latest tech insights and industry trends.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400"
                  />
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}