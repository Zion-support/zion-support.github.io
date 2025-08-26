
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  User,
  Tag
} from 'lucide-react';

// Mock blog post data
const MOCK_BLOG_POST = {
  id: 1,
  title: "The Future of AI in Enterprise: 2025 and Beyond",
  excerpt: "Discover how artificial intelligence is transforming business operations and what to expect in the coming years.",
  content: `
    <p>Artificial Intelligence has evolved from a futuristic concept to a practical business tool that's reshaping industries across the globe. As we move into 2025, the enterprise AI landscape is experiencing unprecedented growth and transformation.</p>
    
    <h2>The Current State of Enterprise AI</h2>
    <p>Today, more than 80% of enterprises are actively implementing AI solutions, with the market expected to reach $500 billion by 2025. The adoption has accelerated due to several key factors:</p>
    <ul>
      <li>Improved AI model performance and accuracy</li>
      <li>Reduced implementation costs and complexity</li>
      <li>Increased availability of AI talent and expertise</li>
      <li>Growing pressure to remain competitive in digital markets</li>
    </ul>
    
    <h2>Key Trends Shaping Enterprise AI</h2>
    <p>Several emerging trends are defining the future of enterprise AI:</p>
    
    <h3>1. Autonomous Business Operations</h3>
    <p>AI systems are becoming increasingly autonomous, capable of making complex business decisions without human intervention. This includes automated customer service, intelligent process optimization, and predictive maintenance systems.</p>
    
    <h3>2. AI-Powered Decision Intelligence</h3>
    <p>Organizations are leveraging AI to enhance decision-making processes by analyzing vast amounts of data in real-time and providing actionable insights to business leaders.</p>
    
    <h3>3. Ethical AI and Responsible Innovation</h3>
    <p>As AI becomes more pervasive, companies are prioritizing ethical considerations, transparency, and responsible AI development to build trust with customers and stakeholders.</p>
    
    <h2>Implementation Strategies for 2025</h2>
    <p>To successfully implement AI in enterprise environments, organizations should consider the following strategies:</p>
    
    <h3>Start with Clear Use Cases</h3>
    <p>Begin with well-defined, high-impact use cases that can demonstrate clear ROI. Common starting points include customer service automation, predictive analytics, and process optimization.</p>
    
    <h3>Invest in Data Infrastructure</h3>
    <p>AI systems require high-quality, well-organized data. Organizations must invest in robust data infrastructure, including data lakes, data governance, and data quality management.</p>
    
    <h3>Focus on Change Management</h3>
    <p>Successful AI implementation requires significant organizational change. Companies must invest in training, communication, and change management to ensure smooth adoption.</p>
    
    <h2>The Road Ahead</h2>
    <p>As we look toward 2025 and beyond, enterprise AI will continue to evolve rapidly. Organizations that embrace these technologies and invest in the right strategies will be well-positioned to thrive in the AI-powered future.</p>
    
    <p>The key to success lies not just in implementing AI technology, but in creating a culture of innovation and continuous learning that can adapt to the ever-changing AI landscape.</p>
  `,
  author: {
    name: "Dr. Sarah Chen",
    avatar: "/images/avatar-1.jpg",
    bio: "AI Research Director at Zion Tech Group with 15+ years of experience in machine learning and enterprise AI solutions."
  },
  publishedDate: "2025-01-15",
  readTime: "8 min read",
  category: "AI & Technology",
  tags: ["AI", "Enterprise", "Innovation", "Future Tech", "Digital Transformation"],
  featuredImage: "/images/blog-ai-enterprise.jpg",
  slug: "future-ai-enterprise-2025"
};

const RELATED_POSTS = [
  {
    id: 2,
    title: "Cybersecurity Trends: Protecting Your Digital Assets",
    excerpt: "Learn about the latest cybersecurity threats and how to safeguard your organization's digital infrastructure.",
    featuredImage: "/images/blog-cybersecurity.jpg",
    slug: "cybersecurity-trends-2025",
    category: "Cybersecurity"
  },
  {
    id: 3,
    title: "Green IT: Sustainable Technology Solutions",
    excerpt: "Explore how organizations are implementing eco-friendly technology solutions to reduce their carbon footprint.",
    featuredImage: "/images/blog-green-it.jpg",
    slug: "green-it-sustainable-solutions",
    category: "Sustainability"
  },
  {
    id: 4,
    title: "Quantum Computing: Breaking New Grounds",
    excerpt: "Understanding the revolutionary potential of quantum computing and its applications in various industries.",
    featuredImage: "/images/blog-quantum.jpg",
    slug: "quantum-computing-breakthroughs",
    category: "Quantum Technology"
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  // In a real app, you would fetch the post data based on the slug
  const post = MOCK_BLOG_POST;
  const relatedPosts = RELATED_POSTS;

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

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-zion-cyan text-lg">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Back to blog button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/blog"
            className="inline-flex items-center text-zion-cyan hover:text-white transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Category and Date */}
            <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
              <span className="text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
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

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://via.placeholder.com/48x48/374151/9ca3af?text=U";
                }}
              />
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-zion-slate-light text-sm">{post.author.bio}</p>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://via.placeholder.com/800x450/1f2937/6b7280?text=Blog+Image";
                }}
              />
            </div>

            {/* Share and Actions */}
            <div className="flex items-center justify-between py-4 border-b border-zinc-700">
              <div className="flex items-center gap-4">
                <span className="text-zion-slate-light">Share this article:</span>
                <div className="flex gap-2">
                  <a
                    href={getShareUrl('twitter')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={getShareUrl('facebook')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={getShareUrl('linkedin')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-zinc-800/50 text-zion-cyan border border-zion-cyan/20 rounded-full text-sm hover:border-zion-cyan/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={relatedPost.featuredImage}
                    alt={relatedPost.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = "https://via.placeholder.com/400x300/1f2937/6b7280?text=Blog+Image";
                    }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full mb-3 inline-block">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${relatedPost.slug}`}
                    className="text-zion-cyan hover:text-white transition-colors font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, technology, and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan/40 focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
