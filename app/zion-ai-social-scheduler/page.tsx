import { ArrowRight, Calendar, Zap, CheckCircle, Star, Brain, Share2, TrendingUp, Users, BarChart3, Clock, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiSocialScheduler() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Generate engaging social media posts using AI that understands your brand voice and audience preferences"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "AI-powered optimal posting times based on your audience's activity patterns and engagement data"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive performance tracking with AI insights to optimize your social media strategy"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Multi-Platform Management",
      description: "Manage Facebook, Instagram, Twitter, LinkedIn, and TikTok from one unified dashboard"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Hashtag Optimization",
      description: "AI-powered hashtag suggestions to maximize reach and engagement across all platforms"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Collaborate with your team with approval workflows, content calendars, and role-based permissions"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and freelancers",
      features: [
        "Up to 3 social accounts",
        "30 posts per month",
        "Basic AI content generation",
        "Standard scheduling",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10 social accounts",
        "Unlimited posts",
        "Advanced AI content generation",
        "Optimal time scheduling",
        "Advanced analytics",
        "Hashtag optimization",
        "Team collaboration (3 users)",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited social accounts",
        "Unlimited posts",
        "Premium AI content generation",
        "Custom scheduling algorithms",
        "White-label analytics",
        "Advanced team features",
        "API access",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Chen",
      company: "Digital Marketing Agency",
      role: "Social Media Manager",
      content: "Zion AI Social Scheduler increased our engagement by 150%. The AI content generation is incredibly accurate and saves us hours every week.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      company: "E-commerce Brand",
      role: "Marketing Director",
      content: "The optimal timing feature is a game-changer. Our posts now get 3x more engagement thanks to AI-powered scheduling.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      company: "SaaS Startup",
      role: "Growth Manager",
      content: "Managing multiple platforms was a nightmare. This tool streamlined everything and our social presence has never been stronger.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "3x More Engagement",
      description: "AI-optimized posting times and content increase engagement by 300%"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save 10+ Hours/Week",
      description: "Automated content generation and scheduling saves significant time"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Growth",
      description: "AI insights help optimize your social media strategy for maximum ROI"
    }
  ];

  const platforms = [
    { name: "Facebook", icon: "📘", color: "from-blue-600 to-blue-800" },
    { name: "Instagram", icon: "📷", color: "from-pink-500 to-purple-600" },
    { name: "Twitter", icon: "🐦", color: "from-blue-400 to-blue-600" },
    { name: "LinkedIn", icon: "💼", color: "from-blue-700 to-blue-900" },
    { name: "TikTok", icon: "🎵", color: "from-black to-gray-800" },
    { name: "YouTube", icon: "📺", color: "from-red-500 to-red-700" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Social Scheduler - Smart Social Media Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your social media with Zion AI Social Scheduler. AI-powered content generation, optimal scheduling, multi-platform management, and advanced analytics. Start free trial today."
        />
        <meta
          name="keywords"
          content="AI social media scheduler, social media automation, content generation, social media management, AI posting, social media analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Social Media Tool 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Zion AI Social Scheduler
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your social media strategy with AI-powered content generation, optimal scheduling, 
              and multi-platform management. Grow your audience and engagement like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">More Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300">Hours Saved/Week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">6</div>
                <div className="text-gray-300">Platforms Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Manage All Your Social Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect and manage all your social media accounts from one powerful dashboard.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-white font-semibold">{platform.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Social Scheduler?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of social media management with AI-powered automation and insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Social Media Success
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
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
                Choose the plan that fits your social media needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-cyan-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
                See what our customers say about Zion AI Social Scheduler
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
              Join thousands of businesses using Zion AI Social Scheduler to grow their social media presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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