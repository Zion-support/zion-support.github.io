<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState } from 'react';

import Link from 'next/link';
import {
  FlaskConical,
  Brain,
  Shield,
  Cloud,
  TrendingUp,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  Award,
  Clock,
  DollarSign,
  Search,
  Filter,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Microscope,
  TestTube,
  Atom,
  Satellite,
  Telescope
} from 'lucide-react';

const researchAreas = [
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Machine Learning',
    icon: Brain,
    description: 'Advancing the frontiers of AI through innovative research in neural networks, natural language processing, and computer vision.',
    color: 'from-purple-500 to-indigo-600',
    focus: [
      'Deep Learning Architectures',
      'Natural Language Processing',
      'Computer Vision & Image Recognition',
      'Reinforcement Learning',
      'AI Ethics & Responsible AI',
      'Edge AI & Federated Learning'
    ],
    publications: 15,
    patents: 8,
    projects: 12
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing & Quantum Technologies',
    icon: Atom,
    description: 'Exploring quantum computing applications and developing quantum-resistant cryptographic solutions.',
    color: 'from-blue-500 to-cyan-600',
    focus: [
      'Quantum Algorithms',
      'Quantum Cryptography',
      'Quantum Machine Learning',
      'Quantum Error Correction',
      'Post-Quantum Cryptography',
      'Quantum Sensing'
    ],
    publications: 8,
    patents: 5,
    projects: 6
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Privacy',
    icon: Shield,
    description: 'Developing next-generation security solutions to protect against evolving cyber threats.',
    color: 'from-red-500 to-pink-600',
    focus: [
      'Threat Intelligence',
      'Zero-Trust Security',
      'Privacy-Preserving Technologies',
      'Blockchain Security',
      'IoT Security',
      'AI-Powered Security'
    ],
    publications: 22,
    patents: 12,
    projects: 18
  },
  {
    id: 'edge-computing',
    name: 'Edge Computing & IoT',
    icon: Zap,
    description: 'Researching distributed computing paradigms and intelligent edge systems for real-time processing.',
    color: 'from-yellow-500 to-orange-600',
    focus: [
      'Edge AI & Machine Learning',
      '5G & 6G Networks',
      'IoT Security & Privacy',
      'Edge Computing Optimization',
      'Real-time Data Processing',
      'Smart City Technologies'
    ],
    publications: 18,
    patents: 9,
    projects: 14
  },
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    icon: TrendingUp,
    description: 'Advancing data analytics methodologies and developing tools for extracting meaningful insights from complex datasets.',
    color: 'from-green-500 to-emerald-600',
    focus: [
      'Big Data Processing',
      'Predictive Analytics',
      'Data Visualization',
      'Statistical Modeling',
      'Real-time Analytics',
      'Data Privacy & Ethics'
    ],
    publications: 25,
    patents: 15,
    projects: 20
  },
  {
    id: 'cloud-native',
    name: 'Cloud-Native Technologies',
    icon: Cloud,
    description: 'Researching cloud computing architectures and developing scalable, resilient cloud solutions.',
    color: 'from-indigo-500 to-purple-600',
    focus: [
      'Microservices Architecture',
      'Container Orchestration',
      'Serverless Computing',
      'Multi-cloud Strategies',
      'Cloud Security',
      'DevOps Automation'
    ],
    publications: 20,
    patents: 10,
    projects: 16
  }
];

const researchProjects = [
  {
    id: 1,
    title: 'AI-Powered Cybersecurity Threat Detection',
    area: 'AI & ML',
    status: 'Active',
    description: 'Developing machine learning algorithms to detect and respond to cybersecurity threats in real-time.',
    team: ['Dr. Sarah Chen', 'AI Researcher', 'Security Expert'],
    duration: '18 months',
    funding: '$500,000',
    outcomes: [
      'Real-time threat detection system',
      '95% accuracy in threat classification',
      '3 pending patents',
      '5 research publications'
    ],
    icon: Brain,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 2,
    title: 'Quantum-Resistant Cryptographic Protocols',
    area: 'Quantum Computing',
    status: 'Active',
    description: 'Researching and developing cryptographic algorithms that remain secure against quantum computing attacks.',
    team: ['Dr. Michael Rodriguez', 'Quantum Researcher', 'Cryptographer'],
    duration: '24 months',
    funding: '$750,000',
    outcomes: [
      'Post-quantum cryptographic framework',
      '2 patent applications',
      '3 research publications',
      'Industry collaboration established'
    ],
    icon: Atom,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    title: 'Edge AI for Smart Manufacturing',
    area: 'Edge Computing',
    status: 'Active',
    description: 'Developing intelligent edge computing solutions for real-time manufacturing process optimization.',
    team: ['Dr. Emily Wang', 'Edge Computing Expert', 'Manufacturing Specialist'],
    duration: '12 months',
    funding: '$300,000',
    outcomes: [
      'Edge AI platform prototype',
      '30% efficiency improvement',
      '2 research publications',
      'Industry partnership formed'
    ],
    icon: Zap,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Privacy-Preserving Data Analytics',
    area: 'Data Science',
    status: 'Completed',
    description: 'Researching techniques for analyzing sensitive data while preserving individual privacy.',
    team: ['Dr. James Brown', 'Data Scientist', 'Privacy Expert'],
    duration: '15 months',
    funding: '$400,000',
    outcomes: [
      'Privacy-preserving analytics framework',
      '4 research publications',
      '1 patent granted',
      'Open-source toolkit released'
    ],
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 5,
    title: 'Cloud-Native Security Architecture',
    area: 'Cloud-Native',
    status: 'Active',
    description: 'Developing security-first cloud architecture patterns for enterprise applications.',
    team: ['Dr. Lisa Garcia', 'Cloud Architect', 'Security Researcher'],
    duration: '20 months',
    funding: '$600,000',
    outcomes: [
      'Security architecture framework',
      '3 research publications',
      '2 patent applications',
      'Enterprise pilot program'
    ],
    icon: Cloud,
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 6,
    title: 'AI Ethics and Responsible AI',
    area: 'AI & ML',
    status: 'Active',
    description: 'Researching ethical considerations in AI development and deployment.',
    team: ['Dr. David Kim', 'AI Ethicist', 'Social Scientist'],
    duration: '16 months',
    funding: '$350,000',
    outcomes: [
      'AI ethics framework',
      'Responsible AI guidelines',
      '4 research publications',
      'Industry standards contribution'
    ],
    icon: Brain,
    color: 'from-purple-500 to-indigo-600'
  }
];

const publications = [
  {
    id: 1,
    title: 'Advanced Neural Network Architectures for Cybersecurity',
    authors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez'],
    journal: 'IEEE Transactions on Cybersecurity',
    year: 2027,
    citations: 45,
    area: 'AI & ML',
    abstract: 'This paper presents novel neural network architectures specifically designed for detecting sophisticated cyber threats...'
  },
  {
    id: 2,
    title: 'Quantum-Resistant Cryptographic Protocols: A Comprehensive Survey',
    authors: ['Dr. Michael Rodriguez', 'Dr. Emily Wang'],
    journal: 'Cryptography and Security',
    year: 2027,
    citations: 32,
    area: 'Quantum Computing',
    abstract: 'We survey the current state of post-quantum cryptography and propose new protocols...'
  },
  {
    id: 3,
    title: 'Edge Computing Optimization for Real-Time AI Applications',
    authors: ['Dr. Emily Wang', 'Dr. James Brown'],
    journal: 'Edge Computing Systems',
    year: 2026,
    citations: 28,
    area: 'Edge Computing',
    abstract: 'This research explores optimization techniques for deploying AI models at the edge...'
  },
  {
    id: 4,
    title: 'Privacy-Preserving Machine Learning: Techniques and Applications',
    authors: ['Dr. James Brown', 'Dr. Lisa Garcia'],
    journal: 'Data Privacy and Security',
    year: 2026,
    citations: 56,
    area: 'Data Science',
    abstract: 'We present a comprehensive framework for privacy-preserving machine learning...'
  },
  {
    id: 5,
    title: 'Security-First Cloud Architecture Patterns',
    authors: ['Dr. Lisa Garcia', 'Dr. David Kim'],
    journal: 'Cloud Computing Security',
    year: 2026,
    citations: 38,
    area: 'Cloud-Native',
    abstract: 'This paper introduces security-first design patterns for cloud-native applications...'
  }
];

const patents = [
  {
    id: 1,
    title: 'Adaptive Threat Detection System Using Machine Learning',
    inventors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez'],
    filingDate: '2026-08-15',
    status: 'Granted',
    patentNumber: 'US 11,234,567',
    area: 'AI & ML',
    description: 'A system for detecting cybersecurity threats using adaptive machine learning algorithms.'
  },
  {
    id: 2,
    title: 'Quantum-Resistant Digital Signature Algorithm',
    inventors: ['Dr. Michael Rodriguez'],
    filingDate: '2026-06-20',
    status: 'Pending',
    patentNumber: 'US 2026/0123456',
    area: 'Quantum Computing',
    description: 'A digital signature algorithm resistant to quantum computing attacks.'
  },
  {
    id: 3,
    title: 'Edge Computing Resource Optimization Method',
    inventors: ['Dr. Emily Wang', 'Dr. James Brown'],
    filingDate: '2026-05-10',
    status: 'Granted',
    patentNumber: 'US 11,123,456',
    area: 'Edge Computing',
    description: 'A method for optimizing resource allocation in edge computing environments.'
  },
  {
    id: 4,
    title: 'Privacy-Preserving Data Analytics Framework',
    inventors: ['Dr. James Brown'],
    filingDate: '2026-03-25',
    status: 'Granted',
    patentNumber: 'US 11,012,345',
    area: 'Data Science',
    description: 'A framework for analyzing data while preserving individual privacy.'
  },
  {
    id: 5,
    title: 'Cloud Security Architecture Pattern',
    inventors: ['Dr. Lisa Garcia'],
    filingDate: '2026-02-15',
    status: 'Pending',
    patentNumber: 'US 2026/0098765',
    area: 'Cloud-Native',
    description: 'A security architecture pattern for cloud-native applications.'
  }
];

export default function ResearchDevelopment() {
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const areas = ['All', ...researchAreas.map(area => area.name)];
  const statuses = ['All', 'Active', 'Completed', 'Planning'];

  const filteredProjects = researchProjects.filter(project => {
    const matchesArea = selectedArea === 'All' || project.area === selectedArea;
    const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesArea && matchesStatus && matchesSearch;
  });

  const getAreaIcon = (areaName: string) => {
    const area = researchAreas.find(a => a.name === areaName);
    return area ? area.icon : FlaskConical;
  };

  const getAreaColor = (areaName: string) => {
    const area = researchAreas.find(a => a.name === areaName);
    return area ? area.color : 'from-gray-500 to-slate-600';
  };

  const getStatusBadge = (status: string) => {
    if (status === 'Active') {
      return <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Active</span>;
    } else if (status === 'Completed') {
      return <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">Completed</span>;
    } else {
      return <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">Planning</span>;
    }
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const research-development.page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>research-development.page | Zion Tech Group</title>
        <meta name="description" content="research-development.page - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">research-development.page</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default research-development.page;