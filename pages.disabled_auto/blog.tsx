import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const BlogPage: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping the business landscape in 2024, from generative AI to autonomous systems.',
      content: 'Artificial Intelligence continues to revolutionize how businesses operate, with 2024 bringing unprecedented advancements in generative AI, machine learning automation, and intelligent decision-making systems...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-trends-2024.jpg',
      tags: ['AI', 'Business', 'Technology', 'Future']
    },
    {
      id: 2,
      title: 'Micro SaaS: The New Frontier of Software Development',
      excerpt: 'Discover how micro SaaS solutions are transforming the software industry and creating new opportunities for entrepreneurs.',
      content: 'Micro SaaS represents a paradigm shift in software development, focusing on solving specific problems with targeted, affordable solutions...',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Micro SaaS',
      image: '/blog/micro-saas-frontier.jpg',
      tags: ['SaaS', 'Entrepreneurship', 'Software', 'Innovation']
    },
    {
      id: 3,
      title: 'Quantum Computing: Preparing Your Business for the Next Revolution',
      excerpt: 'Learn how quantum computing will impact your business and what steps you should take to prepare for this technological revolution.',
      content: 'Quantum computing promises to solve problems that are currently impossible for classical computers, revolutionizing industries from cryptography to drug discovery...',
      author: 'Dr. Alex Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Quantum Computing',
      image: '/blog/quantum-computing.jpg',
      tags: ['Quantum', 'Computing', 'Technology', 'Future']
    },
    {
      id: 4,
      title: 'Edge Computing: Bringing Intelligence Closer to Your Data',
      excerpt: 'Understand how edge computing is transforming data processing and enabling real-time applications across industries.',
      content: 'Edge computing brings computation and data storage closer to the sources of data, enabling faster processing and reduced latency...',
      author: 'Jennifer Liu',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Edge Computing',
      image: '/blog/edge-computing.jpg',
      tags: ['Edge Computing', 'IoT', 'Data Processing', 'Technology']
    },
    {
      id: 5,
      title: 'Blockchain Beyond Cryptocurrency: Enterprise Applications',
      excerpt: 'Explore real-world blockchain applications in supply chain, healthcare, and financial services beyond digital currencies.',
      content: 'Blockchain technology offers far more than cryptocurrency, providing secure, transparent, and decentralized solutions for enterprise challenges...',
      author: 'David Park',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Blockchain',
      image: '/blog/blockchain-enterprise.jpg',
      tags: ['Blockchain', 'Enterprise', 'Supply Chain', 'Security']
    },
    {
      id: 6,
      title: '5G Networks: Enabling the Connected Future',
      excerpt: 'Discover how 5G technology is enabling new applications and transforming industries from healthcare to manufacturing.',
      content: '5G networks provide the foundation for the Internet of Things, autonomous vehicles, and smart cities, enabling unprecedented connectivity...',
      author: 'Maria Garcia',
      date: '2024-01-03',
      readTime: '6 min read',
      category: '5G Technology',
      image: '/blog/5g-networks.jpg',
      tags: ['5G', 'IoT', 'Connectivity', 'Technology']
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Micro SaaS',
    'Quantum Computing',
    'Edge Computing',
    'Blockchain',
    '5G Technology',
    'Cybersecurity',
    'Cloud Computing'
  ];

  const featuredPost = blogPosts[0];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and innovations in technology. Expert analysis and thought leadership from Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Technology Insights
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Stay ahead of the curve with expert insights, industry trends, and innovative solutions 
            from our team of technology experts.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <Tag className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span className="text-sm">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link 
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All Posts'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-semibold text-sm">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights, trends, and innovations in technology.
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-blue-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help your business thrive in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Started Today
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;