import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  ClockIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'devops', name: 'DevOps' },
    { id: 'business', name: 'Business' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in artificial intelligence and how they will shape the business landscape in 2024.',
      category: 'ai',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      views: 1250,
      likes: 89,
      thumbnail: '/images/blog/ai-future.jpg',
      tags: ['AI', 'Business', 'Technology', 'Future']
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices: Protecting Your Data in the Cloud',
      excerpt: 'Learn essential security practices to keep your cloud infrastructure and data safe from threats.',
      category: 'security',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      views: 980,
      likes: 67,
      thumbnail: '/images/blog/cloud-security.jpg',
      tags: ['Security', 'Cloud', 'Best Practices', 'Data Protection']
    },
    {
      id: 3,
      title: 'DevOps Transformation: From Chaos to Continuous Delivery',
      excerpt: 'Discover how to transform your development process with modern DevOps practices and tools.',
      category: 'devops',
      author: 'Emma Wilson',
      date: '2024-01-10',
      readTime: '10 min read',
      views: 756,
      likes: 45,
      thumbnail: '/images/blog/devops-transformation.jpg',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Development']
    },
    {
      id: 4,
      title: 'Machine Learning Model Deployment: A Complete Guide',
      excerpt: 'Step-by-step guide to deploying machine learning models in production environments.',
      category: 'ai',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-08',
      readTime: '12 min read',
      views: 1100,
      likes: 78,
      thumbnail: '/images/blog/ml-deployment.jpg',
      tags: ['Machine Learning', 'Deployment', 'Production', 'AI']
    },
    {
      id: 5,
      title: 'Digital Transformation: How to Lead Change in Your Organization',
      excerpt: 'Learn how to successfully lead digital transformation initiatives and drive organizational change.',
      category: 'business',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '7 min read',
      views: 890,
      likes: 56,
      thumbnail: '/images/blog/digital-transformation.jpg',
      tags: ['Digital Transformation', 'Leadership', 'Change Management', 'Business']
    },
    {
      id: 6,
      title: 'Container Security: Protecting Your Kubernetes Workloads',
      excerpt: 'Essential security practices for containerized applications and Kubernetes environments.',
      category: 'security',
      author: 'Alex Rodriguez',
      date: '2024-01-03',
      readTime: '9 min read',
      views: 650,
      likes: 42,
      thumbnail: '/images/blog/container-security.jpg',
      tags: ['Kubernetes', 'Containers', 'Security', 'DevOps']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from our expert team." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Tech <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Insights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead of the curve with our expert insights on AI, cloud computing, 
                cybersecurity, and the latest technology trends.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-cyan-900/20 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Featured Article</h3>
                    <p className="text-gray-300">Coming Soon</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {categories.find(cat => cat.id === featuredPost.category)?.name}
                    </span>
                    <div className="flex items-center text-gray-400">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <UserIcon className="w-4 h-4 mr-2" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        <span>{featuredPost.views}</span>
                      </div>
                      <div className="flex items-center">
                        <HeartIcon className="w-4 h-4 mr-1" />
                        <span>{featuredPost.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our latest insights, tutorials, and industry analysis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-cyan-900/20 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-white mb-2">Article Preview</h3>
                      <p className="text-gray-300">Coming Soon</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <UserIcon className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center">
                          <EyeIcon className="w-4 h-4 mr-1" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center">
                          <HeartIcon className="w-4 h-4 mr-1" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group">
                        Read More
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter and never miss the latest insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our experts help you implement the latest technologies and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/tutorials" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105"
              >
                View Tutorials
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;