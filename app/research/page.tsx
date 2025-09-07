'use client';

import React, { useState } from 'react';
import { 
  DocumentTextIcon,
  ChartBarIcon,
  LightBulbIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  CalendarIcon,
  UserIcon,
  TagIcon
} from '@heroicons/react/24/outline';

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Research' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'quantum', label: 'Quantum Computing' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'automation', label: 'Automation' }
  ];

  const researchPapers = [
    {
      id: 1,
      title: 'Advanced Neural Architecture Search for Business Process Optimization',
      authors: ['Dr. Emily Watson', 'Sarah Chen', 'Michael Rodriguez'],
      date: '2024-01-15',
      category: 'ai',
      abstract: 'This paper presents a novel approach to optimizing business processes using advanced neural architecture search techniques, achieving 40% efficiency improvements in real-world applications.',
      tags: ['Machine Learning', 'Process Optimization', 'Neural Networks'],
      status: 'Published',
      journal: 'Journal of AI in Business'
    },
    {
      id: 2,
      title: 'Quantum-Enhanced Cryptography for Enterprise Security',
      authors: ['Dr. David Kim', 'Dr. Emily Watson'],
      date: '2024-01-10',
      category: 'quantum',
      abstract: 'We demonstrate how quantum computing principles can be applied to enhance enterprise security systems, providing unprecedented protection against emerging cyber threats.',
      tags: ['Quantum Computing', 'Cybersecurity', 'Cryptography'],
      status: 'Under Review',
      journal: 'Nature Quantum Information'
    },
    {
      id: 3,
      title: 'Decentralized AI: A Framework for Distributed Machine Learning',
      authors: ['Michael Rodriguez', 'Sarah Chen'],
      date: '2024-01-05',
      category: 'blockchain',
      abstract: 'This research introduces a novel framework for implementing AI models on blockchain networks, enabling secure and transparent machine learning operations.',
      tags: ['Blockchain', 'Distributed AI', 'Decentralization'],
      status: 'Published',
      journal: 'IEEE Transactions on Blockchain'
    },
    {
      id: 4,
      title: 'Autonomous Business Process Discovery and Optimization',
      authors: ['Dr. Emily Watson', 'David Kim'],
      date: '2023-12-20',
      category: 'automation',
      abstract: 'We present an AI system that can automatically discover, analyze, and optimize business processes without human intervention, reducing operational costs by 60%.',
      tags: ['Process Mining', 'Automation', 'AI'],
      status: 'Published',
      journal: 'ACM Transactions on Management Information Systems'
    },
    {
      id: 5,
      title: 'Federated Learning for Privacy-Preserving Business Intelligence',
      authors: ['Sarah Chen', 'Dr. Emily Watson'],
      date: '2023-12-15',
      category: 'ai',
      abstract: 'This work explores how federated learning can be applied to business intelligence while maintaining strict privacy requirements and regulatory compliance.',
      tags: ['Federated Learning', 'Privacy', 'Business Intelligence'],
      status: 'Under Review',
      journal: 'Journal of Privacy and Security'
    },
    {
      id: 6,
      title: 'Quantum Machine Learning for Financial Risk Assessment',
      authors: ['Dr. David Kim', 'Michael Rodriguez'],
      date: '2023-12-10',
      category: 'quantum',
      abstract: 'We demonstrate quantum machine learning algorithms that can process financial data with exponential speedup, enabling real-time risk assessment for large portfolios.',
      tags: ['Quantum ML', 'Finance', 'Risk Assessment'],
      status: 'Published',
      journal: 'Quantum Finance Review'
    }
  ];

  const filteredPapers = activeCategory === 'all' 
    ? researchPapers 
    : researchPapers.filter(paper => paper.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research & Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge research in AI, machine learning, quantum computing, and emerging technologies that are shaping the future of business automation.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300">Research Papers</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-gray-300">Patents Filed</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
            <div className="text-gray-300">Industry Partnerships</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">$2M+</div>
            <div className="text-gray-300">Research Funding</div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: LightBulbIcon,
                title: 'Artificial Intelligence',
                description: 'Advanced ML algorithms, neural networks, and AI applications for business optimization.'
              },
              {
                icon: AcademicCapIcon,
                title: 'Quantum Computing',
                description: 'Quantum algorithms and applications for solving complex business problems.'
              },
              {
                icon: ChartBarIcon,
                title: 'Data Science',
                description: 'Big data analytics, predictive modeling, and business intelligence solutions.'
              },
              {
                icon: DocumentTextIcon,
                title: 'Process Automation',
                description: 'Intelligent automation systems that streamline business operations.'
              }
            ].map((area, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
                <div className="bg-blue-600 p-3 rounded-lg w-fit mb-4">
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Papers */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 mx-2 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredPapers.map((paper) => (
              <div key={paper.id} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{paper.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-1" />
                        {paper.authors.join(', ')}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <DocumentTextIcon className="h-4 w-4 mr-1" />
                        {paper.journal}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      paper.status === 'Published' 
                        ? 'bg-green-600/20 text-green-400' 
                        : 'bg-yellow-600/20 text-yellow-400'
                    }`}>
                      {paper.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{paper.abstract}</p>
                
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag, index) => (
                    <span key={index} className="flex items-center bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      <TagIcon className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-800 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in Our Research?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented researchers and industry partners to collaborate with on cutting-edge projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              Join Our Research Team
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-blue-600 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}