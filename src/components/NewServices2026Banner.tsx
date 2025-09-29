import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Cpu, Shield, Zap, Brain, Globe, TrendingUp } from 'lucide-react';

interface NewServices2026BannerProps {
  className?: string;
  variant?: 'hero' | 'compact' | 'showcase';
  showCount?: number;
}

const NewServices2026Banner: React.FC<NewServices2026BannerProps> = ({
  className = '',
  variant = 'hero',
  showCount = 6
}) => {
  const newServices = [
    {
      id: 'ai-autonomous-infrastructure',
      title: 'AI Autonomous Infrastructure Platform',
      description: 'Self-healing systems with 99.9% uptime and zero-touch operations',
      icon: Cpu,
      color: 'from-purple-600 to-blue-600',
      bgColor: 'from-purple-50 to-blue-50',
      borderColor: 'border-purple-200',
      price: '$2,999/month',
      features: ['99.9% Uptime', 'Zero-Touch Ops', 'Predictive Scaling', 'Self-Healing'],
      link: '/services/ai-autonomous-infrastructure',
      popular: true
    },
    {
      id: 'quantum-ai-hybrid',
      title: 'AI Quantum Hybrid Computing',
      description: '1000x faster optimization with quantum-AI breakthrough capabilities',
      icon: Zap,
      color: 'from-purple-600 to-cyan-600',
      bgColor: 'from-purple-50 to-cyan-50',
      borderColor: 'border-purple-200',
      price: '$4,999/month',
      features: ['1000x Speed', 'Quantum Algorithms', 'ML Acceleration', 'Optimization'],
      link: '/services/quantum-ai-hybrid-computing',
      popular: true
    },
    {
      id: 'zero-trust-security',
      title: 'AI Zero Trust Security Suite',
      description: 'Unbreakable defense with 99.9% threat detection and autonomous response',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      bgColor: 'from-red-50 to-orange-50',
      borderColor: 'border-red-200',
      price: '$3,499/month',
      features: ['99.9% Detection', 'Autonomous Response', 'Zero Trust', 'Compliance'],
      link: '/services/ai-zero-trust-security',
      popular: false
    },
    {
      id: 'ai-edge-computing',
      title: 'AI Edge Computing Platform',
      description: 'Sub-50ms latency with offline AI capabilities at the edge',
      icon: Globe,
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200',
      price: '$1,999/month',
      features: ['Sub-50ms Latency', 'Offline AI', 'Edge Intelligence', 'Real-time'],
      link: '/services/ai-edge-computing',
      popular: false
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence 2026',
      description: 'Next-generation decision making with 400% faster insights',
      icon: Brain,
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200',
      price: '$2,499/month',
      features: ['400% Faster', 'Predictive Analytics', 'Real-time Insights', 'Decision AI'],
      link: '/services/ai-business-intelligence',
      popular: false
    },
    {
      id: 'ai-sustainability',
      title: 'AI Sustainability & Green Tech',
      description: 'Carbon-neutral operations with 80% energy reduction and $2M+ savings',
      icon: TrendingUp,
      color: 'from-green-600 to-teal-600',
      bgColor: 'from-green-50 to-teal-50',
      borderColor: 'border-green-200',
      price: '$1,799/month',
      features: ['Carbon Neutral', '80% Energy Reduction', '$2M+ Savings', 'Green AI'],
      link: '/services/ai-sustainability',
      popular: false
    }
  ];

  const displayServices = newServices.slice(0, showCount);

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-emerald-600 to-teal-600 text-white ${className}`}>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <div>
                <h3 className="text-lg font-bold">New AI Services 2026</h3>
                <p className="text-emerald-100 text-sm">Revolutionary AI solutions now available</p>
              </div>
            </div>
            <Link
              to="/services"
              className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Explore Services →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'showcase') {
    return (
      <div className={`py-16 ${className}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              New Services Available
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Revolutionary AI Services 2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover breakthrough AI solutions that deliver unprecedented performance, efficiency, and innovation for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className={`group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'ring-2 ring-emerald-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-sm text-emerald-600 font-semibold">{service.price}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                    Learn More →
                  </span>
                  {service.popular && (
                    <span className="text-xs text-emerald-600 font-medium">Popular Choice</span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Hero variant
  return (
    <div className={`bg-gradient-to-r from-emerald-600 to-teal-600 text-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            <span className="text-lg font-bold">🚀 NEW AI SERVICES 2026</span>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Solutions Now Available
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Transform your business with breakthrough AI services that deliver unprecedented performance, efficiency, and innovation. Get started with our most popular solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayServices.slice(0, 3).map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  {service.popular && (
                    <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
                      POPULAR
                    </span>
                  )}
                  <span className="text-sm text-emerald-200">{service.price}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-200 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-emerald-100 mb-4">
                {service.description}
              </p>

              <div className="space-y-2 mb-4">
                {service.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-emerald-200">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-emerald-200 font-semibold group-hover:text-yellow-200 transition-colors">
                  Learn More →
                </span>
                <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:text-yellow-200 transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewServices2026Banner;