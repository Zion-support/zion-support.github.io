import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Target,
  ArrowRight,
  Sparkles,
  Brain,
  AlertTriangle,
  ThumbsUp,
  MessageSquare,
  PieChart,
  Smile,
  Frown,
  Meh,
  Activity
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AICustomerSentimentTrackerPage = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [sentimentResult, setSentimentResult] = useState(null);

  const features = [
    {
      title: "Real-time Sentiment Analysis",
      description: "Advanced AI analyzes customer feedback, reviews, and social media mentions in real-time with 94% accuracy",
      icon: <Brain className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      stats: "94% accuracy"
    },
    {
      title: "Multi-Channel Monitoring",
      description: "Track sentiment across all customer touchpoints including email, social media, reviews, and support tickets",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      stats: "10+ channels"
    },
    {
      title: "Predictive Insights",
      description: "AI-powered predictions help you identify potential issues before they impact customer satisfaction",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "Early warning"
    },
    {
      title: "Actionable Recommendations",
      description: "Get specific, actionable recommendations to improve customer sentiment and satisfaction scores",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      stats: "Actionable"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "per month",
      description: "Perfect for small businesses starting with sentiment tracking",
      features: [
        "Up to 1,000 mentions per month",
        "Basic sentiment analysis",
        "Email & social media monitoring",
        "Standard reporting",
        "Email support",
        "Basic dashboard"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$129",
      period: "per month",
      description: "Ideal for growing businesses with comprehensive monitoring needs",
      features: [
        "Up to 10,000 mentions per month",
        "Advanced AI sentiment analysis",
        "Multi-channel monitoring",
        "Predictive insights",
        "Custom alerts & notifications",
        "Priority support",
        "API access",
        "Advanced analytics"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$349",
      period: "per month",
      description: "For large organizations with complex monitoring requirements",
      features: [
        "Unlimited mentions",
        "Custom AI models",
        "All monitoring channels",
        "Advanced predictions",
        "Dedicated account manager",
        "24/7 premium support",
        "White-label options",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Maria Garcia",
      company: "Customer Success Co.",
      role: "VP of Customer Experience",
      content: "The AI Sentiment Tracker has transformed how we understand our customers. We've improved our NPS score by 35% in just 6 months.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Robert Chen",
      company: "E-commerce Platform",
      role: "Head of Marketing",
      content: "The predictive insights help us catch issues before they become problems. Our customer satisfaction has never been higher.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Sarah Johnson",
      company: "SaaS Solutions",
      role: "Customer Success Manager",
      content: "The real-time monitoring across all channels gives us complete visibility into customer sentiment. It's been a game-changer.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  const handleAnalyzeDemo = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setSentimentResult({
        overallSentiment: "Positive",
        confidence: 0.89,
        sentimentBreakdown: {
          positive: 65,
          neutral: 25,
          negative: 10
        },
        keyInsights: [
          "Customer satisfaction increased 15% this month",
          "Support response time improvements well-received",
          "New product features generating positive feedback",
          "Minor concerns about pricing transparency"
        ],
        recommendations: [
          "Continue current support improvements",
          "Highlight pricing benefits in communications",
          "Leverage positive feedback for marketing",
          "Address pricing concerns proactively"
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      <Helmet>
        <title>AI Customer Sentiment Tracker | Zion Tech Group</title>
        <meta name="description" content="AI-powered customer sentiment tracking with real-time analysis, multi-channel monitoring, and predictive insights. Improve customer satisfaction with intelligent sentiment analytics." />
        <meta name="keywords" content="customer sentiment, sentiment analysis, customer satisfaction, AI sentiment tracking, customer feedback, NPS tracking" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-sentiment-tracker" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 mb-6">
            <Heart className="w-4 h-4 text-pink-400 mr-2" />
            <span className="text-pink-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400">
              AI Customer Sentiment Tracker
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Understand your customers like never before with AI-powered sentiment analysis. 
            Track, analyze, and improve customer satisfaction across all touchpoints.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              onClick={handleAnalyzeDemo}
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              {isAnalyzing ? "Analyzing..." : "Try Demo Analysis"}
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Demo Analysis Result */}
          {sentimentResult && (
            <FuturisticCard className="max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Sentiment Analysis Complete!</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="text-green-400 font-semibold">Overall Sentiment</div>
                    <div className="text-white text-lg flex items-center justify-center">
                      <Smile className="w-6 h-6 mr-2" />
                      {sentimentResult.overallSentiment}
                    </div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <div className="text-blue-400 font-semibold">Confidence</div>
                    <div className="text-white text-lg">{(sentimentResult.confidence * 100).toFixed(0)}%</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                    <div className="text-purple-400 font-semibold">Positive Rate</div>
                    <div className="text-white text-lg">{sentimentResult.sentimentBreakdown.positive}%</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Insights:</h4>
                    <ul className="space-y-1">
                      {sentimentResult.keyInsights.map((insight, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white mb-3">Recommendations:</h4>
                    <ul className="space-y-1">
                      {sentimentResult.recommendations.map((rec, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FuturisticCard>
          )}
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Sentiment Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered sentiment tracker provides comprehensive insights to help you 
              understand and improve customer satisfaction across all channels.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-pink-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Sentiment Breakdown Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-pink-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Sentiment Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track sentiment across multiple dimensions to get a complete picture of customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">Positive</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Meh className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">Neutral</div>
              <div className="text-gray-300">Mixed Feedback</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Frown className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">Negative</div>
              <div className="text-gray-300">Areas for Improvement</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">Trends</div>
              <div className="text-gray-300">Sentiment Changes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and scale as your business grows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-pink-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '#'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-pink-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Customer Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are improving customer satisfaction with our sentiment tracker
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Understand Your Customers Better?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of businesses already using our AI Sentiment Tracker 
            to improve customer satisfaction and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSentimentTrackerPage;