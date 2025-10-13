import { ArrowRight, Target, Mail, BarChart3, Users, Zap, Brain, CheckCircle, Mail, Phone, MapPin, Star, TrendingUp, MessageSquare, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIMarketingAutomationPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Personalization",
      description: "Create hyper-personalized campaigns that adapt to each customer's behavior and preferences in real-time"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Audience Segmentation",
      description: "Automatically segment audiences using AI to identify high-value prospects and optimize targeting"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Marketing Automation",
      description: "Design, send, and optimize email campaigns with AI-driven subject lines, content, and send times"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast campaign performance, customer lifetime value, and churn probability with 90% accuracy"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cross-Channel Automation",
      description: "Seamlessly orchestrate campaigns across email, social media, SMS, and web channels"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Scoring & Nurturing",
      description: "Automatically score leads and nurture them through personalized journeys based on their engagement"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5,000 contacts",
        "Basic automation",
        "Email campaigns",
        "Standard analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 50,000 contacts",
        "Advanced AI features",
        "Multi-channel campaigns",
        "Advanced analytics",
        "Priority support",
        "A/B testing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited contacts",
        "AI-powered insights",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "API access"
      ],
      popular: false
    }
  ];

  const results = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "300% Higher ROI",
      description: "AI-optimized campaigns deliver significantly better returns on marketing investment"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "85% Better Targeting",
      description: "AI-powered audience segmentation improves campaign relevance and engagement"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "60% Higher Open Rates",
      description: "Personalized subject lines and send times dramatically improve email performance"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "45% More Conversions",
      description: "Intelligent lead nurturing and scoring increase conversion rates significantly"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "E-commerce Solutions",
      role: "Marketing Director",
      content: "AI Marketing Automation Pro transformed our campaigns completely. We've seen a 400% increase in email engagement and 60% higher conversion rates.",
      rating: 5
    },
    {
      name: "Michael Torres",
      company: "SaaS Startup",
      role: "Growth Manager",
      content: "The AI-powered personalization is incredible. Our customers feel like we're reading their minds. Revenue increased by 250% in just 6 months.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      company: "Digital Agency",
      role: "Client Success Manager",
      content: "Our clients love the results. The predictive analytics help us optimize campaigns before they even launch. It's like having a crystal ball for marketing.",
      rating: 5
    }
  ];

  const integrations = [
    "Salesforce",
    "HubSpot",
    "Mailchimp",
    "Facebook Ads",
    "Google Ads",
    "Shopify",
    "WordPress",
    "Zapier",
    "Slack",
    "Microsoft Teams"
  ];

  return (
    <>
      <Helmet>
        <title>AI Marketing Automation Pro - Zion Tech Group | Intelligent Marketing Platform</title>
        <meta
          name="description"
          content="Revolutionary AI-powered marketing automation platform with personalization, predictive analytics, and cross-channel campaigns. Boost ROI by 300% and increase conversions by 45%."
        />
        <meta
          name="keywords"
          content="marketing automation, AI marketing, email marketing, lead nurturing, personalization, predictive analytics, campaign optimization, cross-channel marketing"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-marketing-automation-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 mb-6">
                <Target className="w-4 h-4 text-pink-400 mr-2" />
                <span className="text-pink-400 text-sm font-medium">AI-Powered Marketing</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Marketing Automation
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                  {" "}Pro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your marketing with AI-powered automation that personalizes every customer interaction. 
                Boost ROI by 300% and increase conversions by 45% with intelligent campaign optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-pink-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Target className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">300%</div>
                  <div className="text-gray-300 text-sm">Higher ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                  <div className="text-gray-300 text-sm">Better Targeting</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                  <div className="text-gray-300 text-sm">Higher Open Rates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">45%</div>
                  <div className="text-gray-300 text-sm">More Conversions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proven Marketing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  {" "}Results
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of marketers who have transformed their campaigns with AI-powered automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-600 flex items-center justify-center mb-4 mx-auto text-white group-hover:scale-110 transition-transform">
                    {result.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors">
                    {result.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {result.description}
                  </p>
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
                Powerful Marketing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  {" "}Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, manage, and optimize high-performing marketing campaigns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  {" "}Integrations
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms for a unified marketing experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <Globe className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <p className="text-white font-semibold text-sm">{integration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Flexible Marketing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  {" "}Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your marketing needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-pink-400 shadow-2xl shadow-pink-500/20' 
                      : 'border-white/20 hover:border-pink-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-pink-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-cyan-600 text-white hover:from-pink-600 hover:to-cyan-700'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Marketing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  {" "}Professionals
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what marketers say about AI Marketing Automation Pro
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
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-pink-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of marketers using AI Marketing Automation Pro to boost ROI and drive growth.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-pink-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-pink-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-pink-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-pink-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Target className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}