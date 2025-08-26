import React from 'react';

export const TeamExpertiseSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "Machine Learning, Neural Networks, Computer Vision",
      experience: "15+ years",
      icon: "👩‍💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Cybersecurity",
      expertise: "Network Security, Penetration Testing, Compliance",
      experience: "12+ years",
      icon: "🛡️",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Emily Watson",
      role: "Cloud Architecture Lead",
      expertise: "AWS, Azure, DevOps, Infrastructure",
      experience: "10+ years",
      icon: "☁️",
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "David Kim",
      role: "Digital Transformation Director",
      expertise: "Business Strategy, Process Optimization, Change Management",
      experience: "18+ years",
      icon: "🚀",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expert <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our world-class team of technology experts and industry veterans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{member.icon}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {member.name}
              </h3>
              
              <p className="text-cyan-400 font-semibold text-sm mb-3">
                {member.role}
              </p>
              
              <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                {member.expertise}
              </p>
              
              <div className="text-xs text-gray-500">
                {member.experience} experience
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};