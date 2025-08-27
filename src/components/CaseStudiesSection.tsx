import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  ArrowRight, 
  Calendar,
  DollarSign,
  Target,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    efficiency: number;
    costReduction: number;
    timeSaved: number;
    revenueIncrease: number;
  };
  technologies: string[];
  duration: string;
  teamSize: number;
  budget: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "AI-Powered Trading Platform Transformation",
    client: "Global Financial Services",
    industry: "FinTech",
    challenge: "Legacy trading systems causing 40% slower execution times and $2M monthly losses due to market inefficiencies.",
    solution: "Implemented quantum-ready AI algorithms with real-time market analysis, automated risk management, and predictive analytics.",
    results: [
      "300% increase in trading execution speed",
      "Zero system downtime in 18 months",
      "45% reduction in operational costs",
      "$15M additional revenue generated"
    ],
    metrics: {
      efficiency: 300,
      costReduction: 45,
      timeSaved: 85,
      revenueIncrease: 150
    },
    technologies: ["AI/ML", "Quantum Computing", "Blockchain", "Real-time Analytics"],
    duration: "8 months",
    teamSize: 12,
    budget: "$2.5M"
  },
  {
    id: 2,
    title: "Enterprise Cybersecurity Overhaul",
    client: "Healthcare Innovations Corp",
    industry: "Healthcare",
    challenge: "Multiple security breaches exposing patient data, non-compliance with HIPAA regulations, and outdated security infrastructure.",
    solution: "Deployed zero-trust architecture with AI-powered threat detection, comprehensive compliance framework, and 24/7 security monitoring.",
    results: [
      "100% compliance with HIPAA regulations",
      "Zero security breaches in 24 months",
      "99.9% threat detection accuracy",
      "60% reduction in security incidents"
    ],
    metrics: {
      efficiency: 250,
      costReduction: 35,
      timeSaved: 70,
      revenueIncrease: 25
    },
    technologies: ["Zero Trust", "AI Security", "Compliance Automation", "Threat Intelligence"],
    duration: "6 months",
    teamSize: 8,
    budget: "$1.8M"
  },
  {
    id: 3,
    title: "Cloud Infrastructure Modernization",
    client: "E-commerce Giant",
    industry: "Retail",
    challenge: "Monolithic architecture unable to handle 10x traffic spikes during peak seasons, causing 30% cart abandonment.",
    solution: "Migrated to microservices architecture with auto-scaling, serverless computing, and AI-powered load balancing.",
    results: [
      "99.99% uptime during peak seasons",
      "10x increase in traffic handling capacity",
      "70% reduction in infrastructure costs",
      "25% increase in conversion rates"
    ],
    metrics: {
      efficiency: 400,
      costReduction: 70,
      timeSaved: 90,
      revenueIncrease: 40
    },
    technologies: ["Microservices", "Serverless", "Auto-scaling", "AI Load Balancing"],
    duration: "10 months",
    teamSize: 15,
    budget: "$3.2M"
  }
];

export const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCaseStudy = (caseStudy: CaseStudy) => {
    setSelectedCase(caseStudy);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
  };

  return (
    <section className="py-20 bg-zion-slate-dark/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Success <span className="text-zion-cyan">Case Studies</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Real projects, real results. Discover how we've transformed businesses across industries with our innovative solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-xl p-6 border border-zion-slate/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              onClick={() => openCaseStudy(caseStudy)}
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                  <span className="text-xs text-zion-slate-light">{caseStudy.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                <p className="text-zion-cyan text-sm">{caseStudy.client}</p>
              </div>

              {/* Challenge Preview */}
              <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                {caseStudy.challenge}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-zion-cyan">{caseStudy.metrics.efficiency}%</div>
                  <div className="text-xs text-zion-slate-light">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-zion-cyan">{caseStudy.metrics.costReduction}%</div>
                  <div className="text-xs text-zion-slate-light">Cost Reduction</div>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-zion-slate/30 text-zion-slate-light px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {caseStudy.technologies.length > 3 && (
                  <span className="text-xs text-zion-cyan">+{caseStudy.technologies.length - 3} more</span>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-zion-slate-light">
                  Team: {caseStudy.teamSize} • Budget: {caseStudy.budget}
                </div>
                <ArrowRight className="h-4 w-4 text-zion-cyan" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already achieved remarkable results with our innovative technology solutions.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105">
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Case Study Modal */}
        {isModalOpen && selectedCase && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-zion-slate-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-zion-slate/20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full">
                      {selectedCase.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">{selectedCase.title}</h3>
                    <p className="text-zion-cyan">{selectedCase.client}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-zion-slate-light hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Target className="h-5 w-5 text-red-400 mr-2" />
                      The Challenge
                    </h4>
                    <p className="text-zion-slate-light">{selectedCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Zap className="h-5 w-5 text-zion-cyan mr-2" />
                      Our Solution
                    </h4>
                    <p className="text-zion-slate-light">{selectedCase.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
                    Results Achieved
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedCase.results.map((result, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Metrics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center bg-zion-slate/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-zion-cyan">{selectedCase.metrics.efficiency}%</div>
                      <div className="text-sm text-zion-slate-light">Efficiency Gain</div>
                    </div>
                    <div className="text-center bg-zion-slate/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-zion-cyan">{selectedCase.metrics.costReduction}%</div>
                      <div className="text-sm text-zion-slate-light">Cost Reduction</div>
                    </div>
                    <div className="text-center bg-zion-slate/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-zion-cyan">{selectedCase.metrics.timeSaved}%</div>
                      <div className="text-sm text-zion-slate-light">Time Saved</div>
                    </div>
                    <div className="text-center bg-zion-slate/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-zion-cyan">{selectedCase.metrics.revenueIncrease}%</div>
                      <div className="text-sm text-zion-slate-light">Revenue Increase</div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-zion-slate/20">
                  <div className="text-center">
                    <Calendar className="h-6 w-6 text-zion-cyan mx-auto mb-2" />
                    <div className="text-sm text-zion-slate-light">Duration</div>
                    <div className="text-white font-semibold">{selectedCase.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 text-zion-cyan mx-auto mb-2" />
                    <div className="text-sm text-zion-slate-light">Team Size</div>
                    <div className="text-white font-semibold">{selectedCase.teamSize} members</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-6 w-6 text-zion-cyan mx-auto mb-2" />
                    <div className="text-sm text-zion-slate-light">Budget</div>
                    <div className="text-white font-semibold">{selectedCase.budget}</div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-zion-slate/20 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-zion-slate/30 hover:bg-zion-slate/50 text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
