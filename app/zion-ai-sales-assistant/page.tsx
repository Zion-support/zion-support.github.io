import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Zap, Target, Users, BarChart3, Brain, Clock, Shield, Sparkles, TrendingUp } from "lucide-react";

export default function ZionAISalesAssistant() {
  const features = [
    {
      title: "AI Lead Scoring",
      description: "Intelligent lead qualification and scoring based on behavior, demographics, and engagement patterns",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Behavioral analysis", "Predictive scoring", "Lead prioritization", "Conversion optimization"]
    },
    {
      title: "Automated Follow-ups",
      description: "Smart follow-up sequences that nurture leads and move them through the sales funnel automatically",
      icon: <Clock className="w-6 h-6" />,
      benefits: ["Email sequences", "Call scheduling", "Task automation", "Pipeline management"]
    },
    {
      title: "Sales Forecasting",
      description: "AI-powered sales predictions and revenue forecasting based on historical data and trends",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Revenue predictions", "Pipeline analysis", "Risk assessment", "Goal tracking"]
    },
    {
      title: "CRM Integration",
      description: "Seamless integration with popular CRM systems and sales tools for unified workflow",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Salesforce integration", "HubSpot sync", "Custom fields", "Data synchronization"]
    },
    {
      title: "Conversation Intelligence",
      description: "AI analysis of sales calls and meetings to provide insights and coaching recommendations",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Call transcription", "Sentiment analysis", "Coaching insights", "Performance metrics"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, data encryption, and privacy controls",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["SOC 2 compliant", "End-to-end encryption", "GDPR compliant", "Data residency"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$59",
      period: "/month",
      description: "Perfect for small sales teams and individual reps",
      features: [
        "1,000 leads/month",
        "Basic lead scoring",
        "Email automation",
        "Email support",
        "Basic analytics",
        "CRM integration"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing sales teams and agencies",
      features: [
        "10,000 leads/month",
        "Advanced lead scoring",
        "Full automation suite",
        "Priority support",
        "Advanced analytics",
        "Sales forecasting",
        "Conversation intelligence",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large sales organizations and enterprises",
      features: [
        "Unlimited leads",
        "Custom lead scoring",
        "Advanced automation",
        "24/7 phone support",
        "Custom analytics",
        "Advanced forecasting",
        "White-label options",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const salesTools = [
    {
      title: "Lead Qualification",
      description: "Automatically qualify leads based on custom criteria and behavioral patterns",
      icon: "🎯",
      benefits: ["Custom criteria", "Behavioral tracking", "Score optimization", "Lead routing"]
    },
    {
      title: "Email Sequences",
      description: "Create and manage automated email sequences for different stages of the sales process",
      icon: "📧",
      benefits: ["Template library", "Personalization", "A/B testing", "Performance tracking"]
    },
    {
      title: "Call Scheduling",
      description: "Intelligent scheduling that finds optimal meeting times for both parties",
      icon: "📅",
      benefits: ["Calendar sync", "Time zone handling", "Reminder automation", "Rescheduling"]
    },
    {
      title: "Pipeline Management",
      description: "Visual pipeline tracking with automated stage progression and alerts",
      icon: "📊",
      benefits: ["Visual pipeline", "Stage automation", "Deal tracking", "Progress alerts"]
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive analytics to track individual and team performance metrics",
      icon: "📈",
      benefits: ["Individual metrics", "Team performance", "Goal tracking", "ROI analysis"]
    },
    {
      title: "Coaching Insights",
      description: "AI-powered coaching recommendations based on call analysis and performance data",
      icon: "🎓",
      benefits: ["Call analysis", "Skill assessment", "Improvement tips", "Training recommendations"]
    }
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      role: "Sales Director",
      company: "Tech Solutions Inc.",
      content: "Zion AI Sales Assistant has revolutionized our sales process. We've increased our conversion rate by 180% and reduced our sales cycle by 40%.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Johnson",
      role: "VP of Sales",
      company: "SaaS Enterprise",
      content: "The AI lead scoring is incredibly accurate. It helps us focus on the most promising prospects and has significantly improved our ROI.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "David Chen",
      role: "Sales Manager",
      company: "E-commerce Platform",
      content: "The automated follow-ups and conversation intelligence have made our team more efficient. We're closing more deals with less effort.",
      rating: 5,
      avatar: "DC"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Sales Assistant - AI-Powered Sales Automation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Boost your sales with Zion AI Sales Assistant. AI lead scoring, automated follow-ups, sales forecasting, and CRM integration. Starting at $59/month."
        />
        <meta
          name="keywords"
          content="AI sales assistant, sales automation, lead scoring, sales forecasting, CRM integration, sales coaching, sales analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-sales-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Sales Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}AI Sales Assistant
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most advanced AI-powered sales automation platform. Boost conversions, 
              accelerate deals, and maximize revenue with intelligent sales assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">180%</div>
                <div className="text-gray-300 text-sm">Higher Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">Faster Sales Cycle</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">250%</div>
                <div className="text-gray-300 text-sm">ROI Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Sales Automation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sales Tools Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Sales Toolkit
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to accelerate your sales process and close more deals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {salesTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  <ul className="space-y-2 text-left">
                    {tool.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-cyan-300">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Features for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Sales Success
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                AI-powered tools and automation that help your sales team work smarter, not harder.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-cyan-300">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your sales team. All plans include our core features and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Sales Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Sales Assistant
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
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Accelerate Your Sales?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of sales teams using Zion AI Sales Assistant to close more deals faster. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Schedule Demo
                <Clock className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}