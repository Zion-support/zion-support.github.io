'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap, 
  Target, 
  CheckCircle,
  Star,
  ArrowRight,
  Share2,
  MessageSquare,
  Image,
  Video,
  Hash,
  AtSign,
  Heart,
  ThumbsUp,
  Eye,
  Send,
  Edit,
  Trash2,
  Plus,
  Filter,
  Search,
  Settings,
  Bell,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Lock,
  Shield,
  Award,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Tiktok,
  Pinterest
} from 'lucide-react';

const AiSocialMediaSchedulerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Content Generation",
      description: "Generate engaging posts, captions, and hashtags using advanced AI algorithms",
      benefits: ["10x faster content creation", "Brand voice consistency", "Trending hashtag suggestions"]
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      title: "Smart Scheduling",
      description: "AI determines optimal posting times based on your audience engagement patterns",
      benefits: ["40% higher engagement", "Automated posting", "Cross-platform sync"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics and insights to track performance across all platforms",
      benefits: ["Real-time metrics", "ROI tracking", "Audience insights"]
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: "Team Collaboration",
      description: "Collaborate with your team with approval workflows and role-based permissions",
      benefits: ["Multi-user access", "Approval workflows", "Content calendar sharing"]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Enterprise Security",
      description: "Bank-level security with 256-bit encryption and SOC 2 compliance",
      benefits: ["Data encryption", "Secure API access", "Regular security audits"]
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      title: "Multi-Platform Support",
      description: "Manage all major social media platforms from one unified dashboard",
      benefits: ["8+ platforms supported", "Unified interface", "Cross-platform analytics"]
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, color: 'text-pink-400' },
    { name: 'Twitter', icon: <Twitter className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, color: 'text-blue-600' },
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, color: 'text-blue-700' },
    { name: 'YouTube', icon: <Youtube className="w-6 h-6" />, color: 'text-red-500' },
    { name: 'TikTok', icon: <Tiktok className="w-6 h-6" />, color: 'text-black' },
    { name: 'Pinterest', icon: <Pinterest className="w-6 h-6" />, color: 'text-red-600' }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29.99",
      period: "/month",
      description: "Perfect for small businesses and influencers",
      features: [
        "3 social media accounts",
        "30 posts per month",
        "Basic AI content generation",
        "Standard analytics",
        "Mobile app access",
        "Email support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$79.99",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "10 social media accounts",
        "Unlimited posts",
        "Advanced AI features",
        "Detailed analytics & reporting",
        "Team collaboration (up to 5 users)",
        "Priority support",
        "Content calendar",
        "Hashtag research"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$199.99",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited accounts",
        "Everything in Professional",
        "White-label solution",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced team management",
        "Custom training"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Social Media Manager",
      company: "Digital Marketing Agency",
      content: "AI Social Media Scheduler increased our client engagement by 65% and saved us 15 hours per week. The AI content suggestions are incredibly accurate and engaging.",
      rating: 5,
      improvement: "65% engagement increase"
    },
    {
      name: "David Kim",
      role: "E-commerce Owner",
      company: "TechGear Store",
      content: "The optimal posting time feature alone increased our sales by 30%. The platform is intuitive and the analytics help us make data-driven decisions.",
      rating: 5,
      improvement: "30% sales increase"
    },
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      company: "Independent",
      content: "As a solo creator, this tool is a game-changer. The AI helps me maintain consistent posting and the analytics show me exactly what content performs best.",
      rating: 5,
      improvement: "3x content output"
    }
  ];

  const stats = [
    { number: "100,000+", label: "Posts Scheduled Daily", icon: <Send className="w-6 h-6" /> },
    { number: "50,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "65%", label: "Average Engagement Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "4.8/5", label: "User Rating", icon: <Star className="w-6 h-6" /> }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Content Creation",
      description: "Use AI to generate engaging posts, captions, and hashtags tailored to your brand voice",
      icon: <Edit className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Smart Scheduling",
      description: "AI analyzes your audience data to determine optimal posting times for maximum engagement",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Multi-Platform Publishing",
      description: "Automatically publish to all your connected social media platforms simultaneously",
      icon: <Share2 className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Performance Analytics",
      description: "Track engagement, reach, and ROI with comprehensive analytics and insights",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Social Media Scheduler - Intelligent Content Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media scheduling with content generation, optimal timing, and multi-platform management. Boost engagement by 65% with intelligent automation." />
        <meta name="keywords" content="AI social media scheduler, content management, social media automation, content generation, social media analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-media-scheduler" />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Social Media Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Social Media Scheduler
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Intelligent Content Management & Scheduling
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your social media strategy with AI-powered content generation, smart scheduling, 
            and comprehensive analytics. Increase engagement by 65% while saving 15+ hours per week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Free Trial
            </button>
            <button 
              onClick={() => setShowPricing(true)}
              className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg font-medium"
            >
              View Pricing
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Connect All Your Platforms
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Manage all your social media accounts from one unified dashboard
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className={`${platform.color} mb-3 flex justify-center`}>
                {platform.icon}
              </div>
              <div className="text-white font-medium text-sm">
                {platform.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform automates content creation, scheduling, and analytics 
            to maximize your social media impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Transform your social media strategy in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their social media strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card p-8">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-cyan-400">{testimonial.role}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
                <div className="text-sm text-green-400 font-medium mt-2">
                  {testimonial.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      {showPricing && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-cyan-400 border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'cyber-button' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="cyber-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media Strategy?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of users who have already revolutionized their social media management 
            with our AI-powered scheduling platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Your Free Trial
            </button>
            <a 
              href="tel:+13024640950"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg font-medium"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiSocialMediaSchedulerPage;