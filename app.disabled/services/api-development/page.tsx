export const metadata = {
  title: 'API Development | Zion Tech Group',
  description: 'Build robust, scalable APIs with our expert development services. RESTful, GraphQL, and microservices architecture solutions.',
};

export default function ServicePage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">API Development</h1>
      <p className="text-xl text-gray-600 mb-12">Build robust, scalable APIs with our expert development services. RESTful, GraphQL, and microservices architecture solutions.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="API Design & Development"
          features={[
            'RESTful API design',
            'GraphQL implementation',
            'Microservices architecture',
            'API documentation',
          ]}
        />
        <FeatureCard
          title="Integration & Testing"
          features={[
            'Third-party integrations',
            'API testing & validation',
            'Performance optimization',
            'Security implementation',
          ]}
        />
        <FeatureCard
          title="API Management"
          features={[
            'Rate limiting',
            'Authentication & authorization',
            'Monitoring & analytics',
            'Version control',
          ]}
        />
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

      <Pricing />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Build Your API?
        </h2>
        <p className="text-gray-600 mb-6">
          Start with a free consultation to design the perfect API architecture
          for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-fuchsia-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-fuchsia-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-fuchsia-600 text-fuchsia-600 px-8 py-3 rounded-lg font-semibold hover:bg-fuchsia-600 hover:text-white transition-colors"
          >
            Email Us

          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({}
  title,
  features,
}: {}
  title: string;
  features: string[];
}) {}
  return ("
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">"
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>"
      <ul className="space-y-2 text-gray-600">
        {features.map((f) => ("
          <li key={f} className="flex items-center">"
            <span className="text-fuchsia-500 mr-2">•</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {}
  return ("
    <div className="mt-16">"
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Pricing Plans;
      </h2>"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan"
          name="Basic API""
          price="$7,999"
          features={["
            "Simple REST API","
            "Basic authentication","
            "API documentation","
            "2 weeks support",
          ]}
        />
        <Plan"
          name="Advanced API""
          price="$19,999"
          features={["
            "Complex API architecture","
            "Advanced security","
            "Performance optimization","
            "1 month support","
          ]}
        />
        <Plan
          name="Advanced API"
          price="$19,999"
          features={[
            'Complex API architecture',
            'Advanced security',
            'Performance optimization',
            '1 month support',
            'Testing & validation',
          ]}
          popular={true}
        />
            "Testing & validation",
          ]}
          popular={true}
        />
        <Plan"
          name="Enterprise API""
          price="$49,999+"
          features={["
            "Microservices architecture","
            "Custom integrations","
            "Dedicated team","
            "3 months support","
            "White-label solution",

          ]}
        />
      </div>
    </div>
  );
}

function Plan({}
  name,
  price,
  features,
  popular = false,
}: {}
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {}
  return (
    <div"
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? "border-fuchsia-500 ring-2 ring-fuchsia-200" : "border-gray-200"}`}
    >
      {popular && ("
        <div className="bg-fuchsia-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular;
        </div>
      )}"
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>"
      <div className="text-3xl font-bold text-fuchsia-600 mb-4">{price}</div>"
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((f) => ("
          <li key={f} className="flex items-center">"
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>

      <a"
        href="tel:+13024640950"`
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${}
          popular"
            ? "bg-fuchsia-600 text-white hover:bg-fuchsia-700""
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"`
        }`}
      >
        Get Started;
      </a>

    </div>
  );
}
"`
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

