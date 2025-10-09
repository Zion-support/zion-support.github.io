'use client';
import React, { useState, useEffect } from 'react';
import { Share2, Calendar, BarChart, Users, Zap, CheckCircle, Star, ArrowRight, Clock, Target, TrendingUp, Shield, Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

const AISocialMediaManagerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const platforms = [
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, color: 'text-pink-400' },
    { name: 'Twitter', icon: <Twitter className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, color: 'text-blue-600' },
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, color: 'text-blue-500' },
    { name: 'YouTube', icon: <Youtube className="w-6 h-6" />, color: 'text-red-500' },
    { name: 'TikTok', icon: <Share2 className="w-6 h-6" />, color: 'text-white' }
  ];

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "AI Content Calendar",
      description: "Intelligent content planning with optimal posting times and trending topic suggestions.",
      benefit: "Increase engagement by 400%"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Auto Posting",
      description: "Schedule and automatically post content across all platforms with AI optimization.",
      benefit: "Save 30+ hours per week"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics with AI insights, competitor analysis, and performance predictions.",
      benefit: "Data-driven decisions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Insights",
      description: "AI-powered audience analysis to understand demographics, interests, and behavior patterns.",
      benefit: "Target the right audience"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Hashtag Optimization",
      description: "AI suggests trending hashtags and optimal posting times for maximum reach.",
      benefit: "Boost reach by 500%"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Content Moderation",
      description: "AI-powered content moderation to ensure brand safety and compliance.",
      benefit: "Protect your brand"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 3 social accounts",
        "50 posts per month",
        "Basic analytics",
        "Email support",
        "Content calendar",
        "Hashtag suggestions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10 social accounts",
        "Unlimited posts",
        "Advanced analytics & AI insights",
        "Priority support",
        "Competitor analysis",
        "Audience insights",
        "Auto-optimization",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited social accounts",
        "Unlimited posts",
        "Advanced AI automation",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Advanced moderation",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Fashion Brand Co.",
      role: "Social Media Manager",
      content: "AI Social Media Manager increased our engagement by 400% and saved us 30 hours per week. The AI insights are incredible!",
      rating: 5
    },
    {
      name: "David Kim",
      company: "Tech Startup",
      role: "Marketing Director",
      content: "The automated posting and hashtag optimization features helped us grow our following by 200% in just 3 months.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      company: "E-commerce Store",
      role: "Digital Marketing Lead",
      content: "The competitor analysis and audience insights gave us the edge we needed to outperform our competition.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
              <Share2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Social Media Manager
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Master Social Media with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your social media presence with our AI-powered management platform. 
              Increase engagement by 400%, boost reach by 500%, and save 30+ hours per week 
              with intelligent content planning, automated posting, and advanced analytics.
            </p>
            
            {/* Platform Support */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-6">Supported Platforms</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {platforms.map((platform, index) => (
                  <div key={index} className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800/50 ${platform.color}`}>
                    {platform.icon}
                    <span className="font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">400%</div>
                <div className="text-gray-300">Engagement Increase</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">500%</div>
                <div className="text-gray-300">Reach Boost</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">30+</div>
                <div className="text-gray-300">Hours Saved Per Week</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
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
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Social Media Manager to grow their presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagerPage;