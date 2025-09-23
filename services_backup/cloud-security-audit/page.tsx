import Link from "next/link";

export const metadata = {
  title: "Cloud Security Audit | Zion Tech Group",
  description:
    "Comprehensive cloud security assessment and compliance auditing. Protect your infrastructure with expert security analysis."};

export default function CloudSecurityAuditPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Cloud Security Audit
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive cloud security assessment and compliance auditing
          services. Protect your infrastructure with expert security analysis
          and actionable recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Security Audit Services
          </h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🔍"
              title="Infrastructure Assessment"
              description="Comprehensive analysis of your cloud infrastructure, including AWS, Azure, and GCP environments."
            />
            <FeatureItem
              icon="🛡️"
              title="Vulnerability Scanning"
              description="Automated and manual vulnerability assessment to identify security gaps and potential threats."
            />
            <FeatureItem
              icon="📋"
              title="Compliance Auditing"
              description="Ensure compliance with SOC 2, ISO 27001, GDPR, HIPAA, and other industry standards."
            />
            <FeatureItem
              icon="🔐"
              title="Access Control Review"
              description="Analyze user permissions, IAM policies, and access patterns to identify security risks."
            />
            <FeatureItem
              icon="📊"
              title="Security Monitoring"
              description="Implement continuous security monitoring and threat detection systems."
            />
            <FeatureItem
              icon="📝"
              title="Detailed Reporting"
              description="Comprehensive security reports with prioritized recommendations and remediation plans."
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              plan="Basic Audit"
              price="$2,500"
              period="one-time"
              description="Essential security assessment for small to medium businesses"
              features={[
                "Single cloud environment audit",
                "Basic vulnerability scanning",
                "Security configuration review",
                "Written report with recommendations",
                "30-day follow-up support"]}
              popular={false}
            />
            <PricingCard
              plan="Comprehensive Audit"
              price="$7,500"
              period="one-time"
              description="Full security assessment with compliance focus"
              features={[
                "Multi-cloud environment audit",
                "Advanced vulnerability assessment",
                "Compliance gap analysis",
                "Penetration testing",
                "Detailed remediation plan",
                "90-day follow-up support"]}
              popular={true}
            />
            <PricingCard
              plan="Enterprise Audit"
              price="$15,000"
              period="one-time"
              description="Complete security program for large organizations"
              features={[
                "Full infrastructure assessment",
                "Custom compliance framework",
                "Red team exercises",
                "Security program development",
                "Ongoing monitoring setup",
                "6-month support included"]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Our Audit Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StepCard
            step="1"
            title="Discovery"
            description="Comprehensive mapping of your cloud infrastructure, applications, and data flows."
          />
          <StepCard
            step="2"
            title="Assessment"
            description="Automated and manual security testing, vulnerability scanning, and configuration analysis."
          />
          <StepCard
            step="3"
            title="Analysis"
            description="Detailed analysis of findings, risk assessment, and compliance gap identification."
          />
          <StepCard
            step="4"
            title="Reporting"
            description="Comprehensive report with prioritized recommendations and actionable remediation steps."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            What We Check
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Cloud configuration security
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Network security and firewall rules
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Identity and access management
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Data encryption and storage security
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Application security vulnerabilities
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Compliance with security standards
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
                Identify security vulnerabilities before attackers do
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Ensure compliance with industry standards
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Reduce risk of data breaches and security incidents
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Improve your security posture and resilience
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Meet customer and partner security requirements
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Why Security Audits Matter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Cost of Breaches
            </h3>
            <p className="text-gray-600">
              Average data breach costs $4.45M globally
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="font-semibold text-gray-900 mb-2">Detection Time</h3>
            <p className="text-gray-600">
              Average breach takes 287 days to detect
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="font-semibold text-gray-900 mb-2">Prevention ROI</h3>
            <p className="text-gray-600">
              $1 invested in security saves $7 in breach costs
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Ready to Secure Your Cloud Infrastructure?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Don't wait for a security incident. Get a comprehensive security audit
          and protect your business today.
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
