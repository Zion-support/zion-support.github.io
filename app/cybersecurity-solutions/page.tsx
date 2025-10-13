import React from 'react';
  const pricingPlans = [
    {
      name: "Essential",
      price: "$2,999",
      period: "/month",
      description: "Basic security protection for small to medium businesses",
      features: [
        "Security assessment","
        "Basic threat monitoring","
        "Email security","
        "Firewall management","
        "Standard support","
        "Monthly reports"]
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
        "Comprehensive security assessment","
        "Advanced threat detection","
        "Identity management","
        "Data protection","
        "Priority support","
        "Weekly reports","
        "Incident response","
        "Security training"]
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
        "Full security assessment","
        "Advanced threat detection","
        "Complete identity management","
        "Comprehensive data protection","
        "24/7 dedicated support","
        "Real-time reports","
        "Rapid incident response","
        "Custom security training","
        "Compliance management","
        "Security consulting"]
      ],
      popular: false,
      cta: "Contact Sales",
    }
  ];

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
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
  );
}
