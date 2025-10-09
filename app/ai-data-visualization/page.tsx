'use client';
import React from 'react';
const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that bring your data to life with real-time updates.',
      benefits: ['Real-time Updates', 'Customizable Layouts', 'Interactive Elements', 'Mobile Responsive']
    },
    {
      icon: PieChart,
      title: 'Advanced Chart Types',
      description: 'Comprehensive library of chart types including 3D visualizations and custom graphics.',
      benefits: ['50+ Chart Types', '3D Visualizations', 'Custom Graphics', 'Animation Effects']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive analytics that forecast trends and identify patterns in your data.',
      benefits: ['Trend Forecasting', 'Pattern Recognition', 'Anomaly Detection', 'Risk Assessment']
    },
    {
      icon: Eye,
      title: 'Data Storytelling',
      description: 'Transform complex data into compelling visual stories that drive decision-making.',
      benefits: ['Narrative Flow', 'Contextual Insights', 'Actionable Recommendations', 'Executive Summaries']
    }
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '$299/month',
      description: 'Perfect for small teams',
      features: ['Up to 5 dashboards', 'Basic chart types', 'Standard templates', 'Email support']
    },
    {
      name: 'Professional',
      price: '$599/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 25 dashboards', 'All chart types', 'Custom templates', 'Priority support', 'API access']
    },
    {
      name: 'Enterprise',
      price: '$1,199/month',
      description: 'For large organizations',
      features: ['Unlimited dashboards', 'Custom development', 'White-label options', '24/7 support', 'Dedicated account manager']
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Features Section */}
        <section className="mb-16 pt-20">
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="cyber-card p-8 relative">
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
        </main>
        <Footer />
      </>
    );
};

export default AIDataVisualizationPage;
