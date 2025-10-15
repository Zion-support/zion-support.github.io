import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, ArrowRight } from 'lucide-react';

const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet our team of experts in AI, cloud, and cybersecurity solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Users className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-lg text-gray-300 mb-8">
            Meet our team of experts and industry professionals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
