import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered AI and IT solutions"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable service with enterprise-grade infrastructure"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance"
    },
    {
      number: "50+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    }
  ];

  return (
    <section className="mb-16" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
        Our Impact
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="text-center cyber-card p-6">
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2 neon-text">
              {stat.number}
            </div>
            <div className="text-white font-semibold mb-1">{stat.label}</div>
            <div className="text-sm text-gray-300">{stat.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentStatistics;