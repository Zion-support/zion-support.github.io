import React from 'react';
import { TrendingUp, Users, DollarSign, Target, CheckCircle, ArrowRight } from 'lucide-react';

interface Statistic {
  id: number;
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

const ContentStatistics: React.FC = () => {
  const statistics: Statistic[] = [
    {
      id: 1,
      label: 'Revenue Growth',
      value: '+45%',
      change: 'vs last quarter',
      trend: 'up',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 2,
      label: 'Customer Satisfaction',
      value: '98%',
      change: '+2% vs last month',
      trend: 'up',
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 3,
      label: 'Cost Reduction',
      value: '30%',
      change: 'operational savings',
      trend: 'up',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      id: 4,
      label: 'Goal Achievement',
      value: '95%',
      change: 'of targets met',
      trend: 'up',
      icon: <Target className="w-6 h-6" />
    }
  ];

  const achievements = [
    'Increased efficiency by 60%',
    'Reduced operational costs by 40%',
    'Improved customer satisfaction to 98%',
    'Achieved 99.9% uptime',
    'Expanded to 15+ countries',
    'Processed 1M+ transactions'
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our solutions deliver measurable results that drive business growth and success.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat) => (
            <div key={stat.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
              <div className={`text-sm ${getTrendColor(stat.trend)}`}>{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
            <p className="text-lg text-gray-300 mb-8">
              Our solutions have helped businesses achieve remarkable results across various industries.
            </p>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Success Story</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Client Satisfaction</span>
                <span className="text-2xl font-bold text-green-400">98%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Project Success Rate</span>
                <span className="text-2xl font-bold text-blue-400">95%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Average ROI</span>
                <span className="text-2xl font-bold text-purple-400">340%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Uptime</span>
                <span className="text-2xl font-bold text-green-400">99.9%</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;