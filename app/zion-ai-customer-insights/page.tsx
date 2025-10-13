import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Target,
  MessageSquare,
  Eye,
  Heart,
  AlertCircle,
  Globe,
  Smartphone
} from 'lucide-react';

const ZionAICustomerInsightsPage = () => {
  const features = [
    {
      title: "Real-time Sentiment Analysis",
      description: "Analyze customer emotions and satisfaction in real-time",
      icon: <Heart className="w-6 h-6" />,
      details: "Track sentiment across all customer touchpoints"
    },
    {
      title: "Behavioral Analytics",
      description: "Understand customer behavior patterns and preferences",
      icon: <Eye className="w-6 h-6" />,
      details: "Advanced machine learning models for behavior prediction"
    },
    {
      title: "Predictive Customer Scoring",
      description: "Identify high-value customers and churn risks",
      icon: <Target className="w-6 h-6" />,
      details: "AI-powered scoring for customer lifetime value"
    },
    {
      title: "Multi-Channel Data Integration",
      description: "Unify data from all customer touchpoints",
      icon: <Globe className="w-6 h-6" />,
      details: "Connect web, mobile, email, social, and offline data"
    },
    {
      title: "Automated Insights Generation",
      description: "Get actionable insights delivered automatically",
      icon: <Brain className="w-6 h-6" />,
      details: "AI-generated reports and recommendations"
    },
    {
      title: "Customer Journey Mapping",
      description: "Visualize complete customer journeys and touchpoints",
      icon: <TrendingUp className="w-6 h-6" />,
      details: "Interactive journey maps with conversion analysis"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 customers",
        "Basic sentiment analysis",
        "Email support",
        "Standard reports",
        "API access",
        "Mobile app"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100,000 customers",
        "Advanced analytics",
        "Priority support",
        "Custom dashboards",
        "Predictive modeling",
        "Team collaboration",
        "Advanced integrations",
        "White-label options"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited customers",
        "AI-powered insights",
        "24/7 phone support",
        "Custom AI models",
        "Dedicated account manager",
        "Advanced security",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const benefits = [
    {
      title: "Increase Revenue",
      description: "Identify opportunities to upsell and cross-sell",
      icon: <TrendingUp className="w-8 h-8" />,
      stat: "25% revenue increase",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Reduce Churn",
      description: "Predict and prevent customer churn",
      icon: <AlertCircle className="w-8 h-8" />,
      stat: "40% churn reduction",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Improve Satisfaction",
      description: "Enhance customer experience with data-driven insights",
      icon: <Heart className="w-8 h-8" />,
      stat: "60% satisfaction boost",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Save Time",
      description: "Automate customer analysis and reporting",
      icon: <Zap className="w-8 h-8" />,
      stat: "80% time saved",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Optimize product recommendations and shopping experience",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "SaaS",
      description: "Improve user engagement and reduce churn",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Retail",
      description: "Personalize customer experiences and loyalty programs",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Financial Services",
      description: "Enhance risk assessment and customer onboarding",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Customer Insights - Advanced Customer Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Unlock deep customer insights with our AI-powered analytics platform. Predict behavior, reduce churn, and increase revenue with advanced customer intelligence." />
        <meta name="keywords" content="customer insights, customer analytics, AI customer intelligence, sentiment analysis, behavioral analytics, customer churn prediction" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Customer Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Unlock deep customer insights with our AI-powered analytics platform. Predict behavior, 
            reduce churn, increase revenue, and deliver personalized experiences at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Companies Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25%</div>
              <div className="text-gray-300 text-sm">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Churn Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.9/5</div>
              <div className="text-gray-300 text-sm">User Rating</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Transform Your Customer Understanding
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced AI-Powered Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-sm text-cyan-400">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perfect for Every Industry
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Unlock Customer Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies using Zion AI Customer Insights to understand their customers 
              better and drive business growth with data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAICustomerInsightsPage;