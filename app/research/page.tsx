import React from 'react';
import Link from 'next/link';
import { FileText, Download, Calendar, Users, TrendingUp, Award } from 'lucide-react';

export const metadata = {
  title: 'Research | Zion Tech Group',
  description: 'Cutting-edge research and development in AI, quantum computing, and emerging technologies.',
  keywords: 'research, AI, quantum computing, technology, innovation, development'
};

const researchAreas = [
  {
    title: 'Artificial Intelligence',
    description: 'Advancing the frontiers of machine learning, neural networks, and cognitive computing.',
    projects: 12,
    publications: 8,
    color: 'blue'
  },
  {
    title: 'Quantum Computing',
    description: 'Pioneering quantum algorithms and hardware for next-generation computing.',
    projects: 6,
    publications: 4,
    color: 'purple'
  },
  {
    title: 'Cybersecurity',
    description: 'Developing advanced security protocols and threat detection systems.',
    projects: 9,
    publications: 6,
    color: 'green'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Optimizing distributed systems and edge computing architectures.',
    projects: 7,
    publications: 5,
    color: 'orange'
  }
];

const recentPublications = [
  {
    title: 'Quantum Neural Networks: A New Paradigm for Machine Learning',
    authors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'Dr. Lisa Wang'],
    journal: 'Nature Machine Intelligence',
    year: 2024,
    citations: 45,
    pdf: '/research/quantum-neural-networks.pdf'
  },
  {
    title: 'Advanced Threat Detection Using Multi-Modal AI',
    authors: ['Alex Thompson', 'Dr. Emily Johnson'],
    journal: 'IEEE Security & Privacy',
    year: 2024,
    citations: 32,
    pdf: '/research/threat-detection-ai.pdf'
  },
  {
    title: 'Scalable Cloud Architecture for Edge Computing',
    authors: ['David Kim', 'Dr. Sarah Chen'],
    journal: 'ACM Computing Surveys',
    year: 2023,
    citations: 28,
    pdf: '/research/cloud-edge-architecture.pdf'
  },
  {
    title: 'Natural Language Processing for Enterprise Applications',
    authors: ['Dr. Lisa Wang', 'Michael Rodriguez'],
    journal: 'Journal of Artificial Intelligence Research',
    year: 2023,
    citations: 67,
    pdf: '/research/nlp-enterprise.pdf'
  }
];

const researchStats = [
  { number: '50+', label: 'Research Projects' },
  { number: '25+', label: 'Publications' },
  { number: '200+', label: 'Citations' },
  { number: '15+', label: 'Patents Filed' }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Research & Development
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Pioneering the future of technology through cutting-edge research in AI, quantum computing, and emerging technologies.
            </p>
            
            {/* Research Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
              {researchStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Research Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our research spans multiple cutting-edge domains, driving innovation and advancing the state of technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => {
                const colorClasses = {
                  blue: 'bg-blue-100 text-blue-600',
                  purple: 'bg-purple-100 text-purple-600',
                  green: 'bg-green-100 text-green-600',
                  orange: 'bg-orange-100 text-orange-600'
                };
                
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${colorClasses[area.color as keyof typeof colorClasses]}`}>
                      <TrendingUp className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                    <p className="text-gray-600 mb-6">{area.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        <span>{area.projects} Projects</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        <span>{area.publications} Publications</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Recent Publications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our latest research contributions to the scientific community and industry.
              </p>
            </div>

            <div className="space-y-6">
              {recentPublications.map((publication, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {publication.title}
                      </h3>
                      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                        <span className="mr-4">
                          <Users className="h-4 w-4 inline mr-1" />
                          {publication.authors.join(', ')}
                        </span>
                        <span className="mr-4">
                          <FileText className="h-4 w-4 inline mr-1" />
                          {publication.journal}
                        </span>
                        <span className="mr-4">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          {publication.year}
                        </span>
                        <span>
                          <TrendingUp className="h-4 w-4 inline mr-1" />
                          {publication.citations} citations
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <a
                        href={publication.pdf}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/research/publications"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
              >
                View All Publications
                <FileText className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Collaborate With Us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We welcome collaboration with academic institutions, research organizations, and industry partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Start Collaboration
              </Link>
              <Link
                href="/research/partnerships"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}