};

export default function EmailAutomationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Email Automation Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build sophisticated email automation platforms with drip campaigns,
          personalization, and advanced analytics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Campaign Management"
            details={[

            ]}
          />
          <Item
            title="Personalization & AI"
            details={[

            ]}
          />
          <Item
            title="Analytics & Insights"
            details={[

            ]}
          />
      </div>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Our Email Automation Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600">
                Our clients see average 340% ROI on email marketing campaigns
                with our automation tools.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Enterprise-Grade
              </h3>
              <p className="text-gray-600">
                Built to handle millions of emails with 99.9% deliverability
                rates and advanced compliance.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Easy Integration
              </h3>
              <p className="text-gray-600">
                Seamlessly integrates with CRM, e-commerce, and marketing tools
                via robust APIs.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Compliance Ready
              </h3>
              <p className="text-gray-600">
                GDPR, CAN-SPAM, and CASL compliant with built-in unsubscribe
                management.
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
          price="$25k–$50k"
          duration="6–10 weeks"
          features={[

          ]}
        />
        <Plan
          name="Enterprise Platform"
          price="$50k+"
          duration="8–12 weeks"
          features={[

            "Custom development",
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
      <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
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
        href="mailto:kleber@ziontechgroup.com?subject=Email Automation Platform Inquiry"
        className="block w-full mt-6 bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        Get Started
      </a>
      </div>
  );
