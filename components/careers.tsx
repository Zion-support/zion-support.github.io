<<<<<<< HEAD
import React from 'react';
=======
import Head from 'next/head';
import Layout from '../components/layout/Layout';

import { 
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-research',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Experience with large language models and neural networks',
        'Strong problem-solving and analytical skills'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'quantum',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and quantum computing solutions.',
      requirements: [
        'Knowledge of quantum algorithms and quantum information theory',
        'Strong mathematical and theoretical background'
      ]
    },
    {
      id: 3,
      title: 'Space Technology Engineer',
      department: 'space-tech',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and develop innovative space technology solutions and satellite systems.',
      requirements: [
        'Experience with satellite design and space systems',
        'Knowledge of orbital mechanics and space environment',
        'Familiarity with space industry standards and regulations'
      ]
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'engineering',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and cloud-based solutions.',
      requirements: [
        'Knowledge of modern web technologies and APIs',
        'Understanding of software architecture and design patterns',
        'Experience with DevOps and CI/CD practices'
      ]
    },
    {
      id: 5,
      title: 'Business Development Manager',
      department: 'sales',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive business growth through strategic partnerships and client relationships.',
      requirements: [
        'Proven track record in B2B sales and business development',
        'Experience in technology or consulting industries',
        'Strong networking and relationship-building skills',
        'Understanding of emerging technologies and market trends'
      ]
    }
  ];

  const companyValues = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push boundaries and explore new technologies to solve complex problems.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'People Matter',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'We create solutions that make a difference in the world.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    }
  ];

  const benefits = [
    'Competitive salary and equity packages',
    'Flexible work arrangements and remote work options',
    'Professional development and training programs',
    'Generous paid time off and holidays',
    '401(k) with company matching',
    'Modern technology and equipment',
    'Collaborative and inclusive work environment'
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const careers: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">careers</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default careers;