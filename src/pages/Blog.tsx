import React from 'react';
import { SEO } from '@/components/SEO';
import { blogPosts } from '@/data/posts';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  TrendingUp,
  Star,
  Users,
  Tag
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const featuredPosts = blogPosts.slice(0, 3);
  const allPosts = blogPosts;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI & Tech Insights Blog - Expert Articles & Guides | Zion Tech Group"
        description="Stay ahead with expert insights on AI, machine learning, automation, and tech trends. Real-world case studies, implementation guides, and industry analysis."
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                Expert Insights
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                AI & Tech Insights
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
                Stay ahead with expert insights on AI, machine learning, automation, 
                and emerging tech trends that are shaping the future of business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-slate-400">Expert Articles</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">25K+</div>
                <div className="text-sm text-slate-400">Monthly Readers</div>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-sm text-slate-400">Average Rating</div>
              </div>
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">Weekly</div>
                <div className="text-sm text-slate-400">New Content</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Featured Articles
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our most popular and highly-rated articles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-900">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Featured
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl mb-3 text-slate-900 dark:text-white">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      asChild
                    >
                      <Link to={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              All Articles
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Complete collection of AI and tech insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg mb-2 text-slate-900 dark:text-white">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300 text-sm">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      variant="outline"
                      className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      asChild
                    >
                      <Link to={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stay Updated with Latest AI Insights
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Get our latest articles, case studies, and expert insights delivered to your inbox weekly. 
              Join 25,000+ professionals staying ahead of the AI curve.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-8"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Subscribe to Newsletter
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg py-6 px-8"
                asChild
              >
                <Link to="/resources">
                  Download Resources
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

