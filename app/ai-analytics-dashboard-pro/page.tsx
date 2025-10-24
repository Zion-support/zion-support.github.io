
import React from 'react';
import { CheckCircle, ArrowRight, TrendingUp, BarChart3, Cloud, Target, Database } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AiAnalyticsDashboardProPage: React.FC = () => {
  const features = [
    'AI-powered data analysis and insights',
    'Real-time dashboard customization',
    'Predictive analytics and forecasting',
    'Automated report generation',
    'Multi-source data integration',
    'Advanced visualization tools',
    'Custom KPI tracking and alerts',
    'White-label dashboard options',
    'Mobile-responsive design',
    'API access and custom integrations'
  ];

  const benefits = [
    'Make data-driven decisions 3x faster',
    'Identify trends and opportunities automatically',
    'Reduce reporting time by 90%',
    'Improve business performance by 35%',
    'Save 20+ hours weekly on data analysis',
    'Scale analytics with business growth'
  ];

  const integrations = [
    { name: 'Google Analytics', icon: <BarChart3 className="w-6 h-6 text-orange-400" /> },
    { name: 'Salesforce', icon: <Cloud className="w-6 h-6 text-blue-400" /> },
    { name: 'HubSpot', icon: <Target className="w-6 h-6 text-orange-400" /> },
    { name: 'MySQL', icon: <Database className="w-6 h-6 text-blue-600" /> },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6 text-indigo-400" /> },
    { name: 'MongoDB', icon: <Database className="w-6 h-6 text-green-400" /> }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      features: ['Basic analytics', '5 data sources', 'Email support']
    },
    {
      name: 'Professional',
      price: '$299/month',
      features: ['Advanced analytics', 'Unlimited data sources', 'Priority support']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom solutions', 'Dedicated support', 'White-label options']
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Analytics Dashboard Pro - Zion Tech Group"
        description="Advanced AI-powered analytics dashboard for data-driven decision making"
        keywords="analytics dashboard, AI analytics, business intelligence, data visualization"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Analytics Dashboard Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your data into actionable insights with AI-powered analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Integration Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center">
                  {integration.icon}
                  <p className="mt-2 text-sm font-medium">{integration.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAnalyticsDashboardProPage;

