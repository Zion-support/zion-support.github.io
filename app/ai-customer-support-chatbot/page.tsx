<<<<<<< HEAD
<<<<<<< HEAD

import { Helmet } from 'react-helmet-async';
import { Brain, BarChart3, Target, BarChart, Clock } from 'lucide-react';
const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
    }
  ];
const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechCorp",
      content: "The AI financial analysis platform has revolutionized our decision-making process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investment Manager",
      company: "FinancePro",
      content: "Incredible accuracy and insights that have improved our portfolio performance.",
      rating: 5
    }
  ];
=======
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    content: "Zion Tech Group has transformed our business with their AI solutions.",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    company: "TechCorp"
  },
  {
    name: "Michael Chen",
    role: "CTO", 
    content: "The performance improvements are remarkable. Highly recommended!",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    company: "InnovateLabs"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    content: "Outstanding support and cutting-edge technology solutions.",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    company: "FutureTech"
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
export default function AICustomerSupportChatbot() {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Clock, Users, Globe } from 'lucide-react';

export default function AiCustomerSupportChatbotPage() {
  const mainFeatures = [
    {
      title: "AI-Powered Responses",
      description: "Intelligent chatbot that understands context and provides accurate answers",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock customer support without human intervention",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Multi-language Support",
      description: "Support customers in multiple languages with real-time translation",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Seamless Handoff",
      description: "Intelligent escalation to human agents when needed",
      icon: <Users className="w-8 h-8" />
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechSupport Solutions",
      role: "Customer Success Manager",
      content: "Our AI chatbot has reduced response time by 80% and increased customer satisfaction by 40%. It handles 90% of inquiries automatically.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "Operations Director",
      content: "The chatbot understands context perfectly and escalates complex issues to humans seamlessly. Our support team can focus on high-value tasks.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "SaaS Platform Inc",
      role: "Head of Support",
      content: "24/7 availability with consistent quality responses. Our customers love the instant help and our team loves the reduced workload.",
      rating: 5,
      avatar: "ER"
    }
  ];

>>>>>>> origin/main
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
<<<<<<< HEAD
  ];
<<<<<<< HEAD

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Customer Success Manager",
      company: "TechCorp",
      content: "The AI chatbot has reduced our support tickets by 70% while improving customer satisfaction. It's incredibly intelligent and handles complex queries perfectly.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "InnovateLabs",
      content: "Implementation was seamless and the results were immediate. Our customers love the instant responses and our team can focus on more complex issues.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Support",
      company: "DataFlow Inc",
      content: "The analytics and insights provided by the chatbot help us understand our customers better. It's been a game-changer for our support operations.",
      rating: 5,
      avatar: "ER"
    }
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Ai Customer Support Chatbot solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
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
                      {testimonial.company || "Company"}
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
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
=======
      
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Customer Support Chatbot</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai customer support chatbot solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD

=======
          
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
<<<<<<< HEAD

=======
            
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
<<<<<<< HEAD

=======
            
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
>>>>>>> origin/main
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </>
=======
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8
=======
>>>>>>> origin/main
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
}