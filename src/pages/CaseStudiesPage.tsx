import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 'fortune-100-manufacturing',
      title: 'Fortune 100 Manufacturing Transformation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Optimize production lines and reduce operational costs',
      solution: 'AI-powered predictive maintenance and workflow automation',
      results: {
        costReduction: '73%',
        productivityIncrease: '520%',
        roi: '1,840%',
        valueCreated: '$8.2B'
      },
      image: '/api/placeholder/600/400',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'fortune-50-logistics',
      title: 'Fortune 50 Logistics Intelligence Mesh',
      company: 'International Logistics Ltd',
      industry: 'Logistics',
      challenge: 'Real-time supply chain optimization and predictive analytics',
      solution: 'Real-Time Intelligence Mesh with sub-2ms latency',
      results: {
        latencyReduction: '<2ms',
        efficiencyGain: '2,400%',
        roi: '26,667%',
        valueCreated: '$12B'
      },
      image: '/api/placeholder/600/400',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'fortune-100-financial',
      title: 'Fortune 100 Financial Services Revolution',
      company: 'Global Financial Group',
      industry: 'Financial Services',
      challenge: 'Fraud detection and risk assessment automation',
      solution: 'Advanced Cybersecurity AI and Cognitive Orchestration',
      results: {
        threatPrevention: '99.97%',
        costReduction: '68%',
        roi: '18,400%',
        valueCreated: '$18.4B'
      },
      image: '/api/placeholder/600/400',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'fortune-500-healthcare',
      title: 'Fortune 500 Healthcare AI Implementation',
      company: 'National Healthcare Systems',
      industry: 'Healthcare',
      challenge: 'Patient data analytics and diagnostic support',
      solution: 'AI Data Analytics and Intelligent Document Processing',
      results: {
        accuracyImprovement: '98.9%',
        processingSpeed: '85%',
        roi: '2,400%',
        valueCreated: '$4.7B'
      },
      image: '/api/placeholder/600/400',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'fortune-100-retail',
      title: 'Fortune 100 Retail Automation',
      company: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'Inventory management and customer experience optimization',
      solution: 'AI Workflow Automation and Virtual Assistant',
      results: {
        automationRate: '98.7%',
        customerSatisfaction: '99.7%',
        roi: '3,847%',
        valueCreated: '$6.2B'
      },
      image: '/api/placeholder/600/400',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'fortune-50-technology',
      title: 'Fortune 50 Technology Innovation',
      company: 'Tech Innovation Corp',
      industry: 'Technology',
      challenge: 'Software development acceleration and code generation',
      solution: 'Generative AI Code Generation Platform',
      results: {
        developmentSpeed: '10.2x',
        productivityGain: '85%',
        roi: '2,400%',
        valueCreated: '$47.3M'
      },
      image: '/api/placeholder/600/400',
      color: 'from-red-500 to-pink-600'
    },
  ];

  const stats = [
    { value: '240+', label: 'Fortune 500 Clients' },
    { value: '$211.7B', label: 'Total Value Created' },
    { value: '99.97%', label: 'Average Success Rate' },
    { value: '1,840%', label: 'Average ROI' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Discover how Fortune 500 companies are transforming their operations with our revolutionary AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real companies using our AI solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-48 bg-gradient-to-r ${study.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {study.results.roi}
                      </div>
                      <div className="text-sm text-green-800">ROI</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {study.results.valueCreated}
                      </div>
                      <div className="text-sm text-blue-800">Value Created</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {study.company}
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Join 240+ Fortune 500 companies already leveraging our revolutionary AI solutions 
              for unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;