import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Zap, Mail, Target, BarChart3, Users, Brain, Clock, Shield, Sparkles } from "lucide-react";

export default function ZionAIEmailMarketing() {
  const features = [
    {
      title: "AI-Powered Email Generation",
      description: "Create compelling, personalized emails using advanced AI that understands your brand voice and audience",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Personalized content", "Brand voice consistency", "A/B testing", "Subject line optimization"]
    },
    {
      title: "Advanced Segmentation",
      description: "Intelligent audience segmentation based on behavior, preferences, and engagement patterns",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Behavioral segmentation", "Dynamic lists", "Predictive analytics", "Lifecycle targeting"]
    },
    {
      title: "Automated Campaigns",
      description: "Set up sophisticated email sequences that nurture leads and customers automatically",
      icon: <Clock className="w-6 h-6" />,
      benefits: ["Welcome sequences", "Drip campaigns", "Re-engagement", "Post-purchase flows"]
    },
    {
      title: "Real-Time Analytics",
      description: "Comprehensive analytics and insights to track performance and optimize your email strategy",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Open rates", "Click tracking", "Revenue attribution", "ROI analysis"]
    },
    {
      title: "Drag-and-Drop Builder",
      description: "Create beautiful, responsive emails with our intuitive drag-and-drop email builder",
      icon: <Mail className="w-6 h-6" />,
      benefits: ["Responsive templates", "Custom blocks", "Image optimization", "Mobile preview"]
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
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "5,000 contacts",
        "Unlimited emails",
        "Basic templates",
        "Email support",
        "Basic analytics",
        "A/B testing"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "25,000 contacts",
        "Unlimited emails",
        "Premium templates",
        "Priority support",
        "Advanced analytics",
        "Automation workflows",
        "AI content generation",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited contacts",
        "Unlimited emails",
        "Custom templates",
        "24/7 phone support",
        "Custom analytics",
        "Advanced automation",
        "White-label options",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const emailTypes = [
    {
      title: "Newsletter Campaigns",
      description: "Regular updates and content to keep your audience engaged and informed",
      icon: "📰",
      benefits: ["Content curation", "Scheduling", "Performance tracking", "Subscriber growth"]
    },
    {
      title: "Promotional Emails",
      description: "Drive sales with targeted promotional campaigns and special offers",
      icon: "🎯",
      benefits: ["Product showcases", "Discount codes", "Urgency tactics", "Conversion optimization"]
    },
    {
      title: "Welcome Series",
      description: "Onboard new subscribers with a series of welcome emails that build relationships",
      icon: "👋",
      benefits: ["First impressions", "Brand introduction", "Value delivery", "Engagement building"]
    },
    {
      title: "Abandoned Cart Recovery",
      description: "Re-engage customers who left items in their cart with personalized follow-up emails",
      icon: "🛒",
      benefits: ["Cart recovery", "Personalization", "Timing optimization", "Revenue recovery"]
    },
    {
      title: "Re-engagement Campaigns",
      description: "Win back inactive subscribers with targeted re-engagement strategies",
      icon: "🔄",
      benefits: ["Inactivity detection", "Win-back offers", "Reactivation", "List cleaning"]
    },
    {
      title: "Transactional Emails",
      description: "Automated emails for orders, confirmations, receipts, and account updates",
      icon: "📧",
      benefits: ["Order confirmations", "Shipping updates", "Account notifications", "Receipts"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      role: "Marketing Manager",
      company: "E-commerce Solutions",
      content: "Zion AI Email Marketing has transformed our email campaigns. We've seen a 300% increase in open rates and 150% boost in click-through rates.",
      rating: 5,
      avatar: "JA"
    },
    {
      name: "Robert Kim",
      role: "CEO",
      company: "SaaS Startup",
      content: "The AI-powered content generation is incredible. It creates personalized emails that our customers actually want to read. ROI improved by 200%.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Lisa Martinez",
      role: "Digital Marketing Director",
      company: "Retail Chain",
      content: "The automation features have saved us countless hours. Our abandoned cart recovery campaigns alone generate $50K+ in additional revenue monthly.",
      rating: 5,
      avatar: "LM"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Email Marketing - Advanced Email Marketing Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your email marketing with Zion AI Email Marketing. AI-powered content, advanced segmentation, automation, and analytics. Starting at $29/month."
        />
        <meta
          name="keywords"
          content="AI email marketing, email automation, email campaigns, email segmentation, email analytics, email templates, marketing automation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-email-marketing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Email Marketing Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}AI Email Marketing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most advanced AI-powered email marketing platform. Create, send, and optimize 
              personalized email campaigns that drive engagement and revenue.
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
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300 text-sm">Higher Open Rates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">150%</div>
                <div className="text-gray-300 text-sm">More Click-Throughs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">200%</div>
                <div className="text-gray-300 text-sm">ROI Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50K+</div>
                <div className="text-gray-300 text-sm">Additional Revenue</div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Types Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Every Type of Email Campaign
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From newsletters to transactional emails, we've got you covered
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emailTypes.map((emailType, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {emailType.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {emailType.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {emailType.description}
                  </p>
                  <ul className="space-y-2 text-left">
                    {emailType.benefits.map((benefit, idx) => (
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
                  {" "}Email Marketing Success
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to create, send, and optimize email campaigns that deliver real business results.
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
                Choose the perfect plan for your email marketing needs. All plans include our core features and 24/7 support.
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
                Trusted by Marketing Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Email Marketing
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
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using Zion AI Email Marketing to drive engagement and revenue. 
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