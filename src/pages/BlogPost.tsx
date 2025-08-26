
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  BookOpen,
  ArrowLeft,
  Heart,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Eye,
  TrendingUp
} from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  
  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: id || '1',
    title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
    excerpt: 'Explore the latest developments in artificial intelligence and how they\'re reshaping enterprise technology landscapes.',
    content: `
      <p class="mb-6 text-lg text-gray-300 leading-relaxed">
        Artificial intelligence continues to evolve at an unprecedented pace, transforming how businesses operate and compete in the digital age. As we move through 2024, several key trends are emerging that will shape the enterprise AI landscape for years to come.
      </p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">1. Autonomous Business Operations</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        One of the most significant trends in enterprise AI is the move toward autonomous business operations. Companies are increasingly implementing AI systems that can make decisions and take actions without human intervention, particularly in areas like:
      </p>
      <ul class="mb-6 text-gray-300 leading-relaxed list-disc list-inside space-y-2 ml-4">
        <li>Supply chain optimization and inventory management</li>
        <li>Customer service and support automation</li>
        <li>Financial forecasting and risk assessment</li>
        <li>IT infrastructure monitoring and maintenance</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">2. AI-Powered Decision Intelligence</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        Decision intelligence platforms are becoming essential tools for enterprise leaders. These systems combine data analytics, machine learning, and business process automation to provide actionable insights and recommendations. The key benefits include:
      </p>
      <ul class="mb-6 text-gray-300 leading-relaxed list-disc list-inside space-y-2 ml-4">
        <li>Faster, more accurate decision-making</li>
        <li>Reduced cognitive bias in strategic planning</li>
        <li>Improved risk assessment and mitigation</li>
        <li>Enhanced competitive intelligence</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">3. Responsible AI and Ethics</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        As AI systems become more sophisticated and integrated into critical business processes, organizations are placing greater emphasis on responsible AI practices. This includes:
      </p>
      <ul class="mb-6 text-gray-300 leading-relaxed list-disc list-inside space-y-2 ml-4">
        <li>Transparency in AI decision-making processes</li>
        <li>Fairness and bias detection in algorithms</li>
        <li>Privacy protection and data governance</li>
        <li>Accountability frameworks for AI systems</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">4. Edge AI and Distributed Computing</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        The deployment of AI models at the edge is gaining momentum as organizations seek to reduce latency and improve real-time decision-making capabilities. Edge AI enables:
      </p>
      <ul class="mb-6 text-gray-300 leading-relaxed list-disc list-inside space-y-2 ml-4">
        <li>Faster response times for critical applications</li>
        <li>Reduced bandwidth requirements and costs</li>
        <li>Enhanced privacy and security for sensitive data</li>
        <li>Improved reliability in remote or disconnected environments</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">5. AI Talent and Skills Development</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        The demand for AI talent continues to outstrip supply, leading organizations to invest heavily in upskilling their existing workforce. Successful AI adoption requires:
      </p>
      <ul class="mb-6 text-gray-300 leading-relaxed list-disc list-inside space-y-2 ml-4">
        <li>Technical skills in machine learning and data science</li>
        <li>Business acumen to identify AI opportunities</li>
        <li>Change management capabilities</li>
        <li>Ethical AI understanding and implementation</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Looking Ahead</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        As we look toward 2025 and beyond, the pace of AI innovation shows no signs of slowing. Organizations that successfully navigate these trends will be well-positioned to gain competitive advantages and drive digital transformation across their industries.
      </p>

      <p class="mb-6 text-gray-300 leading-relaxed">
        The key to success lies not just in adopting the latest AI technologies, but in building a comprehensive strategy that aligns AI initiatives with business objectives, ensures responsible implementation, and develops the necessary human capabilities to work effectively with AI systems.
      </p>
    `,
    author: 'Dr. Sarah Chen',
    authorRole: 'CTO',
    authorBio: 'Dr. Sarah Chen is the Chief Technology Officer at Zion Tech Group, leading our technical innovation and AI research initiatives. With over 15 years of experience in artificial intelligence and enterprise technology, she has been instrumental in developing cutting-edge AI solutions for Fortune 500 companies.',
    authorAvatar: '/images/team/sarah-chen.jpg',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Enterprise', 'Technology Trends', 'Machine Learning', 'Digital Transformation'],
    featured: true,
    image: '/images/blog/ai-enterprise-2024.jpg',
    views: 15420,
    likes: 892,
    comments: 45
  };

  const relatedPosts = [
    {
      id: '2',
      title: 'Building Scalable AI Infrastructure: Best Practices for Startups',
      excerpt: 'Learn the essential strategies for building robust and scalable AI infrastructure that grows with your business.',
      author: 'Michael Rodriguez',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      category: 'Technology'
    },
    {
      id: '3',
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'Separate fact from fiction in the quantum computing landscape and understand what\'s really possible today.',
      author: 'Dr. Kleber Santos',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'Technology'
    },
    {
      id: '4',
      title: 'The ROI of AI Implementation: Measuring Success in Digital Transformation',
      excerpt: 'Discover how to measure and demonstrate the return on investment for AI initiatives in your organization.',
      author: 'Emily Watson',
      publishDate: '2024-01-08',
      readTime: '6 min read',
      category: 'Business Insights'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blogPost.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Back Navigation */}
      <section className="py-6 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category and Featured Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                {blogPost.category}
              </span>
              {blogPost.featured && (
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full border border-yellow-500/30">
                  Featured Article
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(blogPost.publishDate)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {blogPost.views.toLocaleString()} views
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                {blogPost.likes} likes
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                {blogPost.comments} comments
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {blogPost.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{blogPost.author}</h3>
                <p className="text-cyan-400 text-sm mb-1">{blogPost.authorRole}</p>
                <p className="text-gray-300 text-sm">{blogPost.authorBio}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Share Section */}
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">Share Article</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full flex items-center gap-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      Share on Twitter
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="w-full flex items-center gap-3 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      Share on LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-full flex items-center gap-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      Share on Facebook
                    </button>
                    <button
                      onClick={() => handleShare('email')}
                      className="w-full flex items-center gap-3 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Share via Email
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Article Stats */}
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">Article Stats</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Views</span>
                      <span className="text-white font-medium">{blogPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Likes</span>
                      <span className="text-white font-medium">{blogPost.likes}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Comments</span>
                      <span className="text-white font-medium">{blogPost.comments}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Read Time</span>
                      <span className="text-white font-medium">{blogPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Related Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Continue exploring insights and trends in technology and AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-500 text-xs">Article</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-400">{post.author}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowLeft className="w-3 h-3 rotate-180" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, technology, and digital transformation delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
