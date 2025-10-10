'use client';
import React from 'react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation',
      image: '/images/team/kleber.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Expert in cloud architecture and scalable AI systems',
      image: '/images/team/sarah.jpg'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of AI Research',
      bio: 'Leading researcher in machine learning and neural networks',
      image: '/images/team/marcus.jpg'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Meet the experts behind our innovative AI and IT solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, technology, and business innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-colors">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our team can help transform your business with cutting-edge AI and IT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;