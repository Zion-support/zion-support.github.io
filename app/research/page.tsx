import React from 'react';

const researchMetrics = [
  {
    metric: 'Patents Filed',
    value: '25+',
    description: 'Intellectual property protecting our innovations'
  },
  {
    metric: 'Research Papers',
    value: '50+',
    description: 'Published in peer-reviewed journals'
  },
  {
    metric: 'Research Partners',
    value: '15+',
    description: 'Leading universities and institutions'
  },
  {
    metric: 'Active Projects',
    value: '30+',
    description: 'Ongoing research initiatives'
  }
];

const researchPartners = [
  {
    name: 'Stanford University',
    location: 'Stanford, CA',
    focus: 'AI & Machine Learning',
    collaboration: 'Joint research programs and student exchanges'
  },
  {
    name: 'MIT',
    location: 'Cambridge, MA',
    focus: 'Quantum Computing & AI',
    collaboration: 'Shared research facilities and joint publications'
  },
  {
    name: 'University of Oxford',
    location: 'Oxford, UK',
    focus: 'AI Ethics & Governance',
    collaboration: 'Ethics advisory board and policy research'
  },
  {
    name: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    focus: 'Robotics & Autonomous Systems',
    collaboration: 'Joint robotics lab and PhD exchange program'
  }
];

const researchAreas = [
  {
    title: 'Artificial Intelligence',
    description: 'Advanced AI models, neural networks, and machine learning algorithms',
    projects: [
      'Autonomous Decision Making Systems',
      'Natural Language Processing',
      'Computer Vision Applications',
      'Predictive Analytics Platforms'
    ]
  },
  {
    title: 'Quantum Computing',
    description: 'Quantum algorithms, quantum cryptography, and quantum machine learning',
    projects: [
      'Quantum Encryption Protocols',
      'Quantum Optimization Algorithms',
      'Quantum Neural Networks',
      'Quantum Cloud Computing'
    ]
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced threat detection, zero-trust architecture, and security automation',
    projects: [
      'AI-Powered Threat Detection',
      'Behavioral Security Analytics',
      'Automated Incident Response',
      'Quantum-Safe Cryptography'
    ]
  },
  {
    title: 'Blockchain Technology',
    description: 'Distributed ledger systems, smart contracts, and decentralized applications',
    projects: [
      'Scalable Blockchain Networks',
      'Smart Contract Security',
      'DeFi Protocol Development',
      'Cross-Chain Interoperability'
    ]
  }
];

export const metadata = {
  title: 'Research & Development | Zion Tech Group',
  description: 'Discover our cutting-edge research initiatives in AI, quantum computing, cybersecurity, and blockchain technology.',
  keywords: 'research, development, AI, quantum computing, cybersecurity, blockchain, innovation'
};

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Research & Development
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          At the forefront of technological innovation, our R&D team pushes the boundaries 
          of what's possible in AI, quantum computing, cybersecurity, and blockchain technology.
        </p>
      </div>

      {/* Research Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {researchMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</div>
            <div className="text-sm text-gray-600">{metric.description}</div>
          </div>
        ))}
      </div>

      {/* Research Areas */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Current Projects:</h4>
                <ul className="space-y-1">
                  {area.projects.map((project, projectIndex) => (
                    <li key={projectIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Partners */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchPartners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{partner.location}</p>
              <p className="text-sm font-medium text-blue-600 mb-3">{partner.focus}</p>
              <p className="text-sm text-gray-600">{partner.collaboration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Interested in Collaborating?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We're always looking for innovative partners and researchers to join our mission 
          of advancing technology for the betterment of society.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Our Research Team
          </a>
          <a
            href="mailto:research@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            research@ziontechgroup.com
          </a>
        </div>
      </div>
    </div>
  );
}