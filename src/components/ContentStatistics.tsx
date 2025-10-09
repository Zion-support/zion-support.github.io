import React from 'react';

interface ContentStatisticsProps {
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({ className = '' }) => {
  const stats = [
    { number: '$50M+', label: 'Annual Savings Delivered' },
    { number: '95%', label: 'Process Automation' },
    { number: '300%', label: 'Average ROI' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' }
  ];

  return (
    <div className={`py-16 bg-gradient-to-r from-gray-900 to-gray-800 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-300">
            Our AI and IT solutions deliver measurable business outcomes
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;