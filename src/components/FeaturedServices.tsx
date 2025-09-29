import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Bot,
  BarChart3,
  TrendingUp,
  Clock,
  Users,
  Shield,
  Sparkles,
} from "lucide-react";

const FeaturedServices: React.FC = () => {
  const featuredServices = [
    {
      title: "AI Workflow Automation",
      description: "Transform business operations with intelligent process automation that learns and adapts to your workflows.",
      icon: Zap,
      features: ["Visual Process Designer", "Smart Triggers", "Real-time Analytics"],
      benefits: "Reduce manual tasks by 80%",
      pricing: "$99/month",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      route: "/ai-micro-saas",
      isNew: true,
    },
    {
      title: "AI Virtual Assistant",
      description: "24/7 intelligent customer support and business operations with natural language understanding.",
      icon: Bot,
      features: ["NLP Processing", "Multi-channel Support", "24/7 Availability"],
      benefits: "Reduce response time by 90%",
      pricing: "$79/month",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      route: "/ai-micro-saas",
      isNew: true,
    },
    {
      title: "AI Data Analytics",
      description: "Transform data into actionable insights with machine learning and predictive analytics.",
      icon: BarChart3,
      features: ["Predictive Analytics", "Real-time Dashboards", "Automated Insights"],
      benefits: "Improve decisions by 60%",
      pricing: "$149/month",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      route: "/ai-micro-saas",
      isNew: true,
    },
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Active Users" },
    { icon: TrendingUp, value: "300%", label: "Efficiency Gain" },
    { icon: Star, value: "4.9/5", label: "User Rating" },
    { icon: Clock, value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-20 bg-zion-slate-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/5 to-zion-purple/5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 border border-zion-cyan/30">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Featured AI-Powered Services
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Revolutionary{" "}
            <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
              Micro SAAS Solutions
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Experience the future of business automation with our cutting-edge AI-powered micro SAAS services. 
            Transform your operations and drive unprecedented growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <stat.icon className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-zion-slate-light text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${service.borderColor} hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden`}
            >
              {/* New Badge */}
              {service.isNew && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-zion-cyan to-zion-blue-light text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  NEW
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Benefit */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm font-semibold text-white">{service.benefits}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-zion-slate-light">Starting from</div>
                  <div className="text-2xl font-bold text-zion-cyan">{service.pricing}</div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={service.route}
                className="w-full bg-gradient-to-r from-zion-blue-light to-zion-purple-light text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group/btn"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Join thousands of companies already using our AI-powered solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-micro-saas"
                className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;