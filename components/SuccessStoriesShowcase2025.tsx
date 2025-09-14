"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Quote
  Star
  TrendingUp
  Users
  Award,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  CheckCircle,
  BarChart3,
  DollarSign,
  Clock,
  Target,
  Zap,
  Brain,
  Shield,
  Globe
} from 'lucide-react';

const SuccessStoriesShowcase2025 = () => {
  const [activeStorysetActiveStory] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  const successStories = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      industry: 'Manufacturing',
      logo: '/api/placeholder/80/80',
      challenge: 'Manual quality control processes causing 15% defect rate and production delays',
      solution: 'AI-powered computer vision system for real-time quality inspection',
      results: {
        defectRate: '95% reduction',
        efficiency: '300% increase',
        costSavings: '$2.5M annually',
        timeSaved: '40 hours/week'
      },
      testimonial: {
        text: 'Zion Tech Group transformed our manufacturing process completely. The AI quality control system reduced our defect rate by 95% and saved us $2.5M annually. The ROI was achieved in just 3 months.',
        author: 'Sarah Johnson',
        position: 'CEOTechCorp Solutions',
        rating: 5
      },
      technologies: ['Computer Vision'Machine Learning'IoT Sensors'],
      duration: '3 months',
      teamSize: '50+ employees',
      href: '/case-studies/techcorp-solutions'
    },
    {
      id: 2,
      company: 'FinanceFlow Inc',
      industry: 'Financial Services',
      logo: '/api/placeholder/80/80',
      challenge: 'Manual data processing taking 20 hours per week and prone to human errors',
      solution: 'Intelligent document processing and workflow automation platform',
      results: {
        processingTime: '90% reduction',
        accuracy: '99.8% accuracy',
        costSavings: '$1.8M annually',
        timeSaved: '18 hours/week'
      },
      testimonial: {
        text: 'The automation platform from Zion Tech Group revolutionized our document processing. We now process 10x more documents with 99.8% accuracy. Our team can focus on strategic work instead of manual data entry.',
        author: 'Michael Chen',
        position: 'CTOFinanceFlow Inc',
        rating: 5
      },
      technologies: ['OCR'Workflow Automation'AI Analytics'],
      duration: '2 months',
      teamSize: '25+ employees',
      href: '/case-studies/financeflow-inc'
    },
    {
      id: 3,
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      logo: '/api/placeholder/80/80',
      challenge: 'Patient data scattered across multiple systemsleading to delayed diagnoses',
      solution: 'Unified AI-powered patient data platform with predictive analytics',
      results: {
        diagnosisTime: '60% faster',
        accuracy: '98% improvement',
        costSavings: '$3.2M annually',
        timeSaved: '25 hours/week'
      },
      testimonial: {
        text: 'Zion Tech Group\'s AI platform transformed our patient care. We can now diagnose conditions 60% faster with 98% accuracy. This has saved countless lives and significantly improved our operational efficiency.',
        author: 'Dr. Emily Rodriguez',
        position: 'Chief Medical OfficerHealthTech Innovations',
        rating: 5
      },
      technologies: ['AI Analytics'Data Integration'Predictive Modeling'],
      duration: '4 months',
      teamSize: '100+ employees',
      href: '/case-studies/healthtech-innovations'
    },
    {
      id: 4,
      company: 'RetailMax Global',
      industry: 'Retail',
      logo: '/api/placeholder/80/80',
      challenge: 'Inventory management inefficiencies causing stockouts and overstocking',
      solution: 'AI-powered demand forecasting and inventory optimization system',
      results: {
        stockouts: '80% reduction',
        overstock: '70% reduction',
        costSavings: '$4.1M annually',
        timeSaved: '30 hours/week'
      },
      testimonial: {
        text: 'The inventory optimization system from Zion Tech Group is a game-changer. We reduced stockouts by 80% and overstock by 70%saving $4.1M annually. Our supply chain is now perfectly optimized.',
        author: 'David Kim',
        position: 'Supply Chain DirectorRetailMax Global',
        rating: 5
      },
      technologies: ['Demand Forecasting'Machine Learning'Supply Chain AI'],
      duration: '3 months',
      teamSize: '75+ employees',
      href: '/case-studies/retailmax-global'
    },
    {
      id: 5,
      company: 'EduTech Academy',
      industry: 'Education',
      logo: '/api/placeholder/80/80',
      challenge: 'Personalized learning paths needed for 10,000+ students across different skill levels',
      solution: 'AI-powered adaptive learning platform with personalized content delivery',
      results: {
        engagement: '250% increase',
        completionRate: '85% improvement',
        costSavings: '$1.2M annually',
        timeSaved: '20 hours/week'
      },
      testimonial: {
        text: 'Zion Tech Group\'s adaptive learning platform transformed our educational approach. Student engagement increased by 250% and completion rates improved by 85%. It\'s like having a personal tutor for every student.',
        author: 'Prof. Lisa Thompson',
        position: 'Academic DirectorEduTech Academy',
        rating: 5
      },
      technologies: ['Adaptive Learning'Personalization AI'Learning Analytics'],
      duration: '5 months',
      teamSize: '40+ employees',
      href: '/case-studies/edutech-academy'
    },
    {
      id: 6,
      company: 'LogiChain Solutions',
      industry: 'Logistics',
      logo: '/api/placeholder/80/80',
      challenge: 'Route optimization and delivery scheduling causing delays and increased costs',
      solution: 'AI-powered logistics optimization with real-time route planning',
      results: {
        deliveryTime: '45% faster',
        fuelCosts: '35% reduction',
        costSavings: '$2.8M annually',
        timeSaved: '35 hours/week'
      },
      testimonial: {
        text: 'The logistics optimization system from Zion Tech Group is incredible. We reduced delivery times by 45% and fuel costs by 35%saving $2.8M annually. Our customers are much happier with faster deliveries.',
        author: 'James Wilson',
        position: 'Operations ManagerLogiChain Solutions',
        rating: 5
      },
      technologies: ['Route Optimization'Real-time Analytics'IoT Integration'],
      duration: '2 months',
      teamSize: '60+ employees',
      href: '/case-studies/logichain-solutions'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }8000);
    return () => clearInterval(interval);
  }[]);

  const currentStory = successStories[activeStory];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0y: 20 }}
            whileInView={{ opacity: 1y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Success Stories & Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0y: 20 }}
            whileInView={{ opacity: 1y: 0 }}
            transition={{ duration: 0.6delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Discover how leading companies across industries have transformed their 
            operations and achieved remarkable results with our solutions.
          </motion.p>
          
          {/* Overall Stats */}
          <motion.div
            initial={{ opacity: 0y: 20 }}
            whileInView={{ opacity: 1y: 0 }}
            transition={{ duration: 0.6delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </motion.div>
        </div>

        {/* Featured Success Story */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0y: 20 }}
            animate={{ opacity: 1y: 0 }}
            exit={{ opacity: 0y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Story Details */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {currentStory.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentStory.company}</h3>
                    <p className="text-gray-600">{currentStory.industry} • {currentStory.teamSize}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(currentStory.testimonial.rating)].map((_i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600">{currentStory.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600">{currentStory.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(currentStory.results).map(([keyvalue]index) => (
                      <div key={index} className="p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 mb-1">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStory.technologies.map((techindex) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={currentStory.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Right Side - Testimonial */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:p-12 text-white">
                <div className="flex items-center justify-center mb-8">
                  <Quote className="w-16 h-16 text-white/30" />
                </div>
                
                <blockquote className="text-xl leading-relaxed mb-8 text-center">
                  "{currentStory.testimonial.text}"
                </blockquote>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">
                      {currentStory.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="font-semibold text-lg">{currentStory.testimonial.author}</div>
                  <div className="text-blue-100">{currentStory.testimonial.position}</div>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(currentStory.testimonial.rating)].map((_i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">{currentStory.duration}</div>
                      <div className="text-sm text-blue-100">Implementation</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{currentStory.teamSize}</div>
                      <div className="text-sm text-blue-100">Team Size</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Success Stories Grid */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {successStories.map((storyindex) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0y: 20 }}
              whileInView={{ opacity: 1y: 0 }}
              transition={{ duration: 0.5delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{story.company}</h3>
                    <p className="text-sm text-gray-600">{story.industry}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {story.challenge}
                </p>

                <div className="space-y-2 mb-4">
                  {Object.entries(story.results).slice(02).map(([keyvalue]idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g' $1').trim()}</span>
                      <span className="font-semibold text-green-600">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(story.testimonial.rating)].map((_i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{story.duration}</span>
                </div>

                <Link
                  href={story.href}
                  className="group/btn inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already transformed their operations 
              and achieved remarkable results with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Your Transformation
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download All Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessStoriesShowcase2025;