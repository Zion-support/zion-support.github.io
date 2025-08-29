
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Eye,
  TrendingUp,
  Brain,
  Cloud,
  Shield,
  Zap,
  Cpu,
  Network,
  BookOpen
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // For demo purposes, we'll use the mock data
  const post = MOCK_BLOG_POST;

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = post.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </motion.button>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>

          {/* Article Meta */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
              <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.publishedDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>

            <p className="text-xl text-zion-slate-light mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold text-white">{post.author.name}</div>
                <div className="text-sm text-zion-slate-light">{post.author.bio}</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-zion-blue-dark/50 text-zion-slate-light rounded-full text-sm border border-zion-cyan/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Actions */}
          <div className="flex items-center justify-between py-6 border-t border-zion-cyan/20">
            <div className="flex items-center gap-4">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isLiked 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-dark/70'
                }`}
              >
                <span>❤️</span>
                <span>{likeCount}</span>
              </button>

              <button
                onClick={handleBookmark}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isBookmarked 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-dark/70'
                }`}
              >
                <span>{isBookmarked ? '🔖' : '📖'}</span>
                <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zion-slate-light text-sm">Share:</span>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.article>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELATED_POSTS.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-zion-blue-dark/30 rounded-xl overflow-hidden border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <img
                  src={relatedPost.featuredImage}
                  alt={relatedPost.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-zion-cyan mb-2 block">{relatedPost.category}</span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    <Link to={`/blog/${relatedPost.slug}`} className="hover:text-zion-cyan transition-colors">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
