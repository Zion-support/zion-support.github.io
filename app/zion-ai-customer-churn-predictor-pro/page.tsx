import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import {
  Target,
  CheckCircle,
  AlertTriangle,
  Cpu
} from 'lucide-react';

const ZionAICustomerChurnPredictorProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Churn Prediction",
      description: "Advanced machine learning algorithms predict customer churn with 94% accuracy using behavioral patterns and engagement data.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["94% prediction accuracy", "Real-time risk scoring", "Behavioral pattern analysis"]
    },
    {
      title: "Early Warning System",
      description: "Get instant alerts when customers show signs of potential churn, allowing proactive intervention strategies.",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["Real-time alerts", "Risk level indicators", "Customizable thresholds"]
    },
    {
      title: "Personalized Retention Campaigns",
      description: "AI generates personalized retention strategies and campaigns based on individual customer risk profiles.",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Personalized strategies", "Automated campaigns", "A/B testing recommendations"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Customer Churn Predictor Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer churn prediction and retention solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion AI Customer Churn Predictor Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Predict and prevent customer churn with our advanced AI-powered platform. 
            Reduce churn by up to 40% with intelligent prediction and personalized retention strategies.
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Reduce Customer Churn?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start predicting and preventing customer churn with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
=======

export default function ZionAiCustomerChurnPredictorPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion AI Customer Churn Predictor Pro - Zion Tech Group</title>
        <meta name="description" content="Predict and prevent customer churn with AI-powered analytics." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI Customer Churn Predictor Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Predict and prevent customer churn with AI-powered analytics.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">
                Use machine learning to identify customers at risk of churning.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Alerts</h3>
              <p className="text-gray-600">
                Get instant notifications when customers show churn indicators.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Retention Strategies</h3>
              <p className="text-gray-600">
                Receive personalized recommendations to retain at-risk customers.
              </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6246
            </div>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default ZionAICustomerChurnPredictorProPage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6246
