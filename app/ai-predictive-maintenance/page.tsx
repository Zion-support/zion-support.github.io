import { ArrowRight, Wrench, BarChart3, AlertTriangle, CheckCircle, Star, Zap, Brain, TrendingUp, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiPredictiveMaintenance() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Failure Prediction",
      description: "Machine learning algorithms predict equipment failures with 95% accuracy up to 30 days in advance"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring of equipment health with IoT sensors and advanced analytics"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Intelligent Alerts",
      description: "Smart alert system that prioritizes maintenance tasks based on risk and impact analysis"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Scheduling",
      description: "AI-driven maintenance scheduling that optimizes resource allocation and minimizes downtime"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Condition-Based Maintenance",
      description: "Move from reactive to predictive maintenance with real-time condition monitoring"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Continuous optimization of equipment performance and energy efficiency through AI insights"
    }
  ];

  const industries = [
    "Manufacturing",
    "Oil & Gas",
    "Power Generation",
    "Aviation",
    "Automotive",
    "Mining",
    "Healthcare Equipment",
    "Data Centers",
    "Food Processing",
    "Pharmaceuticals",
    "Water Treatment",
    "Renewable Energy"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small facilities",
      features: [
        "Up to 10 equipment units",
        "Basic failure prediction",
        "Standard monitoring",
        "Email alerts",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Most popular for growing facilities",
      features: [
        "Up to 100 equipment units",
        "Advanced AI predictions",
        "Real-time monitoring",
        "Priority alerts",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large industrial facilities",
      features: [
        "Unlimited equipment units",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "Advanced reporting",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      company: "Manufacturing Corp",
      role: "Maintenance Director",
      content: "AI Predictive Maintenance reduced our unplanned downtime by 80% and saved us $2M annually in maintenance costs.",
      rating: 5
    },
    {
      name: "Dr. Lisa Wang",
      company: "Power Generation",
      role: "Operations Manager",
      content: "The predictive accuracy is incredible. We prevented 3 major equipment failures that would have cost millions.",
      rating: 5
    },
    {
      name: "James Thompson",
      company: "Aviation Services",
      role: "Fleet Manager",
      content: "Our aircraft maintenance efficiency improved by 300%. The AI recommendations are spot-on every time.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Intelligent Equipment Monitoring | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform maintenance with AI Predictive Maintenance - intelligent equipment monitoring, failure prediction, and automated scheduling for industrial facilities."
        />
        <meta
          name="keywords"
          content="predictive maintenance, AI maintenance, equipment monitoring, failure prediction, industrial IoT, maintenance optimization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6">
              <Wrench className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">#1 Predictive Maintenance Platform 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                AI Predictive Maintenance
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your maintenance operations with AI-powered predictive maintenance. 
              Prevent failures before they happen and optimize equipment performance with intelligent monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">80%</div>
                <div className="text-gray-300">Downtime Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$2M+</div>
                <div className="text-gray-300">Average Annual Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Maintenance Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform from reactive to predictive maintenance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI predictive maintenance solutions work across all industrial sectors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{industry}</span>
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
                      ? 'border-amber-400 bg-gradient-to-br from-amber-500/10 to-orange-500/10'
                      : 'border-white/20 hover:border-amber-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700'
                        : 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900'
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
                Trusted by Maintenance Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what maintenance directors say about our AI Predictive Maintenance
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
              Ready to Transform Your Maintenance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of facilities using AI Predictive Maintenance to optimize operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
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