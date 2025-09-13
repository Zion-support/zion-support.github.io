'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  TrendingUp, 
  Users, 
  Award, 
  ArrowRight, 
  Quote,
  CheckCircle,
  BarChart3,
  Zap,
  Shield,
  Cloud,
  Brain,
  Target,
  Globe,
  Building,
  DollarSign,
  Clock,
  ThumbsUp,
  Rocket
} from 'lucide-react';

const SuccessStoriesShowcase2026 = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const successStories = [
    {
      id: 1,
      company: 'TechCorp Global',
      industry: 'Technology',
      logo: '/api/placeholder/80/80',
      challenge: 'Legacy systems causing 40% productivity loss and security vulnerabilities',
      solution: 'Implemented AI-powered automation suite with quantum security framework',
      results: {
        roi: '450%',
        efficiency: '85%',
        costSavings: '$2.3M',
        timeReduction: '60%',
        securityScore: '99.9%'
      },
      testimonial: {
        text: 'Zion Tech Group transformed our entire infrastructure. The AI automation alone saved us $2.3M in the first year, and our security posture is now industry-leading.',
        author: 'Sarah Chen',
        position: 'CTO',
        rating: 5
      },
      technologies: ['AI Automation', 'Quantum Security', 'Cloud Migration', 'Neural Networks'],
      timeline: '6 months',
      featured: true
    },
    {
      id: 2,
      company: 'FinanceFlow Inc',
      industry: 'Financial Services',
      logo: '/api/placeholder/80/80',
      challenge: 'Manual processes causing compliance issues and 30% error rate',
      solution: 'Deployed predictive analytics platform with automated compliance monitoring',
      results: {
        roi: '320%',
        efficiency: '70%',
        costSavings: '$1.8M',
        timeReduction: '50%',
        securityScore: '99.8%'
      },
      testimonial: {
        text: 'The predictive analytics platform revolutionized our risk management. We now catch potential issues before they become problems, saving millions in potential losses.',
        author: 'Michael Rodriguez',
        position: 'Chief Risk Officer',
        rating: 5
      },
      technologies: ['Predictive Analytics', 'AI Risk Assessment', 'Automated Compliance', 'Real-time Monitoring'],
      timeline: '4 months',
      featured: true
    },
    {
      id: 3,
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      logo: '/api/placeholder/80/80',
      challenge: 'Patient data processing bottlenecks and HIPAA compliance concerns',
      solution: 'Implemented edge computing network with AI-powered data processing and quantum encryption',
      results: {
        roi: '380%',
        efficiency: '90%',
        costSavings: '$3.1M',
        timeReduction: '75%',
        securityScore: '99.95%'
      },
      testimonial: {
        text: 'Our patient data processing is now 90% faster while maintaining the highest security standards. The AI insights have improved our diagnostic accuracy significantly.',
        author: 'Dr. Emily Watson',
        position: 'Chief Medical Officer',
        rating: 5
      },
      technologies: ['Edge Computing', 'AI Diagnostics', 'Quantum Encryption', 'HIPAA Compliance'],
      timeline: '5 months',
      featured: false
    },
    {
      id: 4,
      company: 'ManufacturingMax',
      industry: 'Manufacturing',
      logo: '/api/placeholder/80/80',
      challenge: 'Supply chain disruptions and quality control inefficiencies',
      solution: 'Deployed IoT sensors with AI-powered predictive maintenance and supply chain optimization',
      results: {
        roi: '280%',
        efficiency: '65%',
        costSavings: '$4.2M',
        timeReduction: '45%',
        securityScore: '99.7%'
      },
      testimonial: {
        text: 'The predictive maintenance system has reduced our downtime by 80%. We can now predict equipment failures weeks in advance, saving millions in production losses.',
        author: 'James Thompson',
        position: 'Operations Director',
        rating: 5
      },
      technologies: ['IoT Sensors', 'Predictive Maintenance', 'Supply Chain AI', 'Quality Control'],
      timeline: '7 months',
      featured: false
    },
    {
      id: 5,
      company: 'RetailRevolution',
      industry: 'Retail',
      logo: '/api/placeholder/80/80',
      challenge: 'Inventory management chaos and customer experience issues',
      solution: 'Implemented AI-powered inventory optimization with personalized customer experience platform',
      results: {
        roi: '350%',
        efficiency: '80%',
        costSavings: '$2.8M',
        timeReduction: '55%',
        securityScore: '99.6%'
      },
      testimonial: {
        text: 'Our inventory accuracy improved from 65% to 98%, and customer satisfaction scores are at an all-time high. The AI recommendations drive 40% of our sales now.',
        author: 'Lisa Park',
        position: 'VP of Operations',
        rating: 5
      },
      technologies: ['AI Inventory Management', 'Personalization Engine', 'Customer Analytics', 'Demand Forecasting'],
      timeline: '3 months',
      featured: true
    }
  ];

  const featuredStories = successStories.filter(story => story.featured);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            SUCCESS STORIES 2026
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Real Results,
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Real Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies achieved extraordinary results with our 
            revolutionary AI and technology solutions.
          </p>
        </motion.div>

        {/* Featured Stories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              onClick={() => setActiveStory(story.id - 1)}
            >
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {story.company}
                  </h3>
                  <p className="text-gray-400">{story.industry}</p>
                </div>
              </div>

              {/* Key Results */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{story.results.roi}</div>
                  <div className="text-sm text-gray-400">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{story.results.efficiency}</div>
                  <div className="text-sm text-gray-400">Efficiency</div>
                </div>
              </div>

              {/* Testimonial Preview */}
              <div className="mb-6">
                <Quote className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {story.testimonial.text}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {story.technologies.slice(0, 2).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {story.technologies.length > 2 && (
                  <span className="px-3 py-1 bg-gray-600/30 text-gray-300 rounded-full text-xs font-medium">
                    +{story.technologies.length - 2} more
                  </span>
                )}
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Implemented in {story.timeline}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Story Modal */}
        <AnimatePresence>
          {activeStory !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setActiveStory(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const story = successStories[activeStory];
                  if (!story) return null;

                  return (
                    <div>
                      {/* Header */}
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                          <Building className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{story.company}</h3>
                          <p className="text-gray-600 text-lg">{story.industry}</p>
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Target className="w-5 h-5 text-red-500" />
                            Challenge
                          </h4>
                          <p className="text-gray-600 leading-relaxed">{story.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Rocket className="w-5 h-5 text-green-500" />
                            Solution
                          </h4>
                          <p className="text-gray-600 leading-relaxed">{story.solution}</p>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                        {Object.entries(story.results).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                            <div className="text-2xl font-bold text-purple-600 mb-1">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8">
                        <Quote className="w-8 h-8 text-white mb-4" />
                        <p className="text-white text-lg leading-relaxed mb-6">
                          "{story.testimonial.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <div>
                            <div className="text-white font-bold">{story.testimonial.author}</div>
                            <div className="text-purple-200">{story.testimonial.position}</div>
                          </div>
                          <div className="flex items-center gap-1 ml-auto">
                            {[...Array(story.testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {story.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Close Button */}
                      <div className="flex justify-end">
                        <button
                          onClick={() => setActiveStory(null)}
                          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl text-black/80 mb-8">
              Let us help you achieve similar results with our proven AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group">
                Start Your Success Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 group">
                <BarChart3 className="w-5 h-5" />
                View ROI Calculator
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessStoriesShowcase2026;