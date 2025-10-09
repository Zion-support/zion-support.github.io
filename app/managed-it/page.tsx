'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Clock, Users, Settings, BarChart, Zap, Globe, Phone, Mail, Monitor } from 'lucide-react';

const ManagedITPage: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-cyan-400" />,
      title: "24/7 IT Monitoring",
      description: "Round-the-clock monitoring of your IT infrastructure with proactive issue detection and resolution."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Cybersecurity Management",
      description: "Comprehensive security services including threat detection, vulnerability management, and incident response."
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      title: "Infrastructure Management",
      description: "Complete management of servers, networks, and cloud infrastructure with optimization and scaling."
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Help Desk Support",
      description: "Dedicated support team providing fast resolution of IT issues and user assistance."
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-400" />,
      title: "Performance Analytics",
      description: "Detailed reporting and analytics to optimize IT performance and identify improvement opportunities."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Proactive Maintenance",
      description: "Scheduled maintenance and updates to prevent issues and ensure optimal system performance."
    }
  ];

  const benefits = [
    {
      title: "Reduced IT Costs",
      description: "Save up to 40% on IT expenses with our comprehensive managed services approach.",
      icon: "💰"
    },
    {
      title: "Improved Uptime",
      description: "Achieve 99.9% uptime with proactive monitoring and rapid issue resolution.",
      icon: "⚡"
    },
    {
      title: "Enhanced Security",
      description: "Protect your business with enterprise-grade security measures and compliance support.",
      icon: "🔒"
    },
    {
      title: "Scalable Solutions",
      description: "Easily scale your IT infrastructure as your business grows and evolves.",
      icon: "📈"
    },
    {
      title: "Expert Support",
      description: "Access to certified IT professionals with deep expertise in modern technologies.",
      icon: "👥"
    },
    {
      title: "Predictable Budgeting",
      description: "Fixed monthly costs with no surprise expenses or hidden fees.",
      icon: "📊"
    }
  ];

  const serviceLevels = [
    {
      name: "Basic",
      price: "$299",
      period: "month",
      description: "Essential IT support for small businesses",
      features: [
        "24/7 monitoring",
        "Basic security",
        "Email support",
        "Monthly reporting",
        "Remote support"
      ],
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Comprehensive IT management for growing businesses",
      features: [
        "Everything in Basic",
        "Advanced security",
        "Phone & email support",
        "Weekly reporting",
        "On-site support",
        "Backup management"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "month",
      description: "Full-service IT management for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated team",
        "Priority support",
        "Daily reporting",
        "Custom solutions",
        "SLA guarantees"
      ],
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      title: "CEO, TechStart Inc.",
      content: "Switching to Zion's managed IT services was the best decision we made. Our uptime improved to 99.9% and we saved 35% on IT costs.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      title: "IT Director, RetailCorp",
      content: "Their proactive approach prevented several potential disasters. The team is knowledgeable, responsive, and truly cares about our success.",
      rating: 5
    },
    {
      name: "Robert Kim",
      title: "CFO, FinanceFirst",
      content: "The security improvements alone justified the investment. We've had zero security incidents since partnering with Zion Tech Group.",
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
              Managed <span className="text-cyan-400">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Focus on your business while we handle all your IT needs. Our comprehensive managed IT services 
              provide 24/7 monitoring, security, and support to keep your systems running smoothly.
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
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15min</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Clients Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive IT Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our managed IT services cover every aspect of your technology infrastructure, 
              from monitoring and security to support and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Managed IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with us to transform your IT operations and achieve better performance, 
              security, and cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg text-center hover:bg-slate-800/70 transition-colors duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Levels Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Service Level
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the managed IT service level that best fits your business needs and budget. 
              All plans include our core services and 24/7 support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceLevels.map((level, index) => (
              <div key={index} className={`bg-slate-700/50 p-8 rounded-lg ${level.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {level.popular && (
                  <div className="bg-cyan-400 text-slate-900 text-sm font-semibold px-4 py-2 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{level.name}</h3>
                <p className="text-gray-300 mb-4">{level.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{level.price}</span>
                  <span className="text-gray-300">/{level.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={level.cta === "Contact Sales" ? "/contact" : "/contact"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    level.popular
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
                  }`}
                >
                  {level.cta}
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
              See how our managed IT services have helped businesses improve their 
              technology operations and achieve their goals.
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
            Let us handle your IT so you can focus on growing your business. 
            Get a free assessment and discover how we can improve your technology operations.
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

export default ManagedITPage;