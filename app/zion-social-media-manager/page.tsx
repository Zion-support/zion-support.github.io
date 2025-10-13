import { ArrowRight, Share2, Calendar, BarChart3, CheckCircle, Star, Zap, Users, TrendingUp, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSocialMediaManager() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "AI-powered optimal posting times across all platforms with automatic timezone adjustments"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive performance tracking with engagement metrics, reach analysis, and ROI reporting"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Multi-Platform Management",
      description: "Manage Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube from one dashboard"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Content Automation",
      description: "AI-generated content suggestions and automated posting based on your brand guidelines"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Insights",
      description: "Deep audience analysis with demographic data, interests, and behavior patterns"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Engagement Management",
      description: "Automated responses, comment moderation, and community management tools"
    }
  ];

  const platforms = [
    "Facebook",
    "Instagram",
    "Twitter/X",
    "LinkedIn",
    "TikTok",
    "YouTube",
    "Pinterest",
    "Snapchat",
    "WhatsApp Business",
    "Telegram",
    "Discord",
    "Reddit"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "3 social media accounts",
        "Basic scheduling",
        "Standard analytics",
        "Email support",
        "30 posts per month",
        "Basic content suggestions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Most popular for growing brands",
      features: [
        "10 social media accounts",
        "Advanced scheduling",
        "Comprehensive analytics",
        "Priority support",
        "Unlimited posts",
        "AI content generation",
        "Team collaboration",
        "Hashtag research"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited accounts",
        "White-label dashboard",
        "Advanced analytics & reporting",
        "24/7 dedicated support",
        "Custom integrations",
        "API access",
        "Advanced automation",
        "Custom workflows",
        "Brand monitoring"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Fashion Brand",
      role: "Social Media Manager",
      content: "Zion Social Media Manager has increased our engagement by 250%. The AI content suggestions are spot-on!",
      rating: 5
    },
    {
      name: "Alex Thompson",
      company: "Restaurant Chain",
      role: "Marketing Director",
      content: "Managing 15 locations' social media was overwhelming. This platform made it effortless and effective.",
      rating: 5
    },
    {
      name: "Rachel Kim",
      company: "Tech Startup",
      role: "Growth Manager",
      content: "The analytics insights helped us optimize our strategy and grow our following by 400% in 6 months.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Social Media Manager - AI-Powered Social Media Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Streamline your social media with Zion Social Media Manager - the ultimate AI-powered platform for scheduling, analytics, and multi-platform management."
        />
        <meta
          name="keywords"
          content="social media management, social media scheduling, social media analytics, content automation, social media tools, multi-platform management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
              <Share2 className="w-4 h-4 text-pink-400 mr-2" />
              <span className="text-pink-400 text-sm font-medium">#1 Social Media Platform 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Zion Social Media Manager
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your social media presence with AI-powered management, smart scheduling, 
              and comprehensive analytics across all major platforms.
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
                <div className="text-3xl font-bold text-pink-400 mb-2">50M+</div>
                <div className="text-gray-300">Posts Scheduled Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-gray-300">Platforms Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-gray-300">Average Engagement Increase</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Social Media Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage, schedule, and analyze your social media presence.
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

        {/* Platforms Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Connect All Your Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage all your social media accounts from one powerful dashboard.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{platform}</span>
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
                Trusted by Social Media Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what social media managers say about Zion Social Media Manager
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
              Join thousands of brands using Zion Social Media Manager to grow their online presence.
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