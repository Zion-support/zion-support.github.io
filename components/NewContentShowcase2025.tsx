'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Brain,
  Globe,
  Target,
  Award,
  CheckCircle,
  PlayCircle,
  BookOpen,
  Lightbulb
} from 'lucide-react';

const NewContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-solutions': {
      title: 'Revolutionary AI Solutions 2025',
      subtitle: 'Transform Your Business with Cutting-Edge AI Technology',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      features: [
        {
          title: 'Advanced Machine Learning',
          description: 'Deploy sophisticated ML models that learn and adapt to your business needs',
          icon: Brain,
          stats: '95% Accuracy'
        },
        {
          title: 'Natural Language Processing',
          description: 'Understand and process human language with unprecedented accuracy',
          icon: BookOpen,
          stats: '50+ Languages'
        },
        {
          title: 'Computer Vision',
          description: 'Analyze and interpret visual data for enhanced decision making',
          icon: Eye,
          stats: 'Real-time Processing'
        },
        {
          title: 'Predictive Analytics',
          description: 'Forecast trends and behaviors with advanced predictive models',
          icon: TrendingUp,
          stats: '99.7% Precision'
        }
      ]
    },
    'automation': {
      title: 'Intelligent Automation Suite',
      subtitle: 'Streamline Operations with Smart Automation',
      icon: Zap,
      color: 'from-green-600 to-teal-600',
      features: [
        {
          title: 'Workflow Automation',
          description: 'Automate complex business processes with intelligent workflows',
          icon: Zap,
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
          description: 'Provide 24/7 customer support with intelligent chatbots',
          icon: MessageCircle,
          stats: '90% Satisfaction'
        },
        {
          title: 'Data Integration',
          description: 'Seamlessly connect and synchronize data across systems',
          icon: Link,
          stats: 'Real-time Sync'
        }
      ]
    },
    'security': {
      title: 'Advanced Cybersecurity',
      subtitle: 'Protect Your Digital Assets with Next-Gen Security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      features: [
        {
          title: 'Threat Detection',
          description: 'Identify and neutralize threats before they impact your business',
          icon: Shield,
          stats: '99.9% Detection Rate'
        },
        {
          title: 'Zero Trust Architecture',
          description: 'Implement comprehensive security with zero trust principles',
          icon: Lock,
          stats: '100% Coverage'
        },
        {
          title: 'Compliance Management',
          description: 'Ensure compliance with industry standards and regulations',
          icon: CheckCircle,
          stats: 'GDPR, HIPAA, SOX'
        },
        {
          title: 'Incident Response',
          description: 'Rapid response and recovery from security incidents',
          icon: AlertTriangle,
          stats: '< 5 Min Response'
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Zion Tech Group transformed our operations with their AI solutions. We saw a 300% increase in efficiency within the first month.',
      avatar: 'SJ',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      content: 'The automation suite saved us 40 hours per week. Our team can now focus on strategic initiatives instead of repetitive tasks.',
      avatar: 'MC',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Security Director, SecureCorp',
      content: 'Their cybersecurity solutions prevented 3 major breaches in the past year. The ROI has been incredible.',
      avatar: 'ER',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Clients Served', value: '500+', icon: Users },
    { label: 'Projects Completed', value: '1,200+', icon: Target },
    { label: 'Success Rate', value: '99.8%', icon: Award },
    { label: 'Average ROI', value: '300%', icon: TrendingUp }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Innovations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge technology solutions designed to revolutionize your business operations and drive unprecedented growth.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center mb-12"
        >
          {Object.entries(contentSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 m-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              <section.icon className="w-5 h-5 inline mr-2" />
              {section.title}
            </button>
          ))}
        </motion.div>

        {/* Content Section */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${contentSections[activeTab].color} rounded-full mb-6`}>
              <contentSections[activeTab].icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {contentSections[activeTab].title}
            </h3>
            <p className="text-xl text-gray-600">
              {contentSections[activeTab].subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contentSections[activeTab].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${contentSections[activeTab].color} rounded-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 mb-3">
                      {feature.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {feature.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies already experiencing the power of our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025;