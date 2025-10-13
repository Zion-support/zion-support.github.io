<<<<<<< HEAD
<<<<<<< HEAD
=======

export default function Pricing() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function pricing() {
=======
  const microSaasPricing = [
    {
      name: "Zion Analytics Pro",
      price: "$29",
      period: "/month",
      description: "Business intelligence platform",
      features: [
        "Real-time Dashboards",
        "Predictive Analytics",
        "Custom Reports",
        "API Access",
        "Email Support",
        "Up to 5 data sources"
      ],
      popular: false,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Zion Security Shield",
      price: "$49",
      period: "/month",
      description: "Advanced cybersecurity protection",
      features: [
        "Threat Detection",
        "Real-time Monitoring",
        "Vulnerability Scanning",
        "Incident Response",
        "Priority Support",
        "Up to 10 users"
      ],
      popular: true,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Zion Cloud Vault",
      price: "$9",
      period: "/month",
      description: "Secure cloud storage solution",
      features: [
        "1TB Storage",
        "End-to-end Encryption",
        "File Synchronization",
        "Mobile Apps",
        "Email Support",
        "Up to 5 devices"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const enterprisePricing = [
    {
      name: "AI Solutions Suite",
      price: "Custom",
      period: "",
      description: "Complete AI transformation package",
      features: [
        "All AI Services Included",
        "Custom Development",
        "Dedicated Support Team",
        "White-label Solutions",
        "24/7 Phone Support",
        "Unlimited Usage",
        "Custom Integrations",
        "SLA Guarantee"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "IT Infrastructure",
      price: "Custom",
      period: "",
      description: "Complete IT infrastructure management",
      features: [
        "Cloud Infrastructure",
        "Cybersecurity Solutions",
        "5G Implementation",
        "Data Analytics",
        "24/7 Monitoring",
        "Disaster Recovery",
        "Compliance Management",
        "Custom SLA"
      ],
      popular: true,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const faqs = [
    {
      question: "Do you offer free trials?",
      answer: "Yes! All our services come with a 14-day free trial. No credit card required to get started."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any of our services. You only pay the monthly subscription fee."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes! Save 20% when you pay annually. Contact us for custom enterprise pricing."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you before you reach your limits and offer options to upgrade or purchase additional capacity."
    }
  ];

export default function Page() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Pricing solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Pricing</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
=======
import React from 'react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Pricing</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======
}
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
