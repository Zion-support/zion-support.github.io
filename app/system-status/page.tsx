import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Redirecting to Status Page</h1>
        <p className="text-gray-300 mb-8">You are being redirected to our main status page.</p>
        <Link
          to="/status"
          className="cyber-button inline-flex items-center"
        >
          Go to Status Page
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default SystemStatusPage;