import { ArrowRight, Share2, Calendar, BarChart3, CheckCircle, Clock, DollarSign, Target, Zap, Globe, Users, FileText, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSocialScheduler() {
  const features = [
    {
      title: "Multi-Platform Scheduling",
      description: "Schedule posts across Facebook, Instagram, Twitter, LinkedIn, and TikTok with one click",
      icon: <Share2 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Content Calendar",
      description: "Visual content calendar with drag-and-drop scheduling and content planning tools",
      icon: <Calendar className="w-6 h-6" />,
      included: true
    },
    {
      title: "AI Content Suggestions",
      description: "AI-powered content suggestions based on trending topics and your audience preferences",
      icon: <Zap className="w-6 h-6" />,
      included: true
    },
    {
      title: "Team Collaboration",
      description: "Collaborate with your team with approval workflows, comments, and role-based access",
      icon: <Users className="w-6 h-6" />,
      included: true
    },
    {
      title: "Analytics & Insights",
      description: "Comprehensive social media analytics with engagement metrics and performance insights",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Hashtag Research",
      description: "AI-powered hashtag research and optimization for maximum reach and engagement",
      icon: <Target className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 19,
      period: "month",
      description: "Perfect for individuals",
      features: [
        "Up to 3 social accounts",
        "Up to 30 posts/month",
        "Basic scheduling",
        "Email support",
        "Basic analytics",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 49,
      period: "month",
      description: "Ideal for small teams",
      features: [
        "Up to 10 social accounts",
        "Up to 200 posts/month",
        "Advanced scheduling",
        "Priority support",
        "Advanced analytics",
        "Premium templates",
        "Team collaboration",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 129,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited social accounts",
        "Unlimited posts",
        "Custom scheduling",
        "Dedicated support",
        "Custom analytics",
        "White-label solution",
        "Custom integrations",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const socialStats = [
    { number: "500%", label: "Increase in Engagement", icon: <Share2 className="w-6 h-6" /> },
    { number: "80%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> },
    { number: "10+", label: "Social Platforms", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Automated Posting", icon: <Zap className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Emma Thompson",
      company: "Digital Marketing Agency",
      role: "Social Media Manager",
      content: "Zion Social Scheduler has transformed our social media management. We can now manage all our clients' accounts from one platform and have increased engagement by 500%.",
      rating: 5,
      avatar: "ET"
    },
    {
      name: "Ryan Davis",
      company: "E-commerce Brand",
      role: "Marketing Director",
      content: "The AI content suggestions are incredible. We never run out of ideas, and the hashtag research has helped us reach new audiences we never knew existed.",
      rating: 5,
      avatar: "RD"
    },
    {
      name: "Maria Garcia",
      company: "SaaS Startup",
      role: "Content Manager",
      content: "The team collaboration features are fantastic. Our entire marketing team can work together on content planning and approval, which has streamlined our workflow significantly.",
      rating: 5,
      avatar: "MG"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Social Scheduler - AI-Powered Social Media Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Manage your social media with Zion Social Scheduler - the ultimate AI-powered social media management platform. Multi-platform scheduling, content calendar, and analytics. Starting at $19/month."
        />
        <meta
          name="keywords"
          content="social media management, social media scheduling, content calendar, social media analytics, hashtag research, team collaboration, Zion Social Scheduler"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-red-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 mb-6">
              <Share2 className="w-4 h-4 text-pink-400 mr-2" />
              <span className="text-pink-400 text-sm font-medium">#1 Social Media Management Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 animate-pulse">
                Zion Social Scheduler
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered social media management platform that helps you schedule, manage, and optimize your social media presence. 
              Multi-platform scheduling, content calendar, and comprehensive analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-pink-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Social Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {socialStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                  Advanced Social Media Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your social media presence effectively
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-pink-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                  Social Media Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your social media management needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-pink-500/50 bg-gradient-to-br from-pink-500/10 to-rose-500/10' 
                      : 'border-white/20 hover:border-pink-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-pink-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 shadow-lg hover:shadow-pink-500/25'
                        : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Social Media Managers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion Social Scheduler
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Share2 key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-pink-900/30 to-rose-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Managing Your Social Media
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of social media managers who use Zion Social Scheduler to grow their presence. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-pink-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
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