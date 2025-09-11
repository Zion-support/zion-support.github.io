};

export default function SocialMediaManagementPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Social Media Management Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build comprehensive social media management tools with scheduling,
          analytics, content creation, and team collaboration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Content Management"
            details={[

            ]}
          />
          <Item
            title="Analytics & Insights"
            details={[

            ]}
          />
          <Item
            title="Team Collaboration"
            details={[

            ]}
          />
      </div>
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Multi-Platform Support
              </h3>
              <p className="text-gray-600">
                Connect Facebook, Instagram, Twitter, LinkedIn, TikTok, and
                YouTube in one unified dashboard.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                AI-Powered Content
              </h3>
              <p className="text-gray-600">
                Generate captions, suggest hashtags, and optimize posting times
                using AI technology.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Advanced Scheduling
              </h3>
              <p className="text-gray-600">
                Smart scheduling with optimal time detection and timezone
                management for global teams.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Client Management
              </h3>
              <p className="text-gray-600">
                Perfect for agencies with client dashboards, reporting, and
                white-label customization.
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
          price="$30k–$60k"
          duration="8–12 weeks"
          features={[

          ]}
        />
        <Plan
          name="Enterprise Platform"
          price="$60k+"
          duration="10–16 weeks"
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
      <div className="text-3xl font-bold text-pink-600 mb-1">{price}</div>
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
        href="mailto:kleber@ziontechgroup.com?subject=Social Media Management Platform Inquiry"
        className="block w-full mt-6 bg-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
      >
        Get Started
      </a>
      </div>
  );
