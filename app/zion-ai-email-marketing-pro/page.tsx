import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Mail,
  BarChart3,
  CheckCircle,
  Zap
} from 'lucide-react';

const ZionAIEmailMarketingProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Email Campaigns",
      description: "Create highly personalized email campaigns using advanced AI algorithms that analyze customer behavior and preferences.",
      icon: <Mail className="w-6 h-6" />,
      benefits: ["Personalized content", "Optimal send times", "Subject line optimization"]
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive analytics and insights to track campaign performance and optimize your email marketing strategy.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Real-time tracking", "ROI analysis", "Performance insights"]
    },
    {
      title: "Automated Workflows",
      description: "Set up automated email sequences and workflows that nurture leads and customers throughout their journey.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Drip campaigns", "Behavioral triggers", "Lead nurturing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Email Marketing Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered email marketing solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion AI Email Marketing Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered personalization, automation, and analytics. 
            Increase open rates by 40% and click-through rates by 60%.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Email Marketing?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start creating AI-powered email campaigns that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIEmailMarketingProPage;