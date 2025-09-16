import React from 'react';
import { motion } from 'framer-motion';

const ComprehensiveCaseStudies2026: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency",
      solution: "Implemented autonomous AI agents and quantum-optimized processes",
      results: [
        "300% increase in operational efficiency",
        "40% reduction in operational costs",
        "99.9% system uptime achieved",
        "$50M annual cost savings"
      ],
      image: "🏭",
      gradient: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      company: "Pharmaceutical Research Institute",
      industry: "Healthcare",
      challenge: "Drug discovery taking 10+ years per compound",
      solution: "Deployed quantum computing for molecular simulation and drug design",
      results: [
        "90% faster drug discovery process",
        "75% reduction in research costs",
        "15 new drug compounds identified",
        "$200M in potential revenue"
      ],
      image: "🧬",
      gradient: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Implementation",
      company: "Medical Technology Solutions",
      industry: "Healthcare",
      challenge: "Paralyzed patients unable to communicate effectively",
      solution: "Developed non-invasive brain-computer interface system",
      results: [
        "95% communication accuracy achieved",
        "500+ patients successfully treated",
        "Revolutionary medical breakthrough",
        "Global recognition and awards"
      ],
      image: "🧠",
      gradient: "from-emerald-500 to-teal-500",
      featured: true
    },
    {
      id: 4,
      title: "Space Technology Deployment",
      company: "Aerospace Innovations Ltd",
      industry: "Aerospace",
      challenge: "Interplanetary communication delays and limitations",
      solution: "Implemented quantum communication networks and AI-powered navigation",
      results: [
        "99.9% communication reliability",
        "50% faster data transmission",
        "Successful Mars mission support",
        "Next-gen space technology leadership"
      ],
      image: "🚀",
      gradient: "from-orange-500 to-red-500",
      featured: false
    },
    {
      id: 5,
      title: "Cybersecurity Fortress",
      company: "Financial Services Group",
      industry: "Finance",
      challenge: "Increasing cyber threats and data breaches",
      solution: "Deployed AI-powered security systems and quantum cryptography",
      results: [
        "Zero security breaches in 2 years",
        "99.99% threat detection accuracy",
        "50% reduction in security costs",
        "Industry-leading security standards"
      ],
      image: "🛡️",
      gradient: "from-red-500 to-pink-500",
      featured: false
    },
    {
      id: 6,
      title: "Biotechnology Revolution",
      company: "Life Sciences Corporation",
      industry: "Biotechnology",
      challenge: "Gene editing precision and safety concerns",
      solution: "Advanced AI-guided gene editing and synthetic biology",
      results: [
        "99.9% gene editing precision",
        "Zero off-target effects",
        "Revolutionary medical treatments",
        "FDA approval for 5 new therapies"
      ],
      image: "🧬",
      gradient: "from-green-500 to-emerald-500",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 COMPREHENSIVE CASE STUDIES 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Comprehensive Case Studies 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Real-world success stories showcasing how our cutting-edge technologies 
              have transformed businesses and industries across the globe
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
                📖 Read Case Studies →
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
                📞 Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Case Studies */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🌟 Featured Success Stories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover how our revolutionary technologies have delivered exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.filter(study => study.featured).map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-600/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center">{study.image}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">
                {study.title}
              </h3>
              <div className="mb-4">
                <p className="text-lg font-semibold text-blue-300">{study.company}</p>
                <p className="text-sm text-gray-400">{study.industry}</p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                <h4 className="font-semibold text-white mb-2">Solution:</h4>
                <p className="text-gray-300 text-sm">{study.solution}</p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">Results:</h4>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="text-green-300 text-sm flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full bg-gradient-to-r ${study.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Read Full Case Study →
              </button>
            </motion.div>
          ))}
        </div>

        {/* All Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">📚 All Case Studies</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Complete collection of our technology implementation success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/30 to-purple-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{study.image}</div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">
                {study.title}
              </h3>
              <div className="mb-4">
                <p className="text-sm font-semibold text-blue-300">{study.company}</p>
                <p className="text-xs text-gray-400">{study.industry}</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-white text-sm mb-2">Key Results:</h4>
                <ul className="space-y-1">
                  {study.results.slice(0, 2).map((result, idx) => (
                    <li key={idx} className="text-green-300 text-xs flex items-center">
                      <span className="text-green-500 mr-1">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full bg-gradient-to-r ${study.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}>
                Read Case Study →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8">📊 Success Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-lg">Successful Implementations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">$2B+</div>
              <div className="text-lg">Total Cost Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-lg">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-lg">Industries Served</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their operations with our cutting-edge technologies
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              🚀 Start Your Project →
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
              📞 Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveCaseStudies2026;