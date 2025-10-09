import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🚀" },
    { number: "$2.5B+", label: "Cost Savings Delivered", icon: "💰" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🛡️" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center cyber-card p-6">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;
