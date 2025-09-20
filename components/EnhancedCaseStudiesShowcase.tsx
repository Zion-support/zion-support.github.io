<<<<<<< HEAD
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EnhancedCaseStudiesShowcase: React.FC = () => {
  const caseStudies = [
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 Manufacturing Revolution',
      industry: 'Manufacturing',
      client: 'Global Manufacturing Giant',
      roi: '2,400%',
      timeframe: '6 months',
      description: 'Complete AI transformation of manufacturing operations with autonomous quality control and predictive maintenance.',
      image: '/images/case-studies/manufacturing-transformation.jpg',
      tags: ['AI 'Automation', 'Predictive 'Analytics', 'Quality Control'],
      metrics: {
        efficiency: '+340%',
        costReduction: '-68%',
        defectRate: '-92%'
      }
    },
    {
      id: 'financial-services-breakthrough',
      title: 'Global Financial Services Transformation',
      industry: 'Financial Services',
      client: 'International Bank',
      roi: '1,800%',
      timeframe: '8 months',
      description: 'Revolutionary AI implementation in risk managementfraud detectionand customer service automation.',
      image: '/images/case-studies/financial-transformation.jpg',
      tags: ['Risk 'Management', 'Fraud 'Detection', 'Customer Service'],
      metrics: {
        processingSpeed: '+450%',
        accuracy: '+98%',
        customerSatisfaction: '+89%'
      }
    },
    {
      id: 'healthcare-diagnostic-revolution',
      title: 'Healthcare Diagnostic AI Breakthrough',
      industry: 'Healthcare',
      client: 'Major Hospital Network',
      roi: '3,200%',
      timeframe: '12 months',
      description: 'AI-powered diagnostic systems that reduced diagnosis time by 85% while improving accuracy to 98.7%.',
      image: '/images/case-studies/healthcare-ai.jpg',
      tags: ['Medical 'AI', 'Diagnostic 'Systems', 'Patient Care'],
      metrics: {
        diagnosisSpeed: '+850%',
        accuracy: '+98.7%',
        patientOutcomes: '+76%'
      }
    },
    {
      id: 'retail-transformation-success',
      title: 'Global Retail Transformation Success',
      industry: 'Retail',
      client: 'International Retail Chain',
      roi: '2,100%',
      timeframe: '9 months',
      description: 'Complete retail ecosystem transformation with AI-powered inventory managementcustomer insightsand personalized experiences.',
      image: '/images/case-studies/retail-transformation.jpg',
      tags: ['Inventory 'Management', 'Customer 'Analytics', 'Personalization'],
      metrics: {
        salesGrowth: '+156%',
        inventoryEfficiency: '+234%',
        customerRetention: '+78%'
      }
    },
    {
      id: 'logistics-automation-breakthrough',
      title: 'Global Logistics Automation Breakthrough',
      industry: 'Logistics',
      client: 'International Logistics Company',
      roi: '2,800%',
      timeframe: '10 months',
      description: 'Revolutionary logistics optimization with AI-driven route planningpredictive maintenanceand autonomous operations.',
      image: '/images/case-studies/logistics-ai.jpg',
      tags: ['Route 'Optimization', 'Predictive 'Maintenance', 'Autonomous Operations'],
      metrics: {
        deliverySpeed: '+290%',
        fuelEfficiency: '+67%',
        operationalCosts: '-45%'
      }
    },
    {
      id: 'quantum-financial-optimization',
      title: 'Quantum Financial Optimization Success',
      industry: 'Financial Services',
      client: 'Investment Bank',
      roi: '4,500%',
      timeframe: '18 months',
      description: 'Breakthrough quantum AI implementation for portfolio optimization and risk analysisdelivering unprecedented returns.',
      image: '/images/case-studies/quantum-finance.jpg',
      tags: ['Quantum 'Computing', 'Portfolio 'Optimization', 'Risk Analysis'],
      metrics: {
        portfolioReturns: '+340%',
        riskReduction: '-78%',
        processingSpeed: '+1,200%'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Revolutionary Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how leading enterprises achieved unprecedented transformation with our AI solutions. 
            Real resultsreal impactreal ROI.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-blue-600/20 px-6 py-3 rounded-full border border-blue-400/30">
              <span className="text-blue-300 font-semibold">Average ROI: 2,800%</span>
            </div>
            <div className="bg-purple-600/20 px-6 py-3 rounded-full border border-purple-400/30">
              <span className="text-purple-300 font-semibold">500+ Enterprise Clients</span>
            </div>
            <div className="bg-green-600/20 px-6 py-3 rounded-full border border-green-400/30">
              <span className="text-green-300 font-semibold">99.7% Success Rate</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((studyindex) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 bg-blue-600/90 px-3 py-1 rounded-full text-sm font-semibold">
                  {study.industry}
                </div>
                <div className="absolute top-4 right-4 bg-green-600/90 px-3 py-1 rounded-full text-sm font-bold">
                  {study.roi} ROI
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {study.description}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700/50 px-3 py-1 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(study.metrics).map(([keyvalue]metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold text-green-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span className="font-semibold">Client:</span> {study.client}
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="font-semibold">Timeframe:</span> {study.timeframe}
                  </div>
                </div>

                <Link
                  to={`/case-studies/${study.id}`}
                  className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Full Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            View All Success Stories
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedCaseStudiesShowcase;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
