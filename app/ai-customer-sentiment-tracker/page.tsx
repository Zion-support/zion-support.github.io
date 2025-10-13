import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Target,
  Smartphone,
  Globe,
  Database,
  FileText,
  AlertTriangle,
  Send,
  Filter,
  Search,
  Download,
  Settings,
  Eye,
  Lock,
  Cloud,
  Cpu,
  Network,
  Award,
  Sparkles,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Activity,
  PieChart,
  LineChart,
  Calendar,
  RefreshCw,
  Bell,
  Shield,
  Headphones
} from 'lucide-react';

const AICustomerSentimentTrackerPage = () => {
  const features = [
    {
      title: "Real-time Sentiment Analysis",
      description: "Advanced AI analyzes customer communications across all channels in real-time with 98% accuracy",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-channel Monitoring",
      description: "Track sentiment across email, social media, reviews, chat, and phone calls from one dashboard",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Insights",
      description: "AI predicts customer churn risk and identifies opportunities for proactive engagement",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Alerts",
      description: "Get instant notifications when sentiment drops or customer satisfaction issues arise",
      icon: <Bell className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Team Performance Analytics",
      description: "Track individual and team performance in customer interactions and satisfaction scores",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards with key metrics and insights for different roles and departments",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small teams starting with sentiment tracking",
      features: [
        "Up to 5,000 interactions/month",
        "Basic sentiment analysis",
        "Email & social media monitoring",
        "Real-time alerts",
        "Basic analytics dashboard",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$249",
      period: "per month",
      description: "Ideal for growing businesses with comprehensive sentiment needs",
      features: [
        "Up to 25,000 interactions/month",
        "Advanced AI analysis",
        "All channel monitoring",
        "Predictive insights",
        "Team performance tracking",
        "Custom dashboards",
        "Priority support",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "per month",
      description: "Complete solution for large organizations with complex customer bases",
      features: [
        "Unlimited interactions",
        "Full AI suite capabilities",
        "Custom model training",
        "Advanced analytics",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rachel Green",
      company: "Customer Success Co.",
      role: "VP of Customer Experience",
      content: "The AI Sentiment Tracker has transformed how we understand our customers. We've improved satisfaction scores by 35% and reduced churn by 20%.",
      rating: 5,
      avatar: "RG"
    },
    {
      name: "Mark Stevens",
      company: "Tech Solutions Ltd.",
      role: "Customer Support Manager",
      content: "The predictive insights help us identify at-risk customers before they churn. It's been invaluable for our retention efforts.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Jennifer Lee",
      company: "E-commerce Giant",
      role: "Head of Customer Relations",
      content: "The multi-channel monitoring gives us a complete picture of customer sentiment. We can now respond to issues proactively.",
      rating: 5,
      avatar: "JL"
    }
  ];

  const stats = [
    { number: "98%", label: "Analysis Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "35%", label: "Satisfaction Improvement", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "20%", label: "Churn Reduction", icon: <Heart className="w-6 h-6" /> },
    { number: "3,200+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Improve Customer Satisfaction",
      description: "Identify and address customer issues before they escalate",
      icon: <Smile className="w-6 h-6" />,
      color: "text-green-400"
    },
    {
      title: "Reduce Customer Churn",
      description: "Predict and prevent customer churn with AI insights",
      icon: <Heart className="w-6 h-6" />,
      color: "text-red-400"
    },
    {
      title: "Boost Team Performance",
      description: "Track and improve individual and team customer interactions",
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      title: "Make Data-Driven Decisions",
      description: "Use real-time sentiment data to guide business decisions",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-purple-400"
    }
  ];

  const channels = [
    { name: "Email", icon: <MessageSquare className="w-6 h-6" />, color: "text-blue-400" },
    { name: "Social Media", icon: <Globe className="w-6 h-6" />, color: "text-cyan-400" },
    { name: "Reviews", icon: <Star className="w-6 h-6" />, color: "text-yellow-400" },
    { name: "Live Chat", icon: <MessageSquare className="w-6 h-6" />, color: "text-green-400" },
    { name: "Phone Calls", icon: <Headphones className="w-6 h-6" />, color: "text-purple-400" },
    { name: "Surveys", icon: <FileText className="w-6 h-6" />, color: "text-orange-400" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Sentiment Tracker - Zion Tech Group | Real-time Sentiment Analysis</title>
        <meta
          name="description"
          content="Track customer sentiment in real-time across all channels with AI-powered analysis. Improve satisfaction, reduce churn, and boost team performance with our intelligent sentiment platform."
        />
        <meta
          name="keywords"
          content="customer sentiment analysis, sentiment tracking, customer satisfaction, churn prediction, customer experience, AI sentiment, customer analytics, sentiment monitoring"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Customer Sentiment Tracker
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Track customer sentiment in real-time across all channels with AI-powered analysis. 
              Improve satisfaction, reduce churn, and boost team performance with our intelligent 
              sentiment monitoring platform.
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
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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

        {/* Channels Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Monitor All Customer Touchpoints
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Track sentiment across every customer interaction channel
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {channels.map((channel, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 ${channel.color}`}>
                    {channel.icon}
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                    {channel.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Sentiment Tracker?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your customer experience with proven benefits and measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className={benefit.color}>
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Leverage cutting-edge artificial intelligence to understand and improve customer sentiment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about AI Customer Sentiment Tracker
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
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Track Customer Sentiment?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using AI Customer Sentiment Tracker to improve customer experience.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
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
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerSentimentTrackerPage;