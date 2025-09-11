export const metadata = {
  title: 'AI Project Management Tool | Zion Tech Group',
  description: 'Streamline your projects with AI-powered project management, automated task assignment, and intelligent resource optimization.',
};
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Project Management Demo"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Request Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Project Management</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform goes beyond traditional project management with smart automation and predictive insights.
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
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your team size and project complexity. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Team"
            price="$29"
            period="user/month"
            description="Perfect for small teams and startups"
            features={[
              "Up to 10 users",
              "AI task prioritization",
              "Basic automation",
              "Project templates",
              "Mobile app access",
              "Email support"
            ]}
          />
          <PricingTier
            name="Professional"
            price="$59"
            period="user/month"
            description="Most popular for growing teams"
            features={[
              "Up to 50 users",
              "Full AI suite",
              "Advanced analytics",
              "Custom workflows",
              "API access",
              "Priority support",
              "Advanced reporting"
            ]}
            popular={true}
          />
          <PricingTier
            name="Enterprise"
            price="$99"
            period="user/month"
            description="For large organizations with complex needs"
            features={[
              "Unlimited users",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Advanced security",
              "Custom integrations",
              "On-premise deployment"
            ]}
          />
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with your existing tools and workflows for a unified project management experience.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "Slack", icon: "💬" },
            { name: "Microsoft Teams", icon: "🔵" },
            { name: "Jira", icon: "🔧" },
            { name: "Asana", icon: "📋" },
            { name: "Trello", icon: "📌" },
            { name: "GitHub", icon: "🐙" },
            { name: "GitLab", icon: "🦊" },
            { name: "Bitbucket", icon: "🪣" },
            { name: "Google Workspace", icon: "🔍" },
            { name: "Microsoft 365", icon: "📊" },
            { name: "Zoom", icon: "📹" },
            { name: "Calendly", icon: "📅" }
          ].map((integration, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">{integration.icon}</div>
              <h3 className="font-semibold text-gray-900 text-sm">{integration.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Project Management?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join hundreds of teams already using our AI-powered project management platform to boost productivity and deliver projects on time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Project Management Inquiry"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, features }: { title: string; features: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {features.map(f => (
          <li key={f} className="flex items-center">
            <span className="text-indigo-500 mr-2">•</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="Team"
          price="$99/mo"
          features={[
            'Up to 10 team members',
            'Basic AI features',
            'Project templates',
            'Email support',
          ]}
        />
        <Plan
          name="Professional"
          price="$299/mo"
          features={[
            'Up to 50 team members',
            'Advanced AI optimization',
            'Custom workflows',
            'Priority support',
            'API integrations',
          ]}
          popular={true}
        />
        <Plan
          name="Enterprise"
          price="$799/mo"
          features={[
            'Unlimited team members',
            'Custom AI models',
            'White-label solution',
            'Dedicated support',
            'On-premise deployment',
          ]}
        />
      </div>
    </div>
  );
}

function Plan({ name, price, features, popular = false }: { name: string; price: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-indigo-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map(f => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          popular
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
