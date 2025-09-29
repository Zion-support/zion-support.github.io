import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Zap, Users, Target, Award, TrendingUp } from 'lucide-react';

interface NewServices2025BannerProps {
  variant?: 'hero' | 'premium' | 'featured';
  showCount?: number;
  featuredOnly?: boolean;
  className?: string;
}

const NewServices2025Banner: React.FC<NewServices2025BannerProps> = ({
  variant = 'hero',
  showCount = 6,
  featuredOnly = false,
  className = ''
}) => {
  const newServices = [
    {
      id: 'ai-autonomous-infrastructure-platform',
      title: 'AI Autonomous Infrastructure Platform',
      description: 'Revolutionary AI-powered infrastructure that self-heals, self-optimizes, and self-scales automatically. Achieve 99.9% uptime with zero manual intervention.',
      category: 'AI Infrastructure',
      pricing: '$2,500/month',
      benefits: ['99.9% uptime guaranteed', '90% cost reduction', 'Zero manual intervention', 'Predictive maintenance'],
      icon: Shield,
      featured: true,
      trending: true,
      link: '/services/ai-autonomous-infrastructure-platform'
    },
    {
      id: 'multimodal-ai-intelligence-suite',
      title: 'Multimodal AI Intelligence Suite',
      description: 'Comprehensive AI suite that processes text, images, audio, and video simultaneously. Unlock insights from all your data types with unified intelligence.',
      category: 'Multimodal AI',
      pricing: '$1,800/month',
      benefits: ['90% accuracy across modalities', 'Unified processing pipeline', 'Real-time analysis', 'API integration ready'],
      icon: Users,
      featured: true,
      trending: true,
      link: '/services/multimodal-ai-intelligence-suite'
    },
    {
      id: 'ai-ethics-compliance-framework',
      title: 'AI Ethics & Compliance Framework',
      description: 'Comprehensive framework for developing and deploying AI systems responsibly. Ensure compliance with regulations and build trust with stakeholders.',
      category: 'AI Ethics',
      pricing: '$1,200/month',
      benefits: ['100% regulatory compliance', 'Automated ethics monitoring', 'Transparency reporting', 'Risk assessment tools'],
      icon: Target,
      featured: true,
      trending: false,
      link: '/services/ai-ethics-compliance-framework'
    },
    {
      id: 'real-time-ai-performance-monitoring',
      title: 'Real-Time AI Performance Monitoring',
      description: 'Advanced AI performance monitoring with real-time observability, automated alerting, and predictive analytics for optimal system performance.',
      category: 'AI Operations',
      pricing: '$950/month',
      benefits: ['99.9% system reliability', 'Real-time insights', 'Automated alerting', 'Predictive analytics'],
      icon: TrendingUp,
      featured: true,
      trending: false,
      link: '/services/real-time-ai-performance-monitoring'
    },
    {
      id: 'edge-ai-deployment-platform',
      title: 'Edge AI Deployment Platform',
      description: 'Production-ready edge AI platform with real-time inference, offline capabilities, and seamless cloud synchronization for distributed intelligence.',
      category: 'Edge AI',
      pricing: '$1,500/month',
      benefits: ['Sub-50ms inference speed', '100% offline capability', 'Seamless cloud sync', 'Edge-to-cloud orchestration'],
      icon: Zap,
      featured: false,
      trending: false,
      link: '/services/edge-ai-deployment-platform'
    },
    {
      id: 'quantum-ai-hybrid-computing',
      title: 'Quantum-AI Hybrid Computing',
      description: 'Revolutionary quantum-AI hybrid computing platform that combines quantum computing power with AI algorithms for unprecedented problem-solving capabilities.',
      category: 'Quantum Computing',
      pricing: '$5,000/month',
      benefits: ['1000x faster optimization', 'Quantum-enhanced AI algorithms', 'Exponential problem-solving', 'Research-grade capabilities'],
      icon: Award,
      featured: false,
      trending: true,
      link: '/services/quantum-ai-hybrid-computing'
    }
  ];

  const filteredServices = featuredOnly 
    ? newServices.filter(service => service.featured).slice(0, showCount)
    : newServices.slice(0, showCount);

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return {
          container: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white',
          title: 'text-4xl md:text-5xl font-bold mb-4',
          description: 'text-xl text-emerald-100 mb-8',
          card: 'bg-white/10 backdrop-blur-lg border border-white/20',
          cardTitle: 'text-white group-hover:text-emerald-300',
          cardDescription: 'text-emerald-100',
          category: 'text-emerald-300',
          pricing: 'text-emerald-200',
          benefit: 'text-emerald-100'
        };
      case 'premium':
        return {
          container: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white',
          title: 'text-3xl md:text-4xl font-bold mb-4',
          description: 'text-lg text-purple-100 mb-6',
          card: 'bg-white/15 backdrop-blur-lg border border-white/30',
          cardTitle: 'text-white group-hover:text-purple-300',
          cardDescription: 'text-purple-100',
          category: 'text-purple-300',
          pricing: 'text-purple-200',
          benefit: 'text-purple-100'
        };
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white',
          title: 'text-3xl font-bold mb-4',
          description: 'text-lg text-blue-100 mb-6',
          card: 'bg-white/20 backdrop-blur-lg border border-white/40',
          cardTitle: 'text-white group-hover:text-blue-300',
          cardDescription: 'text-blue-100',
          category: 'text-blue-300',
          pricing: 'text-blue-200',
          benefit: 'text-blue-100'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white',
          title: 'text-4xl font-bold mb-4',
          description: 'text-xl text-emerald-100 mb-8',
          card: 'bg-white/10 backdrop-blur-lg border border-white/20',
          cardTitle: 'text-white group-hover:text-emerald-300',
          cardDescription: 'text-emerald-100',
          category: 'text-emerald-300',
          pricing: 'text-emerald-200',
          benefit: 'text-emerald-100'
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
            🚀 BREAKTHROUGH 2025 SERVICES
            <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
          </div>
          <h2 className={styles.title}>
            Revolutionary AI Services & Solutions
          </h2>
          <p className={styles.description}>
            Transform your business with cutting-edge AI services including autonomous infrastructure, 
            multimodal AI intelligence, quantum-AI hybrid computing, edge AI deployment, and comprehensive 
            AI ethics frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link key={service.id} to={service.link} className="group">
                <div className={`${styles.card} rounded-xl p-6 hover:bg-white/25 transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${styles.category} text-xs uppercase tracking-wider font-medium`}>
                      {service.category}
                    </div>
                    <div className="flex gap-2">
                      {service.featured && (
                        <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                          FEATURED
                        </span>
                      )}
                      {service.trending && (
                        <span className="bg-orange-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                          TRENDING
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`${styles.cardTitle} text-lg font-bold group-hover:text-emerald-300 transition-colors mb-2`}>
                        {service.title}
                      </h3>
                      <p className={`${styles.pricing} text-sm font-semibold`}>
                        Starting at {service.pricing}
                      </p>
                    </div>
                  </div>
                  
                  <p className={`${styles.cardDescription} text-sm mb-4 line-clamp-2`}>
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className={`${styles.benefit} text-xs flex items-center gap-2`}>
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`${styles.category} text-xs`}>Learn More</span>
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
              to="/services" 
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <ArrowRight className="w-5 h-5" />
              Explore All Services
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Get Free Consultation
            </Link>
            <Link 
              to="/case-studies" 
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Award className="w-5 h-5" />
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewServices2025Banner;