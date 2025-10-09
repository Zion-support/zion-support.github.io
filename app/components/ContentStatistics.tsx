import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure with minimal downtime"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and assistance"
    },
    {
      number: "50+",
      label: "Expert Team",
      description: "Highly skilled professionals and AI specialists"
    },
    {
      number: "100+",
      label: "Happy Clients",
      description: "Satisfied customers across the globe"
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "Proven track record in AI and technology solutions"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center cyber-card p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;
