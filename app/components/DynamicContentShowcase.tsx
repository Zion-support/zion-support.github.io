'use client';
import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Lock, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    {
      id: 'ai-solutions',
      label: 'AI Solutions',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'security',
      label: 'Security',
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const content = {
    'ai-solutions': {
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence technology.',
      features: [
        {
          icon: <Zap className="w-6 h-6" />,
          title: 'Machine Learning',
          description: 'Advanced ML algorithms for predictive analytics and automation.'
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: 'Natural Language Processing',
          description: 'Intelligent text analysis and language understanding capabilities.'
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: 'Computer Vision',
          description: 'Image and video analysis for enhanced business insights.'
        }
      ],
      stats: [
        { label: 'AI Models Deployed', value: '500+' },
        { label: 'Accuracy Rate', value: '99.7%' },
        { label: 'Processing Speed', value: '10x Faster' }
      ]
    },
    'security': {
      title: 'Enterprise Security',
      description: 'Protect your business with comprehensive cybersecurity solutions.',
      features: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: 'Threat Detection',
          description: 'Real-time monitoring and advanced threat detection systems.'
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: 'Data Encryption',
          description: 'End-to-end encryption for all your sensitive data.'
        },
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: 'Compliance',
          description: 'Meet industry standards with automated compliance monitoring.'
        }
      ],
      stats: [
        { label: 'Security Incidents Prevented', value: '10,000+' },
        { label: 'Uptime Guarantee', value: '99.9%' },
        { label: 'Response Time', value: '< 5 min' }
      ]
    },
    'analytics': {
      title: 'Advanced Analytics',
      description: 'Make data-driven decisions with powerful analytics and insights.',
      features: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: 'Real-time Dashboards',
          description: 'Live data visualization and monitoring capabilities.'
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: 'Predictive Analytics',
          description: 'Forecast trends and make proactive business decisions.'
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: 'Custom Reports',
          description: 'Generate detailed reports tailored to your business needs.'
        }
      ],
      stats: [
        { label: 'Data Points Analyzed', value: '1M+' },
        { label: 'Report Accuracy', value: '98.5%' },
        { label: 'Time Saved', value: '40 hours/week' }
      ]
    }
  };

  const currentContent = content[tabs[activeTab].id as keyof typeof content];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Dynamic Content Showcase
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-1">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="cyber-card hologram-card p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{currentContent.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{currentContent.description}</p>
                
                <div className="space-y-4 mb-8">
                  {currentContent.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center cyber-button px-6 py-3"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>

              {/* Right Column - Stats */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Key Metrics</h4>
                <div className="grid grid-cols-1 gap-6">
                  {currentContent.stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;