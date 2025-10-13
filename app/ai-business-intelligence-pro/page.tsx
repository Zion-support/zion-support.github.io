import { ArrowRight, BarChart3, TrendingUp, Users, Database, Shield, CheckCircle, Star, Mail, Smartphone, Globe, Zap, Target, Clock, DollarSign, Brain, Settings, Eye } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiBusinessIntelligencePro() {
  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that automatically identify patterns, trends, and insights in your data",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Pattern recognition", "Anomaly detection", "Predictive modeling", "Automated insights"]
    },
    {
      title: "Real-time Dashboards",
      description: "Live, interactive dashboards that update in real-time with your most critical business metrics",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["Live data updates", "Interactive visualizations", "Customizable views", "Mobile responsive"]
    },
    {
      title: "Natural Language Queries",
      description: "Ask questions about your data in plain English and get instant, accurate answers",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Voice queries", "Text queries", "Smart suggestions", "Context awareness"]
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with AI-driven insights and recommendations",
      icon: <Database className="w-6 h-6" />,
      benefits: ["Scheduled reports", "Custom templates", "Multi-format export", "Smart summaries"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes with advanced machine learning models",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Sales forecasting", "Demand prediction", "Risk assessment", "Scenario planning"]
    },
    {
      title: "Data Integration",
      description: "Connect and unify data from multiple sources for comprehensive business intelligence",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["100+ connectors", "Real-time sync", "Data transformation", "Quality monitoring"]
    }
  ];

  const industries = [
    {
      name: "Retail & E-commerce",
      description: "Customer analytics, inventory optimization, and sales forecasting",
      metrics: ["Customer segmentation", "Sales forecasting", "Inventory optimization", "Price analysis"],
      icon: "🛒"
    },
    {
      name: "Healthcare",
      description: "Patient analytics, operational efficiency, and clinical insights",
      metrics: ["Patient outcomes", "Resource utilization", "Clinical analytics", "Cost analysis"],
      icon: "🏥"
    },
    {
      name: "Financial Services",
      description: "Risk management, fraud detection, and customer analytics",
      metrics: ["Risk assessment", "Fraud detection", "Customer lifetime value", "Portfolio analysis"],
      icon: "💰"
    },
    {
      name: "Manufacturing",
      description: "Production optimization, quality control, and supply chain analytics",
      metrics: ["Production efficiency", "Quality metrics", "Supply chain optimization", "Predictive maintenance"],
      icon: "🏭"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Advanced BI for growing businesses with complex data needs",
      features: [
        "Up to 25 data sources",
        "Unlimited dashboards",
        "Advanced AI analytics",
        "Natural language queries",
        "Priority support",
        "Up to 10 users",
        "1-year data retention",
        "API access"
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "Complete BI solution for large organizations with extensive requirements",
      features: [
        "Unlimited data sources",
        "Unlimited dashboards",
        "Enterprise AI analytics",
        "Advanced NLP queries",
        "24/7 phone support",
        "Unlimited users",
        "Unlimited data retention",
        "Full API access",
        "White-label options",
        "Dedicated account manager"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Custom",
      price: "Contact",
      period: "Us",
      description: "Tailored solution for unique business requirements and compliance needs",
      features: [
        "Custom data sources",
        "Custom dashboards",
        "Custom AI models",
        "Custom integrations",
        "Dedicated support team",
        "Custom user limits",
        "Custom data retention",
        "Custom API development",
        "On-premises deployment",
        "Custom SLA"
      ],
      popular: false,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Retail Chain Corp.",
      role: "VP of Analytics",
      content: "Zion AI Business Intelligence Pro has revolutionized our decision-making process. The AI insights have helped us increase revenue by 25% and reduce costs by 15%.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "Robert Kim",
      company: "Healthcare Systems",
      role: "Chief Data Officer",
      content: "The natural language queries are incredible. Our executives can now get instant answers to complex questions without needing technical expertise.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Sarah Thompson",
      company: "Financial Services Inc.",
      role: "Head of Risk Management",
      content: "The predictive analytics capabilities have significantly improved our risk assessment accuracy. We can now identify potential issues before they become problems.",
      rating: 5,
      avatar: "ST"
    }
  ];

  const capabilities = [
    {
      title: "Data Visualization",
      description: "Create stunning, interactive visualizations that make complex data easy to understand",
      features: ["Interactive charts", "Custom dashboards", "Real-time updates", "Mobile optimization"]
    },
    {
      title: "Machine Learning",
      description: "Leverage advanced ML algorithms to uncover hidden patterns and generate predictions",
      features: ["Pattern recognition", "Anomaly detection", "Predictive modeling", "Model management"]
    },
    {
      title: "Data Governance",
      description: "Ensure data quality, security, and compliance with comprehensive governance tools",
      features: ["Data lineage", "Quality monitoring", "Access controls", "Audit trails"]
    },
    {
      title: "Collaboration",
      description: "Share insights and collaborate with your team through built-in sharing and commenting",
      features: ["Team workspaces", "Comment system", "Shared dashboards", "Notification alerts"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Business Intelligence Pro - Advanced Analytics Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your data into actionable insights with Zion AI Business Intelligence Pro. Advanced AI analytics, real-time dashboards, natural language queries, and predictive analytics. Start your free trial today."
        />
        <meta
          name="keywords"
          content="AI business intelligence, advanced analytics, predictive analytics, data visualization, machine learning, natural language queries, business intelligence platform, data analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Brain className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">AI-Powered Analytics</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion AI
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
                    {" "}Business Intelligence
                  </span>
                  <br />Pro
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your data into actionable insights with our advanced AI-powered business intelligence platform. 
                  Real-time dashboards, natural language queries, and predictive analytics to drive smarter decisions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Dashboard Preview</h3>
                    <p className="text-gray-300">Real-time insights powered by AI</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">Revenue Growth</span>
                        <span className="text-green-400 font-bold">+23.5%</span>
                      </div>
                      <div className="text-xs text-gray-300 mt-1">AI predicted trend</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">Customer Satisfaction</span>
                        <span className="text-blue-400 font-bold">94.2%</span>
                      </div>
                      <div className="text-xs text-gray-300 mt-1">Real-time monitoring</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">Risk Score</span>
                        <span className="text-purple-400 font-bold">Low</span>
                      </div>
                      <div className="text-xs text-gray-300 mt-1">AI assessment</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">Anomalies Detected</span>
                        <span className="text-orange-400 font-bold">2</span>
                      </div>
                      <div className="text-xs text-gray-300 mt-1">AI monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Industry Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored AI business intelligence solutions for every industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.metrics.map((metric, idx) => (
                      <div key={idx} className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-lg">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Advanced Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven capabilities to transform your business intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Core Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build a data-driven organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-blue-400 bg-blue-500/10 px-3 py-2 rounded-lg text-center">
                        {feature}
                      </div>
                    ))}
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Flexible Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business intelligence needs. All plans include 14-day free trials.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
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
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Trusted by Data Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what analytics professionals say about our AI business intelligence platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Start your free trial of Zion AI Business Intelligence Pro today and discover 
              the power of AI-driven insights for your business.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-blue-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-blue-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}