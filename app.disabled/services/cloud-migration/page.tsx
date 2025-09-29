export const metadata = {
  title: 'Cloud Migration & Infrastructure | Zion Tech Group',
  description:
    'Seamlessly migrate to the cloud with zero downtime. Expert cloud migration services for AWS, Azure, and GCP with cost optimization and security.',
};

export default function ServicePage() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional page solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <p className="text-gray-600 mb-4">
              Advanced features and capabilities for your business needs.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Professional solutions</li>
              <li>• 24/7 support</li>
              <li>• Scalable architecture</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <p className="text-gray-600 mb-4">
              Transform your business with our cutting-edge solutions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Increased efficiency</li>
              <li>• Cost savings</li>
              <li>• Better results</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive support and maintenance services.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Expert consultation</li>
              <li>• Training and documentation</li>
              <li>• Ongoing maintenance</li>
            </ul>
          </div>
            "Staff training and documentation",

          ]}
        />
      </div>

      <div;
        style={{}
          marginTop: 24,
          padding: 20,"
          backgroundColor: "#fefce8",
          borderRadius: 12,"
          border: "1px solid #fde047",
        }}
      >
        <h3;
          style={{}
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 12,"
            color: "#713f12",

          }}
        >
          Why Choose Our Cloud Migration Services?
        </h3>"
        <ul style={{ color: "#a16207", lineHeight: 1.6 }}>
          <li>
            • <strong>Zero-Downtime Migrations:</strong> 99.9% uptime guarantee;
            during migration;
          </li>
          <li>
            • <strong>Cost Optimization:</strong> Average 40% reduction in;
            infrastructure costs;
          </li>
          <li>
            • <strong>Security First:</strong> SOC 2, ISO 27001, and HIPAA;
            compliant processes;
          </li>
          <li>
            • <strong>Expert Team:</strong> AWS, Azure, and GCP certified;
            professionals;
          </li>
          <li>
            • <strong>Proven Methodology:</strong> 200+ successful migrations;
            completed;
          </li>
        </ul>
      </div>

      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {}
  return (
    <div;
      style={{"
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,"
        backgroundColor: "#ffffff",
      }}
    >"
      <h3 style={{ fontWeight: 700, color: "#1f2937", marginBottom: 8 }}>
        {title}
      </h3>"
      <ul style={{ paddingLeft: 18, color: "#4b5563", margin: 0 }}>
        {details.map((d) => ("
          <li key={d} style={{ listStyle: "disc", marginBottom: 4 }}>

            {d}
          </li>
        ))}
      </ul>
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

        </div>
      </div>
    </div>
  );

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

