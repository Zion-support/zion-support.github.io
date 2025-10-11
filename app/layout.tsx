'use client';
import React from 'react';

const LayoutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Layout
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional layout services delivered by experienced professionals.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LayoutPage;