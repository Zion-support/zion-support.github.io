import { ArrowRight, CheckCircle, Star, Leaf, Globe, TrendingDown, BarChart3, Users, Shield, Zap, Database, Eye, Download, Upload, Search, Filter, Bell, MessageSquare, Calendar, PieChart, LineChart, BarChart, Activity, AlertTriangle, CheckCircle2, XCircle, Info, ExternalLink, Mail, Phone, MapPin, Play, Download as DownloadIcon, Upload as UploadIcon, Settings, Lock, RefreshCw, Smartphone, Target, FileText, Code, Brain, Database as DatabaseIcon, TreePine, Recycle, Wind, Sun, Droplets, Thermometer, Gauge } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiClimateOptimizer() {
  const features = [
    {
      title: "Carbon Footprint Tracking",
      description: "Real-time monitoring of your organization's carbon emissions across all operations and supply chains.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Real-time tracking", "Scope 1, 2, 3 emissions", "Automated data collection", "Industry benchmarks"]
    },
    {
      title: "Sustainability Analytics",
      description: "AI-powered insights to identify optimization opportunities and track progress toward sustainability goals.",
      icon: <TrendingDown className="w-6 h-6" />,
      benefits: ["Predictive analytics", "Optimization recommendations", "Goal tracking", "ROI calculations"]
    },
    {
      title: "Green Energy Optimization",
      description: "Intelligent recommendations for renewable energy adoption and energy efficiency improvements.",
      icon: <Sun className="w-6 h-6" />,
      benefits: ["Renewable energy planning", "Energy efficiency tips", "Cost-benefit analysis", "Implementation guidance"]
    },
    {
      title: "Waste Reduction Intelligence",
      description: "AI-driven waste analysis and circular economy strategies to minimize environmental impact.",
      icon: <Recycle className="w-6 h-6" />,
      benefits: ["Waste analysis", "Circular economy strategies", "Reduction recommendations", "Compliance tracking"]
    },
    {
      title: "ESG Reporting Automation",
      description: "Automated generation of ESG reports and sustainability disclosures for stakeholders.",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Automated reporting", "Multiple frameworks", "Stakeholder dashboards", "Compliance assurance"]
    },
    {
      title: "Climate Risk Assessment",
      description: "Advanced climate risk modeling and adaptation strategies for long-term resilience.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Risk modeling", "Adaptation strategies", "Scenario planning", "Resilience scoring"]
    }
  ];

  const pricingPlans = [
    {
      name: "Eco Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses starting their sustainability journey",
      features: [
        "Basic carbon tracking",
        "Monthly sustainability reports",
        "Up to 5 users",
        "Email support",
        "Standard integrations",
        "Basic analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Climate Pro",
      price: "$499",
      period: "/month",
      description: "Advanced features for growing organizations",
      features: [
        "Advanced carbon analytics",
        "Real-time monitoring",
        "Up to 25 users",
        "Priority support",
        "Advanced integrations",
        "Custom reporting",
        "ESG compliance tools",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise Green",
      price: "$1,299",
      period: "/month",
      description: "Complete solution for large enterprises",
      features: [
        "Unlimited carbon tracking",
        "AI-powered optimization",
        "Unlimited users",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label reporting",
        "Advanced ESG analytics",
        "Climate risk assessment",
        "Custom implementation"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Carbon Footprint by 40%",
      description: "Our AI algorithms identify the most effective ways to reduce your environmental impact.",
      icon: <TrendingDown className="w-8 h-8 text-green-500" />
    },
    {
      title: "Save $50K+ Annually",
      description: "Energy efficiency recommendations typically save organizations significant operational costs.",
      icon: <DollarSign className="w-8 h-8 text-green-500" />
    },
    {
      title: "Achieve ESG Compliance",
      description: "Automated reporting ensures you meet all environmental, social, and governance requirements.",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />
    },
    {
      title: "Future-Proof Your Business",
      description: "Climate risk assessment helps you prepare for regulatory changes and market shifts.",
      icon: <Shield className="w-8 h-8 text-green-500" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Sustainability Director",
      company: "GreenTech Solutions",
      content: "Zion AI Climate Optimizer helped us reduce our carbon footprint by 45% in just 6 months while saving $80K in energy costs.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      title: "CEO",
      company: "EcoManufacturing Inc",
      content: "The AI-powered insights are incredible. We've achieved carbon neutrality and improved our ESG scores significantly.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      title: "Environmental Consultant",
      company: "ClimateFirst Consulting",
      content: "This platform is a game-changer for sustainability consulting. The automated reporting saves us hours every week.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Climate Optimizer - AI-Powered Sustainability & Carbon Management</title>
        <meta name="description" content="Transform your business with AI-powered climate optimization. Track carbon footprint, optimize sustainability, and achieve ESG compliance with Zion AI Climate Optimizer." />
        <meta name="keywords" content="AI climate optimization, carbon tracking, sustainability, ESG reporting, climate risk assessment, green energy, environmental management" />
        <meta property="og:title" content="Zion AI Climate Optimizer - AI-Powered Sustainability Platform" />
        <meta property="og:description" content="Reduce your carbon footprint by 40% with AI-powered climate optimization. Real-time tracking, sustainability analytics, and automated ESG reporting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-climate-optimizer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion AI Climate Optimizer - AI-Powered Sustainability" />
        <meta name="twitter:description" content="Transform your business with AI-powered climate optimization and sustainability management." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <Leaf className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">AI-Powered Climate Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion AI Climate Optimizer
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with AI-powered climate optimization. Track carbon footprint, 
                optimize sustainability, and achieve ESG compliance with intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
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
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
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
                Powerful Climate Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered tools to optimize your environmental impact and achieve sustainability goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-colors">
                  <div className="text-green-400 mb-4">
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
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                Transform Your Environmental Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of organizations already reducing their carbon footprint with AI-powered optimization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
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
                Choose Your Climate Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your sustainability journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-green-500/50 ring-2 ring-green-500/20' : 'border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-green-500 hover:bg-green-600 text-white'
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
                Trusted by Climate Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations are achieving their sustainability goals with our platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-semibold mr-4">
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
              Ready to Transform Your Climate Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the sustainability revolution with AI-powered climate optimization. 
              Start your free trial today and see results in 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
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