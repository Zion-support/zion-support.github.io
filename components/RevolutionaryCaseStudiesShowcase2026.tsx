'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target, 
  Award,
  ChevronRight,
  Play,
  ExternalLink,
  Star,
  BarChart3,
  Zap,
  Brain,
  Shield,
  Globe,
  Building2,
  Heart,
  Car,
  ShoppingCart,
  GraduationCap
} from 'lucide-react';

const RevolutionaryCaseStudiesShowcase2026 = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCase, setHoveredCase] = useState(null);

  const categories = {
    all: { name: 'All Industries', icon: Globe },
    enterprise: { name: 'Enterprise', icon: Building2 },
    healthcare: { name: 'Healthcare', icon: Heart },
    automotive: { name: 'Automotive', icon: Car },
    retail: { name: 'Retail', icon: ShoppingCart },
    education: { name: 'Education', icon: GraduationCap }
  };

  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing: 340% ROI in 6 Months',
      company: 'Global Manufacturing Corp',
      industry: 'enterprise',
      category: 'Enterprise',
      description: 'Transformed their entire supply chain with AI-powered automation, reducing costs by $2.3M annually while improving efficiency by 340%.',
      challenge: 'Manual processes causing delays and errors in supply chain management',
      solution: 'Implemented AI-powered predictive analytics and automated workflow systems',
      results: {
        roi: '340%',
        costSavings: '$2.3M',
        efficiency: '+340%',
        timeReduction: '75%',
        accuracy: '99.2%'
      },
      duration: '6 months',
      teamSize: '50+ employees',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI Automation', 'Supply Chain', 'ROI', 'Enterprise'],
      testimonial: {
        quote: "The AI implementation exceeded our wildest expectations. We've never seen such dramatic improvements in such a short time.",
        author: "Sarah Johnson",
        position: "CTO, Global Manufacturing Corp",
        avatar: "/api/placeholder/60/60"
      }
    },
    {
      id: 2,
      title: 'Healthcare System: 95% Diagnostic Accuracy with AI',
      company: 'Metro Health Network',
      industry: 'healthcare',
      category: 'Healthcare',
      description: 'Revolutionized patient diagnosis using AI-powered medical imaging analysis, achieving 95% accuracy in early disease detection.',
      challenge: 'High misdiagnosis rates and long wait times for medical imaging analysis',
      solution: 'Deployed advanced AI models for medical image analysis and diagnostic support',
      results: {
        accuracy: '95%',
        timeReduction: '80%',
        livesSaved: '500+',
        costSavings: '$1.8M',
        efficiency: '+250%'
      },
      duration: '8 months',
      teamSize: '30+ medical professionals',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI Healthcare', 'Diagnostics', 'Medical Imaging', 'Life-Saving'],
      testimonial: {
        quote: "This AI system has transformed how we diagnose patients. The accuracy and speed are remarkable.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer, Metro Health",
        avatar: "/api/placeholder/60/60"
      }
    },
    {
      id: 3,
      title: 'E-commerce Giant: $50M Revenue Increase with AI',
      company: 'TechRetail Inc',
      industry: 'retail',
      category: 'Retail',
      description: 'Boosted online sales by 45% using AI-powered personalization and recommendation engines, generating $50M in additional revenue.',
      challenge: 'Low conversion rates and poor customer experience on e-commerce platform',
      solution: 'Implemented AI-driven personalization and dynamic pricing optimization',
      results: {
        revenueIncrease: '$50M',
        conversionRate: '+45%',
        customerSatisfaction: '4.8/5',
        costReduction: '30%',
        efficiency: '+200%'
      },
      duration: '4 months',
      teamSize: '25+ developers',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI E-commerce', 'Personalization', 'Revenue Growth', 'Customer Experience'],
      testimonial: {
        quote: "The AI personalization engine has been a game-changer for our business. Revenue has never been higher.",
        author: "Jennifer Martinez",
        position: "VP of Technology, TechRetail",
        avatar: "/api/placeholder/60/60"
      }
    },
    {
      id: 4,
      title: 'Automotive Leader: Autonomous Vehicle AI Breakthrough',
      company: 'Future Motors',
      industry: 'automotive',
      category: 'Automotive',
      description: 'Developed cutting-edge AI systems for autonomous vehicles, achieving 99.9% safety rating in testing phases.',
      challenge: 'Creating safe and reliable AI systems for autonomous vehicle navigation',
      solution: 'Built advanced neural networks for real-time decision making and obstacle detection',
      results: {
        safetyRating: '99.9%',
        testMiles: '1M+',
        accidentsPrevented: '100+',
        efficiency: '+180%',
        costReduction: '40%'
      },
      duration: '12 months',
      teamSize: '100+ engineers',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['Autonomous Vehicles', 'AI Safety', 'Neural Networks', 'Innovation'],
      testimonial: {
        quote: "Our AI-powered autonomous system is setting new industry standards for safety and reliability.",
        author: "David Park",
        position: "Head of AI, Future Motors",
        avatar: "/api/placeholder/60/60"
      }
    },
    {
      id: 5,
      title: 'University: AI-Powered Learning Platform Success',
      company: 'Tech University',
      industry: 'education',
      category: 'Education',
      description: 'Created personalized learning experiences for 50,000+ students using AI, improving graduation rates by 35%.',
      challenge: 'One-size-fits-all education approach leading to poor student outcomes',
      solution: 'Developed AI-driven adaptive learning platform with personalized content delivery',
      results: {
        graduationRate: '+35%',
        studentSatisfaction: '4.7/5',
        learningEfficiency: '+280%',
        costSavings: '$3.2M',
        studentsServed: '50K+'
      },
      duration: '10 months',
      teamSize: '40+ educators',
      featured: false,
      image: '/api/placeholder/600/400',
      tags: ['AI Education', 'Personalized Learning', 'Student Success', 'Innovation'],
      testimonial: {
        quote: "The AI learning platform has revolutionized how we educate students. Results speak for themselves.",
        author: "Professor Lisa Wang",
        position: "Dean of Technology, Tech University",
        avatar: "/api/placeholder/60/60"
      }
    },
    {
      id: 6,
      title: 'Financial Services: AI Fraud Detection Excellence',
      company: 'SecureBank International',
      industry: 'enterprise',
      category: 'Financial Services',
      description: 'Reduced fraud by 98% using AI-powered detection systems, saving $15M in potential losses.',
      challenge: 'Increasing sophisticated fraud attempts costing millions in losses',
      solution: 'Implemented real-time AI fraud detection with machine learning models',
      results: {
        fraudReduction: '98%',
        moneySaved: '$15M',
        falsePositives: '-90%',
        efficiency: '+320%',
        accuracy: '99.5%'
      },
      duration: '5 months',
      teamSize: '35+ analysts',
      featured: true,
      image: '/api/placeholder/600/400',
      tags: ['AI Security', 'Fraud Detection', 'Financial Services', 'Risk Management'],
      testimonial: {
        quote: "Our AI fraud detection system has been incredibly effective. We've never felt more secure.",
        author: "Robert Kim",
        position: "Chief Security Officer, SecureBank",
        avatar: "/api/placeholder/60/60"
      }
    }
  ];

  const filteredCases = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.industry === activeCategory);

  const featuredCases = caseStudies.filter(caseStudy => caseStudy.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Revolutionary Success Stories 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading companies across industries are transforming their businesses 
            with our AI solutions. See the measurable impact and ROI they've achieved.
          </p>
        </motion.div>

        {/* Featured Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCases.slice(0, 2).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredCase(caseStudy.id)}
                onHoverEnd={() => setHoveredCase(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {caseStudy.category}
                    </span>
                    <span className="text-xs text-gray-500">{caseStudy.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {caseStudy.description}
                  </p>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(caseStudy.results).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300"
                  >
                    <span>Read Full Case Study</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(categories).map(([key, category]) => {
            const Icon = category.icon;
            const isActive = activeCategory === key;
            return (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-md'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Case Studies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCase(caseStudy.id)}
                onHoverEnd={() => setHoveredCase(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {caseStudy.category}
                    </span>
                    <span className="text-xs text-gray-500">{caseStudy.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {caseStudy.description}
                  </p>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(caseStudy.results).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join these industry leaders and transform your business with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Start Your Transformation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors">
                Download Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryCaseStudiesShowcase2026;