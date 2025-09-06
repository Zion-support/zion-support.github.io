export const metadata = {
<<<<<<< HEAD
  title: 'DevOps Automation Services | Zion Tech Group',
  description: 'Professional DevOps automation with CI/CD pipelines, infrastructure as code, and monitoring solutions. DevOps services starting at $12k.',
=======
  title: "DevOps Automation | Zion Tech Group",
  description:
    "Streamline your development workflow with comprehensive DevOps automation solutions. CI/CD, infrastructure as code, and monitoring.",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
};

export default function DevOpsAutomationPage() {
  return (
<<<<<<< HEAD
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">DevOps Automation Services</h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional DevOps automation with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation solutions.
=======
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          DevOps Automation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Streamline your development workflow with comprehensive DevOps
          automation solutions. Accelerate deployments, improve reliability, and
          reduce manual overhead.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        </p>

<<<<<<< HEAD
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
=======
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our DevOps Services
          </h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🔄"
              title="CI/CD Pipeline Setup"
              description="Complete continuous integration and deployment pipelines using Jenkins, GitLab CI, GitHub Actions, or Azure DevOps."
            />
            <FeatureItem
              icon="🏗️"
              title="Infrastructure as Code"
              description="Automate infrastructure provisioning and management using Terraform, Ansible, or CloudFormation."
            />
            <FeatureItem
              icon="🐳"
              title="Container Orchestration"
              description="Kubernetes deployment and management, Docker containerization, and microservices architecture implementation."
            />
            <FeatureItem
              icon="📊"
              title="Monitoring & Observability"
              description="Comprehensive monitoring setup with Prometheus, Grafana, ELK stack, and custom dashboards."
            />
            <FeatureItem
              icon="🔒"
              title="Security Integration"
              description="DevSecOps practices including security scanning, compliance automation, and vulnerability management."
            />
            <FeatureItem
              icon="⚡"
              title="Performance Optimization"
              description="Application performance monitoring, database optimization, and infrastructure scaling strategies."
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              plan="Starter"
              price="$3,500"
              period="one-time"
              description="Basic DevOps setup for small teams"
              features={[
                "CI/CD pipeline setup",
                "Basic monitoring configuration",
                "Docker containerization",
                "Documentation and training",
                "30-day support",
              ]}
              popular={false}
            />
            <PricingCard
              plan="Professional"
              price="$8,500"
              period="one-time"
              description="Comprehensive DevOps transformation"
              features={[
                "Full CI/CD implementation",
                "Infrastructure as Code",
                "Kubernetes deployment",
                "Advanced monitoring setup",
                "Security integration",
                "90-day support",
              ]}
              popular={true}
            />
            <PricingCard
              plan="Enterprise"
              price="$18,000"
              period="one-time"
              description="Complete DevOps platform for large organizations"
              features={[
                "Multi-environment setup",
                "Custom tooling development",
                "Advanced security automation",
                "Performance optimization",
                "Team training and mentoring",
                "6-month support",
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Our DevOps Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StepCard
            step="1"
            title="Assessment"
            description="Analyze your current development workflow, infrastructure, and identify automation opportunities."
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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

<<<<<<< HEAD
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
=======
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Technologies We Use
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                CI/CD: Jenkins, GitLab CI, GitHub Actions, Azure DevOps
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Infrastructure: Terraform, Ansible, CloudFormation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Containers: Docker, Kubernetes, Helm
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Monitoring: Prometheus, Grafana, ELK Stack
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Cloud: AWS, Azure, GCP, DigitalOcean
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Security: SonarQube, Snyk, OWASP ZAP
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Reduce deployment time by 80%
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Eliminate manual deployment errors
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Improve system reliability and uptime
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Enable faster feature delivery
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Reduce operational costs by 40%
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          DevOps Success Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Deployment Frequency
            </h3>
            <p className="text-gray-600">
              Deploy 10x more frequently with confidence
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Lead Time</h3>
            <p className="text-gray-600">
              Reduce lead time from weeks to hours
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Recovery Time</h3>
            <p className="text-gray-600">Recover from incidents 10x faster</p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <Pricing />
=======
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Development Workflow?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let us help you implement DevOps best practices and automation to
          accelerate your development process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    </div>
  );
}

<<<<<<< HEAD
function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
=======
function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  plan,
  price,
  period,
  description,
  features,
  popular,
}: {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
    >
      {popular && (
        <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-1">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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

<<<<<<< HEAD
function Pricing() {
=======
function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
