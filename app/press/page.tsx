import React from 'react';

const PressPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Press & Media</h1>
        <p className="text-lg text-gray-300 mb-8">
          Latest press releases and media coverage of our AI breakthroughs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Press Release</h3>
            <p className="text-gray-300 mb-4">
              Zion AI announces revolutionary quantum consciousness breakthrough.
            </p>
            <span className="text-blue-400 text-sm">October 2025</span>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Media Coverage</h3>
            <p className="text-gray-300 mb-4">
              Leading tech publications feature our autonomous enterprise solutions.
            </p>
            <span className="text-blue-400 text-sm">September 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;