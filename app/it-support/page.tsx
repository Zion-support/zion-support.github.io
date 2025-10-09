'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Headphones, Clock, Shield, Zap, Brain, Target, Users, BarChart, Globe, Phone } from 'lucide-react';

const ITSupportPage: React.FC = () => {
  const features = [
    {
      icon: <Headphones className="w-8 h-8 text-cyan-400" />,
      title: "24/7 Help Desk",
      description: "Round-the-clock technical support with guaranteed response times and expert assistance."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Rapid Response",
      description: "Average response time of 15 minutes with priority support for critical issues."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Proactive Monitoring",
      description: "Continuous monitoring of your systems with automated issue detection and resolution."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Remote Support",
      description: "Instant remote assistance for quick problem resolution without on-site visits."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "AI-Powered Solutions",
      description: "Intelligent troubleshooting and automated fixes for common IT issues."
    },
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: "Issue Tracking",
      description: "Comprehensive ticket management with detailed tracking and resolution reporting."
    }
  ];

  const supportTypes = [
    {
      title: "Hardware Support",
      description: "Complete hardware support for desktops, laptops, servers, and peripherals.",
      icon: "💻",
      services: ["Repair & maintenance", "Hardware upgrades", "Warranty management", "Asset tracking"]
    },
    {
      title: "Software Support",
      description: "Expert support for all software applications and operating systems.",
      icon: "🔧",
      services: ["Installation & updates", "Troubleshooting", "License management", "Compatibility issues"]
    },
    {
      title: "Network Support",
      description: "Network infrastructure support including connectivity, security, and optimization.",
      icon: "🌐",
      services: ["Network troubleshooting", "Security monitoring", "Performance optimization", "VPN setup"]
    },
    {
      title: "Cloud Support",
      description: "Comprehensive cloud services support and migration assistance.",
      icon: "☁️",
      services: ["Cloud migration", "Configuration", "Security management", "Cost optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$499",
      period: "month",
      description: "Essential IT support for small businesses",
      features: [
        "24/7 phone support",
        "Remote assistance",
        "Basic monitoring",
        "Email support",
        "Standard response time"
      ],
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$799",
      period: "month",
      description: "Comprehensive support for growing businesses",
      features: [
        "Everything in Basic",
        "Priority support",
        "Advanced monitoring",
        "On-site support",
        "Faster response time",
        "Proactive maintenance"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "month",
      description: "Full-service IT support for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated support team",
        "Custom SLA",
        "White-glove service",
        "Advanced security",
        "Strategic consulting"
      ],
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      title: "IT Manager, TechCorp",
      content: "The IT support team is incredible. They've reduced our downtime by 80% and our team productivity has increased significantly.",
      rating: 5
    },
    {
      name: "David Park",
      title: "CEO, StartupXYZ",
      content: "Having 24/7 IT support gives us peace of mind. The team is knowledgeable, responsive, and always goes above and beyond.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      title: "Operations Director, GrowthCo",
      content: "The proactive monitoring has prevented several potential disasters. We can focus on our business knowing our IT is in good hands.",
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
              Professional <span className="text-cyan-400">IT Support</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Keep your business running smoothly with our comprehensive IT support services. 
              From help desk to proactive monitoring, we've got your technology covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Get Free Assessment
              </Link>
              <Link
                href="#services"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15min</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive IT Support Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT support team provides end-to-end technology support to keep your business 
              running smoothly and efficiently.
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

      {/* Support Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete IT Support Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From hardware to software, networks to cloud services, we provide comprehensive 
              support for all your IT needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg text-center hover:bg-slate-800/70 transition-colors duration-300">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {type.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>• {service}</li>
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
              Choose Your Support Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the IT support plan that best fits your business needs and budget. 
              All plans include our core support services.
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
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are using our IT support services to improve their 
              technology operations and achieve better results.
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
            Ready to Simplify Your IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert IT support team handle your technology needs so you can focus on growing your business. 
            Get started with a free assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Free Assessment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSupportPage;