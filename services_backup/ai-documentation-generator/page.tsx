import Link from "next/link";

export const metadata = {
  title: "AI Documentation Generator | Zion Tech Group",
  description:
    "Automated documentation generation with AI-powered analysis, intelligent formatting, and multi-format output for comprehensive project documentation."};

export default function AIDocumentationGeneratorPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Documentation Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Automated documentation generation with AI-powered analysis,
          intelligent formatting, and multi-format output for comprehensive
          project documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Features & Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              title="Intelligent Code Analysis"
              description="AI-powered analysis of codebases to automatically generate comprehensive API documentation, user guides, and technical specifications."
            />
            <FeatureItem
              title="Multi-Format Output"
              description="Generate documentation in multiple formats including Markdown, HTML, PDF, and interactive web documentation with custom styling."
            />
            <FeatureItem
              title="Smart Content Generation"
              description="AI-driven content creation that understands context, generates examples, and creates user-friendly explanations for complex technical concepts."
            />
            <FeatureItem
              title="Interactive Documentation"
              description="Create interactive documentation with live code examples, API explorers, and embedded tutorials for better user experience."
            />
            <FeatureItem
              title="Version Control Integration"
              description="Seamless integration with Git repositories for automatic documentation updates and version tracking."
            />
            <FeatureItem
              title="Custom Templates"
              description="Flexible template system with customizable layouts, branding, and styling options for consistent documentation across projects."
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
              price="$39/month"
              description="Perfect for small projects and individual developers"
              features={[
                "Up to 5 projects",
                "Basic documentation generation",
                "Email support",
                "Standard templates",
                "PDF export"]}
            />
            <PricingCard
              plan="Professional"
              price="$99/month"
              description="Ideal for growing teams and larger projects"
              features={[
                "Up to 25 projects",
                "Advanced AI generation",
                "Priority support",
                "Custom templates",
                "Interactive documentation",
                "API integration"]}
            />
            <PricingCard
              plan="Enterprise"
              price="$249/month"
              description="For large organizations with complex documentation needs"
              features={[
                "Unlimited projects",
                "Custom AI models",
                "24/7 dedicated support",
                "On-premise deployment",
                "Custom integrations",
                "SLA guarantees",
                "White-label options"]}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our AI Documentation Generator?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="90% Time Savings"
            description="Automated documentation generation reduces manual documentation time by 90%, allowing teams to focus on development."
          />
          <BenefitCard
            title="Consistent Quality"
            description="AI-powered generation ensures consistent, high-quality documentation across all projects and team members."
          />
          <BenefitCard
            title="Always Up-to-Date"
            description="Automatic updates keep documentation synchronized with code changes, ensuring accuracy and relevance."
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Automate Your Documentation?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your documentation process with AI-powered generation that
          creates comprehensive, accurate, and always up-to-date documentation.
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
      <div className="flex-shrink-0 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mt-1">
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
      <div className="text-3xl font-bold text-teal-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-teal-500 mr-2">•</span> {feature}
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
