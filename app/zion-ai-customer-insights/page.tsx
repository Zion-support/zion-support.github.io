import { ArrowRight, Users, Eye, TrendingUp, BarChart3, CheckCircle, Star, Brain, Zap, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAICustomerInsights() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Customer Segmentation",
      description: "Automatically segment customers using advanced ML algorithms based on behavior, preferences, and value"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Behavioral Analytics",
      description: "Track and analyze customer interactions across all touchpoints to understand journey patterns"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Customer Lifetime Value",
      description: "Forecast customer value and identify high-potential customers for targeted marketing"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Churn Prediction & Prevention",
      description: "Identify at-risk customers and trigger automated retention campaigns before they churn"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Customer Dashboards",
      description: "Comprehensive dashboards showing customer health, engagement, and satisfaction metrics"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Insights & Recommendations",
      description: "AI-generated insights and actionable recommendations to improve customer experience"
    }
  ];

  const capabilities = [
    "Customer Journey Mapping",
    "Sentiment Analysis",
    "Purchase Pattern Analysis",
    "Engagement Scoring",
    "Personalization Engine",
    "A/B Testing Framework",
    "Cohort Analysis",
    "RFM Analysis",
    "Customer Health Scoring",
    "Retention Campaign Automation",
    "Cross-sell/Upsell Recommendations",
    "Customer Feedback Analysis"
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
        "Standard analytics",
        "Email support",
        "Basic dashboards",
        "1 integration"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Most popular for growing companies",
      features: [
        "Up to 100,000 customers",
        "Advanced AI features",
        "Predictive analytics",
        "Priority support",
        "Custom dashboards",
        "5 integrations",
        "API access"
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
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Unlimited integrations",
        "Custom reporting",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "E-commerce Platform",
      role: "Customer Success Director",
      content: "Zion AI Customer Insights helped us increase customer retention by 40% and identify $2M in upsell opportunities. The predictive analytics are incredibly accurate.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "SaaS Company",
      role: "VP of Marketing",
      content: "The customer segmentation is game-changing. We can now personalize our marketing campaigns with surgical precision. ROI increased by 300%.",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Retail Chain",
      role: "Customer Experience Manager",
      content: "This platform transformed how we understand our customers. The churn prediction feature alone saved us thousands of customers.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights - AI-Powered Customer Analytics Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Understand your customers with Zion AI Customer Insights - the ultimate AI-powered customer analytics platform. Segmentation, behavioral analysis, and predictive insights for modern businesses."
        />
        <meta
          name="keywords"
          content="customer insights, customer analytics, customer segmentation, behavioral analysis, churn prediction, customer lifetime value, personalization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 mb-6">
              <Users className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-indigo-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                Zion AI Customer Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock deep customer insights with AI-powered analytics. Advanced segmentation, 
              behavioral analysis, and predictive insights to drive customer success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">40%</div>
                <div className="text-gray-300">Increase in Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">Churn Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">ROI Improvement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Customer Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand and engage your customers with artificial intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Customer Analytics Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools and features you need to understand and optimize customer relationships.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
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
                Scalable Customer Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your customer base and analytics needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-indigo-400 bg-gradient-to-br from-indigo-500/10 to-blue-500/10'
                      : 'border-white/20 hover:border-indigo-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:from-indigo-600 hover:to-blue-700'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
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
                See what customer success professionals say about Zion AI Customer Insights
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
              Ready to Understand Your Customers?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI to unlock deep customer insights and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
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