import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { BarChart3, Globe, CheckCircle, ArrowRight, Star, Phone, Mail, Play, Shield, Brain, Target, Zap } from "lucide-react";

const AiAnalyticsDashboardProPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Monitor your business metrics in real-time with live data streaming and instant updates.",
      benefits: ["Live data updates", "Instant insights", "Real-time alerts", "Performance monitoring"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Leverage machine learning algorithms to uncover hidden patterns and predict future trends.",
      benefits: ["Predictive analytics", "Pattern recognition", "Anomaly detection", "Smart recommendations"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your specific business needs and KPIs.",
      benefits: ["Drag-and-drop builder", "Custom widgets", "Role-based views", "Mobile optimization"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Data Source Integration",
      description: "Connect and analyze data from multiple sources including databases, APIs, and cloud services.",
      benefits: ["100+ integrations", "Data transformation", "ETL pipelines", "API management"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, access controls, and compliance management.",
      benefits: ["End-to-end encryption", "Role-based access", "Audit logs", "GDPR compliance"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Reporting",
      description: "Generate and distribute reports automatically with scheduled delivery and custom formats.",
      benefits: ["Scheduled reports", "Email delivery", "PDF/Excel export", "Custom templates"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses getting started with analytics",
      features: [
        "Up to 5 data sources",
        "10 custom dashboards",
        "Real-time analytics",
        "Basic AI insights",
        "Email support",
        "5GB data storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing companies with advanced analytics needs",
      features: [
        "Up to 25 data sources",
        "Unlimited dashboards",
        "Advanced AI insights",
        "Custom integrations",
        "Priority support",
        "50GB data storage",
        "API access",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for large organizations with complex requirements",
      features: [
        "Unlimited data sources",
        "Unlimited dashboards",
        "Full AI suite",
        "Custom development",
        "24/7 dedicated support",
        "Unlimited data storage",
        "Advanced security",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion AI Analytics Dashboard Pro has revolutionized how we analyze our data. The AI insights are incredibly accurate and have helped us make better business decisions.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Data Analyst, DataFlow Inc",
      content: "The real-time analytics and custom dashboards have made our reporting process so much more efficient. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations, GrowthCo",
      content: "The multi-data source integration and automated reporting features have saved us countless hours. The ROI has been incredible.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Analytics Dashboard Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard with real-time insights, predictive analytics, and custom reporting for enterprise businesses." />
        <meta name="keywords" content="AI analytics dashboard, business intelligence, data visualization, predictive analytics, real-time analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
              <BarChart3 className="w-4 h-4 mr-2" />
              AI Analytics Dashboard Pro
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion AI Analytics <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Dashboard Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your data into actionable insights with our advanced AI-powered analytics dashboard. 
              Monitor, analyze, and predict with enterprise-grade security and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/60 transition-all duration-300 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your data into actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-semibold text-yellow-400">Most Popular</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                
                <div className="text-4xl font-bold text-white mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">/{plan.period}</span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust our analytics platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Analytics?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven analytics.
          </p>
          <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default AiAnalyticsDashboardProPage;