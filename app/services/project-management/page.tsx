export const metadata = {
  title: 'Project Management | Zion Tech Group',
  description: 'Comprehensive project management solutions.',
  keywords: 'project-management, services, business, technology'
}
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Project Management
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive project management solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored project-management solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your project-management solutions run smoothly.
            </p>
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
              'Kanban boards',
              'Gantt charts',
              'Task dependencies',
              'Priority management',
              'Custom workflows',
              'Recurring tasks',
              'Task templates',
            ]}
          />
          <Item
            title="Team Collaboration"
            details={[
              'Real-time chat',
              'File sharing',
              'Comment threads',
              'Team calendars',
              'Video meetings',
              'Notification system',
              'Activity feeds',
            ]}
          />
          <Item
            title="Reporting & Analytics"
            details={[
              'Progress tracking',
              'Time tracking',
              'Resource allocation',
              'Budget management',
              'Custom dashboards',
              'Export reports',
              'Performance metrics',
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
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
      </section>

      <Pricing />
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {}
  return ("
    <div className="border border-gray-200 rounded-xl p-6 bg-white">"
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>"
      <ul className="space-y-2">
        {details.map((detail, index) => ("
          <li key={index} className="flex items-start">"
            <span className="text-orange-500 mr-2 mt-1">•</span>"
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {}
  return (
    <section>"
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Project Management Platform Pricing;
      </h2>"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan"
          name="Team Platform""
          price="$18k–$35k""
          duration="6–10 weeks"
          features={["
            "Basic task management","
            "Team collaboration tools","
            "Simple reporting","
            "Mobile app","
            "Basic integrations","
            "User management","
            "Cloud hosting",
          ]}
        />
        <Plan"
          name="Professional Platform""
          price="$35k–$70k""
          duration="8–14 weeks"
          features={["
            "Everything in Team","
            "Advanced workflows","
            "Time tracking","
            "Resource management","
            "Client portal","
            "Advanced analytics","
            "Custom integrations",
          ]}
        />
        <Plan"
          name="Enterprise Platform""
          price="$70k+""
          duration="12–20 weeks"
          features={["
            "Everything in Professional","
            "Custom development","
            "White-label options","
            "Advanced security","
            "Dedicated support","
            "SLA guarantees","
          ]}
        />
        <Plan
          name="Professional Platform"
          price="$35k–$70k"
          duration="8–14 weeks"
          features={[
            'Everything in Team',
            'Advanced workflows',
            'Time tracking',
            'Resource management',
            'Client portal',
            'Advanced analytics',
            'Custom integrations',
          ]}
        />
        <Plan
          name="Enterprise Platform"
          price="$70k+"
          duration="12–20 weeks"
          features={[
            'Everything in Professional',
            'Custom development',
            'White-label options',
            'Advanced security',
            'Dedicated support',
            'SLA guarantees',
            'On-premise deployment',
          ]}
        />
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your PM Platform?</h3>
            "On-premise deployment",
          ]}
        />
      </div>
"
      <div className="mt-12 text-center">"
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Build Your PM Platform?
        </h3>"

        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's create a powerful project management platform that streamlines'
          your team's workflow and boosts productivity.
        </p>"
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a"
            href="tel:+13024640950""
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Call +1 302 464 0950;
          </a>
          <a"
            href="mailto:kleber@ziontechgroup.com""
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
          >
            Email Us;
          </a>
        </div>
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: {
  name,
  price,
  duration,
  features,
}: {}

  name: string;
  price: string;
  duration: string;
  features: string[];
    </div>
  );
}
'"

