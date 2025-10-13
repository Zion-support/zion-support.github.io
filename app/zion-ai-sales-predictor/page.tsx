import { ArrowRight, TrendingUp, Target, BarChart3, CheckCircle, Star, Brain, Zap, DollarSign, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAISalesPredictor() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "AI Sales Forecasting",
      description: "Predict future sales with 92% accuracy using machine learning and historical data analysis"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead Scoring Intelligence",
      description: "AI-powered lead scoring based on behavior patterns, demographics, and engagement history"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Revenue Analytics",
      description: "Comprehensive revenue analytics with pipeline forecasting and performance insights"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Deal Probability Scoring",
      description: "AI calculates the probability of closing deals and recommends next best actions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Follow-ups",
      description: "AI-driven follow-up recommendations and automated outreach sequences"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Market Trend Analysis",
      description: "Real-time market trend analysis and competitive intelligence for sales strategy"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small sales teams",
      features: [
        "Up to 1,000 leads/month",
        "Basic sales forecasting",
        "Simple lead scoring",
        "Standard analytics",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$129",
      period: "/month",
      description: "Most popular for growing teams",
      features: [
        "Up to 10,000 leads/month",
        "Advanced AI forecasting",
        "Intelligent lead scoring",
        "Comprehensive analytics",
        "Priority support",
        "Up to 5 user accounts",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large sales organizations",
      features: [
        "Unlimited leads",
        "Advanced AI features",
        "Custom models",
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
      name: "Michael Rodriguez",
      company: "SaaS Platform",
      role: "VP of Sales",
      content: "Zion AI Sales Predictor increased our forecast accuracy by 40% and helped us close 25% more deals.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      company: "B2B Services",
      role: "Sales Director",
      content: "The AI lead scoring is incredibly accurate. We're focusing on the right prospects and closing more deals.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "E-commerce Platform",
      role: "Head of Revenue",
      content: "Automated follow-ups and deal probability scoring have transformed our sales process completely.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Sales Predictor - Intelligent Sales Forecasting Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Predict and optimize your sales with Zion AI Sales Predictor. AI-powered forecasting, lead scoring, and revenue analytics for modern sales teams."
        />
        <meta
          name="keywords"
          content="sales forecasting, lead scoring, revenue analytics, sales prediction, AI sales, sales intelligence, deal probability, sales automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 mb-6">
              <TrendingUp className="w-4 h-4 text-violet-400 mr-2" />
              <span className="text-violet-400 text-sm font-medium">AI-Powered Sales Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Zion AI Sales Predictor
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Predict and optimize your sales performance with AI-powered forecasting, intelligent lead scoring, 
              and comprehensive revenue analytics. Close more deals with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-2">92%</div>
                <div className="text-gray-300">Forecast Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
                <div className="text-gray-300">More Deals Closed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2,800+</div>
                <div className="text-gray-300">Sales Teams</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Sales Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to predict, optimize, and accelerate your sales performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
                Choose the plan that fits your sales team size. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-violet-400 bg-gradient-to-br from-violet-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-violet-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700'
                        : 'border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-900'
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
                Trusted by Sales Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what sales professionals say about our prediction platform
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
              Ready to Predict Your Sales Success?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of sales teams closing more deals with AI-powered predictions and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300"
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