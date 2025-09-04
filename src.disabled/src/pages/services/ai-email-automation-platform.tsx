import React from 'react';
import Link from 'next/link';
import { Mail, Brain, Zap, Shield, BarChart3, Clock, Users, CheckCircle, ArrowRight, Star, TrendingUp, MessageSquare } from 'lucide-react';

export default function AIEmailAutomationPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Email Classification",
      description: "Automatically categorize and prioritize incoming emails using advanced machine learning algorithms."
    },
    {
      icon: Zap,
      title: "Smart Auto-Responses",
      description: "Generate contextually appropriate responses based on email content and sender history."
    },
    {
      icon: Shield,
      title: "Spam & Threat Detection",
      description: "Advanced AI filters to detect and block spam, phishing, and malicious content."
    },
    {
      icon: BarChart3,
      title: "Email Analytics Dashboard",
      description: "Comprehensive insights into email performance, response times, and engagement metrics."
    },
    {
      icon: Clock,
      title: "Intelligent Scheduling",
      description: "AI-powered email scheduling based on recipient time zones and optimal send times."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Shared inbox management with AI-assisted task assignment and follow-up reminders."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$29/month",
      users: "Up to 5 users",
      features: [
        "Basic AI email classification",
        "Auto-response templates",
        "Spam protection",
        "Email analytics",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79/month",
      users: "Up to 25 users",
      features: [
        "Advanced AI classification",
        "Custom auto-responses",
        "Advanced threat detection",
        "Detailed analytics",
        "Team collaboration tools",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199/month",
      users: "Unlimited users",
      features: [
        "Full AI automation suite",
        "Custom AI training",
        "Enterprise security",
        "Advanced integrations",
        "Dedicated account manager",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "85%",
      description: "Reduction in email response time"
    },
    {
      metric: "60%",
      description: "Decrease in spam emails"
    },
    {
      metric: "40%",
      description: "Improvement in email organization"
    },
    {
      metric: "95%",
      description: "Customer satisfaction rate"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Mail className="w-4 h-4 mr-2" />
              AI-Powered Email Automation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Email Automation Platform
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your email management with intelligent automation that handles classification, 
              responses, and analytics while you focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </Link>
              <Link href="#features" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-gray-600 text-lg">See how our AI email automation transforms business communication</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-gray-600 text-lg">Everything you need to automate and optimize your email workflow</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 text-lg">Choose the plan that fits your team size and needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`rounded-xl p-6 shadow-lg ${tier.popular ? 'border-2 border-blue-500 bg-blue-50' : 'border border-gray-200 bg-white'}`}>
                {tier.popular && (
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{tier.price}</div>
                <p className="text-gray-600 mb-6">{tier.users}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-gray-600 text-lg">Ideal for businesses looking to streamline their email communication</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Growing Businesses</h3>
              </div>
              <p className="text-gray-600">
                Scale your email communication efficiently as your team grows. Our AI handles the complexity 
                while maintaining personal touch in customer interactions.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Customer Support Teams</h3>
              </div>
              <p className="text-gray-600">
                Reduce response times and improve customer satisfaction with intelligent email routing, 
                auto-responses, and comprehensive analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Email?</h2>
            <p className="text-gray-300 text-lg">Start your free trial today and experience the power of AI email automation</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Setup in under 5 minutes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Our Team</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-500 mr-3" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-700 hover:text-blue-600">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-blue-500 mr-3" />
                  <a href="tel:+13024640950" className="text-gray-700 hover:text-blue-600">+1 302 464 0950</a>
                </div>
              </div>
              <Link href="https://ziontechgroup.com/contact" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}