'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Target, BarChart, Zap, Brain, Shield, Clock, Globe, Phone, Mail } from 'lucide-react';

const AICRMPage: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "AI Lead Scoring",
      description: "Intelligent lead scoring based on behavior patterns, engagement, and conversion probability."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Smart Pipeline Management",
      description: "AI-powered pipeline optimization with automated stage progression and deal forecasting."
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      title: "Predictive Analytics",
      description: "Advanced analytics and forecasting to predict sales outcomes and optimize strategies."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automated Follow-ups",
      description: "Intelligent follow-up sequences that adapt based on customer behavior and preferences."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "AI Insights",
      description: "Get personalized recommendations for improving sales performance and customer relationships."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Data Security",
      description: "Enterprise-grade security with encryption and compliance for your customer data."
    }
  ];

  const useCases = [
    {
      title: "Sales Teams",
      description: "Boost sales performance with AI-powered lead management and pipeline optimization.",
      icon: "💼",
      benefits: ["Higher conversion rates", "Better lead quality", "Faster deal closure", "Improved forecasting"]
    },
    {
      title: "Marketing Teams",
      description: "Align marketing efforts with sales goals using integrated campaign tracking and lead scoring.",
      icon: "📈",
      benefits: ["Better lead quality", "Campaign optimization", "ROI tracking", "Lead nurturing"]
    },
    {
      title: "Customer Success",
      description: "Enhance customer relationships with AI insights and proactive engagement strategies.",
      icon: "🎯",
      benefits: ["Higher retention", "Upselling opportunities", "Customer satisfaction", "Churn prevention"]
    },
    {
      title: "Small Business",
      description: "Professional CRM capabilities designed for small businesses and startups.",
      icon: "🏢",
      benefits: ["Easy setup", "Affordable pricing", "Essential features", "Scalable growth"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 users",
        "Basic AI features",
        "Email integration",
        "Mobile app",
        "Email support"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for growing sales teams",
      features: [
        "Up to 25 users",
        "Advanced AI features",
        "Full integrations",
        "Priority support",
        "Custom fields",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "month",
      description: "Comprehensive solution for large organizations",
      features: [
        "Unlimited users",
        "All AI features",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
        "API access"
      ],
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Sales Director, TechCorp",
      content: "AI CRM has transformed our sales process. We've increased our conversion rate by 45% and our sales team is more productive than ever.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "CEO, StartupXYZ",
      content: "The AI insights are incredible. It helps us understand our customers better and make data-driven decisions that actually work.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Marketing Manager, GrowthCo",
      content: "The lead scoring is spot-on. We're focusing on the right prospects and our marketing ROI has improved significantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="text-cyan-400">CRM</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your customer relationships with AI-powered CRM that learns, predicts, 
              and optimizes your sales process automatically. Close more deals with intelligent insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="#demo"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-300">Higher Conversion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">AI-Powered</div>
              <div className="text-gray-300">Insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent CRM Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered CRM combines advanced machine learning with intuitive design 
              to provide the most intelligent customer relationship management solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're managing sales, marketing, or customer success, 
              our AI CRM adapts to your team's unique needs and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg text-center hover:bg-slate-800/70 transition-colors duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and scale as your team grows. 
              All plans include our core AI-powered CRM features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-700/50 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 text-sm font-semibold px-4 py-2 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.cta === "Contact Sales" ? "/contact" : "/contact"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how sales teams are using AI CRM to close more deals, 
              build better relationships, and grow their business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of sales teams using AI CRM to close more deals and build stronger relationships. 
            Start your free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICRMPage;