export const metadata = {
  title: "Helpdesk Platform Development | Zion Tech Group",
  description:
    "Build comprehensive helpdesk platforms with ticket management, knowledge base, and customer support tools. Professional helpdesk solutions starting at $14k."};

export default function HelpdeskPlatformPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Helpdesk Platform Development
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build comprehensive helpdesk platforms with ticket management,
          knowledge base, live chat, and customer support automation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Ticket Management"
            details={[
              "Multi-channel ticket creation",
              "Priority & status tracking",
              "Auto-assignment rules",
              "SLA monitoring",
              "Ticket routing",
              "Escalation workflows",
              "Bulk operations"]}
          />
          <Item
            title="Knowledge Base"
            details={[
              "Article management",
              "Search functionality",
              "Category organization",
              "Version control",
              "Feedback system",
              "Analytics tracking",
              "Multi-language support"]}
          />
          <Item
            title="Customer Support"
            details={[
              "Live chat integration",
              "Customer portal",
              "Self-service options",
              "Satisfaction surveys",
              "Agent performance tracking",
              "Reporting & analytics",
              "Mobile app support"]}
          />
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Helpdesk Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Multi-Channel Support
              </h3>
              <p className="text-gray-600">
                Unify support across email, chat, phone, social media, and web
                forms in one centralized platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                AI-Powered Automation
              </h3>
              <p className="text-gray-600">
                Automate ticket routing, suggest solutions, and provide instant
                responses using AI technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Enable internal notes, team assignments, and collaboration tools
                for efficient support delivery.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Custom Branding
              </h3>
              <p className="text-gray-600">
                White-label the platform with your branding for a seamless
                customer experience.
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
            <span className="text-yellow-500 mr-2 mt-1">•</span>
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
        Helpdesk Platform Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan
          name="Basic Helpdesk"
          price="$14k–$28k"
          duration="6–10 weeks"
          features={[
            "Basic ticket management",
            "Email integration",
            "Simple knowledge base",
            "Agent dashboard",
            "Basic reporting",
            "Mobile responsive",
            "Standard support"]}
        />
        <Plan
          name="Professional Helpdesk"
          price="$28k–$55k"
          duration="10–16 weeks"
          features={[
            "Everything in Basic",
            "Live chat integration",
            "Advanced automation",
            "Customer portal",
            "Advanced analytics",
            "API integrations",
            "Priority support"]}
        />
        <Plan
          name="Enterprise Helpdesk"
          price="$55k+"
          duration="14–22 weeks"
          features={[
            "Everything in Professional",
            "Custom development",
            "Advanced security",
            "Multi-tenant architecture",
            "Dedicated support",
            "SLA guarantees",
            "White-label options"]}
        />
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Build Your Helpdesk?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's create a powerful helpdesk platform that streamlines your
          customer support and improves satisfaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors"
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
      <div className="text-3xl font-bold text-yellow-600 mb-1">{price}</div>
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
        href="mailto:kleber@ziontechgroup.com?subject=Helpdesk Platform Development Inquiry"
        className="block w-full mt-6 bg-yellow-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}
