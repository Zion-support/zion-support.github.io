export default function ServicePage() {
  return (
        </p>
      </div>      </div>
          icon="📊"
        />
        <FeatureCard"
          title="AI-Powered Analytics"

          icon="🧠"
        />
        <FeatureCard"
          title="Visualization & Reporting"

          icon="📈"
        />
      </div>
"
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Platform Capabilities;
        </h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"
          <div className="text-center">"
            <div className="text-4xl mb-4">⚡</div>"
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Real-time Processing;
            </h3>"
            <p className="text-gray-600">
              Process millions of data points in seconds;
        </p>
          </div>"
          <div className="text-center">"
            <div className="text-4xl mb-4">🎯</div>"
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              95% Accuracy;
            </h3>"
            <p className="text-gray-600">
              AI predictions with industry-leading accuracy;
        </p>
          </div>"
          <div className="text-center">"
            <div className="text-4xl mb-4">🔒</div>"
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Enterprise Security;
            </h3>"
            <p className="text-gray-600">
              SOC 2 compliant with end-to-end encryption;
        </p>
          </div>"
          <div className="text-center">"
            <div className="text-4xl mb-4">📱</div>"
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Mobile Access;
            </h3>"
            <p className="text-gray-600">
              Access insights anywhere with mobile apps;
        </p>
      </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Easy Integration</h3>
              <p className="text-gray-600">
                RESTful APIs and pre-built connectors for seamless integration
        </p>
      </div>
      </div>
      </div>
      </div>      </div>
      </div>
      </div>
  );

          ]}
          popular={false}
        />
        <PricingCard"
          name="Professional Analytics""
          price="$499/mo""
          duration="Up to 25 users"

          ]}
          popular={true}
        />
        <PricingCard"
          name="Enterprise Analytics""
          price="$1,299/mo""
          duration="Unlimited users"

          ]}
          popular={false}
        />
      </div>
      </div>
  );

function PricingCard({}
  name,
  price,
  duration,

  popular,
}: {}
  name: string;
  price: string;
  duration: string;

  popular: boolean;
}) {}
  return (

    >
      {popular && ("
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
          <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular;
          </span>
      </div>
      )}"
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>"
      <div className="text-3xl font-bold text-teal-600 mb-1">{price}</div>"
      <div className="text-gray-500 mb-6">{duration}</div>"
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => ("
          <li key={index} className="flex items-start">"
            <span className="text-green-500 mr-2 mt-1">✓</span>"
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

        }`}
      >
        Get Started;
      </a>
      </div>
  );

function ContactSection() {}
  return ("
    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Unlock Your Data's Potential?
      </h3>"
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">'
        Let's discuss your analytics needs and create an AI-powered platform;
        that transforms your data into competitive advantage.
      </p>"
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a"
          href="tel:+13024640950""
          className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          Call +1 302 464 0950;
        </a>
        <a"
          href="mailto:kleber@ziontechgroup.com""
          className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
        >
          Email Us;
        </a>
      </div>"
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
      </div>
  );

'"`