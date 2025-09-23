import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';

const AITrends2025Blog: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [likes, setLikes] = useState(247);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };

  const sections = [
    {
      id: 'introduction',
      title: 'The AI Revolution in 2025',
      content: 'Artificial Intelligence has reached a pivotal moment in 2025, with breakthroughs that are reshaping entire industries and creating unprecedented opportunities for businesses worldwide.'
    },
    {
      id: 'trends',
      title: 'Key Trends Shaping the Future',
      content: 'From autonomous agents to quantum-enhanced AI, the landscape of artificial intelligence is evolving at breakneck speed.'
    },
    {
      id: 'applications',
      title: 'Real-World Applications',
      content: 'Discover how leading companies are leveraging AI to drive innovation and achieve remarkable results.'
    },
    {
      id: 'future',
      title: 'Looking Ahead',
      content: 'The future of AI promises even more exciting developments that will transform how we work and live.'
    }
  ];

  const aiTrends = [
    {
      icon: Brain,
      title: 'Autonomous AI Agents',
      description: 'Self-learning systems that can handle complex business processes without human intervention',
      impact: 'High',
      timeline: 'Q2 2025',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Edge AI Computing',
      description: 'AI processing at the edge for real-time decision making and reduced latency',
      impact: 'Medium',
      timeline: 'Q1 2025',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced threat detection and prevention using machine learning algorithms',
      impact: 'High',
      timeline: 'Q3 2025',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Global AI Networks',
      description: 'Interconnected AI systems that share knowledge and capabilities across organizations',
      impact: 'Medium',
      timeline: 'Q4 2025',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Quantum-Enhanced AI',
      description: 'AI systems leveraging quantum computing for exponentially faster processing',
      impact: 'Very High',
      timeline: 'Q4 2025',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Cloud,
      title: 'AI-as-a-Service',
      description: 'Scalable AI solutions delivered through cloud platforms for any business size',
      impact: 'High',
      timeline: 'Q2 2025',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Global',
      industry: 'Manufacturing',
      challenge: 'Optimize production line efficiency',
      solution: 'Implemented AI-powered predictive maintenance',
      results: ['40% reduction in downtime', '25% increase in productivity', '$2M annual savings'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'FinanceFlow Inc',
      industry: 'Financial Services',
      challenge: 'Detect fraudulent transactions',
      solution: 'Deployed machine learning fraud detection system',
      results: ['95% accuracy in fraud detection', '60% reduction in false positives', '99.9% system uptime'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      challenge: 'Improve patient diagnosis accuracy',
      solution: 'AI-powered medical imaging analysis',
      results: ['30% faster diagnosis', '20% improvement in accuracy', 'Reduced patient wait times'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold text-blue-600">Zion Tech Group</a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">AI Trends 2025</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 size={20} />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Bookmark size={20} />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-4">
              🚀 Latest Research
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The Future of AI: Revolutionary Trends Shaping 2025
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Explore the groundbreaking developments in artificial intelligence that are transforming industries and creating unprecedented opportunities for innovation.
            </p>
            <div className="flex items-center justify-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <User size={20} />
                <span>By Zion Tech Research Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span>January 24, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={20} />
                <span>8 min read</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg mb-8 sticky top-4 z-10"
          >
            <h3 className="text-lg font-semibold mb-4">Article Sections</h3>
            <div className="flex flex-wrap gap-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {sections[activeSection].title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {sections[activeSection].content}
                    </p>
                    
                    {activeSection === 0 && (
                      <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                          The year 2025 marks a watershed moment in the evolution of artificial intelligence. 
                          We're witnessing the convergence of multiple breakthrough technologies that are 
                          creating unprecedented opportunities for businesses to innovate and compete.
                        </p>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                          <h3 className="text-xl font-semibold mb-3">Key Statistics</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-blue-600">73%</div>
                              <div className="text-sm text-gray-600">of businesses plan to increase AI investment</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-purple-600">$2.1T</div>
                              <div className="text-sm text-gray-600">expected AI market value by 2025</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === 1 && (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {aiTrends.map((trend, index) => (
                            <motion.div
                              key={trend.title}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="bg-gradient-to-br p-6 rounded-xl text-white"
                              style={{ background: `linear-gradient(135deg, ${trend.color.split(' ')[1]}, ${trend.color.split(' ')[3]})` }}
                            >
                              <trend.icon size={32} className="mb-4" />
                              <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
                              <p className="text-sm opacity-90 mb-4">{trend.description}</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs bg-white/20 px-2 py-1 rounded">
                                  {trend.timeline}
                                </span>
                                <span className="text-xs bg-white/20 px-2 py-1 rounded">
                                  {trend.impact} Impact
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection === 2 && (
                      <div className="space-y-6">
                        {caseStudies.map((study, index) => (
                          <motion.div
                            key={study.company}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                                {study.company[0]}
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">{study.company}</h3>
                                <p className="text-gray-600 mb-3">{study.industry}</p>
                                <div className="mb-4">
                                  <h4 className="font-semibold text-gray-900">Challenge:</h4>
                                  <p className="text-gray-700">{study.challenge}</p>
                                </div>
                                <div className="mb-4">
                                  <h4 className="font-semibold text-gray-900">Solution:</h4>
                                  <p className="text-gray-700">{study.solution}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900">Results:</h4>
                                  <ul className="list-disc list-inside text-gray-700">
                                    {study.results.map((result, idx) => (
                                      <li key={idx}>{result}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeSection === 3 && (
                      <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                          As we look toward the future, the pace of AI innovation shows no signs of slowing. 
                          The convergence of quantum computing, edge AI, and autonomous systems promises 
                          to unlock capabilities we've only begun to imagine.
                        </p>
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                          <h3 className="text-xl font-semibold mb-4">What's Next?</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <h4 className="font-semibold">2025-2026</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• General AI assistants become mainstream</li>
                                <li>• Quantum-AI hybrid systems emerge</li>
                                <li>• Autonomous business processes scale</li>
                              </ul>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-semibold">2027+</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• AGI (Artificial General Intelligence) approaches</li>
                                <li>• Brain-computer interfaces integrate with AI</li>
                                <li>• Fully autonomous organizations emerge</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.article>

              {/* Engagement Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button 
                      onClick={handleLike}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                        isLiked 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <ThumbsUp size={20} className={isLiked ? 'fill-current' : ''} />
                      <span>{likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all">
                      <MessageCircle size={20} />
                      <span>24 Comments</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                      <Share2 size={20} />
                      <span>Share Article</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-all">
                      <Bookmark size={20} />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Related Articles */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Quantum Computing Breakthroughs 2025',
                        excerpt: 'Latest developments in quantum technology',
                        readTime: '5 min read'
                      },
                      {
                        title: 'Cybersecurity Trends for Enterprises',
                        excerpt: 'Protecting your business in the digital age',
                        readTime: '6 min read'
                      },
                      {
                        title: 'Future of Cloud Computing',
                        excerpt: 'Next-generation cloud infrastructure',
                        readTime: '4 min read'
                      }
                    ].map((article, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">{article.excerpt}</p>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Get the latest AI insights and technology trends delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                    />
                    <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                      Subscribe Now
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>
                  <p className="text-gray-600 mb-6">
                    Let our AI experts help you implement cutting-edge solutions.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Get Started Today
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrends2025Blog;