import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const _openPositions = [
    {
      title: "Engineering",
      location: "Full-time",
      description: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred'],
      icon: Brain
    },
    {
      title: "Engineering",
      location: "Full-time",
      description: ['3+ years full-stack experience', 'React, Node.js, TypeScript', 'Cloud platform experience'],
      icon: Code
    },
    {
      title: "Product",
      location: "Full-time",
      description: ['3+ years product management', 'AI/ML domain knowledge', 'Strong analytical skills'],
      icon: Users
    },
    {
      title: "Security",
      location: "Full-time",
      description: ['4+ years cybersecurity experience', 'AI security knowledge', 'Certifications preferred'],
      icon: Shield
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work options',
    'Professional development budget',
    'Unlimited PTO',
    'Latest technology equipment',
    'Team building events',
    'Mentorship programs'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Careers</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced careers solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default CareersPage;