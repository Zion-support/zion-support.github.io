<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Mail, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail as MailIcon,
  MapPin,
  Zap,
  Shield,
  Clock,
  Award,
  BarChart3,
  Users,
  Send,
  Eye
} from 'lucide-react';

const AiEmailMarketingProPage: React.FC = () => {
  const features = [
    "AI-Powered Subject Line Optimization",
    "Intelligent Send Time Optimization",
    "Advanced Segmentation & Targeting",
    "Automated A/B Testing",
    "Predictive Content Generation",
    "Behavioral Trigger Automation",
    "Advanced Analytics & Reporting",
    "Deliverability Optimization",
    "Personalization Engine",
    "List Health Monitoring"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5,000 subscribers",
        "Basic AI optimization",
        "Email support",
        "Standard templates",
        "Basic analytics"
=======
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Play,
  Activity,
  Shield,
  Brain,
  Target,
  Zap,
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  Send,
  Eye,
  MousePointer,
  DollarSign
} from 'lucide-react';

const AiEmailMarketingProPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Generate compelling email subject lines, content, and CTAs using advanced AI that understands your audience.",
      benefits: ["Subject line optimization", "Personalized content", "A/B testing automation", "Brand voice consistency"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Segmentation",
      description: "AI-powered audience segmentation based on behavior, preferences, and engagement patterns.",
      benefits: ["Behavioral segmentation", "Predictive analytics", "Dynamic lists", "Personalization engine"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive email performance metrics with predictive insights and ROI tracking.",
      benefits: ["Real-time metrics", "ROI tracking", "Predictive analytics", "Competitor benchmarking"]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Automated Workflows",
      description: "Create sophisticated email sequences with triggers, delays, and conditional logic.",
      benefits: ["Drip campaigns", "Behavioral triggers", "Conditional logic", "Multi-channel integration"]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Email Design AI",
      description: "AI-powered email template generation and optimization for maximum engagement and deliverability.",
      benefits: ["Template generation", "Mobile optimization", "Deliverability optimization", "Visual testing"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Deliverability Optimization",
      description: "AI-driven deliverability monitoring and optimization to ensure your emails reach the inbox.",
      benefits: ["Inbox placement", "Spam score monitoring", "Reputation management", "IP warming"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 subscribers",
        "Unlimited emails",
        "Basic templates",
        "Email analytics",
        "Email support",
        "5GB storage"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
      ],
      popular: false
    },
    {
      name: "Professional",
<<<<<<< HEAD
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25,000 subscribers",
        "Advanced AI insights",
        "Priority support",
        "Advanced analytics",
        "Automation workflows",
        "Custom templates"
=======
      price: "$79",
      period: "month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 10,000 subscribers",
        "Unlimited emails",
        "AI content generation",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "A/B testing",
        "Automation workflows"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
<<<<<<< HEAD
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited subscribers",
        "Full AI suite & custom models",
        "24/7 dedicated support",
        "White-label solution",
        "Custom development",
        "Advanced integrations"
=======
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited subscribers",
        "Unlimited emails",
        "Full AI suite",
        "Custom integrations",
        "24/7 dedicated support",
        "Unlimited storage",
        "Advanced security",
        "White-label options"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
      ],
      popular: false
    }
  ];

<<<<<<< HEAD
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase Open Rates by 250%",
      description: "AI-optimized subject lines and send times dramatically improve your email performance."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Boost Click-Through Rates by 180%",
      description: "Intelligent segmentation and personalization deliver highly targeted content to your audience."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Grow Revenue by 300%",
      description: "Advanced automation and behavioral triggers convert more leads into customers."
    }
  ];

  const stats = [
    { number: "50M+", label: "Emails Sent", icon: <Send className="w-6 h-6" /> },
    { number: "250%", label: "Open Rate Increase", icon: <Eye className="w-6 h-6" /> },
    { number: "180%", label: "Click Rate Boost", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "AI Optimization", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Marketing Pro - Zion Tech Group | Intelligent Email Marketing Platform</title>
        <meta name="description" content="Revolutionize your email marketing with AI-powered optimization, automation, and analytics. Increase open rates, click-through rates, and revenue." />
        <meta name="keywords" content="AI email marketing, email automation, subject line optimization, email analytics, personalization, email campaigns" />
        <meta property="og:title" content="AI Email Marketing Pro - Intelligent Email Marketing Platform" />
        <meta property="og:description" content="AI-powered email marketing platform for enhanced engagement and conversion." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                AI-Powered Email Marketing
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Email Marketing
                </span>
                <br />
                <span className="text-white">Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your email marketing with AI-powered optimization, automation, 
                and analytics. Increase open rates, click-through rates, and drive more revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <MailIcon className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Intelligent Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Advanced AI capabilities that revolutionize your email marketing campaigns.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered email marketing delivers measurable business impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your email marketing needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-cyan-500/20'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Email Marketing?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us today to schedule a free demo and see how AI Email Marketing Pro can revolutionize your campaigns.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <MailIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
=======
  const testimonials = [
    {
      name: "Michael Rodriguez",
      company: "E-commerce Solutions",
      role: "Marketing Manager",
      content: "AI Email Marketing Pro increased our open rates by 45% and click-through rates by 60%. The AI content generation is incredibly accurate and saves us hours every week.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "TechStart Inc.",
      role: "Growth Marketing Lead",
      content: "The segmentation and personalization features have transformed our email campaigns. We've seen a 200% increase in conversion rates since implementing this platform.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Digital Agency Pro",
      role: "Account Director",
      content: "Managing multiple client email campaigns is now effortless. The automation and AI features have helped us scale our services while maintaining quality.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Marketing Pro - Automated Email Campaigns | Zion Tech Group</title>
        <meta name="description" content="Transform your email marketing with AI-powered content generation, smart segmentation, and automated workflows. Increase open rates by 45% and conversions by 200%." />
        <meta name="keywords" content="AI email marketing, email automation, email campaigns, email analytics, email segmentation, email personalization" />
        <meta property="og:title" content="AI Email Marketing Pro - Zion Tech Group" />
        <meta property="og:description" content="AI-powered email marketing platform with automated content generation and smart segmentation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-email-marketing-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Email Marketing Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Email Marketing Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your email marketing with AI-powered content generation, smart segmentation, 
                  and automated workflows. Increase open rates by 45% and conversions by 200%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Powerful Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to create, send, and optimize high-converting email campaigns with AI.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Simple Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your email marketing needs. All plans include our core AI features.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    What Our Clients Say
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of businesses that have transformed their email marketing with our AI platform.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Email Marketing?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start your free trial today and see how AI can revolutionize your email campaigns. 
                  No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
      </div>
    </>
  );
};

export default AiEmailMarketingProPage;