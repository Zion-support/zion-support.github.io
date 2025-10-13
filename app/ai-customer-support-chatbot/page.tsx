"use client";
import { Brain, Clock, Target, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AICustomerSupportChatbot() {
  const chatbotFeatures = [
    {
      category: "Core Features",
      items: [
        "Natural Language Processing",
        "Multi-language Support",
        "Context Awareness",
        "Real-time Responses",
      ],
    },
    {
      category: "Integration",
      items: [
        "API Integration",
        "CRM Integration",
        "Database Connectivity",
        "Third-party Tools",
      ],
    },
    {
      category: "Analytics",
      items: [
        "Conversation Analytics",
        "Performance Metrics",
        "User Insights",
        "Custom Reports",
      ],
    },
  ];

  const testimonials = [
  {
    "name": "John Smith",
    "role": "CEO, TechCorp",
    "content": "Zion Tech Group transformed our business with their innovative AI solutions. Highly recommended!",
    "rating": 5
  },
  {
    "name": "Sarah Johnson",
    "role": "CTO, InnovateLabs",
    "content": "The team's expertise and dedication to excellence is unmatched. Our productivity increased by 300%.",
    "rating": 5
  },
  {
    "name": "Mike Chen",
    "role": "Founder, StartupXYZ",
    "content": "Professional, reliable, and innovative. They delivered exactly what we needed and more.",
    "rating": 5
  }
];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      features: ["Basic chatbot", "Email support", "Standard templates"],
      description: "Perfect for small businesses getting started",
      period: "/month",
      popular: false,
    },
    {
      name: "Professional",
      price: "$799",
      features: ["Advanced AI", "Priority support", "Custom integrations"],
      description: "Ideal for growing businesses with complex needs",
      period: "/month",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$1999",
      features: ["Full customization", "24/7 support", "Dedicated manager"],
      description: "Complete solution for large organizations",
      period: "/month",
      popular: false,
    },
  ];
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "Natural Language Processing",
      description:
        "Advanced AI understands context, intent, and provides human-like responses",
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: "24/7 Availability",
      description:
        "Provide instant support around the clock without additional staffing costs",
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: "Intelligent Routing",
      description:
        "Automatically route complex queries to the right human agents when needed",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "Analytics & Insights",
      description:
        "Track customer satisfaction, response times, and identify improvement opportunities",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Customer Support Chatbot
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI customer support chatbot services by Zion Tech
              Group. Expert solutions tailored to your business needs.
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

          {/* Chatbot Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Comprehensive Chatbot Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {chatbotFeatures.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-300 flex items-center"
                      >
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 ${plan.popular ? "ring-2 ring-cyan-400" : ""}`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-300 flex items-center"
                      >
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
                        : "bg-white/20 text-white hover:bg-white/30"
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
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial: any, index: number) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us to learn more about our solutions and how we can help
              your business.
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
