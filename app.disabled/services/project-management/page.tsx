};

export default function ProjectManagementPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Project Management Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build comprehensive project management tools with task tracking, team
          collaboration, time tracking, and advanced reporting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Task Management"
            details={[

            ]}
          />
          <Item
            title="Team Collaboration"
            details={[

            ]}
          />
          <Item
            title="Reporting & Analytics"
            details={[

            ]}
          />
      </div>
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Platform Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Flexible Workflows
              </h3>
              <p className="text-gray-600">
                Create custom workflows for different project types - agile,
                waterfall, or hybrid methodologies.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Resource Management
              </h3>
              <p className="text-gray-600">
                Track team capacity, allocate resources efficiently, and prevent
                overbooking with smart scheduling.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Client Portal
              </h3>
              <p className="text-gray-600">
                Give clients visibility into project progress with customizable
                client dashboards and reports.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Integration Ready
              </h3>
              <p className="text-gray-600">
                Connect with popular tools like Slack, Google Workspace,
                Microsoft 365, and more via APIs.
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
          name="Professional Platform"
          price="$35k–$70k"
          duration="8–14 weeks"
          features={[

          ]}
        />
        <Plan
          name="Enterprise Platform"
          price="$70k+"
          duration="12–20 weeks"
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
      <div className="text-3xl font-bold text-orange-600 mb-1">{price}</div>
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
        href="mailto:kleber@ziontechgroup.com?subject=Project Management Platform Inquiry"
        className="block w-full mt-6 bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
      >
        Get Started
      </a>
      </div>
  );
