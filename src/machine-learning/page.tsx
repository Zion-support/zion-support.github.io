import React from 'react';
import { Phone, CheckCircle, TrendingUp } from 'lucide-react';;
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MachineLearningPage: React.FC = () => {
  const features = [
    'Custom ML model development and training',
    'Predictive analytics and forecasting',
    'Data preprocessing and feature engineering',
    'Model optimization and hyperparameter tuning',
    'Real-time inference and deployment',
    'A/B testing and performance monitoring',
    'Integration with existing systems',
    'Continuous learning and model updates'
  ];

  const benefits = [
    '40% better prediction accuracy',
    '60% faster insights generation',
    '50% reduction in manual analysis',
    '30% improvement in decision making',
    '95% model reliability',
    '80% cost savings on analytics'
  ];

  const useCases = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast sales, demand, and market trends with high accuracy',
      icon: '📈'
    },
    {
      title: 'Customer Segmentation',
      description: 'Identify and target customer groups for personalized marketing',
      icon: '👥'
    },
    {
      title: 'Fraud Detection',
      description: 'Detect and prevent fraudulent activities in real-time',
      icon: '🛡️'
    },
    {
      title: 'Recommendation Systems',
      description: 'Provide personalized recommendations to increase engagement',
      icon: '🎯'
    },
    {
      title: 'Process Optimization',
      description: 'Optimize business processes and reduce operational costs',
      icon: '⚙️'
    },
    {
      title: 'Risk Assessment',
      description: 'Evaluate and mitigate business risks with data-driven insights',
      icon: '⚠️'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Custom ML models for predictive analytics and decision-making
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with our advanced machine learning solutions that provide 
              intelligent insights, predictions, and automation to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              ML Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Business Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Implement ML?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our experts help you build and deploy machine learning solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MachineLearningPage;