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
          <FeatureCard
            icon="🎯"
            title="AI Task Prioritization"
            description="Automatically prioritize tasks based on deadlines, dependencies, team capacity, and business impact using machine learning."
            benefits={[
              "Smart task ranking",
              "Dependency analysis",
              "Resource optimization",
              "Deadline management",
              "Impact assessment"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Predictive Analytics"
            description="Forecast project completion dates, identify potential bottlenecks, and predict resource needs with advanced AI models."
            benefits={[
              "Completion forecasting",
              "Bottleneck detection",
              "Resource prediction",
              "Risk assessment",
              "Timeline optimization"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Smart Automation"
            description="Automate routine project tasks, status updates, and notifications based on project progress and team behavior patterns."
            benefits={[
              "Automated status updates",
              "Smart notifications",
              "Task assignment",
              "Progress tracking",
              "Workflow automation"
            ]}
          />
          <FeatureCard
            icon="👥"
            title="Team Optimization"
            description="AI-driven team member matching, workload balancing, and skill-based task assignment for maximum efficiency."
            benefits={[
              "Skill-based matching",
              "Workload balancing",
              "Team performance insights",
              "Capacity planning",
              "Collaboration optimization"
            ]}
          />
          <FeatureCard
            icon="📈"
            title="Performance Analytics"
            description="Deep insights into team productivity, project velocity, and individual performance with actionable recommendations."
            benefits={[
              "Productivity metrics",
              "Velocity tracking",
              "Performance insights",
              "Improvement suggestions",
              "ROI analysis"
            ]}
          />
          <FeatureCard
            icon="🔮"
            title="Risk Prediction"
            description="Identify potential project risks, resource conflicts, and timeline issues before they become problems."
            benefits={[
              "Risk identification",
              "Early warning system",
              "Mitigation strategies",
              "Resource conflict detection",
              "Timeline risk analysis"
            ]}
          />
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI project management platform delivers measurable improvements in team productivity and project success rates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">45%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Productivity Increase</div>
            <div className="text-sm text-gray-600">Average improvement in team efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Faster Delivery</div>
            <div className="text-sm text-gray-600">Reduction in project completion time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Risk Reduction</div>
            <div className="text-sm text-gray-600">Fewer project delays and overruns</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Cost Savings</div>
            <div className="text-sm text-gray-600">Reduction in project management overhead</div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI project management platform is designed for teams and organizations of all sizes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Teams</h3>
            <p className="text-gray-600 mb-4">Large organizations managing complex, multi-team projects with advanced resource allocation needs.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Multi-team coordination
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Advanced resource management
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Enterprise integrations
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Startups & SMBs</h3>
            <p className="text-gray-600 mb-4">Growing companies that need efficient project management without the complexity of enterprise tools.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Quick setup & onboarding
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Cost-effective scaling
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Agile methodologies
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Agencies</h3>
            <p className="text-gray-600 mb-4">Marketing and creative agencies managing multiple client projects with varying timelines and requirements.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Client project tracking
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Resource allocation
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Deadline management
              </li>
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
