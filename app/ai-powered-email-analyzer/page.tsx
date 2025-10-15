import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';

const AiPoweredEmailAnalyzerPage: React.FC = () => {
  const features = [
    {
      title: "AI Email Analysis",
      description: "Advanced AI analyzes email content, sentiment, and patterns for insights.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Sentiment analysis", "Content categorization", "Pattern recognition"]
    },
    {
      title: "Spam Detection",
      description: "Intelligent spam and phishing detection using machine learning algorithms.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["99.9% accuracy", "Real-time protection", "Zero false positives"]
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive analytics on email performance and engagement metrics.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Open rate tracking", "Click analysis", "ROI measurement"]
    },
    {
      title: "Automated Responses",
      description: "AI-powered automated email responses and smart routing.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Smart routing", "Auto-responses", "Priority classification"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI-Powered Email Analyzer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered email analysis and management solutions for businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AI-Powered Email Analyzer
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your email management with AI-powered analysis, spam detection, and performance insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-cyan-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Analyze Your Emails?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get started with our AI-powered email analysis solutions today.
          </p>
          <button className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiPoweredEmailAnalyzerPage;