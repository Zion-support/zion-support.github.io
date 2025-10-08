import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Calendar, Share2, BarChart3, Clock, Users, Target, TrendingUp, Smartphone, Globe, Sparkles, Shield, Bell } from 'lucide-react';

const SocialSchedulerPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-blue-400" />,
      title: "Smart Scheduling",
      description: "Schedule posts across all major social media platforms with optimal timing recommendations."
    },
    {
      icon: <Share2 className="w-6 h-6 text-green-400" />,
      title: "Multi-Platform Publishing",
      description: "Publish to Facebook, Instagram, Twitter, LinkedIn, TikTok, and Pinterest from one dashboard."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: "Advanced Analytics",
      description: "Track engagement, reach, clicks, and conversions with detailed performance reports."
    },
    {
      icon: <Target className="w-6 h-6 text-orange-400" />,
      title: "Audience Targeting",
      description: "AI-powered audience insights help you reach the right people at the right time."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
      title: "Content Optimization",
      description: "Get suggestions for hashtags, optimal posting times, and content improvements."
    },
    {
      icon: <Users className="w-6 h-6 text-pink-400" />,
      title: "Team Collaboration",
      description: "Work with your team with approval workflows, comments, and role-based access."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and influencers",
      features: [
        "3 social media accounts",
        "30 posts per month",
        "Basic analytics",
        "Email support",
        "Content calendar",
        "Hashtag suggestions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "10 social media accounts",
        "Unlimited posts",
        "Advanced analytics",
        "Priority support",
        "Team collaboration (5 users)",
        "Content optimization",
        "Competitor analysis",
        "Custom posting times"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited social accounts",
        "Unlimited posts",
        "Premium analytics",
        "24/7 phone support",
        "Unlimited team members",
        "White-label options",
        "API access",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const platforms = [
    { name: "Facebook", icon: "📘", color: "text-blue-500" },
    { name: "Instagram", icon: "📷", color: "text-pink-500" },
    { name: "Twitter", icon: "🐦", color: "text-blue-400" },
    { name: "LinkedIn", icon: "💼", color: "text-blue-600" },
    { name: "TikTok", icon: "🎵", color: "text-black" },
    { name: "Pinterest", icon: "📌", color: "text-red-500" },
    { name: "YouTube", icon: "📺", color: "text-red-600" },
    { name: "Snapchat", icon: "👻", color: "text-yellow-400" }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Social Media Manager",
      company: "Creative Agency Co.",
      content: "This scheduler has saved us 10+ hours per week. The analytics are incredible and the optimal timing feature has increased our engagement by 150%.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "E-commerce Owner",
      company: "StyleTrend Store",
      content: "Managing 5 social accounts used to be overwhelming. Now I can schedule everything in advance and focus on growing my business.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      role: "Content Creator",
      company: "Lifestyle Blogger",
      content: "The AI suggestions for posting times and hashtags have been game-changing. My follower growth has increased by 200% in just 3 months.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">📱</span>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 neon-text">
                  Social Media Scheduler
                </h1>
                <p className="text-xl text-cyan-400 font-semibold">Schedule, Analyze, and Optimize</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline your social media strategy with our AI-powered scheduler. 
              Post consistently, engage your audience, and grow your following across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Connect All Your Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from one powerful dashboard
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="cyber-card hologram-card text-center">
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className={`font-semibold ${platform.color}`}>{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to dominate social media marketing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start free, scale as you grow. No hidden fees, cancel anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'cyber-button' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Trusted by 10,000+ Users
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers are saying about their results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
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
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses growing their social media presence with our powerful scheduler. 
              Start your free trial today - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                📞 Call (302) 464-0950
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              14-day free trial • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialSchedulerPage;