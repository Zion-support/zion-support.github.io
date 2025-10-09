import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4c2f

const CareersPage: React.FC = () => {
<<<<<<< HEAD
=======
  const _openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Lead development of cutting-edge AI solutions and machine learning models',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred'],
      icon: Brain
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build scalable web applications and integrate AI solutions',
      requirements: ['3+ years full-stack experience', 'React, Node.js, TypeScript', 'Cloud platform experience'],
      icon: Code
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Drive AI product strategy and work with cross-functional teams',
      requirements: ['3+ years product management', 'AI/ML domain knowledge', 'Strong analytical skills'],
      icon: Users
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Ensure security of AI systems and protect client data',
      requirements: ['4+ years cybersecurity experience', 'AI security knowledge', 'Certifications preferred'],
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

>>>>>>> cursor/fix-errors-and-merge-to-main-d933
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