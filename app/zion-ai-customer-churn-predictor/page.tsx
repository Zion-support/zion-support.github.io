import { ArrowRight, Users, AlertTriangle, BarChart3, CheckCircle, Star, Brain, Zap, TrendingDown, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAICustomerChurnPredictor() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "AI Churn Prediction",
      description: "Predict customer churn with 94% accuracy using machine learning and behavioral analysis"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Early Warning System",
      description: "Get alerts when customers show signs of churning with actionable retention strategies"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Churn Analytics Dashboard",
      description: "Comprehensive churn analytics with cohort analysis and retention insights"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Risk Scoring",
      description: "AI-powered risk scoring for each customer with personalized retention recommendations"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Retention Campaigns",
      description: "AI-driven retention campaigns with personalized offers and engagement strategies"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Behavioral Analysis",
      description: "Deep behavioral analysis to identify churn patterns and predict future behavior"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 customers",
        "Basic churn prediction",
        "Simple alerts",
        "Standard analytics",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10,000 customers",
        "Advanced AI prediction",
        "Automated campaigns",
        "Comprehensive analytics",
        "Priority support",
        "Up to 5 user accounts",
        "API access",
        "Custom models"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited customers",
        "Advanced AI features",
        "Custom integrations",
        "White-label reporting",
        "24/7 dedicated support",
        "Unlimited users",
        "Advanced compliance",
        "Custom training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "SaaS Platform",
      role: "Customer Success Director",
      content: "Zion AI Churn Predictor reduced our churn rate by 35% and increased customer lifetime value by 40%.",
      rating: 5
    },
    {
      name: "Mark Thompson",
      company: "E-commerce Platform",
      role: "VP of Customer Experience",
      content: "The early warning system is incredible. We can now intervene before customers even think about leaving.",
      rating: 5
    },
    {
      name: "Rachel Kim",
      company: "Subscription Service",
      role: "Head of Retention",
      content: "Automated retention campaigns saved us hours of work and improved our retention rates significantly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Churn Predictor - Advanced Churn Prevention Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Predict and prevent customer churn with Zion AI Churn Predictor. AI-powered churn prediction, early warning system, and automated retention campaigns."
        />
        <meta
          name="keywords"
          content="customer churn, churn prediction, customer retention, churn prevention, customer analytics, retention campaigns, customer lifetime value"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 mb-6">
              <Users className="w-4 h-4 text-rose-400 mr-2" />
              <span className="text-rose-400 text-sm font-medium">AI-Powered Churn Prevention</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                Zion AI Customer Churn Predictor
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Predict and prevent customer churn with AI-powered analysis and automated retention strategies. 
              Keep your customers happy and reduce churn by up to 35%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-rose-400 text-rose-400 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-2">94%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">35%</div>
                <div className="text-gray-300">Churn Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300">LTV Increase</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Churn Prevention Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to predict, prevent, and reduce customer churn effectively.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your customer base. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-rose-400 bg-gradient-to-br from-rose-500/10 to-pink-500/10'
                      : 'border-white/20 hover:border-rose-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700'
                        : 'border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-slate-900'
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
                See what customer success professionals say about our churn prediction platform
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
              Ready to Reduce Customer Churn?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses retaining more customers with AI-powered churn prediction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-rose-400 text-rose-400 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-slate-900 transition-all duration-300"
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