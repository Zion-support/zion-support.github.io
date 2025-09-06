import Link from 'next/link';

export const metadata = {
<<<<<<< HEAD
  title: "AI Code Reviewer | Zion Tech Group",
  description: "Automated code review and quality analysis powered by AI. Improve code quality, catch bugs early, and maintain coding standards.",
=======
  title: 'AI Code Reviewer | Zion Tech Group',
  description: 'Automated code review with AI-powered analysis, security scanning, and performance optimization suggestions.',
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
};

export default function AICodeReviewerPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Code Reviewer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
          Automated code review and quality analysis powered by advanced AI. 
          Improve code quality, catch bugs early, and maintain consistent coding standards across your team.
=======
          Automated code review with AI-powered analysis, security scanning, and performance optimization suggestions.
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
<<<<<<< HEAD
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🔍"
              title="Intelligent Code Analysis"
              description="AI-powered analysis that understands context, patterns, and best practices to provide meaningful feedback."
            />
            <FeatureItem
              icon="🐛"
              title="Bug Detection"
              description="Automatically identify potential bugs, security vulnerabilities, and performance issues before they reach production."
            />
            <FeatureItem
              icon="📏"
              title="Code Quality Metrics"
              description="Comprehensive quality metrics including complexity, maintainability, test coverage, and technical debt analysis."
            />
            <FeatureItem
              icon="🎯"
              title="Custom Rules Engine"
              description="Define custom coding standards and rules specific to your team's requirements and project needs."
            />
            <FeatureItem
              icon="⚡"
              title="Real-time Feedback"
              description="Get instant feedback as you code with IDE integrations and continuous analysis during development."
            />
            <FeatureItem
              icon="📊"
              title="Team Analytics"
              description="Track code quality trends, team performance metrics, and improvement areas across your organization."
=======
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Features & Capabilities</h2>
          <div className="space-y-6">
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
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
            />
          </div>
        </div>

        <div>
<<<<<<< HEAD
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              plan="Starter"
              price="$29"
              period="per month"
              description="Perfect for small teams and individual developers"
              features={[
                "Up to 5 repositories",
                "Basic code analysis",
                "Standard bug detection",
                "Email support",
                "GitHub/GitLab integration"
              ]}
              popular={false}
            />
            <PricingCard
              plan="Professional"
              price="$99"
              period="per month"
              description="Ideal for growing teams and mid-size projects"
              features={[
                "Up to 25 repositories",
                "Advanced AI analysis",
                "Custom rules engine",
                "Priority support",
                "All integrations",
                "Team analytics dashboard"
              ]}
              popular={true}
            />
            <PricingCard
              plan="Enterprise"
              price="$299"
              period="per month"
              description="For large organizations with complex needs"
              features={[
                "Unlimited repositories",
                "Advanced security scanning",
                "Custom AI model training",
                "Dedicated support",
                "On-premise deployment",
                "Custom integrations"
              ]}
              popular={false}
=======
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing & Plans</h2>
          <div className="space-y-4">
            <PricingCard
              plan="Starter"
              price="$29/month"
              description="Perfect for small teams and individual developers"
              features={[
                'Up to 10,000 lines of code per month',
                'Basic security scanning',
                'Code quality analysis',
                'Email support',
                'GitHub integration',
              ]}
            />
            <PricingCard
              plan="Professional"
              price="$99/month"
              description="Ideal for growing development teams"
              features={[
                'Up to 100,000 lines of code per month',
                'Advanced security scanning',
                'Performance optimization',
                'Priority support',
                'All integrations included',
                'Custom rules and standards',
              ]}
            />
            <PricingCard
              plan="Enterprise"
              price="$299/month"
              description="For large organizations with complex needs"
              features={[
                'Unlimited code analysis',
                'Enterprise security scanning',
                'Custom AI model training',
                '24/7 dedicated support',
                'On-premise deployment',
                'Custom integrations',
                'SLA guarantees',
              ]}
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
            />
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            step="1"
            title="Connect Your Repository"
            description="Integrate with GitHub, GitLab, or Bitbucket in just a few clicks. No complex setup required."
          />
          <StepCard
            step="2"
            title="AI Analysis"
            description="Our AI analyzes your code for quality issues, bugs, security vulnerabilities, and adherence to best practices."
          />
          <StepCard
            step="3"
            title="Get Actionable Insights"
            description="Receive detailed reports with specific recommendations to improve your code quality and team productivity."
=======
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AI Code Reviewer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="Reduce Review Time by 80%"
            description="Automated analysis catches issues before human review, significantly reducing code review time."
          />
          <BenefitCard
            title="Improve Code Quality"
            description="Consistent analysis and suggestions help maintain high code quality across all projects."
          />
          <BenefitCard
            title="Enhanced Security"
            description="Proactive security scanning prevents vulnerabilities from reaching production environments."
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
          />
        </div>
      </div>

      <div className="text-center">
<<<<<<< HEAD
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Improve Your Code Quality?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who trust our AI-powered code review platform to maintain high-quality codebases.
=======
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Improve Your Code Quality?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Get started with our AI Code Reviewer and see immediate improvements in your code quality and security.
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
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
<<<<<<< HEAD
=======
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
=======
function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

<<<<<<< HEAD
function PricingCard({ plan, price, period, description, features, popular }: {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
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
=======
function PricingCard({ plan, price, description, features }: {
  plan: string;
  price: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-blue-500 mr-2">•</span> {feature}
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
          </li>
        ))}
      </ul>
    </div>
  );
}

<<<<<<< HEAD
function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
=======
function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
