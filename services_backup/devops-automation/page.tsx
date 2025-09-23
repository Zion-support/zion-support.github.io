import Link from "next/link";

export const metadata = {
  title: "DevOps Automation | Zion Tech Group",
  description:
    "Streamline your development workflow with comprehensive DevOps automation solutions. CI/CD, infrastructure as code, and monitoring."};

export default function DevOpsAutomationPage() {
  return (
<div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          DevOps Automation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Streamline your development workflow with comprehensive DevOps
          automation solutions. Accelerate deployments, improve reliability, and
          reduce manual overhead.
        </p>
      </div>

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
                "30-day support"]}
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
                "90-day support"]}
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
                "6-month support"]}
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
          />
          <StepCard
            step="2"
            title="Design"
            description="Design custom DevOps architecture and automation workflows tailored to your needs."
          />
          <StepCard
            step="3"
            title="Implementation"
            description="Build and deploy CI/CD pipelines, monitoring systems, and infrastructure automation."
          />
          <StepCard
            step="4"
            title="Optimization"
            description="Monitor performance, optimize workflows, and provide ongoing support and improvements."
          />
        </div>
      </div>

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
          </div>
        </div>
      </div>

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
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description}: {
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
  popular}: {
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
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
</div>
  );
}

function StepCard({
  step,
  title,
  description}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
