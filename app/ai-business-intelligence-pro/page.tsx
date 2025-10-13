import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe,
  Database,
  PieChart,
  LineChart,
  Activity,
  Target,
  Brain,
  Sparkles,
  FileText,
  Settings,
  Eye,
  RefreshCw
} from 'lucide-react';

const AIBusinessIntelligencePro = () => {
  const features = [
    {
      title: "AI-Powered Data Analysis",
      description: "Advanced machine learning algorithms automatically analyze your data and provide actionable insights",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Automated pattern recognition", "Predictive analytics", "Anomaly detection", "Natural language queries"]
    },
    {
      title: "Real-Time Dashboards",
      description: "Create stunning, interactive dashboards that update in real-time with your business data",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Live data visualization", "Custom dashboard builder", "Mobile-responsive design", "Drill-down capabilities"]
    },
    {
      title: "Advanced Reporting Suite",
      description: "Generate comprehensive reports with automated scheduling and distribution to stakeholders",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Automated report generation", "Custom report templates", "PDF/Excel export", "Email distribution"]
    },
    {
      title: "Data Integration Hub",
      description: "Connect to 200+ data sources including CRM, ERP, databases, and cloud applications",
      icon: <Database className="w-6 h-6" />,
      benefits: ["One-click integrations", "Real-time data sync", "Data transformation", "API management"]
    },
    {
      title: "Collaborative Analytics",
      description: "Share insights and collaborate with team members through comments, annotations, and shared workspaces",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Team collaboration", "Comment system", "Shared workspaces", "Version control"]
    },
    {
      title: "Mobile Analytics App",
      description: "Access your analytics anywhere with our powerful mobile app for iOS and Android",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Native mobile apps", "Offline access", "Push notifications", "Touch-optimized interface"]
    }
  ];

  const capabilities = [
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using advanced machine learning models",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Sales forecasting", "Customer behavior prediction", "Risk assessment", "Market trend analysis"]
    },
    {
      title: "Data Visualization",
      description: "Create compelling visualizations with 50+ chart types and interactive elements",
      icon: <PieChart className="w-8 h-8" />,
      features: ["Interactive charts", "Custom visualizations", "3D graphics", "Animation effects"]
    },
    {
      title: "Natural Language Processing",
      description: "Ask questions in plain English and get instant answers from your data",
      icon: <Eye className="w-8 h-8" />,
      features: ["Voice queries", "Text analysis", "Sentiment analysis", "Auto-translation"]
    },
    {
      title: "Automated Insights",
      description: "Get AI-generated insights and recommendations without manual analysis",
      icon: <RefreshCw className="w-8 h-8" />,
      features: ["Smart alerts", "Anomaly detection", "Performance insights", "Recommendation engine"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small teams getting started with business intelligence",
      features: [
        "Up to 10 data sources",
        "5 custom dashboards",
        "Basic AI analytics",
        "Email support",
        "10GB data storage",
        "Standard integrations",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 50 data sources",
        "Unlimited dashboards",
        "Advanced AI analytics",
        "Priority support",
        "100GB data storage",
        "All integrations",
        "Custom reports",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "per month",
      description: "Complete solution for large organizations with complex data needs",
      features: [
        "Unlimited data sources",
        "Unlimited dashboards",
        "Premium AI analytics",
        "24/7 dedicated support",
        "Unlimited data storage",
        "White-label options",
        "Custom integrations",
        "Advanced security",
        "On-premise deployment",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "DataCorp Solutions",
      role: "VP of Analytics",
      content: "AI Business Intelligence Pro revolutionized our data analysis. The AI insights helped us identify new revenue opportunities worth $2M in the first quarter.",
      rating: 5,
      avatar: "JA"
    },
    {
      name: "Robert Kim",
      company: "GrowthTech Inc.",
      role: "Chief Data Officer",
      content: "The predictive analytics and real-time dashboards are incredible. We can now make data-driven decisions instantly and stay ahead of the competition.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Maria Santos",
      company: "AnalyticsFirst Ltd.",
      role: "Business Intelligence Director",
      content: "Best BI platform we've used. The team collaboration features and automated reporting save us 20+ hours every week.",
      rating: 5,
      avatar: "MS"
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "200+", label: "Data Sources", icon: <Database className="w-6 h-6" /> },
    { number: "50+", label: "Chart Types", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Business Intelligence Pro - Advanced Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI Business Intelligence Pro - the most advanced analytics platform. Real-time dashboards, predictive analytics, and AI insights starting at $299/month." />
        <meta name="keywords" content="AI business intelligence, data analytics, predictive analytics, real-time dashboards, data visualization, business insights, machine learning" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-business-intelligence-pro" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Business Intelligence Pro - Advanced Analytics Platform" />
        <meta property="og:description" content="Transform your business with AI-powered analytics, real-time dashboards, and predictive insights. Starting at $299/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-business-intelligence-pro" />
        <meta property="og:image" content="https://ziontechgroup.com/images/ai-business-intelligence-pro-og.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Business Intelligence Pro - Advanced Analytics Platform" />
        <meta name="twitter:description" content="Transform your business with AI-powered analytics, real-time dashboards, and predictive insights." />
        <meta name="twitter:image" content="https://ziontechgroup.com/images/ai-business-intelligence-pro-twitter.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Brain className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">#1 AI Analytics Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              AI Business Intelligence Pro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with the most advanced AI-powered analytics platform. 
            Get real-time insights, predictive analytics, and automated reporting that drives growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to unlock insights from your data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 text-center"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to transform raw data into actionable business insights.
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
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-blue-500/20' 
                    : 'border-white/20 hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Data Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what analytics professionals say about AI Business Intelligence Pro
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
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Analytics?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of businesses already using AI Business Intelligence Pro to make data-driven decisions. 
            Start your free trial today - no credit card required.
          </p>
          
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
              Schedule Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligencePro;