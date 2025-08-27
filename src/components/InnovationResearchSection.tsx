import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, TestTube, BookOpen, Users, Award, Zap, Globe } from 'lucide-react';

export function InnovationResearchSection() {
  const researchAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Cutting-edge AI research in machine learning, natural language processing, and computer vision",
      projects: ["Quantum AI", "Federated Learning", "Explainable AI"],
      publications: 25,
      patents: 8,
      color: "from-purple-500 to-pink-500"
    },
    {
              icon: TestTube,
      title: "Emerging Technologies",
      description: "Research in quantum computing, blockchain, and next-generation computing paradigms",
      projects: ["Quantum Cryptography", "Smart Contracts", "Edge Computing"],
      publications: 18,
      patents: 5,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Sustainable Tech",
      description: "Green technology solutions for environmental challenges and sustainable development",
      projects: ["Carbon Capture", "Renewable Energy", "Smart Cities"],
      publications: 22,
      patents: 6,
      color: "from-green-500 to-teal-500"
    }
  ];

  const researchStats = [
    { icon: BookOpen, value: "65+", label: "Research Papers" },
    { icon: Award, value: "19", label: "Patents Filed" },
    { icon: Users, value: "50+", label: "Research Partners" },
    { icon: Zap, value: "15+", label: "Active Projects" }
  ];

  const recentPublications = [
    {
      title: "Quantum Machine Learning for Financial Modeling",
      authors: "Dr. Kleber Santos, Dr. Sarah Chen",
      journal: "Nature Machine Intelligence",
      year: 2024,
      impact: "High"
    },
    {
      title: "Zero-Trust Architecture in Cloud-Native Applications",
      authors: "Marcus Rodriguez, Dr. Emily Watson",
      journal: "IEEE Security & Privacy",
      year: 2024,
      impact: "High"
    },
    {
      title: "AI-Powered Predictive Maintenance Systems",
      authors: "Dr. Kleber Santos, Dr. Sarah Chen",
      journal: "Journal of Industrial AI",
      year: 2024,
      impact: "Medium"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Innovation & Research
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pushing the boundaries of technology through cutting-edge research, 
            innovative solutions, and academic collaboration.
          </p>
        </motion.div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/70">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${area.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Active Projects:</h4>
                  <div className="space-y-2">
                    {area.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="flex items-center text-gray-400 text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {area.publications} papers
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {area.patents} patents
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {researchStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mb-4">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Recent Publications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPublications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold text-white mb-3">{pub.title}</h4>
                <p className="text-cyan-400 text-sm mb-2">{pub.authors}</p>
                <p className="text-gray-400 text-sm mb-2">{pub.journal}, {pub.year}</p>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    pub.impact === 'High' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {pub.impact} Impact
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Research Community
            </h3>
            <p className="text-gray-300 mb-6">
              Collaborate with our research team, access cutting-edge technology, 
              and contribute to the future of innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/research"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Flask className="w-5 h-5 mr-2" />
                Explore Research
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Collaborate
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}