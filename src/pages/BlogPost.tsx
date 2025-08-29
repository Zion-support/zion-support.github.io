
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Heart, 
  MessageCircle, 
  Eye, 
  Tag, 
  BookOpen,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  CheckCircle
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function BlogPost() {
  const { slug } = useParams();
  const [liked, setLiked] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  // Mock blog post data - in a real app, this would come from an API
  const post = {
    id: slug || '1',
    title: "The Future of AI-Powered Business Intelligence in 2025",
    excerpt: "Discover how artificial intelligence is revolutionizing business intelligence and decision-making processes across industries.",
    content: `
      <p>The landscape of business intelligence is undergoing a revolutionary transformation, driven by the rapid advancement of artificial intelligence technologies. As we move into 2025, organizations are increasingly leveraging AI-powered BI solutions to gain unprecedented insights into their operations, customers, and market dynamics.</p>
      
      <h2>The Evolution of Business Intelligence</h2>
      <p>Traditional business intelligence systems relied heavily on historical data analysis and manual reporting processes. These systems, while valuable, often provided insights that were already outdated by the time they reached decision-makers. The integration of AI has fundamentally changed this paradigm.</p>
      
      <p>Modern AI-powered BI platforms can now:</p>
      <ul>
        <li>Process real-time data streams from multiple sources</li>
        <li>Identify patterns and anomalies that humans might miss</li>
        <li>Generate predictive insights and forecasts</li>
        <li>Automate routine reporting and analysis tasks</li>
        <li>Provide natural language querying capabilities</li>
      </ul>
      
      <h2>Key Trends Shaping AI-BI in 2025</h2>
      
      <h3>1. Natural Language Processing (NLP)</h3>
      <p>One of the most significant developments is the integration of natural language processing into BI platforms. Users can now ask questions in plain English and receive comprehensive answers backed by data analysis. This democratizes data access across organizations, allowing non-technical users to gain insights without learning complex query languages.</p>
      
      <h3>2. Predictive Analytics and Machine Learning</h3>
      <p>AI-powered BI systems are moving beyond descriptive analytics to predictive and prescriptive analytics. Machine learning algorithms can now forecast future trends, identify potential risks, and recommend optimal courses of action based on historical data patterns.</p>
      
      <h3>3. Real-time Data Processing</h3>
      <p>The ability to process and analyze data in real-time is becoming increasingly crucial. AI algorithms can now monitor data streams continuously, providing instant alerts and insights as events unfold. This real-time capability is particularly valuable in industries like finance, healthcare, and manufacturing.</p>
      
      <h2>Implementation Challenges and Solutions</h2>
      
      <p>While the benefits of AI-powered BI are clear, organizations face several challenges in implementation:</p>
      
      <h3>Data Quality and Governance</h3>
      <p>AI systems are only as good as the data they process. Organizations must establish robust data governance frameworks to ensure data quality, consistency, and security. This includes implementing data validation rules, establishing data lineage tracking, and maintaining comprehensive audit trails.</p>
      
      <h3>Change Management</h3>
      <p>The introduction of AI-powered BI often requires significant changes in organizational culture and processes. Employees need training to understand how to work with AI systems effectively, and organizations must establish clear guidelines for AI-assisted decision-making.</p>
      
      <h3>Ethical Considerations</h3>
      <p>As AI systems make increasingly important decisions, organizations must address ethical concerns around bias, transparency, and accountability. This includes implementing explainable AI techniques and establishing oversight mechanisms.</p>
      
      <h2>Future Outlook</h2>
      
      <p>Looking ahead, we can expect several developments that will further enhance AI-powered BI capabilities:</p>
      
      <ul>
        <li><strong>Augmented Analytics:</strong> AI systems will increasingly work alongside human analysts, augmenting their capabilities rather than replacing them entirely.</li>
        <li><strong>Edge Computing Integration:</strong> BI processing will move closer to data sources, enabling faster analysis and reduced latency.</li>
        <li><strong>Advanced Visualization:</strong> AI will generate more sophisticated and interactive visualizations that adapt to user preferences and context.</li>
        <li><strong>Cross-Platform Integration:</strong> Seamless integration across different data sources and platforms will become standard.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The future of AI-powered business intelligence is bright, with organizations increasingly recognizing the value of these advanced analytics capabilities. Success in this area requires careful planning, robust implementation strategies, and ongoing commitment to data quality and governance.</p>
      
      <p>As we move through 2025 and beyond, organizations that successfully implement AI-powered BI solutions will gain significant competitive advantages through improved decision-making, operational efficiency, and customer insights.</p>
    `,
    author: "Dr. Sarah Chen",
    authorTitle: "Chief AI Officer",
    authorBio: "Dr. Chen is a leading expert in artificial intelligence and business intelligence, with over 15 years of experience in developing AI solutions for enterprise organizations.",
    authorImage: "/images/authors/sarah-chen.jpg",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "AI & Analytics",
    tags: ["AI", "Business Intelligence", "Machine Learning", "Data Analytics", "Digital Transformation"],
    image: "/images/blog/ai-business-intelligence.jpg",
    views: 1247,
    likes: 89,
    comments: 23,
    relatedPosts: [
      {
        id: 2,
        title: "Machine Learning in Healthcare: Revolutionizing Patient Care",
        excerpt: "How AI and ML are transforming healthcare delivery and improving patient outcomes.",
        category: "AI & Analytics",
        date: "2025-01-10",
        readTime: "7 min read"
      },
      {
        id: 3,
        title: "The Rise of Edge Computing in Modern Enterprises",
        excerpt: "Understanding edge computing and its impact on modern technology infrastructure.",
        category: "Infrastructure",
        date: "2025-01-08",
        readTime: "6 min read"
      },
      {
        id: 4,
        title: "Cybersecurity in the Age of AI: New Threats and Solutions",
        excerpt: "Understanding the evolving cybersecurity landscape and AI-powered defense mechanisms.",
        category: "Cybersecurity",
        date: "2025-01-05",
        readTime: "10 min read"
      }
    ]
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title={`${post.title} - Zion Tech Group Blog`}
        description={post.excerpt}
      />
      
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/blog"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Category and Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views} views
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{post.author}</h3>
              <p className="text-slate-400">{post.authorTitle}</p>
              <p className="text-sm text-slate-500">{post.authorBio}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                liked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              {liked ? 'Liked' : 'Like'}
            </button>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleShare('twitter')}
                className="p-3 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                title="Share on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="p-3 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                title="Share on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-3 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="p-3 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors relative"
                title="Copy link"
              >
                {copied ? <CheckCircle className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Featured Image */}
            <div className="mb-8">
              <div className="h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-slate-500" />
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="text-slate-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </div>

      {/* Tags */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <Tag className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-medium">Tags:</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <article className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="w-8 h-8 text-slate-500" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded-full">
                        {relatedPost.category}
                      </span>
                      <span className="text-slate-400 text-xs">{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-3 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <span className="text-slate-400 text-xs">
                      {new Date(relatedPost.date).toLocaleDateString()}
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can help you achieve your business intelligence goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/services/ai-business-intelligence"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
