import { Helmet } from "react-helmet-async";
import { Heart, Brain, TrendingUp, BarChart3, Zap, CheckCircle, Star, ArrowRight, Users, Target, AlertTriangle, Smile } from "lucide-react";
import { Link } from "react-router-dom";

export default function AICustomerSentimentTracker() {
  const features = [
    {
      title: "Real-time Sentiment Analysis",
      description: "Monitor customer sentiment across all channels with AI-powered emotion detection and mood tracking",
      icon: <Heart className="w-6 h-6" />,
      stats: "Real-time monitoring"
    },
    {
      title: "Multi-channel Tracking",
      description: "Analyze sentiment from emails, social media, reviews, surveys, and support tickets in one unified dashboard",
      icon: <Users className="w-6 h-6" />,
      stats: "10+ channels"
    },
    {
      title: "Predictive Alerts",
      description: "Get early warnings when customer sentiment drops or satisfaction issues are detected",
      icon: <AlertTriangle className="w-6 h-6" />,
      stats: "Proactive alerts"
    },
    {
      title: "Trend Analysis",
      description: "Track sentiment trends over time with detailed analytics and historical comparisons",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "Historical insights"
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive sentiment reports automatically with actionable insights and recommendations",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Automated insights"
    },
    {
      title: "Team Notifications",
      description: "Alert relevant team members when sentiment issues require immediate attention or follow-up",
      icon: <Zap className="w-6 h-6" />,
      stats: "Smart notifications"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 interactions/month",
        "Basic sentiment analysis",
        "Email & social media tracking",
        "Standard reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 interactions/month",
        "Advanced AI analysis",
        "All channel tracking",
        "Predictive alerts",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited interactions",
        "Custom AI models",
        "White-label dashboard",
        "24/7 support",
        "Dedicated account manager",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Improve Customer Satisfaction",
      description: "Identify and address customer issues before they escalate, leading to higher satisfaction scores",
      icon: <Smile className="w-8 h-8" />,
      percentage: "35%"
    },
    {
      title: "Reduce Churn Rate",
      description: "Early detection of negative sentiment helps prevent customer churn and improves retention",
      icon: <Target className="w-8 h-8" />,
      percentage: "28%"
    },
    {
      title: "Increase Revenue",
      description: "Better customer experience leads to higher customer lifetime value and increased sales",
      icon: <TrendingUp className="w-8 h-8" />,
      percentage: "22%"
    },
    {
      title: "Save Time",
      description: "Automated sentiment tracking saves hours of manual analysis and reporting time",
      icon: <Zap className="w-8 h-8" />,
      percentage: "60%"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "Customer Success Manager",
      content: "The AI sentiment tracker has transformed how we understand our customers. We've improved satisfaction scores by 35% and reduced churn by 28%.",
      rating: 5
    },
    {
      name: "Robert Kim",
      company: "VP of Customer Experience",
      content: "The predictive alerts are game-changing. We can now address customer issues before they become problems, saving us thousands in potential churn.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "Head of Support",
      content: "The multi-channel tracking gives us a complete picture of customer sentiment. Our team can now respond proactively instead of reactively.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Sentiment Tracker - Zion Tech Group | Real-time Customer Emotion Analysis</title>
        <meta
          name="description"
          content="Monitor customer sentiment in real-time with AI-powered emotion analysis. Improve satisfaction by 35%, reduce churn by 28%, and boost revenue by 22%."
        />
        <meta
          name="keywords"
          content="customer sentiment analysis, emotion tracking, customer satisfaction, churn prevention, sentiment monitoring, AI customer insights"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Heart className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Customer Sentiment Tracker
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Monitor customer sentiment in real-time with advanced AI emotion analysis. Improve satisfaction by 35%, 
              reduce churn by 28%, and boost revenue by 22% with proactive customer experience management.
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
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">35%</div>
                <div className="text-gray-300 text-sm">Satisfaction Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">28%</div>
                <div className="text-gray-300 text-sm">Churn Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">22%</div>
                <div className="text-gray-300 text-sm">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300 text-sm">Time Saved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered sentiment tracking delivers measurable improvements across all customer experience metrics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.percentage}</div>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Sentiment Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI to understand and respond to customer emotions across all touchpoints.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business size and customer interaction volume. Scale up as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/10' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
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
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Understand Your Customers Better?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using AI Customer Sentiment Tracker to improve customer experience and drive growth.
              </p>
              
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
          </div>
        </section>
      </div>
    </>
  );
}