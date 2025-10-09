import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Team solutions and services by Zion Tech Group" />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Team
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Coming Soon
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            This page is under development. Please check back soon for more information about our Team services.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
