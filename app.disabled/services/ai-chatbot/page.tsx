};

export default function AIChatbotPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Chatbot Development
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build intelligent AI chatbots with natural language processing,
          multi-channel support, and seamless human handoff capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Natural Language Processing"
            details={[

            ]}
          />
          <Item
            title="Multi-Channel Integration"
            details={[

            ]}
          />
          <Item
            title="Advanced Features"
            details={[

            ]}
          />
      </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            AI Chatbot Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Conversational AI
              </h3>
              <p className="text-gray-600">
                Advanced NLP models understand context, maintain conversation
                flow, and provide human-like responses.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Custom Training
              </h3>
              <p className="text-gray-600">
                Train chatbots on your specific data, industry terminology, and
                business processes for better accuracy.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Seamless Handoff
              </h3>
              <p className="text-gray-600">
                Intelligent routing to human agents when the chatbot cannot
                resolve complex queries.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Analytics & Insights
              </h3>
              <p className="text-gray-600">
                Track conversation metrics, user satisfaction, and identify
                areas for improvement.
        </p>
      </div>      </div>
      </div>
      </section>

      <Pricing />
      </div>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
      </div>
  );

          ]}
        />
        <Plan
          name="Professional Chatbot"
          price="$15k–$35k"
          duration="6–10 weeks"
          features={[

          ]}
        />
        <Plan
          name="Enterprise Chatbot"
          price="$35k+"
          duration="8–16 weeks"
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
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
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
        href="mailto:kleber@ziontechgroup.com?subject=AI Chatbot Development Inquiry"
        className="block w-full mt-6 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
      </div>
  );
