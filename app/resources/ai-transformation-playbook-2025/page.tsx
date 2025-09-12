import React from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Download, Calendar, Clock, Users, CheckCircle, Star, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Transformation Playbook 2025: Complete Enterprise Implementation Guide | Zion Tech Group',
  description: 'Download our comprehensive AI transformation playbook with proven frameworks, templates, and strategies for enterprise AI implementation success.',
  keywords: 'AI transformation, enterprise AI, implementation guide, playbook, frameworks, templates, best practices',
  openGraph: {
    title: 'AI Transformation Playbook 2025: Complete Enterprise Implementation Guide',
    description: 'Download our comprehensive AI transformation playbook with proven frameworks, templates, and strategies for enterprise AI implementation success.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

const PlaybookPage = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Proven Implementation Framework',
      description: 'Step-by-step methodology tested across 500+ enterprise deployments',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Team Structure Templates',
      description: 'Organizational charts and role definitions for AI transformation teams',
      color: 'text-blue-600'
    },
    {
      icon: Calendar,
      title: 'Project Timeline Templates',
      description: 'Detailed 12-month implementation roadmaps with milestones',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      title: 'ROI Calculation Tools',
      description: 'Financial models and calculators for measuring AI transformation impact',
      color: 'text-orange-600'
    },
    {
      icon: BookOpen,
      title: 'Risk Assessment Framework',
      description: 'Comprehensive risk management strategies and mitigation plans',
      color: 'text-red-600'
    },
    {
      icon: CheckCircle,
      title: 'Success Metrics Dashboard',
      description: 'KPI templates and measurement frameworks for tracking progress',
      color: 'text-indigo-600'
    }
  ];

  const chapters = [
    {
      number: '01',
      title: 'AI Strategy & Vision',
      description: 'Define your AI transformation vision and align stakeholders',
      duration: '45 min read'
    },
    {
      number: '02',
      title: 'Technology Assessment',
      description: 'Evaluate current infrastructure and identify AI opportunities',
      duration: '60 min read'
    },
    {
      number: '03',
      title: 'Team Building & Skills',
      description: 'Build the right team and develop necessary AI capabilities',
      duration: '50 min read'
    },
    {
      number: '04',
      title: 'Pilot Project Selection',
      description: 'Choose and execute high-impact pilot projects',
      duration: '55 min read'
    },
    {
      number: '05',
      title: 'Scalable Implementation',
      description: 'Scale successful pilots across the organization',
      duration: '70 min read'
    },
    {
      number: '06',
      title: 'Change Management',
      description: 'Manage organizational change and ensure adoption',
      duration: '40 min read'
    },
    {
      number: '07',
      title: 'Performance Monitoring',
      description: 'Track success metrics and optimize AI implementations',
      duration: '35 min read'
    },
    {
      number: '08',
      title: 'Future Roadmap',
      description: 'Plan for continuous AI evolution and innovation',
      duration: '30 min read'
    }
  ];

  const testimonials = [
    {
      quote: "This playbook transformed our approach to AI implementation. We achieved 300% ROI in just 8 months.",
      author: "Sarah Chen",
      role: "CTO, TechCorp Industries",
      company: "Fortune 500 Manufacturing"
    },
    {
      quote: "The frameworks and templates saved us months of planning. Highly recommended for any enterprise.",
      author: "Michael Rodriguez",
      role: "Head of Digital Transformation",
      company: "Global Financial Services"
    },
    {
      quote: "Clear, actionable guidance that delivered real results. Our AI initiatives are now 5x more effective.",
      author: "Dr. Lisa Wang",
      role: "Chief Innovation Officer",
      company: "Healthcare Technology Leader"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                📚 Free Resource
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Transformation Playbook 2025
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl leading-relaxed mb-8">
              The complete enterprise implementation guide with proven frameworks, templates, 
              and strategies for AI transformation success. Downloaded by 10,000+ executives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                <Download className="mr-2 w-5 h-5" />
                Download Free Playbook (PDF)
              </button>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Implementation Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="mt-8 flex items-center space-x-8 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Updated January 2025</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>10,000+ Downloads</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources to guide your AI transformation from strategy to implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Chapters Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8 Comprehensive Chapters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial strategy to ongoing optimization, every aspect of AI transformation is covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">{chapter.number}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {chapter.duration}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{chapter.title}</h3>
                <p className="text-gray-600 text-sm">{chapter.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how executives from Fortune 500 companies are using this playbook to drive AI transformation success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Download CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of executives who have already downloaded this comprehensive playbook 
              and started their AI transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                <Download className="mr-2 w-5 h-5" />
                Download Free Playbook (PDF)
              </button>
              
              <Link
                href="/webinars/ai-transformation-masterclass"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Attend Free Masterclass
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <p className="text-blue-200 text-sm mt-4">
              No spam. Unsubscribe anytime. Your email is safe with us.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PlaybookPage;