import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries"
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      description: "Our clients consistently rate us highly for quality and service"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock support for all our clients"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Expert professionals dedicated to your success"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-gray-300 text-sm">
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