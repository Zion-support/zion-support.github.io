import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Zap, 
  Award, 
  Clock, 
  Shield,
  Brain,
  Target,
  PieChart,
  Activity,
  Eye,
  MessageSquare,
  ShoppingCart,
  Heart,
  AlertTriangle,
  ThumbsUp,
  Globe,
  Smartphone,
  Monitor,
  Laptop,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const ZionAICustomerInsightsPage = () => {
  const features = [
    {
      title: "AI-Powered Customer Analytics",
      description: "Deep insights into customer behavior, preferences, and purchasing patterns using advanced AI algorithms",
      icon: <Brain className="w-6 h-6" />,
      details: [
        "Behavioral pattern analysis",
        "Purchase prediction models",
        "Customer segmentation",
        "Lifetime value calculation"
      ]
    },
    {
      title: "Real-Time Sentiment Analysis",
      description: "Monitor customer sentiment across all touchpoints and channels in real-time",
      icon: <Heart className="w-6 h-6" />,
      details: [
        "Social media monitoring",
        "Review sentiment tracking",
        "Support ticket analysis",
        "Email sentiment scoring"
      ]
    },
    {
      title: "Predictive Customer Scoring",
      description: "Identify high-value prospects and predict customer churn before it happens",
      icon: <Target className="w-6 h-6" />,
      details: [
        "Lead scoring algorithms",
        "Churn prediction models",
        "Upsell opportunity detection",
        "Risk assessment scoring"
      ]
    },
    {
      title: "Automated Insights Dashboard",
      description: "Get actionable insights delivered automatically with customizable reports and alerts",
      icon: <BarChart3 className="w-6 h-6" />,
      details: [
        "Custom dashboard creation",
        "Automated report generation",
        "Alert notifications",
        "Data visualization tools"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 customers",
        "Basic analytics",
        "Email support",
        "Standard reports",
        "1 dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 10,000 customers",
        "Advanced analytics",
        "Priority support",
        "Custom reports",
        "5 dashboards",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited customers",
        "Full AI capabilities",
        "24/7 support",
        "White-label options",
        "Unlimited dashboards",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const insights = [
    {
      title: "Customer Segmentation",
      description: "Automatically group customers based on behavior, demographics, and preferences",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Targeted marketing", "Personalized experiences", "Improved conversion rates"]
    },
    {
      title: "Churn Prediction",
      description: "Identify customers at risk of leaving and take proactive retention actions",
      icon: <AlertTriangle className="w-8 h-8" />,
      benefits: ["Reduce churn by 30%", "Increase retention", "Save on acquisition costs"]
    },
    {
      title: "Purchase Prediction",
      description: "Predict when customers are likely to make their next purchase",
      icon: <ShoppingCart className="w-8 h-8" />,
      benefits: ["Timely marketing", "Inventory optimization", "Revenue forecasting"]
    },
    {
      title: "Sentiment Tracking",
      description: "Monitor customer satisfaction and brand perception across all channels",
      icon: <MessageSquare className="w-8 h-8" />,
      benefits: ["Brand reputation management", "Customer satisfaction", "Issue resolution"]
    }
  ];

  const integrations = [
    {
      name: "Salesforce",
      description: "Sync customer data with Salesforce CRM",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "HubSpot",
      description: "Integrate with HubSpot marketing automation",
      icon: <Target className="w-6 h-6" />
    },
    {
      name: "Google Analytics",
      description: "Combine web analytics with customer insights",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      name: "Mailchimp",
      description: "Sync email marketing data for better segmentation",
      icon: <Mail className="w-6 h-6" />
    },
    {
      name: "Shopify",
      description: "Connect e-commerce data for purchase insights",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      name: "Zendesk",
      description: "Analyze support tickets for customer sentiment",
      icon: <MessageSquare className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "25,000+", label: "Customers Analyzed", icon: <Users className="w-6 h-6" /> },
    { number: "500+", label: "Businesses Using", icon: <Award className="w-6 h-6" /> },
    { number: "95%", label: "Prediction Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "30%", label: "Churn Reduction", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Zion AI Customer Insights - Advanced Customer Analytics & Behavior Analysis | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Gain deep insights into customer behavior with our AI-powered analytics platform. Predict churn, segment customers, and optimize your marketing with advanced machine learning." 
        />
        <meta 
          name="keywords" 
          content="customer insights, customer analytics, behavior analysis, churn prediction, customer segmentation, AI analytics, marketing automation" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Customer Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unlock the power of your customer data with our AI-powered analytics platform. 
            Gain deep insights into customer behavior, predict churn, and optimize your marketing strategies with advanced machine learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
              Watch Demo
              <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Customer Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform raw customer data into actionable business intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {insight.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {insight.description}
                </p>
                <ul className="space-y-1">
                  {insight.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-xs text-cyan-400">
                      <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced AI Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to understand and engage your customers better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {integration.name}
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 hover:shadow-cyan-500/25' 
                    : 'border-white/20 hover:shadow-cyan-500/10'
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
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Understand Your Customers Better?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses using our AI customer insights platform to make data-driven decisions and grow their revenue.
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
              Watch Live Demo
              <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAICustomerInsightsPage;