'use client';
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { TrendingDown, Target, Users, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail, Zap, Shield, Brain, BarChart  } from 'lucide-react';

const AICustomerChurnPage: React.FC  = () => {
  const features = [
    {
      icon: TrendingDown,
      title: 'Predictive Churn Analysis',
      description: 'AI models predict customer churn risk with high accuracy using behavioral patterns'
    },
    {
      icon: Target,
      title: 'Risk Scoring',
      description: 'Individual customer churn risk scores with actionable insights and recommendations'
    },
    {
      icon: Users,
      title: 'Segmentation Analysis',
      description: 'Identify high-risk customer segments and develop targeted retention strategies'
    },
    {
      icon: AlertTriangle,
      title: 'Early Warning System',
      description: 'Real-time alerts and notifications when customers show churn indicators'
    }
  ];

  const benefits = [
    'AI-powered churn prediction with 90%+ accuracy',
    'Real-time risk scoring and early warning alerts',
    'Customer segmentation and behavioral analysis',
    'Automated retention campaign recommendations',
    'Integration with CRM and marketing platforms',
    'Advanced analytics and churn trend insights',
    'Customizable prediction models for your business',
    'ROI tracking and retention campaign effectiveness'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>AI Customer Churn Prediction | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer churn prediction and retention solutions to reduce customer loss and increase lifetime value" />
        <meta name="keywords" content="customer churn, churn prediction, AI, retention, customer analytics" />
      </Helmet>
                {/* Hero Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6"></h1>
              AI Customer Churn Prediction
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Predict and prevent customer churn with AI-powered analytics. Identify at-risk customers 
              and implement targeted retention strategies to maximize customer lifetime value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"></button>
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"></button>
                Learn More
              </button>
                </div>
          </div>
                </div>
      </section>
                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Advanced Churn Prediction Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our AI platform delivers accurate churn predictions with actionable insights.
            </p>
                </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                {feature.title}
                </h3>
                <p className="text-gray-300"></p>
                {feature.description}
                </p>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Reduce customer churn and increase retention with intelligent predictions.
            </p>
                </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300 text-lg"></p>
                {benefit}
                </p>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Ready to Predict and Prevent Churn?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"></p>
              Contact our experts to discuss your churn prediction needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                <Phone className="mr-2" size={20} />
                Call Now
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"></button>
                <Mail className="mr-2" size={20} />
                Email Us
              </button>
                </div>
          </div>
                </div>
      </section>
                </div>
  );
};

export default AICustomerChurnPage;