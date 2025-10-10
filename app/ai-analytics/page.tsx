import React from 'react';
import { Brain, BarChart, Target, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get intelligent insights and recommendations powered by advanced machine learning algorithms.',
    benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart recommendations']
  },
  {
    icon: BarChart,
    title: 'Real-Time Dashboards',
    description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
    benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
  },
  {
    icon: Target,
    title: 'Automated Reporting',
    description: 'Generate comprehensive reports automatically with AI-optimized content and visualizations.',
    benefits: ['Scheduled reports', 'Custom templates', 'PDF export', 'Email delivery']
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Track and analyze performance metrics to optimize your business operations.',
    benefits: ['KPI tracking', 'Performance optimization', 'ROI analysis', 'Growth insights']
  }
];

const AiAnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Analytics Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiAnalyticsPage;