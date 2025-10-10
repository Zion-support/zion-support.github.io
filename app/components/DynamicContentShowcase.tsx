'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, TrendingUp, Clock, Shield, Zap, Brain } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      content: {,
    title: 'Revolutionary AI Solutions',
        description: 'Transform your business with cutting-edge artificial intelligence technologies',
        features: [
          { name: 'Machine Learning Models', description: 'Custom ML models for your specific needs', icon: '🧠' },
          { name: 'Natural Language Processing', description: 'Advanced text analysis and understanding', icon: '💬' },
          { name: 'Computer Vision', description: 'Image and video analysis capabilities', icon: '👁️' },
          { name: 'Predictive Analytics', description: 'Forecast trends and make data-driven decisions', icon: '📊' }
        ],
        stats: [
          { label: 'Accuracy', value: '99.5%', icon: TrendingUp },
          { label: 'Processing Speed', value: '10x Faster', icon: Zap },
          { label: 'Cost Reduction', value: '60%', icon: TrendingUp }
        ]
      }
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Shield,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      content: {,
    title: 'Enterprise IT Solutions',
        description: 'Comprehensive IT services to keep your business running smoothly',
        features: [
          { name: 'Cloud Infrastructure', description: 'Scalable and secure cloud solutions', icon: '☁️' },
          { name: 'Cybersecurity', description: 'Advanced security measures and monitoring', icon: '🔒' },
          { name: 'Network Management', description: 'Optimized network performance and reliability', icon: '🌐' },
          { name: '24/7 Support', description: 'Round-the-clock technical assistance', icon: '🛠️' }
        ],
        stats: [
          { label: 'Uptime', value: '99.9%', icon: Clock },
          { label: 'Response Time', value: '< 1min', icon: Zap },
          { label: 'Client Satisfaction', value: '98%', icon: Star }
        ]
      }
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      content: {,
    title: 'Digital Transformation',
        description: 'Modernize your business processes with our digital transformation services',
        features: [
          { name: 'Process Automation', description: 'Streamline workflows with intelligent automation', icon: '⚙️' },
          { name: 'Legacy Modernization', description: 'Update outdated systems and technologies', icon: '🔄' },
          { name: 'Data Migration', description: 'Secure and efficient data transfer solutions', icon: '📦' },
          { name: 'Change Management', description: 'Support your team through digital transitions', icon: '👥' }
        ],
        stats: [
          { label: 'Efficiency Gain', value: '300%', icon: TrendingUp },
          { label: 'Time Saved', value: '40hrs/week', icon: Clock },
          { label: 'ROI', value: '250%', icon: TrendingUp }
        ]
      }
    }
  ];

  const currentTab = tabs[activeTab];

  return (
    <section className="py-16" aria-labelledby="showcase-heading">
      </section><div className="container mx-auto px-4">
        <h2 id="showcase-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Our Solutions<div className="max-w-6xl mx-auto">{/* Tab Navigation */}</div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">{tabs.map((tab, index) => (<button
                key={tab.id}
                onClick={() =>setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === index
                    ? `${tab.bgColor} ${tab.color} border-2 border-current`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                aria-selected={activeTab === index}
                role="tab"</button>
              ></button>
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 cyber-card">
            </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-8">{/* Content */}</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{currentTab.content.title}</h3><p className="text-gray-300 text-lg mb-8 leading-relaxed">{currentTab.content.description}<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{currentTab.content.features.map((feature, index) => (</div>
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-colors">
                      </div><div className="flex items-start space-x-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{feature.name}</h4><p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}<div className="space-y-6">
                <h4 className="text-xl font-semibold text-white mb-6">Key Metrics<div className="space-y-4">{currentTab.content.stats.map((stat, index) => (</div>
                    <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-4">
                      </div><div className="flex items-center space-x-3">
                        <stat.icon className={`w-6 h-6 ${currentTab.color}`} />
                        <span className="text-gray-300">{stat.label}</span><span className={`text-2xl font-bold ${currentTab.color}`}>{stat.value}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href={`/${currentTab.id}`}
                    className={`inline-flex items-center space-x-2 ${currentTab.color} hover:opacity-80 transition-opacity font-medium`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
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