import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  Users, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Globe,
  Smartphone,
  Monitor,
  Award,
  FileText,
  Send,
  Filter,
  Search,
  Settings,
  Bell,
  Lock,
  Cloud,
  Database,
  Cpu,
  Network,
  Smartphone as Phone,
  Laptop,
  Headphones,
  CheckCircle as Check,
  Star as StarIcon,
  Award as AwardIcon,
  Rocket,
  Sparkles as SparklesIcon,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  Smile,
  Frown,
  Meh
} from 'lucide-react';

export default function AICustomerSentimentTracker() {
  const features = [
    {
      title: "Real-time Sentiment Analysis",
      description: "Advanced AI algorithms analyze customer feedback, reviews, and interactions in real-time across all channels",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Channel Monitoring",
      description: "Track sentiment across social media, email, chat, reviews, and support tickets with unified analytics",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Emotion Detection",
      description: "Identify specific emotions like joy, anger, frustration, and satisfaction with 95% accuracy",
      icon: <Heart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Trend Analysis",
      description: "Track sentiment trends over time and identify patterns that impact customer satisfaction",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Alert System",
      description: "Get instant notifications when sentiment drops below thresholds or negative feedback spikes",
      icon: <Bell className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Actionable Insights",
      description: "Receive specific recommendations to improve customer experience based on sentiment data",
      icon: <Target className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5,000 mentions/month",
        "Basic sentiment analysis",
        "3 social media channels",
        "Email support",
        "Basic dashboard",
        "Weekly reports"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 25,000 mentions/month",
        "Advanced sentiment analysis",
        "Unlimited channels",
        "Real-time alerts",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom dashboards"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited mentions",
        "AI-powered insights",
        "Custom integrations",
        "White-label options",
        "Advanced reporting",
        "24/7 support",
        "Dedicated account manager",
        "Custom training"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Retail Solutions Inc.",
      role: "Customer Experience Director",
      content: "The sentiment tracker has been a game-changer for our customer service. We can now proactively address issues before they escalate.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Kim",
      company: "TechStart Ventures",
      role: "Founder & CEO",
      content: "Real-time sentiment monitoring helped us identify a product issue early and fix it before it affected our reputation. Incredible tool!",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "E-commerce Platform",
      role: "VP of Marketing",
      content: "The emotion detection and trend analysis features provide insights we never had before. Our customer satisfaction has improved by 35%.",
      rating: 5,
      avatar: "LT"
    }
  ];

  const stats = [
    { number: "15,000+", label: "Companies Using", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "35%", label: "Satisfaction Improvement", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "2B+", label: "Mentions Analyzed", icon: <MessageSquare className="w-6 h-6" /> }
  ];

  const emotionIcons = [
    { emotion: "Joy", icon: <Smile className="w-6 h-6 text-green-400" />, percentage: 68 },
    { emotion: "Satisfaction", icon: <ThumbsUp className="w-6 h-6 text-blue-400" />, percentage: 72 },
    { emotion: "Neutral", icon: <Meh className="w-6 h-6 text-yellow-400" />, percentage: 18 },
    { emotion: "Frustration", icon: <Frown className="w-6 h-6 text-orange-400" />, percentage: 8 },
    { emotion: "Anger", icon: <AlertTriangle className="w-6 h-6 text-red-400" />, percentage: 2 }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Sentiment Tracker - Real-time Sentiment Analysis | Zion Tech Group</title>
        <meta
          name="description"
          content="Monitor customer sentiment in real-time with our AI-powered sentiment tracker. Analyze emotions, track trends, and improve customer experience across all channels."
        />
        <meta
          name="keywords"
          content="customer sentiment analysis, sentiment tracking, emotion detection, customer experience, social media monitoring, feedback analysis, AI sentiment"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-sentiment-tracker" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Heart className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Sentiment Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Customer Sentiment Tracker
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Monitor customer sentiment in real-time across all channels. Understand emotions, track trends, 
              and take proactive action to improve customer experience with advanced AI analysis.
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
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emotion Analysis Demo */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Real-time Emotion Analysis
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI analyzes customer emotions across all touchpoints with incredible accuracy
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {emotionIcons.map((emotion, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      {emotion.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{emotion.emotion}</h3>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{emotion.percentage}%</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${emotion.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Sentiment Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive sentiment analysis tools to understand and improve customer experience
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business size and monitoring needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    plan.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
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
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
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
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Customer Experience Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how companies are transforming their customer experience with sentiment tracking
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Understanding Your Customers Better
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies using AI to improve customer experience and satisfaction.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
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
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}