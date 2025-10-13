import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  // Share2, // Unused
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Target, 
  Sparkles,
  // TrendingUp, // Unused
  // Database, // Unused
  Cpu,
  // Globe, // Unused
  // Zap, // Unused
  // Heart, // Unused
  // MessageCircle, // Unused
  // ThumbsUp // Unused
} from 'lucide-react';

const ZionAISocialSchedulerProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Content Optimization",
      description: "Advanced AI analyzes your audience and optimizes posting times, hashtags, and content for maximum engagement.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["Optimal posting times", "Hashtag suggestions", "Content performance prediction"]
    },
    {
      title: "Multi-Platform Management",
      description: "Schedule and manage content across all major social media platforms from one unified dashboard.",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["15+ platforms", "Bulk scheduling", "Cross-platform analytics"]
    },
    {
      title: "Smart Content Calendar",
      description: "Visual calendar with drag-and-drop scheduling, content planning, and campaign management.",
      icon: <Calendar className="w-6 h-6" />,
      benefits: ["Visual planning", "Campaign tracking", "Content approval workflow"]
    },
    {
      title: "Advanced Analytics & Insights",
      description: "Comprehensive analytics with engagement metrics, audience insights, and ROI tracking.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Engagement analytics", "Audience demographics", "ROI measurement"]
    },
    {
      title: "AI Content Generation",
      description: "Generate engaging social media content using AI, including captions, hashtags, and post ideas.",
      icon: <Sparkles className="w-6 h-6" />,
      benefits: ["AI captions", "Content ideas", "Brand voice consistency"]
    },
    {
      title: "Team Collaboration",
      description: "Collaborate with your team with approval workflows, role-based access, and content review processes.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Team workflows", "Approval processes", "Role management"]
    }
  ];

  const platforms = [
    { name: "Facebook", icon: "📘", color: "from-blue-500 to-blue-600" },
    { name: "Instagram", icon: "📷", color: "from-pink-500 to-purple-600" },
    { name: "Twitter", icon: "🐦", color: "from-blue-400 to-blue-500" },
    { name: "LinkedIn", icon: "💼", color: "from-blue-600 to-blue-700" },
    { name: "TikTok", icon: "🎵", color: "from-black to-gray-800" },
    { name: "YouTube", icon: "📺", color: "from-red-500 to-red-600" },
    { name: "Pinterest", icon: "📌", color: "from-red-500 to-pink-500" },
    { name: "Snapchat", icon: "👻", color: "from-yellow-400 to-yellow-500" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and individual creators",
      features: [
        "Up to 3 social accounts",
        "30 posts per month",
        "Basic analytics",
        "Content calendar",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 10 social accounts",
        "Unlimited posts",
        "Advanced analytics",
        "AI content generation",
        "Team collaboration",
        "Priority support",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations with complex social media needs",
      features: [
        "Unlimited social accounts",
        "Unlimited posts",
        "Enterprise analytics",
        "Advanced AI features",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "API access"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Creative Agency Co.",
      role: "Social Media Manager",
      content: "Zion AI Social Scheduler Pro increased our engagement by 300%. The AI optimization features are incredible!",
      rating: 5,
      avatar: "JM",
    },
    {
      name: "David Kim",
      company: "E-commerce Plus",
      role: "Marketing Director",
      content: "We manage 20+ social accounts effortlessly. The team collaboration features have streamlined our entire workflow.",
      rating: 5,
      avatar: "DK",
    },
    {
      name: "Lisa Thompson",
      company: "Fashion Forward",
      role: "Brand Manager",
      content: "The AI content generation saves us hours every week. Our content quality has improved dramatically.",
      rating: 5,
      avatar: "LT",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Social Scheduler Pro - AI-Powered Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Transform your social media strategy with AI-powered scheduling, content optimization, and analytics. Manage all platforms from one dashboard. Start free trial today!" />
        <meta name="keywords" content="social media scheduler, AI social media, content scheduling, social media management, social media analytics, content optimization, social media automation" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-social-scheduler-pro" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-pink-400 mr-2" />
                <span className="text-pink-400 text-sm font-medium">#1 AI Social Media Management Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
                  Zion AI Social Scheduler Pro
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your social media strategy with AI-powered scheduling, content optimization, 
                and comprehensive analytics across all major platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-pink-400 text-pink-400 rounded-lg font-semibold hover:bg-pink-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  Watch Demo
                  <Target className="w-5 h-5 ml-2" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">300%</div>
                  <div className="text-gray-300 text-sm">Increase in Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm">Social Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50K+</div>
                  <div className="text-gray-300 text-sm">Posts Scheduled Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">AI Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Connect All Your Social Platforms
              </h2>
              <p className="text-lg text-gray-300">
                Manage everything from one powerful dashboard
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-2xl mb-2">{platform.icon}</div>
                  <div className="text-sm text-gray-300 group-hover:text-pink-400 transition-colors">
                    {platform.name}
                  </div>
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
                Powerful Features for Social Media Success
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to create, schedule, and optimize your social media content with AI intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10"
                >
                  <div className="text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                Choose Your Social Media Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your social media presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-pink-500/50 shadow-2xl shadow-pink-500/20' 
                      : 'border-white/10 hover:border-pink-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-pink-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/25'
                        : 'border border-pink-400 text-pink-400 hover:bg-pink-400/10'
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
                Trusted by Social Media Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how marketers and creators are transforming their social media strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using Zion AI Social Scheduler Pro to maximize their social media impact. 
                Start your free trial today and see the difference AI can make.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-pink-400 text-pink-400 rounded-lg font-semibold hover:bg-pink-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Demo
                  <Clock className="w-5 h-5 ml-2" />
                </Link>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAISocialSchedulerProPage;