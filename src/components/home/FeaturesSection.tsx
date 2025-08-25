import React, { useState, useEffect } from 'react';
import { 
  Brain,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Lock,
  Cloud,
  Microchip
} from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  benefits: string[];
  category: 'AI' | 'Security' | 'Performance' | 'Innovation';
  gradient: string;
  stats?: {
    value: string;
    label: string;
    change: string;
  };
}

const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>('ai-intelligence');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Feature[] = [
    {
      id: 'ai-intelligence',
      title: 'AI-Powered Intelligence',
      description: 'Harness the power of artificial intelligence to automate complex processes, predict trends, and make data-driven decisions.',
      icon: Brain,
      benefits: [
        'Advanced machine learning algorithms',
        'Real-time predictive analytics',
        'Natural language processing',
        'Computer vision capabilities'
      ],
      category: 'AI',
      gradient: 'from-purple-600 to-blue-600',
      stats: {
        value: '95%',
        label: 'Accuracy Rate',
        change: '+15% vs traditional methods'
      }
    },
    {
      id: 'enterprise-security',
      title: 'Enterprise-Grade Security',
      description: 'Multi-layered security approach with SOC2 compliance, advanced threat detection, and 24/7 monitoring.',
      icon: Shield,
      benefits: [
        'SOC2 Type II compliance',
        'Advanced threat detection',
        'Zero-trust architecture',
        '24/7 security monitoring'
      ],
      category: 'Security',
      gradient: 'from-green-600 to-emerald-600',
      stats: {
        value: '99.99%',
        label: 'Uptime',
        change: '99.9% industry average'
      }
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with advanced caching, CDN optimization, and performance monitoring.',
      icon: Zap,
      benefits: [
        'Global CDN distribution',
        'Advanced caching strategies',
        'Real-time performance monitoring',
        'Automatic optimization'
      ],
      category: 'Performance',
      gradient: 'from-yellow-600 to-orange-600',
      stats: {
        value: '3.2s',
        label: 'Load Time',
        change: '-40% vs competitors'
      }
    },
    {
      id: 'innovation-platform',
      title: 'Innovation Platform',
      description: 'Cutting-edge technology stack with quantum computing, blockchain, and emerging tech integration.',
      icon: Rocket,
      benefits: [
        'Quantum computing integration',
        'Blockchain solutions',
        'IoT connectivity',
        'Edge computing capabilities'
      ],
      category: 'Innovation',
      gradient: 'from-indigo-600 to-purple-600',
      stats: {
        value: '25+',
        label: 'Emerging Tech',
        change: 'New integrations monthly'
      }
    }
  ];

  const activeFeatureData = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Why Choose Zion Tech
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge Features That Drive Results
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform combines the latest technologies with proven methodologies to deliver exceptional results for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Feature Navigation */}
          <div className="space-y-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeFeature === feature.id ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  activeFeature === feature.id
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/50 shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800/70'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl p-3 bg-gradient-to-br ${feature.gradient} flex-shrink-0`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        activeFeature === feature.id ? 'text-blue-300' : 'text-white'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 text-gray-500 transition-all duration-300 ${
                      activeFeature === feature.id ? 'text-blue-400 rotate-90' : 'group-hover:text-gray-400 group-hover:translate-x-1'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Active Feature Details */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
              {/* Feature Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl p-4 bg-gradient-to-br ${activeFeatureData.gradient}`}>
                  <activeFeatureData.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeFeatureData.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${activeFeatureData.gradient} bg-opacity-20 text-white`}>
                      {activeFeatureData.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {activeFeatureData.description}
              </p>

              {/* Stats Card */}
              {activeFeatureData.stats && (
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-white">{activeFeatureData.stats.value}</div>
                      <div className="text-gray-400">{activeFeatureData.stats.label}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 text-sm font-medium">{activeFeatureData.stats.change}</div>
                      <div className="text-gray-500 text-xs">vs Industry</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Benefits List */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Key Benefits:</h4>
                {activeFeatureData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;