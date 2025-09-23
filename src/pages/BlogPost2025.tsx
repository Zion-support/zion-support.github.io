import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  ThumbsUp, 
  MessageCircle,
  ArrowRight,
  Tag,
  TrendingUp,
  Brain,
  Zap,
  Shield
} from 'lucide-react';

const BlogPost2025: React.FC = () => {
  const relatedPosts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Discover how artificial intelligence is transforming modern business operations.',
      date: '2025-01-15',
      readTime: '5 min read'
    },
    {
      title: 'Blockchain Revolution in Finance',
      excerpt: 'Exploring the impact of blockchain technology on financial services.',
      date: '2025-01-12',
      readTime: '7 min read'
    },
    {
      title: 'Quantum Computing Breakthroughs',
      excerpt: 'Latest developments in quantum computing and their real-world applications.',
      date: '2025-01-10',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <a href="/" className="hover:text-blue-600">Home</a>
              <span>/</span>
              <a href="/blog" className="hover:text-blue-600">Blog</a>
              <span>/</span>
              <span className="text-gray-900">Technology Trends 2025</span>
            </div>
          </nav>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Featured Image */}
            <div className="h-64 md:h-96 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 flex items-center justify-center">
              <div className="text-center text-white">
                <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                <h1 className="text-3xl md:text-5xl font-bold">Technology Trends 2025</h1>
              </div>
            </div>

            <div className="p-8">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>By Zion Tech Editorial Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 20, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Technology', 'Innovation', 'AI', 'Blockchain', 'Future'].map((tag) => (
                  <span key={tag} className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  As we dive deeper into 2025, the technology landscape continues to evolve at an unprecedented pace. 
                  From artificial intelligence breakthroughs to quantum computing milestones, here are the most 
                  significant trends shaping our digital future.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">1. Artificial Intelligence Revolution</h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  AI has moved beyond simple automation to become the backbone of intelligent decision-making systems. 
                  We're witnessing the emergence of autonomous AI agents that can handle complex business processes 
                  without human intervention.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-600" />
                    Key AI Developments:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Autonomous AI agents for business process automation</li>
                    <li>• Advanced natural language processing capabilities</li>
                    <li>• Real-time predictive analytics and forecasting</li>
                    <li>• Computer vision applications in healthcare and manufacturing</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">2. Blockchain & Web3 Evolution</h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Blockchain technology has matured significantly, moving beyond cryptocurrency to enable 
                  decentralized applications that are transforming industries from finance to supply chain management.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-600" />
                    Blockchain Innovations:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Smart contracts with enhanced security and automation</li>
                    <li>• DeFi (Decentralized Finance) platforms gaining mainstream adoption</li>
                    <li>• NFT marketplaces with advanced utility features</li>
                    <li>• Cross-chain interoperability solutions</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">3. Quantum Computing Breakthroughs</h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Quantum computing is transitioning from experimental to practical applications, with 
                  companies beginning to implement quantum solutions for complex optimization problems 
                  and cryptographic security.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-green-600" />
                    Quantum Computing Applications:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Quantum machine learning algorithms for faster AI training</li>
                    <li>• Post-quantum cryptography for enhanced security</li>
                    <li>• Quantum optimization for supply chain and logistics</li>
                    <li>• Quantum simulation for drug discovery and materials science</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">4. Internet of Things (IoT) & Edge Computing</h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The convergence of IoT and edge computing is enabling real-time data processing at 
                  the network edge, reducing latency and improving responsiveness for critical applications.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">5. Sustainable Technology Solutions</h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Green technology is becoming a priority as companies seek to reduce their carbon footprint 
                  while maintaining operational efficiency. From energy-efficient data centers to 
                  carbon-neutral cloud services, sustainability is driving innovation.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Pro Tip</h3>
                  <p className="text-gray-700">
                    Companies that embrace these technologies early will have a significant competitive advantage. 
                    Consider partnering with experienced technology providers like Zion Tech Group to implement 
                    these innovations effectively.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Looking Ahead</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The pace of technological change shows no signs of slowing down. Organizations that invest 
                  in these emerging technologies today will be best positioned to thrive in the digital economy 
                  of tomorrow. The key is to start with a clear strategy and work with trusted partners who 
                  understand both the technology and the business implications.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Embrace the Future?</h3>
                  <p className="text-lg mb-6">
                    Let Zion Tech Group help you implement these cutting-edge technologies in your organization.
                  </p>
                  <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Schedule a Consultation
                  </button>
                </div>
              </div>

              {/* Article Actions */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200 mt-8">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                    <span>Like (127)</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>Comment (23)</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Related Posts */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="mt-4 flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2025;