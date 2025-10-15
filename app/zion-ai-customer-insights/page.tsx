import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Star, ArrowRight, CheckCircle, Users, Award, Clock, Sparkles, BarChart3, TrendingUp, Target, Eye, Shield, Download, Send, Edit, Globe, Smartphone, Monitor, Headphones, Mic, Search, Filter, Database, PieChart, LineChart, Activity, AlertCircle, CheckCircle2, XCircle, Info, Lightbulb, MessageSquare, Phone, Mail, Calendar, MapPin, Building, CreditCard, ShoppingCart, Heart, ThumbsUp, ThumbsDown, Smile, Frown, Meh, Star as StarIcon, Crown, Diamond, Rocket, Headphones as HeadphonesIcon } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAICustomerInsightsPage = () => {
  const features = [
    {
      title: "AI-Powered Sentiment Analysis",
      description: "Analyze customer feedback, reviews, and communications to understand emotional sentiment and satisfaction levels",
      icon: <Heart className="w-6 h-6" />,
      benefits: ["Real-time sentiment tracking", "Multi-language support", "Emotion detection"]
    },
    {
      title: "Predictive Customer Behavior",
      description: "Use machine learning to predict customer actions, churn risk, and lifetime value",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Churn prediction", "Purchase forecasting", "Behavioral patterns"]
    },
    {
      title: "Customer Journey Mapping",
      description: "Visualize and analyze the complete customer journey across all touchpoints",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Journey visualization", "Touchpoint analysis", "Optimization insights"]
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Monitor customer insights with live dashboards and customizable reports",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Live dashboards", "Custom reports", "Data visualization"]
    },
    {
      title: "Automated Insights Generation",
      description: "Get AI-generated insights and recommendations based on your customer data",
      icon: <Lightbulb className="w-6 h-6" />,
      benefits: ["Auto-generated insights", "Actionable recommendations", "Trend identification"]
    },
    {
      title: "Multi-Channel Data Integration",
      description: "Connect and analyze data from all customer touchpoints and communication channels",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Omnichannel analysis", "Data unification", "Cross-platform insights"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with customer insights",
      features: [
        "Up to 10,000 customers",
        "Basic sentiment analysis",
        "Standard dashboards",
        "Email support",
        "Monthly reports",
        "Basic integrations"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 100,000 customers",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Real-time insights",
        "Advanced integrations",
        "Predictive analytics",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with complex customer data needs",
      features: [
        "Unlimited customers",
        "Full AI suite",
        "White-label dashboards",
        "24/7 support",
        "Custom analytics",
        "All integrations",
        "Advanced ML models",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "E-commerce Platform",
      role: "VP of Marketing",
      content: "Zion AI Customer Insights has transformed how we understand our customers. The predictive analytics helped us reduce churn by 35% and increase customer lifetime value by 50%.",
      rating: 5,
      avatar: "JA"
    },
    {
      name: "Michael Torres",
      company: "SaaS Company",
      role: "Head of Customer Success",
      content: "The real-time sentiment analysis and automated insights have been game-changers. We can now proactively address customer issues before they become problems.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Chen",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "The customer journey mapping feature gave us incredible insights into our omnichannel experience. We've improved customer satisfaction scores by 40% since implementing it.",
      rating: 5,
      avatar: "SC"
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Understand customer preferences and optimize the shopping experience",
      icon: <ShoppingCart className="w-8 h-8" />,
      examples: ["Purchase behavior analysis", "Product recommendation optimization", "Cart abandonment insights"]
    },
    {
      title: "SaaS Companies",
      description: "Monitor user engagement and predict subscription renewals",
      icon: <Monitor className="w-8 h-8" />,
      examples: ["User engagement tracking", "Feature adoption analysis", "Churn prediction"]
    },
    {
      title: "Financial Services",
      description: "Analyze customer risk and personalize financial products",
      icon: <CreditCard className="w-8 h-8" />,
      examples: ["Risk assessment", "Product personalization", "Fraud detection"]
    },
    {
      title: "Healthcare",
      description: "Improve patient experience and treatment outcomes",
      icon: <Heart className="w-8 h-8" />,
      examples: ["Patient satisfaction tracking", "Treatment outcome analysis", "Care quality insights"]
    }
  ];

  const dataSources = [
    { name: "CRM Systems", icon: <Database className="w-6 h-6" />, description: "Salesforce, HubSpot, Pipedrive" },
    { name: "Support Tickets", icon: <MessageSquare className="w-6 h-6" />, description: "Zendesk, Freshdesk, Intercom" },
    { name: "Social Media", icon: <Globe className="w-6 h-6" />, description: "Twitter, Facebook, Instagram, LinkedIn" },
    { name: "Email Campaigns", icon: <Mail className="w-6 h-6" />, description: "Mailchimp, Constant Contact, SendGrid" },
    { name: "Website Analytics", icon: <BarChart3 className="w-6 h-6" />, description: "Google Analytics, Adobe Analytics" },
    { name: "Survey Data", icon: <Target className="w-6 h-6" />, description: "SurveyMonkey, Typeform, Qualtrics" }
  ];

  const insights = [
    {
      title: "Customer Satisfaction Trends",
      description: "Track satisfaction scores over time and identify improvement opportunities",
      metric: "92% satisfaction",
      change: "+15% this quarter",
      icon: <Smile className="w-8 h-8" />
    },
    {
      title: "Churn Risk Prediction",
      description: "Identify customers at risk of churning and take proactive action",
      metric: "85% accuracy",
      change: "Prevented 200+ churns",
      icon: <AlertCircle className="w-8 h-8" />
    },
    {
      title: "Customer Lifetime Value",
      description: "Calculate and optimize customer lifetime value for better targeting",
      metric: "$2,400 avg LTV",
      change: "+25% improvement",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Sentiment Analysis",
      description: "Monitor customer sentiment across all communication channels",
      metric: "78% positive",
      change: "+12% this month",
      icon: <Heart className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Customer Insights - Advanced Customer Analytics & Intelligence | Zion Tech Group"
        description="Transform customer data into actionable insights with AI-powered analytics, sentiment analysis, and predictive modeling. Understand your customers better and drive growth with data-driven decisions. Start free trial!"
        keywords="AI customer insights, customer analytics, sentiment analysis, predictive analytics, customer intelligence, customer journey mapping, churn prediction, customer lifetime value"
        canonical="https://ziontechgroup.com/zion-ai-customer-insights"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-enhanced quantum-dots">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 neon-border">
            <Brain className="w-5 h-5 text-purple-400 mr-2 animate-pulse" />
            <span className="text-purple-400 text-sm font-medium">#1 AI Customer Insights Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight holographic-text">
            Zion AI Customer Insights
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform customer data into actionable insights with AI-powered analytics and predictive modeling. 
            <span className="text-purple-400 font-semibold"> Understand your customers better and drive growth with data-driven decisions.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">500K+</div>
              <div className="text-gray-300 text-xs md:text-sm">Customers Analyzed</div>
            </div>
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">40%</div>
              <div className="text-gray-300 text-xs md:text-sm">Churn Reduction</div>
            </div>
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">95%</div>
              <div className="text-gray-300 text-xs md:text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">4.9/5</div>
              <div className="text-gray-300 text-xs md:text-sm">User Rating</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced AI Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to understand your customers with AI-powered insights, predictive analytics, and intelligent recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Insights Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 cyber-grid-enhanced">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 holographic-text">
              Real-Time Customer Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor key customer metrics and get actionable insights in real-time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden neon-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {insight.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {insight.description}
                </p>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-purple-400">{insight.metric}</div>
                  <div className="text-sm text-green-400">{insight.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Connect All Your Data Sources
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Integrate with your existing tools and platforms to get a complete view of your customers.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {dataSources.map((source, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {source.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {source.name}
                </h3>
                <p className="text-gray-300 text-sm">
                  {source.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From e-commerce to healthcare, our AI customer insights adapt to your industry needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="text-xs text-purple-300">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your business needs. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-purple-500/50 shadow-purple-500/20 scale-105' 
                  : 'border-white/20 hover:border-purple-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Crown className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users say about Zion AI Customer Insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Understand Your Customers Better?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses who are already using Zion AI Customer Insights to make data-driven decisions and grow their customer base.
            <span className="text-purple-400 font-semibold"> Start your free trial today - no credit card required.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="#signup"
              variant="primary"
              size="lg"
              icon={<Rocket className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<HeadphonesIcon className="w-5 h-5" />}
            >
              Contact Sales
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAICustomerInsightsPage;