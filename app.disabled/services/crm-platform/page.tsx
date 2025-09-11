};

export default function CRMPlatformPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          CRM Platform Development
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build powerful CRM platforms with lead management, sales tracking,
          customer insights, and automation workflows.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Lead Management"
            details={[

            ]}
          />
          <Item
            title="Sales Pipeline"
            details={[

            ]}
          />
          <Item
            title="Customer Management"
            details={[

            ]}
          />
      </div>
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            CRM Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Sales Automation
              </h3>
              <p className="text-gray-600">
                Automate follow-ups, lead routing, and sales processes to
                increase efficiency and close more deals.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Advanced Analytics
              </h3>
              <p className="text-gray-600">
                Track sales performance, customer behavior, and revenue trends
                with comprehensive reporting dashboards.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Integration Ecosystem
              </h3>
              <p className="text-gray-600">
                Connect with email, phone, calendar, and marketing tools for a
                unified customer experience.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Mobile-First Design
              </h3>
              <p className="text-gray-600">
                Access your CRM anywhere with responsive design and native
                mobile apps for iOS and Android.
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
          name="Professional CRM"
          price="$40k–$80k"
          duration="12–18 weeks"
          features={[

          ]}
        />
        <Plan
          name="Enterprise CRM"
          price="$80k+"
          duration="16–24 weeks"
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
      <div className="text-3xl font-bold text-indigo-600 mb-1">{price}</div>
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
        href="mailto:kleber@ziontechgroup.com?subject=CRM Platform Development Inquiry"
        className="block w-full mt-6 bg-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
      >
        Get Started
      </a>
      </div>
  );
