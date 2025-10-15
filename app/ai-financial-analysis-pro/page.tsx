import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  Clock,
  Shield,
  Globe,
  Award,
  Activity,
  FileText,
  AlertCircle,
  PieChart,
  Database,
  Cloud,
  Smartphone,
  Settings,
  MessageSquare,
  Target,
  Users,
  Calendar,
  Briefcase,
  GraduationCap,
  Calculator,
  LineChart
} from 'lucide-react';

const AiFinancialAnalysisProPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Forecasting",
      description: "Advanced machine learning models predict financial trends, cash flow, and market movements with 95% accuracy.",
      benefits: ["95% forecast accuracy", "Real-time predictions", "Risk assessment", "Market trend analysis"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Automated Financial Reporting",
      description: "Intelligent financial report generation with automated data analysis, insights, and compliance reporting.",
      benefits: ["Automated report generation", "Real-time insights", "Compliance automation", "Custom dashboards"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Investment Analysis",
      description: "AI-driven investment analysis with portfolio optimization, risk assessment, and performance tracking.",
      benefits: ["Portfolio optimization", "Risk assessment", "Performance tracking", "Investment recommendations"]
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Budget Optimization",
      description: "Intelligent budget planning and optimization with cost analysis, resource allocation, and spending predictions.",
      benefits: ["Cost optimization", "Resource allocation", "Spending predictions", "Budget planning"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Detection",
      description: "Advanced AI algorithms detect fraudulent transactions, anomalies, and suspicious activities in real-time.",
      benefits: ["Real-time fraud detection", "Anomaly detection", "Risk mitigation", "Compliance monitoring"]
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Market Analysis",
      description: "Comprehensive market analysis with sentiment analysis, competitor tracking, and economic indicators monitoring.",
      benefits: ["Market sentiment analysis", "Competitor tracking", "Economic indicators", "Trend analysis"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to $1M in transactions",
        "Basic AI forecasting",
        "Standard financial reports",
        "Email support",
        "5GB data storage",
        "Basic integrations",
        "Monthly insights"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "per month",
      description: "Ideal for growing businesses with complex financial needs",
      features: [
        "Up to $10M in transactions",
        "Advanced AI features",
        "Comprehensive reporting",
        "Priority support",
        "50GB data storage",
        "Advanced integrations",
        "Real-time insights",
        "Custom dashboards",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "per month",
      description: "For large organizations with enterprise-level requirements",
      features: [
        "Unlimited transactions",
        "Full AI suite",
        "Custom AI models",
        "Advanced analytics",
        "White-label options",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited storage",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "CFO",
      company: "TechCorp Solutions",
      content: "AI Financial Analysis Pro has transformed our financial planning. The forecasting accuracy is incredible and has helped us make better investment decisions.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Financial Director",
      company: "GrowthTech Inc",
      content: "The automated reporting feature saves us hours every month. The AI insights have helped us identify cost-saving opportunities worth millions.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Investment Manager",
      company: "Capital Partners",
      content: "The investment analysis tools are game-changing. We've improved our portfolio performance by 25% since implementing this platform.",
      rating: 5
    }
  ];

  const stats = [
    { number: "95%", label: "Forecast Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "25%", label: "Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "60%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> },
    { number: "99.9%", label: "Fraud Detection", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Analysis Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered financial analysis platform with intelligent forecasting, automated reporting, and investment optimization." />
        <meta name="keywords" content="AI financial analysis, financial forecasting, investment analysis, automated reporting, fraud detection, budget optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                #1 AI Financial Analysis Platform
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Financial Analysis
                </span>
                <br />
                <span className="text-white">Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your financial operations with AI-powered intelligence. Optimize investments, 
                predict market trends, and automate financial analysis with cutting-edge artificial intelligence.
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">{stat.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Harness the power of AI to optimize every aspect of your financial operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Simple Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the perfect plan for your financial analysis needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/10' 
                      : 'border-cyan-500/20 hover:border-cyan-400/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Join hundreds of successful organizations using AI Financial Analysis Pro
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
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
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Financial Analysis?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven financial analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiFinancialAnalysisProPage;