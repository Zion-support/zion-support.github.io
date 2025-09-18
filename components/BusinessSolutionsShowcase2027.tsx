<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2
  TrendingUp
  Users
  Shield
  Zap
  Target
  BarChart3
  Globe
  Cpu
  Database
  Cloud
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Rocket,
  Brain,
  Lock
} from 'lucide-react';

const BusinessSolutionsShowcase2027 = () => {
  const [activeCategorysetActiveCategory] = useState('enterprise');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const categories = {
    enterprise: {
      title: 'Enterprise Solutions',
      subtitle: 'Comprehensive enterprise-grade solutions for large organizations',
      icon: Building2,
      color: 'from-blue-600 to-indigo-600',
      solutions: [
        {
          title: 'AI-Powered Business Intelligence',
          description: 'Advanced analytics and insights powered by machine learning algorithms',
          features: ['Real-time 'Analytics', 'Predictive 'Modeling', 'Custom Dashboards'],
          icon: BarChart3,
          roi: '300% ROI'
        },
        {
          title: 'Enterprise Security Suite',
          description: 'Comprehensive security solutions protecting your digital assets',
          features: ['Zero-Trust 'Architecture', 'AI Threat 'Detection', 'Compliance Management'],
          icon: Shield,
          roi: '99.9% Security'
        },
        {
          title: 'Cloud Infrastructure Management',
          description: 'Scalable cloud solutions optimized for enterprise workloads',
          features: ['Multi-Cloud 'Support', 'Auto-'Scaling', 'Cost Optimization'],
          icon: Cloud,
          roi: '50% Cost Reduction'
        }
      ]
    },
    startup: {
      title: 'Startup Solutions',
      subtitle: 'Rapid deployment solutions designed for growing startups',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      solutions: [
        {
          title: 'Rapid MVP Development',
          description: 'Fast-track your product development with our proven frameworks',
          features: ['2-Week 'Delivery', 'Scalable 'Architecture', 'Technical Support'],
          icon: Zap,
          roi: '80% Faster Launch'
        },
        {
          title: 'Growth Analytics Platform',
          description: 'Data-driven insights to accelerate your startup growth',
          features: ['User Behavior 'Analysis', 'Conversion 'Tracking', 'Growth Hacking Tools'],
          icon: TrendingUp,
          roi: '200% Growth Rate'
        },
        {
          title: 'Automated Operations',
          description: 'Streamline operations with intelligent automation tools',
          features: ['Process 'Automation', 'Workflow 'Optimization', 'Resource Management'],
          icon: Settings,
          roi: '60% Efficiency Gain'
        }
      ]
    },
    smb: {
      title: 'SMB Solutions',
      subtitle: 'Affordable yet powerful solutions for small and medium businesses',
      icon: Users,
      color: 'from-purple-600 to-pink-600',
      solutions: [
        {
          title: 'Digital Transformation Package',
          description: 'Complete digital transformation tailored for SMBs',
          features: ['Process 'Digitization', 'Customer 'Experience', 'Operational Efficiency'],
          icon: Lightbulb,
          roi: '150% Productivity'
        },
        {
          title: 'Customer Relationship Management',
          description: 'AI-powered CRM to enhance customer relationships',
          features: ['Lead 'Management', 'Sales 'Automation', 'Customer Insights'],
          icon: Target,
          roi: '40% Sales Increase'
        },
        {
          title: 'Financial Management Suite',
          description: 'Comprehensive financial tools for better business management',
          features: ['Expense 'Tracking', 'Revenue 'Analytics', 'Financial Forecasting'],
          icon: BarChart3,
          roi: '25% Cost Savings'
        }
      ]
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEOTechCorp",
      company: "Fortune 500",
      content: "Zion Tech Group transformed our entire digital infrastructure. The results exceeded our expectations with 300% ROI in just 6 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "FounderStartupXYZ",
      company: "Series A Startup",
      content: "Their rapid MVP development helped us launch 3 months ahead of schedule. The quality and speed were incredible.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations DirectorLocalBiz",
      company: "SMB",
      content: "The digital transformation package revolutionized our operations. 'We', 're now 60% more efficient and our customers love the new experience.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "500+"label: "Projects Completed"icon: CheckCircle },
    { number: "99.9%"label: "Client Satisfaction"icon: Star },
    { number: "300%"label: "Average ROI"icon: TrendingUp },
    { number: "24/7"label: "Support Available"icon: Shield }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Business Solutions Showcase 2027
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
            enhance efficiencyand drive innovation across all industries and company sizes.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(categories).map(([keycategory]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <category.icon className="w-6 h-6" />
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Solutions Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {activeCategory && categories[activeCategory] && (
              <div className="space-y-12">
                {/* Category Header */}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${categories[activeCategory].color} mb-6`}>
                    <categories[activeCategory].icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {categories[activeCategory].title}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {categories[activeCategory].subtitle}
                  </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {categories[activeCategory].solutions.map((solutionindex) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`p-4 rounded-2xl bg-gradient-to-r ${categories[activeCategory].color}`}>
                            <solution.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                            <span className="text-sm text-blue-400 font-medium">{solution.roi}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {solution.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          {solution.features.map((featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:gap-3">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Proven Results Across Industries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((statindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={isVisible ? { opacity: 1scale: 1 } : {}}
                  transition={{ duration: 0.6delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonialindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-blue-400">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-400/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:transform hover:scale-105">
                <Rocket className="w-5 h-5" />
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <Award className="w-5 h-5" />
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessSolutionsShowcase2027;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
