import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

import { Users, Award, Target, Globe, Brain, Rocket, Shield, Zap } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Leadership() {
  const leadership = [
    {
      name: 'Kleber Santos',
      title: 'CEO & Founder',
      description: 'Visionary leader with 15+ years of experience in AI, quantum computing, and technology innovation.',
      expertise: ['AI Strategy', 'Quantum Computing', 'Technology Innovation', 'Business Development'],
      image: '/images/leadership/kleber-santos.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      description: 'Leading our technical vision with expertise in AI, machine learning, and quantum technologies.',
      expertise: ['AI Research', 'Machine Learning', 'Quantum Computing', 'Technical Architecture'],
      image: '/images/leadership/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Security Officer',
      description: 'Cybersecurity expert ensuring our solutions meet the highest security standards.',
      expertise: ['Cybersecurity', 'Zero Trust', 'Compliance', 'Risk Management'],
      image: '/images/leadership/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief Research Officer',
      description: 'Leading breakthrough research in quantum computing and AI consciousness.',
      expertise: ['Quantum Research', 'AI Consciousness', 'Research Strategy', 'Innovation'],
      image: '/images/leadership/emily-watson.jpg'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible through continuous innovation and research.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Building secure, reliable solutions that our clients can trust with their most critical operations.'
    },
    {
      icon: Users,
      title: 'Human-Centric',
      description: 'Technology should enhance human capabilities, not replace them. We focus on human-AI collaboration.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions address global challenges and create positive impact across industries and communities.'
    }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const leadership: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>leadership | Zion Tech Group</title>
        <meta name="description" content="leadership - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">leadership</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default leadership;