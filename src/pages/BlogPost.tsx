
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Bookmark, 
  Heart, 
  MessageCircle, 
  ExternalLink,
  TrendingUp,
  Star,
  Eye,
  ThumbsUp,
  BookOpen,
  Zap,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Globe,
  Building,
  Users,
  Target,
  Award
} from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: id || '1',
    title: 'The Future of AI in Enterprise: How Zion Tech Group is Leading the Revolution',
    excerpt: 'Discover how artificial intelligence is transforming enterprise operations and how Zion Tech Group is at the forefront of this technological revolution.',
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        Artificial Intelligence has evolved from a futuristic concept to a practical business tool that's reshaping how enterprises operate, compete, and grow. At Zion Tech Group, we've been at the forefront of this transformation, helping organizations harness the power of AI to drive innovation and achieve unprecedented results.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">The AI Revolution in Enterprise</h2>
      <p class="mb-6 text-lg leading-relaxed">
        The enterprise AI landscape has witnessed remarkable growth over the past decade. What started as simple automation tools has evolved into sophisticated systems capable of understanding context, making predictions, and learning from experience. This evolution has created new opportunities for businesses to optimize operations, enhance customer experiences, and unlock new revenue streams.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Our research shows that organizations implementing AI solutions see an average 30% improvement in operational efficiency and a 25% increase in customer satisfaction. These aren't just numbers—they represent real business value that can make the difference between thriving and merely surviving in today's competitive landscape.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Zion Tech Group's AI Solutions</h2>
      <p class="mb-6 text-lg leading-relaxed">
        We've developed a comprehensive suite of AI solutions designed specifically for enterprise needs. Our AI Business Intelligence platform combines machine learning algorithms with advanced data analytics to provide actionable insights that drive strategic decision-making.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The AI Workflow Orchestrator automates complex business processes, reducing manual work by up to 70% while improving accuracy and consistency. This allows employees to focus on high-value tasks that require human creativity and judgment.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Real-World Impact</h2>
      <p class="mb-6 text-lg leading-relaxed">
        One of our clients, a Fortune 500 manufacturing company, implemented our AI-powered predictive maintenance system and reduced equipment downtime by 45%. Another client, a healthcare provider, used our AI diagnostic tools to improve patient outcomes while reducing diagnostic time by 60%.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        These success stories demonstrate that AI isn't just about cutting-edge technology—it's about solving real business problems and creating measurable value for organizations and their stakeholders.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Looking Ahead</h2>
      <p class="mb-6 text-lg leading-relaxed">
        As we look to the future, we see AI becoming even more integrated into enterprise operations. The next generation of AI solutions will focus on explainability, ethical considerations, and seamless human-AI collaboration. At Zion Tech Group, we're already working on these next-generation capabilities.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        The future belongs to organizations that can effectively leverage AI to augment human capabilities, not replace them. Our mission is to help every enterprise achieve this balance and unlock their full potential in the AI era.
      </p>
    `,
    author: {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      avatar: '/api/placeholder/60/60',
      bio: 'Leading AI research and development at Zion Tech Group with 15+ years of experience in machine learning and enterprise AI solutions.'
    },
    publishDate: '2024-12-15',
    readTime: '8 min read',
    category: 'Artificial Intelligence',
    tags: ['AI', 'Enterprise', 'Innovation', 'Machine Learning', 'Digital Transformation'],
    views: 15420,
    likes: 892,
    comments: 156,
    featured: true,
    relatedPosts: [
      {
        id: '2',
        title: 'Building Secure AI Systems: Best Practices for Enterprise',
        excerpt: 'Learn the essential security considerations when implementing AI solutions in enterprise environments.',
        category: 'Cybersecurity',
        readTime: '6 min read',
        publishDate: '2024-12-10'
      },
      {
        id: '3',
        title: 'The Rise of Edge Computing: Bringing AI Closer to Data',
        excerpt: 'Explore how edge computing is revolutionizing AI deployment and enabling real-time decision making.',
        category: 'Edge Computing',
        readTime: '7 min read',
        publishDate: '2024-12-08'
      },
      {
        id: '4',
        title: 'Quantum AI: The Next Frontier in Computing',
        excerpt: 'Discover how quantum computing is set to transform artificial intelligence and solve previously impossible problems.',
        category: 'Quantum Computing',
        readTime: '9 min read',
        publishDate: '2024-12-05'
      }
    ]
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        text: blogPost.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Show toast notification
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title={`${blogPost.title} - Zion Tech Group Blog`}
        description={blogPost.excerpt}
      />
      
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/blog"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              {blogPost.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(blogPost.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                {blogPost.views.toLocaleString()} views
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={handleLike}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                  isLiked 
                    ? 'bg-red-500 text-white' 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? 'Liked' : 'Like'}
              </button>
              <button
                onClick={handleBookmark}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                  isBookmarked 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                {isBookmarked ? 'Saved' : 'Save'}
              </button>
              <button
                onClick={handleShare}
                className="flex items-center px-4 py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-all duration-300"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div 
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1"
              >
                {/* Author Info */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-8">
                  <h3 className="text-lg font-bold text-white mb-4">About the Author</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{blogPost.author.name}</h4>
                      <p className="text-gray-400 text-sm">{blogPost.author.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{blogPost.author.bio}</p>
                </div>

                {/* Stats */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-8">
                  <h3 className="text-lg font-bold text-white mb-4">Article Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Views</span>
                      <span className="text-white font-semibold">{blogPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Likes</span>
                      <span className="text-white font-semibold">{blogPost.likes}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Comments</span>
                      <span className="text-white font-semibold">{blogPost.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full hover:bg-slate-600 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Related Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Continue exploring our latest insights and discoveries in technology and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPost.relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    {new Date(post.publishDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter and never miss the latest trends, insights, and innovations in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
