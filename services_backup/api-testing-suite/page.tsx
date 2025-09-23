import Link from "next/link";

export const metadata = {
  title: "API Testing Suite | Zion Tech Group",
  description:
    "Comprehensive API testing platform with automated testing, monitoring, and documentation. Ensure your APIs are reliable and performant."};

export default function APITestingSuitePage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          API Testing Suite
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive API testing platform with automated testing, monitoring,
          and documentation. Ensure your APIs are reliable, performant, and
          secure with enterprise-grade testing tools.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🧪"
              title="Automated Testing"
              description="Create and run comprehensive API test suites with automated regression testing"
            />
            <FeatureItem
              icon="📊"
              title="Performance Testing"
              description="Load testing, stress testing, and performance monitoring with detailed metrics"
            />
            <FeatureItem
              icon="🔒"
              title="Security Testing"
              description="Automated security scanning for OWASP vulnerabilities and authentication issues"
            />
            <FeatureItem
              icon="📝"
              title="API Documentation"
              description="Auto-generate comprehensive API documentation with interactive examples"
            />
            <FeatureItem
              icon="🔍"
              title="Contract Testing"
              description="Validate API contracts and ensure backward compatibility across versions"
            />
            <FeatureItem
              icon="📈"
              title="Real-time Monitoring"
              description="24/7 API monitoring with alerts, uptime tracking, and performance metrics"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              title="Developer"
              price="$29"
              period="per month"
              description="Perfect for individual developers and small projects"
              features={[
                "Up to 10 APIs",
                "Basic testing suite",
                "Standard monitoring",
                "Email support",
                "Basic documentation"]}
              popular={false}
            />
            <PricingCard
              title="Team"
              price="$99"
              period="per month"
              description="Ideal for development teams and growing companies"
              features={[
                "Up to 50 APIs",
                "Advanced testing",
                "Performance testing",
                "Priority support",
                "Team collaboration",
                "Custom integrations"]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$299"
              period="per month"
              description="For large organizations with complex API ecosystems"
              features={[
                "Unlimited APIs",
                "Custom test frameworks",
                "Advanced security testing",
                "24/7 support",
                "Custom integrations",
                "On-premise deployment"]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Testing Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestingCapability
            icon="✅"
            title="Functional Testing"
            description="Validate API endpoints, request/response formats, and business logic"
          />
          <TestingCapability
            icon="⚡"
            title="Performance Testing"
            description="Load testing, stress testing, and performance benchmarking"
          />
          <TestingCapability
            icon="🔒"
            title="Security Testing"
            description="Authentication, authorization, and vulnerability scanning"
          />
          <TestingCapability
            icon="🔄"
            title="Integration Testing"
            description="End-to-end testing across multiple APIs and services"
          />
          <TestingCapability
            icon="📊"
            title="Contract Testing"
            description="API contract validation and schema compliance testing"
          />
          <TestingCapability
            icon="🌐"
            title="Compatibility Testing"
            description="Cross-browser and cross-platform API compatibility"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Supported Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <TechCard name="REST APIs" icon="🌐" />
          <TechCard name="GraphQL" icon="🔷" />
          <TechCard name="gRPC" icon="⚡" />
          <TechCard name="WebSockets" icon="🔌" />
          <TechCard name="SOAP" icon="🧼" />
          <TechCard name="Webhooks" icon="🎣" />
          <TechCard name="Microservices" icon="🏗️" />
          <TechCard name="Serverless" icon="☁️" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our API Testing Suite?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              90% Faster Testing
            </h3>
            <p className="text-gray-600">
              Reduce API testing time by 90% with automated test generation and
              execution
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              99.9% Uptime
            </h3>
            <p className="text-gray-600">
              Ensure your APIs are always available with comprehensive
              monitoring and alerting
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Enterprise Security
            </h3>
            <p className="text-gray-600">
              Advanced security testing and compliance with industry standards
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Integration & CI/CD
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <IntegrationCard name="GitHub Actions" icon="🐙" />
          <IntegrationCard name="Jenkins" icon="🔧" />
          <IntegrationCard name="GitLab CI" icon="🦊" />
          <IntegrationCard name="Azure DevOps" icon="☁️" />
          <IntegrationCard name="CircleCI" icon="⭕" />
          <IntegrationCard name="Travis CI" icon="🦎" />
          <IntegrationCard name="Bamboo" icon="🎋" />
          <IntegrationCard name="TeamCity" icon="🏢" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UseCaseCard
            icon="🏢"
            title="Enterprise APIs"
            description="Large organizations managing complex API ecosystems with strict compliance requirements"
          />
          <UseCaseCard
            icon="🚀"
            title="Startup Development"
            description="Fast-growing startups needing reliable API testing for rapid iteration"
          />
          <UseCaseCard
            icon="🏦"
            title="Financial Services"
            description="Banks and fintech companies requiring high-security API testing and monitoring"
          />
          <UseCaseCard
            icon="🏥"
            title="Healthcare APIs"
            description="Healthcare organizations managing patient data APIs with HIPAA compliance"
          />
        </div>
      </div>

      <CTA />
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
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? "border-indigo-500 bg-indigo-50" : "border-gray-200 bg-white"}`}
    >
      {popular && (
        <div className="bg-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-indigo-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Start Free Trial
      </button>
    </div>
  );
}

function TestingCapability({
  icon,
  title,
  description}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TechCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  );
}

function IntegrationCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  );
}

function UseCaseCard({
  icon,
  title,
  description}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Ensure API Reliability?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Start your free trial today and experience comprehensive API testing and
        monitoring. Test your first 5 APIs for free.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
