import React from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, DollarSign, Clock, Users, Target, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Transformation Success: Manufacturing Giant Achieves 400% ROI | Zion Tech Group',
  description: 'Discover how a Fortune 500 manufacturing company transformed operations with AI, achieving 400% ROI, 60% cost reduction, and $2.3B in savings.',
  keywords: 'AI transformation, manufacturing, ROI, cost reduction, Fortune 500, automation, efficiency',
  openGraph: {
    title: 'AI Transformation Success: Manufacturing Giant Achieves 400% ROI',
    description: 'Discover how a Fortune 500 manufacturing company transformed operations with AI, achieving 400% ROI, 60% cost reduction, and $2.3B in savings.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

const CaseStudyPage = () => {
  const metrics = [
    { icon: TrendingUp, value: '400%', label: 'ROI Increase', color: 'text-green-600' },
    { icon: DollarSign, value: '$2.3B', label: 'Cost Savings', color: 'text-blue-600' },
    { icon: Clock, value: '60%', label: 'Process Time Reduction', color: 'text-purple-600' },
    { icon: Users, value: '85%', label: 'Productivity Boost', color: 'text-orange-600' },
    { icon: Target, value: '99.8%', label: 'Accuracy Rate', color: 'text-red-600' },
    { icon: CheckCircle, value: '45%', label: 'Defect Reduction', color: 'text-indigo-600' },
  ];

  const challenges = [
    'Manual quality control processes causing delays',
    'Predictive maintenance failures leading to downtime',
    'Supply chain inefficiencies and inventory waste',
    'Limited real-time visibility into production metrics',
    'High operational costs and resource utilization',
  ];

  const solutions = [
    {
      title: 'AI-Powered Quality Control',
      description: 'Implemented computer vision systems for automated defect detection with 99.8% accuracy.',
      impact: 'Reduced inspection time by 75% and improved quality standards.'
    },
    {
      title: 'Predictive Maintenance System',
      description: 'Deployed IoT sensors and ML algorithms to predict equipment failures.',
      impact: 'Decreased unplanned downtime by 80% and extended equipment life.'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'AI-driven demand forecasting and inventory management systems.',
      impact: 'Reduced inventory costs by 35% while improving delivery times.'
    },
    {
      title: 'Production Analytics Dashboard',
      description: 'Real-time monitoring and analytics platform for production optimization.',
      impact: 'Increased overall equipment effectiveness (OEE) by 40%.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link 
              href="/case-studies" 
              className="flex items-center text-blue-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Case Studies
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                🏭 Manufacturing Case Study
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Transformation Success:<br />
              Manufacturing Giant Achieves 400% ROI
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl leading-relaxed">
              Discover how a Fortune 500 manufacturing company transformed operations with AI, 
              achieving 400% ROI, 60% cost reduction, and $2.3B in savings through intelligent automation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The comprehensive AI implementation delivered measurable results across all key performance indicators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leading Fortune 500 manufacturing company faced critical operational challenges 
              that threatened profitability and market competitiveness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">!</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">{challenge}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI implementation addressed each challenge with cutting-edge technology and proven methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">{solution.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The transformation was executed in strategic phases to minimize disruption and maximize results.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {[
              { phase: 'Phase 1', title: 'Assessment & Planning', duration: '2 months', description: 'Comprehensive analysis and strategic planning' },
              { phase: 'Phase 2', title: 'Pilot Implementation', duration: '3 months', description: 'Proof of concept and initial deployment' },
              { phase: 'Phase 3', title: 'Full Deployment', duration: '6 months', description: 'Enterprise-wide AI solution rollout' },
              { phase: 'Phase 4', title: 'Optimization', duration: 'Ongoing', description: 'Continuous improvement and scaling' },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start mb-8"
              >
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                <div className="ml-16 bg-white p-6 rounded-xl shadow-md border border-gray-200 flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {phase.phase}
                    </span>
                    <span className="ml-4 text-sm text-gray-500">{phase.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-700">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover how AI can revolutionize your business operations and deliver similar results. 
              Get started with our comprehensive AI transformation assessment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Your AI Transformation
                <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View More Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;