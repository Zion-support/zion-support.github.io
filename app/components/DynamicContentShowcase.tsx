<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
=======
import React from 'react';
const DynamicContentShowcase: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Latest Innovations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
            <p className="text-gray-200 mb-4">Revolutionary AI technology that transforms how businesses operate.</p>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-200 mb-4">Next-generation computing power for complex problem solving.</p>
            <button className="bg-white text-cyan-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore
            </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1573
=======
'use client';
<<<<<<< HEAD
import React, {useState, useEffect}from 'react';
import {Cloud, Zap, Shield, Globe, Brain, Star}}from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {,
=======
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Cloud, Zap, Shield, Brain, Globe, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
import { Cloud, Zap, Shield, Brain, Star, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
import { Cloud, Zap, Shield, Brain, Globe, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
import { Cloud, Zap, Shield, Globe, Brain, Star, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
  const [currentFeature, setCurrentFeature] = useState(0);

=======
'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award } from 'lucide-react'
const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  const features = [
    {
      id: 1,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'AI Solutions',
<<<<<<< HEAD
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      icon: Brain,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      color: 'from-purple-500 to-pink-600',},
    {id: 2,
      description: 'Advanced AI algorithms that learn and adapt to your business needs in real-time'
<<<<<<< HEAD
      color: 'from-orange-500 to-red-600',},
    {id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
<<<<<<< HEAD
      description: 'Scale effortlessly across multiple regions with automatic load balancing'
=======
=======
'use client';
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
interface Feature {
  icon: React.ComponentType<any>
}
=======
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Brain, Globe } from 'lucide-react';

interface ShowcaseItem {
  id: string;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: {
    value: string;
    label: string;
  }[];
<<<<<<< HEAD
};
interface Testimonial {
  name: string
}
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
};
const DynamicContentShowcase: React.FC = () => {
}
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const features: Feature[] = [
=======
  features: string[];
  category: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showcaseItems: ShowcaseItem[] = [
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
    {
      id: '1',
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      stats: [
        { value: '95%', label: 'Accuracy' },
<<<<<<< HEAD
        { value: '10x', label: 'Faster' },
        { value: '24/7', label: 'Learning' }
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
<<<<<<< HEAD
      description: 'Optimized for speed with sub-second response times and seamless user experience'
=======
      description: 'Optimized for speed with sub-second response times and seamless user experience',
=======
        { value: '3x', label: 'Faster Insights' },
        { value: '24/7', label: 'Monitoring' }
      ],
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Automated reporting',
        'Custom dashboards'
      ],
      category: 'AI Solutions'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern businesses.',
      icon: <Globe className="w-8 h-8 text-green-500" />,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
      stats: [
        { value: '99.9%', label: 'Uptime' },
<<<<<<< HEAD
        { value: '10M+', label: 'Requests' }
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
    {
      icon: Shield,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      title: 'Enterprise Security',
<<<<<<< HEAD
      description: 'Bank-level security with end-to-end encryption and compliance standards'
<<<<<<< HEAD
      description: 'Scale effortlessly across multiple regions with automatic load balancing'
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Support' }
      ]
  useEffect(() => {];];
    const timer = setInterval(() => {;
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);
=======
import React, { useState, useEffect } from "react";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

interface DynamicContentShowcaseProps {
  items?: ContentItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items = [
    {
      id: "1",
      title: "AI-Powered Solutions",
      description:
        "Transform your business with cutting-edge artificial intelligence technology.",
      image: "/api/placeholder/400/300",
      category: "AI Solutions",
      featured: true,
=======
=======
      description: 'Bank-level security with end-to-end encryption and compliance standards',
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Breaches' }
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    },
    {
      id: "2",
      title: "Cloud Migration",
      description:
        "Seamlessly migrate your infrastructure to the cloud with our expert services.",
      image: "/api/placeholder/400/300",
      category: "Cloud Services",
    },
    {
      id: "3",
      title: "Data Analytics",
      description:
        "Unlock insights from your data with advanced analytics and visualization.",
      image: "/api/placeholder/400/300",
      category: "Data Services",
    },
  ],
  autoPlay = true,
  interval = 5000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
=======
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',},
    {id: 5,
      title: 'Global Scalability',
<<<<<<< HEAD
      description: 'Scale effortlessly across multiple regions with automatic load balancing.',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600',}];
=======
      description: 'Transform your business with cutting-edge AI technology and automation.',
=======
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
=======
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      icon: Brain,
      color: 'from-blue-500 to-purple-600'
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600'
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Cloud,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 3,
<<<<<<< HEAD
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
<<<<<<< HEAD
    },
    {
      id: 4,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.',
      icon: Globe,
      color: 'from-blue-500 to-cyan-600'
=======
<<<<<<< HEAD
      description: 'Scale effortlessly across multiple regions with automatic load balancing'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
    }
  ];
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      icon: Zap,
<<<<<<< HEAD
      color: 'from-orange-500 to-red-600'
=======
      color: 'from-purple-500 to-pink-600'
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
<<<<<<< HEAD
      color: 'from-red-500 to-pink-600'
    }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600'
    }
  ];
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8

=======
      description: 'Scale effortlessly across multiple regions with automatic load balancing',
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Support' }
];
    };
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const benefits = [
];
'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
<<<<<<< HEAD
  ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8

  const testimonials = [
    {name: 'Sarah Johnson',
=======
<<<<<<< HEAD
  ]

  const testimonials = [
=======
  ];
  const testimonials: Testimonial[] = [
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    {
      name: 'Sarah Johnson',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible.',
      rating: 5;,},
    {name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5;,},
    {name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Outstanding security features and seamless integration. Perfect for our needs.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      rating: 5;,}];

  useEffect(() => {const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);}, 3000);
=======
=======
      rating: 5
    }
<<<<<<< HEAD
  ];
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
      rating: 5
=======
        { value: '50%', label: 'Cost Savings' },
        { value: '10x', label: 'Scalability' }
      ],
      features: [
        'Auto-scaling infrastructure',
        'Global CDN',
        'Disaster recovery',
        'Security compliance'
      ],
      category: 'Cloud Services'
    },
    {
      id: '3',
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your business from threats.',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      stats: [
        { value: '100%', label: 'Protection' },
        { value: '0', label: 'Breaches' },
        { value: '24/7', label: 'Monitoring' }
      ],
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Incident response',
        'Compliance management'
      ],
      category: 'Security'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
    }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
      rating: 5
    }
  ];
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }, 4000);
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
    }, 5000);
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
    }, 5000);
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
    }, 5000);
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

  useEffect(() => {
<<<<<<< HEAD
    if (!isPlaying) return;

<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
    const timer = setInterval(() => {
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  return(<div className="py-16 px-4">)</div>
      <div className="max-w-7xl mx-auto">{/* Header */</div>} <div className="text-center mb-16">
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
=======
=======
  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
=======
<<<<<<< HEAD
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [features.length])
=======
];;
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, testimonials.length]);
  const nextTestimonial = () => {
}
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
}
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const togglePlayPause = () => {
}
    setIsPlaying(!isPlaying);
  };
  const currentTestimonial = testimonials[currentIndex];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
            Dynamic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our AI and IT solutions through interactive demonstrations and real-world applications.</p>
=======
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === showcaseItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [showcaseItems.length]);

  const currentItem = showcaseItems[activeIndex];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dynamic Solutions Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge solutions and see how they can transform your business.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        {/* Features Carousel */} <div className="mb-16">
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">,</div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {features[currentFeature].title} </h3>
              <p className="text-xl text-gray-300 mb-6">{features[currentFeature].description</p>} </p>
              <div className="flex space-x-2">{features.map((_, index) => (</div>
                  <button;
                    key={index}onClick={() =>setCurrentFeature(index)</button>}className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentFeature ? 'bg-blue-500' : 'bg-gray-400'}`}
                  />
                ))}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
    ))
=======
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions deliver unmatched performance, security, and scalability for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                {feature.stats && (
                  <div className="grid grid-cols-3 gap-4">
                    {feature.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-white">{currentTestimonial.name}</div>
                    <div className="text-gray-400">{currentTestimonial.role}</div>
                    <div className="text-purple-400 text-sm">{currentTestimonial.company}</div>
                  </div>
                </div>
              </div>
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {features[currentFeature].title}
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              {features[currentFeature].description}
            </p>
<<<<<<< HEAD
            <div className="space-y-3">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    index === currentFeature
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5" />
                    <span className="font-medium">{feature.title}</span>
                  </div>
                </button>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
        {/* Feature Showcase */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {features[currentFeature].title}
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                {features[currentFeature].description}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={prevFeature}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextFeature}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
            </div>
          </div>

<<<<<<< HEAD
            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
=======
<<<<<<< HEAD
            {/* Feature Visual */} <div className="flex justify-center">
              <div className={`w-80 h-80 bg-gradient-to-br ${features[currentFeature].color}rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                {React.createElement(features[currentFeature].icon, { className: "w-32 h-32 text-white/90 relative z-10" ,)})}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
=======
=======
        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">{features[currentFeature].title}</h3>
            <p className="text-lg text-gray-300 mb-6">{features[currentFeature].description}</p>
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeature ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentFeature ? 'bg-blue-500' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
          {/* Feature Visual */}
          <div className="flex justify-center">
            <div className={`w-80 h-80 bg-gradient-to-br ${features[currentFeature].color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              {React.createElement(features[currentFeature].icon, { className: "w-32 h-32 text-white/90 relative z-10" })}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
=======
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  {currentItem.icon}
                </div>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                  {currentItem.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {currentItem.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {currentItem.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {currentItem.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
              <ul className="grid grid-cols-2 gap-2">
                {currentItem.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Visual Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {currentItem.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{currentItem.title}</h4>
                  <p className="text-gray-300">{currentItem.category}</p>
                </div>

                <div className="space-y-4">
                  {currentItem.stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">{stat.label}</span>
                      <span className="text-white font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-purple-500 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
=======
=======
        ))}
      </div>
    </section>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1573

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
  );
};

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our dynamiccontentshowcase solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your dynamiccontentshowcase needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
export default DynamicContentShowcasePage;
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <feature.icon className="w-6 h-6" />
        {/* Benefits Section */} <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h3>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{benefit}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
              </div>
            ))}
=======
      </section>
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions deliver unmatched performance, security, and scalability for modern businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
                  <feature .icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                {feature.stats && (
                  <div className="grid grid-cols-3 gap-4">
                    {feature.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                      </div>
                    ))};
                  </div>
                )};
              </div>
            ))};
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))};
                </div>
                <blockquote className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-white">{currentTestimonial.name}</div>
                    <div className="text-gray-400">{currentTestimonial.role}</div>
                    <div className="text-purple-400 text-sm">{currentTestimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prevTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={togglePlayPause}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              <button onClick={nextTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                  }`};
                />
              ))};
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))};
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          </div>
<<<<<<< HEAD
        {/* Testimonials Section */} <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            {testimonials.map((testimonial, index) => (
              <div key={index}className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div>
                    <Star key={i}className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content</p>}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name</p>}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role</p>}, {testimonial.company}</p>
                </div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience the power of our AI and IT solutions with interactive demos and live examples.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">AI Demo</h4>
              <p className="text-gray-300 text-sm mb-4">See AI in action with our interactive demos</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Try Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Cloud Trial</h4>
              <p className="text-gray-300 text-sm mb-4">Test our cloud solutions with a free trial</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Start Trial
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Security Scan</h4>
              <p className="text-gray-300 text-sm mb-4">Get a free security assessment</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Scan Now
              </button>
            </div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Experience the power of our AI and IT solutions with interactive demos and live examples.</p>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">AI Demo</h4>
              <p className="text-gray-300 text-sm mb-4">See AI in action with our interactive demos</p>
              <button className="bg-cyan-500 hover: bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">,</button>
                Try Demo;
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Cloud Trial</h4>
              <p className="text-gray-300 text-sm mb-4">Test our cloud solutions with a free trial</p>
              <button className="bg-blue-500 hover: bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">,</button>
                Start Trial;
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Security Scan</h4>
              <p className="text-gray-300 text-sm mb-4">Get a free security assessment</p>
              <button className="bg-green-500 hover: bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">,</button>
                Scan Now;
              </button>
  );
});

export default DynamicContentShowcase;
<<<<<<< HEAD
=======
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default DynamicContentShowcase
=======
  );
};
export default DynamicContentShowcase;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
export default DynamicContentShowcase;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1573
