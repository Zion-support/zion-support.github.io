import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  description?: string;
}

interface ContentStatisticsProps {
  stats?: StatItem[];
  title?: string;
  description?: string;
}

const defaultStats: StatItem[] = [
  {
    icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
    value: "300%",
    label: "Average ROI",
    description: "Our clients see significant returns on their AI investments"
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    value: "500+",
    label: "Happy Clients",
    description: "Businesses trust us with their digital transformation"
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    value: "50+",
    label: "Awards Won",
    description: "Recognition for excellence in AI and technology"
  },
  {
    icon: <Clock className="w-8 h-8 text-green-400" />,
    value: "24/7",
    label: "Support",
    description: "Round-the-clock assistance for all our clients"
  }
];

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  stats = defaultStats,
  title = "Our Impact",
  description = "Numbers that speak to our commitment to excellence and client success"
}) => {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                
                <div className="text-xl font-semibold text-gray-300 mb-2">
                  {stat.label}
                </div>
                
                {stat.description && (
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;