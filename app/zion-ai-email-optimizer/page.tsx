import { ArrowRight, Mail, TrendingUp, BarChart3, CheckCircle, Star, Brain, Zap, Clock, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAIEmailOptimizer() {
  const features = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "AI Subject Line Optimization",
      description: "Generate high-converting subject lines using AI analysis of successful email campaigns"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Send Time Optimization",
      description: "AI determines optimal send times for each recipient based on engagement patterns"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive email performance metrics with AI-powered insights and recommendations"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Audience Segmentation",
      description: "AI-powered audience segmentation based on behavior, preferences, and engagement history"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "A/B Testing Automation",
      description: "Automated A/B testing with AI analysis and automatic winner selection"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Content Personalization",
      description: "Dynamic content personalization based on recipient data and behavior patterns"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 emails/month",
        "Basic subject line optimization",
        "Simple analytics",
        "Email support",
        "1 user account",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 100,000 emails/month",
        "AI optimization features",
        "Advanced analytics",
        "A/B testing automation",
        "Priority support",
        "Up to 5 user accounts",
        "API access",
        "Custom templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Advanced AI features",
        "Custom integrations",
        "White-label reporting",
        "24/7 dedicated support",
        "Unlimited users",
        "Advanced compliance",
        "Custom training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "E-commerce Brand",
      role: "Email Marketing Manager",
      content: "Zion AI Email Optimizer increased our open rates by 45% and click-through rates by 60%.",
      rating: 5
    },
    {
      name: "Robert Kim",
      company: "SaaS Platform",
      role: "Growth Marketing Lead",
      content: "The AI subject line optimization is incredible. We're seeing 3x better performance on our campaigns.",
      rating: 5
    },
    {
      name: "Amanda Wilson",
      company: "Digital Agency",
      role: "Email Specialist",
      content: "Automated A/B testing saved us hours of work and improved our campaign results significantly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Email Optimizer - Advanced Email Marketing Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Optimize your email marketing with Zion AI Email Optimizer. AI-powered subject line optimization, send time optimization, and advanced analytics for better email performance."
        />
        <meta
          name="keywords"
          content="email marketing, email optimization, subject line optimization, email analytics, A/B testing, email automation, email personalization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 mb-6">
              <Mail className="w-4 h-4 text-teal-400 mr-2" />
              <span className="text-teal-400 text-sm font-medium">AI-Powered Email Marketing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Zion AI Email Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your email marketing with AI-powered optimization. Subject line generation, 
              send time optimization, and advanced analytics to maximize your email performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">45%</div>
                <div className="text-gray-300">Open Rate Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300">Click Rate Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">3,500+</div>
                <div className="text-gray-300">Marketers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Email Optimization Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize your email marketing campaigns and maximize performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
                Flexible Pricing Plans
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
                      ? 'border-teal-400 bg-gradient-to-br from-teal-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-teal-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700'
                        : 'border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900'
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
                See what email marketing professionals say about our optimization platform
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
              Ready to Optimize Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of marketers improving their email performance with AI-powered optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
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