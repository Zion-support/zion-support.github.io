import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Star,
  TrendingUp,
  Award,
  Zap,
  Brain,
  Bot,
  Rocket,
  Shield,
  Globe,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
interface ContentItem {
  id: string;
  title: string;
  description: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  imageUrl: string;
  slug: string;
  type: 'blog' | 'service';
  price?: string;
  rating?: number;
  reviews?: number;
const ComprehensiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'services' | 'blog'>('all');
  const contentItems: ContentItem[] = [
    // Services
    {
      id: "ai-automation-suite-2026",
      title: "AI Business Automation Suite 2026",
      description: "Complete AI-powered business automation solution that streamlines operations, reduces costs, and increases efficiency by 300%.",
      author: "AI Solutions Team",
      authorRole: "Automation Specialists",
      publishDate: "2025-01-17",
      readTime: "Service",
      category: "AI Automation",
      tags: ["AI Automation", "Business Process", "Efficiency", "ROI"],
      featured: true,
      imageUrl: "/images/services/ai-automation-suite-2026.jpg",
      slug: "/services/ai-automation-suite-2026",
      type: 'service',
      price: "$25,000",
      rating: 4.9,
      reviews: 127
    },
    {
      id: "quantum-optimization-platform",
      title: "Quantum Optimization Platform",
      description: "Revolutionary quantum computing platform for solving complex optimization problems with 10x performance improvements.",
      author: "Quantum Computing Team",
      authorRole: "Quantum Specialists",
      publishDate: "2025-01-17",
      readTime: "Service",
      category: "Quantum Computing",
      tags: ["Quantum Computing", "Optimization", "Performance"],
      featured: true,
      imageUrl: "/images/services/quantum-optimization-platform.jpg",
      slug: "/services/quantum-optimization-platform",
      type: 'service',
      price: "$100,000",
      rating: 5.0,
      reviews: 23
    },
    {
      id: "neural-interface-development",
      title: "Neural Interface Development Platform",
      description: "Cutting-edge platform for developing brain-computer interfaces and neural prosthetics with advanced signal processing.",
      author: "Neural Tech Team",
      authorRole: "Neuroscience Experts",
      publishDate: "2025-01-17",
      readTime: "Service",
      category: "Neural Interfaces",
      tags: ["Neural Interfaces", "BCI", "Medical Technology"],
      featured: true,
      imageUrl: "/images/services/neural-interface-development.jpg",
      slug: "/services/neural-interface-development",
      type: 'service',
      price: "$75,000",
      rating: 4.8,
      reviews: 45
    },
    // Blog Posts
    {
      id: "ai-business-automation-guide",
      title: "AI-Powered Business Automation: The Complete 2026 Guide",
      description: "Transform your business operations with cutting-edge AI automation solutions that deliver 300% efficiency gains and cost reductions.",
      author: "Dr. Michael Rodriguez",
      authorRole: "Chief Automation Officer",
      publishDate: "2025-01-17",
      readTime: "12 min read",
      category: "AI Automation",
      tags: ["AI Automation", "Business Process", "RPA", "Efficiency"],
      featured: true,
      imageUrl: "/images/blog/ai-business-automation-2026.jpg",
      slug: "/blog/ai-powered-business-automation-2026-complete-guide",
      type: 'blog'
    },
    {
      id: "quantum-computing-enterprise",
      title: "Quantum Computing in Enterprise: Practical Applications and ROI",
      description: "Explore how quantum computing is revolutionizing enterprise operations with practical applications and measurable ROI outcomes.",
      author: "Dr. Sarah Kim",
      authorRole: "Quantum Computing Research Director",
      publishDate: "2025-01-17",
      readTime: "15 min read",
      category: "Quantum Computing",
      tags: ["Quantum Computing", "Enterprise", "ROI", "Optimization"],
      featured: true,
      imageUrl: "/images/blog/quantum-computing-enterprise-2026.jpg",
      slug: "/blog/quantum-computing-enterprise-practical-applications-roi",
      type: 'blog'
    },
    {
      id: "neural-interface-technology",
      title: "Neural Interface Technology: The Future of Human-Computer Interaction",
      description: "Discover how neural interface technology is creating seamless human-computer interactions and transforming accessibility.",
      author: "Dr. Elena Vasquez",
      authorRole: "Neural Interface Research Lead",
      publishDate: "2025-01-17",
      readTime: "10 min read",
      category: "Neural Interfaces",
      tags: ["Neural Interfaces", "BCI", "Human-Computer Interaction"],
      featured: true,
      imageUrl: "/images/blog/neural-interface-technology-2026.jpg",
      slug: "/blog/neural-interface-technology-future-human-computer-interaction",
      type: 'blog'
    },
    {
      id: "sustainable-ai-platform",
      title: "Sustainable AI Platform",
      description: "Environmentally conscious AI platform that reduces carbon footprint while maintaining high performance and accuracy.",
      author: "Green Tech Team",
      authorRole: "Sustainability Specialists",
      publishDate: "2025-01-17",
      readTime: "Service",
      category: "Sustainable AI",
      tags: ["Sustainable AI", "Green Computing", "Energy Efficiency"],
      featured: true,
      imageUrl: "/images/services/sustainable-ai-platform.jpg",
      slug: "/services/sustainable-ai-platform",
      type: 'service',
      price: "$35,000",
      rating: 4.7,
      reviews: 89
    },
    {
      id: "edge-ai-deployment-suite",
      title: "Edge AI Deployment Suite",
      description: "Comprehensive edge AI solution for deploying intelligent applications at the edge with minimal latency and maximum efficiency.",
      author: "Edge Computing Team",
      authorRole: "Edge Specialists",
      publishDate: "2025-01-17",
      readTime: "Service",
      category: "Edge AI",
      tags: ["Edge AI", "Real-time Processing", "IoT"],
      featured: true,
      imageUrl: "/images/services/edge-ai-deployment-suite.jpg",
      slug: "/services/edge-ai-deployment-suite",
      type: 'service',
      price: "$45,000",
      rating: 4.9,
      reviews: 156
    }
  ];
  const filteredContent = contentItems.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'services') return item.type === 'service';
    if (activeTab === 'blog') return item.type === 'blog';
    return true;
  });
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Automation': return Brain;
      case 'Quantum Computing': return Zap;
      case 'Neural Interfaces': return Bot;
      case 'Sustainable AI': return Globe;
      case 'Edge AI': return Rocket;
      default: return TrendingUp;
    }
  };
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Automation': return 'from-purple-500 to-pink-500';
      case 'Quantum Computing': return 'from-blue-500 to-cyan-500';
      case 'Neural Interfaces': return 'from-green-500 to-emerald-500';
      case 'Sustainable AI': return 'from-orange-500 to-red-500';
      case 'Edge AI': return 'from-indigo-500 to-purple-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Award className="h-4 w-4" />
            <span>NEW IN 2026</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI solutions, quantum computing platforms, and innovative technologies 
            that are transforming industries and reshaping the future.
          </p>
        </div>
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {[
              { id: 'all', label: 'All Content', count: contentItems.length },
              { id: 'services', label: 'Services', count: contentItems.filter(item => item.type === 'service').length },
              { id: 'blog', label: 'Articles', count: contentItems.filter(item => item.type === 'blog').length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
        {/* Content Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredContent.map((item, index) => {
            const CategoryIcon = getCategoryIcon(item.category);
            const categoryColor = getCategoryColor(item.category);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CategoryIcon className="h-16 w-16 text-gray-400" />
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                  {item.type === 'service' && item.price && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                      {item.price}
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColor} text-white`}>
                      <CategoryIcon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-gray-600">{item.category}</span>
                    {item.type === 'service' && item.rating && (
                      <div className="flex items-center space-x-1 ml-auto">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{item.rating}</span>
                        <span className="text-xs text-gray-500">({item.reviews})</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.publishDate}</span>
                    </div>
                  </div>
                  <motion.a
                    href={item.slug}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all group-hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{item.type === 'service' ? 'View Service' : 'Read Article'}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            );
};
          })}
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Explore our comprehensive suite of AI solutions and cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/services"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Services</span>
                <ExternalLink className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="/blog"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read Latest Articles</span>
                <ChevronRight className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );


export default ComprehensiveContentShowcase2026;
