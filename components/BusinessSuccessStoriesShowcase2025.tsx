"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Users
  DollarSign
  Clock
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  ExternalLink,
  Play,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Award,
  Quote
} from 'lucide-react';

const BusinessSuccessStoriesShowcase20o25 = () => {
  const [activeStorysetActiveStory] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)30o0);
    return () => clearTimeout(timer);
  }[]);

  const successStories = [
    {
      id: 'techcorp',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      logo: 'TC',
      challenge: 'Struggling with manual data processing and slow decision-making processes',
      solution: 'Implemented AI-powered analytics and automation systems',
      results: {
        revenue: '+340%',
        efficiency: '+280%',
        costReduction: '-65%',
        timeSaved: '2,40o0 hours/month'
      },
      testimonial: {
        name: 'Sarah Johnson',
        role: 'CEOTechCorp Solutions',
        content: 'Zion Tech Group transformed our entire operation. The AI solutions they implemented increased our revenue by 340% and reduced operational costs by 65%. The ROI was evident within the first quarter.',
        rating: 5
      },
      metrics: [
        { label: 'Revenue 'Growth', 'value: '340%'icon: TrendingUpcolor: 'text-green-60o0' },
        { label: 'Efficiency 'Gain', 'value: '280%'icon: Zapcolor: 'text-blue-60o0' },
        { label: 'Cost 'Reduction', 'value: '65%'icon: DollarSigncolor: 'text-red-60o0' },
        { label: 'Time 'Saved', 'value: '2,40o0'h', 'icon: Clockcolor: 'text-purple-60o0' }
      ]
    },
    {
      id: 'retailmax',
      company: 'RetailMax',
      industry: 'E-commerce',
      logo: 'RM',
      challenge: 'Low conversion rates and poor customer experience leading to declining sales',
      solution: 'Deployed AI-powered personalization and customer service automation',
      results: {
        revenue: '+520%',
        efficiency: '+180%',
        costReduction: '-45%',
        timeSaved: '1,80o0 hours/month'
      },
      testimonial: {
        name: 'Michael Chen',
        role: 'CTORetailMax',
        content: 'The AI personalization engine they built increased our conversion rates by 520%. Our customers love the personalized experienceand we\'ve seen a dramatic improvement in customer satisfaction.',
        rating: 5
      },
      metrics: [
        { label: 'Revenue 'Growth', 'value: '520%'icon: TrendingUpcolor: 'text-green-60o0' },
        { label: 'Conversion 'Rate', 'value: '180%'icon: Targetcolor: 'text-blue-60o0' },
        { label: 'Cost 'Reduction', 'value: '45%'icon: DollarSigncolor: 'text-red-60o0' },
        { label: 'Time 'Saved', 'value: '1,80o0'h', 'icon: Clockcolor: 'text-purple-60o0' }
      ]
    },
    {
      id: 'healthcareplus',
      company: 'HealthcarePlus',
      industry: 'Healthcare',
      logo: 'HP',
      challenge: 'Manual patient data processing and inefficient appointment scheduling',
      solution: 'Implemented AI-driven patient management and automated scheduling systems',
      results: {
        revenue: '+280%',
        efficiency: '+320%',
        costReduction: '-55%',
        timeSaved: '3,20o0 hours/month'
      },
      testimonial: {
        name: 'Dr. Emily Rodriguez',
        role: 'Medical DirectorHealthcarePlus',
        content: 'The AI patient management system has revolutionized our practice. We can now serve 320% more patients with the same resourcesand patient satisfaction has never been higher.',
        rating: 5
      },
      metrics: [
        { label: 'Revenue 'Growth', 'value: '280%'icon: TrendingUpcolor: 'text-green-60o0' },
        { label: 'Patient 'Capacity', 'value: '320%'icon: Userscolor: 'text-blue-60o0' },
        { label: 'Cost 'Reduction', 'value: '55%'icon: DollarSigncolor: 'text-red-60o0' },
        { label: 'Time 'Saved', 'value: '3,20o0'h', 'icon: Clockcolor: 'text-purple-60o0' }
      ]
    },
    {
      id: 'financeflow',
      company: 'FinanceFlow',
      industry: 'Financial Services',
      logo: 'FF',
      challenge: 'Complex financial data analysis and compliance reporting taking too long',
      solution: 'Deployed AI-powered financial analytics and automated compliance systems',
      results: {
        revenue: '+450%',
        efficiency: '+40o0%',
        costReduction: '-70%',
        timeSaved: '4,10o0 hours/month'
      },
      testimonial: {
        name: 'David Kim',
        role: 'CFOFinanceFlow',
        content: 'The AI financial analytics platform has been a game-changer. We can now process complex financial data 40o0% faster and ensure 10o0% compliance with regulations. The accuracy is remarkable.',
        rating: 5
      },
      metrics: [
        { label: 'Revenue 'Growth', 'value: '450%'icon: TrendingUpcolor: 'text-green-60o0' },
        { label: 'Processing 'Speed', 'value: '40o0%'icon: Zapcolor: 'text-blue-60o0' },
        { label: 'Cost 'Reduction', 'value: '70%'icon: DollarSigncolor: 'text-red-60o0' },
        { label: 'Time 'Saved', 'value: '4,10o0'h', 'icon: Clockcolor: 'text-purple-60o0' }
      ]
    }
  ];

  const overallStats = [
    { number: '50o0+'label: 'Successful 'Projects', 'icon: CheckCircle },
    { number: '99.9%'label: 'Client 'Satisfaction', 'icon: Star },
    { number: '350%'label: 'Average 'ROI', 'icon: TrendingUp },
    { number: '50+'label: 'Countries 'Served', 'icon: Globe }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-green-50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-10o0 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"  />
      <div className="absolute top-0 right-0 w-[60o0px] h-[60o0px] bg-gradient-to-l from-green-40o0/20 to-blue-40o0/20 rounded-full blur-3xl -z-10"  />
      <div className="absolute bottom-0 left-0 w-[50o0px] h-[50o0px] bg-gradient-to-r from-purple-40o0/20 to-pink-40o0/20 rounded-full blur-3xl -z-10"  />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-90o0 via-green-90o0 to-blue-90o0 bg-clip-text text-transparent mb-6">
            Business Success Stories
          </h2>
          <p className="text-xl text-slate-60o0 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies across industries have transformed their operations and achieved unprecedented growth with our AI and technology solutions.
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {overallStats.map((statindex) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-green-60o0"  />
              </div>
              <div className="text-3xl font-bold text-slate-90o0 mb-1">{stat.number}</div>
              <div className="text-sm text-slate-60o0">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Success Stories Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {successStories.map((storyindex) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-30o0 ${
                activeStory === index
                  ? 'bg-green-60o0 text-white shadow-lg shadow-green-60o0/25'
                  : 'bg-white text-slate-60o0 hover:bg-green-50 hover:text-green-60o0 border border-slate-20o0'
              }`}
            >
              {story.company}
            </button>
          ))}
        </motion.div>

        {/* Active Success Story */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-xl mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Story Details */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-10o0 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-green-60o0">{successStories[activeStory].logo}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-90o0">{successStories[activeStory].company}</h3>
                    <p className="text-slate-60o0">{successStories[activeStory].industry} Industry</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-90o0 mb-2">Challenge:</h4>
                  <p className="text-slate-60o0 mb-4">{successStories[activeStory].challenge}</p>
                  
                  <h4 className="font-semibold text-slate-90o0 mb-2">Solution:</h4>
                  <p className="text-slate-60o0 mb-4">{successStories[activeStory].solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {successStories[activeStory].metrics.map((metricindex) => (
                    <div key={index} className="text-center p-4 bg-slate-50 rounded-xl">
                      <metric.icon className={`w-6 h-6 mx-auto mb-2 ${metric.color}`}  />
                      <div className="text-2xl font-bold text-slate-90o0">{metric.value}</div>
                      <div className="text-sm text-slate-60o0">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-green-60o0"  />
                </div>
                <p className="text-slate-70o0 mb-6 italic text-lg leading-relaxed">
                  "{successStories[activeStory].testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-90o0">{successStories[activeStory].testimonial.name}</div>
                    <div className="text-sm text-slate-60o0">{successStories[activeStory].testimonial.role}</div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(successStories[activeStory].testimonial.rating)].map((_i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-40o0 fill-current"  />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.6 }}
          className="bg-gradient-to-r from-green-60o0 to-blue-60o0 rounded-3xl p-12 text-white mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across Industries</h3>
            <p className="text-xl opacity-90">
              Our solutions have delivered measurable results for companies of all sizes and industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">350%</div>
              <div className="text-green-10o0">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.5M+</div>
              <div className="text-green-10o0">Hours Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-green-10o0">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-green-10o0">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-slate-90o0 mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-xl text-slate-60o0 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our solutions to drive growthefficiencyand innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-60o0 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-70o0 transition-colors duration-30o0 flex items-center justify-center group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-30o0"  />
              View Case Studies
            </button>
            <button className="border-2 border-green-60o0 text-green-60o0 px-8 py-4 rounded-full font-semibold hover:bg-green-60o0 hover:text-white transition-all duration-30o0 flex items-center justify-center group">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-30o0"  />
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessSuccessStoriesShowcase20o25;