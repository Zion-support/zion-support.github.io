import React from 'react';
import { Helmet } from 'react-helmet-async';



export default function PageTsxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page.Tsx - Zion Tech Group</title>
        <meta name="description" content="Advanced page.tsx solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page.Tsx</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced page.tsx solutions by Zion Tech Group
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
          <p className="text-gray-300">
            This page is under development. Please check back later for updates.
          </p>
        </div>
      



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
      price: "$12,999",
      period: "/month",
      description: "Complete security suite for large organizations",
      features: [
        "Full security audit",
        "AI-powered threat detection",
        "Advanced identity management",
        "Comprehensive data protection",
        "24/7 dedicated support",
        "Real-time reporting",
        "Custom security policies",
        "Dedicated security team",
        "Compliance management"
      ],
      popular: false,
      cta: "Contact Sales",
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions by Zion Tech Group" />
      </Helmet>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your business with our comprehensive cybersecurity solutions.
            From threat detection to compliance management, we've got you covered.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Security Services</h2>
          <p className="text-gray-300">Comprehensive protection for your digital assets</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="text-sm text-gray-500 mb-4">
                {service.price}
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Security Plans</h2>
          <p className="text-gray-300">Choose the right security plan for your business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-lg p-8 shadow-lg ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}





        </div>
      </div>
    </div>
  );
}