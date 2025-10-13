import { ArrowRight, Link, Zap, Target, BarChart3, CheckCircle, Clock, DollarSign, Users, Settings, Globe, Shield, Coins } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

export default function AIBlockchainSolutions() {
  const features = [
    {
      title: "AI-Powered Smart Contracts",
      description: "Intelligent smart contracts that adapt and optimize themselves based on real-time data and conditions",
      icon: <Link className="w-6 h-6" />,
      included: true
    },
    {
      title: "Decentralized AI Networks",
      description: "Build and deploy AI models on blockchain networks with decentralized computing and data sharing",
      icon: <Zap className="w-6 h-6" />,
      included: true
    },
    {
      title: "Blockchain Integration",
      description: "Seamlessly integrate blockchain technology into existing systems with AI-powered automation",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Cryptocurrency Solutions",
      description: "Complete cryptocurrency solutions including wallets, exchanges, and payment processing",
      icon: <Coins className="w-6 h-6" />,
      included: true
    },
    {
      title: "DeFi Protocol Development",
      description: "Build and deploy DeFi protocols with AI-powered optimization and risk management",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Security & Compliance",
      description: "Advanced security features and compliance tools for blockchain applications and smart contracts",
      icon: <Shield className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 149,
      period: "month",
      description: "Perfect for small projects",
      features: [
        "Up to 3 blockchain projects",
        "Basic smart contracts",
        "Email support",
        "1 user account",
        "Standard security",
        "Basic compliance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 399,
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 blockchain projects",
        "Advanced smart contracts",
        "Priority support",
        "Up to 10 user accounts",
        "Advanced security",
        "Advanced compliance",
        "DeFi protocols",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 999,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited blockchain projects",
        "Custom smart contracts",
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

  const blockchainStats = [
    { number: "99.9%", label: "Smart Contract Uptime", icon: <Link className="w-6 h-6" /> },
    { number: "50+", label: "Blockchain Networks", icon: <Globe className="w-6 h-6" /> },
    { number: "95%", label: "Security Score", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Michael Chen",
      company: "FinTech Startup",
      role: "CTO",
      content: "AI Blockchain Solutions has enabled us to build sophisticated DeFi protocols that were previously impossible. Our smart contracts are now self-optimizing and secure.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Sarah Rodriguez",
      company: "Crypto Exchange",
      role: "Technical Director",
      content: "The AI-powered smart contracts and security features have made our platform incredibly robust. We've achieved 99.9% uptime and zero security incidents.",
      rating: 5,
      avatar: "SR"
    },
    {
      name: "David Kim",
      company: "DeFi Protocol",
      role: "Lead Developer",
      content: "The decentralized AI networks and blockchain integration features have revolutionized our development process. We can now build complex DeFi solutions in record time.",
      rating: 5,
      avatar: "DK"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - AI-Powered Blockchain Development Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Build blockchain solutions with AI Blockchain Solutions - the ultimate AI-powered blockchain development platform. Smart contracts, DeFi protocols, and cryptocurrency solutions. Starting at $149/month."
        />
        <meta
          name="keywords"
          content="blockchain solutions, AI blockchain development, smart contracts, DeFi protocols, cryptocurrency solutions, blockchain integration, AI blockchain solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <Link className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-indigo-400 text-sm font-medium">#1 Blockchain Solutions Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
                AI Blockchain Solutions
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered blockchain development platform that enables you to build sophisticated blockchain solutions. 
              Create smart contracts, DeFi protocols, and cryptocurrency solutions with 99.9% uptime and advanced security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </RouterLink>
            </div>

            {/* Blockchain Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {blockchainStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-indigo-400 mb-2">{stat.number}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Advanced Blockchain Solutions Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build sophisticated blockchain solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Blockchain Solutions Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your blockchain development needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-indigo-500/50 bg-gradient-to-br from-indigo-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:border-indigo-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-indigo-400">${plan.price}</span>
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
                  
                  <RouterLink
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </RouterLink>
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
                Trusted by Blockchain Developers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about AI Blockchain Solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Link key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Building Blockchain Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of developers who use AI Blockchain Solutions to build sophisticated blockchain applications. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </RouterLink>
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