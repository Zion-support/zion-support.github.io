export const metadata = {
  title: "Cloud Optimization | Zion Tech Group",
  description:
    "Maximize cloud performance and minimize costs with our AI-powered cloud optimization services for AWS, Azure, and Google Cloud.",
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </div>

          </li>
        </ul>
      </div>
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {}
  return ("
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
      <h3 style={{ fontWeight: 700 }}>{title}</h3>"
      <ul style={{ paddingLeft: 18, color: "#4b5563" }}>
        {details.map((d) => ("
          <li key={d} style={{ listStyle: "disc" }}>
            {d}
          </li>
        ))}
      </ul>
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
