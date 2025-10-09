import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DevopsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold text-white text-center">Devops</h1>
        <p className="text-gray-300 text-center mt-4">Coming Soon</p>
      </main>
      <Footer />
    </div>
  );
};

export default DevopsPage;
