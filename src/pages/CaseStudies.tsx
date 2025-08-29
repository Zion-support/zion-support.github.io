import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock, ArrowRight, CheckCircle } from 'lucide-react';

function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'Major Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Complex patient data analysis and treatment optimization across multiple facilities',
      solution: 'Implemented AI-powered analytics platform with real-time insights and predictive modeling',
      results: [
        '40% improvement in patient outcomes',
        '30% reduction in operational costs',
        '50% faster diagnosis times',
        '95% accuracy in treatment recommendations'
      ],
      technologies: ['AI/ML', 'Big Data', 'Cloud Computing', 'Real-time Analytics'],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: 2,
      title: 'Quantum Computing for Financial Trading',
      client: 'Global Investment Bank',
      industry: 'Finance',
      challenge: 'Complex financial modeling and risk assessment requiring unprecedented computational power',
      solution: 'Developed quantum computing solution for portfolio optimization and risk analysis',
      results: [
        '1000x faster computation speeds',
        '25% improvement in portfolio returns',
        '60% reduction in risk exposure',
        'Real-time market analysis capabilities'
      ],
      technologies: ['Quantum Computing', 'AI/ML', 'Financial Modeling', 'Risk Analytics'],
      duration: '12 months',
      team: '15 researchers'
    },
    {
      id: 3,
      title: 'Edge Computing IoT Platform',
      client: 'Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'Real-time monitoring and optimization of distributed manufacturing operations',
      solution: 'Deployed edge computing platform with IoT sensors and AI-powered analytics',
      results: [
        '99.9% system uptime',
        '35% increase in production efficiency',
        '45% reduction in maintenance costs',
        'Real-time quality control monitoring'
      ],
      technologies: ['Edge Computing', 'IoT', 'AI/ML', 'Real-time Analytics'],
      duration: '8 months',
      team: '10 engineers'
    },
    {
      id: 4,
      title: 'AI Cybersecurity Suite',
      client: 'Government Agency',
      industry: 'Government',
      challenge: 'Advanced threat detection and prevention for critical infrastructure',
      solution: 'Implemented AI-powered cybersecurity suite with zero-trust architecture',
      results: [
        '99.9% threat detection rate',
        '90% reduction in false positives',
        'Real-time threat response',
        'Zero security breaches'
      ],
      technologies: ['AI/ML', 'Cybersecurity', 'Zero Trust', 'Threat Intelligence'],
      duration: '10 months',
      team: '20 security experts'
    },
    {
      id: 5,
      title: 'Digital Transformation Platform',
      client: 'Retail Chain',
      industry: 'Retail',
      challenge: 'Legacy system modernization and customer experience enhancement',
      solution: 'Complete digital transformation with AI-powered customer insights and automation',
      results: [
        '50% improvement in customer satisfaction',
        '40% increase in online sales',
        '30% reduction in operational costs',
        'Seamless omnichannel experience'
      ],
      technologies: ['Digital Transformation', 'AI/ML', 'Cloud Computing', 'Customer Analytics'],
      duration: '14 months',
      team: '25 specialists'
    },
    {
      id: 6,
      title: 'Sustainable Technology Solutions',
      client: 'Energy Company',
      industry: 'Energy',
      challenge: 'Environmental impact reduction while maintaining operational efficiency',
      solution: 'AI-powered sustainability platform with green technology integration',
      results: [
        '45% reduction in carbon footprint',
        '30% improvement in energy efficiency',
        'Real-time environmental monitoring',
        'Sustainable resource management'
      ],
      technologies: ['AI/ML', 'IoT', 'Sustainability', 'Energy Analytics'],
      duration: '16 months',
      team: '18 specialists'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Discover real-world success stories and transformative technology solutions delivered by Zion Tech Group across various industries."
        keywords="case studies, success stories, technology solutions, AI, healthcare, finance, manufacturing, cybersecurity, digital transformation"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Inspire</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how our innovative technology solutions have transformed businesses 
              across industries, delivering measurable results and driving growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                500+ Projects Completed
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                95% Client Satisfaction
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                40% Average Efficiency Gain
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our technology solutions have revolutionized 
              business operations and delivered exceptional ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                    {study.industry}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {study.duration}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {study.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  <strong>Client:</strong> {study.client}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-4">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    Team: {study.team}
                  </span>
                  <a
                    href={`/case-studies/${study.id}`}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 flex items-center"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantifying the success and transformation we've delivered 
              across various industries and use cases.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: '500+', label: 'Projects Completed', description: 'Successfully delivered solutions across industries' },
              { metric: '95%', label: 'Client Satisfaction', description: 'Consistently high satisfaction ratings' },
              { metric: '40%', label: 'Average Efficiency Gain', description: 'Typical improvement in operational efficiency' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-xl font-semibold text-blue-400 mb-2">{stat.label}</div>
                <div className="text-gray-300">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can transform your business 
              and deliver exceptional results like the ones you've seen here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/services-overview"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
