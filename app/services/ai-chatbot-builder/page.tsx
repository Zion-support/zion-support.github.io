export const metadata = {

};

export default function AIChatbotBuilderPage() {

  return (

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="No-Code Builder"
          details={[

          ]}
        />
        <FeatureCard
          title="AI Intelligence"
          details={[

          ]}
        />
        <FeatureCard
          title="Integration & Analytics"
          details={[

          ]}
        />
      </div>
        </p>
      </div>
          Ready to Build Your AI Chatbot?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Start building your intelligent chatbot today. No technical skills
          required - just drag, drop, and deploy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
      </div>
      </div>
      </div>
            <span className="text-orange-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
      </div>
  );

          ]}
        />
        <PricingPlan
          name="Professional"
          price="$99/mo"
          features={[

            "Advanced analytics & A/B testing",
          ]}
          featured={true}
        />

        <PricingPlan
          name="Enterprise"
          price="$299/mo"
          features={[

            "Custom integrations & SLA",

          ]}
        />
      </div>
      </div>
  );

  name,
  price,

  featured = false,

  name: string;
  price: string;

  featured?: boolean;

      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">

            <span className="text-orange-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>

      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? "bg-orange-600 text-white hover:bg-orange-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started

      </a>
      </div>
  );