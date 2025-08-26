import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Target, Zap, BookOpen, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const researchAreas = [
  {
    icon: Lightbulb,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge research in artificial intelligence, neural networks, and machine learning algorithms.',
    projects: 25,
    publications: 18,
    color: 'from-blue-500 to-cyan-500',
    link: '/research/ai-ml'
  },
  {
    icon: Zap,
    title: 'Quantum Computing',
    description: 'Breakthrough research in quantum algorithms, quantum cryptography, and quantum machine learning.',
    projects: 12,
    publications: 8,
    color: 'from-purple-500 to-pink-500',
    link: '/research/quantum'
  },
  {
    icon: Target,
    title: 'Cybersecurity',
    description: 'Advanced research in threat detection, zero-trust architectures, and AI-powered security.',
    projects: 20,
    publications: 15,
    color: 'from-red-500 to-orange-500',
    link: '/research/cybersecurity'
  },
  {
    icon: Globe,
    title: 'IoT & Edge Computing',
    description: 'Research in distributed systems, edge AI, and next-generation IoT architectures.',
    projects: 18,
    publications: 12,
    color: 'from-green-500 to-emerald-500',
    link: '/research/iot-edge'
  },
  {
    icon: Users,
    title: 'Human-Computer Interaction',
    description: 'Research in UX/UI design, accessibility, and human-centered AI systems.',
    projects: 15,
    publications: 10,
    color: 'from-indigo-500 to-purple-500',
    link: '/research/hci'
  },
  {
    icon: BookOpen,
    title: 'Data Science',
    description: 'Research in big data analytics, predictive modeling, and data-driven decision making.',
    projects: 22,
    publications: 16,
    color: 'from-yellow-500 to-orange-500',
    link: '/research/data-science'
  }
];

const recentPublications = [
  {
    title: 'Quantum Neural Networks for Drug Discovery',
    authors: 'Dr. Sarah Chen, Dr. Marcus Rodriguez',
    journal: 'Nature Machine Intelligence',
    year: 2024,
    impact: 'High',
    link: '/publications/quantum-neural-networks'
  },
  {
    title: 'AI-Powered Cybersecurity Threat Detection',
    authors: 'Dr. Emily Watson, James Kim',
    journal: 'IEEE Security & Privacy',
    year: 2024,
    impact: 'High',
    link: '/publications/ai-cybersecurity'
  },
  {
    title: 'Edge Computing for Smart Cities',
    authors: 'Dr. Alex Thompson, Dr. Lisa Wang',
    journal: 'ACM Computing Surveys',
    year: 2024,
    impact: 'Medium',
    link: '/publications/edge-computing'
  }
];

export function InnovationResearchSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Innovation & <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Research</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Pushing the boundaries of technology through cutting-edge research, 
            innovative solutions, and collaborative partnerships with leading institutions.
          </p>
        </motion.div>

        {/* Research Areas */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Research Focus Areas
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={area.link} className="block">
                    <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 h-full hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/25">
                      <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors text-center">
                        {area.title}
                      </h4>
                      
                      <p className="text-zion-slate-light text-sm mb-4 leading-relaxed text-center">
                        {area.description}
                      </p>
                      
                      <div className="flex justify-between items-center text-sm">
                        <div className="text-center">
                          <div className="text-white font-bold">{area.projects}</div>
                          <div className="text-zion-slate-light">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-bold">{area.publications}</div>
                          <div className="text-zion-slate-light">Publications</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Recent Publications */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Recent Publications
          </motion.h3>
          
          <div className="max-w-4xl mx-auto">
            {recentPublications.map((publication, index) => (
              <motion.div
                key={publication.title}
                className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 mb-4 hover:border-zion-cyan/40 hover:bg-zion-slate-dark/50 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 hover:text-zion-cyan transition-colors">
                      <Link to={publication.link}>{publication.title}</Link>
                    </h4>
                    <p className="text-zion-slate-light text-sm mb-2">
                      <strong>Authors:</strong> {publication.authors}
                    </p>
                    <p className="text-zion-slate-light text-sm mb-2">
                      <strong>Journal:</strong> {publication.journal} ({publication.year})
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      publication.impact === 'High' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {publication.impact} Impact
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Research Community
            </h3>
            <p className="text-zion-slate-light mb-6">
              Collaborate with leading researchers, access cutting-edge facilities, 
              and contribute to breakthrough innovations that shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Explore Research Opportunities
              </button>
              <button className="border border-zion-cyan/20 text-zion-cyan px-8 py-3 rounded-xl font-medium hover:bg-zion-cyan/20 transition-all duration-300">
                View Publications
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}