import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Tag, TrendingUp, Star } from 'lucide-react';
import { Button } from './ui/button';
import { BLOG_POSTS } from '../data/blog-posts';

export function FeaturedContentSection() {
  const featuredPosts = BLOG_POSTS.filter(post => post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Featured Content
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Latest Insights &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expert Knowledge
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Stay ahead with our latest blog posts, expert insights, and cutting-edge technology trends
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white text-xs font-semibold rounded-full shadow-lg">
                    Featured
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  <Link to={`/blog/${post.id}`} className="flex items-center justify-center space-x-2">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Discover our comprehensive range of AI and technology services designed to accelerate your digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-slate-100 border-0 shadow-lg"
                >
                  <Link to="/services" className="flex items-center space-x-2">
                    <span>Explore Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Link to="/blog" className="flex items-center space-x-2">
                    <span>View All Articles</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function ContentShowcase() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Premium Content
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expert Insights &{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cutting-Edge Solutions
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8">
              Access our comprehensive library of expert articles, technical guides, and industry insights to stay ahead of the technology curve.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Latest Technology Trends</h3>
                  <p className="text-slate-300">Stay updated with the latest developments in AI, quantum computing, and emerging technologies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Authors</h3>
                  <p className="text-slate-300">Learn from industry experts and thought leaders with years of experience in cutting-edge technologies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Regular Updates</h3>
                  <p className="text-slate-300">New content published regularly to keep you informed about the latest developments and best practices.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
              >
                <Link to="/blog" className="flex items-center space-x-2">
                  <span>Read Our Blog</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <Link to="/services" className="flex items-center space-x-2">
                  <span>Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Blog Post Cards */}
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-3"></div>
                  <h4 className="text-white font-semibold mb-2">AI in Business 2025</h4>
                  <p className="text-slate-400 text-sm">Future trends and predictions</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <div className="w-full h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg mb-3"></div>
                  <h4 className="text-white font-semibold mb-2">Edge Computing</h4>
                  <p className="text-slate-400 text-sm">Revolutionizing AI deployment</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mb-3"></div>
                  <h4 className="text-white font-semibold mb-2">Quantum Security</h4>
                  <p className="text-slate-400 text-sm">Next-gen cybersecurity</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-3"></div>
                  <h4 className="text-white font-semibold mb-2">Green IT</h4>
                  <p className="text-slate-400 text-sm">Sustainable technology</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}