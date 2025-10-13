"use client";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Brain, Clock, Target, BarChart3 } from 'lucide-react';

export default function AIProjectManagementPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Planning",
      description:
        "Intelligent project planning with automated task breakdown and resource allocation",
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: "Smart Scheduling",
      description:
        "Automated scheduling that considers dependencies, resources, and deadlines",
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: "Progress Tracking",
      description:
        "Real-time project monitoring with predictive analytics and risk assessment",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "Analytics & Insights",
      description:
        "Comprehensive reporting and analytics to optimize project performance",
    },
  ];

  const projectFeatures = [
    {
      category: "Project Planning",
      items: [
        "AI Task Breakdown",
        "Resource Optimization",
        "Timeline Generation",
        "Risk Assessment",
        "Dependency Mapping",
        "Milestone Tracking",
      ],
    },
    {
      category: "Team Management",
      items: [
        "Team Collaboration",
        "Role Assignment",
        "Workload Balancing",
        "Communication Tools",
        "Progress Updates",
        "Performance Tracking",
      ],
    },
    {
      category: "Automation",
      items: [
        "Workflow Automation",
        "Notification System",
        "Report Generation",
        "Status Updates",
        "Deadline Alerts",
        "Quality Checks",
      ],
    },
    {
      category: "Integration",
      items: [
        "Tool Integration",
        "API Connectivity",
        "Data Synchronization",
        "Third-party Apps",
        "Cloud Storage",
        "Version Control",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 projects",
        "Basic AI features",
        "Team collaboration",
        "Email support",
        "Basic reporting",
        "Mobile access",
      ],
      popular: false,
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced AI features",
        "Custom workflows",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Custom",
      price: "Contact Us",
      period: "",
      description: "Tailored solutions",
      features: [
        "Custom features",
        "On-premise deployment",
        "24/7 support",
        "Training & consulting",
        "White-label solution",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional AI project management services with intelligent planning, smart scheduling, and comprehensive analytics."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Project Management <span className="text-blue-600">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI project management services with intelligent
              planning, smart scheduling, and comprehensive analytics for
              optimal project success.
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

          {/* Project Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Project Management Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projectFeatures.map((category, index) => (
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
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
              What Our Clients Say
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
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us to learn more about our AI project management solutions
              and how we can help your team succeed.
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
