import React from 'react';
import { ArrowRight, CheckCircle, Star, BarChart, Eye, Zap, Palette } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Interactive Dashboards",
      description: "Create stunning, interactive dashboards that update in real-time"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Get intelligent insights and recommendations from your data automatically"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "50+ Chart Types",
      description: "Choose from 50+ beautiful chart types and visualization options"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Updates",
      description: "Dashboards update automatically as your data changes"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "per month",
      description: "Perfect for small teams getting started with data visualization",
      features: [
        "Up to 5 dashboards",
        "Basic chart types",
        "Real-time updates",
        "Email support",
        "Basic templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing teams with complex data needs",
      features: [
        "Up to 25 dashboards",
        "All chart types",
        "AI insights",
        "Priority support",
        "Custom templates",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited dashboards",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Advanced integrations",
        "Custom development"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Business Intelligence",
      description: "Transform complex data into actionable business insights",
      result: "40% faster decision making"
    },
    {
      title: "Sales Analytics",
      description: "Track sales performance and identify growth opportunities",
      result: "25% increase in sales"
    },
    {
      title: "Marketing ROI",
      description: "Visualize marketing campaign performance and ROI",
      result: "60% better campaign optimization"
    },
    {
      title: "Operational Metrics",
      description: "Monitor key operational metrics in real-time",
      result: "30% improvement in efficiency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Data Visualization
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-400 max-w-3xl mx-auto">
              Transform your data into stunning visual insights with AI-powered analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors inline-flex items-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-colors"
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
              Powerful Visualization Features
            </h2>
            <p className="text-xl text-gray-300">
              Create beautiful, interactive data visualizations with AI assistance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-pink-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300">
              See how AI data visualization drives business results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {useCase.result}
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
              Flexible pricing to match your visualization needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 relative ${plan.popular ? 'ring-2 ring-pink-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-pink-400 mb-2">{plan.price}</div>
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
                      ? 'bg-pink-600 text-white hover:bg-pink-700' 
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
            Ready to Visualize Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using AI to turn data into insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors inline-flex items-center"
            >
              📞 Call (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-colors"
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

export default AIDataVisualizationPage;