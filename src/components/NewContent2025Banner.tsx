import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Star, TrendingUp, Users, Zap } from 'lucide-react';

interface NewContent2025BannerProps {
  variant?: 'hero' | 'premium' | 'featured';
  showCount?: number;
  autoRotate?: boolean;
  className?: string;
}

const NewContent2025Banner: React.FC<NewContent2025BannerProps> = ({
  variant = 'hero',
  showCount = 6,
  autoRotate = false,
  className = ''
}) => {
  const newContent = [
    {
      id: 'ai-autonomous-infrastructure',
      title: 'AI Autonomous Infrastructure Platform',
      description: 'Revolutionary self-healing, self-optimizing systems that reduce costs by 75% and achieve 99.9% uptime.',
      category: 'AI Infrastructure',
      readTime: '12 min read',
      link: '/blog/ai-autonomous-infrastructure-platform-2025',
      icon: Zap,
      featured: true
    },
    {
      id: 'quantum-ai-hybrid',
      title: 'Quantum-AI Hybrid Computing',
      description: 'Next-generation computing that combines quantum processing with AI to solve complex problems 1000x faster.',
      category: 'Quantum Computing',
      readTime: '15 min read',
      link: '/blog/quantum-ai-hybrid-computing-2025',
      icon: TrendingUp,
      featured: true
    },
    {
      id: 'multimodal-ai',
      title: 'Multimodal AI Applications',
      description: 'Process text, images, audio, and video simultaneously for comprehensive business intelligence.',
      category: 'Multimodal AI',
      readTime: '10 min read',
      link: '/blog/multimodal-ai-applications-2025',
      icon: Users,
      featured: true
    },
    {
      id: 'edge-ai-deployment',
      title: 'Edge AI Deployment Strategies',
      description: 'Real-time intelligence at the edge with sub-50ms inference speeds and offline capabilities.',
      category: 'Edge Computing',
      readTime: '11 min read',
      link: '/blog/edge-ai-deployment-strategies-2025',
      icon: Zap,
      featured: true
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework',
      description: 'Build responsible AI systems with comprehensive ethics oversight and compliance monitoring.',
      category: 'AI Ethics',
      readTime: '9 min read',
      link: '/blog/ai-ethics-framework-2025',
      icon: Star,
      featured: true
    },
    {
      id: 'ai-performance-monitoring',
      title: 'AI Performance Monitoring',
      description: 'Real-time observability and predictive analytics for optimal AI system performance.',
      category: 'AI Operations',
      readTime: '8 min read',
      link: '/blog/ai-performance-monitoring-2025',
      icon: TrendingUp,
      featured: false
    }
  ];

  const featuredContent = newContent.filter(item => item.featured).slice(0, showCount);

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return {
          container: 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white',
          title: 'text-4xl md:text-5xl font-bold mb-4',
          description: 'text-xl text-blue-100 mb-8',
          card: 'bg-white/10 backdrop-blur-lg border border-white/20',
          cardTitle: 'text-white group-hover:text-yellow-300',
          cardDescription: 'text-blue-100',
          category: 'text-blue-300'
        };
      case 'premium':
        return {
          container: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white',
          title: 'text-3xl md:text-4xl font-bold mb-4',
          description: 'text-lg text-emerald-100 mb-6',
          card: 'bg-white/15 backdrop-blur-lg border border-white/30',
          cardTitle: 'text-white group-hover:text-emerald-300',
          cardDescription: 'text-emerald-100',
          category: 'text-emerald-300'
        };
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
          title: 'text-3xl font-bold mb-4',
          description: 'text-lg text-purple-100 mb-6',
          card: 'bg-white/20 backdrop-blur-lg border border-white/40',
          cardTitle: 'text-white group-hover:text-pink-300',
          cardDescription: 'text-purple-100',
          category: 'text-pink-300'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
          title: 'text-4xl font-bold mb-4',
          description: 'text-xl text-blue-100 mb-8',
          card: 'bg-white/10 backdrop-blur-lg border border-white/20',
          cardTitle: 'text-white group-hover:text-yellow-300',
          cardDescription: 'text-blue-100',
          category: 'text-blue-300'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`py-16 relative overflow-hidden ${styles.container} ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 text-white text-sm font-medium mb-6 border border-white/30">
            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            🚀 BREAKTHROUGH 2025 CONTENT
            <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
          </div>
          <h2 className={styles.title}>
            Revolutionary AI Articles & Success Stories
          </h2>
          <p className={styles.description}>
            Discover breakthrough insights on AI autonomous infrastructure, quantum-AI hybrid computing, 
            multimodal AI applications, edge AI deployment, AI ethics frameworks, and real-world success stories 
            from Fortune 500 companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link key={item.id} to={item.link} className="group">
                <div className={`${styles.card} rounded-xl p-6 hover:bg-white/25 transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${styles.category} text-xs uppercase tracking-wider font-medium`}>
                      {item.category}
                    </div>
                    <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                      NEW
                    </span>
                  </div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className={`${styles.cardTitle} text-lg font-bold group-hover:text-yellow-300 transition-colors`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className={`${styles.cardDescription} text-sm mb-4 line-clamp-2`}>
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className={styles.category}>{item.readTime}</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <ArrowRight className="w-5 h-5" />
              Read All Articles
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Star className="w-5 h-5" />
              View Success Stories
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <TrendingUp className="w-5 h-5" />
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025Banner;