import React, { useState, useEffect } from 'react';
import { Brain, Cloud, Zap, Shield, Globe, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  stats: {
    value: string;
    label: string;
  }[];
}

const DynamicContentShowcase: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features: Feature[] = [
    {
      id: 'ai-solutions',
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence that automates processes and drives innovation.',
      icon: Brain,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '3x', label: 'Faster Processing' },
        { value: '24/7', label: 'Automation' }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business and ensure maximum uptime.',
      icon: Cloud,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '50%', label: 'Cost Savings' },
        { value: 'Global', label: 'Reach' }
      ]
    },
    {
      id: 'performance',
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with advanced performance tuning and optimization techniques.',
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      stats: [
        { value: '2x', label: 'Faster Load' },
        { value: '40%', label: 'Less Bounce' },
        { value: 'A+', label: 'Performance' }
      ]
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption, compliance standards, and threat protection.',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliant' },
        { value: 'Zero', label: 'Breaches' }
      ]
    },
    {
      id: 'global',
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses with local expertise.',
      icon: Globe,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '24/7', label: 'Support' },
        { value: '15+', label: 'Languages' }
      ]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  const currentFeatureData = features[currentFeature];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver cutting-edge solutions that drive real business results and measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Content */}
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${currentFeatureData.bgColor} mb-6`}>
              <currentFeatureData.icon className={`w-8 h-8 ${currentFeatureData.color}`} />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {currentFeatureData.title}
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {currentFeatureData.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {currentFeatureData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${currentFeatureData.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Feature Navigation */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setCurrentFeature(index)}
                className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                  index === currentFeature
                    ? `${feature.bgColor} border-l-4 ${feature.color} border-l-4`
                    : 'bg-white hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <feature.icon className={`w-6 h-6 ${
                    index === currentFeature ? feature.color : 'text-gray-400'
                  }`} />
                  <div>
                    <h4 className={`font-semibold ${
                      index === currentFeature ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {feature.title}
                    </h4>
                    <p className={`text-sm ${
                      index === currentFeature ? 'text-gray-600' : 'text-gray-500'
                    }`}>
                      {feature.description.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">500+ Clients</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-semibold text-gray-900">4.9/5 Rating</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-gray-900">99% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;