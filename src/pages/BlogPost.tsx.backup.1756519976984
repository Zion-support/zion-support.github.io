
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft,
  Tag,
  Share2,
  BookOpen,
  MessageCircle,
  Heart,
  Eye,
  ArrowRight
} from "lucide-react";

function BlogPost() {
  const { id } = useParams();
  
  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: id || "1",
    title: "The Future of AI in Business: 2024 Trends and Predictions",
    excerpt: "Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.",
    content: `
      <p class="mb-6 text-lg text-zion-slate-light leading-relaxed">
        Artificial Intelligence has evolved from a futuristic concept to a fundamental business tool that's transforming industries across the globe. As we move through 2024, the pace of AI adoption is accelerating, bringing both opportunities and challenges for businesses of all sizes.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Current State of AI in Business</h2>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        Today, AI is no longer just about automation—it's about intelligent decision-making, predictive analytics, and creating personalized customer experiences. Companies are leveraging AI to gain competitive advantages, optimize operations, and unlock new revenue streams.
      </p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Key Trends Shaping AI Adoption</h3>
      <ul class="list-disc list-inside mb-6 text-zion-slate-light space-y-2">
        <li><strong>Democratization of AI:</strong> Cloud-based AI services are making advanced capabilities accessible to small and medium businesses</li>
        <li><strong>AI-Powered Analytics:</strong> Real-time insights and predictive modeling are becoming standard business practices</li>
        <li><strong>Conversational AI:</strong> Chatbots and virtual assistants are improving customer service and engagement</li>
        <li><strong>AI in Cybersecurity:</strong> Machine learning is enhancing threat detection and response capabilities</li>
      </ul>
    `,
    author: "Kleber Santos",
    authorAvatar: "KS",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    views: "2.4k",
    likes: "156",
    comments: "23",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["AI", "Business", "Technology", "Innovation"],
    relatedPosts: [
      {
        id: "2",
        title: "AI-Powered Cybersecurity: Protecting Your Business",
        excerpt: "Learn how AI is revolutionizing cybersecurity and protecting businesses from evolving threats.",
        category: "Cybersecurity",
        readTime: "6 min read",
        publishDate: "2024-01-10",
        slug: "ai-cybersecurity"
      },
      {
        id: "3",
        title: "The Rise of Quantum Computing in Business",
        excerpt: "Explore how quantum computing will transform business operations and create new opportunities.",
        category: "Quantum Computing",
        readTime: "7 min read",
        publishDate: "2024-01-05",
        slug: "quantum-computing-business"
      }
    ]
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {blogPost.title}
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                {blogPost.excerpt}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-zion-slate-light">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{formatDate(blogPost.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Featured Image */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Article Body */}
                <div 
                  className="prose prose-invert prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-zion-purple/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-2 bg-zion-purple/20 text-zion-cyan text-sm rounded-lg border border-zion-purple/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {/* Author Info */}
                <div className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">About the Author</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-zion-purple/80 rounded-full flex items-center justify-center text-white font-bold">
                      {blogPost.authorAvatar}
                    </div>
                    <div>
                      <p className="text-white font-medium">{blogPost.author}</p>
                      <p className="text-zion-slate-light text-sm">CEO & Founder</p>
                    </div>
                  </div>
                  <p className="text-zion-slate-light text-sm">
                    Technology visionary with 15+ years of experience in AI, cybersecurity, and digital transformation.
                  </p>
                </div>

                {/* Reading Time */}
                <div className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-6 mb-8">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-zion-cyan" />
                    <div>
                      <p className="text-white font-medium">Reading Time</p>
                      <p className="text-zion-slate-light text-sm">{blogPost.readTime}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Related Articles</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Continue exploring insights and trends in technology and business.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPost.relatedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-zion-cyan/60 text-xs">•</span>
                  <span className="text-zion-cyan/60 text-xs">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-zion-cyan/80 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan/60 text-xs">{formatDate(post.publishDate)}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Implement AI in Your Business?
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-purple px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Explore AI Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BlogPost;
