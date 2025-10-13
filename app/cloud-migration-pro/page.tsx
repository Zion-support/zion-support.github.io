<<<<<<< HEAD
import React from 'react';
=======
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/project",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 50 servers",
        "Advanced migration planning",
        "Priority support",
        "Custom integrations",
        "Performance optimization",
        "Security assessment",]
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored for large organizations",
      features: [
        "Unlimited servers",
        "Custom migration strategy",
        "Dedicated support team",
        "White-label options",
        "API access",
        "Custom reporting",
        "24/7 monitoring",]
      ],
      popular: false
    }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-9706

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}