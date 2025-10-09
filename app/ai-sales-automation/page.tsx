import React from 'react';
import { ArrowRight, CheckCircle, Star, TrendingUp, Target, Users, BarChart, Zap } from 'lucide-react';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI Lead Scoring",
      description: "Intelligent lead scoring that identifies high-value prospects with 95% accuracy"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast sales trends and identify opportunities before your competitors"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Automated Follow-ups",
      description: "Never miss a follow-up with AI-powered email sequences and reminders"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Real-time insights and recommendations to improve your sales performance"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small sales teams getting started with AI automation",
      features: [
        "Up to 1,000 leads/month",
        "Basic AI lead scoring",
        "Email automation",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for growing sales teams with higher volume",
      features: [
        "Up to 10,000 leads/month",
        "Advanced AI lead scoring",
        "Multi-channel automation",
        "Advanced analytics",
        "Priority support",
        "CRM integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "per month",
      description: "Complete solution for large sales organizations",
      features: [
        "Unlimited leads",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Advanced integrations",
        "Custom development"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increase Sales by 40%",
      description: "AI-powered lead scoring and automation help you close more deals",
      metric: "40% more sales"
    },
    {
      title: "Reduce Sales Cycle",
      description: "Automated follow-ups and nurturing reduce time to close",
      metric: "30% faster closing"
    },
    {
      title: "Improve Lead Quality",
      description: "AI identifies the best prospects and prioritizes your efforts",
      metric: "95% accuracy"
    },
    {
      title: "Save Time on Admin",
      description: "Automate repetitive tasks and focus on selling",
      metric: "50% time saved"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Sales Automation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-400 max-w-3xl mx-auto">
              Automate your sales process and close more deals with AI-powered tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-colors"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Sales Automation Features
            </h2>
            <p className="text-xl text-gray-300">
              Transform your sales process with intelligent automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-orange-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Sales Results
            </h2>
            <p className="text-xl text-gray-300">
              See how AI sales automation transforms your revenue
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300">
              Flexible pricing to match your sales team size
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 relative ${plan.popular ? 'ring-2 ring-orange-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-orange-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-4">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors inline-flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-orange-600 text-white hover:bg-orange-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Sales?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of sales teams already using AI to close more deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              📞 Call (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISalesAutomationPage;