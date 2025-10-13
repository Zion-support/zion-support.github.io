import React, { useState } from "react";
import { Heart, TrendingUp, BarChart3, Zap, ArrowRight, CheckCircle, Star, Users, Clock, DollarSign, Brain, MessageSquare } from "lucide-react";
import EnhancedSEO from "../../components/EnhancedSEO";
import FuturisticCard from "../../components/FuturisticCard";
import FuturisticButton from "../../components/FuturisticButton";
import ResponsiveContainer from "../../components/ResponsiveContainer";

const AICustomerSentimentTrackerPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const features = [
    {
      title: "Real-Time Sentiment Analysis",
      description: "Monitor customer sentiment across all channels in real-time using advanced AI and natural language processing.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Live sentiment monitoring", "Multi-channel analysis", "Instant alerts"]
    },
    {
      title: "Emotion Detection",
      description: "Identify specific emotions like joy, frustration, anger, or satisfaction to better understand customer feelings.",
      icon: <Heart className="w-6 h-6" />,
      benefits: ["Emotion classification", "Mood tracking", "Emotional intelligence insights"]
    },
    {
      title: "Trend Analysis",
      description: "Track sentiment trends over time and identify patterns to predict customer satisfaction changes.",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Historical trend analysis", "Predictive insights", "Seasonal patterns"]
    },
    {
      title: "Multi-Channel Monitoring",
      description: "Track sentiment across email, social media, reviews, surveys, and support tickets from one dashboard.",
      icon: <MessageSquare className="w-6 h-6" />,
      benefits: ["Unified dashboard", "Cross-platform tracking", "Centralized insights"]
    },
    {
      title: "Automated Alerts",
      description: "Get instant notifications when sentiment drops or specific keywords are mentioned by customers.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Smart notifications", "Keyword monitoring", "Crisis detection"]
    },
    {
      title: "Actionable Insights",
      description: "Receive specific recommendations on how to improve customer satisfaction based on sentiment data.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Improvement suggestions", "ROI tracking", "Performance metrics"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 39,
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5,000 interactions/month",
        "Basic sentiment analysis",
        "Email & social monitoring",
        "Basic reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 99,
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25,000 interactions/month",
        "Advanced emotion detection",
        "Multi-channel monitoring",
        "Automated alerts",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 249,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited interactions",
        "Custom AI models",
        "Advanced integrations",
        "White-label options",
        "Dedicated support",
        "Custom dashboards"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      role: "Customer Experience Manager",
      company: "ServicePro Inc",
      content: "The AI sentiment tracker has transformed how we understand our customers. We've improved our satisfaction scores by 30% in just 3 months.",
      rating: 5
    },
    {
      name: "Mark Thompson",
      role: "VP of Customer Success",
      company: "TechFlow Solutions",
      content: "Real-time sentiment monitoring helps us catch issues before they escalate. The emotion detection feature is incredibly accurate and useful.",
      rating: 5
    },
    {
      name: "Sarah Wilson",
      role: "Marketing Director",
      company: "BrandBoost Agency",
      content: "The multi-channel monitoring gives us a complete picture of customer sentiment. The actionable insights have helped us improve our campaigns significantly.",
      rating: 5
    }
  ];

  const stats = [
    { number: "30%", label: "Satisfaction Improvement", icon: <Heart className="w-6 h-6" /> },
    { number: "95%", label: "Sentiment Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "50%", label: "Faster Issue Detection", icon: <Zap className="w-6 h-6" /> },
    { number: "800+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Customer Sentiment Tracker | Zion Tech Group - Real-Time Sentiment Analysis"
        description="Monitor customer sentiment in real-time with AI-powered analysis across all channels. Track emotions, trends, and get actionable insights to improve customer satisfaction."
        keywords="customer sentiment analysis, emotion detection, sentiment tracking, customer satisfaction, AI sentiment, real-time monitoring"
        canonical="https://ziontechgroup.com/ai-customer-sentiment-tracker"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Heart className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Sentiment Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Customer Sentiment Tracker
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Monitor customer sentiment in real-time across all channels with AI-powered analysis. 
            Track emotions, identify trends, and get actionable insights to improve customer satisfaction and loyalty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Sentiment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI to understand and track customer emotions across all touchpoints.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your sentiment tracking needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about the AI Customer Sentiment Tracker
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Understand Your Customers Better?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI sentiment tracker to improve customer satisfaction and loyalty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Contact: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            <p>📞 Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AICustomerSentimentTrackerPage;