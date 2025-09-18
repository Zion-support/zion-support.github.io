"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Users
  DollarSign
  Clock
  CheckCircle
  ArrowRight,
  Star,
  Award,
  Target,
  Zap,
  BarChart3,
  Globe,
  Shield,
  Lightbulb
} from 'lucide-react';

const AI2025SuccessStoriesShowcase = () => {
  const [activeStorysetActiveStory] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }5000);
    return () => clearInterval(interval);
  }[]);

  const successStories = [
    {
      id: 1,
      company: "TechCorp Solutions",
      industry: "Manufacturing",
      challenge: "Manual quality control processes causing 15% defect rate",
      solution: "AI-powered computer vision for real-time quality inspection",
      results: {
        efficiency: "+200%",
        cost: "-60%",
        quality: "99.2%",
        time: "-75%"
      },
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      testimonial: "AI transformed our production line. We now catch defects in real-time and reduced waste by 60%."
    },
    {
      id: 2,
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Manual fraud detection missing 8% of fraudulent transactions",
      solution: "Machine learning algorithms for real-time fraud detection",
      results: {
        efficiency: "+150%",
        cost: "-45%",
        quality: "99.8%",
        time: "-80%"
      },
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      testimonial: "Our fraud detection accuracy improved dramatically. We saved millions in prevented losses."
    },
    {
      id: 3,
      company: "HealthTech Partners",
      industry: "Healthcare",
      challenge: "Manual patient data analysis taking 40 hours per week",
      solution: "AI-powered medical image analysis and patient data processing",
      results: {
        efficiency: "+300%",
        cost: "-70%",
        quality: "98.5%",
        time: "-85%"
      },
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500",
      testimonial: "AI helps us diagnose patients faster and more accurately. 'It', 's revolutionizing healthcare delivery."
    },
    {
      id: 4,
      company: "RetailMax",
      industry: "E-commerce",
      challenge: "Poor customer service response times and low satisfaction",
      solution: "AI chatbot and recommendation engine for personalized shopping",
      results: {
        efficiency: "+180%",
        cost: "-50%",
        quality: "95%",
        time: "-90%"
      },
      icon: Users,
      color: "from-orange-500 to-red-500",
      testimonial: "Customer satisfaction increased by 95% and our support costs dropped by 50%. Amazing results!"
    }
  ];

  const metrics = [
    { icon: TrendingUplabel: "Average ROI"value: "340%" },
    { icon: Clocklabel: "Time Saved"value: "75%" },
    { icon: DollarSignlabel: "Cost Reduction"value: "55%" },
    { icon: CheckCirclelabel: "Success Rate"value: "98%" }
  ];

  const industries = [
    { name: "Manufacturing"count: "150+"icon: Target },
    { name: "Healthcare"count: "120+"icon: Lightbulb },
    { name: "Finance"count: "200+"icon: Shield },
    { name: "Retail"count: "180+"icon: Users },
    { name: "Education"count: "90+"icon: Award },
    { name: "Logistics"count: "110+"icon: Globe }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Award className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-purple-300 font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Results from
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Real Companies</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies across industries are achieving remarkable results with our AI solutions. 
            See the measurable impact and transformation stories.
          </p>
        </motion.div>

        {/* Success Stories Carousel */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Story Navigation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Featured Success Stories</h3>
              {successStories.map((storyindex) => (
                <motion.div
                  key={story.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeStory === index
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveStory(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${story.color}`}>
                      <story.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{story.company}</h4>
                      <p className="text-sm text-gray-300">{story.industry}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Story Display */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory}
                  initial={{ opacity: 0x: 50 }}
                  animate={{ opacity: 1x: 0 }}
                  exit={{ opacity: 0x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20"
                >
                  {/* Story Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${successStories[activeStory].color}`}>
                      <successStories[activeStory].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{successStories[activeStory].company}</h3>
                      <p className="text-purple-300 font-medium">{successStories[activeStory].industry}</p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-red-400" />
                        Challenge
                      </h4>
                      <p className="text-gray-300">{successStories[activeStory].challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                        Solution
                      </h4>
                      <p className="text-gray-300">{successStories[activeStory].solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {Object.entries(successStories[activeStory].results).map(([keyvalue]index) => (
                      <div key={key} className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-white mb-1">{value}</div>
                        <div className="text-sm text-gray-300 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-300 italic mb-2">"{successStories[activeStory].testimonial}"</p>
                        <p className="text-sm text-purple-300 font-medium">- {successStories[activeStory].company} Team</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Overall Metrics */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Proven Impact Across All Projects</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metricindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Trusted Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industryindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0scale: 0.8 }}
                animate={isVisible ? { opacity: 1scale: 1 } : {}}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-3 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                  <industry.icon className="w-6 h-6 text-purple-300 group-hover:text-white transition-colors" />
                </div>
                <div className="text-lg font-semibold text-white mb-1">{industry.name}</div>
                <div className="text-sm text-gray-400">{industry.count} companies</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven AI solutions and expert implementation team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AI2025SuccessStoriesShowcase;
