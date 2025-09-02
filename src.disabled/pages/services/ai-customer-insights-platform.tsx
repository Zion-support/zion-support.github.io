import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  DollarSign,
  ExternalLink,
  Play,
  Target,
  PieChart,
  Activity,
  Eye,
  Headphones,
  Mail
} from 'lucide-react';

export default function AICustomerInsightsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Sentiment Analysis",
      description: "Real-time analysis of customer feedback across all channels with 95% accuracy using advanced NLP models."
    },
    {
      icon: BarChart3,
      title: "Predictive Customer Analytics",
      description: "Forecast customer behavior, churn risk, and lifetime value with machine learning algorithms."
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description: "Visualize complete customer journeys with AI-identified pain points and optimization opportunities."
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Feedback Aggregation",
      description: "Unified view of customer feedback from email, chat, social media, reviews, and surveys."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Insights Dashboard",
      description: "Live dashboard with customizable KPIs, alerts, and automated reporting for stakeholders."
    },
    {
      icon: Shield,
      title: "Privacy-First Data Processing",
      description: "GDPR/CCPA compliant data processing with end-to-end encryption and secure data handling."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 customer interactions/month",
        "Basic sentiment analysis",
        "Email & chat feedback integration",
        "Standard dashboard",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 customer interactions/month",
        "Advanced AI analytics",
        "Multi-channel integration",
        "Custom dashboards",
        "Priority support",
        "Advanced reporting & insights",
        "API access",
        "Team collaboration tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited customer interactions",
        "Custom AI model training",
        "All integrations included",
        "White-label solution",
        "24/7 dedicated support",
        "Custom reporting & analytics",
        "Advanced API & webhooks",
        "Multi-tenant architecture",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Increase Customer Satisfaction",
      description: "Improve CSAT scores by up to 40% with actionable insights and proactive issue resolution."
    },
    {
      icon: TrendingUp,
      title: "Reduce Churn Rate",
      description: "Identify at-risk customers early and implement retention strategies to reduce churn by 25%."
    },
    {
      icon: DollarSign,
      title: "Boost Revenue",
      description: "Increase customer lifetime value by 30% through personalized experiences and upselling opportunities."
    },
    {
      icon: Activity,
      title: "Operational Efficiency",
      description: "Automate 80% of customer feedback analysis, saving 20+ hours per week for your team."
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      challenge: "Understanding customer preferences and improving product recommendations",
      solution: "AI analyzes purchase patterns, reviews, and browsing behavior to provide personalized recommendations",
      result: "35% increase in conversion rates"
    },
    {
      industry: "SaaS",
      challenge: "Reducing customer churn and improving product adoption",
      solution: "Predictive analytics identify users at risk of churning and suggest targeted retention strategies",
      result: "28% reduction in monthly churn rate"
    },
    {
      industry: "Healthcare",
      challenge: "Improving patient satisfaction and care quality",
      solution: "Sentiment analysis of patient feedback helps identify areas for service improvement",
      result: "42% improvement in patient satisfaction scores"
    },
    {
      industry: "Financial Services",
      challenge: "Enhancing customer experience and compliance monitoring",
      solution: "Real-time monitoring of customer interactions for compliance and service quality",
      result: "50% faster issue resolution"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Insights Platform - Zion Tech Group</title>
        <meta name="description" content="Transform customer feedback into actionable insights with our AI-powered platform. Real-time sentiment analysis, predictive analytics, and customer journey mapping. Starting at $299/month." />
        <meta name="keywords" content="AI customer insights, sentiment analysis, customer analytics, feedback management, customer experience, predictive analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-customer-insights-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI Customer Insights Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Customer
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Insights Platform</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform customer feedback into actionable insights with our AI-powered platform. 
                Real-time sentiment analysis, predictive analytics, and customer journey mapping to drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI-Driven Features
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our platform combines advanced AI with intuitive design to deliver 
                comprehensive customer insights that drive business decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                See real results with our AI-powered customer insights platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Use Cases
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                See how different industries leverage our AI customer insights platform
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-purple-400 mb-2">Challenge:</h4>
                    <p className="text-slate-300 text-sm">{useCase.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Solution:</h4>
                    <p className="text-slate-300 text-sm">{useCase.solution}</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-green-400 mb-1">Result:</h4>
                    <p className="text-green-300 text-sm font-semibold">{useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Insights?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of companies already using our AI platform to understand their customers better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-slate-400">
              <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}