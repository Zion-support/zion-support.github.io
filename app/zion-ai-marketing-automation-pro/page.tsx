import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  BarChart3, 
  Mail, 
  Smartphone, 
  Calendar, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  CheckCircle, 
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Globe,
  Monitor,
  Award,
  Sparkles,
  Send,
  Eye,
  MousePointer,
  MessageSquare
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiMarketingAutomationProPage = () => {
  const features = [
    {
      title: "AI-Powered Campaign Optimization",
      description: "Automatically optimize your marketing campaigns using machine learning algorithms that analyze performance data and adjust targeting, timing, and content in real-time.",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["40% higher conversion rates", "Real-time optimization", "Automated A/B testing"]
    },
    {
      title: "Intelligent Lead Nurturing",
      description: "Create sophisticated lead nurturing sequences that adapt based on customer behavior, engagement patterns, and demographic data using AI-driven personalization.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["3x more qualified leads", "Behavioral triggers", "Personalized content"]
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive analytics with AI-powered insights, predictive modeling, and automated reporting to track ROI and optimize marketing performance.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["Predictive analytics", "ROI tracking", "Automated insights"]
    },
    {
      title: "Multi-Channel Campaign Management",
      description: "Seamlessly manage campaigns across email, social media, SMS, and web push notifications with unified automation and cross-channel optimization.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: ["Unified dashboard", "Cross-channel sync", "Consistent messaging"]
    },
    {
      title: "Smart Content Generation",
      description: "AI-powered content creation that generates personalized emails, social media posts, and ad copy based on audience preferences and performance data.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      benefits: ["Auto content creation", "Brand voice consistency", "Performance-based optimization"]
    },
    {
      title: "Advanced Segmentation",
      description: "Intelligent customer segmentation using AI to identify high-value segments, predict customer lifetime value, and create targeted campaigns.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      benefits: ["Dynamic segmentation", "Lifetime value prediction", "Behavioral targeting"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "per month",
      description: "Perfect for small businesses starting with marketing automation",
      features: [
        "Up to 5,000 contacts",
        "Basic AI optimization",
        "Email & SMS campaigns",
        "Standard analytics",
        "Email support",
        "Mobile app access",
        "5 automated workflows"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Advanced features for growing marketing teams",
      features: [
        "Up to 25,000 contacts",
        "Advanced AI features",
        "Multi-channel campaigns",
        "Advanced analytics",
        "Phone & email support",
        "API access",
        "Unlimited workflows",
        "A/B testing tools",
        "Lead scoring"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "per month",
      description: "Complete solution for large marketing organizations",
      features: [
        "Unlimited contacts",
        "Full AI suite",
        "Custom integrations",
        "Advanced security",
        "Dedicated support",
        "Custom training",
        "White-label options",
        "Priority support",
        "Custom reporting"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Digital Marketing Pro",
      role: "Marketing Director",
      content: "Zion AI Marketing Automation Pro increased our email open rates by 60% and our conversion rates by 45%. The AI optimization is incredible!",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Thompson",
      company: "GrowthTech Solutions",
      role: "VP of Marketing",
      content: "The predictive analytics helped us identify our most valuable customer segments and optimize our campaigns accordingly. ROI increased by 80%.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Chen",
      company: "E-commerce Plus",
      role: "Head of Marketing",
      content: "The multi-channel automation saves us hours every week. We can now focus on strategy instead of manual campaign management.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const stats = [
    { number: "60%", label: "Higher Open Rates", icon: <Eye className="w-6 h-6" /> },
    { number: "45%", label: "Conversion Increase", icon: <MousePointer className="w-6 h-6" /> },
    { number: "80%", label: "ROI Improvement", icon: <DollarSign className="w-6 h-6" /> },
    { number: "15,000+", label: "Active Campaigns", icon: <Send className="w-6 h-6" /> }
  ];

  const automationWorkflows = [
    {
      title: "Welcome Series",
      description: "Automated onboarding sequence for new subscribers",
      steps: ["Welcome email", "Product introduction", "Value proposition", "Call-to-action"],
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Abandoned Cart Recovery",
      description: "Win back customers who left items in their cart",
      steps: ["Cart abandonment email", "Reminder email", "Discount offer", "Final notice"],
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Lead Nurturing",
      description: "Convert prospects into customers with targeted content",
      steps: ["Interest assessment", "Content delivery", "Engagement tracking", "Sales handoff"],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Re-engagement Campaign",
      description: "Reactivate dormant subscribers and customers",
      steps: ["Inactivity detection", "Re-engagement email", "Special offer", "Unsubscribe option"],
      icon: <MessageSquare className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Marketing Automation Pro - AI-Powered Marketing Platform | Zion Tech Group"
        description="Transform your marketing with Zion AI Marketing Automation Pro. AI-powered campaign optimization, intelligent lead nurturing, multi-channel automation, and advanced analytics. Start your free trial today!"
        keywords="marketing automation, AI marketing, email automation, lead nurturing, campaign optimization, marketing analytics, marketing software, AI-powered marketing, marketing platform"
        canonical="https://ziontechgroup.com/zion-ai-marketing-automation-pro"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">#1 AI Marketing Automation Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Zion AI Marketing Automation Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Supercharge your marketing with AI-powered automation. Create intelligent campaigns, 
            nurture leads automatically, and maximize ROI with advanced analytics and optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful AI Marketing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Leverage artificial intelligence to create, optimize, and scale your marketing campaigns automatically.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Automation Workflows Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pre-Built Automation Workflows
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our library of proven automation workflows designed for maximum impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationWorkflows.map((workflow, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  {workflow.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center">
                  {workflow.title}
                </h3>
                <p className="text-gray-300 text-sm text-center mb-4">
                  {workflow.description}
                </p>
                <ul className="space-y-1">
                  {workflow.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-xs text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your marketing needs. All plans include 14-day free trial with no credit card required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
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
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Marketing Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming their marketing with Zion AI Marketing Automation Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of marketing teams already using Zion AI Marketing Automation Pro to 
              increase conversions, save time, and maximize ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAiMarketingAutomationProPage;