import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Card } from './ui/Card';
import ScrollAnimation from './ScrollAnimation';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
<<<<<<< HEAD
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.',
=======
      title: 'The Future of AI in Enterprise: Trends to Watch in 2024',
      excerpt: 'Discover the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
<<<<<<< HEAD
      image: '/api/placeholder/400/250',
      slug: 'future-ai-business-trends-2024',
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small to Medium Businesses',
      excerpt: 'Learn essential cybersecurity strategies to protect your business from evolving threats and ensure data security in the digital age.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      slug: 'cybersecurity-best-practices-smb',
    },
    {
      id: 3,
      title: 'Cloud Migration: A Complete Guide for Enterprise Success',
      excerpt: 'Discover the step-by-step process of migrating to the cloud, including planning, execution, and optimization strategies.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/400/250',
      slug: 'cloud-migration-complete-guide',
    },
    {
      id: 4,
      title: 'Building Scalable Micro SaaS Applications: Architecture Patterns',
      excerpt: 'Learn the key architectural patterns and best practices for building scalable micro SaaS applications that can grow with your business.',
      author: 'David Thompson',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Software Development',
      image: '/api/placeholder/400/250',
      slug: 'scalable-micro-saas-architecture',
    },
=======
      image: '/blog/ai-enterprise-trends.jpg',
      slug: 'future-ai-enterprise-trends-2024'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Remote Teams',
      excerpt: 'Learn essential security measures to protect your distributed workforce and sensitive business data.',
      author: 'Mike Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity-remote-teams.jpg',
      slug: 'cybersecurity-best-practices-remote-teams'
    },
    {
      id: 3,
      title: 'Building Scalable Micro SaaS Applications',
      excerpt: 'A comprehensive guide to creating and scaling micro SaaS products that can grow with your business.',
      author: 'Emily Davis',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Development',
      image: '/blog/micro-saas-scalability.jpg',
      slug: 'building-scalable-micro-saas-applications'
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cybersecurity',
<<<<<<< HEAD
    'Cloud Computing',
    'Software Development',
    'Data Analytics',
=======
    'Development',
    'Cloud Computing',
    'Mobile Development'
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
  ];

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology and digital transformation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
=======
        <ScrollAnimation animation="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Insights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with our expert insights on technology trends, best practices, and industry innovations.
            </p>
          </div>
        </ScrollAnimation>

        {/* Category Filter */}
        <ScrollAnimation animation="fadeIn" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-cyan-500 text-black'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollAnimation
              key={post.id}
              animation="scale"
              delay={index * 0.1}
              className="group"
            >
              <Card className="overflow-hidden bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:border-cyan-400/50">
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">📝</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full mb-4">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* View All Posts CTA */}
<<<<<<< HEAD
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 group"
          >
            View All Posts
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
=======
        <ScrollAnimation animation="fadeIn" delay={0.8}>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </ScrollAnimation>
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
      </div>
    </section>
  );
};

export default BlogSection;
