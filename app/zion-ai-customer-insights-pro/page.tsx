import { ArrowRight, Users, TrendingUp, Brain, BarChart3, Star, CheckCircle, Eye, Target, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiCustomerInsightsPro() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Segmentation",
      description: "AI-powered customer segmentation with behavioral analysis and predictive modeling"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Churn Prediction",
      description: "Identify at-risk customers with 95% accuracy using machine learning algorithms"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Sentiment Analysis",
      description: "Real-time sentiment analysis across all customer touchpoints and channels"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Lifetime Value Prediction",
      description: "Predict customer lifetime value and optimize marketing spend accordingly"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Behavioral Analytics",
      description: "Track customer journey and behavior patterns across all platforms"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalization Engine",
      description: "AI-driven personalization recommendations for products and content"
    }
  ];

  const insights = [
    "Customer Lifetime Value Analysis",
    "Purchase Pattern Recognition",
    "Cross-sell & Upsell Opportunities",
    "Customer Satisfaction Scoring",
    "Engagement Level Tracking",
    "Risk Assessment & Alerts",
    "Market Basket Analysis",
    "Cohort Analysis & Retention",
    "Customer Journey Mapping",
    "Predictive Churn Modeling",
    "Sentiment Trend Analysis",
    "Personalization Recommendations"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 customers",
        "Basic segmentation",
        "Churn prediction",
        "Email support",
        "Standard reports",
        "5GB data storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 100,000 customers",
        "Advanced segmentation",
        "Real-time insights",
        "Priority support",
        "Custom dashboards",
        "50GB data storage",
        "API access",
        "A/B testing tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited customers",
        "AI-powered insights",
        "Custom models",
        "24/7 dedicated support",
        "White-label solution",
        "Unlimited storage",
        "Advanced integrations",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "E-commerce Platform",
      role: "VP of Marketing",
      content: "Zion AI Customer Insights Pro helped us increase customer retention by 35% and boost revenue by 28% through better targeting.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "SaaS Company",
      role: "Head of Growth",
      content: "The churn prediction is incredibly accurate. We can now proactively retain customers before they leave, saving us thousands in acquisition costs.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "The personalization engine has transformed our customer experience. Our conversion rates have increased by 45% since implementation.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights Pro - Advanced Customer Analytics Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Unlock deep customer insights with AI-powered analytics. Predict churn, segment customers, analyze sentiment, and personalize experiences with Zion AI Customer Insights Pro."
        />
        <meta
          name="keywords"
          content="customer analytics, customer insights, churn prediction, customer segmentation, sentiment analysis, personalization, customer lifetime value"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Brain className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Zion AI Customer Insights Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of your customer data with AI-driven insights. Predict churn, segment customers, 
              analyze sentiment, and personalize experiences to maximize customer lifetime value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">Churn Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">35%</div>
                <div className="text-gray-300">Average Retention Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Data Sources Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Customer Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand and engage your customers better.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Customer Insights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get deep insights into every aspect of your customer relationships.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{insight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your customer data needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Customer Success Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what customer success professionals say about Zion AI Customer Insights Pro
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Understand Your Customers Better?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using Zion AI Customer Insights Pro to maximize customer value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}