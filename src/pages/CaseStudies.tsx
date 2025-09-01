import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      company: 'MedTech Solutions',
      challenge: 'MedTech Solutions needed to analyze large volumes of patient data to identify patterns and improve treatment outcomes.',
      results: [
        '40% reduction in diagnostic time',
        '25% improvement in treatment accuracy',
        '60% increase in operational efficiency'
      ],
      duration: '6 months',
      teamSize: '12 professionals'
    },
    {
      id: 2,
      title: 'Quantum-Enhanced Financial Risk Management',
      company: 'Global Finance Corp',
      challenge: 'Global Finance Corp required advanced risk assessment capabilities to handle complex financial instruments.',
      results: [
        '50% faster risk calculations',
        '35% reduction in false positives',
        '45% improvement in portfolio optimization'
      ],
      duration: '8 months',
      teamSize: '15 professionals'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped organizations across various industries transform their operations 
              with cutting-edge AI, cybersecurity, and cloud solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Case Studies</h2>
          <div className="grid gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-48 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <Building className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                      <span className="text-xs text-gray-400">Case Study</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-cyan-400 font-medium mb-3">{study.company}</p>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    <div className="space-y-2 mb-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}