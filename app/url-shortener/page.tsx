import { ArrowRight, Link, BarChart3, Shield, Zap, Globe, CheckCircle, Star, Clock, Users, Target, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

export default function URLShortener() {
  const features = [
    {
      icon: <Link className="w-6 h-6" />,
      title: "Custom Short URLs",
      description: "Create memorable, branded short links with your own domain and custom aliases."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Track clicks, geographic data, device types, and referral sources with detailed reporting."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Link Security",
      description: "Password protection, expiration dates, and malware scanning to keep your links safe."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Bulk Operations",
      description: "Upload and shorten thousands of URLs at once with our bulk processing feature."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "QR Code Generation",
      description: "Automatically generate QR codes for your short links for offline marketing campaigns."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Share and manage links with your team, set permissions, and track team performance."
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for personal use and small projects",
      features: [
        "100 short links/month",
        "Basic analytics",
        "Standard support",
        "QR code generation",
        "Link expiration"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description: "Ideal for businesses and marketers",
      features: [
        "10,000 short links/month",
        "Advanced analytics",
        "Custom domains",
        "Bulk operations",
        "Priority support",
        "Team collaboration",
        "API access"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$29",
      period: "/month",
      description: "For growing businesses with high volume needs",
      features: [
        "100,000 short links/month",
        "White-label solution",
        "Advanced security",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "Advanced reporting"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increase Click-Through Rates",
      description: "Short, branded URLs are more trustworthy and easier to share, leading to higher engagement.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Track Campaign Performance",
      description: "Monitor which links perform best and optimize your marketing strategies with detailed analytics.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Professional Branding",
      description: "Use your own domain to maintain brand consistency across all your marketing materials.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Save Time & Effort",
      description: "Bulk operations and API integration help you manage thousands of links efficiently.",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered URL Shortener - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional URL shortening service with advanced analytics, custom domains, QR codes, and team collaboration. Starting at $9/month."
        />
        <meta
          name="keywords"
          content="URL shortener, link shortener, custom domains, link analytics, QR codes, bulk URL shortening, link management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular Micro SAAS
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI-Powered
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {" "}URL Shortener
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Create, manage, and track short links with advanced analytics, custom domains, 
                  and AI-powered insights. Perfect for marketers, businesses, and content creators.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <RouterLink
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Try Free Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </RouterLink>
                  <RouterLink
                    to="/consultation"
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    View Demo
                  </RouterLink>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-white mb-4">Try Our URL Shortener</h3>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Enter your long URL here..."
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                          Shorten URL
                        </button>
                      </div>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="text-sm text-gray-400 mb-2">Your short link:</div>
                      <div className="bg-white/5 rounded-lg p-3 text-cyan-400 font-mono text-sm">
                        zion.tech/abc123
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Link Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, manage, and track your short links effectively.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our URL Shortener?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                More than just shortening links - we help you optimize your marketing campaigns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. No hidden fees, no surprises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <RouterLink
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
                  </RouterLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Shorten Your First Link?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who trust our platform for their link management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </RouterLink>
              <RouterLink
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </RouterLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}