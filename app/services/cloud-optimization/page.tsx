<<<<<<< HEAD
export const metadata = {
  title: "Cloud Optimization | Zion Tech Group",
  description:
    "Maximize cloud performance and minimize costs with our AI-powered cloud optimization services for AWS, Azure, and Google Cloud.",
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Optimization | Zion Tech Group',
  description: 'Professional cloud optimization services for your business needs.',
  keywords: 'cloud, optimization'
};

export default function CloudoptimizationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cloud Optimization
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cloud optimization services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert cloudoptimization solutions tailored to your business needs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Solutions</h3>
            <p className="text-gray-600">
              Personalized approach to meet your specific requirements and goals.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Support</h3>
            <p className="text-gray-600">
              Dedicated support team to ensure your success and satisfaction.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

function Pricing() {}
  return (
    <div;
      style={{}
        marginTop: 20,"
        display: "grid",
        gap: 12,"
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      }}
    >
      <Plan"
        name="Cloud Audit""
        price="$2,500/month"
        features={["
          "Monthly cost analysis","
          "Performance assessment","
          "Security review","
          "Optimization recommendations","
          "Email support",
        ]}
      />
      <Plan"
        name="Cloud Management""
        price="$5,500/month"
        features={["
          "Continuous optimization","
          "24/7 monitoring","
          "Automated scaling","
          "Security management","
          "Priority support","
          "Monthly reports",
        ]}
      />
      <Plan"
        name="Cloud Transformation""
        price="$15,000/month"
        features={["
          "Full cloud migration","
          "Architecture redesign","
          "Custom solutions","
          "Dedicated team","
          "White-label options","
          "SLA guarantee",
        ]}
      />
    </div>
  );
}

function Plan({}
  name,
  price,
  features,
}: {}
  name: string;
  price: string;
  features: string[];
}) {}
  return ("
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
      <h4 style={{ fontWeight: 700 }}>{name}</h4>
      <div;
        style={{"
          color: "#111827",
          fontWeight: 800,
          marginTop: 4,
          fontSize: 18,
        }}
      >
        {price}
      </div>"
      <ul style={{ paddingLeft: 18, color: "#4b5563", marginTop: 8 }}>
        {features.map((f) => ("
          <li key={f} style={{ listStyle: "disc" }}>
            {f}
          </li>
        ))}
      </ul>
      <a"
        href="mailto:kleber@ziontechgroup.com"
        style={{"
          display: "inline-block",
          marginTop: 12,"
          padding: "8px 16px","
          backgroundColor: "#3b82f6","
          color: "white","
          textDecoration: "none",
          borderRadius: 6,
        }}
      >
        Email Us;
      </a>

    </div>
  );
}
"
=======
    </div>
  );
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
