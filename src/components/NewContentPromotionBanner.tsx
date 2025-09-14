import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Target, FileText, Star, Clock, Users, TrendingUp } from 'lucide-react';

interface NewContentItem {
  id: string;
  type: 'blog' | 'case-study' | 'resource';
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
  icon: React.ComponentType<any>;
  gradient: string;
  featured: boolean;
  isNew?: boolean;
}

const newContentItems: NewContentItem[] = [
  {
    id: 'neural-architecture-revolution',
    type: 'blog',
    title: 'AI 2026: The Neural Architecture Revolution Reshaping Enterprise Computing',
    description: 'Discover the revolutionary neural architectures that are making advanced AI 300-500% faster and accessible to enterprises.',
    ctaText: 'Read Revolution',
    ctaLink: '/blog/ai-2026-neural-architecture-revolution',
    badge: 'Revolutionary',
    icon: Brain,
    gradient: 'from-purple-500 to-indigo-600',
    featured: true,
    isNew: true
  },
  {
    id: 'fortune-500-transformation',
    type: 'case-study',
    title: 'Fortune 500 Manufacturing: $2.4B Neural Architecture Transformation',
    description: 'See how a global manufacturing giant achieved 380% ROI and $2.4B in business value with neural architecture implementation.',
    ctaText: 'View Case Study',
    ctaLink: '/case-studies/fortune-500-neural-architecture-transformation-2026',
    badge: 'Success Story',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-600',
    featured: true,
    isNew: true
  },
  {
    id: 'neural-architecture-guide',
    type: 'resource',
    title: 'Complete Neural Architecture Implementation Guide 2026',
    description: 'Your comprehensive blueprint for implementing revolutionary neural architectures with proven methodologies and best practices.',
    ctaText: 'Download Guide',
    ctaLink: '/resources/ai-2026-neural-architecture-implementation-guide',
    badge: 'Expert Guide',
    icon: BookOpen,
    gradient: 'from-blue-500 to-cyan-600',
    featured: true,
    isNew: true
  },
  {
    id: 'quantum-ai-breakthrough',
    type: 'blog',
    title: 'Quantum-AI Fusion: The Breakthrough Revolutionizing Everything in 2025',
    description: 'Discover how quantum-AI fusion is creating unprecedented processing power and solving problems 1 billion times faster.',
    ctaText: 'Read Breakthrough',
    ctaLink: '/blog/quantum-ai-breakthrough-2025',
    badge: 'Revolutionary',
    icon: Zap,
    gradient: 'from-purple-500 to-indigo-600',
    featured: true,
    isNew: false
  },
  {
    id: 'healthcare-ai-success',
    type: 'case-study',
    title: 'Healthcare AI Transformation: MedTech Solutions Achieves 400% ROI',
    description: 'See how a regional healthcare network saved $13.2M annually and improved patient care quality dramatically.',
    ctaText: 'View Success Story',
    ctaLink: '/case-studies/healthcare-ai-transformation-success',
    badge: 'Success Story',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-600',
    featured: true,
    isNew: false
  },
  {
    id: 'ai-implementation-checklist',
    type: 'resource',
    title: 'AI Implementation Checklist 2025',
    description: 'Your complete roadmap to successful AI deployment with proven methodologies and best practices.',
    ctaText: 'Download Checklist',
    ctaLink: '/resources/ai-implementation-checklist-2025',
    badge: 'Free Resource',
    icon: CheckCircle,
    gradient: 'from-orange-500 to-red-600',
    featured: true,
    isNew: false
  }
];

export function NewContentPromotionBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('new-content-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '500%', label: 'Average ROI' },
    { icon: Users, value: '150+', label: 'Companies Transformed' },
    { icon: Clock, value: '90 Days', label: 'To First Results' },
    { icon: Star, value: '98%', label: 'Success Rate' }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">New Content Available</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              That Changes Everything
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the latest breakthroughs in AI implementation, real-world success stories, 
            and proven strategies that are transforming businesses in 2025.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30 mb-4">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {newContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={content.link}>
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${content.gradient}`}>
                      <content.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                          {content.category}
                        </span>
                        {content.featured && (
                          <span className="text-xs font-medium text-yellow-400 bg-yellow-500/20 px-2 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-400 flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {content.readTime}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {content.excerpt}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already achieved remarkable results 
              with our AI implementation strategies and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Free AI Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-700 text-white font-medium rounded-xl border border-slate-600 hover:border-cyan-500/50 transition-all duration-300"
              >
                View Success Stories
                <Target className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContentPromotionBanner;