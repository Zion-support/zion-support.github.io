import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Lock, 
  Rocket,
  ChevronRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  details: string[];
  benefits: string[];
}

const ModernFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features: Feature[] = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions that transform your business operations',
      icon: <Brain className="w-8 h-8" />,
      color: 'text-purple-600',
      gradient: 'from-purple-500 to-pink-500',
      details: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making',
        'Intelligent Automation'
      ],
      benefits: [
        '40% increase in operational efficiency',
        'Real-time insights and predictions',
        'Automated repetitive tasks',
        'Enhanced customer experiences'
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions for modern businesses',
      icon: <Globe className="w-8 h-8" />,
      color: 'text-blue-600',
      gradient: 'from-blue-500 to-cyan-500',
      details: [
        'Multi-cloud Architecture',
        'Container Orchestration',
        'Auto-scaling Solutions',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Pay-as-you-scale pricing',
        'Global edge locations',
        'Enterprise-grade security'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: <Shield className="w-8 h-8" />,
      color: 'text-green-600',
      gradient: 'from-green-500 to-emerald-500',
      details: [
        'Zero Trust Architecture',
        'Advanced Threat Detection',
        'Security Auditing',
        'Compliance Management',
        'Incident Response'
      ],
      benefits: [
        'Real-time threat monitoring',
        'Automated security responses',
        'Compliance with regulations',
        'Reduced security risks'
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex problem solving',
      icon: <Zap className="w-8 h-8" />,
      color: 'text-orange-600',
      gradient: 'from-orange-500 to-red-500',
      details: [
        'Quantum Algorithms',
        'Optimization Problems',
        'Cryptography',
        'Simulation',
        'Research & Development'
      ],
      benefits: [
        'Exponential speed improvements',
        'Complex problem solving',
        'Future-proof technology',
        'Competitive advantage'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Complete digital overhaul to modernize your business processes',
      icon: <Rocket className="w-8 h-8" />,
      color: 'text-indigo-600',
      gradient: 'from-indigo-500 to-purple-500',
      details: [
        'Process Automation',
        'Legacy System Modernization',
        'Digital Workflows',
        'Change Management',
        'Training & Support'
      ],
      benefits: [
        'Streamlined operations',
        'Improved productivity',
        'Better customer experience',
        'Reduced operational costs'
      ]
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      description: 'Secure, transparent, and decentralized solutions for your business',
      icon: <Lock className="w-8 h-8" />,
      color: 'text-teal-600',
      gradient: 'from-teal-500 to-blue-500',
      details: [
        'Smart Contracts',
        'Decentralized Applications',
        'Tokenization',
        'Supply Chain Tracking',
        'Identity Management'
      ],
      benefits: [
        'Enhanced security',
        'Transparent transactions',
        'Reduced intermediaries',
        'Immutable records'
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setIsAutoPlaying(false);
  };

  const resetAutoPlay = () => {
    setIsAutoPlaying(true);
    setActiveFeature(0);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Cutting-Edge Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover our comprehensive suite of modern technology services designed to 
            accelerate your digital transformation and drive business growth.
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            <span className="text-sm font-medium">
              {isAutoPlaying ? 'Pause' : 'Play'}
            </span>
          </button>
          <button
            onClick={resetAutoPlay}
            className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <RotateCcw className="w-5 h-5" />
            <span className="text-sm font-medium">Reset</span>
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onClick={() => handleFeatureClick(index)}
              className={`relative cursor-pointer transition-all duration-300 ${
                activeFeature === index ? 'transform scale-105' : 'hover:transform hover:scale-102'
              }`}
            >
              <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full border-2 transition-colors ${
                activeFeature === index ? 'border-blue-500 shadow-xl' : 'border-transparent hover:border-gray-200 dark:hover:border-gray-700'
              }`}>
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${feature.color}`}>
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Feature Details */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${features[activeFeature].gradient} mb-6`}>
                <div className="text-white text-3xl">
                  {features[activeFeature].icon}
                </div>
              </div>
              
              <h3 className={`text-3xl font-bold mb-4 ${features[activeFeature].color}`}>
                {features[activeFeature].title}
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {features[activeFeature].description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {features[activeFeature].details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                        <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Business Benefits:</h4>
              <div className="grid grid-cols-1 gap-4">
                {features[activeFeature].benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeFeature === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernFeatures;