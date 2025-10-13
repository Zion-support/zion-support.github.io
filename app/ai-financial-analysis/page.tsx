import { Helmet } from 'react-helmet-async';
import { TrendingUp, BarChart3, DollarSign, Target, Zap, Brain } from 'lucide-react';

export default function AIFinancialAnalysisPage() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Advanced machine learning models predict market trends and investment opportunities with 95% accuracy."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis using AI to identify potential threats and opportunities in real-time."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Portfolio Optimization",
      description: "AI-driven portfolio management that automatically rebalances investments for maximum returns."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Tracking",
      description: "Set financial goals and track progress with AI-powered insights and recommendations."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Alerts",
      description: "Instant notifications for market changes, opportunities, and potential risks."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Insights",
      description: "AI-generated insights and recommendations based on your financial data and market conditions."
    }
  ];

  const benefits = [
    "95% accuracy in financial predictions",
    "Real-time market analysis and alerts",
    "Automated portfolio optimization",
    "Comprehensive risk assessment",
    "Personalized investment recommendations",
    "Advanced fraud detection and prevention"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">
            AI Financial Analysis
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered financial analysis solutions to optimize your investment strategies and risk management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span className="text-white font-medium">{benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
