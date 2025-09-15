import { motion } from 'framer-motion';
import React from 'react';

const ComprehensiveCaseStudies2026: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Optimize production efficiency and reduce operational costs",
      solution: "Deployed advanced AI agents for autonomous production management",
      results: {
        efficiency: "+300%",
        costSavings: "$50M annually",
        accuracy: "99.7%",
        timeframe: "6 months"
      },
      image: "🏭",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      company: "Tech Research Institute",
      industry: "Research & Development",
      challenge: "Solve complex optimization problems in drug discovery",
      solution: "Implemented quantum-neural fusion algorithms",
      results: {
        efficiency: "1000x faster",
        costSavings: "$200M in R&D",
        accuracy: "95% success rate",
        timeframe: "12 months"
      },
      image: "⚡",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Medical Application",
      company: "Advanced Medical Center",
      industry: "Healthcare",
      challenge: "Restore mobility for paralyzed patients",
      solution: "Developed non-invasive brain-computer interface system",
      results: {
        efficiency: "80% mobility restoration",
        costSavings: "$10M in treatment costs",
        accuracy: "92% success rate",
        timeframe: "18 months"
      },
      image: "🧬",
      featured: false
    },
    {
      id: 4,
      title: "Climate Restoration Project",
      company: "Environmental Solutions Inc",
      industry: "Environmental",
      challenge: "Reverse climate change effects in critical regions",
      solution: "Deployed advanced climate engineering technologies",
      results: {
        efficiency: "3°C temperature reduction",
        costSavings: "$500M in damage prevention",
        accuracy: "98% target achievement",
        timeframe: "24 months"
      },
      image: "🌍",
      featured: false
    },
    {
      id: 5,
      title: "Space Exploration AI",
      company: "Space Technology Corp",
      industry: "Aerospace",
      challenge: "Autonomous space mission management",
      solution: "Implemented synthetic intelligence for mission control",
      results: {
        efficiency: "50% mission success increase",
        costSavings: "$1B in mission costs",
        accuracy: "99.5% autonomous decisions",
        timeframe: "36 months"
      },
      image: "🚀",
      featured: false
    },
    {
      id: 6,
      title: "Financial AI Revolution",
      company: "Global Investment Bank",
      industry: "Finance",
      challenge: "Improve investment decision accuracy and risk management",
      solution: "Deployed predictive AI with quantum-enhanced processing",
      results: {
        efficiency: "85% prediction accuracy",
        costSavings: "$2B in risk mitigation",
        accuracy: "99.2% fraud detection",
        timeframe: "9 months"
      },
      image: "💰",
      featured: false
    }
  ];

  const industries = [
    "All Industries",
    "Manufacturing",
    "Healthcare",
    "Finance",
    "Research & Development",
    "Environmental",
    "Aerospace",
    "Technology"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 COMPREHENSIVE CASE STUDIES 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover how our revolutionary technologies have transformed businesses across industries, 
              delivering measurable results and unprecedented value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Case Studies →
              </button>
              <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold">
                Submit Your Project
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Industry Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Case Studies */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">🌟 Featured Success Stories</h2>
          <p className="text-xl text-gray-300">Our most impactful technology implementations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.filter(study => study.featured).map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-6">{study.image}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-full font-semibold">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-indigo-200 text-lg">{study.company}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                <p className="text-gray-300 mb-4">{study.challenge}</p>
                
                <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                <p className="text-gray-300 mb-4">{study.solution}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">{study.results.efficiency}</div>
                  <div className="text-indigo-200 text-sm">Efficiency Gain</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">{study.results.costSavings}</div>
                  <div className="text-indigo-200 text-sm">Cost Savings</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">{study.results.accuracy}</div>
                  <div className="text-indigo-200 text-sm">Accuracy Rate</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">{study.results.timeframe}</div>
                  <div className="text-indigo-200 text-sm">Implementation</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Read Full Case Study →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Case Studies Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">📈 All Success Stories</h2>
          <p className="text-xl text-gray-300">Complete collection of our technology implementations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{study.image}</div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-full font-semibold">
                  {study.industry}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
              <p className="text-indigo-200 text-sm mb-3">{study.company}</p>
              <p className="text-gray-300 mb-4 text-sm">{study.challenge}</p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded p-2 text-center">
                  <div className="text-lg font-bold text-white">{study.results.efficiency}</div>
                  <div className="text-indigo-200 text-xs">Efficiency</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded p-2 text-center">
                  <div className="text-lg font-bold text-white">{study.results.costSavings}</div>
                  <div className="text-indigo-200 text-xs">Savings</div>
                </div>
              </div>

              <button className="w-full text-indigo-400 hover:text-indigo-300 font-semibold text-sm">
                View Details →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">📊 Our Impact by Numbers</h2>
            <p className="text-xl text-white/90">Measurable results across all our technology implementations</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/90 text-lg mb-2">Successful Projects</div>
              <div className="text-white/70 text-sm">Across all industries</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">$50B+</div>
              <div className="text-white/90 text-lg mb-2">Value Created</div>
              <div className="text-white/70 text-sm">For our clients</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">99.5%</div>
              <div className="text-white/90 text-lg mb-2">Success Rate</div>
              <div className="text-white/70 text-sm">Project completion</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90 text-lg mb-2">Countries</div>
              <div className="text-white/70 text-sm">Global presence</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their business with our revolutionary technologies. 
            Let's create your success story together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Project
            </button>
            <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveCaseStudies2026;