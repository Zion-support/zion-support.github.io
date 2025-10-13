import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Eye,
  AlertTriangle,
  TrendingUp,
  Users,
  Clock,
  Globe,
  Smartphone
} from 'lucide-react';

const ZionAIEmailAnalyzerPage = () => {
  const features = [
    {
      title: "AI-Powered Email Analysis",
      description: "Analyze email content, tone, and effectiveness with advanced AI",
      icon: <Mail className="w-6 h-6" />,
      details: "Natural language processing for email optimization"
    },
    {
      title: "Spam Detection & Prevention",
      description: "Identify and prevent spam emails before they reach your inbox",
      icon: <Shield className="w-6 h-6" />,
      details: "Machine learning models trained on millions of emails"
    },
    {
      title: "Sentiment Analysis",
      description: "Understand the emotional tone and intent of incoming emails",
      icon: <Eye className="w-6 h-6" />,
      details: "Real-time sentiment scoring and classification"
    },
    {
      title: "Priority Scoring",
      description: "Automatically prioritize emails based on importance and urgency",
      icon: <AlertTriangle className="w-6 h-6" />,
      details: "Smart algorithms to help you focus on what matters most"
    },
    {
      title: "Response Suggestions",
      description: "Get AI-generated response suggestions for common email types",
      icon: <Zap className="w-6 h-6" />,
      details: "Context-aware suggestions to improve email efficiency"
    },
    {
      title: "Email Analytics Dashboard",
      description: "Comprehensive analytics on email patterns and performance",
      icon: <BarChart3 className="w-6 h-6" />,
      details: "Detailed insights into email communication patterns"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals and freelancers",
      features: [
        "Up to 1,000 emails/month",
        "Basic spam detection",
        "Email priority scoring",
        "Mobile app access",
        "Email support",
        "Basic analytics"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for small teams and businesses",
      features: [
        "Up to 10,000 emails/month",
        "Advanced AI analysis",
        "Sentiment analysis",
        "Response suggestions",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Custom filters"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Custom AI models",
        "24/7 phone support",
        "Advanced security",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Automatically prioritize and organize your emails",
      icon: <Clock className="w-8 h-8" />,
      stat: "70% time saved",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Improve Security",
      description: "Block spam and malicious emails automatically",
      icon: <Shield className="w-8 h-8" />,
      stat: "99.9% spam blocked",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Better Communication",
      description: "Enhance email effectiveness with AI insights",
      icon: <TrendingUp className="w-8 h-8" />,
      stat: "40% better responses",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Reduce Stress",
      description: "Never miss important emails with smart prioritization",
      icon: <Users className="w-8 h-8" />,
      stat: "60% less email stress",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "Prioritize and respond to customer inquiries efficiently",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sales Teams",
      description: "Identify high-priority leads and opportunities",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Executive Assistants",
      description: "Manage executive email priorities and responses",
      icon: <Star className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Remote Teams",
      description: "Improve team communication and collaboration",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Email Analyzer - Smart Email Management & Analysis | Zion Tech Group</title>
        <meta name="description" content="Transform your email management with AI-powered analysis, spam detection, priority scoring, and response suggestions. Boost productivity and never miss important emails." />
        <meta name="keywords" content="AI email analyzer, email management, spam detection, email prioritization, sentiment analysis, email productivity, smart email" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Mail className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Email Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Email Analyzer
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your email management with AI-powered analysis, spam detection, priority scoring, 
            and response suggestions. Boost productivity and never miss important emails again.
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
              View Demo
              <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-gray-300 text-sm">Emails Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Spam Blocked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
              <div className="text-gray-300 text-sm">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.8/5</div>
              <div className="text-gray-300 text-sm">User Rating</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Email Analyzer?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Email Intelligence Features
          </h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perfect for Every Professional
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Email Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who trust Zion AI Email Analyzer to manage their 
              email communication efficiently and intelligently.
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
                Schedule Demo
                <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIEmailAnalyzerPage;