<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Users
  DollarSign
  Clock
  Target
  BarChart3,
  Zap,
  Brain,
  Shield,
  Globe,
  Award,
  ChevronRight,
  Play,
  CheckCircle,
  ArrowRight,
  Star,
  Building2,
  PieChart,
  LineChart
} from 'lucide-react';

const BusinessTransformation2025Showcase = () => {
  const [activeSectionsetActiveSection] = useState('overview');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const transformationData = {
    overview: {
      title: 'Business Transformation Overview',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      metrics: [
        { label: 'Revenue 'Increase', 'value: '340%'icon: DollarSigncolor: 'text-green-400' },
        { label: 'Cost 'Reduction', 'value: '65%'icon: TrendingUpcolor: 'text-blue-400' },
        { label: 'Efficiency 'Gain', 'value: '280%'icon: Zapcolor: 'text-yellow-400' },
        { label: 'Customer 'Satisfaction', 'value: '98%'icon: Starcolor: 'text-purple-400' }
      ]
    },
    automation: {
      title: 'Process Automation',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      metrics: [
        { label: 'Tasks 'Automated', 'value: '15,000+'icon: Targetcolor: 'text-green-400' },
        { label: 'Time 'Saved', 'value: '2,400 'hrs', 'icon: Clockcolor: 'text-blue-400' },
        { label: 'Error 'Reduction', 'value: '95%'icon: Shieldcolor: 'text-red-400' },
        { label: 'ROI 'Achieved', 'value: '450%'icon: BarChart3color: 'text-yellow-400' }
      ]
    },
    ai: {
      title: 'AI Integration',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      metrics: [
        { label: 'AI Models 'Deployed', 'value: '25+'icon: Braincolor: 'text-purple-400' },
        { label: 'Decision 'Speed', 'value: '10x 'Faster', 'icon: Zapcolor: 'text-yellow-400' },
        { label: 'Prediction 'Accuracy', 'value: '94%'icon: Targetcolor: 'text-green-400' },
        { label: 'Data 'Processing', 'value: '1M+ 'Records', 'icon: BarChart3color: 'text-blue-400' }
      ]
    },
    global: {
      title: 'Global Expansion',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      metrics: [
        { label: 'Markets 'Entered', 'value: '12'icon: Globecolor: 'text-orange-400' },
        { label: 'Revenue 'Growth', 'value: '180%'icon: TrendingUpcolor: 'text-green-400' },
        { label: 'Team 'Expansion', 'value: '300%'icon: Userscolor: 'text-blue-400' },
        { label: 'Market 'Share', 'value: '15%'icon: PieChartcolor: 'text-purple-400' }
      ]
    }
  };

  const sections = Object.entries(transformationData).map(([keydata]) => ({
    key,
    ...data
  }));

  const successStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'Manual data processing causing 40% delays',
      solution: 'AI-powered automation system',
      results: '95% faster processing60% cost reduction',
      revenue: '+$2.3M',
      icon: Building2
    },
    {
      company: 'Global Manufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Supply chain inefficiencies',
      solution: 'Predictive analytics and automation',
      results: '80% reduction in downtime45% cost savings',
      revenue: '+$5.7M',
      icon: Building2
    },
    {
      company: 'Financial Services Group',
      industry: 'Finance',
      challenge: 'Manual compliance reporting',
      solution: 'AI-driven compliance automation',
      results: '99% accuracy70% time reduction',
      revenue: '+$1.8M',
      icon: Building2
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Business Transformation 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real results from real businesses. See how companies are achieving unprecedented growth with AI and automation.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === section.key
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {section.title}
              </button>
            );
          })}
        </motion.div>

        {/* Metrics Display */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0x: 50 }}
          animate={{ opacity: 1x: 0 }}
          exit={{ opacity: 0x: -50 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {transformationData[activeSection as keyof typeof transformationData].metrics.map((metricindex) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${transformationData[activeSection as keyof typeof transformationData].color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  
                  <div className="text-gray-300 font-medium">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((storyindex) => {
              const Icon = story.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mr-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{story.company}</h3>
                        <p className="text-gray-400 text-sm">{story.industry}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Challenge</h4>
                        <p className="text-gray-300 text-sm">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Solution</h4>
                        <p className="text-gray-300 text-sm">{story.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Results</h4>
                        <p className="text-gray-300 text-sm">{story.results}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-400">
                        {story.revenue}
                      </div>
                      <div className="flex items-center text-blue-400 text-sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Verified
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already achieving remarkable growth with our AI and automation solutions. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Play className="w-5 h-5 mr-2" />
                Start Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessTransformation2025Showcase;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
