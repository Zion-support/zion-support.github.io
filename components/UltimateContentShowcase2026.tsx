'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Rocket,
  Globe,
  Cpu,
  Database,
  Lock,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-solutions': {
      title: 'Revolutionary AI Solutions 2026',
      subtitle: 'Transform Your Business with Next-Generation AI',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      features: [
        {
          title: 'Neural Network Optimization',
          description: 'Advanced AI models that learn and adapt in real-time',
          icon: Cpu,
          stats: '99.7% Accuracy'
        },
        {
          title: 'Predictive Analytics',
          description: 'Forecast trends and opportunities with unprecedented precision',
          icon: TrendingUp,
          stats: '300% ROI Increase'
        },
        {
          title: 'Natural Language Processing',
          description: 'Understand and respond to human language with human-like intelligence',
          icon: MessageSquare,
          stats: '50+ Languages'
        },
        {
          title: 'Computer Vision',
          description: 'Advanced image and video analysis for business insights',
          icon: Eye,
          stats: 'Real-time Processing'
        }
      ]
    },
    'automation': {
      title: 'Intelligent Automation Suite',
      subtitle: 'Automate Complex Workflows with AI-Powered Precision',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      features: [
        {
          title: 'Workflow Automation',
          description: 'Streamline business processes with intelligent automation',
          icon: Workflow,
          stats: '80% Time Saved'
        },
        {
          title: 'Document Processing',
          description: 'Automatically extract and process information from documents',
          icon: FileText,
          stats: '1000+ Docs/Hour'
        },
        {
          title: 'Customer Service Bots',
          description: '24/7 intelligent customer support with human-like interactions',
          icon: Headphones,
          stats: '95% Satisfaction'
        },
        {
          title: 'Data Integration',
          description: 'Seamlessly connect and synchronize data across platforms',
          icon: Database,
          stats: 'Real-time Sync'
        }
      ]
    },
    'security': {
      title: 'Advanced Cybersecurity',
      subtitle: 'Protect Your Digital Assets with Military-Grade Security',
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      features: [
        {
          title: 'Threat Detection',
          description: 'AI-powered threat detection and prevention systems',
          icon: AlertTriangle,
          stats: '99.9% Detection Rate'
        },
        {
          title: 'Zero Trust Architecture',
          description: 'Implement zero-trust security principles across your organization',
          icon: Lock,
          stats: '100% Secure'
        },
        {
          title: 'Compliance Management',
          description: 'Automated compliance monitoring and reporting',
          icon: CheckCircle,
          stats: 'GDPR, HIPAA, SOX'
        },
        {
          title: 'Incident Response',
          description: 'Rapid response and recovery from security incidents',
          icon: Shield,
          stats: '< 5 Min Response'
        }
      ]
    },
    'cloud': {
      title: 'Cloud Infrastructure Solutions',
      subtitle: 'Scalable, Secure, and High-Performance Cloud Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      features: [
        {
          title: 'Multi-Cloud Strategy',
          description: 'Optimize performance and reduce costs with multi-cloud architecture',
          icon: Globe,
          stats: '50% Cost Reduction'
        },
        {
          title: 'Auto-Scaling',
          description: 'Automatically scale resources based on demand',
          icon: TrendingUp,
          stats: '99.9% Uptime'
        },
        {
          title: 'Edge Computing',
          description: 'Process data closer to the source for faster response times',
          icon: Server,
          stats: '< 10ms Latency'
        },
        {
          title: 'Disaster Recovery',
          description: 'Comprehensive backup and disaster recovery solutions',
          icon: RotateCcw,
          stats: 'RTO < 1 Hour'
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      company: 'Fortune 500',
      content: 'Zion Tech Group transformed our entire IT infrastructure. We achieved 300% ROI in just 3 months.',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      company: 'Startup',
      content: 'The AI solutions provided by Zion Tech Group helped us scale from 10 to 1000 employees seamlessly.',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Operations, GlobalCorp',
      company: 'Enterprise',
      content: 'Their automation solutions saved us $2M annually while improving efficiency by 400%.',
      avatar: '👩‍🚀',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '10,000+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99.8%', icon: Star },
    { label: 'Average ROI', value: '300%', icon: TrendingUp },
    { label: 'Countries Served', value: '50+', icon: Globe }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-medium">2026 Ultimate Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Solutions for 2026
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge AI, automation, 
            cybersecurity, and cloud solutions designed to transform your business.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentSections).map(([key, section]) => {
            const Icon = section.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                <span className="font-medium">{section.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {(() => {
              const section = contentSections[activeTab];
              const Icon = section.icon;
              
              return (
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${section.color} mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {section.title}
                  </h3>
                  
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {section.subtitle}
                  </p>
                </div>
              );
            })()}

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentSections[activeTab].features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${contentSections[activeTab].color}`}>
                          <FeatureIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-bold text-green-400 bg-green-400/20 px-3 py-1 rounded-full">
                          {feature.stats}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {feature.title}
                      </h4>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                    <StatIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                    <div className="text-purple-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h3>
              
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of companies already experiencing the power of our 
                revolutionary technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <Monitor className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;