'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target, 
  Award,
  ArrowRight,
  Quote,
  Star,
  CheckCircle,
  BarChart3,
  Zap,
  Globe,
  Shield
} from 'lucide-react';

const BusinessSuccessStoriesShowcase2025 = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const successStories = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      industry: 'Technology',
      logo: 'TC',
      challenge: 'Manual data processing causing 40% delays in decision-making',
      solution: 'Implemented AI-powered data analytics and automated reporting system',
      results: {
        efficiency: '+300%',
        costSavings: '$2.5M',
        timeReduction: '75%',
        satisfaction: '98%'
      },
      testimonial: {
        text: "Zion Tech Group transformed our entire data workflow. What used to take weeks now happens in minutes, and the insights are incredibly accurate.",
        author: "Sarah Johnson",
        position: "CTO, TechCorp Solutions"
      },
      metrics: [
        { icon: TrendingUp, label: 'Efficiency Gain', value: '+300%', color: 'text-green-600' },
        { icon: DollarSign, label: 'Cost Savings', value: '$2.5M', color: 'text-blue-600' },
        { icon: Clock, label: 'Time Saved', value: '75%', color: 'text-purple-600' },
        { icon: Star, label: 'Satisfaction', value: '98%', color: 'text-yellow-600' }
      ]
    },
    {
      id: 2,
      company: 'Global Retail Inc',
      industry: 'E-commerce',
      logo: 'GR',
      challenge: 'Inventory management issues leading to 25% stockouts and overstock',
      solution: 'Deployed AI-driven demand forecasting and automated inventory optimization',
      results: {
        efficiency: '+250%',
        costSavings: '$4.2M',
        timeReduction: '60%',
        satisfaction: '95%'
      },
      testimonial: {
        text: "The AI system perfectly predicted our seasonal demand patterns. We've eliminated stockouts while reducing excess inventory by 40%.",
        author: "Michael Chen",
        position: "VP Operations, Global Retail Inc"
      },
      metrics: [
        { icon: Target, label: 'Accuracy', value: '94%', color: 'text-green-600' },
        { icon: DollarSign, label: 'Revenue Increase', value: '+$4.2M', color: 'text-blue-600' },
        { icon: BarChart3, label: 'Stockouts', value: '-90%', color: 'text-red-600' },
        { icon: Award, label: 'ROI', value: '450%', color: 'text-purple-600' }
      ]
    },
    {
      id: 3,
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      logo: 'HT',
      challenge: 'Patient data scattered across 15 different systems causing treatment delays',
      solution: 'Created unified AI-powered patient management platform with predictive analytics',
      results: {
        efficiency: '+400%',
        costSavings: '$1.8M',
        timeReduction: '80%',
        satisfaction: '99%'
      },
      testimonial: {
        text: "Our patient care has never been more efficient. The AI helps us identify high-risk patients before issues escalate, saving lives daily.",
        author: "Dr. Emily Rodriguez",
        position: "Chief Medical Officer, HealthTech Innovations"
      },
      metrics: [
        { icon: Shield, label: 'Patient Safety', value: '+99%', color: 'text-green-600' },
        { icon: Clock, label: 'Response Time', value: '-80%', color: 'text-blue-600' },
        { icon: Users, label: 'Patient Satisfaction', value: '99%', color: 'text-purple-600' },
        { icon: Zap, label: 'Diagnosis Speed', value: '+300%', color: 'text-yellow-600' }
      ]
    },
    {
      id: 4,
      company: 'FinanceFlow Systems',
      industry: 'Financial Services',
      logo: 'FF',
      challenge: 'Manual fraud detection missing 15% of fraudulent transactions',
      solution: 'Implemented real-time AI fraud detection with machine learning models',
      results: {
        efficiency: '+500%',
        costSavings: '$6.7M',
        timeReduction: '90%',
        satisfaction: '97%'
      },
      testimonial: {
        text: "The AI system catches fraud attempts in real-time that our old system missed. We've prevented millions in potential losses.",
        author: "David Park",
        position: "Head of Security, FinanceFlow Systems"
      },
      metrics: [
        { icon: Shield, label: 'Fraud Detection', value: '99.8%', color: 'text-green-600' },
        { icon: DollarSign, label: 'Loss Prevention', value: '$6.7M', color: 'text-blue-600' },
        { icon: Clock, label: 'Detection Time', value: '<1s', color: 'text-purple-600' },
        { icon: Award, label: 'False Positives', value: '-95%', color: 'text-yellow-600' }
      ]
    }
  ];

  const currentStory = successStories[activeStory];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-green-50 to-blue-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Business Success Stories 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Real Results from Real Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies across industries have transformed their operations 
            and achieved remarkable results with our AI solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Story Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h3>
            {successStories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => setActiveStory(index)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                  activeStory === index
                    ? 'bg-white shadow-lg border-2 border-green-500'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold">
                    {story.logo}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.company}</h4>
                    <p className="text-sm text-gray-600">{story.industry}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Company Header */}
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">
                        {currentStory.logo}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{currentStory.company}</h3>
                        <p className="text-green-100">{currentStory.industry} Industry</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{currentStory.results.efficiency}</div>
                      <div className="text-green-100">Efficiency Gain</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-500" />
                        Challenge
                      </h4>
                      <p className="text-gray-600 bg-red-50 p-4 rounded-lg">
                        {currentStory.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-green-500" />
                        Solution
                      </h4>
                      <p className="text-gray-600 bg-green-50 p-4 rounded-lg">
                        {currentStory.solution}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {currentStory.metrics.map((metric, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                          <div className={`w-8 h-8 mx-auto mb-2 ${metric.color}`}>
                            <metric.icon className="w-full h-full" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 text-lg italic mb-4">
                          "{currentStory.testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {currentStory.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{currentStory.testimonial.author}</div>
                            <div className="text-sm text-gray-600">{currentStory.testimonial.position}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              Join these industry leaders and transform your business with our proven AI solutions. 
              Start your success journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center justify-center gap-2">
                Start Your Transformation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessSuccessStoriesShowcase2025;