import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, DollarSign, Clock, Target } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and predictive modeling for improved care outcomes",
      solution: "Implemented AI-powered analytics platform with machine learning algorithms for patient risk assessment",
      results: [
        "30% improvement in patient outcome predictions",
        "25% reduction in readmission rates",
        "40% faster diagnosis turnaround time",
        "$2.5M annual cost savings"
      ],
      metrics: {
        roi: "450%",
        timeframe: "18 months",
        teamSize: "8 specialists"
      }
    },
    {
      id: 2,
      title: "Quantum Neural Network for Financial Risk Assessment",
      client: "Global Investment Bank",
      industry: "Financial Services",
      challenge: "Complex market risk modeling requiring quantum-level computational power",
      solution: "Deployed quantum neural network platform for real-time risk assessment and portfolio optimization",
      results: [
        "60% faster risk calculations",
        "35% improvement in prediction accuracy",
        "Real-time portfolio rebalancing",
        "$15M additional trading profits"
      ],
      metrics: {
        roi: "320%",
        timeframe: "24 months",
        teamSize: "12 quantum specialists"
      }
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      client: "Manufacturing Conglomerate",
      industry: "Manufacturing",
      challenge: "Manual business processes causing delays and inefficiencies across 15 facilities",
      solution: "Implemented autonomous business operations platform with AI-driven process automation",
      results: [
        "70% reduction in manual processing time",
        "45% improvement in operational efficiency",
        "24/7 autonomous operations",
        "$8M annual operational cost savings"
      ],
      metrics: {
        roi: "280%",
        timeframe: "12 months",
        teamSize: "15 automation experts"
      }
    },
    {
      id: 4,
      title: "SOC2 Compliance Automation Suite",
      client: "SaaS Technology Company",
      industry: "Technology",
      challenge: "Manual compliance processes taking 3+ months annually with high error rates",
      solution: "Deployed automated SOC2 compliance platform with continuous monitoring and reporting",
      results: [
        "90% reduction in compliance preparation time",
        "100% accuracy in compliance reporting",
        "Real-time compliance monitoring",
        "Zero compliance violations in 2 years"
      ],
      metrics: {
        roi: "600%",
        timeframe: "6 months",
        teamSize: "6 compliance specialists"
      }
    },
    {
      id: 5,
      title: "5G Enterprise Network Infrastructure",
      client: "Smart City Initiative",
      industry: "Government",
      challenge: "Legacy network infrastructure unable to support IoT devices and smart city applications",
      solution: "Designed and deployed enterprise-grade 5G network with edge computing capabilities",
      results: [
        "10x faster network speeds",
        "Support for 100,000+ IoT devices",
        "99.99% network uptime",
        "40% reduction in infrastructure costs"
      ],
      metrics: {
        roi: "380%",
        timeframe: "36 months",
        teamSize: "25 network engineers"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Success Stories
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how Zion Tech Group has transformed businesses across industries with cutting-edge AI, quantum computing, and autonomous solutions.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              AI & Machine Learning
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Quantum Computing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Autonomous Systems
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Cybersecurity
            </span>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">Client: {study.client}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Challenge</h4>
                    <p className="text-gray-400 text-sm">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Solution</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-cyan-400">{study.metrics.roi}</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">{study.metrics.timeframe}</div>
                        <div className="text-xs text-gray-400">Timeline</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400">{study.metrics.teamSize}</div>
                        <div className="text-xs text-gray-400">Team</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how Zion Tech Group can transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-all duration-300">
                View More Cases
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;