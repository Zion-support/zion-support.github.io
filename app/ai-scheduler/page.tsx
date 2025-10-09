'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Calendar, Clock, Users, Zap, Brain, Target, Shield, Globe, Phone, Mail } from 'lucide-react';

const AISchedulerPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-cyan-400" />,
      title: "Smart Scheduling",
      description: "AI automatically finds the best meeting times based on availability, preferences, and priorities."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Time Zone Intelligence",
      description: "Automatically handle multiple time zones and suggest optimal meeting times for global teams."
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Team Coordination",
      description: "Coordinate complex meetings across multiple participants with intelligent conflict resolution."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "One-Click Booking",
      description: "Schedule meetings instantly with smart links and automated calendar integration."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Learning Preferences",
      description: "AI learns from your scheduling patterns and optimizes future meeting suggestions."
    },
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: "Goal-Based Scheduling",
      description: "Schedule meetings based on objectives and automatically allocate time for preparation."
    }
  ];

  const useCases = [
    {
      title: "Sales Teams",
      description: "Optimize sales meetings and client calls with intelligent scheduling and follow-up automation.",
      icon: "💼",
      benefits: ["Higher conversion rates", "Better client experience", "Reduced no-shows"]
    },
    {
      title: "Project Management",
      description: "Coordinate project meetings, standups, and reviews across multiple teams and stakeholders.",
      icon: "📋",
      benefits: ["Improved collaboration", "Faster project delivery", "Better resource allocation"]
    },
    {
      title: "Customer Support",
      description: "Schedule support calls and demos with customers based on their preferences and availability.",
      icon: "🎧",
      benefits: ["Higher satisfaction", "Faster resolution", "Better customer experience"]
    },
    {
      title: "Remote Teams",
      description: "Manage distributed teams with time zone awareness and flexible scheduling options.",
      icon: "🌍",
      benefits: ["Global coordination", "Flexible work hours", "Better work-life balance"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$19",
      period: "month",
      description: "Perfect for individuals and freelancers",
      features: [
        "Unlimited personal meetings",
        "Basic AI scheduling",
        "Calendar integration",
        "Email support",
        "Mobile app"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Team",
      price: "$49",
      period: "month",
      description: "Ideal for small teams and departments",
      features: [
        "Everything in Personal",
        "Team scheduling",
        "Advanced AI features",
        "Priority support",
        "Custom branding",
        "Analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "month",
      description: "Comprehensive solution for large organizations",
      features: [
        "Everything in Team",
        "Unlimited users",
        "Advanced integrations",
        "Dedicated support",
        "White-label options",
        "API access"
      ],
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Wilson",
      title: "Sales Manager, TechCorp",
      content: "AI Scheduler has revolutionized how we manage client meetings. We've reduced scheduling time by 80% and increased meeting attendance by 30%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Project Manager, StartupXYZ",
      content: "The time zone intelligence is incredible. We can coordinate with our global team effortlessly. It's like having a personal assistant for scheduling.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Customer Success Director",
      content: "Our customer satisfaction scores improved significantly after implementing AI Scheduler. The automated follow-ups and smart scheduling make a huge difference.",
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
              AI <span className="text-cyan-400">Scheduler</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Never waste time scheduling meetings again. Our AI-powered scheduler automatically 
              finds the best times, handles time zones, and coordinates complex meetings effortlessly.
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
              <div className="text-4xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">30%</div>
              <div className="text-gray-300">More Meetings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">Global</div>
              <div className="text-gray-300">Time Zones</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Scheduling Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI scheduler combines machine learning with calendar intelligence 
              to create the most efficient and user-friendly scheduling experience.
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
              Whether you're managing sales calls, project meetings, or customer support, 
              AI Scheduler adapts to your team's unique scheduling needs.
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
              Start with our free trial and upgrade as your scheduling needs grow. 
              All plans include our core AI scheduling capabilities.
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
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of professionals who have transformed their scheduling 
              with AI Scheduler and never looked back.
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
            Ready to Revolutionize Your Scheduling?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stop wasting time on scheduling. Let AI Scheduler handle the complexity 
            while you focus on what matters most - your meetings and relationships.
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

export default AISchedulerPage;