"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight
  TrendingUp
  Users
  DollarSign
  Clock
  Target,
  CheckCircle,
  Star,
  Quote,
  Building2,
  Globe,
  Zap
} from 'lucide-react';

const EnterpriseSuccessStories = () => {
  const [activeStorysetActiveStory] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const successStories = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Technology",
      size: "Fortune 500",
      challenge: "Inefficient supply chain management causing 30% cost overruns",
      solution: "AI-powered predictive analytics and autonomous optimization",
      results: {
        costReduction: "45%",
        efficiencyGain: "60%",
        timeSaved: "2,500 hours/month",
        roi: "340%"
      },
      quote: "Zion Tech Group transformed our entire supply chain. The AI solutions delivered results beyond our expectations.",
      author: "Sarah ChenCTO",
      logo: "TC",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      company: "HealthFirst Medical",
      industry: "Healthcare",
      size: "Enterprise",
      challenge: "Patient data management and diagnostic accuracy issues",
      solution: "Neural network-powered diagnostic assistance and automated patient care workflows",
      results: {
        costReduction: "35%",
        efficiencyGain: "80%",
        timeSaved: "1,800 hours/month",
        roi: "280%"
      },
      quote: "The AI diagnostic tools have improved our accuracy by 40% while reducing processing time by 60%.",
      author: "Dr. Michael RodriguezChief Medical Officer",
      logo: "HF",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      company: "FinanceMax International",
      industry: "Financial Services",
      size: "Fortune 1000",
      challenge: "Manual risk assessment processes causing delays and errors",
      solution: "Quantum-enhanced risk modeling and real-time fraud detection systems",
      results: {
        costReduction: "50%",
        efficiencyGain: "75%",
        timeSaved: "3,200 hours/month",
        roi: "420%"
      },
      quote: "Our risk assessment accuracy improved by 65% while reducing processing time from days to minutes.",
      author: "Jennifer WalshChief Risk Officer",
      logo: "FM",
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 4,
      company: "ManufacturingPro",
      industry: "Manufacturing",
      size: "Mid-Market",
      challenge: "Production line inefficiencies and quality control issues",
      solution: "Autonomous manufacturing systems with predictive maintenance and quality optimization",
      results: {
        costReduction: "40%",
        efficiencyGain: "55%",
        timeSaved: "2,100 hours/month",
        roi: "310%"
      },
      quote: "The autonomous systems increased our production efficiency by 55% while reducing defects by 70%.",
      author: "Robert KimOperations Director",
      logo: "MP",
      color: "from-orange-500 to-red-600"
    }
  ];

  const keyMetrics = [
    {
      icon: DollarSign,
      value: "15,000%",
      label: "Average ROI",
      description: "Across all implementations"
    },
    {
      icon: Clock,
      value: "2,400",
      label: "Hours Saved",
      description: "Per month on average"
    },
    {
      icon: Target,
      value: "95%",
      label: "Success Rate",
      description: "Project completion rate"
    },
    {
      icon: Users,
      value: "500+",
      label: "Enterprises",
      description: "Successfully transformed"
    }
  ];

  const benefits = [
    "Reduced operational costs by 40-60%",
    "Increased efficiency by 50-80%",
    "Eliminated manual processes",
    "Improved decision-making accuracy",
    "Scalable and future-proof solutions",
    "24/7 autonomous operations"
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Enterprise Success Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Real Companies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how leading enterprises have transformed their operations and achieved unprecedented growth with our AI solutions.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {keyMetrics.map((metricindex) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-purple-300 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Story Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {successStories.map((storyindex) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeStory === index
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {story.company}
            </button>
          ))}
        </motion.div>

        {/* Active Story Display */}
        <motion.div
          key={activeStory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16"
        >
          {/* Story Header */}
          <div className={`h-64 bg-gradient-to-br ${successStories[activeStory].color} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 h-full flex items-center justify-center p-8">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{successStories[activeStory].logo}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {successStories[activeStory].company}
                </h3>
                <p className="text-lg opacity-90">
                  {successStories[activeStory].industry} • {successStories[activeStory].size}
                </p>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Challenge & Solution */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Challenge</h4>
                <p className="text-gray-600 mb-6">{successStories[activeStory].challenge}</p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">Solution</h4>
                <p className="text-gray-600">{successStories[activeStory].solution}</p>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Results</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cost Reduction</span>
                    <span className="font-bold text-green-600 text-lg">{successStories[activeStory].results.costReduction}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Efficiency Gain</span>
                    <span className="font-bold text-blue-600 text-lg">{successStories[activeStory].results.efficiencyGain}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Time Saved</span>
                    <span className="font-bold text-purple-600 text-lg">{successStories[activeStory].results.timeSaved}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI</span>
                    <span className="font-bold text-orange-600 text-lg">{successStories[activeStory].results.roi}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <Quote className="w-8 h-8 text-gray-400 mb-4" />
              <p className="text-lg text-gray-700 italic mb-4">
                "{successStories[activeStory].quote}"
              </p>
              <p className="font-semibold text-gray-900">— {successStories[activeStory].author}</p>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Our Solutions Deliver Results
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefitindex) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven AI solutions and expert implementation team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseSuccessStories;
