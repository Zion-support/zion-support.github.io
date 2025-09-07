<<<<<<< HEAD
export const metadata = {
  title: 'Cloud Migration & Infrastructure | Zion Tech Group',
  description:
    'Seamlessly migrate to the cloud with zero downtime. Expert cloud migration services for AWS, Azure, and GCP with cost optimization and security.',
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Migration | Zion Tech Group',
  description: 'Professional cloud migration services for your business needs.',
  keywords: 'cloud, migration'
};

export default function CloudmigrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cloud Migration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cloud migration services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert cloudmigration solutions tailored to your business needs.
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
    <div style={{ marginTop: 32 }}>
      <h2;
        style={{}
          fontSize: 24,
          fontWeight: 700,
          marginBottom: 20,"
          color: "#1f2937",
        }}
      >
        Cloud Migration Pricing;
      </h2>
      <div;
        style={{"
          display: "grid",
          gap: 16,"
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        <Plan"
          name="Cloud Assessment""
          price="$2,500–$7,500"
          features={["
            "1-2 weeks assessment","
            "Current infrastructure audit","
            "Cloud readiness evaluation","
            "Migration strategy & roadmap","
            "Cost optimization recommendations",
          ]}
        />
        <Plan"
          name="Standard Migration""
          price="$15,000–$50,000"
          features={["
            "4-12 weeks migration","
            "Single cloud provider","
            "Zero-downtime migration","
            "Basic monitoring setup","
            "Post-migration support (30 days)",
          ]}
        />
        <Plan"
          name="Enterprise Migration""
          price="$50,000+"
          features={["
            "Multi-cloud migration","
            "Custom architecture design","
            "Advanced security implementation","
            "Dedicated migration team","
            "12-month support & optimization",

          ]}
        />
      </div>

      <div;
        style={{}
          marginTop: 24,"
          textAlign: "center",
          padding: 20,"
          backgroundColor: "#ecfdf5",
          borderRadius: 12,"
          border: "1px solid #a7f3d0",
        }}
      >
        <h3;
          style={{}
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 8,"
            color: "#065f46",
          }}
        >
          Free Cloud Readiness Assessment;
        </h3>"
        <p style={{ color: "#047857", marginBottom: 16 }}>
          Get a comprehensive evaluation of your current infrastructure and;
          discover the best cloud migration strategy for your business. Includes;
          cost projections and timeline.
        </p>
        <div;
          style={{"
            display: "flex",
            gap: 12,"
            justifyContent: "center","
            flexWrap: "wrap",
          }}
        >
          <a"
            href="tel:+13024640950"
            style={{"
              display: "inline-block","
              padding: "12px 24px","
              backgroundColor: "#059669","
              color: "white","
              textDecoration: "none",

              borderRadius: 8,
              fontWeight: 600,
            }}
          >
            Schedule Free Assessment;
          </a>
          <a"
            href="mailto:kleber@ziontechgroup.com"
            style={{"
              display: "inline-block","
              padding: "12px 24px","
              backgroundColor: "transparent","
              color: "#059669","
              textDecoration: "none",
              borderRadius: 8,"
              border: "2px solid #059669",

              fontWeight: 600,
            }}
          >
            Email Us;
          </a>

=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
<<<<<<< HEAD

}
          color: "#1f2937",

          marginBottom: 8,
        }}
      >
        {name}
      </h4>
      <div;
        style={{"
          color: "#111827",

          fontWeight: 800,
          fontSize: 24,
          marginBottom: 16,
        }}
      >
        {price}
      </div>"
      <ul style={{ paddingLeft: 18, color: "#4b5563", marginBottom: 20 }}>
        {features.map((f) => ("
          <li key={f} style={{ listStyle: "disc", marginBottom: 6 }}>

            {f}
          </li>
        ))}
      </ul>
      <a"
        href="mailto:kleber@ziontechgroup.com?subject=Cloud Migration Services Inquiry"
        style={{"
          display: "inline-block","
          width: "100%","
          textAlign: "center","
          padding: "12px 16px","
          backgroundColor: "#3b82f6","
          color: "white","
          textDecoration: "none",

          borderRadius: 8,
          fontWeight: 600,
        }}
      >
        Get Started;
      </a>
    </div>
  );
}

"

=======
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
