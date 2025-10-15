
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Clock, Users, CheckCircle, Heart, DollarSign, Home, GraduationCap, Zap, Shield } from 'lucide-react';

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the future of AI and technology. Explore exciting career opportunities with us.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <p className="text-gray-300">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;