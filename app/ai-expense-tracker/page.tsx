"use client";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Receipt,
  Bot,
  Brain,
  Shield,
  CheckCircle,
  Star,
  BarChart3,
  TrendingUp,
  DollarSign,
} from "lucide-react";

export default function AIExpenseTracker() {
  const testimonials = [
    {
        "name": "Sarah Johnson",
        "role": "CEO, TechCorp",
        "company": "TechCorp",
        "content": "Zion Tech Group transformed our business operations with their innovative AI solutions. The results exceeded our expectations.",
        "rating": 5,
        "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        "name": "Michael Chen",
        "role": "CTO, InnovateLabs",
        "company": "InnovateLabs",
        "content": "Outstanding technical expertise and exceptional customer service. They delivered exactly what we needed.",
        "rating": 5,
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        "name": "Emily Rodriguez",
        "role": "Director, DataFlow Inc",
        "company": "DataFlow Inc",
        "content": "The team's attention to detail and commitment to quality is unmatched. Highly recommended!",
        "rating": 5,
        "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
];

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "AI-Powered Analysis",
      description:
        "Advanced AI algorithms analyze your spending patterns and provide intelligent insights.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: "Real-time Tracking",
      description:
        "Track your expenses in real-time with automatic categorization and smart notifications.",
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "Secure & Private",
      description:
        "Bank-level security ensures your financial data is protected and private.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-yellow-400" />,
      title: "Smart Reports",
      description:
        "Generate detailed reports and visualizations to understand your spending habits.",
    },
  ];

  const capabilities = [
    {
      title: "Automatic Categorization",
      description:
        "AI automatically categorizes your expenses into predefined categories like food, transportation, entertainment, etc.",
      icon: <Bot className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Receipt Scanning",
      description:
        "Simply take a photo of your receipt and let AI extract all the relevant information automatically.",
      icon: <Receipt className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Budget Management",
      description:
        "Set budgets for different categories and get alerts when you're approaching your limits.",
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Expense Insights",
      description:
        "Get personalized insights and recommendations to help you save money and manage finances better.",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      description: "Perfect for personal use",
      features: [
        "Unlimited expense tracking",
        "Basic AI categorization",
        "Receipt scanning (50/month)",
        "Basic reports",
        "Mobile app access",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "/month",
      description: "Ideal for professionals",
      features: [
        "Everything in Basic",
        "Advanced AI insights",
        "Unlimited receipt scanning",
        "Advanced analytics",
        "Budget management",
        "Priority support",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Business",
      price: "$49.99",
      period: "/month",
      description: "For small businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Multi-user accounts",
        "Advanced reporting",
        "Integration with accounting software",
        "Dedicated support",
        "Custom categories",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta
          name="description"
          content="Smart expense tracking with AI-powered categorization, receipt scanning, and financial insights."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Expense <span className="text-blue-600">Tracker</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Smart expense tracking with AI-powered categorization, receipt
              scanning, and financial insights to help you manage your money
              better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Capabilities Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Key Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? "ring-2 ring-cyan-500" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-300">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-300 flex items-center"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
                        : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        className="w-5 h-5 text-yellow-400 fill-current"
                        key={i}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Take Control of Your Expenses?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us to learn more about our AI expense tracking solutions
              and how we can help you manage your finances better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
