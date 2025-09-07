<<<<<<< HEAD
export const metadata = {
  title: 'Blockchain Development & Web3 Solutions | Zion Tech Group',
  description:
    'Build secure, scalable blockchain applications, smart contracts, and Web3 solutions with expert blockchain development services.',
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blockchain Development | Zion Tech Group',
  description: 'Professional blockchain development services for your business needs.',
  keywords: 'blockchain, development'
};

export default function BlockchaindevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blockchain Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional blockchain development services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert blockchaindevelopment solutions tailored to your business needs.
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
        Blockchain Development Pricing;
      </h2>
      <div;
        style={{"
          display: "grid",
          gap: 16,"
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        <Plan"
          name="Smart Contract Development""
          price="$5,000–$15,000"
          features={["
            "2-4 weeks development","
            "Basic smart contract","
            "Security audit included","
            "Gas optimization","
            "Deployment and testing",
          ]}
        />
        <Plan"
          name="DeFi Application""
          price="$15,000–$50,000"
          features={["
            "6-12 weeks development","
            "Full DeFi protocol","
            "Frontend and backend","
            "Security auditing","
            "Multi-chain deployment",
          ]}
        />
        <Plan"
          name="Enterprise Blockchain""
          price="$50,000+"
          features={["
            "Custom blockchain solution","
            "Private network setup","
            "Integration with existing systems","
            "Dedicated blockchain specialist","
            "Ongoing maintenance & support",

          ]}
        />
      </div>

      <div;
        style={{}
          marginTop: 24,"
          textAlign: "center",
          padding: 20,"
          backgroundColor: "#fef3c7",
          borderRadius: 12,"
          border: "1px solid #fbbf24",
        }}
      >
        <h3;
          style={{}
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 8,"
            color: "#92400e",
          }}
        >
          Free Blockchain Consultation;
        </h3>"
        <p style={{ color: "#a16207", marginBottom: 16 }}>
          Get expert advice on your blockchain project. We'll analyze your;
          requirements and provide a detailed roadmap with cost estimates and;
          timeline.
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
              backgroundColor: "#f59e0b","
              color: "white","
              textDecoration: "none",

              borderRadius: 8,
              fontWeight: 600,
            }}
          >
            Schedule Free Consultation;
          </a>
          <a"
            href="mailto:kleber@ziontechgroup.com"
            style={{"
              display: "inline-block","
              padding: "12px 24px","
              backgroundColor: "transparent","
              color: "#f59e0b","
              textDecoration: "none",
              borderRadius: 8,"
              border: "2px solid #f59e0b",

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
        href="mailto:kleber@ziontechgroup.com?subject=Blockchain Development Services Inquiry"
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

'"

=======
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
