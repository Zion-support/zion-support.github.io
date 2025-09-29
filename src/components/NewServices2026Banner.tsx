import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield, Globe, TrendingUp, Star, CheckCircle } from 'lucide-react';

interface NewServices2026BannerProps {
  variant?: 'hero' | 'premium' | 'showcase' | 'featured';
  className?: string;
  showCount?: number;
  featuredOnly?: boolean;
}

const NewServices2026Banner: React.FC<NewServices2026BannerProps> = ({
  variant = 'hero',
  className = '',
  showCount = 4,
  featuredOnly = false
}) => {
  const newServices = [
    {
      id: 'ai-autonomous-infrastructure-platform',
      title: 'AI Autonomous Infrastructure Platform',
      description: 'Self-healing, self-optimizing infrastructure with 99.9% uptime',
      category: 'AI Infrastructure',
      price: '$2,500/month',
      metrics: '99.9% Uptime • 90% Cost Reduction',
      url: '/services/ai-autonomous-infrastructure-platform',
      featured: true,
      trending: true,
      icon: Zap,
      color: 'from-blue-500 to-purple-600',
      benefits: ['Zero Manual Intervention', 'Predictive Maintenance', 'Auto-Scaling']
    },
    {
      id: 'multimodal-ai-intelligence-suite',
      title: 'Multimodal AI Intelligence Suite',
      description: 'Process text, images, audio, and video simultaneously',
      category: 'Multimodal AI',
      price: '$1,800/month',
      metrics: '90% Accuracy • 5x Speed',
      url: '/services/multimodal-ai-intelligence-suite',
      featured: true,
      trending: true,
      icon: Globe,
      color: 'from-purple-500 to-pink-600',
      benefits: ['Unified Processing', 'Real-time Analysis', 'Custom Training']
    },
    {
      id: 'ai-ethics-compliance-framework',
      title: 'AI Ethics & Compliance Framework',
      description: 'Responsible AI development with 100% compliance',
      category: 'AI Ethics',
      price: '$1,200/month',
      metrics: '100% Compliance • 95% Trust',
      url: '/services/ai-ethics-compliance-framework',
      featured: true,
      trending: false,
      icon: Shield,
      color: 'from-green-500 to-teal-600',
      benefits: ['Automated Monitoring', 'Risk Assessment', 'Trust Building']
    },
    {
      id: 'real-time-ai-performance-monitoring',
      title: 'Real-Time AI Performance Monitoring',
      description: 'Advanced observability with predictive analytics',
      category: 'AI Operations',
      price: '$950/month',
      metrics: '99.9% Reliability • <30s Detection',
      url: '/services/real-time-ai-performance-monitoring',
      featured: true,
      trending: false,
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600',
      benefits: ['Real-time Insights', 'Automated Alerting', 'Predictive Analytics']
    },
    {
      id: 'edge-ai-deployment-platform',
      title: 'Edge AI Deployment Platform',
      description: 'Production-ready edge AI with offline capabilities',
      category: 'Edge AI',
      price: '$1,500/month',
      metrics: '<50ms Inference • 80% Cost Reduction',
      url: '/services/edge-ai-deployment-platform',
      featured: false,
      trending: false,
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      benefits: ['Sub-50ms Speed', 'Offline Capability', 'Cloud Sync']
    },
    {
      id: 'quantum-ai-hybrid-computing',
      title: 'Quantum-AI Hybrid Computing',
      description: 'Revolutionary quantum-AI hybrid computing platform',
      category: 'Quantum Computing',
      price: '$5,000/month',
      metrics: '1000x Speed • 40% Accuracy Gain',
      url: '/services/quantum-ai-hybrid-computing',
      featured: false,
      trending: true,
      icon: Star,
      color: 'from-indigo-500 to-purple-600',
      benefits: ['1000x Optimization', 'Quantum Algorithms', 'Research-Grade']
    }
  ];

  const filteredServices = featuredOnly 
    ? newServices.filter(service => service.featured)
    : newServices;
  
  const displayedServices = filteredServices.slice(0, showCount);

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white';
      case 'premium':
        return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white';
      case 'showcase':
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white';
      case 'featured':
        return 'bg-gradient-to-r from-orange-600 to-red-600 text-white';
      default:
        return 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white';
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl p-8 md:p-12 ${getVariantStyles()} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4 border border-white/30">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            🚀 NEW 2026 AI SERVICES
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Services & Solutions
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI services including autonomous infrastructure, 
            multimodal intelligence, ethics compliance, and quantum-AI hybrid computing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => window.open(service.url, '_blank')}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    {service.featured && (
                      <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                        FEATURED
                      </span>
                    )}
                    {service.trending && (
                      <span className="bg-red-400 text-white text-xs px-2 py-1 rounded-full font-medium">
                        TRENDING
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="text-xs text-white/70 uppercase tracking-wider">{service.category}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{service.title}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-center text-white/80 text-xs">
                      <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white/70 text-xs">
                    <span className="font-medium">{service.metrics}</span>
                  </div>
                  <div className="text-white font-bold text-sm">
                    {service.price}
                  </div>
                </div>
                
                <div className="flex items-center text-white text-sm font-medium">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">8</div>
            <div className="text-sm text-white/80">New Services</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-sm text-white/80">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-sm text-white/80">Companies Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-sm text-white/80">Support Available</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            Explore All Services
          </Link>
          <Link
            to="/contact"
            className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Shield className="w-5 h-5" />
            Get Free Consultation
          </Link>
          <Link
            to="/case-studies"
            className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Star className="w-5 h-5" />
            View Success Stories
          </Link>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">AI Infrastructure</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">Multimodal AI</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">Edge AI</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">Quantum Computing</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">AI Ethics</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">Performance Monitoring</span>
        </div>
      </div>
    </div>
  );
};

export default NewServices2026Banner;