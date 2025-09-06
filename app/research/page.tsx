import React from 'react';
import { Metadata } from 'next';
import { 
  LightBulbIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Research & Innovation | Zion Tech Group',
  description: 'Explore our cutting-edge research in AI, machine learning, and technology innovation. Leading the future of intelligent systems.',
  keywords: 'AI research, machine learning, technology innovation, research publications, academic collaboration',
};

const researchAreas = [
  {
    name: 'Artificial Intelligence',
    description: 'Advancing the frontiers of AI through novel algorithms, neural architectures, and intelligent systems.',
    icon: CpuChipIcon,
    topics: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Reinforcement Learning']
  },
  {
    name: 'Machine Learning',
    description: 'Developing state-of-the-art ML models and techniques for real-world applications.',
    icon: ChartBarIcon,
    topics: ['Predictive Analytics', 'Pattern Recognition', 'Model Optimization', 'Federated Learning']
  },
  {
    name: 'Quantum Computing',
    description: 'Exploring quantum algorithms and their applications in optimization and cryptography.',
    icon: LightBulbIcon,
    topics: ['Quantum Algorithms', 'Quantum Machine Learning', 'Quantum Cryptography', 'Quantum Optimization']
  },
  {
    name: 'Blockchain Technology',
    description: 'Researching next-generation blockchain protocols and decentralized systems.',
    icon: GlobeAltIcon,
    topics: ['Smart Contracts', 'Consensus Mechanisms', 'DeFi Protocols', 'Scalability Solutions']
  }
];

const recentPublications = [
  {
    title: 'Advanced Neural Architecture Search for Efficient Deep Learning',
    authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez, et al.',
    journal: 'Nature Machine Intelligence',
    year: '2024',
    impact: 'High Impact',
    abstract: 'A novel approach to automatically discovering optimal neural network architectures for specific tasks.',
    doi: '10.1038/s42256-024-00123-4'
  },
  {
    title: 'Quantum-Enhanced Machine Learning for Financial Modeling',
    authors: 'Dr. Alex Kim, Dr. Lisa Wang, et al.',
    journal: 'Physical Review Applied',
    year: '2024',
    impact: 'Breakthrough',
    abstract: 'Demonstrating quantum advantage in financial risk assessment and portfolio optimization.',
    doi: '10.1103/PhysRevApplied.21.034056'
  },
  {
    title: 'Federated Learning for Privacy-Preserving Healthcare Analytics',
    authors: 'Dr. Maria Garcia, Dr. James Liu, et al.',
    journal: 'IEEE Transactions on Medical Imaging',
    year: '2024',
    impact: 'Industry Leading',
    abstract: 'A framework for training ML models on distributed healthcare data while preserving patient privacy.',
    doi: '10.1109/TMI.2024.3356789'
  },
  {
    title: 'Scalable Blockchain Consensus for IoT Applications',
    authors: 'Dr. Robert Taylor, Dr. Anna Patel, et al.',
    journal: 'ACM Computing Surveys',
    year: '2024',
    impact: 'High Impact',
    abstract: 'A new consensus mechanism enabling efficient blockchain operations for Internet of Things networks.',
    doi: '10.1145/3626789'
  }
];

const researchImpact = [
  {
    metric: 'Patents Filed',
    value: '25+',
    description: 'Intellectual property protecting our innovations'
  },
  {
    metric: 'Research Papers',
    value: '150+',
    description: 'Published in top-tier conferences and journals'
  },
  {
    metric: 'Citations',
    value: '5,000+',
    description: 'Academic impact and influence'
  },
  {
    metric: 'Industry Partnerships',
    value: '50+',
    description: 'Collaborations with leading companies'
  }
];

const academicPartners = [
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
    collaboration: 'Policy research and ethical AI development'
  },
  {
    name: 'ETH Zurich',
    location: 'Zurich, Switzerland',
    focus: 'Blockchain & Cryptography',
    collaboration: 'Decentralized systems research and development'
  }
];

export default function ResearchPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Research &{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Pushing the boundaries of technology through cutting-edge research, 
              innovative discoveries, and academic collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Research Focus Areas */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Research</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Focus Areas
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our research spans the cutting edge of AI and technology, driving innovation
            and advancing the state of the art.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {researchAreas.map((area) => (
              <div key={area.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <area.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <div className="space-y-2">
                  {area.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Publications */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Publications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recent Research
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our latest research contributions to the field of artificial intelligence and technology.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {recentPublications.map((publication) => (
              <div key={publication.title} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-2 mb-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    publication.impact === 'High Impact' ? 'bg-blue-600/20 text-blue-400' :
                    publication.impact === 'Industry Leading' ? 'bg-green-600/20 text-green-400' :
                    publication.impact === 'Breakthrough' ? 'bg-purple-600/20 text-purple-400' :
                    'bg-gray-600/20 text-gray-400'
                  }`}>
                    {publication.impact}
                  </span>
                  <span className="text-sm text-gray-400">{publication.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{publication.title}</h3>
                <p className="text-sm text-blue-400 mb-3">{publication.authors}</p>
                <p className="text-sm text-gray-400 mb-3">{publication.journal}</p>
                <p className="text-sm text-gray-300 mb-4">{publication.abstract}</p>
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  View Publication <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Impact */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Research Influence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our research has made significant contributions to the field, 
            influencing both academia and industry.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {researchImpact.map((item) => (
              <div key={item.metric} className="flex flex-col bg-white/5 p-8 backdrop-blur-sm">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{item.metric}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-white">{item.value}</dd>
                <p className="mt-2 text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Academic Collaborations */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Collaborations</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic Partnerships
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We collaborate with leading academic institutions worldwide to advance 
            the frontiers of AI research and innovation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {academicPartners.map((partner) => (
              <div key={partner.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center gap-2">
                    <GlobeAltIcon className="h-5 w-5 text-blue-400" />
                    {partner.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <LightBulbIcon className="h-5 w-5 text-blue-400" />
                    {partner.focus}
                  </p>
                  <p className="flex items-center gap-2">
                    <UserGroupIcon className="h-5 w-5 text-blue-400" />
                    {partner.collaboration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join our research community
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Interested in collaborating on cutting-edge AI research? 
            Let's explore opportunities to work together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </a>
            <a href="/careers" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              Research Careers <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}