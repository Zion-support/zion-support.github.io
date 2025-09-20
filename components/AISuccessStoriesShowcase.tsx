<<<<<<< HEAD
=======
"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Users
  DollarSign
  Clock
  ArrowRight,
  Star,
  Quote,
  Building,
  Zap,
  Shield,
  Globe,
  Brain
} from 'lucide-react';

const AISuccessStoriesShowcase = () => {
  const [activeStorysetActiveStory] = useState(0);

  const successStories = [
    {
      id: 'techcorp-ai-transformation',
      company: 'TechCorp Global',
      industry: 'Technology',
      challenge: 'Manual data processing causing 40% operational delays',
      solution: 'Implemented AI-powered data processing and automation systems',
      results: {
        efficiency: '95%',
        costReduction: '60%',
        timeSaved: '2000 hours/month',
        revenue: '+$2.5M'
      },
      testimonial: 'AI transformed our entire operation. We went from manual processes to fully automated systems in just 6 months.',
      author: 'Sarah Johnson',
      position: 'CEOTechCorp Global',
      icon: Building,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'financeai-automation',
      company: 'FinanceAI Solutions',
      industry: 'Financial Services',
      challenge: 'Fraud detection accuracy below 85% causing significant losses',
      solution: 'Deployed advanced AI fraud detection and prevention systems',
      results: {
        efficiency: '99.7%',
        costReduction: '45%',
        timeSaved: '1500 hours/month',
        revenue: '+$5.2M'
      },
      testimonial: 'Our fraud detection accuracy improved to 99.7%. We prevented millions in potential losses.',
      author: 'Michael Chen',
      position: 'CTOFinanceAI Solutions',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'retailai-personalization',
      company: 'RetailAI Network',
      industry: 'E-commerce',
      challenge: 'Low customer engagement and conversion rates',
      solution: 'Implemented AI-powered personalization and recommendation engines',
      results: {
        efficiency: '88%',
        costReduction: '35%',
        timeSaved: '3000 hours/month',
        revenue: '+$8.7M'
      },
      testimonial: 'AI personalization increased our conversion rates by 300%. Customer satisfaction is at an all-time high.',
      author: 'Emily Rodriguez',
      position: 'VP MarketingRetailAI Network',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'healthai-diagnostics',
      company: 'HealthAI Medical',
      industry: 'Healthcare',
      challenge: 'Diagnostic accuracy and speed limitations',
      solution: 'Deployed AI-powered diagnostic and treatment recommendation systems',
      results: {
        efficiency: '92%',
        costReduction: '50%',
        timeSaved: '4000 hours/month',
        revenue: '+$12.1M'
      },
      testimonial: 'AI diagnostics reduced diagnosis time by 80% while improving accuracy. We can help more patients faster.',
      author: 'Dr. James Wilson',
      position: 'Chief Medical OfficerHealthAI Medical',
      icon: Brain,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const metrics = [
    { label: 'Average Efficiency 'Gain', 'value: '93.5%'icon: TrendingUp },
    { label: 'Average Cost 'Reduction', 'value: '47.5%'icon: DollarSign },
    { label: 'Hours Saved 'Monthly', 'value: '2,625'icon: Clock },
    { label: 'Average Revenue 'Increase', 'value: '+$7.1'M', 'icon: Star }
  ];

  const currentStory = successStories[activeStory];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4 mr-2" />
            AI Success Stories
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Real Results from
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> AI Implementation</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover how leading companies achieved remarkable results with our AI solutions. Real storiesreal impactreal success.
          </motion.p>
        </div>

        {/* Metrics Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metricindex) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Story Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {successStories.map((storyindex) => {
            const Icon = story.icon;
            return (
              <button
                key={story.id}
                onClick={() => setActiveStory(index)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeStory === index
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {story.company}
              </button>
            );
          })}
        </div>

        {/* Active Story Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0x: 20 }}
            animate={{ opacity: 1x: 0 }}
            exit={{ opacity: 0x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Story Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentStory.color} flex items-center justify-center mr-4`}>
                    <currentStory.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentStory.company}</h3>
                    <p className="text-gray-600">{currentStory.industry}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{currentStory.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{currentStory.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Results:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600">{currentStory.results.efficiency}</div>
                        <div className="text-sm text-gray-600">Efficiency Gain</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600">{currentStory.results.costReduction}</div>
                        <div className="text-sm text-gray-600">Cost Reduction</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600">{currentStory.results.timeSaved}</div>
                        <div className="text-sm text-gray-600">Time Saved</div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-orange-600">{currentStory.results.revenue}</div>
                        <div className="text-sm text-gray-600">Revenue Increase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{currentStory.testimonial}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{currentStory.author}</div>
                  <div className="text-gray-600">{currentStory.position}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies already achieving remarkable results with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Your AI Journey
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                View All Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISuccessStoriesShowcase;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
