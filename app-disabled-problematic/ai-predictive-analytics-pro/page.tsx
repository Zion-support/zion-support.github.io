import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  Brain, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  Zap,
  Users,
  Database,
  PieChart,
  LineChart
} from 'lucide-react';

const AiPredictiveAnalyticsProPage: React.FC = () => {
  const features = [
    "Advanced Machine Learning Models",
    "Real-time Data Processing",
    "Predictive Forecasting",
    "Anomaly Detection",
    "Customer Behavior Analysis",
    "Sales Forecasting",
    "Risk Assessment",
    "Demand Planning",
    "Performance Optimization",
    "Custom Model Training"
  ];

  const analyticsModules = [
    {
      name: "Sales Forecasting",
      description: "Predict future sales with AI-powered forecasting models",
      icon: <TrendingUp className="w-8 h-8" />,
      accuracy: "95%",
      useCases: ["Revenue Prediction", "Inventory Planning", "Market Analysis", "Seasonal Trends"]
    },
    {
      name: "Customer Analytics",
      description: "Analyze customer behavior and predict future actions",
      icon: <Users className="w-8 h-8" />,
      accuracy: "92%",
      useCases: ["Churn Prediction", "Lifetime Value", "Segmentation", "Personalization"]
    },
    {
      name: "Financial Risk",
      description: "Assess and predict financial risks and opportunities",
      icon: <Target className="w-8 h-8" />,
      accuracy: "98%",
      useCases: ["Credit Risk", "Market Risk", "Fraud Detection", "Investment Analysis"]
    },
    {
      name: "Operational Intelligence",
      description: "Optimize operations with predictive maintenance and efficiency",
      icon: <Zap className="w-8 h-8" />,
      accuracy: "94%",
      useCases: ["Maintenance Scheduling", "Resource Optimization", "Quality Control", "Supply Chain"]
    },
    {
      name: "Marketing Analytics",
      description: "Predict campaign performance and customer response",
      icon: <BarChart3 className="w-8 h-8" />,
      accuracy: "89%",
      useCases: ["Campaign ROI", "Lead Scoring", "Conversion Prediction", "Ad Optimization"]
    },
    {
      name: "Healthcare Analytics",
      description: "Predict patient outcomes and optimize healthcare delivery",
      icon: <Brain className="w-8 h-8" />,
      accuracy: "96%",
      useCases: ["Patient Risk", "Treatment Outcomes", "Resource Planning", "Disease Prediction"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic Predictive Models",
        "Up to 10,000 records",
        "Email Support",
        "Standard Reports"
      ]
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Advanced AI Models",
        "Up to 100,000 records",
        "Priority Support",
        "Custom Dashboards",
        "API Access"
      ]
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full AI Suite",
        "Unlimited Records",
        "Dedicated Support",
        "Custom Models",
        "White-label Options"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "Data Science Director",
      company: "RetailMax Corp",
      content: "AI Predictive Analytics Pro increased our sales forecast accuracy by 40% and helped us optimize inventory management. The ROI was immediate.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "VP of Marketing",
      company: "TechStart Industries",
      content: "The customer analytics module helped us reduce churn by 35% and increase customer lifetime value by 28%. The insights are incredibly valuable.",
      rating: 5
    },
    {
      name: "David Johnson",
      role: "CFO",
      company: "Financial Services Group",
      content: "The financial risk assessment module saved us millions by identifying potential risks early. The accuracy is remarkable.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Analytics Pro - Advanced Data Intelligence | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered predictive analytics platform with machine learning models, forecasting, and business intelligence. Starting at $199/month." />
        <meta name="keywords" content="AI predictive analytics, machine learning, data science, forecasting, business intelligence, predictive modeling" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Predictive Intelligence
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI Predictive Analytics Pro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your data into actionable insights with advanced AI-powered 
                predictive analytics, machine learning, and intelligent forecasting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Demo
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                  <div className="text-gray-400 text-sm">Forecast Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-gray-400 text-sm">Better Decisions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">800+</div>
                  <div className="text-gray-400 text-sm">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">$10M+</div>
                  <div className="text-gray-400 text-sm">Value Generated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Advanced Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI algorithms analyze your data and provide accurate predictions 
                to help you make better business decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Modules Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Analytics Modules
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI modules designed for different business functions 
                with industry-leading accuracy rates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsModules.map((module, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{module.icon}</div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {module.name}
                    </h3>
                    <span className="text-cyan-400 text-sm font-medium">{module.accuracy} Accuracy</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <ul className="space-y-2">
                    {module.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Flexible Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your data analytics needs. 
                All plans include 24/7 support and regular updates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.name === 'Professional' 
                    ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/10 scale-105' 
                    : 'border-cyan-500/20'
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.name === 'Professional'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {tier.name === 'Professional' ? 'Get Started' : 'Choose Plan'}
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Client Success Stories
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Predict the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of organizations who trust AI Predictive Analytics Pro 
                to make data-driven decisions and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiPredictiveAnalyticsProPage;