import { ArrowRight, Share2, TrendingUp, Calendar, BarChart3, CheckCircle, Star, Brain, Users, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAISocialMediaManager() {
  const features = [
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Generate engaging social media posts, captions, and hashtags using advanced AI technology"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "AI-powered optimal posting times based on audience engagement patterns and timezone analysis"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive analytics dashboard with engagement metrics, reach analysis, and ROI tracking"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Multi-Platform Management",
      description: "Manage Facebook, Instagram, Twitter, LinkedIn, and TikTok from one unified dashboard"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Engagement",
      description: "AI-powered responses to comments, mentions, and messages with brand voice consistency"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Trend Analysis",
      description: "Real-time trend detection and content suggestions based on viral topics and hashtags"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 3 social accounts",
        "Basic content generation",
        "Simple scheduling",
        "Basic analytics",
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
        "Up to 10 social accounts",
        "AI content generation",
        "Advanced scheduling",
        "Comprehensive analytics",
        "Priority support",
        "Up to 5 user accounts",
        "Hashtag research",
        "Competitor analysis"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited social accounts",
        "Advanced AI features",
        "Custom workflows",
        "White-label reporting",
        "24/7 dedicated support",
        "Unlimited users",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Amanda Rodriguez",
      company: "Digital Marketing Agency",
      role: "Social Media Director",
      content: "Zion AI Social Media Manager increased our engagement rates by 150% and saved us 20 hours per week.",
      rating: 5
    },
    {
      name: "Chris Johnson",
      company: "E-commerce Brand",
      role: "Marketing Manager",
      content: "The AI content generation is incredible. We're creating 5x more content with half the effort.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      company: "SaaS Startup",
      role: "Growth Marketing Lead",
      content: "The analytics insights helped us optimize our social strategy and increase followers by 300%.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Social Media Manager - Advanced Social Media Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your social media presence with Zion AI Social Media Manager. AI-powered content generation, smart scheduling, and comprehensive analytics for all platforms."
        />
        <meta
          name="keywords"
          content="social media management, AI content generation, social media scheduling, social media analytics, social media automation, multi-platform management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Share2 className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">AI-Powered Social Media Management</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Zion AI Social Media Manager
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your social media presence with AI-powered content generation, smart scheduling, 
              and comprehensive analytics. Manage all platforms from one unified dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">150%</div>
                <div className="text-gray-300">Engagement Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20h</div>
                <div className="text-gray-300">Time Saved Weekly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">5,000+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Social Media Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to dominate social media with AI-powered automation and insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
                Choose the plan that fits your social media needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
                Trusted by Marketing Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what social media professionals say about our management platform
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
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses growing their social presence with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
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