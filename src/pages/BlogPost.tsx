
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowLeft, 
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Eye,
  ThumbsUp,
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  ArrowRight,
  BookOpen,
  Globe,
  Award
} from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    slug: slug || 'future-of-ai-enterprise-2025',
    title: 'The Future of AI in Enterprise: 2025 and Beyond',
    excerpt: 'Discover how artificial intelligence is reshaping business operations and what organizations need to prepare for in the coming years.',
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        Artificial Intelligence has evolved from a futuristic concept to a fundamental business enabler. 
        As we move through 2025, organizations across industries are experiencing unprecedented transformation 
        driven by AI technologies.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Current State of AI in Enterprise</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Today's enterprises are leveraging AI across multiple dimensions: from customer service automation 
        to predictive analytics, from supply chain optimization to intelligent decision-making systems. 
        The technology has matured significantly, moving beyond pilot projects to production deployments 
        that deliver measurable business value.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Key Trends Shaping AI Adoption</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Several key trends are driving the accelerated adoption of AI in enterprise environments:
      </p>
      
      <ul class="list-disc list-inside mb-6 space-y-2 text-lg">
        <li><strong>Democratization of AI:</strong> Low-code and no-code AI platforms are making advanced 
        capabilities accessible to non-technical users.</li>
        <li><strong>Edge AI:</strong> Processing AI workloads closer to data sources for real-time insights 
        and reduced latency.</li>
        <li><strong>Responsible AI:</strong> Growing emphasis on ethical AI development, transparency, 
        and bias mitigation.</li>
        <li><strong>AI-Augmented Decision Making:</strong> Human-AI collaboration models that enhance 
        rather than replace human judgment.</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Strategic Implementation Considerations</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Successful AI implementation requires careful consideration of several strategic factors:
      </p>
      
      <h3 class="text-xl font-bold text-zion-cyan mb-3">1. Data Strategy and Infrastructure</h3>
      <p class="mb-4 text-lg leading-relaxed">
        AI systems are only as good as the data they're trained on. Organizations must establish robust 
        data governance frameworks, ensure data quality, and build scalable infrastructure to support 
        AI workloads.
      </p>
      
      <h3 class="text-xl font-bold text-zion-cyan mb-3">2. Talent and Skills Development</h3>
      <p class="mb-4 text-lg leading-relaxed">
        The AI talent gap remains a significant challenge. Companies need to invest in upskilling existing 
        employees and developing AI literacy across the organization.
      </p>
      
      <h3 class="text-xl font-bold text-zion-cyan mb-3">3. Change Management</h3>
      <p class="mb-4 text-lg leading-relaxed">
        AI adoption often requires significant organizational change. Effective change management strategies 
        are essential for ensuring smooth transitions and maximizing adoption rates.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Looking Ahead: 2025 and Beyond</h2>
      <p class="mb-6 text-lg leading-relaxed">
        As we look toward the future, several developments are likely to shape the enterprise AI landscape:
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        <strong>Autonomous Systems:</strong> We'll see increased deployment of autonomous AI systems that 
        can operate independently while maintaining human oversight and control.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        <strong>AI-Native Organizations:</strong> Forward-thinking companies will redesign their operations 
        around AI capabilities, creating entirely new business models and competitive advantages.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        <strong>Regulatory Evolution:</strong> As AI becomes more pervasive, we can expect continued 
        development of regulatory frameworks to ensure responsible deployment and use.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
      <p class="mb-6 text-lg leading-relaxed">
        The future of AI in enterprise is not about replacing humans but augmenting human capabilities 
        and enabling organizations to achieve more than ever before. Success will depend on thoughtful 
        implementation, continuous learning, and a commitment to responsible AI development.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed">
        Organizations that embrace AI strategically and invest in the necessary infrastructure, talent, 
        and change management will be well-positioned to thrive in the AI-powered future.
      </p>
    `,
    author: {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      bio: 'Dr. Chen leads Zion Tech Group\'s AI research initiatives, with over 15 years of experience in machine learning and artificial intelligence. She has published numerous papers on AI ethics and enterprise adoption.',
      avatar: '/api/placeholder/80/80',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen'
    },
    publishDate: '2025-01-15',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Enterprise', 'Future Tech', 'Machine Learning', 'Digital Transformation'],
    views: 2847,
    likes: 156,
    comments: 23,
    featured: true,
    relatedPosts: [
      {
        id: 2,
        title: 'Zero Trust Security: Why Traditional Security Models Are Obsolete',
        excerpt: 'Explore the paradigm shift in cybersecurity and how Zero Trust architecture is becoming the new standard.',
        category: 'Cybersecurity',
        readTime: '6 min read',
        publishDate: '2025-01-12',
        slug: 'zero-trust-security-2025'
      },
      {
        id: 3,
        title: 'Cloud-Native Architecture: Building for Scale and Resilience',
        excerpt: 'Learn the principles of cloud-native design and how it enables organizations to build more scalable applications.',
        category: 'Cloud Computing',
        readTime: '10 min read',
        publishDate: '2025-01-10',
        slug: 'cloud-native-architecture-2025'
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

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blogPost.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`);
        break;
    }
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Navigation Back */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category and Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full font-medium">
                {blogPost.category}
              </span>
              <span className="text-zion-cyan/60 text-sm">•</span>
              <span className="text-zion-cyan/60 text-sm">{blogPost.readTime}</span>
              <span className="text-zion-cyan/60 text-sm">•</span>
              <span className="text-zion-cyan/60 text-sm">{formatDate(blogPost.publishDate)}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-zion-cyan/80 mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-zion-cyan" />
              </div>
              <div>
                <p className="text-white text-lg font-medium">{blogPost.author.name}</p>
                <p className="text-zion-cyan/80">{blogPost.author.role}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isLiked 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                    : 'bg-zion-slate/30 text-zion-cyan/80 border border-zion-cyan/20 hover:bg-zion-slate/50'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? blogPost.likes + 1 : blogPost.likes}
              </button>

              <button
                onClick={handleBookmark}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isBookmarked 
                    ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30' 
                    : 'bg-zion-slate/30 text-zion-cyan/80 border border-zion-cyan/20 hover:bg-zion-slate/50'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                {isBookmarked ? 'Saved' : 'Save'}
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 px-4 py-2 bg-zion-slate/30 text-zion-cyan/80 border border-zion-cyan/20 rounded-lg font-medium hover:bg-zion-slate/50 transition-all duration-300"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>

                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-full mt-2 right-0 bg-zion-slate/90 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-3 shadow-xl z-10"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleShare('twitter')}
                        className="flex items-center gap-2 px-3 py-2 text-zion-cyan/80 hover:text-zion-cyan hover:bg-zion-slate/50 rounded-lg transition-all duration-300"
                      >
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </button>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="flex items-center gap-2 px-3 py-2 text-zion-cyan/80 hover:text-zion-cyan hover:bg-zion-slate/50 rounded-lg transition-all duration-300"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="flex items-center gap-2 px-3 py-2 text-zion-cyan/80 hover:text-zion-cyan hover:bg-zion-slate/50 rounded-lg transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </button>
                      <button
                        onClick={() => handleShare('email')}
                        className="flex items-center gap-2 px-3 py-2 text-zion-cyan/80 hover:text-zion-cyan hover:bg-zion-slate/50 rounded-lg transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-zion-cyan/60 text-sm">
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {blogPost.views} views
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                {blogPost.comments} comments
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </motion.div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-2"
          >
            {blogPost.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30"
              >
                #{tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">About the Author</h2>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-zion-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{blogPost.author.name}</h3>
                <p className="text-zion-cyan/80 mb-4">{blogPost.author.bio}</p>
                <div className="flex items-center gap-4">
                  <a
                    href={blogPost.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={blogPost.author.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
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

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/20 rounded-2xl mb-6">
              <BookOpen className="w-8 h-8 text-zion-cyan" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-zion-cyan/80 text-lg mb-6 max-w-2xl mx-auto">
              Get the latest technology insights, industry trends, and expert analysis 
              delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl text-white placeholder-zion-cyan/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
              />
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-zion-cyan/60 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
