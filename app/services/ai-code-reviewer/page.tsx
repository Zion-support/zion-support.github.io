
export const metadata = {
  title: "AI Code Reviewer | Zion Tech Group",
  description:
    "Automated code review and quality analysis powered by AI. Improve code quality, catch bugs early, and maintain coding standards.",
};

export default function AICodeReviewerPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Code Reviewer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Automated code review and quality analysis powered by advanced AI.
          Improve code quality, catch bugs early, and maintain consistent coding
          standards across your team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="space-y-4">
            <FeatureItem
              title="Intelligent Code Analysis"
              description="AI-powered analysis of code quality, complexity, and maintainability with detailed recommendations."
            />
            <FeatureItem
              title="Security Vulnerability Detection"
              description="Automated scanning for security vulnerabilities, OWASP compliance, and best practices enforcement."
            />
            <FeatureItem
              title="Performance Optimization"
              description="Identify performance bottlenecks, memory leaks, and optimization opportunities with specific suggestions."
            />
            <FeatureItem
              title="Code Style & Standards"
              description="Enforce coding standards, detect anti-patterns, and suggest improvements for better code quality."
            />
            <FeatureItem
              title="Multi-Language Support"
              description="Support for 20+ programming languages including Python, JavaScript, Java, C++, Go, and more."
            />
            <FeatureItem
              title="Integration Ready"
              description="Seamless integration with GitHub, GitLab, Bitbucket, and popular CI/CD pipelines."
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing & Plans</h2>
          <div className="space-y-4">
            <PricingCard
              plan="Starter"
              price="$29/month"
              description="Perfect for small teams and individual developers"
              features={[
                "Up to 5 repositories",
                "Basic code analysis",
                "Standard bug detection",
                "Email support",
                "GitHub/GitLab integration",
              ]}
            />
            <PricingCard
              plan="Professional"
              price="$99/month"
              description="Ideal for growing development teams"
              features={[
                "Up to 25 repositories",
                "Advanced AI analysis",
                "Custom rules engine",
                "Priority support",
                "All integrations",
                "Team analytics dashboard",
              ]}
            />
            <PricingCard
              plan="Enterprise"
              price="$299/month"
              description="For large organizations with complex needs"
              features={[
                "Unlimited repositories",
                "Advanced security scanning",
                "Custom AI model training",
                "Dedicated support",
                "On-premise deployment",
                "Custom integrations",
              ]}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Reduce Review Time by 80%</h3>
            <p className="text-gray-600">Automated analysis catches issues before human review, significantly reducing code review time.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Improve Code Quality</h3>
            <p className="text-gray-600">Consistent analysis and suggestions help maintain high code quality across all projects.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Security</h3>
            <p className="text-gray-600">Proactive security scanning prevents vulnerabilities from reaching production environments.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Ready to Improve Your Code Quality?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who trust our AI-powered code review
          platform to maintain high-quality codebases.
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
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
  features,
  popular,
}: {
  plan: string;
  price: string;
  description: string;
  features: string[];
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
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

