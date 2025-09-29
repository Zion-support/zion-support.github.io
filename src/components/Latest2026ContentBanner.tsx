import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContentItem {
  title: string;
  category: string;
  link: string;
  readTime: string;
  featured?: boolean;
}

interface Latest2026ContentBannerProps {
  className?: string;
  variant?: 'hero' | 'premium' | 'showcase';
  showCount?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const latest2026Content: ContentItem[] = [
  {
    title: "AI Autonomous Infrastructure 2026: Self-Healing Systems That Scale",
    category: "AI Infrastructure",
    link: "/blog/ai-autonomous-infrastructure-2026",
    readTime: "12 min read",
    featured: true
  },
  {
    title: "Quantum-AI Hybrid Computing 2026: Practical Near-Term Wins",
    category: "Quantum Computing",
    link: "/blog/quantum-ai-hybrid-computing-2026",
    readTime: "14 min read",
    featured: true
  },
  {
    title: "Edge AI Deployment 2026: Private, Real-Time Intelligence at Scale",
    category: "Edge Computing",
    link: "/blog/edge-ai-deployment-2026",
    readTime: "11 min read",
    featured: true
  },
  {
    title: "Zero Trust Security 2026: Comprehensive Implementation Guide",
    category: "Cybersecurity",
    link: "/blog/zero-trust-security-2026",
    readTime: "13 min read",
    featured: true
  },
  {
    title: "AI Platform Architecture 2026: Scalable Foundations",
    category: "AI Architecture",
    link: "/blog/ai-platform-architecture-2026",
    readTime: "15 min read",
    featured: true
  },
  {
    title: "Multi-Modal AI Applications: Beyond Text and Images",
    category: "AI Innovation",
    link: "/blog/multi-modal-ai-applications-2026",
    readTime: "10 min read",
    featured: true
  }
];

const Latest2026ContentBanner: React.FC<Latest2026ContentBannerProps> = ({
  className = "",
  variant = "hero",
  showCount = 3,
  autoRotate = false,
  rotationInterval = 8000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoRotate && latest2026Content.length > showCount) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (latest2026Content.length - showCount + 1));
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, showCount, rotationInterval]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return {
          container: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white",
          badge: "bg-white/20 text-purple-100 border-purple-300/30",
          title: "text-white",
          description: "text-purple-100",
          item: "bg-white/10 hover:bg-white/20 border-white/20",
          itemTitle: "text-white",
          itemCategory: "text-purple-200",
          cta: "bg-white text-purple-600 hover:bg-purple-50"
        };
      case 'showcase':
        return {
          container: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white",
          badge: "bg-white/20 text-emerald-100 border-emerald-300/30",
          title: "text-white",
          description: "text-emerald-100",
          item: "bg-white/10 hover:bg-white/20 border-white/20",
          itemTitle: "text-white",
          itemCategory: "text-emerald-200",
          cta: "bg-white text-emerald-600 hover:bg-emerald-50"
        };
      default: // hero
        return {
          container: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white",
          badge: "bg-white/20 text-indigo-100 border-indigo-300/30",
          title: "text-white",
          description: "text-indigo-100",
          item: "bg-white/10 hover:bg-white/20 border-white/20",
          itemTitle: "text-white",
          itemCategory: "text-indigo-200",
          cta: "bg-white text-indigo-600 hover:bg-indigo-50"
        };
    }
  };

  const styles = getVariantStyles();
  const displayContent = latest2026Content.slice(currentIndex, currentIndex + showCount);

  if (!isVisible) return null;

  return (
    <div className={`relative overflow-hidden ${styles.container} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${styles.badge} text-sm font-medium mb-4 border`}>
            <Sparkles className="w-4 h-4 mr-2" />
            🚀 BREAKTHROUGH 2026 CONTENT
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${styles.title}`}>
            Latest AI & Technology Insights
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${styles.description}`}>
            Discover cutting-edge articles on AI Autonomous Infrastructure, Quantum-AI Hybrid Computing, 
            Edge AI Deployment, and Zero Trust Security that are transforming industries today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayContent.map((item, index) => (
            <Link
              key={`${item.link}-${currentIndex}-${index}`}
              to={item.link}
              className={`${styles.item} rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs uppercase tracking-wider font-medium ${styles.itemCategory}`}>
                  {item.category}
                </span>
                {item.featured && (
                  <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                    FEATURED
                  </span>
                )}
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${styles.itemTitle} group-hover:underline`}>
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span className={styles.itemCategory}>{item.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog"
              className={`${styles.cta} px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`}
            >
              <Users className="w-5 h-5" />
              Read All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
          
          {/* Content Tags */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
              AI Infrastructure
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
              Quantum Computing
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
              Edge AI
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
              Zero Trust Security
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
              AI Architecture
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
              Multi-Modal AI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest2026ContentBanner;