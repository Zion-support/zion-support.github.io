import { ArrowRight, TestTube, Target, CheckCircle, Globe, Bug, Zap, BarChart3 } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const features = [
    {
      title: "Intelligent Test Execution",
      description: "Smart test execution with parallel processing, intelligent retry logic, and automatic test prioritization",
      icon: <Zap className="w-6 h-6" />,
      included: true
    },
    {
      title: "Cross-Platform Testing",
      description: "Test across multiple browsers, devices, and operating systems with automated cross-platform validation",
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: "Visual Testing",
      description: "AI-powered visual regression testing that detects UI changes and layout issues automatically",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Performance Testing",
      description: "Automated performance testing with load testing, stress testing, and performance monitoring",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Bug Detection & Reporting",
      description: "Intelligent bug detection with detailed reports, screenshots, and automatic issue tracking",
      icon: <Bug className="w-6 h-6" />,
      included: true
    }
  ];

const pricingPlans = [
    {
      name: "Starter",
      price: 49,
      period: "month",
      description: "Perfect for small projects",
      features: [
        "Up to 100 test cases",
        "Basic test generation",
        "Email support",
        "1 user account",
        "Standard browsers",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 149,
      period: "month",
      description: "Ideal for growing teams",
      features: [
        "Up to 1,000 test cases",
        "Advanced test generation",
        "Priority support",
        "5 user accounts",
        "All browsers & devices",
        "Advanced reporting",
        "API integration",
        "Custom test scenarios"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 399,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited test cases",
        "AI-powered test generation",
        "24/7 dedicated support",
        "Unlimited users",
        "All platforms",
        "Custom reporting",
        "Full API access",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

export default function AIAutomatedTesting() {
  return (
    <>
      <Helmet>
        <title>AI Automated Testing - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered automated testing platform that generates, executes, and maintains test cases automatically. Reduce testing time by 80% and improve software quality." />
        <meta name="keywords" content="AI testing, automated testing, test automation, QA testing, software testing, AI QA" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Automated Testing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI-powered testing platform that generates, executes, and maintains test cases automatically. 
                Reduce testing time by 80% and improve software quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Testing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI testing platform combines machine learning with advanced automation to deliver comprehensive testing solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-orange-900/30 to-red-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Testing Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your testing needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border ${plan.popular ? 'border-orange-400/50 ring-2 ring-orange-400/20' : 'border-cyan-500/20'} hover:border-cyan-400/40 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
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
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-orange-900/30 to-red-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Automating Your Tests
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of QA teams who use AI Automated Testing to improve their testing process. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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