'use client';
import React from 'react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of AI Research',
    }
  ];

  const stats = [
    { label: 'Team Members', value: '50+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Completed', value: '500+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-xl text-gray-300">Meet the experts behind our AI solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;