import { ArrowRight, Wrench, AlertTriangle, BarChart3, CheckCircle, Star, Brain, Zap, Clock, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIPredictiveMaintenance() {
  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "AI Failure Prediction",
      description: "Predict equipment failures with 95% accuracy using machine learning and IoT sensor data"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Early Warning System",
      description: "Get alerts before failures occur with intelligent anomaly detection and risk assessment"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive equipment analytics with health scores, efficiency metrics, and trends"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Scheduling",
      description: "AI-powered maintenance scheduling based on predicted failure times and resource availability"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "24/7 equipment monitoring with instant alerts and automated response systems"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Learning Algorithms",
      description: "Self-improving AI that learns from maintenance history and optimizes predictions over time"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small facilities",
      features: [
        "Up to 10 machines",
        "Basic prediction models",
        "Standard alerts",
        "Email support",
        "1 user account",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Most popular for growing facilities",
      features: [
        "Up to 50 machines",
        "Advanced AI models",
        "Automated scheduling",
        "Priority support",
        "Up to 5 user accounts",
        "API access",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large industrial facilities",
      features: [
        "Unlimited machines",
        "Premium AI features",
        "Custom models",
        "White-label solution",
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
      name: "Robert Martinez",
      company: "Manufacturing Corp",
      role: "Maintenance Director",
      content: "AI Predictive Maintenance reduced our unplanned downtime by 60% and saved us $2M in maintenance costs.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Power Plant",
      role: "Operations Manager",
      content: "The failure prediction accuracy is incredible. We can now prevent costly breakdowns before they happen.",
      rating: 5
    },
    {
      name: "David Wilson",
      company: "Oil Refinery",
      role: "Asset Manager",
      content: "Automated scheduling and real-time monitoring have transformed our maintenance operations completely.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Advanced Equipment Monitoring Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Prevent equipment failures with AI Predictive Maintenance. 95% accuracy failure prediction, automated scheduling, and real-time monitoring for industrial facilities."
        />
        <meta
          name="keywords"
          content="predictive maintenance, equipment monitoring, failure prediction, maintenance scheduling, IoT sensors, industrial AI, asset management, maintenance optimization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
              <Wrench className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">AI-Powered Equipment Monitoring</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                AI Predictive Maintenance
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Prevent equipment failures with our AI Predictive Maintenance platform. 
              Predict failures with 95% accuracy, reduce downtime by 60%, and optimize maintenance costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
                <div className="text-gray-300">Downtime Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$2M</div>
                <div className="text-gray-300">Average Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Predictive Maintenance Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to prevent failures and optimize equipment performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
                Choose the plan that fits your facility size. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-orange-400 bg-gradient-to-br from-orange-500/10 to-red-500/10'
                      : 'border-white/20 hover:border-orange-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
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
                Trusted by Industrial Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what maintenance professionals say about our predictive platform
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
              Ready to Prevent Equipment Failures?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of facilities optimizing maintenance with AI-powered predictions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
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