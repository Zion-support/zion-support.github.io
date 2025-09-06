export const metadata = {
  title: 'DevOps Automation Services | Zion Tech Group',
  description: 'Professional DevOps automation with CI/CD pipelines, infrastructure as code, and monitoring solutions. DevOps services starting at $12k.',
};

export default function DevOpsAutomationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">DevOps Automation Services</h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional DevOps automation with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="CI/CD Pipelines"
            details={[
              'Automated testing',
              'Build automation',
              'Deployment pipelines',
              'Quality gates',
              'Rollback automation',
              'Multi-environment support',
              'Performance testing',
            ]}
          />
          <Item
            title="Infrastructure as Code"
            details={[
              'Terraform automation',
              'Ansible playbooks',
              'Kubernetes deployment',
              'Docker containerization',
              'Server provisioning',
              'Configuration management',
              'Environment replication',
            ]}
          />
          <Item
            title="Monitoring & Observability"
            details={[
              'Application monitoring',
              'Infrastructure monitoring',
              'Log aggregation',
              'Alerting systems',
              'Performance metrics',
              'Error tracking',
              'Uptime monitoring',
            ]}
          />
        </div>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">DevOps Automation Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Faster Deployments</h3>
              <p className="text-gray-600">Reduce deployment time from hours to minutes with automated CI/CD pipelines and testing.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Improved Reliability</h3>
              <p className="text-gray-600">Automated testing and rollback capabilities reduce deployment failures by up to 90%.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cost Reduction</h3>
              <p className="text-gray-600">Automate infrastructure provisioning and scaling to reduce operational costs by 30-50%.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Enhanced Security</h3>
              <p className="text-gray-600">Automated security scanning, compliance checks, and vulnerability management.</p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">DevOps Automation Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan
          name="Basic DevOps"
          price="$12k–$25k"
          duration="4–8 weeks"
          features={[
            'Basic CI/CD pipeline',
            'Docker containerization',
            'Simple monitoring',
            'Automated testing',
            'Basic documentation',
            'Email support',
            '30-day warranty',
          ]}
        />
        <Plan
          name="Professional DevOps"
          price="$25k–$50k"
          duration="8–16 weeks"
          features={[
            'Everything in Basic',
            'Advanced CI/CD',
            'Infrastructure as Code',
            'Comprehensive monitoring',
            'Security automation',
            'Priority support',
            '90-day warranty',
          ]}
        />
        <Plan
          name="Enterprise DevOps"
          price="$50k+"
          duration="12–24 weeks"
          features={[
            'Everything in Professional',
            'Custom automation',
            'Multi-cloud deployment',
            'Advanced security',
            'Dedicated support',
            'SLA guarantees',
            'Ongoing optimization',
          ]}
        />
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Automate Your DevOps?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's implement DevOps automation that accelerates your development cycle and improves reliability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
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
      <a
        href="mailto:kleber@ziontechgroup.com?subject=DevOps Automation Services Inquiry"
        className="block w-full mt-6 bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}
