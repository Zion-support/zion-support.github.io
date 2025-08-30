import React from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';
import { TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  ArrowRight,
  Star,
  CheckCircle
 } from 'lucide-react';

export const CaseStudiesSection: React.FC = (): JSX.Element => {
  const caseStudies = [
    {
      comp: 'TechCorp Solutions',
      industry: 'Financial Services',
      challenge: 'Legacy system modernization and digital transformation',
      solution: 'Implemented AI-powered automation and cloud migration',
      results[
        '40% reduction in operational costs',
        '60% improvement in customer satisfaction',
        '3x faster transaction processing'
      ],
      logo: '🏦',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      comp: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Supply chain optimization and predictive maintenance',
      solution: 'IoT sensors and AI-powered analytics platform',
      results[
        '25% reduction in downtime',
        '30% improvement in supply chain efficiency',
        '$2M annual cost savings'
      ],
      logo: '🏭',
      color: 'from-green-500 to-emerald-500'
    },
    {
      comp: 'HealthTech Innovations',
      industry: 'Healthcare',
      challenge: 'Patient data security and compliance management',
      solution: 'Zero-trust security framework and automated compliance',
      results[
        '99.9% security compliance rate',
        '50% reduction in audit preparation time',
        'Enhanced patient data protection'
      ],
      logo: '🏥',
      color: 'from-purple-500 to-pink-500'
    }
  ];

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover how our innovative solutions have transformed businesses across industries
          </p>
        </motion.div>

        <div className="grid lg: grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index)  => (
            <motion.div
              key={study.comp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${study.color} mr-4`}>
                  <span className="text-2xl">{study.logo}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {study.comp}
                  </h3>
                  <p className="text-gray-600 text-sm">{study.industry}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {study.title}
                </h3>
                
                <p className="text-blue-400 font-semibold mb-3">
                  {study.company}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                  <p className="text-gray-400 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                  <p className="text-gray-400 text-sm">{study.solution}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                    Read Full Case Study →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Ready to write your success story?</span>
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  )};

export default CaseStudiesSection;
