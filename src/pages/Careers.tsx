import React from 'react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Be part of a team that's shaping the future of technology. Work on
            cutting-edge AI, quantum computing, and cybersecurity solutions that
            transform businesses worldwide.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-lg text-gray-300 mb-8">
            We're currently expanding our team with talented individuals who are passionate about innovation.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Check back soon for open positions in AI, cybersecurity, cloud computing, and more.
          </p>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="text-lg font-medium mb-2">Innovation</h3>
                <p className="text-gray-300">Work on cutting-edge technology that's shaping the future</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Growth</h3>
                <p className="text-gray-300">Continuous learning and professional development opportunities</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Impact</h3>
                <p className="text-gray-300">Make a real difference in the world through technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;