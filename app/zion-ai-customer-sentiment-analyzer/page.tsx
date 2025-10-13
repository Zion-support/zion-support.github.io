import { ArrowRight, Heart, TrendingUp, MessageSquare, BarChart3, CheckCircle, Star, Brain, Users, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAICustomerSentimentAnalyzer() {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Real-time Sentiment Analysis",
      description: "AI-powered sentiment analysis across all customer touchpoints with 95% accuracy"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Multi-channel Monitoring",
      description: "Monitor sentiment across email, chat, social media, reviews, and support tickets"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trend Analysis",
      description: "Track sentiment trends over time and identify patterns in customer satisfaction"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive dashboard with sentiment scores, emotion mapping, and insights"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Alerts",
      description: "Get instant notifications when sentiment drops or critical issues arise"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Predictive Insights",
      description: "AI predicts customer churn risk and recommends proactive retention strategies"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 messages/month",
        "Basic sentiment analysis",
        "Email & chat monitoring",
        "Standard dashboard",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10,000 messages/month",
        "Advanced sentiment analysis",
        "All channel monitoring",
        "Trend analysis",
        "Automated alerts",
        "Priority support",
        "Up to 5 user accounts",
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
        "Unlimited messages",
        "AI-powered insights",
        "Custom sentiment models",
        "White-label dashboard",
        "24/7 dedicated support",
        "Unlimited users",
        "Custom integrations",
        "Advanced reporting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Customer Success Co.",
      role: "VP of Customer Experience",
      content: "Zion AI Sentiment Analyzer helped us reduce churn by 35% by identifying at-risk customers early.",
      rating: 5
    },
    {
      name: "David Park",
      company: "E-commerce Solutions",
      role: "Customer Support Manager",
      content: "The real-time alerts are game-changing. We can now respond to negative sentiment within minutes.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "SaaS Platform",
      role: "Head of Customer Success",
      content: "The predictive insights helped us improve our NPS score by 40 points in just 6 months.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Sentiment Analyzer - Advanced Sentiment Analysis Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform customer feedback into actionable insights with Zion AI Sentiment Analyzer. Real-time sentiment analysis, trend tracking, and predictive customer insights for modern businesses."
        />
        <meta
          name="keywords"
          content="sentiment analysis, customer feedback, AI analytics, customer satisfaction, emotion analysis, customer insights, churn prediction"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
              <Heart className="w-4 h-4 text-pink-400 mr-2" />
              <span className="text-pink-400 text-sm font-medium">AI-Powered Customer Insights</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Zion AI Customer Sentiment Analyzer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform customer feedback into actionable insights with our AI-powered sentiment analysis platform. 
              Monitor customer emotions, predict churn, and improve satisfaction across all touchpoints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
                <div className="text-gray-300">Analysis Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">35%</div>
                <div className="text-gray-300">Churn Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2,500+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Sentiment Analysis Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand and improve customer sentiment across all channels.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-pink-400 bg-gradient-to-br from-pink-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-pink-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Customer Success Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what customer success professionals say about our sentiment analysis platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Understand Your Customers Better?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI to improve customer satisfaction and reduce churn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
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