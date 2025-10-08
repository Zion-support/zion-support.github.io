import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    { number: "500+", label: "Enterprise Clients", color: "text-cyan-400" },
    { number: "$2.5B+", label: "Cost Savings Delivered", color: "text-green-400" },
    { number: "99.9%", label: "Uptime Guarantee", color: "text-purple-400" },
    { number: "24/7", label: "Support Available", color: "text-orange-400" }
  ];

  return (
    <section className="mb-16" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
        Our Impact
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="cyber-card text-center p-6">
            <div className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.color}`}>
              {stat.number}
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentStatistics;