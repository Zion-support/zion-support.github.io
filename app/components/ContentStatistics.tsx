import React from 'react';
const ContentStatistics: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
=======

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
      description: "Reliable infrastructure and services"
    },
    {
      number: "24/7",
      label: "Expert Support",
      description: "Round-the-clock technical assistance"
    },
    {
      number: "50+",
      label: "Micro SAAS Apps",
      description: "Ready-to-use business applications"
    }
  ];

  return (
    <section className="mb-16" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
        Our Impact
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="cyber-card hologram-card p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2 neon-text">
              {stat.number}
            </div>
            <div className="text-lg font-semibold text-white mb-2">
              {stat.label}
            </div>
            <div className="text-sm text-gray-300">
              {stat.description}
            </div>
          </div>
        ))}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8b7d
      </div>
    </section>
  );
};

export default ContentStatistics;
