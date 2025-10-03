import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Join Our Team</h1>
        <p className="text-lg text-gray-300 mb-8">
          Be part of the AI revolution. Explore career opportunities at Zion AI.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">AI Research Scientist</h3>
            <p className="text-gray-300 mb-4">
              Lead cutting-edge research in artificial intelligence and quantum computing.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Apply Now
            </button>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Quantum Engineer</h3>
            <p className="text-gray-300 mb-4">
              Design and implement quantum computing solutions for enterprise applications.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;