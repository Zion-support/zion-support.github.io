'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Target,
  Users,
  Award,
  CheckCircle,
  Zap,
  BarChart3,
  PieChart
} from 'lucide-react';

interface Metric {
  icon: React.ComponentType<any>;
  value: string;
  label: string;
  description: string;
  color: string;
  bgColor: string;
  trend?: {
    direction: 'up' | 'down' | 'stable';
    value: string;
  };
}

const SuccessMetricsShowcase2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const metrics: Metric[] = [
    {
      icon: TrendingUp,
      value: '400%',
      label: 'Average ROI',
      description: 'Within 90 days of implementation',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: { direction: 'up', value: '+25%' }
    },
    {
      icon: DollarSign,
      value: '$50M+',
      label: 'Cost Savings',
      description: 'Annual savings per organization',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: { direction: 'up', value: '+$12M' }
    },
    {
      icon: Clock,
      value: '90 Days',
      label: 'Time to Value',
      description: 'Average time to achieve ROI',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: { direction: 'down', value: '-15 days' }
    },
    {
      icon: Target,
      value: '95%',
      label: 'Success Rate',
      description: 'Implementation success rate',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: { direction: 'up', value: '+5%' }
    },
    {
      icon: Users,
      value: '500+',
      label: 'Organizations',
      description: 'Successfully transformed',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      trend: { direction: 'up', value: '+150' }
    },
    {
      icon: Award,
      value: '2026',
      label: 'Latest Content',
      description: 'Cutting-edge strategies and insights',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      trend: { direction: 'up', value: 'New' }
    }
  ];

  const industryMetrics = [
    { industry: 'Manufacturing', roi: '450%', savings: '$2.8M', time: '60 days' },
    { industry: 'Financial Services', roi: '380%', savings: '$3.2M', time: '75 days' },
    { industry: 'Healthcare', roi: '420%', savings: '$2.5M', time: '90 days' },
    { industry: 'Retail', roi: '350%', savings: '$1.8M', time: '45 days' },
    { industry: 'Technology', roi: '500%', savings: '$4.1M', time: '30 days' }
  ];

  const getTrendIcon = (direction: string) => {
    switch (direction) {
      case 'up':
        return <TrendingUp className="w-3 h-3 text-green-600" />;
      case 'down':
        return <TrendingUp className="w-3 h-3 text-red-600 rotate-180" />;
      default:
        return <BarChart3 className="w-3 h-3 text-gray-600" />;
    }
  };

  const getTrendColor = (direction: string) => {
    switch (direction) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">PROVEN RESULTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Metrics That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from organizations that have implemented our AI transformation strategies. 
            These aren't just numbers—they represent <span className="font-semibold text-green-600">real business value</span>.
          </p>
        </motion.div>

        {/* Main Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`${metric.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${metric.color} bg-white shadow-sm`}>
                  <metric.icon className="w-6 h-6" />
                </div>
                {metric.trend && (
                  <div className={`flex items-center space-x-1 ${getTrendColor(metric.trend.direction)}`}>
                    {getTrendIcon(metric.trend.direction)}
                    <span className="text-sm font-medium">{metric.trend.value}</span>
                  </div>
                )}
              </div>
              
              <div className={`text-4xl font-bold ${metric.color} mb-2 group-hover:scale-105 transition-transform`}>
                {metric.value}
              </div>
              
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {metric.label}
              </div>
              
              <div className="text-sm text-gray-600">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Results by Industry
            </h3>
            <p className="text-gray-600">
              See how different industries are achieving remarkable results with AI transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industryMetrics.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-lg font-bold text-gray-900 mb-4">
                  {industry.industry}
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {industry.roi}
                    </div>
                    <div className="text-xs text-gray-600">Average ROI</div>
                  </div>
                  
                  <div>
                    <div className="text-lg font-bold text-blue-600">
                      {industry.savings}
                    </div>
                    <div className="text-xs text-gray-600">Annual Savings</div>
                  </div>
                  
                  <div>
                    <div className="text-lg font-bold text-purple-600">
                      {industry.time}
                    </div>
                    <div className="text-xs text-gray-600">Time to Value</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-xl mr-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Quick Wins Strategy
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Organizations that start with high-impact, low-effort AI implementations see results 3x faster than those who attempt comprehensive transformations.
            </p>
            <div className="flex items-center text-green-600 font-semibold">
              <Zap className="w-4 h-4 mr-2" />
              Average 200% ROI in 30 days
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                <PieChart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Process Optimization
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              AI-powered process optimization delivers the highest ROI when combined with change management and employee training.
            </p>
            <div className="flex items-center text-blue-600 font-semibold">
              <ArrowRight className="w-4 h-4 mr-2" />
              Up to 500% efficiency gains
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Don't just read about success—create your own. Our proven methodology has helped 500+ organizations achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </a>
            <a
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View All Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessMetricsShowcase2026;