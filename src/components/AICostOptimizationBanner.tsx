import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingDown, DollarSign, BarChart3, ArrowRight } from 'lucide-react';

const AICostOptimizationBanner: React.FC = () => {
  const features = [
    {
      icon: TrendingDown,
      title: 'Reduce AI Costs by 70%',
      description: 'Optimize your AI infrastructure with our advanced cost management solutions'
    },
    {
      icon: DollarSign,
      title: 'ROI-Focused Approach',
      description: 'Maximize your return on investment with data-driven cost optimization'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor and analyze AI spending patterns with comprehensive dashboards'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Cost Optimization Solutions
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Reduce your AI infrastructure costs by up to 70% while maintaining peak performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-green-100">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn More About Cost Optimization
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICostOptimizationBanner;