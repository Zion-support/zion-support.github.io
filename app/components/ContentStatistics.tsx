import React from 'react';
import AnimatedCounter from './AnimatedCounter';

interface Statistic {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface ContentStatisticsProps {
  statistics?: Statistic[];
  className?: string;
}

const defaultStatistics: Statistic[] = [
  {
    value: 500,
    label: 'Projects Completed',
    suffix: '+'
  },
  {
    value: 50,
    label: 'Happy Clients',
    suffix: '+'
  },
  {
    value: 5,
    label: 'Years Experience',
    suffix: '+'
  },
  {
    value: 99,
    label: 'Success Rate',
    suffix: '%'
  }
];

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  statistics = defaultStatistics,
  className = ''
}) => {
  return (
    <div className={`bg-gray-50 py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering exceptional results through innovative technology solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <AnimatedCounter
                  end={stat.value}
                  duration={2000}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-lg font-medium text-gray-700">
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