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

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Star, Users, Shield, Cloud, BarChart3, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
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


import {useState, useEffect} from 'react';
import {ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';

interface ContentItem {id: string;,
'use client';
import { useState, useEffect} from 'react';
import { ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';

interface ContentItem {
  id: string;,
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);

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
            {isPlaying ? (
              <Pause className="w-5h-5ml-2"   /></Pause>
  ) : (
              <Play className="w-5h-5ml-2"   /></Play>
  )}
          </button>

          <button
            onClick={nextItem}
            className="p-2 rounded-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="Next item" />
            <ChevronRight className="w-5h-5text-white" />
          </button>
        </div>

        <div className="flex items-centergap-2">
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
      <div className="bg-white/5 backdrop-blur-lg rounded-2xll p-8 border border-white/20 hover:border-white/30transition-allduration-300">
        <div className="flex items-startgap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-centerjustify-center">
              <IconComponent className="w-8h-8text-white" />
            </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <span className="text-smtext-cyan-400font-medium"  >{currentItem.category}</span>
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
                  <span  >{feature}</span>
                </div>
  ))}
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {currentItem.price && (
                <div className="text-cyan-400font-semiboldtext-lg">{currentItem.price}
                </div>
  )}

              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-centergap-2" />
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
        </div>
import React from 'react';

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = () => {
  return (
    <div className="dynamiccontentshowcase">
      <h2>DynamicContentShowcase</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

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

export default DynamicContentShowcase;
