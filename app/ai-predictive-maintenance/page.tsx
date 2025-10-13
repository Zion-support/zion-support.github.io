import { ArrowRight, Wrench, CheckCircle, Star, Users, Brain, Zap, Mail, Smartphone, Globe, AlertTriangle, BarChart3, Clock, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIPredictiveMaintenance() {
  const features = [
    {
      title: "IoT Sensor Integration",
      description: "Connect and monitor equipment through IoT sensors for real-time data collection and analysis.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Machine Learning Models",
      description: "Advanced ML algorithms that learn from historical data to predict equipment failures with 95% accuracy.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of equipment health with instant alerts and automated notifications.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Predictive Analytics",
      description: "Forecast maintenance needs and optimize schedules to minimize downtime and reduce costs.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Automated Scheduling",
      description: "Intelligent scheduling of maintenance tasks based on predicted failure timelines and resource availability.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Cost Optimization",
      description: "Reduce maintenance costs by up to 30% through optimized scheduling and preventive measures.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const industries = [
    {
      title: "Manufacturing",
      description: "Monitor production equipment, assembly lines, and machinery for optimal performance.",
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: "Energy & Utilities",
      description: "Predict failures in power plants, wind turbines, and electrical infrastructure.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Transportation",
      description: "Maintain fleets of vehicles, aircraft, and railway systems with predictive insights.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Healthcare",
      description: "Ensure medical equipment reliability and prevent critical system failures.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small facilities",
      features: [
        "Up to 50 connected devices",
        "Basic ML models",
        "Email alerts",
        "Standard analytics",
        "Email support",
        "30-day data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      description: "Most popular for growing operations",
      features: [
        "Up to 500 connected devices",
        "Advanced ML models",
        "Multi-channel alerts",
        "Advanced analytics",
        "Priority support",
        "1-year data retention",
        "Custom dashboards",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "per month",
      description: "For large industrial operations",
      features: [
        "Unlimited devices",
        "Custom ML models",
        "Real-time alerts",
        "Enterprise analytics",
        "24/7 phone support",
        "Unlimited data retention",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "95%", label: "Prediction Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "30%", label: "Cost Reduction", icon: <Zap className="w-6 h-6" /> },
    { number: "50%", label: "Downtime Reduction", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <AlertTriangle className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "Manufacturing Corp",
      role: "Operations Director",
      content: "Zion AI Predictive Maintenance has reduced our unplanned downtime by 60% and saved us over $2M in maintenance costs this year alone.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Power Generation",
      role: "Maintenance Manager",
      content: "The predictive models are incredibly accurate. We've prevented 3 major equipment failures that would have cost us millions in repairs.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Airlines Group",
      role: "Fleet Manager",
      content: "This system has revolutionized our aircraft maintenance. We can now predict issues weeks in advance and schedule maintenance during optimal times.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Smart Equipment Monitoring | Zion Tech Group</title>
        <meta
          name="description"
          content="Prevent equipment failures with AI Predictive Maintenance. IoT sensors, machine learning, and real-time monitoring. Reduce downtime by 50% and costs by 30%. Starting at $299/month."
        />
        <meta
          name="keywords"
          content="predictive maintenance, IoT monitoring, equipment maintenance, machine learning, industrial AI, maintenance optimization, equipment failure prediction"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-yellow-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
                <Wrench className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-orange-400 text-sm font-medium">Smart Equipment Monitoring</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                AI
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 animate-pulse">
                  {" "}Predictive Maintenance
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Prevent equipment failures before they happen with AI-powered predictive maintenance. 
                Reduce downtime by 50% and maintenance costs by 30% with intelligent monitoring.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Wrench className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Advanced Maintenance Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent monitoring and predictive analytics for optimal equipment performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Industry Applications
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven solutions across multiple industries for maximum equipment reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Scalable Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the maintenance monitoring plan that fits your facility size and needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${plan.popular ? 'ring-2 ring-orange-400/50' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 shadow-lg hover:shadow-orange-500/25'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Trusted by Industry Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what maintenance professionals say about our AI Predictive Maintenance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-orange-900/30 to-red-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prevent Equipment Failures Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join industry leaders who trust our AI Predictive Maintenance to keep their equipment running smoothly. 
              Start your free trial today.
            </p>
            
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-orange-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-orange-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-orange-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
                <Wrench className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}