'use client';
import React from 'react';
const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Lead Scoring & Qualification',
      description: 'AI-powered lead scoring that automatically identifies and prioritizes high-value prospects.',
      benefits: ['Automated Scoring', 'Behavioral Analysis', 'Predictive Modeling', 'Priority Ranking']
    },
    {
      icon: Users,
      title: 'Sales Pipeline Management',
      description: 'Intelligent pipeline management that optimizes deals and predicts closing probabilities.',
      benefits: ['Deal Tracking', 'Probability Prediction', 'Pipeline Optimization', 'Performance Analytics']
    },
    {
      icon: TrendingUp,
      title: 'Revenue Forecasting',
      description: 'Advanced forecasting models that predict revenue with high accuracy using AI algorithms.',
      benefits: ['Accurate Predictions', 'Trend Analysis', 'Risk Assessment', 'Scenario Planning']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics dashboard that provides insights into sales performance and opportunities.',
      benefits: ['Real-time Metrics', 'Performance Tracking', 'ROI Analysis', 'Team Insights']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$399/month',
      description: 'Perfect for small sales teams',
      features: ['Up to 5 users', 'Basic lead scoring', 'Pipeline management', 'Email support']
    },
    {
      name: 'Professional',
      price: '$799/month',
      description: 'Ideal for growing sales teams',
      features: ['Up to 25 users', 'Advanced AI features', 'Revenue forecasting', 'Priority support', 'API access']
    },
    {
      name: 'Enterprise',
      price: '$1,599/month',
      description: 'For large sales organizations',
      features: ['Unlimited users', 'Custom AI training', 'Advanced analytics', '24/7 support', 'Dedicated account manager']
    }
  ];
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
  );
};

export default AISalesAutomationPage;
