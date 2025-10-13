import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Database, Zap, CheckCircle, ArrowRight, Star, Users } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AiAnalyticsPage = () => {
  const features = [
    {
      title: "Real-time Data Visualization",
      description: "Interactive dashboards that update in real-time with your business data",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Live data updates", "Interactive charts", "Customizable views", "Mobile responsive"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered predictions to help you make informed business decisions",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Future trend prediction", "Risk assessment", "Demand forecasting", "Performance optimization"]
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically without manual intervention",
      icon: <Database className="w-8 h-8" />,
      benefits: ["Scheduled reports", "Custom templates", "Multi-format export", "Email delivery"]
    },
    {
      title: "Data Integration",
      description: "Connect and analyze data from multiple sources in one unified platform",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["API integrations", "Database connections", "Cloud data sources", "Real-time sync"]
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      title: "Customer Behavior Analysis",
      description: "Analyze customer purchase patterns, preferences, and lifetime value to optimize marketing strategies and increase sales.",
      results: ["35% increase in conversion rates", "25% improvement in customer retention", "40% boost in average order value"]
    },
    {
      industry: "Healthcare",
      title: "Patient Outcome Prediction",
      description: "Predict patient outcomes and treatment effectiveness using historical data and AI models.",
      results: ["30% improvement in treatment accuracy", "20% reduction in readmission rates", "45% faster diagnosis times"]
    },
    {
      industry: "Manufacturing",
      title: "Quality Control Optimization",
      description: "Monitor production quality in real-time and predict potential issues before they occur.",
      results: ["50% reduction in defects", "35% improvement in production efficiency", "60% decrease in downtime"]
    },
    {
      industry: "Finance",
      title: "Risk Assessment & Fraud Detection",
      description: "Analyze transaction patterns and detect fraudulent activities in real-time.",
      results: ["90% accuracy in fraud detection", "70% reduction in false positives", "85% faster response times"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: 299,
      period: "per month",
      description: "Perfect for small businesses getting started with AI analytics",
      features: [
        "Up to 5 data sources",
        "Basic dashboards",
        "Standard reports",
        "Email support",
        "1GB data storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 799,
      period: "per month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 20 data sources",
        "Advanced dashboards",
        "Custom reports",
        "Priority support",
        "10GB data storage",
        "API access",
        "Real-time alerts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 1999,
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited data sources",
        "Custom dashboards",
        "Advanced analytics",
        "24/7 dedicated support",
        "Unlimited data storage",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Analytics - Advanced Business Intelligence Solutions | Zion Tech Group"
        description="Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive analytics, and automated reporting for better business decisions."
        keywords="AI analytics, business intelligence, data visualization, predictive analytics, automated reporting, data integration"
        canonical="https://ziontechgroup.com/ai-analytics"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Analytics
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your data into actionable insights with our advanced AI-powered analytics platform. 
            Get real-time dashboards, predictive analytics, and automated reporting to drive better business decisions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to turn your data into business intelligence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different industries are leveraging AI analytics for success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start your AI analytics journey today and unlock the power of your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiAnalyticsPage;