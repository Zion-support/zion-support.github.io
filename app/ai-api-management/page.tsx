import { ArrowRight, Globe, Zap, Target, BarChart3, CheckCircle, Clock, DollarSign, Users, Settings, Shield, FileText, Lock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIAPIManagement() {
  const features = [
    {
      title: "AI-Powered API Gateway",
      description: "Intelligent API gateway with automatic load balancing, rate limiting, and traffic optimization",
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: "Smart Analytics",
      description: "AI-driven analytics that provide insights into API performance, usage patterns, and optimization opportunities",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Automated Documentation",
      description: "Auto-generate comprehensive API documentation with interactive testing and real-time updates",
      icon: <FileText className="w-6 h-6" />,
      included: true
    },
    {
      title: "Security & Compliance",
      description: "Advanced security features including OAuth 2.0, JWT validation, and compliance monitoring",
      icon: <Shield className="w-6 h-6" />,
      included: true
    },
    {
      title: "Developer Portal",
      description: "Self-service developer portal with API discovery, testing tools, and community features",
      icon: <Users className="w-6 h-6" />,
      included: true
    },
    {
      title: "Monitoring & Alerts",
      description: "Real-time monitoring with intelligent alerts, performance metrics, and error tracking",
      icon: <Target className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 49,
      period: "month",
      description: "Perfect for small APIs",
      features: [
        "Up to 10 APIs",
        "Basic analytics",
        "Email support",
        "1 user account",
        "Standard security",
        "Basic monitoring"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 149,
      period: "month",
      description: "Ideal for growing APIs",
      features: [
        "Up to 100 APIs",
        "Advanced analytics",
        "Priority support",
        "Up to 10 user accounts",
        "Advanced security",
        "Advanced monitoring",
        "Developer portal",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 399,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited APIs",
        "Custom analytics",
        "Dedicated support",
        "Unlimited users",
        "Custom security",
        "White-label solution",
        "Custom integrations",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const apiStats = [
    { number: "99.9%", label: "API Uptime", icon: <Globe className="w-6 h-6" /> },
    { number: "50%", label: "Faster Development", icon: <Zap className="w-6 h-6" /> },
    { number: "1000+", label: "API Integrations", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "SaaS Platform",
      role: "API Architect",
      content: "AI API Management has revolutionized our API strategy. We've improved our development speed by 50% and achieved 99.9% uptime.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Sarah Johnson",
      company: "FinTech Company",
      role: "DevOps Engineer",
      content: "The AI-powered analytics and monitoring features are incredible. We can now predict and prevent API issues before they impact our users.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Rodriguez",
      company: "E-commerce Platform",
      role: "Backend Developer",
      content: "The automated documentation and developer portal have made our APIs so much more accessible. Our developer adoption has increased by 300%.",
      rating: 5,
      avatar: "MR"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Management - AI-Powered API Gateway & Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Manage your APIs with AI API Management - the ultimate AI-powered API gateway platform. Smart analytics, automated documentation, and developer portal. Starting at $49/month."
        />
        <meta
          name="keywords"
          content="API management, API gateway, API analytics, API documentation, developer portal, API security, API monitoring, AI API management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Globe className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">#1 API Management Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 animate-pulse">
                AI API Management
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered API management platform that simplifies API development, monitoring, and optimization. 
              Smart analytics, automated documentation, and comprehensive developer tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* API Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {apiStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Advanced API Management Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your APIs effectively
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  API Management Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your API needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-cyan-500/10' 
                      : 'border-white/20 hover:border-blue-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
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
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-blue-500/25'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by API Developers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about AI API Management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Globe key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Managing Your APIs
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of developers who use AI API Management to optimize their APIs. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}