<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      id: 'ai-solutions'
      title: 'AI Solutions'
      icon: Brain;
      color: 'text-purple-400'
      bgColor: 'bg-purple-500/10'
      content: {
        title: 'Revolutionary AI Solutions',
        description: 'Transform your business with cutting-edge artificial intelligence technologies',
        features: [
          { name: 'Machine Learning Models', description: 'Custom ML models for your specific needs', icon: '🧠' },
          { name: 'Natural Language Processing', description: 'Advanced text analysis and understanding', icon: '💬' },
          { name: 'Computer Vision', description: 'Image and video analysis capabilities', icon: '👁️' },
          { name: 'Predictive Analytics', description: 'Forecast trends and make data-driven decisions', icon: 'bar-chart' }
        ],
        stats: [
          { label: 'Accuracy', value: '99.5%', icon: TrendingUp },
          { label: 'Processing Speed', value: '10 x Faster', icon: Zap },
          { label: 'Cost Reduction', value: '60%', icon: TrendingUp }
        ]
      }
    },
    {
      id: 'it-services'
      title: 'IT Services'
      icon: Shield;
      color: 'text-blue-400'
      bgColor: 'bg-blue-500/10'
      content: {
        title: 'Enterprise IT Solutions',
        description: 'Comprehensive IT services to keep your business running smoothly',
        features: [
          { name: 'Cloud Infrastructure', description: 'Scalable and secure cloud solutions', icon: '☁️' },
          { name: 'Cybersecurity', description: 'Advanced security measures and monitoring', icon: 'lock' },
          { name: 'Network Management', description: 'Optimized network performance and reliability', icon: 'globe' },
          { name: '24/7 Support', description: 'Round-the-clock technical assistance', icon: '🛠️' }
        ],
        stats: [
          { label: 'Uptime', value: '99.9%', icon: Clock },
          { label: 'Response Time', value: '< 1 min', icon: Zap },
          { label: 'Client Satisfaction', value: '98%', icon: Star }
        ]
      }
    },
    {
      id: 'digital-transformation'
      title: 'Digital Transformation'
      icon: Zap;
      color: 'text-green-400'
      bgColor: 'bg-green-500/10'
      content: {
        title: 'Digital Transformation',
        description: 'Modernize your business processes with our digital transformation services',
        features: [
          { name: 'Process Automation', description: 'Streamline workflows with intelligent automation', icon: '⚙️' },
          { name: 'Legacy Modernization', description: 'Update outdated systems and technologies', icon: '🔄' },
          { name: 'Data Migration', description: 'Secure and efficient data transfer solutions', icon: '📦' },
          { name: 'Change Management', description: 'Support your team through digital transitions', icon: 'users' }
        ],
        stats: [
          { label: 'Efficiency Gain', value: '300%', icon: TrendingUp },
          { label: 'Time Saved', value: '40 hrs/week', icon: Clock },
          { label: 'ROI', value: '250%', icon: TrendingUp }
        ]
      }
    }
  ];

<<<<<<< HEAD
  const currentTab = tabs[activeTab];

  return(<section className="py-16" aria-labelledby="showcase-heading"></section>
      <div className="container mx-auto px-4">)
        <h2 id="showcase-heading" className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">)
          Our Solutions;)
        </h2>)
),
        <div className="max-w-6xl mx-auto">),
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8"></div>
            {tabs.map((tab, index) => (
              <button;
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${}
                  activeTab === index;}
                    ? `${tab.bgColor} ${tab.color} border-2 border-current`
                    : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'}`}
                aria-selected={activeTab === index}
                role="tab"</button>
              ></button>
                <tab.icon className="w-5 h-5" /></ta>
                <span className="font-medium">{tab.title}</spa>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md: p-12 cyber-card">,
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">,
              {/* Content */}
              <div></div>
                <h3 className="text-2xl md: text-3xl font-bold text-white mb-4">,
                  {currentTab.content.title}
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed"></p>
                  {currentTab.content.description}
                </p>

                <div className="grid grid-cols-1 sm: grid-cols-2 gap-4">,
                  {currentTab.content.features.map((feature, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 hover: bg-slate-700/70 transition-colors">,
                      <div className="flex items-start space-x-3">,
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 cyber-card"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">{/* Content */}</div>
              <div></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{currentTab.content.title}</h3><p className="text-gray-300 text-lg mb-8 leading-relaxed">{currentTab.content.description}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{currentTab.content.features.map((feature, index) => (</div>
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-colors"></div>
                      <div className="flex items-start space-x-3"></div>
                        <span className="text-2xl">{feature.icon}</span>
                        <div></div>
                          <h4 className="font-semibold text-white mb-1">{feature.name}<p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-6"></div>
                <h4 className="text-xl font-semibold text-white mb-6">Key Metrics<div className="space-y-4">{currentTab.content.stats.map((stat, index) => (</div>
                    <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-4"></div>
                      <div className="flex items-center space-x-3"></div>
                        <stat.icon className={`w-6 h-6 ${currentTab.color}`} />
                        <span className="text-gray-300">{stat.label}</span><span className={`text-2xl font-bold ${currentTab.color}`}>{stat.value}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6"></div>
                  <a
                    href={`/${currentTab.id}`}
                    className={`inline-flex items-center space-x-2 ${currentTab.color} hover:opacity-80 transition-opacity font-medium`}
                  ></a>
                    <<<<span>Learn</span></<<span>More</span></span>
                    <ArrowRight className="w-4 h-4" /></ArrowRigh>
                  </a>
                </div>
              </div>
            </div>
          </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
import React from 'react';
=======
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Star, Users, Shield, Cloud, BarChart3, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb

const DynamicContentShowcase: React.FC = () => {
<<<<<<< HEAD
  return (
    <div className="dynamiccontentshowcase">
      <h2>DynamicContentShowcase</h2>
      <p>DynamicContentShowcase component.</p>
=======
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that learn and adapt to your business needs in real-time',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with sub-second response times and seamless user experience',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing',
    }
  ];

<<<<<<< HEAD
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible.',
      rating: 5;
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5;
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Outstanding security features and seamless integration. Perfect for our needs.',
      rating: 5;
    }
  ];
=======

import {useState, useEffect} from 'react';
import {ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';

interface ContentItem {id: string;,
=======
'use client';
import { useState, useEffect} from 'react';
import { ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';

interface ContentItem {
  id: string;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  title: string;,
  description: string;,
  icon: React.ComponentType<{ className?: string}>;
  features: string[];
  price?: string;
  category: string;
}

interface DynamicContentShowcaseProps {items?: ContentItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps   /> = ({const items = [{
      id: 'ai-content',
      title: 'AI Content Generation',
      description: 'Transform your content strategy with our advanced AI-powered content generation tools.',
      icon: Zap,
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support'],
      price: 'Starting at $99/month',
      category: 'AI Services'},
    {id: 'cloud-services',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud infrastructure solutions for your business.',
      icon: Cloud,
      features: ['Scalable infrastructure', '99.9% uptime', 'Global CDN'],
      price: 'Starting at $199/month',
      category: 'IT Services'},
    {id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with our comprehensive cybersecurity services and monitoring.',
      icon: Shield,
      features: ['Threat detection', 'Security audits', 'Compliance management'],
      price: 'Starting at $499/month',
      category: 'Security'}
  ],
  autoPlay = true,
  autoPlayInterval = 5000,
  className = ''
}) => {const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);

<<<<<<< HEAD
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our cutting-edge solutions through an interactive showcase of features and capabilities.
          </p>
        </div></div></div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div></div></div>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);}, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, items.length]);

  const nextItem = () => {setCurrentIndex((prev) => (prev + 1) % items.length);};

  const prevItem = () => {setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);};

  const togglePlayPause = () => {setIsPlaying(!isPlaying);};

  const currentItem = items[currentIndex];
  const IconComponent = currentItem.icon;
  return (
    <div const className = {`relative ${className}`}   /></div>
      {/* Controls */}
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <button;
            onClick="{prevItem}"
            className="p-2rou nded-full bg-white/10hover:bg-white/20 transition-colors"
            aria-label="Previous item"   /></button>
            <ChevronLeft className="w-5h-5ml-2"   /></ChevronLeft>
          </button>
          <button;
            onClick="{togglePlayPause}"
            className="p-2rou nded-full bg-white/10hover:bg-white/20 transition-colors"
            aria-label="{isPlaying" ? 'Pause' : 'Play'}   /></button>
=======
      <div className="flex items-centerjustify-betweenmb-6">
        <div className="flex items-centergap-4">
          <button
            onClick={prevItem}
            className="p-2 rounded-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="Previous item" />
            <ChevronLeft className="w-5h-5text-white" />
          </button>

          <button
            onClick={togglePlayPause}
            className="p-2 rounded-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="{isPlaying" ? 'Pause' : 'Play'} />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            {isPlaying ? (
              <Pause className="w-5h-5ml-2"   /></Pause>
  ) : (
              <Play className="w-5h-5ml-2"   /></Play>
  )}
          </button>
<<<<<<< HEAD
          <button;
            onClick="{nextItem}"
            className="p-2rou nded-full bg-white/10hover: bg-white/20 transition-colors"
            aria-label="Next item"   /></button>
            <ChevronRight className="w-5h-5ml-2"   /></ChevronRight>
          </button>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======

          <button
            onClick={nextItem}
            className="p-2 rounded-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="Next item" />
            <ChevronRight className="w-5h-5text-white" />
          </button>
        </div>

        <div className="flex items-centergap-2">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          {items.map((_, index) => (
            <button;
              key="{index}"
              onClick="{()" =   /> setCurrentIndex(index)}
              className="{`w-2" h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'}`}
              aria-label="{`Go" to item ${index + 1}`}
            />
          ))}
        </div>
      {/* Content Card */}
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <IconComponent className="w-5h-5ml-2"   /></IconComponent>
=======
      <div className="bg-white/5 backdrop-blur-lg rounded-2xll p-8 border border-white/20 hover:border-white/30transition-allduration-300">
        <div className="flex items-startgap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-centerjustify-center">
              <IconComponent className="w-8h-8text-white" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <span className="text-smtext-cyan-400font-medium"  >{currentItem.category}</span>
<<<<<<< HEAD
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4h-4tex t-yellow-400fill-current"    /></Star>
  ))}
              </div>
            <h3 className="text-2 xl font-bold text-whitemb-3"  >{currentItem.title}</h3>
            <p className="text-gray-300 mb-4">{currentItem.description}</p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {currentItem.features.map((feature, index) => (
                <div key={index} className="flex items-centertext-sm text-gray-300"   /></div>
                  <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
=======
              <div className="flex items-centergap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key="{i}" className="w-4 h-4text-yellow-400fill-current" />
                ))}
              </div>

            <h3 className="text-2 xl font-bold text-white mb-3"  >{currentItem.title}</h3>
            <p className="text-gray-300 mb-4">{currentItem.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2gap-2mb-6">
              {currentItem.features.map((feature, index) => (
                <div key="{index}" className="flex items-centertext-smtext-gray-300" />
                  <CheckCircle className="w-4 h-4 text-green-400mr-2flex-shrink-0" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                  <span  >{feature}</span>
                </div>
  ))}
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {currentItem.price && (
<<<<<<< HEAD
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{currentItem.price}
=======
                <div className="text-cyan-400font-semiboldtext-lg">{currentItem.price}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                </div>
  )}

<<<<<<< HEAD
              <button className="w-5h-5ml-2"   /></button>
                Learn More;
                <ArrowRight className="w-5h-5ml-2"   /></ArrowRight>
=======
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-centergap-2" />
                Learn More
                <ArrowRight className="w-4 h-4" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              </button>
            </div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = () => {
  return (
    <div className="dynamiccontentshowcase">
      <h2>DynamicContentShowcase</h2>
      <p>Component content coming soon.</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
    </div>
  );
};

<<<<<<< HEAD
export default DynamicContentShowcase;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (
    <section className="py-16"></section>
      <div className="container mx-auto px-4"></div>
        <div className="text-center mb-16"></div>
          <h2 className="text-4xl font-bold text-white mb-6 cyber-text neon-pulse"></h2>
            Cutting-Edge Technologies
          </h2>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto"></p>
            We leverage the latest technologies to deliver innovative solutions that drive business growth and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
          {technologies.map((tech, index) => (
            <div key={index} className="cyber-card hologram-card p-8 group hover:scale-105 transition-all duration-300"></div>
              <div className="flex items-center mb-6"></div>
                <tech.icon className={`w-12 h-12 ${tech.color} mr-4`} />
                <h3 className="text-2xl font-bold text-white">{tech.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg">{tech.description}</p>
              
              <ul className="space-y-3 mb-8"></ul>
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
              ></a>
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
export default DynamicContentShowcase;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
