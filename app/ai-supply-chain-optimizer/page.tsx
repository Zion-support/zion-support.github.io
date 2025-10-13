import { ArrowRight, Globe, BarChart3, Zap, Target, CheckCircle, Star, Sparkles, Mail, Smartphone, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AISupplyChainOptimizer() {
>>>>>>> origin/main
  const features = [
    {
      title: "Demand Forecasting",
      description: "AI-powered demand prediction with 95% accuracy using machine learning and market analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["95% Forecast Accuracy", "Seasonal Pattern Recognition", "Market Trend Analysis", "Inventory Optimization"]
    },
    {
      title: "Route Optimization",
      description: "Intelligent logistics planning with real-time traffic, weather, and cost optimization",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["30% Cost Reduction", "Faster Delivery Times", "Fuel Efficiency", "Carbon Footprint Reduction"]
    },
    {
      title: "Supplier Management",
      description: "Automated supplier evaluation, risk assessment, and performance monitoring",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Risk Mitigation", "Performance Tracking", "Cost Analysis", "Quality Control"]
    },
    {
      title: "Inventory Intelligence",
      description: "Smart inventory management with automated reordering and waste reduction",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["25% Inventory Reduction", "Zero Stockouts", "Waste Elimination", "Cash Flow Optimization"]
    }
  ];

  const industries = [
    {
      title: "Manufacturing",
      description: "Optimize production schedules, raw material procurement, and distribution networks",
      impact: "40% cost reduction, 50% faster delivery"
    },
    {
      title: "Retail & E-commerce",
      description: "Streamline inventory management, last-mile delivery, and customer fulfillment",
      impact: "35% inventory reduction, 60% faster fulfillment"
    },
    {
      title: "Food & Beverage",
      description: "Manage perishable goods, cold chain logistics, and demand fluctuations",
      impact: "45% waste reduction, 30% cost savings"
    },
    {
      title: "Healthcare & Pharma",
      description: "Ensure critical supply availability, compliance, and temperature-controlled logistics",
      impact: "99.9% availability, 100% compliance"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$279/month",
      description: "Perfect for small to medium businesses",
      features: ["Up to 100 SKUs", "Basic forecasting", "Route optimization", "Email support"],
      popular: false
    },
    {
      plan: "Professional",
      price: "$559/month",
      description: "Ideal for growing enterprises",
      features: ["Up to 1,000 SKUs", "Advanced analytics", "Supplier management", "API integration", "Priority support"],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom Pricing",
      description: "Comprehensive solution for large organizations",
      features: ["Unlimited SKUs", "Full AI suite", "Custom integrations", "Dedicated support", "Training & consultation"],
>>>>>>> origin/main
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "30%",
      label: "Cost Reduction",
      description: "Average cost savings across all supply chain operations"
    },
    {
      metric: "50%",
      label: "Faster Delivery",
      description: "Improvement in delivery times through optimized routing"
    },
    {
      metric: "95%",
      label: "Forecast Accuracy",
      description: "AI-powered demand prediction accuracy rate"
    },
    {
      metric: "25%",
      label: "Inventory Reduction",
      description: "Decrease in excess inventory while maintaining service levels"
>>>>>>> origin/main
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group | Intelligent Logistics Solutions</title>
        <meta
          name="description"
          content="Revolutionary AI-powered supply chain optimization with demand forecasting, route planning, and inventory management. Reduce costs by 30% and improve efficiency by 50%."
        />
        <meta
          name="keywords"
          content="AI supply chain, logistics optimization, demand forecasting, route optimization, inventory management, supplier management, supply chain AI"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimizer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-500/20 to-gray-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-slate-400 mr-2" />
              <span className="text-slate-400 text-sm font-medium">30% Cost Reduction Guaranteed</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Supply Chain
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 animate-pulse">
                {" "}Optimizer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your supply chain with AI-powered optimization. Intelligent demand forecasting, 
              route planning, and inventory management that reduces costs and improves efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-slate-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Benefits Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-slate-500/20 to-gray-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                  <div className="text-gray-300 text-sm font-medium mb-1">{benefit.label}</div>
                  <div className="text-gray-400 text-xs">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                AI-Powered Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI supply chain optimizer combines machine learning, predictive analytics, and real-time optimization 
                to deliver unprecedented efficiency and cost savings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/10 relative overflow-hidden"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-slate-500 to-gray-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-slate-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored supply chain optimization solutions for different industries and business models.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/10 relative overflow-hidden"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-slate-300 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="text-slate-400 text-sm font-medium">
                    {industry.impact}
                  </div>
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
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your organization's size and supply chain complexity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/10 relative overflow-hidden ${
                    plan.popular 
                      ? 'border-slate-500/50 bg-gradient-to-br from-slate-500/10 to-gray-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-slate-400 to-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.plan}</h3>
                    <div className="text-3xl font-bold text-slate-400 mb-2">{plan.price}</div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                        plan.popular
                          ? 'bg-gradient-to-r from-slate-500 to-gray-600 text-white hover:from-slate-600 hover:to-gray-700 shadow-lg hover:shadow-slate-500/25'
                          : 'border border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900'
                      }`}
>>>>>>> origin/main
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/30 to-gray-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies using our AI supply chain optimizer to reduce costs, improve efficiency, 
              and gain competitive advantage. Start your transformation today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-slate-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-slate-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-slate-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-slate-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
>>>>>>> origin/main
    </>
  );
}