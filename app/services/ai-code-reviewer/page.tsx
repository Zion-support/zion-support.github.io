import Link from "next/link";

export const metadata = {
  title: "AI Code Reviewer | Zion Tech Group",
  description: "Automated code review and quality analysis powered by AI. Improve code quality, catch bugs early, and maintain coding standards.",
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
          Improve code quality, catch bugs early, and maintain consistent coding standards across your team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🔍"
              title="Intelligent Code Analysis"
              description="AI-powered analysis of code quality, performance, security vulnerabilities, and best practices"
            />
            <FeatureItem
              icon="⚡"
              title="Real-time Feedback"
              description="Instant feedback as you code with IDE integration and continuous monitoring"
            />
            <FeatureItem
              icon="🛡️"
              title="Security Scanning"
              description="Automated detection of security vulnerabilities, OWASP issues, and compliance violations"
            />
            <FeatureItem
              icon="📊"
              title="Quality Metrics"
              description="Comprehensive code quality metrics, technical debt analysis, and improvement recommendations"
            />
            <FeatureItem
              icon="🤖"
              title="Custom Rules Engine"
              description="Configurable coding standards and custom rules for your team's specific requirements"
            />
            <FeatureItem
              icon="📈"
              title="Team Analytics"
              description="Team performance insights, code review statistics, and productivity metrics"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              title="Starter"
              price="$29"
              period="per month"
              description="Perfect for small teams and individual developers"
              features={[
                "Up to 5 repositories",
                "Basic code analysis",
                "Security scanning",
                "Email support",
                "Standard integrations"
              ]}
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="$99"
              period="per month"
              description="Ideal for growing development teams"
              features={[
                "Up to 25 repositories",
                "Advanced AI analysis",
                "Custom rules engine",
                "Priority support",
                "All integrations",
                "Team analytics"
              ]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$299"
              period="per month"
              description="For large organizations with complex needs"
              features={[
                "Unlimited repositories",
                "Custom AI models",
                "On-premise deployment",
                "24/7 dedicated support",
                "Custom integrations",
                "Advanced security features"
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AI Code Reviewer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">50% Faster Reviews</h3>
            <p className="text-gray-600">Reduce code review time by 50% with AI-powered automated analysis</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">95% Bug Detection</h3>
            <p className="text-gray-600">Catch 95% of bugs before they reach production with advanced AI analysis</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning AI</h3>
            <p className="text-gray-600">AI learns from your codebase patterns to provide increasingly accurate feedback</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Integration & Compatibility</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <IntegrationCard name="GitHub" icon="🐙" />
          <IntegrationCard name="GitLab" icon="🦊" />
          <IntegrationCard name="Bitbucket" icon="🔵" />
          <IntegrationCard name="VS Code" icon="💻" />
          <IntegrationCard name="IntelliJ" icon="☕" />
          <IntegrationCard name="Sublime Text" icon="💎" />
          <IntegrationCard name="Vim" icon="📝" />
          <IntegrationCard name="Emacs" icon="📄" />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
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

function PricingCard({ title, price, period, description, features, popular }: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-colors ${
        popular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
}

function IntegrationCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Improve Your Code Quality?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Start your free trial today and see how AI can transform your development workflow. 
        No credit card required for the first 14 days.
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
  );
}