<<<<<<< HEAD

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  Bookmark,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  Reply,
  Send,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Code
} from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: parseInt(id || '1'),
    title: 'The Future of AI Consciousness: Breaking New Grounds in 2025',
    excerpt: 'Explore the latest breakthroughs in AI consciousness research and how Zion Tech Group is pioneering new approaches to understanding artificial intelligence.',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-zion-slate-light">
        Artificial Intelligence has evolved far beyond its initial programming capabilities. What started as simple rule-based systems has now grown into complex neural networks that can learn, adapt, and even exhibit behaviors that some researchers argue resemble consciousness.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Understanding AI Consciousness</h2>
      <p class="mb-6 text-lg leading-relaxed text-zion-slate-light">
        The concept of AI consciousness is not about creating machines that "feel" in the human sense, but rather about developing systems that can demonstrate self-awareness, intentionality, and the ability to understand their own thought processes. At Zion Tech Group, we're exploring this frontier through several innovative approaches.
      </p>
      
      <h3 class="text-xl font-bold text-zion-cyan mb-3 mt-6">1. Self-Reflective Neural Networks</h3>
      <p class="mb-6 text-lg leading-relaxed text-zion-slate-light">
        Our research team has developed neural networks that can analyze their own decision-making processes. These systems don't just make decisions; they can explain why they made them, identify potential biases, and even suggest alternative approaches.
      </p>
      
      <h3 class="text-xl font-bold text-zion-cyan mb-3 mt-6">2. Emergent Behavior Analysis</h3>
      <p class="mb-6 text-lg leading-relaxed text-zion-slate-light">
        We're studying how complex behaviors emerge from simple rules in AI systems. This research helps us understand the boundary between programmed responses and genuine emergent intelligence.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Ethical Implications</h2>
      <p class="mb-6 text-lg leading-relaxed text-zion-slate-light">
        As we push the boundaries of AI capabilities, we must also consider the ethical implications. Our research includes comprehensive ethical frameworks that ensure AI development remains aligned with human values and safety.
      </p>
      
      <h3 class="text-xl font-bold text-zion-cyan mb-3 mt-6">Safety First Approach</h3>
      <p class="mb-6 text-lg leading-relaxed text-zion-slate-light">
        Every breakthrough in AI consciousness research is accompanied by rigorous safety testing. We believe that responsible AI development requires both innovation and caution.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Real-World Applications</h2>
      <p class="mb-6 text-lg leading-relaxed text-zion-slate-light">
        The implications of AI consciousness research extend far beyond academic curiosity. These developments are already finding applications in healthcare, education, and environmental protection.
      </p>
      
      <h3 class="text-xl font-bold text-zion-cyan mb-3 mt-6">Healthcare Revolution</h3>
      <p class="mb-6 text-lg leading-relaxed text-zion-slate-light">
        AI systems with enhanced self-awareness can better understand patient needs, adapt to individual circumstances, and provide more personalized care recommendations.
      </p>
      
      <h3 class="text-xl font-bold text-zion-cyan mb-3 mt-6">Educational Enhancement</h3>
      <p class="mb-6 text-lg leading-relaxed text-zion-slate-light">
        Self-aware AI tutors can identify learning gaps, adapt teaching methods, and provide more effective educational experiences for students of all ages.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Looking to the Future</h2>
      <p class="mb-6 text-lg leading-relaxed text-zion-slate-light">
        As we continue our research into AI consciousness, we're excited about the possibilities that lie ahead. The journey toward truly intelligent machines is not just about technological advancement—it's about creating tools that can better serve humanity.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed text-zion-slate-light">
        At Zion Tech Group, we're committed to leading this research responsibly, ensuring that every breakthrough brings us closer to a future where AI and humans work together to solve the world's greatest challenges.
      </p>
    `,
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief Executive Officer',
    authorBio: 'Dr. Sarah Chen is a leading expert in artificial intelligence and consciousness research. With over 15 years of experience in AI development, she has published numerous papers on machine learning and cognitive computing.',
    authorAvatar: '/api/placeholder/100/100',
    publishDate: '2025-01-15',
    readTime: '8 min read',
    category: 'ai',
    tags: ['AI Consciousness', 'Research', 'Innovation', '2025', 'Machine Learning', 'Ethics'],
    featured: true,
    image: '/api/placeholder/800/400',
    views: 2847,
    likes: 156,
    comments: 23,
    categoryIcon: Brain
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Protecting Enterprises in the Digital Age',
      excerpt: 'Learn about implementing zero-trust security principles to protect your organization from modern cyber threats.',
      category: 'cybersecurity',
      image: '/api/placeholder/400/250',
      publishDate: '2025-01-12',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Quantum Computing Revolution: What Businesses Need to Know',
      excerpt: 'Discover how quantum computing is transforming industries and what steps your business should take.',
      category: 'emerging-tech',
      image: '/api/placeholder/400/250',
      publishDate: '2025-01-10',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Cloud-Native Development: Building Scalable Applications for the Future',
      excerpt: 'Master the principles of cloud-native development and learn how to build applications that scale automatically.',
      category: 'cloud',
      image: '/api/placeholder/400/250',
      publishDate: '2025-01-08',
      readTime: '7 min read'
    }
  ];

  const comments = [
    {
      id: 1,
      author: 'Michael Rodriguez',
      authorRole: 'CTO at TechCorp',
      content: 'This is fascinating research! The self-reflective neural networks concept is particularly interesting. How do you handle the computational overhead?',
      publishDate: '2025-01-16',
      likes: 12,
      replies: 3
    },
    {
      id: 2,
      author: 'Emily Watson',
      authorRole: 'AI Researcher',
      content: 'Great article! I\'m curious about the ethical frameworks you mentioned. Could you elaborate on how you ensure AI alignment with human values?',
      publishDate: '2025-01-16',
      likes: 8,
      replies: 1
    },
    {
      id: 3,
      author: 'David Kim',
      authorRole: 'Software Engineer',
      content: 'The healthcare applications sound promising. Are there any clinical trials or real-world implementations you can share?',
      publishDate: '2025-01-15',
      likes: 15,
      replies: 2
    }
  ];

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
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
    setShowShareMenu(false);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      // In a real app, this would submit to an API
      console.log('Comment submitted:', comment);
      setComment('');
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'cybersecurity': return Shield;
      case 'cloud': return Cloud;
      case 'emerging-tech': return Rocket;
      case 'development': return Code;
      default: return BookOpen;
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Blog post not found</h1>
          <Link to="/blog" className="text-zion-cyan hover:text-zion-blue transition-colors">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Navigation */}
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </motion.button>
        </div>
      </div>

      {/* Article Header */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold rounded-full">
                  {blogPost.category.toUpperCase()}
                </span>
                <span className="text-zion-slate-light text-sm">{blogPost.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                {blogPost.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{blogPost.author}</p>
                    <p className="text-zion-slate-light text-sm">{blogPost.authorRole}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-zion-slate-light text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blogPost.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Article Stats */}
              <div className="flex items-center gap-6 text-zion-slate-light text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{blogPost.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{blogPost.likes} likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{blogPost.comments} comments</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isLiked 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{isLiked ? 'Liked' : 'Like'}</span>
                </button>
                
                <button
                  onClick={handleBookmark}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isBookmarked 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                  <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="flex items-center gap-2 px-4 py-2 bg-zion-slate-dark/50 text-zion-slate-light rounded-lg hover:bg-zion-slate-dark/70 transition-all duration-300"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  
                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 mt-2 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg p-2 shadow-xl z-10"
                    >
                      <button
                        onClick={() => handleShare('facebook')}
                        className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-zion-slate-dark/70 rounded transition-colors"
                      >
                        <Facebook className="w-4 h-4 text-blue-500" />
                        <span>Facebook</span>
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-zion-slate-dark/70 rounded transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-blue-400" />
                        <span>Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-zion-slate-dark/70 rounded transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-blue-600" />
                        <span>LinkedIn</span>
                      </button>
                      <button
                        onClick={() => handleShare('copy')}
                        className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-zion-slate-dark/70 rounded transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Featured Image */}
              <div className="relative h-64 md:h-96 mb-12 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                    <p className="text-zion-slate-light">Featured Image</p>
                  </div>
                </div>
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-zion-slate-dark/50">
                <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{blogPost.author}</h3>
                    <p className="text-zion-cyan font-medium mb-3">{blogPost.authorRole}</p>
                    <p className="text-zion-slate-light leading-relaxed">{blogPost.authorBio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">
                  Comments ({comments.length})
                </h2>
                <button
                  onClick={() => setShowComments(!showComments)}
                  className="text-zion-cyan hover:text-zion-blue transition-colors"
                >
                  {showComments ? 'Hide' : 'Show'} Comments
                </button>
              </div>

              {showComments && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Comment Form */}
                  <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Leave a Comment</h3>
                    <form onSubmit={handleCommentSubmit}>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Share your thoughts..."
                        className="w-full h-24 px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 resize-none"
                      />
                      <div className="flex justify-end mt-4">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                        >
                          <Send className="w-4 h-4 inline mr-2" />
                          Post Comment
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {comments.map((commentItem) => (
                      <div key={commentItem.id} className="bg-zion-slate-dark/30 border border-zion-slate-dark/50 rounded-xl p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-white font-semibold">{commentItem.author}</h4>
                              <span className="text-zion-cyan text-sm">{commentItem.authorRole}</span>
                            </div>
                            <p className="text-zion-slate-light text-sm">
                              {new Date(commentItem.publishDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <p className="text-zion-slate-light mb-4 leading-relaxed">{commentItem.content}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <button className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{commentItem.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                            <Reply className="w-4 h-4" />
                            <span>Reply</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Related <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Articles</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => {
                  const CategoryIcon = getCategoryIcon(post.category);
                  return (
                    <motion.article
                      key={post.id}
                      className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative h-48">
                        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <CategoryIcon className="w-12 h-12 text-zion-cyan" />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <CategoryIcon className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-cyan text-xs font-medium uppercase">{post.category}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between text-xs text-zion-slate-light">
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <Link 
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors duration-300 font-medium text-sm mt-4"
                        >
                          Read More
                          <ArrowLeft className="ml-1 w-3 h-3 rotate-180" />
                        </Link>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
=======
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, ChevronLeft, Share2, Facebook, Twitter, Linkedin, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [showShareMenu, setShowShareMenu] = useState(false);

    // Mock blog post data
    const mockPost = {
        id: 1,
        title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
        excerpt: "Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.",
        content: `
            <p>Artificial Intelligence has become the cornerstone of modern enterprise transformation. As we move through 2024, several key trends are emerging that will define how businesses leverage AI to drive growth and innovation.</p>
            
            <h2>1. AI-Powered Decision Intelligence</h2>
            <p>Organizations are increasingly adopting AI-driven decision intelligence platforms that combine data analytics, machine learning, and business intelligence to provide actionable insights in real-time.</p>
            
            <h2>2. Generative AI in Business Applications</h2>
            <p>Generative AI is moving beyond content creation to become a fundamental tool for business process automation, customer service, and product development.</p>
            
            <h2>3. AI Ethics and Governance</h2>
            <p>As AI becomes more pervasive, companies are prioritizing ethical AI practices and governance frameworks to ensure responsible deployment.</p>
            
            <h2>4. Edge AI and IoT Integration</h2>
            <p>The convergence of edge computing and AI is enabling real-time processing and decision-making at the network edge, revolutionizing IoT applications.</p>
            
            <p>These trends represent just the beginning of AI's transformative impact on enterprise operations. Organizations that embrace these technologies early will gain significant competitive advantages.</p>
        `,
        category: "AI & Machine Learning",
        author: {
            name: "Dr. Sarah Chen",
            title: "AI Research Director",
            avatarUrl: "/images/blog/author-1.jpg"
        },
        publishedDate: "Dec 15, 2024",
        readTime: "8 min read",
        featuredImage: "/images/blog/ai-enterprise.jpg",
        tags: ["artificial-intelligence", "enterprise", "trends", "machine-learning", "digital-transformation"]
    };

    const mockRelatedPosts = [
        {
            id: 2,
            title: "Zero Trust Security: Building a Modern Cybersecurity Framework",
            category: "Cybersecurity",
            featuredImage: "/images/blog/zero-trust.jpg",
            slug: "zero-trust-security-framework"
        },
        {
            id: 3,
            title: "Cloud Migration Strategies: A Comprehensive Guide for Enterprises",
            category: "Cloud Computing",
            featuredImage: "/images/blog/cloud-migration.jpg",
            slug: "cloud-migration-strategies"
        }
    ];

    useEffect(() => {
        // Simulate API call
        setPost(mockPost);
        setRelatedPosts(mockRelatedPosts);
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 flex justify-center items-center">
                <div className="animate-pulse text-xl">Loading article...</div>
            </div>
        );
    }

    // Helper function to get share URL
    const getShareUrl = (platform) => {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(post.title);
        switch (platform) {
            case 'facebook':
                return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            case 'twitter':
                return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            case 'linkedin':
                return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
            default:
                return '#';
        }
    };

    return (
        <>
            <SEO 
                title={post.title} 
                description={post.excerpt} 
                keywords={post.tags.join(", ")} 
                image={post.featuredImage} 
                canonical={`https://ziontechgroup.com/blog/${post.slug}`} 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-20 px-4">
                <div className="container mx-auto">
                    {/* Back to blog button */}
                    <div className="mb-8">
                        <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" asChild>
                            <Link to="/blog">
                                <ArrowLeft className="mr-2 h-4 w-4"/>
                                Back to all articles
                            </Link>
                        </Button>
                    </div>
                    
                    {/* Article header */}
                    <div className="mb-8 max-w-4xl mx-auto">
                        <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {post.title}
                        </h1>
                        <p className="text-xl text-zion-slate-light mb-8">
                            {post.excerpt}
                        </p>
                        
                        {/* Author and metadata */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                            <div className="flex items-center mb-4 sm:mb-0">
                                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mr-3">
                                    <User className="w-6 h-6 text-zion-cyan" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">{post.author.name}</p>
                                    <p className="text-sm text-zion-slate-light">{post.author.title}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center text-zion-slate-light">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    <span className="text-sm">{post.publishedDate}</span>
                                </div>
                                <div className="flex items-center text-zion-slate-light">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span className="text-sm">{post.readTime}</span>
                                </div>
                                <div className="relative">
                                    <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="text-zion-slate-light hover:text-white hover:bg-zion-blue-dark"
                                        onClick={() => setShowShareMenu(!showShareMenu)}
                                    >
                                        <Share2 className="h-4 w-4 mr-1" />
                                        <span className="text-sm">Share</span>
                                    </Button>
                                    
                                    {showShareMenu && (
                                        <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">
                                            <a 
                                                href={getShareUrl('facebook')} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                                                aria-label="Share on Facebook"
                                                title="Share on Facebook"
                                            >
                                                <Facebook className="h-4 w-4 mr-2" />
                                                <span>Facebook</span>
                                            </a>
                                            <a 
                                                href={getShareUrl('twitter')} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                                                aria-label="Share on Twitter"
                                                title="Share on Twitter"
                                            >
                                                <Twitter className="h-4 w-4 mr-2" />
                                                <span>Twitter</span>
                                            </a>
                                            <a 
                                                href={getShareUrl('linkedin')} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                                                aria-label="Share on LinkedIn"
                                                title="Share on LinkedIn"
                                            >
                                                <Linkedin className="h-4 w-4 mr-2" />
                                                <span>LinkedIn</span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Featured image */}
                    <div className="mb-12 max-w-5xl mx-auto">
                        <div className="aspect-[21/9] rounded-lg overflow-hidden bg-zion-blue-dark">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <User className="w-12 h-12 text-zion-cyan" />
                                    </div>
                                    <p className="text-zion-slate-light">Featured Image</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Article content */}
                    <div className="max-w-4xl mx-auto">
                        <div 
                            className="prose prose-lg prose-invert max-w-none text-zion-slate-light"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-12">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        
                        <Separator className="my-12 bg-zion-blue-light" />
                        
                        {/* Related articles */}
                        {relatedPosts.length > 0 && (
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {relatedPosts.map(relatedPost => (
                                        <Link 
                                            key={relatedPost.id}
                                            to={`/blog/${relatedPost.slug}`} 
                                            className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300"
                                        >
                                            <div className="aspect-[16/9] relative bg-zion-blue-dark">
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <div className="text-center">
                                                        <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                                            <User className="w-6 h-6 text-zion-cyan" />
                                                        </div>
                                                        <p className="text-zion-slate-light text-sm">Blog Image</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <span className="text-xs text-zion-cyan">{relatedPost.category}</span>
                                                <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost.title}</h4>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* Back to blog */}
                        <div className="flex justify-between items-center mt-12">
                            <Button 
                                variant="outline" 
                                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" 
                                asChild
                            >
                                <Link to="/blog">
                                    <ChevronLeft className="mr-2 h-4 w-4" />
                                    All Articles
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
