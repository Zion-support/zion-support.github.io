import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  BarChart3, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  Target, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Eye,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  Award,
  Bell,
  Calendar,
  Settings,
  PieChart,
  Activity,
  Send,
  Inbox,
  Archive,
  Trash2,
  Filter,
  Search,
  AlertTriangle,
  CheckCircle2,
  Smile,
  Frown,
  Meh
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAICustomerSentimentTrackerPage = () => {
  const features = [
    {
      title: "Real-Time Sentiment Analysis",
      description: "Monitor customer sentiment across all channels in real-time using advanced NLP",
      icon: <Heart className="w-6 h-6" />,
      stats: "Real-time insights"
    },
    {
      title: "Multi-Channel Monitoring",
      description: "Track sentiment across social media, reviews, support tickets, and surveys",
      icon: <Globe className="w-6 h-6" />,
      stats: "15+ channels"
    },
    {
      title: "Emotion Detection",
      description: "Identify specific emotions like joy, anger, frustration, and satisfaction",
      icon: <Smile className="w-6 h-6" />,
      stats: "8 emotion types"
    },
    {
      title: "Trend Analysis",
      description: "Track sentiment trends over time and identify patterns",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "Historical tracking"
    },
    {
      title: "Alert System",
      description: "Get instant alerts when sentiment drops below thresholds",
      icon: <Bell className="w-6 h-6" />,
      stats: "Instant notifications"
    },
    {
      title: "Actionable Insights",
      description: "Get specific recommendations to improve customer sentiment",
      icon: <Target className="w-6 h-6" />,
      stats: "AI recommendations"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses monitoring customer sentiment",
      features: [
        "Up to 5,000 mentions/month",
        "Basic sentiment analysis",
        "3 channels",
        "Email support",
        "Basic reports",
        "30-day data retention"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses with active customer bases",
      features: [
        "Up to 50,000 mentions/month",
        "Advanced sentiment analysis",
        "10 channels",
        "Priority support",
        "Advanced reports",
        "1-year data retention",
        "API access",
        "Custom alerts"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations with high-volume monitoring needs",
      features: [
        "Unlimited mentions",
        "Custom AI models",
        "All channels",
        "24/7 phone support",
        "White-label options",
        "Unlimited data retention",
        "Dedicated account manager",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Lisa Chen",
      company: "E-commerce Platform",
      role: "Customer Experience Manager",
      content: "Zion AI Customer Sentiment Tracker has helped us identify and address customer issues before they escalate. Our customer satisfaction has improved by 40% in just 3 months.",
      rating: 5,
      avatar: "LC"
    },
    {
      name: "David Park",
      company: "SaaS Company",
      role: "Head of Customer Success",
      content: "The real-time alerts are incredibly valuable. We can now respond to negative sentiment within minutes instead of hours, leading to much better customer retention.",
      rating: 5,
      avatar: "DP"
    },
    {
      name: "Maria Rodriguez",
      company: "Retail Chain",
      role: "Brand Manager",
      content: "The emotion detection feature is amazing. We can now understand exactly how customers feel about our products and services, allowing us to make data-driven improvements.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const insights = [
    {
      title: "Sentiment Trends",
      description: "Track how customer sentiment changes over time",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Historical analysis", "Pattern recognition", "Seasonal trends", "Performance tracking"]
    },
    {
      title: "Channel Performance",
      description: "Compare sentiment across different communication channels",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Channel comparison", "Optimization insights", "Resource allocation", "Strategy refinement"]
    },
    {
      title: "Emotion Mapping",
      description: "Visualize customer emotions and their distribution",
      icon: <PieChart className="w-8 h-8" />,
      benefits: ["Emotion breakdown", "Visual insights", "Trend analysis", "Action planning"]
    },
    {
      title: "Predictive Analytics",
      description: "Predict future sentiment based on current trends",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Future forecasting", "Risk assessment", "Proactive measures", "Strategic planning"]
    }
  ];

  const metrics = [
    { label: "Sentiment Accuracy", value: "94%", improvement: "+8%" },
    { label: "Response Time", value: "2.5 min", improvement: "-70%" },
    { label: "Customer Satisfaction", value: "4.6/5", improvement: "+0.9" },
    { label: "Issue Resolution", value: "85%", improvement: "+25%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Customer Sentiment Tracker - Real-Time Sentiment Analysis | Zion Tech Group"
        description="Monitor customer sentiment in real-time across all channels. Advanced AI emotion detection and sentiment analysis for better customer experience. Start free trial today!"
        keywords="AI sentiment analysis, customer sentiment tracking, emotion detection, real-time monitoring, customer experience, sentiment analytics, social media monitoring"
        canonical="https://ziontechgroup.com/zion-ai-customer-sentiment-tracker"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Heart className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Sentiment Intelligence Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Track Customer Sentiment
            </span>
            <br />
            <span className="text-white">in Real-Time</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Monitor customer sentiment across all channels with AI-powered emotion detection and sentiment analysis. 
            Get instant alerts and actionable insights to improve customer experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">94%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
              <div className="text-gray-300 text-sm">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm">Channels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.8/5</div>
              <div className="text-gray-300 text-sm">User Rating</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Sentiment Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven features to understand and track customer sentiment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <div className="text-cyan-400 text-sm font-medium">{feature.stats}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Sentiment Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform customer feedback into actionable business intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {insight.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{insight.title}</h3>
                <p className="text-gray-300 mb-4">{insight.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {insight.benefits.map((benefit, idx) => (
                    <li key={idx}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the impact of AI-powered sentiment tracking on customer experience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
                <div className="text-green-400 text-sm font-medium">{metric.improvement}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your sentiment monitoring as your business grows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Customer Experience Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are improving customer experience with sentiment tracking
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Track Customer Sentiment?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses who are already using Zion AI Customer Sentiment Tracker 
            to improve their customer experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAICustomerSentimentTrackerPage;