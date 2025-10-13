import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  Zap, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Shield, 
  Target, 
  Brain, 
  Users, 
  CheckCircle,
  ArrowRight,
  Brain,
  Target,
  Globe,
  AlertCircle,
  Clock
} from 'lucide-react';

const AICustomerSentimentTrackerPage = () => {
  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "10M+", label: "Reviews Analyzed" },
    { number: "50+", label: "Languages Supported" },
    { number: "24/7", label: "Real-time Monitoring" }
  ];

  const benefits = [
    "Real-time sentiment analysis across all channels",
    "Automated alert system for negative sentiment spikes",
    "Comprehensive reporting and trend analysis",
    "Integration with popular CRM and support tools",
    "Customizable sentiment scoring and categorization",
    "Historical data analysis and trend prediction"
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Real-time Sentiment Analysis",
      description: "Advanced AI analyzes customer feedback, reviews, and interactions in real-time to provide instant sentiment insights."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Multi-channel Monitoring",
      description: "Track sentiment across all channels including social media, email, chat, reviews, and support tickets."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive analytics with sentiment trends, customer satisfaction scores, and actionable insights."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-400" />,
      title: "Proactive Alerts",
      description: "Get instant notifications when sentiment drops or negative feedback requires immediate attention."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automated Response Suggestions",
      description: "AI-powered suggestions for responding to negative feedback and improving customer satisfaction."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Team Collaboration",
      description: "Share insights across teams, assign tasks, and track resolution progress for better customer experience."
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "2.5s", label: "Response Time" },
    { number: "50+", label: "Languages" },
    { number: "24/7", label: "Monitoring" }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Increase customer satisfaction by 40%",
      description: "Our AI-powered sentiment analysis helps you understand and improve customer satisfaction levels."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Reduce response time by 60%",
      description: "Get instant insights and automated responses to customer feedback and concerns."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-yellow-400" />,
      title: "Identify issues before they escalate",
      description: "Proactive monitoring helps you catch and resolve issues before they become major problems."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Improve brand reputation",
      description: "Monitor and manage your brand reputation across all channels with real-time insights."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: "Make data-driven decisions",
      description: "Comprehensive analytics and reporting help you make informed business decisions."
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Scale customer support efficiently",
      description: "Handle more customer interactions with the same resources through intelligent automation."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5,000 mentions/month",
        "Basic sentiment analysis",
        "Email alerts",
        "Basic dashboard",
        "Email support",
        "3 team members"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25,000 mentions/month",
        "Advanced AI analysis",
        "Multi-channel monitoring",
        "Advanced analytics",
        "Priority support",
        "10 team members",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited mentions",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Dedicated support",
        "Unlimited team members",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI analytics platform with real-time insights and predictive modeling." />
        <meta name="keywords" content="AI analytics, data analysis, business intelligence, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"> <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"> </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Analytics Platform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your data into actionable insights with our advanced AI analytics platform. 
            Get real-time predictions, automated reporting, and intelligent recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Demo
              <Target className="w-5 h-5 ml-2" />
            </Link>
          </div></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analytics platform provides everything you need to make data-driven decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300">
                Get instant insights from your data with real-time processing and visualization
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Predictions</h3>
              <p className="text-gray-300">
                Leverage machine learning to predict trends and make proactive decisions
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Compliant</h3>
              <p className="text-gray-300">
                Enterprise-grade security with full compliance and data protection
              </p>
            </div>
          </div></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Analytics?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies using our AI analytics platform to make better decisions
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Free Trial
            <Zap className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
