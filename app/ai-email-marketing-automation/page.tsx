'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Send, 
  Users, 
  BarChart3, 
  Zap, 
  Target, 
  CheckCircle,
  Star,
  ArrowRight,
  TrendingUp,
  Eye,
  MousePointer,
  Clock,
  Calendar,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Settings,
  Bell,
  Globe,
  Smartphone,
  Monitor,
  Lock,
  Shield,
  Award,
  Activity,
  PieChart,
  LineChart,
  MessageSquare,
  AtSign,
  Hash,
  Image,
  Video,
  FileText,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square,
  RotateCcw,
  Copy,
  Share2,
  Heart,
  ThumbsUp,
  AlertCircle,
  Info,
  Check,
  X,
  DollarSign,
  Percent,
  TrendingDown
} from 'lucide-react';

const AiEmailMarketingAutomationPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Email Generation",
      description: "Generate compelling email content, subject lines, and CTAs using advanced AI algorithms",
      benefits: ["10x faster content creation", "Higher open rates", "Personalized messaging"]
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Smart Segmentation",
      description: "AI automatically segments your audience based on behavior, preferences, and engagement patterns",
      benefits: ["40% higher click-through rates", "Reduced unsubscribes", "Better deliverability"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics and insights to track performance and optimize campaigns",
      benefits: ["Real-time metrics", "ROI tracking", "A/B testing insights"]
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-400" />,
      title: "Automated Workflows",
      description: "Create sophisticated email sequences that nurture leads and convert prospects automatically",
      benefits: ["24/7 lead nurturing", "Increased conversions", "Reduced manual work"]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Deliverability Optimization",
      description: "AI ensures your emails reach the inbox with advanced deliverability monitoring and optimization",
      benefits: ["98% deliverability rate", "Spam score monitoring", "Reputation management"]
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: "Personalization Engine",
      description: "Dynamic content personalization based on user behavior, preferences, and demographics",
      benefits: ["Higher engagement", "Better customer experience", "Increased sales"]
    }
  ];

  const automationWorkflows = [
    {
      name: "Welcome Series",
      description: "Onboard new subscribers with a 5-email sequence",
      icon: <Mail className="w-6 h-6" />,
      metrics: "35% higher engagement"
    },
    {
      name: "Abandoned Cart Recovery",
      description: "Recover lost sales with intelligent follow-up emails",
      icon: <ShoppingCart className="w-6 h-6" />,
      metrics: "25% recovery rate"
    },
    {
      name: "Re-engagement Campaign",
      description: "Win back inactive subscribers with targeted content",
      icon: <RefreshCw className="w-6 h-6" />,
      metrics: "20% reactivation rate"
    },
    {
      name: "Birthday & Anniversary",
      description: "Celebrate special occasions with personalized offers",
      icon: <Heart className="w-6 h-6" />,
      metrics: "50% higher open rates"
    },
    {
      name: "Product Recommendations",
      description: "Suggest relevant products based on purchase history",
      icon: <Target className="w-6 h-6" />,
      metrics: "30% increase in sales"
    },
    {
      name: "Post-Purchase Follow-up",
      description: "Nurture customers after purchase with valuable content",
      icon: <CheckCircle className="w-6 h-6" />,
      metrics: "40% repeat purchase rate"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49.99",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 subscribers",
        "5,000 emails per month",
        "Basic AI content generation",
        "Email templates",
        "Basic analytics",
        "Email support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$149.99",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 10,000 subscribers",
        "Unlimited emails",
        "Advanced AI features",
        "Automation workflows",
        "Advanced analytics & reporting",
        "A/B testing",
        "Priority support",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$399.99",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited subscribers",
        "Everything in Professional",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced team management",
        "Custom training",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "Marketing Director",
      company: "E-commerce Store",
      content: "AI Email Marketing Automation increased our email revenue by 85% and reduced our campaign creation time by 70%. The AI-generated content performs better than our manual campaigns.",
      rating: 5,
      improvement: "85% revenue increase"
    },
    {
      name: "Sarah Chen",
      role: "Founder",
      company: "SaaS Startup",
      content: "The automation workflows are incredible. We set up a welcome series and saw a 40% increase in user activation. The platform is intuitive and the analytics are comprehensive.",
      rating: 5,
      improvement: "40% activation increase"
    },
    {
      name: "David Thompson",
      role: "Email Marketing Manager",
      company: "Digital Agency",
      content: "Our client's email performance improved dramatically. Open rates increased by 60% and click-through rates by 45%. The AI personalization is game-changing.",
      rating: 5,
      improvement: "60% open rate increase"
    }
  ];

  const stats = [
    { number: "2M+", label: "Emails Sent Daily", icon: <Send className="w-6 h-6" /> },
    { number: "50,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "85%", label: "Average Revenue Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "4.9/5", label: "User Rating", icon: <Star className="w-6 h-6" /> }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "AI Content Generation",
      description: "Generate compelling email content, subject lines, and CTAs using advanced AI algorithms",
      icon: <Edit className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Smart Segmentation",
      description: "AI automatically segments your audience based on behavior and preferences for targeted messaging",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Automated Workflows",
      description: "Create sophisticated email sequences that nurture leads and convert prospects automatically",
      icon: <Clock className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Performance Optimization",
      description: "AI continuously optimizes campaigns based on performance data and user behavior",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Marketing Automation - Intelligent Email Campaigns | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email marketing automation with content generation, smart segmentation, and automated workflows. Increase revenue by 85% with intelligent email campaigns." />
        <meta name="keywords" content="AI email marketing, email automation, email campaigns, email marketing automation, email personalization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-email-marketing-automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Email Marketing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Email Marketing Automation
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Intelligent Email Campaigns That Convert
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your email marketing with AI-powered content generation, smart segmentation, 
            and automated workflows. Increase revenue by 85% while saving 70% of your campaign creation time.
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

      {/* Automation Workflows */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pre-Built Automation Workflows
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Launch powerful email sequences with our ready-to-use automation templates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationWorkflows.map((workflow, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                  {workflow.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{workflow.name}</h3>
                  <p className="text-sm text-cyan-400 font-medium">{workflow.metrics}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                {workflow.description}
              </p>
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
            Our AI-powered platform automates email marketing and provides intelligent insights 
            to maximize your campaign performance.
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
            Transform your email marketing strategy in 4 simple steps
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
            Join thousands of satisfied users who have transformed their email marketing
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
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of users who have already revolutionized their email marketing 
            with our AI-powered automation platform.
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

export default AiEmailMarketingAutomationPage;