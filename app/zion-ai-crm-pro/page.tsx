import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  Mail, 
  Phone, 
  Calendar, 
  Target, 
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
  Smartphone,
  Monitor,
  Award,
  Sparkles
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiCrmProPage = () => {
  const features = [
    {
      title: "AI-Powered Lead Scoring",
      description: "Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns, engagement history, and conversion probability.",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["95% accuracy in lead qualification", "3x faster lead processing", "Automated follow-up triggers"]
    },
    {
      title: "Intelligent Contact Management",
      description: "Smart contact database with AI-powered data enrichment, duplicate detection, and relationship mapping across all touchpoints.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["Auto data enrichment", "Duplicate prevention", "Relationship insights"]
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Real-time analytics and forecasting with AI-driven insights for sales performance, pipeline health, and revenue predictions.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["Revenue forecasting", "Sales trend analysis", "Performance optimization"]
    },
    {
      title: "Automated Email Sequences",
      description: "AI-generated personalized email campaigns that adapt based on customer behavior, preferences, and engagement patterns.",
      icon: <Mail className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: ["40% higher open rates", "Personalized content", "Behavioral triggers"]
    },
    {
      title: "Smart Task Automation",
      description: "Automatically create and assign tasks based on customer interactions, deal stages, and AI-identified opportunities.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      benefits: ["Workflow automation", "Smart task prioritization", "Team coordination"]
    },
    {
      title: "Advanced Reporting Suite",
      description: "Comprehensive reporting with custom dashboards, KPI tracking, and AI-generated insights for data-driven decision making.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      benefits: ["Custom dashboards", "KPI tracking", "AI insights"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "per month",
      description: "Perfect for small teams getting started with AI CRM",
      features: [
        "Up to 1,000 contacts",
        "Basic AI lead scoring",
        "Email automation (50 campaigns)",
        "Standard reporting",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$399",
      period: "per month",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 10,000 contacts",
        "Advanced AI analytics",
        "Unlimited email campaigns",
        "Custom dashboards",
        "Phone & email support",
        "API access",
        "Advanced automation",
        "Team collaboration tools"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited contacts",
        "Full AI suite",
        "Custom integrations",
        "Advanced security",
        "Dedicated support",
        "Custom training",
        "White-label options",
        "Priority support"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "Sales Director",
      content: "Zion AI CRM Pro increased our sales conversion by 65% in just 3 months. The AI lead scoring is incredibly accurate and saves us hours every day.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "GrowthCorp",
      role: "VP of Sales",
      content: "The predictive analytics helped us identify our best opportunities and optimize our sales process. Revenue increased by 40% year-over-year.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Solutions",
      role: "Sales Manager",
      content: "The automation features are game-changing. Our team can focus on building relationships instead of managing data entry and follow-ups.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "65%", label: "Average Sales Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "95%", label: "Lead Scoring Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "40%", label: "Time Saved on Admin", icon: <Clock className="w-6 h-6" /> },
    { number: "10,000+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI CRM Pro - AI-Powered Customer Relationship Management | Zion Tech Group"
        description="Transform your sales process with Zion AI CRM Pro. Advanced AI lead scoring, predictive analytics, automated workflows, and intelligent contact management. Start your free trial today!"
        keywords="AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, contact management, sales software, CRM software, AI-powered CRM"
        canonical="https://ziontechgroup.com/zion-ai-crm-pro"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">#1 AI-Powered CRM Solution</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Zion AI CRM Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Revolutionize your sales process with AI-powered customer relationship management. 
            Automate lead scoring, predict customer behavior, and boost your sales performance with intelligent automation.
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
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Leverage cutting-edge artificial intelligence to transform your sales process and maximize revenue potential.
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
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include 14-day free trial with no credit card required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Sales Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming their sales process with Zion AI CRM Pro
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
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of sales teams already using Zion AI CRM Pro to increase revenue, 
              improve efficiency, and build stronger customer relationships.
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

export default ZionAiCrmProPage;