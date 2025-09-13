import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const CaseStudyShowcase2025 = () => {
  const caseStudies = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Manufacturing",
      title: "AI-Powered Supply Chain Optimization",
      challenge: "Manual supply chain processes causing 30% inefficiency and $2M annual losses",
      solution: "Implemented AI-driven demand forecasting and automated inventory management",
      results: [
        "40% reduction in inventory costs",
        "60% improvement in delivery times",
        "$3.2M annual savings",
        "99.5% order accuracy"
      ],
      timeline: "6 months",
      roi: "320%",
      featured: true
    },
    {
      id: 2,
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      title: "Quantum-Enhanced Risk Analysis",
      challenge: "Traditional risk models failing to predict market volatility accurately",
      solution: "Deployed quantum computing algorithms for real-time risk assessment",
      results: [
        "85% improvement in risk prediction accuracy",
        "50% faster transaction processing",
        "Zero false positives in fraud detection",
        "200% increase in client satisfaction"
      ],
      timeline: "4 months",
      roi: "450%",
      featured: false
    },
    {
      id: 3,
      company: "HealthTech Solutions",
      industry: "Healthcare",
      title: "Neural Interface Patient Monitoring",
      challenge: "Manual patient monitoring leading to delayed interventions and poor outcomes",
      solution: "Implemented neural interface technology for real-time patient data analysis",
      results: [
        "70% reduction in critical event response time",
        "90% improvement in early warning detection",
        "40% decrease in patient readmission rates",
        "95% patient satisfaction score"
      ],
      timeline: "8 months",
      roi: "280%",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 mb-6">
            <CheckCircleIcon className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results with
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Real Companies
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how leading companies across industries have transformed their operations and achieved remarkable results with our AI solutions.
          </p>
        </motion.div>

        {/* Featured Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          {(() => {
            const featured = caseStudies.find(study => study.featured);
            return (
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        FEATURED CASE STUDY
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                        {featured.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {featured.title}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-300 mb-2">Challenge:</h4>
                      <p className="text-gray-400 mb-4">{featured.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-300 mb-2">Solution:</h4>
                      <p className="text-gray-400">{featured.solution}</p>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-300">
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-2" />
                        Timeline: {featured.timeline}
                      </div>
                      <div className="flex items-center">
                        <ChartBarIcon className="w-4 h-4 mr-2" />
                        ROI: {featured.roi}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Key Results:</h4>
                    <div className="space-y-3">
                      {featured.results.map((result, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                      Read Full Case Study
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>

        {/* Other Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.filter(study => !study.featured).map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {study.industry}
                </span>
                <span className="text-green-400 text-sm font-semibold">
                  ROI: {study.roi}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {study.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm">
                {study.challenge}
              </p>
              
              <div className="space-y-2 mb-4">
                {study.results.slice(0, 2).map((result, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{result}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <div className="flex items-center">
                    <ClockIcon className="w-3 h-3 mr-1" />
                    {study.timeline}
                  </div>
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="w-3 h-3 mr-1" />
                    {study.roi} ROI
                  </div>
                </div>
                
                <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center">
                  Learn More
                  <ArrowRightIcon className="w-3 h-3 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their operations with our AI solutions. Let's discuss how we can help your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                Start Your Success Story
              </button>
              <button className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                View All Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase2025;