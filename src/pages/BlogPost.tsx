
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowLeft, 
  Share2, 
  Bookmark,
  Clock,
  MessageCircle,
  ThumbsUp,
  Eye,
  Twitter,
  Linkedin,
  Facebook,
  Copy,
  CheckCircle
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  image: string;
  featured: boolean;
  views: number;
  likes: number;
  comments: number;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockPost: BlogPost = {
      id: slug || '1',
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.',
      content: `
        <h2>The AI Revolution in Enterprise</h2>
        <p>Artificial Intelligence has evolved from a buzzword to a fundamental business enabler. In 2024, we're witnessing unprecedented adoption of AI technologies across enterprise environments, transforming how organizations operate, compete, and deliver value to their customers.</p>
        
        <h3>Key Trends Shaping Enterprise AI</h3>
        <p>Several key trends are driving the rapid adoption of AI in enterprise settings:</p>
        <ul>
          <li><strong>Democratization of AI:</strong> No-code and low-code AI platforms are making advanced AI capabilities accessible to non-technical users.</li>
          <li><strong>AI-First Architecture:</strong> Organizations are redesigning their technology stacks with AI as a core component rather than an afterthought.</li>
          <li><strong>Responsible AI:</strong> Increased focus on ethical AI development, transparency, and governance frameworks.</li>
          <li><strong>Edge AI:</strong> Moving AI processing closer to data sources for real-time decision making.</li>
        </ul>
        
        <h3>Practical Applications Driving ROI</h3>
        <p>Enterprise AI is delivering measurable business value across various functions:</p>
        
        <h4>Customer Experience</h4>
        <p>AI-powered chatbots and virtual assistants are revolutionizing customer service, providing 24/7 support and personalized experiences. Advanced natural language processing enables human-like interactions, while machine learning algorithms continuously improve response quality.</p>
        
        <h4>Operations Optimization</h4>
        <p>Predictive analytics and AI-driven automation are streamlining business processes, reducing costs, and improving efficiency. From supply chain optimization to predictive maintenance, AI is transforming operational excellence.</p>
        
        <h4>Decision Intelligence</h4>
        <p>AI-powered business intelligence platforms are providing executives with real-time insights and predictive analytics, enabling data-driven decision making at unprecedented speed and accuracy.</p>
        
        <h3>Implementation Challenges and Solutions</h3>
        <p>While the benefits of enterprise AI are clear, implementation challenges remain:</p>
        
        <h4>Data Quality and Governance</h4>
        <p>AI systems require high-quality, well-governed data. Organizations must invest in data infrastructure, establish clear governance policies, and ensure data privacy compliance.</p>
        
        <h4>Change Management</h4>
        <p>Successful AI adoption requires cultural change and employee training. Organizations must communicate the benefits clearly and provide support during the transition.</p>
        
        <h4>Integration Complexity</h4>
        <p>Integrating AI with existing systems can be complex. A phased approach, starting with pilot projects and gradually expanding, often yields better results.</p>
        
        <h3>Looking Ahead: 2024 and Beyond</h3>
        <p>As we move through 2024, several developments are expected to accelerate enterprise AI adoption:</p>
        <ul>
          <li><strong>Multimodal AI:</strong> Integration of text, image, and voice processing for more comprehensive AI solutions.</li>
          <li><strong>AI Governance:</strong> Enhanced frameworks for responsible AI development and deployment.</li>
          <li><strong>Industry-Specific Solutions:</strong> Tailored AI applications for specific sectors like healthcare, finance, and manufacturing.</li>
          <li><strong>AI Talent Development:</strong> Increased focus on building internal AI capabilities and expertise.</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>The future of enterprise AI is bright, with organizations increasingly recognizing its transformative potential. Success requires a strategic approach, focusing on clear business objectives, robust data foundations, and thoughtful change management. Organizations that embrace AI thoughtfully and responsibly will gain significant competitive advantages in the years ahead.</p>
      `,
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Trends', '2024', 'Digital Transformation'],
      readTime: 8,
      image: '/api/placeholder/800/400',
      featured: true,
      views: 15420,
      likes: 892,
      comments: 156
    };

    const mockRelatedPosts: BlogPost[] = [
      {
        id: '2',
        title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
        excerpt: 'A comprehensive look at quantum computing capabilities and their practical applications in business.',
        content: 'Full content here...',
        author: 'Michael Rodriguez',
        date: '2024-01-12',
        category: 'Quantum Computing',
        tags: ['Quantum', 'Computing', 'Technology', 'Innovation'],
        readTime: 12,
        image: '/api/placeholder/600/400',
        featured: true,
        views: 12340,
        likes: 756,
        comments: 98
      },
      {
        id: '3',
        title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
        excerpt: 'How AI is both creating new security challenges and providing innovative solutions.',
        content: 'Full content here...',
        author: 'Alex Thompson',
        date: '2024-01-10',
        category: 'Cybersecurity',
        tags: ['Security', 'AI', 'Threats', 'Solutions'],
        readTime: 10,
        image: '/api/placeholder/600/400',
        featured: false,
        views: 9876,
        likes: 543,
        comments: 87
      }
    ];

    setPost(mockPost);
    setRelatedPosts(mockRelatedPosts);
  }, [slug]);

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
    setShowShareMenu(false);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (post) {
      setPost({
        ...post,
        likes: isLiked ? post.likes - 1 : post.likes + 1
      });
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-slate-300">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Category and Date */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author and Stats */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-slate-400 text-sm">AI & Technology Expert</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                {post.likes.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                {post.comments.toLocaleString()}
              </span>
            </div>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none mb-12"
        >
          <div 
            className="text-slate-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full hover:bg-slate-600/50 transition-colors duration-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 mb-12"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isLiked
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600/30'
              }`}
            >
              <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              {isLiked ? 'Liked' : 'Like'}
            </button>

            <button
              onClick={handleBookmark}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isBookmarked
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600/30'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              {isBookmarked ? 'Bookmarked' : 'Bookmark'}
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 rounded-lg transition-all duration-300 border border-slate-600/30"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>

            {showShareMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute bottom-full right-0 mb-2 p-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl"
              >
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:bg-slate-700 rounded transition-colors duration-200"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:bg-slate-700 rounded transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:bg-slate-700 rounded transition-colors duration-200"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:bg-slate-700 rounded transition-colors duration-200"
                  >
                    {copied ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5"
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center">
                    <div className="text-4xl text-slate-600">
                      {relatedPost.category.includes('Quantum') && '⚛️'}
                      {relatedPost.category.includes('Security') && '🔒'}
                      {relatedPost.category.includes('AI') && '🤖'}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-300 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-md rounded-2xl p-8 border border-slate-600/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Tech Insights
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get weekly insights on AI, quantum computing, cybersecurity, and emerging technologies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default BlogPost;
