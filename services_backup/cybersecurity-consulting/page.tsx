export const metadata = {
  title: "Cybersecurity Consulting | Zion Tech Group",
  description:
    "Protect your business with comprehensive cybersecurity consulting, risk assessment, and security implementation services."};

export default function CybersecurityConsultingPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Cybersecurity Consulting
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Protect your business with comprehensive cybersecurity consulting, risk
        assessment, and security implementation services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Security Assessment"
          features={[
            "Vulnerability scanning",
            "Penetration testing",
            "Risk analysis",
            "Compliance auditing"]}
        />
        <FeatureCard
          title="Security Implementation"
          features={[
            "Firewall configuration",
            "Endpoint protection",
            "Network security",
            "Access controls"]}
        />
        <FeatureCard
          title="Incident Response"
          features={[
            "24/7 monitoring",
            "Threat detection",
            "Incident handling",
            "Recovery planning"]}
        />
      </div>

      <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose Our Cybersecurity Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <span className="text-red-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Expert Security Team
              </h3>
              <p className="text-gray-600">
                Certified professionals with 10+ years of cybersecurity
                experience
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-red-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Proactive Protection
              </h3>
              <p className="text-gray-600">
                Identify and mitigate threats before they become incidents
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-red-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Compliance Expertise
              </h3>
              <p className="text-gray-600">
                Ensure compliance with GDPR, HIPAA, SOX, and other regulations
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-red-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock monitoring and incident response capabilities
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pricing />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Secure Your Business?
        </h2>
        <p className="text-gray-600 mb-6">
          Start with a free security assessment and discover potential
          vulnerabilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  features}: {
  title: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {features.map((f) => (
          <li key={f} className="flex items-center">
            <span className="text-red-500 mr-2">•</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="Assessment"
          price="$5,999"
          features={[
            "Security audit",
            "Vulnerability scan",
            "Risk assessment report",
            "Recommendations"]}
        />
        <Plan
          name="Implementation"
          price="$15,999"
          features={[
            "Security setup",
            "Tool configuration",
            "Staff training",
            "3 months support"]}
          popular={true}
        />
        <Plan
          name="Managed Security"
          price="$4,999/mo"
          features={[
            "24/7 monitoring",
            "Incident response",
            "Regular assessments",
            "Dedicated support"]}
        />
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  features,
  popular = false}: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? "border-red-500 ring-2 ring-red-200" : "border-gray-200"}`}
    >
      {popular && (
        <div className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-red-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          popular
            ? "bg-red-600 text-white hover:bg-red-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
