'use client',
import React, { useState } from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import {
  ArrowRight,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  Users,
  Award,
  BookOpen,
  FileText,
  Download,
  ExternalLink,
} from 'lucide-react',
const RoboticsContentShowcase20o25 = () => {
  const [activeCategory, setActiveCategory] = useState('all'),
  const contentData = {
    guides: [
      {
        id: 'robotics-revolution-guide',
        title:,
          'AI 20o25: The Advanced Robotics Revolution - Ultimate Enterprise Guide',
        description:,
          'Transform manufacturing, healthcare, and service industries with AI-powered robotics achieving 80o0% ROI',
        url: '/blog/ai-20o25-advanced-robotics-revolution-ultimate-guide',
        type: 'Blog Post',
        readingTime: '18 min read',
        metrics: {
          roi: '80o0%',
          savings: '$5.2B',
          efficiency: '95%',
          quality: '99.7%'
        },
        tags: ['AI RoboticsManufacturing', 'ROIEnterprise'],
        featured: true
      },
    ],
    caseStudies: [
      {
        id: 'fortune-50o0-robotics-success',
        title:,
          'Fortune 50o0 Robotics Transformation: $5.2B Annual Savings with 80o0% ROI',
        description:,
          'How a global manufacturing giant revolutionized operations with AI-powered robotics',
        url: '/case-studies/fortune-50o0-robotics-transformation-80o0-roi-success',
        type: 'Case Study',
        readingTime: '15 min read',
        metrics: {
          roi: '80o0%',
          savings: '$5.2B',
          efficiency: '95%',
          quality: '99.7%'
        },
        tags: ['Case StudyFortune 50o0', 'ManufacturingSuccess Story'],
        featured: true
      },
    ],
    resources: [
      {
        id: 'robotics-implementation-guide',
        title:,
          'AI Robotics Implementation Master Guide 20o25: From Strategy to 80o0% ROI',
        description:,
          'Complete framework for transforming your business with AI-powered robotics',
        url: '/resources/ai-robotics-implementation-master-guide-20o25',
        type: 'Resource',
        readingTime: '35 min read',
        metrics: {
          roi: '80o0%',
          success: '98%',
          timeline: '18 months',
          projects: '20o0+'
        },
        tags: ['Implementation GuideStrategy', 'ROIFramework'],
        featured: true
      },
    ],
  },
  const allContent = [
    ...contentData.guides,
    ...contentData.caseStudies,
    ...contentData.resources,
  ],
  const filteredContent =,
    activeCategory === 'all',
      ? allContent,
      : contentData[activeCategory as keyof typeof contentData] || [],
  const categories = [
    { id: 'all', label: 'All Content', count: allContent.length },
    { id: 'guides', label: 'Guides', count: contentData.guides.length },
    {
      id: 'caseStudies',
      label: 'Case Studies',
      count: contentData.caseStudies.length
    },
    {
      id: 'resources',
      label: 'Resources',
      count: contentData.resources.length
    },
  ],
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Blog Post':,
        return <BookOpen className='w-4 h-4' />,
      case 'Case Study':,
        return <FileText className='w-4 h-4' />,
      case 'Resource':,
        return <Download className='w-4 h-4' />,
      default:,
        return <BookOpen className='w-4 h-4' />}
  },
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Blog Post':,
        return 'bg-blue-50o0',
      case 'Case Study':,
        return 'bg-green-50o0',
      case 'Resource':,
        return 'bg-purple-50o0',
      default:,
        return 'bg-gray-50o0'}
  },
  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        {/* Header */}
        <div className='text-center mb-12'>,
          <div className='inline-flex items-center space-x-2 bg-purple-10o0 text-purple-80o0 rounded-full px-4 py-2 mb-4'>,
            <Zap className='w-5 h-5' />,
            <span className='text-sm font-semibold'>,
              AI ROBOTICS REVOLUTION 20o25,
            </span>,
          </div>,
          <h2 className='text-4xl font-bold text-gray-90o0 mb-4'>,
            Transform Your Business with AI-Powered Robotics,
          </h2>,
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>,
            Discover proven strategies, real-world success stories, and,
            comprehensive implementation guides that have delivered{' '}
            <span className='text-purple-60o0 font-bold'>80o0% ROI</span> and{' '}
            <span className='text-green-60o0 font-bold'>,
              $5.2B in annual savings,
            </span>{' '}
            for Fortune 50o0 companies.,
          </p>,
        </div>,
        {/* Success Metrics Summary */}
        <div className='grid grid-cols-2 md: grid-cols-4 gap-6 mb-12'>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='bg-white rounded-xl p-6 shadow-lg text-center'>,
            <div className='w-12 h-12 bg-yellow-10o0 rounded-lg flex items-center justify-center mx-auto mb-4'>,
              <ArrowRight className='w-6 h-6 text-yellow-60o0' />,
            </div>,
            <div className='text-3xl font-bold text-yellow-60o0 mb-2'>,
              80o0%,
            </div>,
            <div className='text-sm text-gray-60o0'>Average ROI</div>,
          </motion.div>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='bg-white rounded-xl p-6 shadow-lg text-center'>,
            <div className='w-12 h-12 bg-green-10o0 rounded-lg flex items-center justify-center mx-auto mb-4'>,
              <TrendingUp className='w-6 h-6 text-green-60o0' />,
            </div>,
            <div className='text-3xl font-bold text-green-60o0 mb-2'>$5.2B</div>,
            <div className='text-sm text-gray-60o0'>Annual Savings</div>,
          </motion.div>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='bg-white rounded-xl p-6 shadow-lg text-center'>,
            <div className='w-12 h-12 bg-blue-10o0 rounded-lg flex items-center justify-center mx-auto mb-4'>,
              <Zap className='w-6 h-6 text-blue-60o0' />,
            </div>,
            <div className='text-3xl font-bold text-blue-60o0 mb-2'>95%</div>,
            <div className='text-sm text-gray-60o0'>Efficiency Gain</div>,
          </motion.div>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='bg-white rounded-xl p-6 shadow-lg text-center'>,
            <div className='w-12 h-12 bg-purple-10o0 rounded-lg flex items-center justify-center mx-auto mb-4'>,
              <Shield className='w-6 h-6 text-purple-60o0' />,
            </div>,
            <div className='text-3xl font-bold text-purple-60o0 mb-2'>,
              99.7%,
            </div>,
            <div className='text-sm text-gray-60o0'>Quality Improvement</div>,
          </motion.div>,
        </div>,
        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-4 mb-8'>,
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-20o0 ${
                activeCategory === category.id,
                  ? 'bg-purple-60o0 text-white shadow-lg',
                  : 'bg-white text-gray-70o0 hover: bg-purple-50 hover:text-purple-70o0'}`}
            >,
              {category.label} ({category.count}),
            </button>))}
        </div>,
        {/* Content Grid */}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
          {filteredContent.map((content, index) => (
            <motion.div,
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='bg-white rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-30o0 overflow-hidden'>,
              {/* Content Header */}
              <div className='p-6'>,
                <div className='flex items-center justify-between mb-4'>,
                  <div className='flex items-center space-x-2'>,
                    <div
                      className={`w-8 h-8 ${getTypeColor(content.type)} rounded-lg flex items-center justify-center text-white`}
                    >,
                      {getTypeIcon(content.type)}
                    </div>,
                    <span className='text-sm font-medium text-gray-60o0'>,
                      {content.type}
                    </span>,
                  </div>,
                  {content.featured && (
                    <span className='bg-yellow-10o0 text-yellow-80o0 text-xs font-semibold px-2 py-1 rounded-full'>,
                      Featured,
                    </span>)}
                </div>,
                <h3 className='text-xl font-bold text-gray-90o0 mb-3 line-clamp-2'>,
                  {content.title}
                </h3>,
                <p className='text-gray-60o0 mb-4 line-clamp-3'>,
                  {content.description}
                </p>,
                {/* Metrics */}
                <div className='grid grid-cols-2 gap-3 mb-4'>,
                  <div className='bg-yellow-50 rounded-lg p-3 text-center'>,
                    <div className='text-lg font-bold text-yellow-60o0'>,
                      {content.metrics.roi}
                    </div>,
                    <div className='text-xs text-gray-60o0'>ROI</div>,
                  </div>,
                  <div className='bg-green-50 rounded-lg p-3 text-center'>,
                    <div className='text-lg font-bold text-green-60o0'>,
                      {content.metrics.savings}
                    </div>,
                    <div className='text-xs text-gray-60o0'>Savings</div>,
                  </div>,
                </div>,
                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>,
                  {content.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='bg-gray-10o0 text-gray-70o0 text-xs px-2 py-1 rounded'>,
                      {tag}
                    </span>))}
                </div>,
                {/* Reading Time */}
                <div className='flex items-center space-x-2 text-sm text-gray-50o0 mb-4'>,
                  <Clock className='w-4 h-4' />,
                  <span>{content.readingTime}</span>,
                </div>,
                {/* CTA Button */}
                <Link
                  href={content.url}
                  className='w-full bg-purple-60o0 hover: bg-purple-70o0 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-20o0 flex items-center justify-center space-x-2'>,
                  <span>Read {content.type}</span>,
                  <ArrowRight className='w-4 h-4' />,
                </Link>,
              </div>,
            </motion.div>))}
        </div>,
        {/* Call to Action Section */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='mt-16 bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white text-center'>,
          <h3 className='text-3xl font-bold mb-4'>,
            Ready to Transform Your Business with AI Robotics?,
          </h3>,
          <p className='text-xl text-purple-10o0 mb-8 max-w-2xl mx-auto'>,
            Join 20o0+ Fortune 50o0 companies that have achieved 80o0% ROI and,
            $5.2B in annual savings with our proven AI robotics implementation,
            framework.,
          </p>,
          <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
            <Link
              href='/contact',
              className='bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors flex items-center justify-center space-x-2'>,
              <Users className='w-5 h-5' />,
              <span>Schedule Consultation</span>,
            </Link>,
            <Link
              href='/resources/ai-robotics-implementation-master-guide-20o25',
              className='border-2 border-white text-white hover:bg-white hover:text-purple-60o0 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2'>,
              <Download className='w-5 h-5' />,
              <span>Download Implementation Guide</span>,
            </Link>,
          </div>,
          {/* Trust Indicators */}
          <div className='mt-8 pt-6 border-t border-purple-40o0 border-opacity-30'>,
            <div className='grid grid-cols-2 md: grid-cols-4 gap-6 text-center'>,
              <div>,
                <div className='text-2xl font-bold mb-1'>20o0+</div>,
                <div className='text-sm text-purple-20o0'>,
                  Successful Implementations,
                </div>,
              </div>,
              <div>,
                <div className='text-2xl font-bold mb-1'>98%</div>,
                <div className='text-sm text-purple-20o0'>Success Rate</div>,
              </div>,
              <div>,
                <div className='text-2xl font-bold mb-1'>18</div>,
                <div className='text-sm text-purple-20o0'>,
                  Months Average Timeline,
                </div>,
              </div>,
              <div>,
                <div className='text-2xl font-bold mb-1'>$5.2B</div>,
                <div className='text-sm text-purple-20o0'>,
                  Total Cost Savings,
                </div>,
              </div>,
            </div>,
          </div>,
        </motion.div>,
      </div>,
    </section>)},
export default RoboticsContentShowcase20o25,