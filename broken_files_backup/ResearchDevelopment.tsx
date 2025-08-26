import React from 'react';
import { Link } from 'react-router-dom';
const ResearchDevelopment: React.FC = () => {
  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Cutting-edge research in neural networks, deep learning, and autonomous systems",
      icon: "🧠",
      projects: [
        "Autonomous AI Systems",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning"
      ]
    },
    {
      title: "Quantum Computing",
      description: "Exploring the frontiers of quantum algorithms and quantum machine learning",
      icon: "⚛️",
      projects: [
        "Quantum Neural Networks",
        "Quantum Cryptography",
        "Quantum Optimization",
        "Quantum Error Correction"
      ]
    },
    {
      title: "Cybersecurity & Privacy",
      description: "Advanced security research for the digital age",
      icon: "🔒",
      projects: [
        "Zero-Trust Security",
        "AI-Powered Threat Detection",
        "Privacy-Preserving AI",
        "Blockchain Security"
      ]
    },
    {
      title: "Edge Computing & IoT",
      description: "Next-generation computing at the network edge",
      icon: "🌐",
      projects: [
        "Edge AI Processing",
        "IoT Security",
        "5G Integration",
        "Autonomous Edge Systems"
      ]
    },
    {
      title: "Sustainable Technology",
      description: "Green computing and energy-efficient AI solutions",
      icon: "🌱",
      projects: [
        "Energy-Efficient AI",
        "Green Data Centers",
        "Sustainable Algorithms",
        "Climate AI Models"
      ]
    },
    {
      title: "Human-AI Collaboration",
      description: "Researching the future of human-AI partnership",
      icon: "🤝",
      projects: [
        "Augmented Intelligence",
        "Human-AI Interfaces",
        "Collaborative Robotics",
        "AI Ethics & Governance"
      ]
    }
  ];
  const publications = [
    {
      title: "Autonomous AI Systems: A Comprehensive Framework",
      authors: "Zion Tech Group Research Team",
      year: "2024",
      journal: "AI Systems Journal",
      doi: "10.1000/ai-systems-2024-001"
    },
    {
      title: "Quantum Machine Learning for Cybersecurity",
      authors: "Dr. Sarah Chen, Dr. Michael Rodriguez",
      year: "2024",
      journal: "Quantum Computing Review",
      doi: "10.1000/quantum-2024-015"
    },
    {
      title: "Edge AI: Optimizing Intelligence at the Network Edge",
      authors: "Zion Tech Group Edge Computing Lab",
      year: "2024",
      journal: "Edge Computing Today",
      doi: "10.1000/edge-2024-008"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research &
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pushing the boundaries of technology through innovative research, cutting-edge development,
              and breakthrough discoveries that shape the future of AI and computing.
            </p>
          </div>
        </div>
      </section>
      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Research Areas</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our multidisciplinary research spans the most exciting frontiers of technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <div className="space-y-2">
                  {area.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {project}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Publications */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recent Publications</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our research contributions to the global scientific community
            </p>
          </div>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-slate-700/30 p-6 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>
                <div className="text-gray-300 text-sm mb-3">
                  <span className="font-medium">{pub.authors}</span> • {pub.year} • {pub.journal}
                </div>
                <div className="text-blue-400 text-sm font-mono">{pub.doi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Research Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Research Facilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              State-of-the-art laboratories and computing infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Research Lab</h3>
              <p className="text-gray-300 mb-4">
                Advanced computing clusters, GPU farms, and specialized hardware for AI research and development.
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• NVIDIA DGX A100 Systems</li>
                <li>• High-Performance Computing Clusters</li>
                <li>• Specialized AI Training Infrastructure</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity Lab</h3>
              <p className="text-gray-300 mb-4">
                Isolated testing environments for security research, threat analysis, and vulnerability assessment.
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Isolated Network Environments</li>
                <li>• Advanced Threat Simulation</li>
                <li>• Security Testing Infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Research Team
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Collaborate with leading researchers and contribute to groundbreaking discoveries in AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Research Positions
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact Research Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ResearchDevelopment;