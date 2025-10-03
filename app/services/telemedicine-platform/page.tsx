import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'Telemedicine Platform | Zion Tech Group - Healthcare SaaS Solutions',
  description: 'Comprehensive telemedicine platform for hospitals and clinics. Features online appointments, virtual consultations, secure patient data management, and HIPAA compliance.',
  keywords: 'telemedicine platform, healthcare SaaS, virtual consultations, online appointments, HIPAA compliance, patient management',
};

export default function TelemedicinePlatformPage() {
  const features = [
    {
      category: "Virtual Consultations",
      items: [
        "HD video conferencing with screen sharing",
        "Secure messaging and file sharing",
        "Digital prescription management",
        "Real-time patient monitoring",
        "Multi-language support"
      ]
    },
    {
      category: "Appointment Management",
      items: [
        "Online scheduling system",
        "Automated reminders (SMS/Email)",
        "Calendar integration",
        "Waitlist management",
        "Recurring appointment booking"
      ]
    },
    {
      category: "Patient Records",
      items: [
        "HIPAA-compliant data storage",
        "Electronic health records (EHR)",
        "Medical history tracking",
        "Prescription history",
        "Lab results integration"
      ]
    },
    {
      category: "Administrative Tools",
      items: [
        "Billing and insurance integration",
        "Patient portal access",
        "Analytics and reporting",
        "Staff management",
        "Compliance monitoring"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299/month",
      description: "Perfect for small clinics and private practices",
      features: [
        "Up to 100 consultations/month",
        "Basic appointment scheduling",
        "Patient portal",
        "Email support",
        "HIPAA compliance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799/month",
      description: "Ideal for medium-sized healthcare facilities",
      features: [
        "Up to 500 consultations/month",
        "Advanced scheduling features",
        "EHR integration",
        "Analytics dashboard",
        "Priority support",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      description: "For hospitals and large healthcare systems",
      features: [
        "Unlimited consultations",
        "Multi-location support",
        "Advanced analytics",
        "API integration",
        "Dedicated account manager",
        "Custom development"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increased Accessibility",
      description: "Provide healthcare access to patients regardless of location",
      icon: "🌍"
    },
    {
      title: "Cost Reduction",
      description: "Reduce overhead costs by up to 40% with virtual consultations",
      icon: "💰"
    },
    {
      title: "Improved Efficiency",
      description: "Streamline operations with automated scheduling and reminders",
      icon: "⚡"
    },
    {
      title: "Better Patient Experience",
      description: "Convenient access to healthcare from the comfort of home",
      icon: "😊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Telemedicine Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive telemedicine solution for hospitals, clinics, and healthcare providers. 
            Enable secure virtual consultations, streamline appointment management, and enhance patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Schedule Demo
            </Link>
            <Link 
              href="/pricing" 
              className="border border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.category}</h3>
              <ul className="space-y-4">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Transform Your Healthcare Practice
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'border border-green-600 text-green-600 hover:bg-green-50'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & Security */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            HIPAA Compliant & Secure
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🔒</div>
              <h3 className="font-semibold mb-2">HIPAA Compliant</h3>
              <p className="text-blue-100 text-sm">Full compliance with healthcare regulations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🛡️</div>
              <h3 className="font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-blue-100 text-sm">AES-256 encryption for all data</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔐</div>
              <h3 className="font-semibold mb-2">Secure Authentication</h3>
              <p className="text-blue-100 text-sm">Multi-factor authentication support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <h3 className="font-semibold mb-2">Audit Trails</h3>
              <p className="text-blue-100 text-sm">Comprehensive activity logging</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Modernize Your Healthcare Practice?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare providers already using our telemedicine platform to deliver 
            better patient care and improve operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+13024640950" 
              className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              📞 Call: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ✉️ Email: kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-gray-500">
            📍 364 E Main St STE 1008, Middletown, DE 19709
          </p>
        </div>
      </div>
    </div>
  );
}