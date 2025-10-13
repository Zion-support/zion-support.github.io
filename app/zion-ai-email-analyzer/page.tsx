import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Zap, 
  Award, 
  Clock, 
  Shield,
  Brain,
  Target,
  PieChart,
  Activity,
  Eye,
  MessageSquare,
  AlertTriangle,
  ThumbsUp,
  Globe,
  Smartphone,
  Monitor,
  Laptop,
  Phone,
  MapPin,
  Filter,
  Search,
  Send,
  Inbox,
  Archive,
  Trash2,
  Flag,
  Star as StarIcon,
  Reply,
  Forward
} from 'lucide-react';

const ZionAIEmailAnalyzerPage = () => {
  const features = [
    {
      title: "AI-Powered Email Analysis",
      description: "Analyze email content, sentiment, and engagement patterns using advanced AI algorithms",
      icon: <Brain className="w-6 h-6" />,
      details: [
        "Content sentiment analysis",
        "Engagement prediction",
        "Spam detection",
        "Priority scoring"
      ]
    },
    {
      title: "Smart Email Categorization",
      description: "Automatically organize emails by type, importance, and action required",
      icon: <Filter className="w-6 h-6" />,
      details: [
        "Auto-categorization",
        "Smart folders",
        "Priority tagging",
        "Action reminders"
      ]
    },
    {
      title: "Response Time Optimization",
      description: "Track and optimize email response times for better customer satisfaction",
      icon: <Clock className="w-6 h-6" />,
      details: [
        "Response time tracking",
        "SLA monitoring",
        "Performance analytics",
        "Automated alerts"
      ]
    },
    {
      title: "Email Security Analysis",
      description: "Detect phishing attempts, suspicious patterns, and security threats",
      icon: <Shield className="w-6 h-6" />,
      details: [
        "Phishing detection",
        "Malware scanning",
        "Suspicious link analysis",
        "Security scoring"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$15",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 1,000 emails/month",
        "Basic analysis",
        "Email support",
        "Standard reports",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 10,000 emails/month",
        "Advanced analytics",
        "Priority support",
        "Custom reports",
        "5 user accounts",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited emails",
        "Full AI capabilities",
        "24/7 support",
        "White-label options",
        "Unlimited users",
        "Custom integrations",
        "Dedicated support"
      ],
      popular: false
    }
  ];

  const analytics = [
    {
      title: "Email Performance Metrics",
      description: "Track open rates, click-through rates, and response times",
      icon: <BarChart3 className="w-8 h-8" />,
      metrics: ["Open rates", "Click rates", "Response times", "Engagement scores"]
    },
    {
      title: "Sentiment Analysis",
      description: "Understand the emotional tone of incoming and outgoing emails",
      icon: <Heart className="w-8 h-8" />,
      metrics: ["Positive sentiment", "Negative sentiment", "Neutral tone", "Emotional trends"]
    },
    {
      title: "Spam & Security Detection",
      description: "Identify and filter out spam, phishing, and malicious emails",
      icon: <Shield className="w-8 h-8" />,
      metrics: ["Spam detection", "Phishing alerts", "Security score", "Threat level"]
    },
    {
      title: "Productivity Insights",
      description: "Optimize email workflows and improve team productivity",
      icon: <TrendingUp className="w-8 h-8" />,
      metrics: ["Email volume", "Response efficiency", "Task completion", "Time saved"]
    }
  ];

  const integrations = [
    {
      name: "Gmail",
      description: "Seamless integration with Gmail accounts",
      icon: <Mail className="w-6 h-6" />
    },
    {
      name: "Outlook",
      description: "Connect with Microsoft Outlook",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      name: "Slack",
      description: "Get email insights in Slack channels",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      name: "Salesforce",
      description: "Sync email data with CRM",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Zendesk",
      description: "Integrate with support ticket system",
      icon: <Headphones className="w-6 h-6" />
    },
    {
      name: "Zapier",
      description: "Automate workflows with 1000+ apps",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "100,000+", label: "Emails Analyzed", icon: <Mail className="w-6 h-6" /> },
    { number: "1,500+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.5%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "40%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Zion AI Email Analyzer - Intelligent Email Analysis & Management | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Analyze and optimize your email communications with our AI-powered email analyzer. Track performance, detect spam, and improve productivity with intelligent insights." 
        />
        <meta 
          name="keywords" 
          content="email analyzer, email analytics, email management, spam detection, email productivity, AI email tools, email insights" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Email Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Email Analyzer
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your email management with our AI-powered analyzer. Get intelligent insights, 
            detect spam, optimize performance, and boost productivity with advanced email analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Email Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get deep insights into your email communications and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analytics.map((analytic, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {analytic.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {analytic.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {analytic.description}
                </p>
                <ul className="space-y-1">
                  {analytic.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center text-xs text-cyan-400">
                      <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to optimize your email communications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite email and productivity tools
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {integration.name}
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 hover:shadow-cyan-500/25' 
                    : 'border-white/20 hover:shadow-cyan-500/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Email Communications?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who have improved their email productivity and security with our AI-powered analyzer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Live Demo
              <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIEmailAnalyzerPage;