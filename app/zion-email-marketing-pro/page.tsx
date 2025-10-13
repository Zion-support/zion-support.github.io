import { ArrowRight, Mail, BarChart3, Target, CheckCircle, Star, Zap, Users, TrendingUp, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionEmailMarketingPro() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI-Powered Segmentation",
      description: "Automatically segment your audience using machine learning and behavioral data analysis"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Automation",
      description: "Create complex email workflows with drag-and-drop automation builder and AI optimization"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Track open rates, click-through rates, conversions, and revenue attribution with detailed insights"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Designer",
      description: "Create stunning emails with our drag-and-drop builder and AI-powered design suggestions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "List Management",
      description: "Advanced contact management with custom fields, tags, and automated list cleaning"
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "A/B Testing",
      description: "Test subject lines, content, and send times with AI-powered optimization recommendations"
    }
  ];

  const emailTypes = [
    "Welcome Series",
    "Newsletter Campaigns",
    "Product Announcements",
    "Abandoned Cart Recovery",
    "Birthday & Anniversary",
    "Re-engagement Campaigns",
    "Event Invitations",
    "Survey & Feedback",
    "Educational Content",
    "Promotional Offers",
    "Transactional Emails",
    "Drip Campaigns"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$25",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 2,500 subscribers",
        "10,000 emails per month",
        "Basic templates",
        "Email support",
        "Basic analytics",
        "A/B testing"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$65",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10,000 subscribers",
        "50,000 emails per month",
        "Advanced templates",
        "Priority support",
        "Advanced analytics",
        "Automation workflows",
        "Custom fields",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited subscribers",
        "Unlimited emails",
        "White-label solution",
        "24/7 dedicated support",
        "Advanced reporting",
        "Custom integrations",
        "Advanced automation",
        "Multi-user accounts"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "E-commerce Store",
      role: "Marketing Manager",
      content: "Zion Email Marketing Pro increased our email revenue by 350%. The automation features are game-changing!",
      rating: 5
    },
    {
      name: "Robert Kim",
      company: "SaaS Startup",
      role: "Growth Manager",
      content: "The AI segmentation helped us personalize our emails perfectly. Open rates increased by 200%.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "Non-profit Organization",
      role: "Communications Director",
      content: "Easy to use, powerful features, and excellent deliverability. Our donor engagement has never been better.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Email Marketing Pro - AI-Powered Email Marketing Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your email marketing with Zion Email Marketing Pro - the ultimate AI-powered platform for automation, segmentation, and analytics."
        />
        <meta
          name="keywords"
          content="email marketing, email automation, email campaigns, marketing automation, email analytics, email segmentation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <Mail className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">#1 Email Marketing Platform 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Zion Email Marketing Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your email marketing with AI-powered automation, smart segmentation, 
              and advanced analytics. Drive engagement and revenue with every email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">350%</div>
                <div className="text-gray-300">Average Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
                <div className="text-gray-300">Deliverability Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2M+</div>
                <div className="text-gray-300">Emails Sent Daily</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Email Marketing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, send, and optimize your email campaigns.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Email Types Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Create Any Type of Email Campaign
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From welcome series to promotional campaigns, we have templates for every need.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emailTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{type}</span>
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
                Choose the plan that fits your email marketing needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-green-400 bg-gradient-to-br from-green-500/10 to-emerald-500/10'
                      : 'border-white/20 hover:border-green-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
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
                Trusted by Email Marketers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what marketing professionals say about Zion Email Marketing Pro
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
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of marketers using Zion Email Marketing Pro to grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
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