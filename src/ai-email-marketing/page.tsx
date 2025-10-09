import React from 'react';
import { Mail, Target, Send, BarChart, Users, TrendingUp } from 'lucide-react';

const AIEmailMarketingPage: React.FC = () => {
  const _features = [
    {
      icon: Mail,
      title: 'AI Content Generation',
      description: 'Automatically create compelling email content that resonates with your audience'
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'Intelligent audience segmentation for personalized campaigns'
    },
    {
      icon: Send,
      title: 'Automated Campaigns',
      description: 'Set up and manage automated email sequences with ease'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into campaign performance and ROI'
    },
    {
      icon: Users,
      title: 'Audience Management',
      description: 'Build and maintain high-quality subscriber lists'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered recommendations to improve open rates and conversions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Email Marketing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered automation, personalization, and optimization tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {_features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="text-cyan-400 mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to revolutionize your email marketing?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our AI-powered email marketing platform and see the difference intelligent automation can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
              Get Started
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEmailMarketingPage;