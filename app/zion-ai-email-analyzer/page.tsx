import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Star,
  Zap,
  Clock,
  Target,
  Users,
  BarChart3,
  Eye,
  MessageSquare,
  Globe,
  Smartphone,
  Monitor,
  Laptop,
  Bell,
  Database,
  PieChart,
  Activity,
  Lock,
  FileText,
  TrendingUp
} from 'lucide-react';

const ZionAIEmailAnalyzerPage = () => {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect phishing, malware, and spam emails",
      icon: <Shield className="w-6 h-6" />,
      details: "99.9% accuracy in identifying malicious emails before they reach your inbox"
    },
    {
      title: "Sentiment Analysis",
      description: "Analyze email tone and sentiment to improve communication effectiveness",
      icon: <MessageSquare className="w-6 h-6" />,
      details: "Understand customer emotions and adjust your communication strategy accordingly"
    },
    {
      title: "Content Classification",
      description: "Automatically categorize emails by type, priority, and department",
      icon: <FileText className="w-6 h-6" />,
      details: "Smart routing ensures emails reach the right person at the right time"
    },
    {
      title: "Compliance Monitoring",
      description: "Ensure email compliance with GDPR, HIPAA, and other regulations",
      icon: <Lock className="w-6 h-6" />,
      details: "Automated compliance checks prevent costly violations and penalties"
    },
    {
      title: "Performance Analytics",
      description: "Track email performance metrics and engagement rates",
      icon: <BarChart3 className="w-6 h-6" />,
      details: "Comprehensive analytics help optimize your email communication strategy"
    },
    {
      title: "Real-time Alerts",
      description: "Get instant notifications for urgent emails and security threats",
      icon: <Bell className="w-6 h-6" />,
      details: "Never miss critical communications with intelligent alerting system"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 5,000 emails/month",
        "Basic threat detection",
        "Email categorization",
        "Email support",
        "Basic analytics",
        "1 user account"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses with email security needs",
      features: [
        "Up to 50,000 emails/month",
        "Advanced AI detection",
        "Sentiment analysis",
        "Priority support",
        "Advanced analytics",
        "5 user accounts",
        "Compliance monitoring",
        "API access",
        "Custom rules"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with complex email requirements",
      features: [
        "Unlimited emails",
        "Full AI suite",
        "Custom analytics",
        "24/7 phone support",
        "Real-time monitoring",
        "Unlimited users",
        "White-label options",
        "Custom integrations",
        "Dedicated support",
        "Advanced security"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "Email Security",
      description: "Protect against phishing, malware, and advanced email threats",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Customer Service",
      description: "Improve response times and customer satisfaction",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sales Teams",
      description: "Optimize email campaigns and lead qualification",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Compliance",
      description: "Ensure regulatory compliance and data protection",
      icon: <Lock className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      description: "Protect your organization from email-based cyber threats",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9% threat detection"
    },
    {
      title: "Improved Efficiency",
      description: "Automate email processing and reduce manual work",
      icon: <Zap className="w-6 h-6" />,
      stat: "80% time saved"
    },
    {
      title: "Better Insights",
      description: "Understand email patterns and optimize communication",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "50% better engagement"
    }
  ];

  const stats = [
    { number: "1M+", label: "Emails Analyzed Daily", icon: <Mail className="w-6 h-6" /> },
    { number: "10,000+", label: "Organizations Protected", icon: <Shield className="w-6 h-6" /> },
    { number: "99.9%", label: "Threat Detection Rate", icon: <AlertTriangle className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Email Analyzer - Advanced Email Security & Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Protect your organization with AI-powered email analysis. Detect threats, analyze sentiment, ensure compliance, and optimize email communication with advanced machine learning." />
        <meta name="keywords" content="email analyzer, email security, AI email analysis, phishing detection, email compliance, email intelligence, threat detection" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Email Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Email Analyzer
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Protect your organization with AI-powered email analysis. Detect threats, analyze sentiment, 
            ensure compliance, and optimize email communication with advanced machine learning technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Email Analyzer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology that protects and optimizes your email communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive email analysis powered by cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-sm text-cyan-400">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For Every Organization
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From small businesses to large enterprises, our solution scales with your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your email analysis needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 relative`}
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
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/contact"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  } hover:scale-105`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Email?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations who trust Zion AI Email Analyzer 
              to protect their email communication and improve efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIEmailAnalyzerPage;