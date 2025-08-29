
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Bookmark, Clock, Tag, MessageCircle, Heart, ArrowRight } from 'lucide-react';

// Mock blog post data - in a real app, this would come from an API
const blogPost = {
  id: 1,
  title: 'The Future of AI in Enterprise: 2025 Trends and Predictions',
  content: `
    <p class="mb-6 text-lg text-slate-300 leading-relaxed">
      Artificial Intelligence has evolved from a buzzword to a fundamental business enabler. As we approach 2025, 
      enterprises are witnessing unprecedented transformation through AI integration. This comprehensive analysis 
      explores the key trends that will shape the enterprise AI landscape in the coming year.
    </p>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">1. AI-Powered Decision Intelligence</h2>
    <p class="mb-6 text-slate-300 leading-relaxed">
      Decision intelligence platforms are becoming the backbone of modern enterprises. These systems combine 
      traditional business intelligence with AI-driven insights, enabling organizations to make faster, 
      more accurate decisions. Companies implementing decision intelligence are seeing 40% improvement 
      in operational efficiency and 25% reduction in decision-making time.
    </p>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">2. Autonomous Business Processes</h2>
    <p class="mb-6 text-slate-300 leading-relaxed">
      The era of fully autonomous business processes is upon us. From automated customer service to 
      intelligent supply chain management, AI systems are taking over routine tasks, allowing human 
      workers to focus on strategic initiatives. This shift is expected to create new job categories 
      focused on AI oversight and optimization.
    </p>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">3. AI Ethics and Governance</h2>
    <p class="mb-6 text-slate-300 leading-relaxed">
      As AI becomes more pervasive, ethical considerations are taking center stage. Enterprises are 
      implementing comprehensive AI governance frameworks to ensure responsible AI deployment. This 
      includes bias detection, transparency requirements, and human oversight mechanisms.
    </p>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">4. Edge AI and Distributed Intelligence</h2>
    <p class="mb-6 text-slate-300 leading-relaxed">
      Edge computing combined with AI is enabling real-time decision making at the data source. 
      This approach reduces latency, improves privacy, and enables AI applications in environments 
      where cloud connectivity is limited or unreliable.
    </p>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">5. AI-Augmented Creativity</h2>
    <p class="mb-6 text-slate-300 leading-relaxed">
      AI is not replacing human creativity but augmenting it. Creative professionals are using 
      AI tools to generate ideas, optimize workflows, and explore new possibilities. This 
      collaboration is leading to innovative solutions that neither humans nor AI could create alone.
    </p>

    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Looking Ahead</h2>
    <p class="mb-6 text-slate-300 leading-relaxed">
      The enterprise AI landscape of 2025 will be characterized by increased automation, 
      enhanced decision-making capabilities, and a focus on responsible AI deployment. 
      Organizations that embrace these trends while maintaining human oversight will be 
      best positioned for success in the AI-driven future.
    </p>
  `,
  author: {
    name: 'Dr. Sarah Chen',
    title: 'AI Research Director',
    avatar: '/api/placeholder/100/100',
    bio: 'Leading expert in enterprise AI with over 15 years of experience in machine learning and business intelligence.'
  },
  date: '2025-01-15',
  readTime: '8 min read',
  category: 'AI & Analytics',
  tags: ['AI', 'Enterprise', 'Trends', '2025', 'Machine Learning', 'Digital Transformation'],
  relatedPosts: [
    {
      id: 2,
      title: 'Digital Twin Technology: Revolutionizing Industrial Operations',
      excerpt: 'Learn how digital twin technology is transforming manufacturing, healthcare, and urban planning.',
      date: '2025-01-10',
      category: 'Digital Twin'
    },
    {
      id: 3,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'Separate fact from fiction in the quantum computing landscape and understand its real-world applications.',
      date: '2025-01-05',
      category: 'Quantum Computing'
    }
  ]
};

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title={`${blogPost.title} - Zion Tech Group`}
        description="Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year."
      />
      
      {/* Back Navigation */}
      <section className="pt-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/blog"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category and Date */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/30">
                {blogPost.category}
              </span>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{blogPost.author.name}</h3>
                <p className="text-slate-400">{blogPost.author.title}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 mb-8">
              <button className="flex items-center space-x-2 px-4 py-2 bg-slate-800/70 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <Heart className="h-4 w-4" />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-slate-800/70 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <Bookmark className="h-4 w-4" />
                <span>Save</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-slate-800/70 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <article className="prose prose-invert prose-lg max-w-none">
                <div 
                  className="text-slate-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-800/70 text-slate-300 text-sm rounded-full border border-slate-600 hover:border-cyan-400/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12 pt-8 border-t border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-6">Comments</h3>
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-white">John Smith</h4>
                          <span className="text-sm text-slate-400">2 days ago</span>
                        </div>
                        <p className="text-slate-300">
                          Excellent insights on AI trends! The section on autonomous business processes 
                          really resonated with our current digital transformation efforts.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-white">Maria Garcia</h4>
                          <span className="text-sm text-slate-400">1 week ago</span>
                        </div>
                        <p className="text-slate-300">
                          Great article! I'm particularly interested in the AI ethics and governance 
                          section. How do you recommend implementing these frameworks in smaller organizations?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Leave a Comment</h4>
                  <form className="space-y-4">
                    <div>
                      <textarea
                        rows={4}
                        placeholder="Share your thoughts..."
                        className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              {/* Author Card */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">About the Author</h3>
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">{blogPost.author.name}</h4>
                  <p className="text-slate-400 text-sm">{blogPost.author.title}</p>
                </div>
                <p className="text-slate-300 text-sm text-center">
                  {blogPost.author.bio}
                </p>
              </div>

              {/* Related Posts */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {blogPost.relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="block p-4 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 border border-slate-700/50 hover:border-cyan-400/50"
                    >
                      <h4 className="font-medium text-white mb-2 line-clamp-2 hover:text-cyan-400 transition-colors duration-300">
                        {post.title}
                      </h4>
                      <p className="text-slate-400 text-sm mb-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{post.category}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Zion Tech
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get the latest insights delivered to your inbox. No spam, just valuable content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-slate-700/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
