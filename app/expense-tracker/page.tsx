'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Receipt, BarChart, Zap, Brain, Target, Shield, Clock, Globe, Smartphone, CreditCard } from 'lucide-react';

const ExpenseTrackerPage: React.FC = () => {
  const features = [
    {
      icon: <Receipt className="w-8 h-8 text-cyan-400" />,
      title: "Receipt Scanning",
      description: "AI-powered receipt scanning automatically extracts expense data and categorizes transactions."
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-400" />,
      title: "Smart Analytics",
      description: "Get insights into spending patterns with intelligent analytics and budget recommendations."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Auto-Categorization",
      description: "Automatically categorize expenses using AI to save time and ensure accuracy."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "AI Insights",
      description: "Get personalized recommendations for budget optimization and cost savings opportunities."
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Budget Management",
      description: "Set and track budgets with real-time alerts and spending limit notifications."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Secure Storage",
      description: "Bank-level security for your financial data with encryption and compliance standards."
    }
  ];

  const useCases = [
    {
      title: "Small Business",
      description: "Track business expenses, manage receipts, and generate reports for tax purposes.",
      icon: "🏢",
      benefits: ["Tax compliance", "Expense reports", "Budget tracking", "Receipt management"]
    },
    {
      title: "Freelancers",
      description: "Manage project expenses, track billable hours, and maintain financial records.",
      icon: "💼",
      benefits: ["Project tracking", "Client billing", "Tax deductions", "Income analysis"]
    },
    {
      title: "Teams",
      description: "Corporate expense management with approval workflows and policy compliance.",
      icon: "👥",
      benefits: ["Team oversight", "Policy compliance", "Approval workflows", "Centralized reporting"]
    },
    {
      title: "Personal Finance",
      description: "Personal expense tracking with budgeting tools and financial goal setting.",
      icon: "🏠",
      benefits: ["Personal budgets", "Goal tracking", "Spending analysis", "Financial planning"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$15",
      period: "month",
      description: "Perfect for individuals and freelancers",
      features: [
        "Unlimited transactions",
        "Receipt scanning",
        "Basic analytics",
        "Mobile app",
        "Email support"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$39",
      period: "month",
      description: "Ideal for small businesses and teams",
      features: [
        "Everything in Personal",
        "Team collaboration",
        "Advanced analytics",
        "Custom categories",
        "Priority support",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      description: "Comprehensive solution for large organizations",
      features: [
        "Everything in Business",
        "Unlimited users",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
        "Advanced security"
      ],
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      title: "Small Business Owner",
      content: "Expense Tracker has simplified my bookkeeping completely. The receipt scanning saves me hours every week and the AI insights help me save money.",
      rating: 5
    },
    {
      name: "David Park",
      title: "Freelance Consultant",
      content: "As a freelancer, tracking expenses for tax purposes was always a headache. This app makes it effortless and I never miss a deduction.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      title: "Finance Manager, TechCorp",
      content: "Our team's expense management has never been more efficient. The approval workflows and compliance features are exactly what we needed.",
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
              AI <span className="text-cyan-400">Expense Tracker</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Simplify expense management with AI-powered receipt scanning, smart categorization, 
              and intelligent insights. Track, analyze, and optimize your spending effortlessly.
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
              <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Access</div>
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
              Powerful Expense Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered expense tracker combines advanced OCR technology with machine learning 
              to provide the most accurate and efficient expense management solution.
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
              Perfect for Every Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're managing personal finances, business expenses, or team budgets, 
              our expense tracker adapts to your specific requirements.
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
              Start with our free trial and upgrade as your expense management needs grow. 
              All plans include our core AI-powered features.
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
              See how businesses and individuals are using AI Expense Tracker 
              to simplify their financial management and save time.
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
            Ready to Simplify Your Expense Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stop struggling with manual expense tracking. Let AI Expense Tracker 
            handle the complexity while you focus on growing your business.
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

export default ExpenseTrackerPage;