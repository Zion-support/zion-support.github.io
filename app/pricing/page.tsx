
export default function Pricing() {
  const aiServicesPricing = [
    {
      name: "AI Analytics Dashboard",
      price: "$299",
      period: "/month",
      description: "Advanced business intelligence with AI insights",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Analytics",
        "Custom Reports",
        "API Integration",
        "Email Support",
        "Up to 5 data sources"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "AI Customer Support",
      price: "$199",
      period: "/month",
      description: "Intelligent chatbots and automation",
      features: [
        "Multi-language Support",
        "Sentiment Analysis",
        "CRM Integration",
        "Live Chat Handoff",
        "Priority Support",
        "Up to 10,000 conversations"
      ],
      popular: true,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "AI Content Generation",
      price: "$149",
      period: "/month",
      description: "AI-powered content creation at scale",
      features: [
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Up to 1,000 articles/month"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

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

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Pricing solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Pricing</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive pricing solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

}