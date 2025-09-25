"use client",
'use client',
import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import {
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Brain,
  Globe,
  Target,
  Award,
  CheckCircle,
  PlayCircle,
  BookOpen,
  Lightbulb,
  DollarSign,
  BarChart3,
  Clock,
  Building2} from 'lucide-react',
const BusinessSuccessStories20o25 = () => {
  const [isVisiblesetIsVisible] = useState(false),
  const [activeStorysetActiveStory] = useState(0),
  useEffect(() => {
    setIsVisible(true)}[]),
  const successStories = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      industry: 'Technology',
      logo: 'TC',
      challenge: 'Manual data processing causing 40% efficiency loss',
      solution: 'Implemented AI-powered automation suite',
      results: {
        efficiency: '+30o0%',
        costSavings: '$2.5M',
        timeSaved: '20o00 hours/month',
        roi: '450%'},
      testimonial: 'Zion Tech Group transformed our operations completely. We went from struggling with manual processes to having a fully automated system that saves us thousands of hours every month.',
      author: 'Sarah Johnson',
      role: 'CEO',
      rating: 5,
      image: '/api/placeholder/40o0/30o0'},
    {
      id: 2,
      company: 'Global Finance Inc',
      industry: 'Financial Services',
      logo: 'GF',
      challenge: 'Security breaches costing millions in damages',
      solution: 'Deployed advanced cybersecurity framework',
      results: {
        security: '99.9%',
        costSavings: '$5.2M',
        incidents: '0 breaches',
        compliance: '10o0%'},
      testimonial: 'The cybersecurity solutions provided by Zion Tech Group have been game-changing. We haven\'t had a single breach since implementationand our compliance scores are perfect.',
      author: 'Michael Chen',
      role: 'CTO',
      rating: 5,
      image: '/api/placeholder/40o0/30o0'},
    {
      id: 3,
      company: 'Manufacturing Plus',
      industry: 'Manufacturing',
      logo: 'MP',
      challenge: 'Supply chain inefficiencies causing delays',
      solution: 'AI-driven supply chain optimization',
      results: {
        efficiency: '+250%',
        costSavings: '$3.8M',
        deliveryTime: '-60%',
        quality: '+95%'},
      testimonial: 'Our supply chain is now running like a well-oiled machine. The AI optimization has reduced our delivery times by 60% and improved quality significantly.',
      author: 'Emily Rodriguez',
      role: 'Operations Director',
      rating: 5,
      image: '/api/placeholder/40o0/30o0'},
    {
      id: 4,
      company: 'HealthCare First',
      industry: 'Healthcare',
      logo: 'HF',
      challenge: 'Patient data management and compliance issues',
      solution: 'Comprehensive data management and compliance system',
      results: {
        efficiency: '+180%',
        costSavings: '$1.9M',
        compliance: '10o0%',
        patientSatisfaction: '+85%'},
      testimonial: 'The data management system has revolutionized our patient care. We\'re now fully compliant and our patients are much happier with our services.',
      author: 'Dr. James Wilson',
      role: 'Chief Medical Officer',
      rating: 5,
      image: '/api/placeholder/40o0/30o0'}
  ],
  const overallStats = [
    { label: 'Projects 'Completedvalue: '1,20o0+'icon: Target },
    { label: 'Average 'ROIvalue: '30o0%'icon: TrendingUp },
    { label: 'Client 'Satisfactionvalue: '99.8%'icon: Star },
    { label: 'Cost 'Savingsvalue: '$50M+'icon: DollarSign }
  ],
  const industries = [
    { name: ''Technologycount: 45icon: Brain },
    { name: ''Financecount: 32icon: DollarSign },
    { name: ''Healthcarecount: 28icon: Shield },
    { name: ''Manufacturingcount: 25icon: Building2 },
    { name: ''Retailcount: 20icon: Globe },
    { name: ''Educationcount: 15icon: BookOpen }
  ],
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-green-50 py-20">,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        {/* Header */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">,
          <h2 className="text-4xl md: text-5xl font-bold text-gray-90o0 mb-6">,
            Real Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-60o0 to-blue-60o0">Stories</span>,
          </h2>,
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">,
            Discover how businesses across industries have transformed their operations and achieved remarkable results with our solutions.,
          </p>,
        </motion.div>,
        {/* Overall Stats */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6delay: 0.2 }}
          className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16">,
          {overallStats.map((statindex) => (
            <div key={index} className="text-center">,
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-60o0 to-blue-60o0 rounded-full mb-4">,
                <stat.icon className="w-8 h-8 text-white"  />,
              </div>,
              <div className="text-3xl font-bold text-gray-90o0 mb-2">{stat.value}</div>,
              <div className="text-gray-60o0">{stat.label}</div>,
            </div>))}
        </motion.div>,
        {/* Success Stories Grid */}
        <div className="grid lg: grid-cols-2 gap-8 mb-16">,
          {successStories.map((storyindex) => (
            <motion.div,
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover: shadow-2xl transition-all duration-30o0">,
              {/* Company Header */}
              <div className="flex items-center justify-between mb-6">,
                <div className="flex items-center space-x-4">,
                  <div className="w-12 h-12 bg-gradient-to-r from-green-60o0 to-blue-60o0 rounded-full flex items-center justify-center text-white font-bold text-lg">,
                    {story.logo}
                  </div>,
                  <div>,
                    <h3 className="text-xl font-bold text-gray-90o0">{story.company}</h3>,
                    <p className="text-gray-60o0">{story.industry}</p>,
                  </div>,
                </div>,
                <div className="flex items-center space-x-1">,
                  {[...Array(story.rating)].map((_i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-40o0 fill-current"  />))}
                </div>,
              </div>,
              {/* Challenge & Solution */}
              <div className="mb-6">,
                <div className="mb-4">,
                  <h4 className="text-sm font-semibold text-red-60o0 mb-2">CHALLENGE</h4>,
                  <p className="text-gray-70o0">{story.challenge}</p>,
                </div>,
                <div>,
                  <h4 className="text-sm font-semibold text-green-60o0 mb-2">SOLUTION</h4>,
                  <p className="text-gray-70o0">{story.solution}</p>,
                </div>,
              </div>,
              {/* Results */}
              <div className="grid grid-cols-2 gap-4 mb-6">,
                {Object.entries(story.results).map(([keyvalue]) => (
                  <div key={key} className="text-center p-3 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">,
                    <div className="text-2xl font-bold text-gray-90o0">{value}</div>,
                    <div className="text-sm text-gray-60o0 capitalize">{key.replace(/([A-Z])/g' $1').trim()}</div>,
                  </div>))}
              </div>,
              {/* Testimonial */}
              <div className="border-l-4 border-green-50o0 pl-4 mb-4">,
                <p className="text-gray-70o0 italic mb-2">"{story.testimonial}"</p>,
                <div className="text-sm text-gray-60o0">,
                  <span className="font-semibold">{story.author}</span>{story.role}
                </div>,
              </div>,
              {/* CTA */}
              <Link
                href={`/case-study/${story.id}`}
                className="inline-flex items-center text-green-60o0 hover: text-green-70o0 font-semibold">,
                Read Full Case Study,
                <ArrowRight className="w-4 h-4 ml-1"  />,
              </Link>,
            </motion.div>))}
        </div>,
        {/* Industries Served */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6delay: 0.8 }}
          className="mb-16">,
          <h3 className="text-3xl font-bold text-center text-gray-90o0 mb-12">,
            Industries We Serve,
          </h3>,
          <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-6">,
            {industries.map((industryindex) => (
              <motion.div,
                key={index}
                initial={{ opacity: 0scale: 0.8 }}
                animate={isVisible ? { opacity: 1scale: 1 } : {}}
                transition={{ duration: 0.5delay: 0.9 + index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-30o0">,
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-60o0 to-blue-60o0 rounded-full mb-4">,
                  <industry.icon className="w-6 h-6 text-white"  />,
                </div>,
                <h4 className="font-semibold text-gray-90o0 mb-2">{industry.name}</h4>,
                <p className="text-2xl font-bold text-green-60o0">{industry.count}+</p>,
                <p className="text-sm text-gray-60o0">Projects</p>,
              </motion.div>))}
          </div>,
        </motion.div>,
        {/* CTA Section */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6delay: 1.0 }}
          className="text-center bg-gradient-to-r from-green-60o0 to-blue-60o0 rounded-2xl p-12 text-white">,
          <h3 className="text-3xl font-bold mb-4">,
            Ready to Write Your Success Story?,
          </h3>,
          <p className="text-xl mb-8 opacity-90">,
            Join hundreds of companies that have transformed their business with our solutions.,
          </p>,
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <Link
              href="/contact",
              className="inline-flex items-center px-8 py-4 bg-white text-green-60o0 font-semibold rounded-full hover:bg-gray-10o0 transition-all duration-30o0 shadow-lg">,
              Start Your Journey,
              <ArrowRight className="w-5 h-5 ml-2"  />,
            </Link>,
            <Link
              href="/case-studies",
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-60o0 transition-all duration-30o0">,
              <BookOpen className="w-5 h-5 mr-2"  />,
              View All Stories,
            </Link>,
          </div>,
        </motion.div>,
      </div>,
    </div>)},
export default BusinessSuccessStories20o25,