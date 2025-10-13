import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, AlertTriangle, Users, Database, CheckCircle } from 'lucide-react';

export default function CybersecuritySolutions() {
  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits to identify vulnerabilities and assess your current security posture",
      icon: <Eye className="w-8 h-8" />,
      features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance audit"],
      price: "From $2,499/assessment",
    },
    {
      title: "Threat Detection",
      description: "Advanced threat detection and response systems to identify and neutralize security threats in real-time",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ["AI-powered detection", "Real-time monitoring", "Automated response", "Threat intelligence"],
      price: "From $1,999/month",
    },
    {
      title: "Identity Management",
      description: "Secure identity and access management solutions to control user access and prevent unauthorized access",
      icon: <Users className="w-8 h-8" />,
      features: ["Multi-factor authentication", "Single sign-on", "Access governance", "Privileged access"],
      price: "From $1,299/month",
    },
    {
      title: "Data Protection",
      description: "Comprehensive data protection solutions to secure sensitive information and ensure compliance",
      icon: <Database className="w-8 h-8" />,
      features: ["Data encryption", "Backup security", "Data loss prevention", "Compliance monitoring"],
      price: "From $1,799/month",
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$2,999",
      period: "/month",
      description: "Basic security protection for small to medium businesses",
      features: [
        "Security assessment",
        "Basic threat monitoring",
        "Email security",
        "Firewall management",
        "Standard support",
        "Monthly reports"
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      description: "Advanced security solutions for growing businesses",
      features: [
        "Comprehensive security assessment",
        "Advanced threat detection",
        "Identity management",
        "Data protection",
        "Priority support",
        "Weekly reports",
        "Incident response",
        "Security training"
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Complete security suite for large enterprises",
      features: [
        "Full security assessment",
        "Advanced threat detection",
        "Complete identity management",
        "Comprehensive data protection",
        "24/7 dedicated support",
        "Real-time reports",
        "Rapid incident response",
        "Custom security training",
        "Compliance management",
        "Security consulting"
      ],
      popular: false,
      cta: "Contact Sales",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions and services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your business with our comprehensive cybersecurity services and solutions
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-blue-400 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-blue-400 ring-2 ring-blue-400' : 'border-white/20'} hover:bg-white/20 transition-all duration-300`}>
                {plan.popular && (
                  <div className="bg-blue-400 text-white text-center py-1 px-4 rounded-full text-sm font-semibold mb-4 -mt-2">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular ? 'bg-blue-400 text-white hover:bg-blue-500' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our cybersecurity experts to discuss your security needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300">
              Get Free Consultation
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Case Studies
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}