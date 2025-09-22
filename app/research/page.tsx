import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research & Development - Zion Tech Group',
  description: 'Explore our cutting-edge research initiatives in AI, machine learning, automation, and emerging technologies. Stay ahead with our innovative solutions and breakthrough discoveries.',
  keywords: ['AI research', 'machine learning', 'technology innovation', 'R&D', 'emerging technologies', 'AI development'],
  openGraph: {
    title: 'Research & Development - Zion Tech Group',
    description: 'Explore our cutting-edge research initiatives in AI, machine learning, and emerging technologies.',
    type: 'website',
  },
};

const researchAreas = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Advanced AI algorithms, neural networks, and intelligent automation systems",
    projects: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Deep Learning Models"
    ]
  },
  {
    title: "Automation & Robotics",
    description: "Intelligent automation solutions and robotic process automation",
    projects: [
      "Workflow Automation",
      "Process Optimization",
      "Intelligent Agents",
      "Autonomous Systems"
    ]
  },
  {
    title: "Cloud & Edge Computing",
    description: "Next-generation computing architectures and distributed systems",
    projects: [
      "Edge AI Processing",
      "Cloud-Native Solutions",
      "Distributed Computing",
      "Real-time Analytics"
    ]
  },
  {
    title: "Cybersecurity & Privacy",
    description: "Advanced security frameworks and privacy-preserving technologies",
    projects: [
      "Zero-Trust Architecture",
      "Privacy-Preserving AI",
      "Threat Detection",
      "Secure Automation"
    ]
  },
  {
    title: "Blockchain & Web3",
    description: "Decentralized technologies and distributed ledger solutions",
    projects: [
      "Smart Contracts",
      "DeFi Protocols",
      "NFT Platforms",
      "Decentralized AI"
    ]
  },
  {
    title: "Quantum Computing",
    description: "Quantum algorithms and quantum-enhanced machine learning",
    projects: [
      "Quantum Machine Learning",
      "Quantum Optimization",
      "Quantum Cryptography",
      "Quantum Simulation"
    ]
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Research & Development
          </h1>
          <p className="text-xl max-w-4xl mx-auto opacity-90">
            Pioneering the future of technology through cutting-edge research in AI, automation, 
            and emerging technologies. Our R&D initiatives drive innovation and create breakthrough solutions.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We conduct groundbreaking research across multiple technology domains to deliver 
            innovative solutions that shape the future of business and society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3">Key Projects:</h4>
                {area.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {project}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Innovation Metrics */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Innovation by Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research efforts are backed by significant investment and measurable outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600">R&D Investment</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Research Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Patents Filed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Research Papers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Partnerships */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading universities, research institutions, and technology companies 
              to advance the frontiers of AI and emerging technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Collaborations</h3>
              <p className="text-gray-600">Partnerships with top universities and research institutions worldwide.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Partnerships</h3>
              <p className="text-gray-600">Collaborations with leading technology companies and startups.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Labs</h3>
              <p className="text-gray-600">State-of-the-art research facilities and experimental environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Research Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Interested in collaborating on cutting-edge research or learning about our latest discoveries? 
            Get in touch with our research team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Collaborate with Us
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}