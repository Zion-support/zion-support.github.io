import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, Shield, Cpu, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  title: string;
  description: string;
  category: string;
  link: string;
  icon: React.ReactNode;
  benefits: string[];
  featured?: boolean;
}

interface RevolutionaryServices2026BannerProps {
  className?: string;
  variant?: 'hero' | 'premium' | 'showcase';
  showCount?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const revolutionaryServices2026: ServiceItem[] = [
  {
    title: "AI Autonomous Infrastructure Platform",
    description: "Revolutionary AI infrastructure that self-heals, self-optimizes, and self-scales automatically. Reduce downtime by 95% and operational costs by 60%.",
    category: "AI Infrastructure",
    link: "/services/ai-autonomous-infrastructure",
    icon: <Zap className="w-8 h-8" />,
    benefits: ["95% Downtime Reduction", "60% Cost Savings", "10x Faster Response"],
    featured: true
  },
  {
    title: "Quantum-AI Hybrid Computing Solutions",
    description: "Leverage the power of quantum computing combined with AI to solve complex optimization problems and accelerate machine learning with measurable business value.",
    category: "Quantum Computing",
    link: "/services/quantum-ai-hybrid-computing",
    icon: <Cpu className="w-8 h-8" />,
    benefits: ["40-80% Performance Boost", "3-5x Faster Problem Solving", "12-18 Month ROI"],
    featured: true
  },
  {
    title: "Edge AI Deployment Platform",
    description: "Transform your operations with Edge AI deployment strategies that deliver private, real-time intelligence with sub-100ms response times and 99% privacy compliance.",
    category: "Edge Computing",
    link: "/services/edge-ai-deployment",
    icon: <Target className="w-8 h-8" />,
    benefits: ["90% Latency Reduction", "99% Privacy Compliance", "70% Cost Savings"],
    featured: true
  },
  {
    title: "Zero Trust Security Architecture",
    description: "Comprehensive Zero Trust Security implementation that reduces security incidents by 85% and improves compliance posture by 95% with continuous monitoring.",
    category: "Cybersecurity",
    link: "/services/zero-trust-security",
    icon: <Shield className="w-8 h-8" />,
    benefits: ["85% Incident Reduction", "95% Compliance Improvement", "60% Faster Response"],
    featured: true
  },
  {
    title: "AI Platform Architecture Consulting",
    description: "Design and implement scalable AI platform architectures that enable rapid development, deployment, and management of AI applications at enterprise scale.",
    category: "AI Strategy",
    link: "/services/ai-platform-architecture",
    icon: <Sparkles className="w-8 h-8" />,
    benefits: ["10x Development Speed", "99.9% Uptime", "50% Faster Deployment"],
    featured: true
  },
  {
    title: "Multi-Modal AI Solutions",
    description: "Advanced AI systems that process and understand multiple data types simultaneously, delivering unprecedented insights and automation capabilities.",
    category: "AI Innovation",
    link: "/services/multi-modal-ai",
    icon: <Zap className="w-8 h-8" />,
    benefits: ["75% Accuracy Improvement", "5x Faster Processing", "90% Automation Rate"],
    featured: true
  }
];

const RevolutionaryServices2026Banner: React.FC<RevolutionaryServices2026BannerProps> = ({
  className = "",
  variant = "hero",
  showCount = 3,
  autoRotate = false,
  rotationInterval = 10000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoRotate && revolutionaryServices2026.length > showCount) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (revolutionaryServices2026.length - showCount + 1));
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, showCount, rotationInterval]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return {
          container: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white",
          badge: "bg-white/20 text-emerald-100 border-emerald-300/30",
          title: "text-white",
          description: "text-emerald-100",
          item: "bg-white/10 hover:bg-white/20 border-white/20",
          itemTitle: "text-white",
          itemDescription: "text-emerald-200",
          itemCategory: "text-emerald-300",
          benefit: "bg-white/20 text-emerald-100",
          cta: "bg-white text-emerald-600 hover:bg-emerald-50"
        };
      case 'showcase':
        return {
          container: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white",
          badge: "bg-white/20 text-purple-100 border-purple-300/30",
          title: "text-white",
          description: "text-purple-100",
          item: "bg-white/10 hover:bg-white/20 border-white/20",
          itemTitle: "text-white",
          itemDescription: "text-purple-200",
          itemCategory: "text-purple-300",
          benefit: "bg-white/20 text-purple-100",
          cta: "bg-white text-purple-600 hover:bg-purple-50"
        };
      default: // hero
        return {
          container: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
          badge: "bg-white/20 text-blue-100 border-blue-300/30",
          title: "text-white",
          description: "text-blue-100",
          item: "bg-white/10 hover:bg-white/20 border-white/20",
          itemTitle: "text-white",
          itemDescription: "text-blue-200",
          itemCategory: "text-blue-300",
          benefit: "bg-white/20 text-blue-100",
          cta: "bg-white text-blue-600 hover:bg-blue-50"
        };
    }
  };

  const styles = getVariantStyles();
  const displayServices = revolutionaryServices2026.slice(currentIndex, currentIndex + showCount);

  if (!isVisible) return null;

  return (
    <div className={`relative overflow-hidden ${styles.container} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${styles.badge} text-sm font-medium mb-4 border`}>
            <Sparkles className="w-4 h-4 mr-2" />
            🔥 REVOLUTIONARY 2026 SERVICES
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${styles.title}`}>
            Transform Your Business with Breakthrough AI Solutions
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${styles.description}`}>
            Discover our revolutionary AI services that deliver unprecedented results: AI Autonomous Infrastructure, 
            Quantum-AI Hybrid Computing, Edge AI Deployment, and Zero Trust Security solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayServices.map((service, index) => (
            <Link
              key={`${service.link}-${currentIndex}-${index}`}
              to={service.link}
              className={`${styles.item} rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.featured ? 'bg-yellow-400 text-black' : 'bg-white/20 text-white'}`}>
                  {service.icon}
                </div>
                <span className={`text-xs uppercase tracking-wider font-medium ${styles.itemCategory}`}>
                  {service.category}
                </span>
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${styles.itemTitle} group-hover:underline`}>
                {service.title}
              </h3>
              
              <p className={`text-sm mb-4 ${styles.itemDescription}`}>
                {service.description}
              </p>

              <div className="space-y-2">
                {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className={`${styles.benefit} px-2 py-1 rounded text-xs font-medium`}>
                    {benefit}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className={`${styles.cta} px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`}
            >
              <Target className="w-5 h-5" />
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
          
          {/* Service Categories */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
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
              AI Strategy
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
              AI Innovation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryServices2026Banner;