import React from 'react';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Our Team</h1>
          <p className="text-xl text-gray-300 mb-12">
            Meet the experts behind Zion Tech Group
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-purple-400 mb-2">CEO & Founder</p>
            <p className="text-gray-300">
              Leading the vision and strategy for Zion Tech Group.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-purple-400 mb-2">CTO</p>
            <p className="text-gray-300">
              Driving technical innovation and product development.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p className="text-purple-400 mb-2">Lead AI Engineer</p>
            <p className="text-gray-300">
              Specializing in artificial intelligence and machine learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
