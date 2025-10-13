import React from 'react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion Tech Group - Services"
        description="Professional technology services and solutions"
        keywords="technology, services, solutions"
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Services</h1>
        <p className="text-gray-300 mb-8">Professional technology services and solutions.</p>
        <Link to="/" className="text-cyan-400 hover:text-cyan-300">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
