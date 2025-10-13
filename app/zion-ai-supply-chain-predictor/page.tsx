import { ArrowRight, CheckCircle, Star, Truck, Globe, TrendingUp, BarChart3, Users, Shield, Zap, Database, Eye, Download, Upload, Search, Filter, Bell, MessageSquare, Calendar, PieChart, LineChart, BarChart, Activity, AlertTriangle, CheckCircle2, XCircle, Info, ExternalLink, Mail, Phone, MapPin, Play, Download as DownloadIcon, Upload as UploadIcon, Settings, Lock, RefreshCw, Smartphone, Target, FileText, Code, Database as DatabaseIcon, Package, MapPin as MapPinIcon, Clock, DollarSign, AlertCircle, TrendingDown, Layers, Network } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiSupplyChainPredictor() {
  const features = [
    {
      title: "Demand Forecasting",
      description: "AI-powered demand prediction using machine learning algorithms and real-time market data analysis.",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["95% accuracy rate", "Multi-factor analysis", "Seasonal adjustments", "Real-time updates"]
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive supply chain risk analysis including geopolitical, weather, and supplier risks.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Risk scoring", "Early warning alerts", "Mitigation strategies", "Scenario planning"]
    },
    {
      title: "Inventory Optimization",
      description: "Intelligent inventory management with automated reorder points and safety stock calculations.",
      icon: <Package className="w-6 h-6" />,
      benefits: ["Optimal stock levels", "Cost reduction", "Stockout prevention", "Cash flow optimization"]
    },
    {
      title: "Supplier Performance Analytics",
      description: "Real-time supplier monitoring with performance metrics and predictive quality analysis.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Performance scoring", "Quality predictions", "Delivery tracking", "Supplier ranking"]
    },
    {
      title: "Logistics Optimization",
      description: "Route optimization and transportation cost reduction using advanced algorithms.",
      icon: <Truck className="w-6 h-6" />,
      benefits: ["Route optimization", "Cost reduction", "Delivery time prediction", "Carrier selection"]
    },
    {
      title: "Disruption Prediction",
      description: "Early warning system for supply chain disruptions with automated contingency planning.",
      icon: <AlertCircle className="w-6 h-6" />,
      benefits: ["Disruption alerts", "Impact assessment", "Alternative sourcing", "Recovery planning"]
    }
  ];

  const pricingPlans = [
    {
      name: "Supply Chain Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Basic demand forecasting",
        "Inventory optimization",
        "Up to 5 suppliers",
        "Email support",
        "Standard integrations",
        "Monthly reports"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Supply Chain Pro",
      price: "$999",
      period: "/month",
      description: "Advanced features for growing enterprises",
      features: [
        "Advanced AI forecasting",
        "Risk assessment",
        "Up to 50 suppliers",
        "Priority support",
        "Advanced integrations",
        "Real-time analytics",
        "Custom dashboards",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise Predictor",
      price: "$2,499",
      period: "/month",
      description: "Complete solution for large enterprises",
      features: [
        "Unlimited suppliers",
        "Custom AI models",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
        "Advanced analytics",
        "Multi-region support",
        "Custom implementation"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Supply Chain Costs by 25%",
      description: "AI optimization typically reduces overall supply chain costs through better forecasting and inventory management.",
      icon: <DollarSign className="w-8 h-8 text-green-500" />
    },
    {
      title: "Improve Forecast Accuracy by 40%",
      description: "Machine learning algorithms provide significantly more accurate demand predictions than traditional methods.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />
    },
    {
      title: "Reduce Stockouts by 60%",
      description: "Predictive analytics help maintain optimal inventory levels and prevent costly stockouts.",
      icon: <Package className="w-8 h-8 text-green-500" />
    },
    {
      title: "Minimize Supply Chain Risks",
      description: "Early warning systems and risk assessment help avoid disruptions and maintain business continuity.",
      icon: <Shield className="w-8 h-8 text-green-500" />
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      title: "Supply Chain Director",
      company: "Global Manufacturing Corp",
      content: "Zion AI Supply Chain Predictor has revolutionized our operations. We've reduced costs by 30% and improved forecast accuracy by 45%.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Maria Rodriguez",
      title: "Operations Manager",
      company: "RetailTech Solutions",
      content: "The risk assessment features are incredible. We avoided three major disruptions this year thanks to early warning alerts.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "James Wilson",
      title: "VP of Supply Chain",
      company: "TechFlow Industries",
      content: "This platform has transformed our supply chain visibility. The AI insights are spot-on and have saved us millions in costs.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Supply Chain Predictor - AI-Powered Supply Chain Optimization</title>
        <meta name="description" content="Optimize your supply chain with AI-powered demand forecasting, risk assessment, and inventory optimization. Reduce costs by 25% with Zion AI Supply Chain Predictor." />
        <meta name="keywords" content="AI supply chain, demand forecasting, inventory optimization, supply chain analytics, risk assessment, logistics optimization, supply chain AI" />
        <meta property="og:title" content="Zion AI Supply Chain Predictor - AI-Powered Supply Chain Optimization" />
        <meta property="og:description" content="Reduce supply chain costs by 25% with AI-powered demand forecasting, risk assessment, and inventory optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-supply-chain-predictor" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion AI Supply Chain Predictor - AI-Powered Optimization" />
        <meta name="twitter:description" content="Optimize your supply chain with AI-powered forecasting and risk assessment." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <Truck className="w-5 h-5 text-orange-400 mr-2" />
                <span className="text-orange-400 font-medium">AI-Powered Supply Chain Intelligence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion AI Supply Chain Predictor
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your supply chain with AI-powered demand forecasting, risk assessment, and inventory optimization. 
                Reduce costs by 25% and improve forecast accuracy by 40%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Supply Chain Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered tools to optimize every aspect of your supply chain operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-colors">
                  <div className="text-orange-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Supply Chain Performance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join industry leaders who have optimized their supply chains with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Supply Chain Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your supply chain complexity.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-orange-500/50 ring-2 ring-orange-500/20' : 'border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
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
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'border border-gray-600 hover:border-gray-500 text-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Supply Chain Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations are optimizing their supply chains with our AI-powered platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your supply chain with AI-powered intelligence. Start your free trial today 
              and see results in 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors"
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