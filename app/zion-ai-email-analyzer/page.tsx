import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  BarChart3, 
  Brain, 
  Sparkles, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Eye,
  MessageSquare,
  Shield,
  Clock,
  Users
} from 'lucide-react';

const ZionAIEmailAnalyzerPage = () => {
  const features = [
    "AI-Powered Email Analysis",
    "Sentiment Analysis & Tone Detection",
    "Spam & Phishing Detection",
    "Email Performance Metrics",
    "Subject Line Optimization",
    "Content Quality Scoring",
    "A/B Testing Recommendations",
    "Deliverability Insights",
    "Open Rate Predictions",
    "Click-through Rate Analysis",
    "Bounce Rate Monitoring",
    "ROI Tracking & Reporting"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses and freelancers",
      features: [
        "Up to 5,000 emails/month",
        "Basic analytics",
        "Email templates",
        "Standard support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month", 
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 25,000 emails/month",
        "Advanced analytics",
        "AI recommendations",
        "Priority support",
        "Custom dashboards",
        "API integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with high-volume needs",
      features: [
        "Unlimited emails",
        "Full AI capabilities",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const analytics = [
    {
      title: "Open Rate Optimization",
      description: "AI analyzes subject lines and timing to maximize open rates",
      icon: <Eye className="w-6 h-6" />,
      metric: "35% improvement"
    },
    {
      title: "Content Quality",
      description: "Score and improve email content for better engagement",
      icon: <MessageSquare className="w-6 h-6" />,
      metric: "92% quality score"
    },
    {
      title: "Spam Prevention",
      description: "Advanced algorithms detect and prevent spam issues",
      icon: <Shield className="w-6 h-6" />,
      metric: "99.8% accuracy"
    },
    {
      title: "ROI Tracking",
      description: "Comprehensive tracking of email campaign performance",
      icon: <TrendingUp className="w-6 h-6" />,
      metric: "300% ROI average"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Email Analyzer - Email Marketing Intelligence | Zion Tech Group</title>
        <meta name="description" content="Optimize email campaigns with AI. Sentiment analysis, spam detection, performance metrics, and ROI tracking. Improve open rates and engagement." />
        <meta name="keywords" content="email analyzer, email marketing, AI email analysis, email optimization, spam detection, email analytics, email ROI" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Email Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Email Analyzer
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your email marketing with AI-powered analysis. Optimize open rates, 
            improve content quality, prevent spam issues, and maximize ROI with intelligent insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Analyze Your Emails
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Analytics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {analytics.map((analytic, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {analytic.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{analytic.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{analytic.description}</p>
              <div className="text-xl font-bold text-cyan-400">{analytic.metric}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Advanced Features
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              How It Works
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">1. Email Upload</h3>
              <p className="text-gray-300">Upload your email campaigns or connect your email marketing platform for automatic analysis</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">2. AI Analysis</h3>
              <p className="text-gray-300">Advanced AI analyzes content, subject lines, timing, and performance metrics</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">3. Get Insights</h3>
              <p className="text-gray-300">Receive actionable recommendations and detailed analytics to improve your email performance</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Simple Pricing
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of marketers who are already using Zion AI Email Analyzer 
              to improve their email performance and maximize ROI.
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
                View Demo
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