};

export default function AnalyticsDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Analytics Dashboard Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build powerful analytics dashboards with real-time data visualization,
          custom metrics, and business intelligence tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Data Visualization"
            details={[

            ]}
          />
          <Item
            title="Data Integration"
            details={[

            ]}
          />
          <Item
            title="Business Intelligence"
            details={[

            ]}
          />
      </div>
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Analytics Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Real-Time Processing
              </h3>
              <p className="text-gray-600">
                Process and visualize data in real-time with sub-second latency
                for instant business insights.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Custom Metrics
              </h3>
              <p className="text-gray-600">
                Create custom KPIs and metrics tailored to your business needs
                with flexible calculation engines.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Multi-User Access
              </h3>
              <p className="text-gray-600">
                Role-based access control with personalized dashboards for
                different user types and departments.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Mobile Analytics
              </h3>
              <p className="text-gray-600">
                Access your analytics anywhere with mobile-optimized dashboards
                and push notifications for alerts.
        </p>
      </div>      </div>
      </div>
      </section>

      <Pricing />
      </div>
  );

            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
      </div>
  );

          ]}
        />
        <Plan
          name="Professional Analytics"
          price="$32k–$65k"
          duration="10–16 weeks"
          features={[

          ]}
        />
        <Plan
          name="Enterprise Analytics"
          price="$65k+"
          duration="14–22 weeks"
          features={[

            "On-premise deployment",
          ]}
        />
      </div>
          </a>
      </div>
      </div>
    </section>
  );

  name,
  price,
  duration,

  name: string;
  price: string;
  duration: string;

}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-teal-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>

            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      </div>
  );

'"

      <a
        href="mailto:kleber@ziontechgroup.com?subject=Analytics Dashboard Platform Inquiry"
        className="block w-full mt-6 bg-teal-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
      >
        Get Started
      </a>
      </div>
  );
