import { ArrowRight, Target, Users, BarChart3, Mail, Zap, Globe, Star, CheckCircle, Mail, Smartphone, MapPin, TrendingUp, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionLeadMagnet() {
  const features = [
    {
      title: "AI Lead Scoring",
      description: "Intelligent lead scoring algorithm that identifies high-value prospects and prioritizes follow-ups",
      icon: <Target className="w-6 h-6" />,
      benefit: "3x higher conversion"
    },
    {
      title: "Automated Nurturing",
      description: "Personalized email sequences and drip campaigns that nurture leads through the entire sales funnel",
      icon: <Mail className="w-6 h-6" />,
      benefit: "24/7 lead nurturing"
    },
    {
      title: "Multi-Channel Capture",
      description: "Capture leads from websites, social media, events, and offline sources with unified tracking",
      icon: <Globe className="w-6 h-6" />,
      benefit: "Complete lead visibility"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive analytics dashboard with conversion tracking, ROI analysis, and performance insights",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Data-driven decisions"
    },
    {
      title: "CRM Integration",
      description: "Seamless integration with popular CRMs including Salesforce, HubSpot, and Pipedrive",
      icon: <Users className="w-6 h-6" />,
      benefit: "Unified workflow"
    },
    {
      title: "Lead Enrichment",
      description: "Automatically enrich lead data with company information, social profiles, and contact details",
      icon: <Zap className="w-6 h-6" />,
      benefit: "Complete lead profiles"
    }
  ];

  const leadSources = [
    {
      name: "Website Forms",
      description: "Smart forms with conditional logic and progressive profiling",
      icon: <Globe className="w-8 h-8" />,
      conversion: "25%"
    },
    {
      name: "Social Media",
      description: "Lead capture from Facebook, LinkedIn, Twitter, and Instagram",
      icon: <Users className="w-8 h-8" />,
      conversion: "18%"
    },
    {
      name: "Email Campaigns",
      description: "Automated email sequences with personalized content",
      icon: <Mail className="w-8 h-8" />,
      conversion: "22%"
    },
    {
      name: "Events & Webinars",
      description: "Lead capture from virtual and in-person events",
      icon: <Award className="w-8 h-8" />,
      conversion: "35%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 leads/month",
        "Basic lead scoring",
        "Email automation",
        "Website integration",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 leads/month",
        "Advanced lead scoring",
        "Multi-channel capture",
        "CRM integration",
        "Priority support",
        "Advanced analytics",
        "Lead enrichment"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited leads",
        "AI-powered insights",
        "Custom integrations",
        "Dedicated support",
        "24/7 phone support",
        "Custom reporting",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "B2B SaaS Company",
      role: "Marketing Director",
      content: "Zion Lead Magnet increased our lead quality by 300%. The AI scoring helps us focus on the most promising prospects.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Chen",
      company: "E-commerce Platform",
      role: "Sales Manager",
      content: "The automated nurturing sequences are incredible. We're converting 40% more leads without any manual work.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Sarah Johnson",
      company: "Consulting Firm",
      role: "Business Development",
      content: "The multi-channel capture is a game-changer. We're getting leads from sources we never thought possible.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Lead Magnet - AI-Powered Lead Generation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Generate more qualified leads with Zion Lead Magnet. AI-powered lead scoring, automated nurturing, multi-channel capture, and advanced analytics for maximum conversion."
        />
        <meta
          name="keywords"
          content="lead generation, lead scoring, lead nurturing, marketing automation, lead capture, CRM integration, sales funnel, lead analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-lead-magnet" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 mb-6">
              <Target className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">Lead Generation Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400">
                Zion Lead Magnet
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most powerful lead generation platform powered by AI. Capture, score, and nurture 
              high-quality leads with automated workflows and intelligent insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-orange-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Target className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">3x</div>
                <div className="text-gray-300 text-sm">Higher Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">More Qualified Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Automated Nurturing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Integrations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Sources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Capture Leads from Everywhere
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multi-channel lead capture with the highest conversion rates in the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadSources.map((source, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {source.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {source.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {source.description}
                  </p>
                  <div className="flex items-center justify-center text-orange-400 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {source.conversion} Conversion
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
                Powerful Lead Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to generate, score, and convert high-quality leads.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-orange-400 text-sm font-medium">
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
                Scale Your Lead Generation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your lead generation needs and grow your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-orange-500/50 shadow-2xl shadow-orange-500/20' 
                      : 'border-white/20 hover:border-orange-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:from-orange-600 hover:to-purple-700 shadow-lg hover:shadow-orange-500/25'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
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
                Trusted by Sales Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what sales and marketing professionals say about Zion Lead Magnet
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-orange-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Generate More Qualified Leads Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using Zion Lead Magnet to generate and convert 
              more qualified leads. Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-orange-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-orange-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-orange-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-orange-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Target className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}