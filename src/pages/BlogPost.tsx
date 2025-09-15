import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Heart, 
  MessageCircle,
  Tag,
  BookOpen,
  TrendingUp,
  Brain,
  Zap,
  Target,
  Users,
  BarChart3
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  likes: number;
  comments: number;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Mock blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 'ai-revolution-2025',
      title: 'The AI Revolution: Transforming Business Operations in 2025',
      excerpt: 'Discover how artificial intelligence is reshaping industries and creating new opportunities for growth and innovation.',
      content: `
        <div class="prose prose-invert max-w-none">
          <h2>The Dawn of AI-Powered Business Transformation</h2>
          <p>As we navigate through 2025, artificial intelligence has emerged as the cornerstone of digital transformation, fundamentally altering how businesses operate, compete, and deliver value to their customers. The convergence of advanced machine learning algorithms, massive data processing capabilities, and cloud computing has created unprecedented opportunities for organizations across all sectors.</p>

          <h3>Key Trends Shaping the AI Landscape</h3>
          <p>The current AI revolution is characterized by several transformative trends that are reshaping the business landscape:</p>

          <h4>1. Autonomous Business Operations</h4>
          <p>Companies are increasingly adopting AI systems that can operate independently, making decisions and executing tasks without human intervention. From automated customer service to intelligent supply chain management, autonomous operations are becoming the new standard.</p>

          <h4>2. Predictive Analytics at Scale</h4>
          <p>Advanced predictive models are now capable of forecasting market trends, customer behavior, and operational challenges with remarkable accuracy. This enables businesses to make proactive decisions and stay ahead of the competition.</p>

          <h4>3. Personalization at Scale</h4>
          <p>AI-powered personalization engines are delivering tailored experiences to millions of users simultaneously, creating deeper customer engagement and driving higher conversion rates.</p>

          <h3>Industry Applications and Success Stories</h3>
          <p>Across industries, we're witnessing remarkable transformations:</p>

          <ul>
            <li><strong>Healthcare:</strong> AI diagnostics are achieving accuracy rates exceeding 95%, enabling early disease detection and personalized treatment plans.</li>
            <li><strong>Finance:</strong> Automated trading systems and risk assessment tools are processing billions of transactions in real-time.</li>
            <li><strong>Manufacturing:</strong> Predictive maintenance and quality control systems are reducing downtime by up to 40%.</li>
            <li><strong>Retail:</strong> Dynamic pricing and inventory optimization are maximizing profitability while improving customer satisfaction.</li>
          </ul>

          <h3>The Future of AI in Business</h3>
          <p>Looking ahead, we can expect even more profound changes as AI continues to evolve. The integration of quantum computing, edge AI, and advanced neural networks will unlock new possibilities that we can only begin to imagine today.</p>

          <p>Organizations that embrace AI transformation now will be the ones that thrive in the coming decade. The question isn't whether to adopt AI, but how quickly and effectively you can integrate it into your business operations.</p>
        </div>
      `,
      author: 'Dr. Sarah Chen',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Technology',
      tags: ['Artificial Intelligence', 'Business Transformation', 'Machine Learning', 'Innovation'],
      featured: true,
      image: '/api/placeholder/800/400',
      likes: 1247,
      comments: 89
    },
    {
      id: 'customer-success-ai',
      title: 'Revolutionizing Customer Success with AI: A Complete Guide',
      excerpt: 'Learn how AI-powered customer success platforms are transforming customer retention and satisfaction.',
      content: `
        <div class="prose prose-invert max-w-none">
          <h2>The AI Revolution in Customer Success</h2>
          <p>Customer success has evolved from a reactive support function to a proactive, data-driven discipline that drives business growth. With the integration of artificial intelligence, customer success teams can now predict churn, personalize experiences, and optimize customer journeys at scale.</p>

          <h3>Key AI Technologies Transforming Customer Success</h3>
          <p>Several AI technologies are revolutionizing how we approach customer success:</p>

          <h4>Predictive Analytics</h4>
          <p>AI-powered predictive models analyze customer behavior patterns to identify at-risk accounts before they churn. These systems can predict churn with up to 95% accuracy, enabling proactive intervention strategies.</p>

          <h4>Natural Language Processing</h4>
          <p>NLP technologies analyze customer communications to understand sentiment, identify issues, and provide insights into customer satisfaction levels.</p>

          <h4>Automated Personalization</h4>
          <p>AI systems create personalized customer experiences by analyzing individual preferences, usage patterns, and engagement history.</p>

          <h3>Implementation Strategies</h3>
          <p>Successfully implementing AI in customer success requires a strategic approach:</p>

          <ol>
            <li><strong>Data Foundation:</strong> Establish robust data collection and management systems</li>
            <li><strong>Technology Integration:</strong> Select and integrate appropriate AI tools and platforms</li>
            <li><strong>Team Training:</strong> Upskill customer success teams to work effectively with AI systems</li>
            <li><strong>Continuous Optimization:</strong> Regularly refine AI models based on performance data</li>
          </ol>
        </div>
      `,
      author: 'Michael Rodriguez',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      category: 'Customer Success',
      tags: ['Customer Success', 'AI', 'Retention', 'Analytics'],
      featured: false,
      image: '/api/placeholder/800/400',
      likes: 892,
      comments: 45
    }
  ];

  useEffect(() => {
    const currentPost = blogPosts.find(p => p.id === slug) || blogPosts[0];
    setPost(currentPost);
    setLikeCount(currentPost.likes);
    
    // Get related posts (excluding current post)
    const related = blogPosts.filter(p => p.id !== currentPost.id).slice(0, 3);
    setRelatedPosts(related);
  }, [slug]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-futuristic flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-futuristic">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} - Zion Tech Group Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Navigation */}
        <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <motion.article 
          className="px-4 sm:px-6 lg:px-8 pb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Featured Badge */}
            {post.featured && (
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-zion-cyan to-zion-blue text-white">
                  <Star className="w-4 h-4 mr-2" />
                  Featured Article
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>{post.comments} comments</span>
              </div>
            </div>

            {/* Category and Tags */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Tag className="w-5 h-5 mr-2 text-zion-cyan" />
                <span className="text-zion-cyan font-semibold">{post.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-800/50 text-gray-300 rounded-full text-sm border border-slate-700/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl border border-slate-700/50"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Actions */}
            <div className="flex items-center justify-between py-8 border-t border-slate-700/50">
              <div className="flex items-center space-x-6">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isLiked 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : 'bg-slate-800/50 text-gray-300 border border-slate-700/50 hover:border-zion-cyan/50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{likeCount}</span>
                </button>
                
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 text-gray-300 border border-slate-700/50 rounded-lg hover:border-zion-cyan/50 transition-all duration-200"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <Link
                  to="/services"
                  className="btn-futuristic"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{relatedPost.readTime}</span>
                        <span>{relatedPost.publishDate}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.article>
      </div>
    </>
  );
};

export default BlogPost;