import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Calculator, 
  ArrowRight, 
  Sparkles,
  CheckCircle,
  Star,
  Brain,
  Target,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Settings,
  Cloud,
  Zap,
  Heart,
  Receipt,
  Package,
  Code,
  Bot,
  Wifi,
  Cpu,
  Network,
  HardDrive,
  Phone,
  Laptop,
  Rocket,
  Mail,
  Database,
  Lock,
  Play,
  Award,
  Clock,
  FileText,
  Calendar,
  Users,
  Shield,
  Eye,
  AlertTriangle
} from "lucide-react";

export default function ZionAIFinancialAnalyticsPro() {
  const features = [
    "AI-Powered Financial Forecasting & Predictive Analytics",
    "Real-time Financial Dashboard & KPI Monitoring",
    "Automated Financial Reporting & Compliance",
    "Advanced Risk Assessment & Portfolio Optimization",
    "Cash Flow Analysis & Working Capital Management",
    "Investment Analysis & ROI Optimization",
    "Fraud Detection & Anomaly Analysis",
    "Tax Optimization & Compliance Automation",
    "Multi-currency Support & Exchange Rate Analysis",
    "Integration with 100+ Financial Systems",
    "Custom Financial Modeling & Scenario Planning",
    "Advanced Data Visualization & Interactive Reports"
  ];

  const benefits = [
    "40% improvement in financial decision-making",
    "60% reduction in manual reporting time",
    "25% increase in investment returns",
    "Complete financial visibility and control"
  ];

  const analyticsModules = [
    {
      name: "Financial Forecasting",
      description: "AI-powered financial forecasting and predictive analytics",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Revenue and expense forecasting",
        "Cash flow predictions",
        "Scenario planning and modeling",
        "Risk-adjusted projections"
      ]
    },
    {
      name: "Investment Analytics",
      description: "Advanced investment analysis and portfolio optimization",
      icon: <PieChart className="w-8 h-8" />,
      features: [
        "Portfolio performance analysis",
        "Risk-return optimization",
        "Asset allocation recommendations",
        "Market trend analysis"
      ]
    },
    {
      name: "Risk Management",
      description: "Comprehensive risk assessment and mitigation",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Credit risk analysis",
        "Market risk assessment",
        "Operational risk monitoring",
        "Regulatory compliance tracking"
      ]
    },
    {
      name: "Compliance & Reporting",
      description: "Automated compliance and financial reporting",
      icon: <FileText className="w-8 h-8" />,
      features: [
        "Automated financial statements",
        "Regulatory compliance monitoring",
        "Audit trail management",
        "Tax reporting automation"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to $1M in transactions",
        "Basic financial forecasting",
        "Standard reporting",
        "Email support",
        "Basic analytics",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to $10M in transactions",
        "Advanced AI forecasting",
        "Comprehensive analytics",
        "Priority support",
        "Advanced reporting",
        "5 user accounts",
        "Integration with 50+ systems",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Full AI suite",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Custom reporting",
        "Unlimited user accounts",
        "API access",
        "White-label solution",
        "Custom integrations",
        "Dedicated financial consultant"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Investment Firm",
      role: "CFO",
      content: "Zion AI Financial Analytics Pro has transformed our investment decision-making. We've increased our portfolio returns by 30% while reducing risk significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Manufacturing Corp",
      role: "Finance Director",
      content: "The AI-powered forecasting is incredibly accurate. We can now predict cash flow issues months in advance and take proactive measures.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Tech Startup",
      role: "Controller",
      content: "The automated reporting and compliance features have saved us countless hours. We can now focus on strategic financial planning instead of manual reporting.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Financial Analytics Pro - AI-Powered Financial Intelligence | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your financial operations with AI-powered forecasting, investment analytics, risk management, and compliance automation. Make data-driven financial decisions with Zion AI Financial Analytics Pro."
        />
        <meta
          name="keywords"
          content="AI financial analytics, financial forecasting, investment analysis, risk management, financial reporting, compliance automation, portfolio optimization, financial intelligence"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-financial-analytics-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 AI Financial Platform 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Financial Analytics Pro
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                Transform your financial operations with AI-powered forecasting, investment analytics, 
                risk management, and compliance automation. Make data-driven financial decisions with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-gray-300 text-xs md:text-sm">Better Decisions</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">25%</div>
                <div className="text-gray-300 text-xs md:text-sm">Higher Returns</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">60%</div>
                <div className="text-gray-300 text-xs md:text-sm">Time Saved</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300 text-xs md:text-sm">Compliance</div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Modules Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Comprehensive Financial Analytics Modules
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete financial intelligence suite with AI-powered insights across all key financial areas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsModules.map((module, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {module.name}
                      </h3>
                      <p className="text-gray-300">{module.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI-Powered Financial Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to optimize every aspect of your financial operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      <Brain className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {feature}
                    </h3>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Financial Analytics Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your financial needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Financial Leaders Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what financial professionals say about Zion AI Financial Analytics Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of organizations using Zion AI Financial Analytics Pro to make data-driven 
              financial decisions and optimize their financial performance. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}