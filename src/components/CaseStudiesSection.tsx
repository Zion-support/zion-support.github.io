import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      company: 'TechCorp Solutions',
      industry: 'Financial Services',
      challenge: 'Legacy system modernization and digital transformation',
      solution: 'Implemented AI-powered automation and cloud migration',
      results: [
        '40% reduction in operational costs',
        '60% improvement in customer satisfaction',
        '3x faster transaction processing'
      ],
      logo: '🏦',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Supply chain optimization and predictive maintenance',
      solution: 'IoT sensors and AI-powered analytics platform',
      results: [
        '25% reduction in downtime',
        '30% improvement in supply chain efficiency',
        '$2M annual cost savings'
      ],
      logo: '🏭',
      color: 'from-green-500 to-emerald-500'
    },
    {
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      challenge: 'Patient data security and compliance management',
      solution: 'Zero-trust security framework and automated compliance',
      results: [
        '99.9% security compliance rate',
        '50% reduction in audit preparation time',
        'Enhanced patient data protection'
      ],
      logo: '🏥',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve
            remarkable results through innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${study.color} mr-4`}>
                  <span className="text-2xl">{study.logo}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {study.company}
                  </h3>
                  <p className="text-gray-600 text-sm">{study.industry}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>

                <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                <p className="text-gray-600 text-sm">{study.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                <ul className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>5.0</span>
                  <span className="mx-2">•</span>
                  <span>Verified Results</span>
                </div>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their
              businesses with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
              >
                Start Your Project
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-medium transition-colors duration-200"
              >
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
