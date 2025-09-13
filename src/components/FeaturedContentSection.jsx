import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, TrendingUp, Award, BookOpen, Play, Download } from 'lucide-react';
import { BLOG_POSTS } from '../data/blog-posts';
import { CASE_STUDIES } from '../data/case-studies';

export const FeaturedContentSection = () => {
  const featuredPosts = BLOG_POSTS.filter(post => post.featured).slice(0, 3);
  const featuredCaseStudies = CASE_STUDIES.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured Content & Resources
          </h2>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
            Stay ahead with our latest insights, case studies, and industry reports. 
            Discover how leading companies are transforming their business with our solutions.
          </p>
        </motion.div>

        {/* Featured Blog Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-zion-cyan" />
              Latest Insights & Trends
            </h3>
            <a 
              href="/blog" 
              className="text-zion-cyan hover:text-white transition-colors flex items-center gap-2"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-zion-cyan text-zion-blue-dark px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-zion-cyan/80 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {post.title}
                    </h4>
                    
                    <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-zion-cyan/10 text-zion-cyan px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors font-semibold"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Featured Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Award className="w-6 h-6 text-zion-cyan" />
              Success Stories & Case Studies
            </h3>
            <a 
              href="/case-studies" 
              className="text-zion-cyan hover:text-white transition-colors flex items-center gap-2"
            >
              View All Cases
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Success Story
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-zion-cyan/80 mb-3">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {study.roi}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {study.duration}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {study.title}
                    </h4>
                    
                    <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                      {study.challenge}
                    </p>

                    {/* Key Results */}
                    <div className="space-y-2 mb-4">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-2 text-sm text-green-400">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          {result}
                        </div>
                      ))}
                    </div>

                    <a 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors font-semibold"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resource Center CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-3xl p-8 border border-zion-cyan/20"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Access Our Complete Resource Library
            </h3>
            <p className="text-zion-cyan/80 mb-6 max-w-2xl mx-auto">
              Get instant access to whitepapers, guides, webinars, and exclusive content 
              designed to accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/resources"
                className="inline-flex items-center gap-2 bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-full font-semibold hover:bg-zion-cyan/90 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Resources
              </a>
              <a 
                href="/webinars"
                className="inline-flex items-center gap-2 border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-full font-semibold hover:bg-zion-cyan/10 transition-colors"
              >
                <Play className="w-5 h-5" />
                Watch Webinars
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const ContentShowcase = () => {
  const contentTypes = [
    {
      icon: BookOpen,
      title: "Technical Guides",
      description: "Comprehensive guides on AI, cloud, and security best practices",
      count: "25+ Guides",
      color: "text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Industry Reports",
      description: "Latest market insights and technology trend analysis",
      count: "12 Reports",
      color: "text-green-400"
    },
    {
      icon: Award,
      title: "Case Studies",
      description: "Real-world success stories from our client implementations",
      count: "50+ Cases",
      color: "text-purple-400"
    },
    {
      icon: Play,
      title: "Video Content",
      description: "Webinars, tutorials, and product demonstrations",
      count: "30+ Videos",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-16 bg-zion-slate-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Comprehensive Content Library
          </h2>
          <p className="text-xl text-zion-cyan/80 max-w-2xl mx-auto">
            Access our extensive collection of resources designed to help you succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentTypes.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4 ${content.color}`}>
                  <content.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-zion-cyan/80 mb-4">
                  {content.description}
                </p>
                
                <div className={`text-sm font-semibold ${content.color}`}>
                  {content.count}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};