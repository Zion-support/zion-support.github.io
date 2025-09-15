"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight
  CheckCircle
  TrendingUp
  Users
  DollarSign,
  Clock,
  Target,
  Award,
  Star,
  ExternalLink,
  Play,
  BarChart3,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const RevolutionaryCaseStudiesShowcase2026 = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [activeCasetActiveCase] = useState(0);
  const [isVideoPlayingsetIsVideoPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)300);
    return () => clearTimeout(timer);
  }[]);

  const caseStudies = [
    {
      id: 'fintech-transformation',
      title: 'FinTech Revolution: 500% ROI in 6 Months',
      company: 'PayFlow Solutions',
      industry: 'Financial Technology',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      challenge: 'Legacy payment processing system causing 40% transaction failures and customer churn',
      solution: 'Implemented AI-powered fraud detectionreal-time processingand automated compliance',
      results: {
        roi: '500%',
        efficiency: '300%',
        costReduction: '60%',
        customerSatisfaction: '95%'
      },
      timeline: '6 months',
      team: '15 experts',
      technologies: ['AI/'ML', 'Blockchain'Cloud 'Infrastructure', 'Real-time Analytics'],
      testimonial: {
        name: 'Sarah Chen',
        role: 'CTO',
        content: 'Zion Tech Group transformed our entire payment ecosystem. The results exceeded our wildest expectations.'
      }
    },
    {
      id: 'healthcare-ai',
      title: 'Healthcare AI: Diagnosing 10x Faster',
      company: 'MediTech Innovations',
      industry: 'Healthcare Technology',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
      challenge: 'Manual diagnosis processes taking 2-3 dayscausing delayed treatments and patient dissatisfaction',
      solution: 'Deployed AI diagnostic toolsautomated patient triageand predictive health analytics',
      results: {
        roi: '400%',
        efficiency: '1000%',
        costReduction: '45%',
        customerSatisfaction: '98%'
      },
      timeline: '8 months',
      team: '20 experts',
      technologies: ['Computer 'Vision', 'NLP'Predictive 'Analytics', 'IoT Integration'],
      testimonial: {
        name: 'Dr. Michael Rodriguez',
        role: 'Chief Medical Officer',
        content: 'Our diagnostic accuracy improved dramatically while reducing processing time from days to minutes.'
      }
    },
    {
      id: 'ecommerce-automation',
      title: 'E-commerce Automation: $50M Revenue Boost',
      company: 'ShopGlobal',
      industry: 'E-commerce',
      icon: Globe,
      color: 'from-purple-500 to-pink-600',
      challenge: 'Manual inventory management and customer service causing 30% lost sales opportunities',
      solution: 'Implemented AI-driven inventory optimizationautomated customer serviceand dynamic pricing',
      results: {
        roi: '600%',
        efficiency: '400%',
        costReduction: '50%',
        customerSatisfaction: '92%'
      },
      timeline: '10 months',
      team: '25 experts',
      technologies: ['Machine 'Learning', 'NLP'Computer 'Vision', 'Cloud Computing'],
      testimonial: {
        name: 'Jennifer Walsh',
        role: 'CEO',
        content: 'The automation solutions revolutionized our operations. We saw immediate impact on both revenue and customer satisfaction.'
      }
    },
    {
      id: 'manufacturing-iot',
      title: 'Smart Manufacturing: Zero Downtime Achievement',
      company: 'AutoParts Pro',
      industry: 'Manufacturing',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      challenge: 'Unplanned downtime costing $2M monthly and 15% production efficiency loss',
      solution: 'Deployed IoT sensorspredictive maintenance AIand real-time production optimization',
      results: {
        roi: '350%',
        efficiency: '250%',
        costReduction: '40%',
        customerSatisfaction: '97%'
      },
      timeline: '12 months',
      team: '18 experts',
      technologies: [', 'IoT', 'Edge 'Computing', 'Predictive 'Analytics', 'Digital Twins'],
      testimonial: {
        name: 'Robert Kim',
        role: 'Operations Director',
        content: 'We achieved zero unplanned downtime for 6 consecutive months. The predictive maintenance system is a game-changer.'
      }
    }
  ];

  const overallStats = [
    { label: 'Projects 'Completed', 'value: '200+'icon: CheckCircle },
    { label: 'Average 'ROI', 'value: '450%'icon: TrendingUp },
    { label: 'Client 'Satisfaction', 'value: '96%'icon: Star },
    { label: 'Years 'Experience', 'value: '8+'icon: Award }
  ];

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Case Studies 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from companies that transformed their operations with our cutting-edge AI and automation solutions.
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {overallStats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Case Study Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {caseStudies.map((caseStudyindex) => (
            <button
              key={caseStudy.id}
              onClick={() => setActiveCase(index)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeCase === index
                  ? 'bg-white shadow-xl scale-105 border-2 border-blue-500'
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${caseStudy.color} flex items-center justify-center mb-4 mx-auto`}>
                <caseStudy.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{caseStudy.title}</h3>
              <p className="text-sm text-gray-600">{caseStudy.company}</p>
              <p className="text-xs text-gray-500 mt-1">{caseStudy.industry}</p>
            </button>
          ))}
        </motion.div>

        {/* Active Case Study Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Details */}
              <div>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${caseStudies[activeCase].color}`}>
                    <caseStudies[activeCase].icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {caseStudies[activeCase].title}
                    </h3>
                    <p className="text-gray-600 text-lg">{caseStudies[activeCase].company}</p>
                    <p className="text-gray-500">{caseStudies[activeCase].industry}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{caseStudies[activeCase].challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{caseStudies[activeCase].solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudies[activeCase].technologies.map((techindex) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Results & Testimonial */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{caseStudies[activeCase].results.roi}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{caseStudies[activeCase].results.efficiency}</div>
                    <div className="text-sm text-gray-600">Efficiency</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{caseStudies[activeCase].results.costReduction}</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{caseStudies[activeCase].results.customerSatisfaction}</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{caseStudies[activeCase].timeline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{caseStudies[activeCase].team}</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Client Testimonial</h4>
                  <p className="text-gray-600 italic mb-4">"{caseStudies[activeCase].testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{caseStudies[activeCase].testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{caseStudies[activeCase].testimonial.role}{caseStudies[activeCase].company}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies that have transformed their operations with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                <Target className="w-5 h-5 mr-2" />
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Case Study Video
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryCaseStudiesShowcase2026;