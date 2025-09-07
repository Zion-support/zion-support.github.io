<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Development | Zion Tech Group',
  description: 'Explore our cutting-edge research and development initiatives in AI, quantum computing, and emerging technologies.',
  keywords: 'research, development, AI, quantum computing, innovation, technology',
};

const researchMetrics = [
  {
    metric: 'Patents Filed',
    value: '25+',
    description: 'Intellectual property protecting our innovations'
  },
  {
    metric: 'Research Papers',
    value: '50+',
    description: 'Published in top-tier conferences and journals'
  },
  {
    metric: 'R&D Investment',
    value: '$10M+',
    description: 'Annual investment in research and development'
  },
  {
    metric: 'Innovation Labs',
    value: '5',
    description: 'Global research facilities and innovation centers'
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research & Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Zion Tech Group, we're at the forefront of technological innovation, 
            pushing the boundaries of what's possible with AI, quantum computing, 
            and emerging technologies.
          </p>
        </div>

        {/* Research Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {researchMetrics.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{item.metric}</div>
              <div className="text-gray-600">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Artificial Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Advanced machine learning algorithms, neural networks, and AI systems 
                that can learn, adapt, and make intelligent decisions.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Deep Learning & Neural Networks</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Reinforcement Learning</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quantum Computing</h3>
              <p className="text-gray-600 mb-4">
                Exploring the potential of quantum mechanics to revolutionize 
                computation and solve complex problems.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Quantum Algorithms</li>
                <li>• Quantum Machine Learning</li>
                <li>• Quantum Cryptography</li>
                <li>• Quantum Simulation</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Edge Computing</h3>
              <p className="text-gray-600 mb-4">
                Bringing computation closer to data sources for faster processing 
                and reduced latency.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• IoT Integration</li>
                <li>• Real-time Processing</li>
                <li>• Distributed Systems</li>
                <li>• Edge AI</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Blockchain Technology</h3>
              <p className="text-gray-600 mb-4">
                Developing secure, decentralized systems for various applications 
                beyond cryptocurrency.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Smart Contracts</li>
                <li>• Decentralized Applications</li>
                <li>• Consensus Mechanisms</li>
                <li>• Privacy & Security</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Protecting digital assets and systems from evolving threats 
                and vulnerabilities.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Threat Detection</li>
                <li>• Zero Trust Architecture</li>
                <li>• Security Analytics</li>
                <li>• Incident Response</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Technology</h3>
              <p className="text-gray-600 mb-4">
                Developing environmentally conscious solutions that minimize 
                energy consumption and carbon footprint.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Green Computing</li>
                <li>• Energy Efficiency</li>
                <li>• Carbon Neutral Solutions</li>
                <li>• Sustainable AI</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Research Team</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Are you passionate about pushing the boundaries of technology? 
            We're always looking for talented researchers and engineers to join our team.
          </p>
          <a 
            href="/careers" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block font-medium"
          >
            View Open Positions
          </a>
=======

export const metadata = {
  title: 'Research | Zion Tech Group',
  description:
    'Explore our cutting-edge research in AI, quantum computing, and autonomous systems.',
};
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f

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
<<<<<<< HEAD
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Research & Innovation
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Driving the future of technology through cutting-edge research in
            AI, quantum computing, and autonomous systems.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>AI Research</h3>
            <p className='text-gray-300 mb-4'>
              Advanced machine learning algorithms and neural network
              architectures.
            </p>
            <div className='text-blue-400 font-semibold'>25+ Patents Filed</div>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Quantum Computing
            </h3>
            <p className='text-gray-300 mb-4'>
              Breakthrough research in quantum algorithms and quantum machine
              learning.
            </p>
            <div className='text-blue-400 font-semibold'>15+ Publications</div>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Autonomous Systems
            </h3>
            <p className='text-gray-300 mb-4'>
              Self-learning systems and autonomous decision-making frameworks.
            </p>
            <div className='text-blue-400 font-semibold'>
              10+ Active Projects
            </div>
          </div>
        </div>

        <div className='text-center'>
          <h2 className='text-3xl font-bold text-white mb-6'>
            Research Partnerships
          </h2>
          <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
            We collaborate with leading universities and research institutions
            worldwide to advance the frontiers of technology.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <h3 className='text-xl font-bold text-white mb-2'>
                Stanford University
              </h3>
              <p className='text-gray-300'>AI & Machine Learning</p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-bold text-white mb-2'>MIT</h3>
              <p className='text-gray-300'>Quantum Computing & AI</p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-bold text-white mb-2'>
                University of Oxford
              </h3>
              <p className='text-gray-300'>AI Ethics & Governance</p>
            </div>
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
          </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        </div>
      </div>
    </div>
  );
}
