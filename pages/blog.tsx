<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Tag,
  Search,
  Filter
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14

const blogPosts = [
  {
    id: 1,
<<<<<<< HEAD
    title: 'The Future of AI in Business: Trends for 2024',
    excerpt: 'Discover the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    category: 'AI & Machine Learning',
    readTime: '5 min read',
    image: '/api/placeholder/600/300'
  },
  {
    id: 2,
    title: 'Micro SaaS: Building Scalable Solutions for Modern Businesses',
    excerpt: 'Learn how micro SaaS platforms are revolutionizing the way small and medium businesses access enterprise-grade tools.',
=======
  }
]
    title: 'Cloud Security Best Practices for Enterprise Applications',
    excerpt: 'Essential security measures every enterprise should implement in their cloud infrastructure.',
    content: 'Cloud security is paramount in today\'s digital landscape...',
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'Micro SaaS',
    readTime: '7 min read',
    image: '/api/placeholder/600/300'
  },
  {
    id: 3,
    title: 'Cloud Infrastructure Best Practices for Enterprise',
    excerpt: 'Essential strategies for building robust, scalable cloud infrastructure that can handle modern business demands.',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    category: 'IT Services',
    readTime: '6 min read',
<<<<<<< HEAD
    image: '/api/placeholder/600/300'
  },
  {
    id: 4,
    title: 'Cybersecurity in the Age of AI: New Challenges and Solutions',
    excerpt: 'Exploring how AI is both creating new security challenges and providing innovative solutions to protect businesses.',
    author: 'David Kim',
=======
    category: 'Security',
    image: '/blog/cloud-security.jpg',
    tags: ['Security', 'Cloud', 'Enterprise', 'Best Practices']
  },
  {
    id: 4,
    title: 'Quantum Computing: The Next Frontier in Technology',
    excerpt: 'Understanding quantum computing and its potential impact on various industries.',
    content: 'Quantum computing represents a fundamental shift in computational power...',
    author: 'Dr. Kleber Santos',
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
    date: '2024-01-01',
    category: 'Cybersecurity',
    readTime: '8 min read',
<<<<<<< HEAD
    image: '/api/placeholder/600/300'
  }
];

const categories = ['All', 'AI & Machine Learning', 'Micro SaaS', 'IT Services', 'Cybersecurity', 'Cloud Computing'];
=======
    category: 'Quantum Computing',
    image: '/blog/quantum-computing.jpg',
    tags: ['Quantum Computing', 'Technology', 'Innovation', 'Future']
  }
];

];

const blogCategories = [
  "All Posts",
  "AI & Technology",
  "Cloud Computing",
  "Cybersecurity",
  "SaaS",
  "Digital Transformation"
>>>>>>> main
>>>>>>> main
];
>>>>>>> main
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation from our expert team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

=======
>>>>>>> main
      title="Blog - Zion Tech Group"
      description="Latest insights and trends in technology, AI, and business"
      keywords="blog, technology news, AI trends, business insights, tech articles"
    >
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
>>>>>>> main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-blue-400">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Insights, trends, and expert perspectives on technology, AI, and business innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <button className="flex items-center px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
                  <Filter className="h-5 w-5 mr-2" />
                  Filter
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category, index) => (
=======
>>>>>>> main
              </p>
            </motion.div>
>>>>>>> main
          </div>
        </section>

>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
<<<<<<< HEAD
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-colors"
=======
>>>>>>> main
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
                >
                  <div className="h-48 bg-gray-600"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
>>>>>>> main
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get the latest insights and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
<<<<<<< HEAD
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
=======
            )}
>>>>>>> main
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
>>>>>>> main
>>>>>>> main
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  );
}