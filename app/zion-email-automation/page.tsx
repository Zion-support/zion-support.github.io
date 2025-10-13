import { ArrowRight, Mail, Zap, BarChart3, Users, Target, Globe, Star, CheckCircle, Mail, Smartphone, MapPin, TrendingUp, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionEmailAutomation() {
  const features = [
    {
      title: "AI-Powered Personalization",
      description: "Create highly personalized email campaigns with AI that adapts content based on recipient behavior and preferences",
      icon: <Target className="w-6 h-6" />,
      benefit: "3x higher open rates"
    },
    {
      title: "Advanced Automation",
      description: "Build complex email workflows with triggers, conditions, and multi-step sequences that nurture leads automatically",
      icon: <Zap className="w-6 h-6" />,
      benefit: "24/7 lead nurturing"
    },
    {
      title: "Smart Segmentation",
      description: "Intelligent audience segmentation based on behavior, demographics, and engagement patterns for targeted campaigns",
      icon: <Users className="w-6 h-6" />,
      benefit: "Precise targeting"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive email analytics with open rates, click-through rates, conversions, and ROI tracking",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Data-driven optimization"
    },
    {
      title: "A/B Testing",
      description: "Built-in A/B testing tools to optimize subject lines, content, send times, and design for maximum performance",
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: "Continuous improvement"
    },
    {
      title: "Global Delivery",
      description: "High-deliverability email infrastructure with global reach and compliance with international email regulations",
      icon: <Globe className="w-6 h-6" />,
      benefit: "Maximum deliverability"
    }
  ];

  const automationTypes = [
    {
      name: "Welcome Series",
      description: "Automated onboarding sequences for new subscribers and customers",
      icon: <Mail className="w-8 h-8" />,
      conversion: "25%"
    },
    {
      name: "Lead Nurturing",
      description: "Drip campaigns that nurture leads through the sales funnel",
      icon: <Target className="w-8 h-8" />,
      conversion: "18%"
    },
    {
      name: "Cart Abandonment",
      description: "Recovery campaigns for abandoned shopping carts",
      icon: <Send className="w-8 h-8" />,
      conversion: "30%"
    },
    {
      name: "Re-engagement",
      description: "Campaigns to win back inactive subscribers and customers",
      icon: <Zap className="w-8 h-8" />,
      conversion: "15%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 emails/month",
        "Basic automation",
        "Email templates",
        "Basic analytics",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 50,000 emails/month",
        "Advanced automation",
        "A/B testing",
        "Advanced analytics",
        "Priority support",
        "5 user accounts",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "AI personalization",
        "Custom integrations",
        "Dedicated support",
        "24/7 phone support",
        "Unlimited users",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Amanda Foster",
      company: "E-commerce Store",
      role: "Marketing Manager",
      content: "Zion Email Automation increased our email revenue by 200%. The AI personalization is incredible.",
      rating: 5,
      avatar: "AF"
    },
    {
      name: "Robert Kim",
      company: "SaaS Startup",
      role: "Growth Manager",
      content: "The automation workflows are game-changing. We're nurturing leads 24/7 without any manual work.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Maria Garcia",
      company: "Digital Agency",
      role: "Email Specialist",
      content: "The deliverability rates are outstanding. Our emails are reaching the inbox every time.",
      rating: 5,
      avatar: "MG"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Email Automation - AI-Powered Email Marketing Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Automate your email marketing with Zion Email Automation. AI-powered personalization, advanced automation workflows, and high-deliverability email campaigns."
        />
        <meta
          name="keywords"
          content="email marketing, email automation, email campaigns, lead nurturing, email personalization, A/B testing, email analytics, marketing automation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-email-automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-6">
              <Mail className="w-4 h-4 text-teal-400 mr-2" />
              <span className="text-teal-400 text-sm font-medium">Email Marketing Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-cyan-400">
                Zion Email Automation
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-purple-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most powerful email marketing platform powered by AI. Create, automate, and optimize 
              email campaigns that convert with intelligent personalization and advanced analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-teal-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Mail className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">3x</div>
                <div className="text-gray-300 text-sm">Higher Open Rates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">200%</div>
                <div className="text-gray-300 text-sm">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Deliverability Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Automated Campaigns</div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Automation Workflows
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Automate your email marketing with proven workflows that drive results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-teal-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex items-center justify-center text-teal-400 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {type.conversion} Conversion
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Email Marketing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, send, and optimize high-converting email campaigns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-teal-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Scale Your Email Marketing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your email marketing needs and grow your audience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-teal-500/50 shadow-2xl shadow-teal-500/20' 
                      : 'border-white/20 hover:border-teal-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-teal-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-purple-600 text-white hover:from-teal-600 hover:to-purple-700 shadow-lg hover:shadow-teal-500/25'
                        : 'border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Email Marketers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what email marketing professionals say about Zion Email Automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-teal-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Automate Your Email Marketing Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of marketers using Zion Email Automation to grow their audience and increase revenue. 
              Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-teal-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-teal-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-teal-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-teal-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Mail className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}