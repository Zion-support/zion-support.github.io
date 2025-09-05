import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Layout from '../components/Layout';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Software',
    excerpt: 'How artificial intelligence is transforming business operations and decision-making processes.',
    content: 'Artificial Intelligence is revolutionizing the way enterprises operate...',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & Technology',
    image: '/blog/ai-enterprise.jpg',
    tags: ['AI', 'Enterprise', 'Technology', 'Innovation']
  },
  {
    id: 2,
    title: 'Cloud Migration Strategies for Modern Businesses',
    excerpt: 'A comprehensive guide to migrating your infrastructure to the cloud successfully.',
    content: 'Cloud migration has become essential for businesses looking to scale...',
    author: 'David Rodriguez',
    date: '2024-01-12',
    readTime: '7 min read',
    category: 'Cloud Computing',
    image: '/blog/cloud-migration.jpg',
    tags: ['Cloud', 'Migration', 'Business', 'Strategy']
  },
  {
    id: 3,
    title: 'Cybersecurity Trends to Watch in 2024',
    excerpt: 'The latest cybersecurity threats and how to protect your organization.',
    content: 'As technology evolves, so do the threats that target our digital infrastructure...',
    author: 'Emily Chen',
    date: '2024-01-08',
    readTime: '6 min read',
    category: 'Cybersecurity',
    image: '/blog/cybersecurity-trends.jpg',
    tags: ['Cybersecurity', 'Trends', 'Security', '2024']
  },
  {
    id: 4,
    title: 'Cloud Security Best Practices for Enterprise Applications',
    excerpt: 'Essential security measures every enterprise should implement in their cloud infrastructure.',
    content: 'Cloud security is paramount in today\'s digital landscape...',
    author: 'Michael Chen',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Security',
    image: '/blog/cloud-security.jpg',
    tags: ['Security', 'Cloud', 'Enterprise', 'Best Practices']
  },
  {
    id: 5,
    title: 'Quantum Computing: The Next Frontier in Technology',
    excerpt: 'Understanding quantum computing and its potential impact on various industries.',
    content: 'Quantum computing represents a fundamental shift in computational power...',
    author: 'Dr. Kleber Santos',
    date: '2024-01-01',
    readTime: '8 min read',
    category: 'Quantum Computing',
    image: '/blog/quantum-computing.jpg',
    tags: ['Quantum Computing', 'Technology', 'Innovation', 'Future']
  }
];

const blogCategories = [
  { name: 'All', count: blogPosts.length },
  { name: 'AI & Technology', count: blogPosts.filter(post => post.category === 'AI & Technology').length },
  { name: 'Cloud Computing', count: blogPosts.filter(post => post.category === 'Cloud Computing').length },
  { name: 'Cybersecurity', count: blogPosts.filter(post => post.category === 'Cybersecurity').length },
  { name: 'Security', count: blogPosts.filter(post => post.category === 'Security').length },
  { name: 'Quantum Computing', count: blogPosts.filter(post => post.category === 'Quantum Computing').length }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Latest insights and trends in technology, AI, and business"
      keywords="blog, technology news, AI trends, business insights, tech articles"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Tech Insights & Innovation
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest trends, insights, and innovations in technology, AI, and business transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {blogCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Posts
              </button>
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <BookOpen className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights on technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Subscribe Now
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}