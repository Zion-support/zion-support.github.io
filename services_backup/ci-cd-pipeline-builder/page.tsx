import Link from "next/link";

export const metadata = {
  title: "CI/CD Pipeline Builder | Zion Tech Group",
  description:
    "Automated CI/CD pipeline creation with intelligent deployment strategies, monitoring, and rollback capabilities for faster, safer releases."};

export default function CICDPipelineBuilderPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          CI/CD Pipeline Builder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Automated CI/CD pipeline creation with intelligent deployment
          strategies, monitoring, and rollback capabilities for faster, safer
          releases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Features & Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              title="Visual Pipeline Designer"
              description="Drag-and-drop interface to create complex CI/CD pipelines without coding, with pre-built templates for common workflows."
            />
            <FeatureItem
              title="Intelligent Deployment Strategies"
              description="AI-powered deployment strategies including blue-green, canary, and rolling deployments with automatic rollback triggers."
            />
            <FeatureItem
              title="Multi-Cloud Support"
              description="Deploy to AWS, Azure, GCP, or on-premise with unified pipeline management and cross-cloud monitoring."
            />
            <FeatureItem
              title="Automated Testing Integration"
              description="Seamlessly integrate unit tests, integration tests, security scans, and performance tests into your pipeline."
            />
            <FeatureItem
              title="Real-time Monitoring"
              description="Comprehensive monitoring and alerting for pipeline health, deployment success rates, and performance metrics."
            />
            <FeatureItem
              title="Security & Compliance"
              description="Built-in security scanning, compliance checks, and audit trails for enterprise-grade deployments."
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pricing & Plans
          </h2>
          <div className="space-y-4">
            <PricingCard
              plan="Starter"
              price="$79/month"
              description="Perfect for small teams and simple deployments"
              features={[
                "Up to 5 pipelines",
                "Basic deployment strategies",
                "Single cloud support",
                "Email support",
                "Basic monitoring"]}
            />
            <PricingCard
              plan="Professional"
              price="$199/month"
              description="Ideal for growing development teams"
              features={[
                "Up to 25 pipelines",
                "Advanced deployment strategies",
                "Multi-cloud support",
                "Priority support",
                "Advanced monitoring",
                "Custom integrations"]}
            />
            <PricingCard
              plan="Enterprise"
              price="$499/month"
              description="For large organizations with complex deployment needs"
              features={[
                "Unlimited pipelines",
                "Custom deployment strategies",
                "24/7 dedicated support",
                "On-premise deployment",
                "Advanced security features",
                "SLA guarantees",
                "Custom training"]}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our CI/CD Pipeline Builder?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="10x Faster Deployments"
            description="Automated pipeline creation and intelligent deployment strategies reduce deployment time from hours to minutes."
          />
          <BenefitCard
            title="99.9% Uptime Guarantee"
            description="Intelligent rollback mechanisms and comprehensive monitoring ensure maximum uptime and reliability."
          />
          <BenefitCard
            title="Zero-Downtime Deployments"
            description="Advanced deployment strategies ensure your applications remain available during updates and releases."
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Streamline Your Deployments?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your deployment process with intelligent CI/CD pipelines
          that adapt to your needs and scale with your growth.
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
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  title,
  description}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  plan,
  price,
  description,
  features}: {
  plan: string;
  price: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan}</h3>
      <div className="text-3xl font-bold text-purple-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-purple-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({
  title,
  description}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
