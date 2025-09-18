import React from 'react';
<<<<<<< HEAD
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
const QuantumServicesPage: React.FC = () => {
  const quantumServices = [
    {
      id: 'quantum-neural-networks',
      name: 'Quantum Neural Networks',
      description: 'Next-generation neural networks powered by quantum computing',
      price: '$3,999',
      period: 'month',
      popular: true,
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 'quantum-financial-trading',
      name: 'Quantum Financial Trading',
      description: 'Quantum-powered algorithmic trading and risk management',
      price: '$2,999',
      period: 'month',
      popular: false,
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      id: 'quantum-materials-discovery',
      name: 'Quantum Materials Discovery',
      description: 'Accelerated materials research using quantum simulation',
      price: '$2,499',
      period: 'month',
      popular: false,
      icon: <Atom className="w-8 h-8" />
    },
    {
      id: 'quantum-bio-computing',
      name: 'Quantum Bio-Computing',
      description: 'Quantum computing for biological and pharmaceutical research',
      price: '$2,799',
      period: 'month',
      popular: false,
      icon: <Heart className="w-8 h-8" />
    },
    {
      id: 'quantum-internet-security',
      name: 'Quantum Internet Security',
      description: 'Unbreakable quantum encryption and secure communications',
      price: '$1,999',
      period: 'month',
      popular: false,
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'quantum-cloud-infrastructure',
      name: 'Quantum Cloud Infrastructure',
      description: 'Quantum-ready cloud computing infrastructure',
      price: '$3,499',
      period: 'month',
      popular: false,
      icon: <Cloud className="w-8 h-8" />
    }
  ];

  const quantumCapabilities = [
    {
      title: 'Quantum Computing',
      description: 'Advanced quantum processing for complex calculations',
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: 'Quantum Simulation',
      description: 'Accurate simulation of quantum systems',
      icon: <Network className="w-6 h-6" />
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum principles',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'Quantum Machine Learning',
      description: 'AI enhanced by quantum computing power',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Quantum Sensing',
      description: 'Ultra-sensitive quantum measurement systems',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Quantum Communication',
      description: 'Secure quantum information transfer',
      icon: <Globe className="w-6 h-6" />
    }
  ];

export default function QuantumServices() {
=======

const quantum-services: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">quantum-services</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default quantum-services;
