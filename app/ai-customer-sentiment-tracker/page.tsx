import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock,
  Target,
  Zap,
  Shield,
  Smartphone,
  Globe,
  MessageSquare
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AICustomerSentimentTrackerPage = () => {
  const features = [
    {
      title: "Real-time Sentiment Analysis",
      description: "Monitor customer sentiment across all channels with AI-powered analysis of reviews, social media, and support tickets",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Channel Monitoring",
      description: "Track sentiment from social media, reviews, surveys, support tickets, and customer feedback in one dashboard",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Predictive Insights",
      description: "Get early warnings about potential customer churn and identify opportunities for improvement",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Automated Alerts",
      description: "Receive instant notifications when sentiment drops below thresholds or negative trends are detected",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Competitive Analysis",
      description: "Compare your sentiment scores against competitors and industry benchmarks",
      icon: <Target className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Actionable Recommendations",
      description: "Get AI-generated suggestions to improve customer satisfaction and address negative sentiment",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 mentions per month",
        "Basic sentiment analysis",
        "Social media monitoring",
        "Email alerts",
        "Basic dashboard",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 mentions per month",
        "Advanced sentiment analysis",
        "Multi-channel monitoring",
        "Predictive insights",
        "Advanced analytics & reporting",
        "Priority support",
        "Up to 5 user accounts",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited mentions",
        "Custom AI models",
        "White-label solution",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Unlimited users",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Improve Customer Satisfaction",
      description: "Increase customer satisfaction scores by 40% with proactive sentiment monitoring",
      icon: <Heart className="w-6 h-6" />,
      value: "40%"
    },
    {
      title: "Reduce Churn Rate",
      description: "Identify at-risk customers early and reduce churn by 25%",
      icon: <Shield className="w-6 h-6" />,
      value: "25%"
    },
    {
      title: "Faster Response Time",
      description: "Respond to negative sentiment 3x faster with automated alerts",
      icon: <Clock className="w-6 h-6" />,
      value: "3x"
    },
    {
      title: "Increase Revenue",
      description: "Boost revenue by 15% through improved customer experience",
      icon: <TrendingUp className="w-6 h-6" />,
      value: "15%"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "Customer Success Co.",
      role: "VP of Customer Experience",
      content: "The AI sentiment tracker has revolutionized our customer experience. We've improved satisfaction scores by 45% and reduced churn significantly.",
      rating: 5,
      avatar: "JA"
    },
    {
      name: "Robert Kim",
      company: "Tech Solutions Ltd.",
      role: "Customer Success Manager",
      content: "The predictive insights help us identify issues before they become problems. Our response time to negative sentiment has improved dramatically.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Maria Garcia",
      company: "E-commerce Platform",
      role: "Head of Customer Support",
      content: "The multi-channel monitoring gives us a complete picture of customer sentiment. The actionable recommendations are incredibly valuable.",
      rating: 5,
      avatar: "MG"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Customer Sentiment Tracker - Monitor Customer Satisfaction | Zion Tech Group"
        description="Track customer sentiment across all channels with AI-powered analysis. Improve satisfaction by 40% and reduce churn by 25% with real-time monitoring."
        keywords="customer sentiment, sentiment analysis, customer satisfaction, churn prediction, customer experience, social media monitoring, AI analytics"
        canonical="https://ziontechgroup.com/ai-customer-sentiment-tracker"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Heart className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Customer Sentiment Tracker
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Monitor customer sentiment across all channels with AI-powered analysis. Improve satisfaction by 40%, 
            reduce churn by 25%, and boost revenue with proactive customer experience management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <div className="text-gray-300 text-xs md:text-sm">{benefit.title}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Sentiment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered sentiment tracker uses natural language processing to understand customer emotions and provide actionable insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your customer sentiment monitoring needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10 scale-105' 
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
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Customer Success Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about the AI Customer Sentiment Tracker
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Improve Customer Sentiment?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses already using our AI sentiment tracker to improve customer satisfaction and reduce churn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AICustomerSentimentTrackerPage;