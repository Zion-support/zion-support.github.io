import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <EnhancedSEO
        title="Page - Zion Tech Group"
        description="Zion Tech Group - Advanced AI and IT Solutions"
        keywords="AI solutions, IT services, technology"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Page Coming Soon</h1>
        <p className="text-gray-300 mb-8">This page is under development.</p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          <span>Go Home</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Page;
