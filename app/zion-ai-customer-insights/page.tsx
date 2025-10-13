import { ArrowRight, Brain, BarChart3, Users, TrendingUp, Zap, Globe, CheckCircle, Star, Target, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAICustomerInsights() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze customer behavior patterns and predict future actions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Segmentation",
      description: "Automatically segment customers based on behavior, preferences, and lifetime value"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast customer churn, purchase likelihood, and lifetime value with 95% accuracy"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Sentiment Analysis",
      description: "Analyze customer feedback, reviews, and support tickets to understand sentiment trends"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalization Engine",
      description: "Create hyper-personalized experiences based on individual customer preferences and behavior"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Insights",
      description: "Get instant insights and alerts about customer behavior changes and opportunities"
    }
  ];

  const capabilities = [
    "Customer Lifetime Value Prediction",
    "Churn Risk Analysis & Prevention",
    "Purchase Behavior Analysis",
    "Customer Journey Mapping",
    "Sentiment & Emotion Analysis",
    "Personalization Recommendations",
    "A/B Testing Insights",
    "Cohort Analysis",
    "RFM Analysis (Recency, Frequency, Monetary)",
    "Customer Health Scoring",
    "Cross-sell & Upsell Opportunities",
    "Real-time Dashboard & Alerts"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 customers",
        "Basic analytics dashboard",
        "Customer segmentation",
        "Email support",
        "Standard integrations",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 100,000 customers",
        "Advanced analytics dashboard",
        "Predictive analytics",
        "Priority support",
        "Custom integrations",
        "Real-time insights",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited customers",
        "Custom analytics dashboard",
        "Advanced AI models",
        "24/7 phone support",
        "White-label solution",
        "Custom data sources",
        "Dedicated account manager",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rachel Thompson",
      company: "E-commerce Platform",
      role: "Head of Marketing",
      content: "Zion AI Customer Insights helped us increase customer retention by 35% and boost average order value by 28%. The predictive analytics are incredibly accurate.",
      rating: 5
    },
    {
      name: "James Park",
      company: "SaaS Company",
      role: "VP of Customer Success",
      content: "The churn prediction feature is a game-changer. We can now proactively reach out to at-risk customers and save them before they leave.",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "The personalization engine has transformed our customer experience. Our customers feel like we truly understand their needs and preferences.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights - Advanced Customer Analytics Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Understand your customers like never before with Zion AI Customer Insights - the ultimate AI-powered customer analytics platform. Predictive analytics, segmentation, and personalization."
        />
        <meta
          name="keywords"
          content="customer analytics, customer insights, predictive analytics, customer segmentation, churn prediction, personalization, customer behavior"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <Brain className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-indigo-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Zion AI Customer Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of your customer data with AI-driven insights. Predict behavior, prevent churn, 
              and create personalized experiences that drive growth and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
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
                <div className="text-3xl font-bold text-indigo-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">35%</div>
                <div className="text-gray-300">Average Retention Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">Companies Using Our Platform</div>
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
                Harness the power of AI to understand your customers like never before.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
                Everything you need to understand, predict, and optimize customer behavior.
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
                Choose Your Analytics Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start understanding your customers better today. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-indigo-400 bg-gradient-to-br from-indigo-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-indigo-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
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
                Trusted by Customer-Focused Companies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what companies say about Zion AI Customer Insights
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
              Join hundreds of companies using Zion AI Customer Insights to drive growth and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}