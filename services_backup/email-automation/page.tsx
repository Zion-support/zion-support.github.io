export const metadata = {
  title: "Email Automation Platform | Zion Tech Group",
  description:
    "Build powerful email automation platforms with drip campaigns, personalization, and analytics. Professional email marketing solutions starting at $12k."};

export default function EmailAutomationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Email Automation Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build sophisticated email automation platforms with drip campaigns,
          personalization, and advanced analytics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Campaign Management"
            details={[
              "Visual email builder",
              "Drip campaign sequences",
              "A/B testing framework",
              "Send time optimization",
              "List segmentation",
              "Template library",
              "Mobile-responsive design"]}
          />
          <Item
            title="Personalization & AI"
            details={[
              "Dynamic content blocks",
              "AI-powered subject lines",
              "Behavioral triggers",
              "Customer journey mapping",
              "Predictive analytics",
              "Smart recommendations",
              "Real-time personalization"]}
          />
          <Item
            title="Analytics & Insights"
            details={[
              "Open & click tracking",
              "Revenue attribution",
              "Engagement scoring",
              "Deliverability monitoring",
              "ROI reporting",
              "Heatmap analysis",
              "Custom dashboards"]}
          />
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Our Email Automation Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600">
                Our clients see average 340% ROI on email marketing campaigns
                with our automation tools.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Enterprise-Grade
              </h3>
              <p className="text-gray-600">
                Built to handle millions of emails with 99.9% deliverability
                rates and advanced compliance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Easy Integration
              </h3>
              <p className="text-gray-600">
                Seamlessly integrates with CRM, e-commerce, and marketing tools
                via robust APIs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Compliance Ready
              </h3>
              <p className="text-gray-600">
                GDPR, CAN-SPAM, and CASL compliant with built-in unsubscribe
                management.
              </p>
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
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Email Automation Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan
          name="Starter Platform"
          price="$12k–$25k"
          duration="4–6 weeks"
          features={[
            "Basic email builder",
            "Drip campaigns",
            "List management",
            "Basic analytics",
            "Template library",
            "API integration",
            "Email testing"]}
        />
        <Plan
          name="Professional Platform"
          price="$25k–$50k"
          duration="6–10 weeks"
          features={[
            "Everything in Starter",
            "Advanced personalization",
            "A/B testing suite",
            "Behavioral triggers",
            "Advanced analytics",
            "CRM integration",
            "White-label options"]}
        />
        <Plan
          name="Enterprise Platform"
          price="$50k+"
          duration="8–12 weeks"
          features={[
            "Everything in Professional",
            "AI-powered features",
            "Advanced segmentation",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantees",
            "Custom development"]}
        />
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Build Your Email Platform?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's create a powerful email automation platform that drives
          engagement and revenue for your business.
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

function Plan({
  name,
  price,
  duration,
  features}: {
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
        href="mailto:kleber@ziontechgroup.com?subject=Email Automation Platform Inquiry"
        className="block w-full mt-6 bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}
