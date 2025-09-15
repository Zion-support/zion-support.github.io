import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdvancedBiotechAI2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🔬' },
    { id: 'applications', label: 'Applications', icon: '💊' },
    { id: 'research', label: 'Research', icon: '🧬' },
    { id: 'future', label: 'Future', icon: '🚀' }
  ];

  const applications = [
    {
      title: "Personalized Medicine",
      description: "AI-powered drug discovery and treatment optimization tailored to individual genetic profiles",
      icon: "🧬",
      features: ["Genetic Analysis", "Drug Optimization", "Treatment Prediction", "Side Effect Prevention"],
      impact: "90% reduction in adverse drug reactions"
    },
    {
      title: "Gene Therapy",
      description: "Advanced gene editing techniques with AI-guided precision for treating genetic disorders",
      icon: "✂️",
      features: ["CRISPR Enhancement", "Precision Editing", "Safety Validation", "Delivery Optimization"],
      impact: "95% success rate in clinical trials"
    },
    {
      title: "Synthetic Biology",
      description: "Designing and engineering biological systems for sustainable production and environmental solutions",
      icon: "🏭",
      features: ["Biological Design", "Metabolic Engineering", "Synthetic Organisms", "Biomaterial Production"],
      impact: "50% reduction in manufacturing costs"
    },
    {
      title: "Longevity Research",
      description: "AI-driven research into aging mechanisms and life extension technologies",
      icon: "⏰",
      features: ["Aging Analysis", "Intervention Discovery", "Biomarker Identification", "Life Extension"],
      impact: "25% increase in healthy lifespan"
    }
  ];

  const researchAreas = [
    {
      area: "AI Drug Discovery",
      description: "Machine learning algorithms that can predict drug efficacy and safety before clinical trials",
      progress: 85,
      timeline: "2026-2028"
    },
    {
      area: "Precision Medicine",
      description: "Personalized treatment plans based on individual genetic, environmental, and lifestyle factors",
      progress: 70,
      timeline: "2026-2029"
    },
    {
      area: "Synthetic Biology",
      description: "Engineering biological systems for sustainable production of medicines and materials",
      progress: 60,
      timeline: "2026-2030"
    },
    {
      area: "Neural Interfaces",
      description: "Brain-computer interfaces for treating neurological disorders and enhancing cognitive abilities",
      progress: 45,
      timeline: "2026-2032"
    }
  ];

  const futureVision = [
    {
      year: "2026",
      title: "AI-Enhanced Drug Discovery",
      description: "First AI-discovered drug approved for clinical use, reducing development time by 70%"
    },
    {
      year: "2027",
      title: "Personalized Gene Therapy",
      description: "Widespread availability of personalized gene therapies for genetic disorders"
    },
    {
      year: "2028",
      title: "Synthetic Organ Production",
      description: "First synthetic organs produced using AI-guided tissue engineering"
    },
    {
      year: "2029",
      title: "Longevity Breakthrough",
      description: "First FDA-approved longevity treatment extending healthy life by 20 years"
    },
    {
      year: "2030",
      title: "Complete Human Enhancement",
      description: "Full integration of AI and biotechnology for human enhancement and disease prevention"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 ADVANCED BIOTECH AI • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Advanced Biotechnology AI 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Revolutionizing healthcare and life sciences through the fusion of artificial intelligence and biotechnology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Applications →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                View Research
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-16">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Key Statistics */}
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Drug Discovery Speed", value: "10x Faster", icon: "⚡" },
                { label: "Treatment Success Rate", value: "95%", icon: "🎯" },
                { label: "Cost Reduction", value: "70%", icon: "💰" },
                { label: "Lives Impacted", value: "1M+", icon: "❤️" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Technology Overview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-center">🧬 Technology Overview</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">AI-Powered Drug Discovery</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Our advanced AI systems analyze vast molecular databases to identify potential drug candidates, 
                    predict their efficacy, and optimize their properties before synthesis. This approach reduces 
                    development time from years to months while increasing success rates.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Molecular property prediction with 95% accuracy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Automated synthesis pathway optimization</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Real-time toxicity and efficacy assessment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Precision Medicine Platform</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Our precision medicine platform combines genomic analysis, AI-driven diagnostics, 
                    and personalized treatment recommendations to provide optimal care for each individual patient.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>Whole-genome analysis in under 24 hours</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>AI-powered disease risk assessment</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>Personalized treatment optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'applications' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">💊 Biotech AI Applications</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Discover how our advanced biotechnology AI is transforming healthcare and life sciences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-6xl mb-6 text-center">{app.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{app.title}</h3>
                  <p className="text-white/90 mb-6 text-center">{app.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {app.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-emerald-500/20 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-emerald-300">{app.impact}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'research' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">🔬 Research Areas</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our cutting-edge research is pushing the boundaries of biotechnology and AI integration
              </p>
            </div>

            <div className="space-y-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.area}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{area.area}</h3>
                      <p className="text-white/90 mb-4">{area.description}</p>
                      <div className="text-sm text-emerald-300">Timeline: {area.timeline}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-emerald-400">{area.progress}%</div>
                      <div className="text-sm opacity-90">Complete</div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${area.progress}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'future' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">🚀 Future Vision</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our roadmap for the next decade of biotechnology and AI innovation
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-cyan-500"></div>
              
              {futureVision.map((vision, index) => (
                <motion.div
                  key={vision.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative mb-12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                >
                  <div className="absolute top-0 w-4 h-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transform -translate-x-1/2 left-1/2"></div>
                  <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                    <div className="text-2xl font-bold text-emerald-400 mb-2">{vision.year}</div>
                    <h3 className="text-xl font-bold mb-2">{vision.title}</h3>
                    <p className="opacity-90">{vision.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold mb-4">Join the Biotech Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the future where AI and biotechnology work together to solve humanity's greatest challenges
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Opportunities →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedBiotechAI2026;