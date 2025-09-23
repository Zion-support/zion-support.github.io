import React from "react";

export const metadata = {
  title: "AI Code Assistant | Zion Tech Group",
  description:
    "Intelligent code generation, debugging, and optimization powered by advanced AI. Boost developer productivity by 300% with our AI-powered coding assistant."};

export default function AICodeAssistantPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Code Assistant
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your coding experience with our intelligent AI assistant.
          Generate code, debug issues, optimize performance, and learn best
          practices with 24/7 AI-powered support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started - $99/month
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Powerful AI Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="Intelligent Code Generation"
            description="Generate production-ready code in any language with context-aware suggestions and best practices."
            features={[
              "Multi-language support (Python, JavaScript, Java, C++, Go, Rust)",
              "Context-aware code completion",
              "Function and class generation",
              "API integration code"]}
          />
          <FeatureCard
            icon="🐛"
            title="Smart Debugging"
            description="Automatically identify and fix bugs with AI-powered analysis and suggested solutions."
            features={[
              "Real-time error detection",
              "Performance bottleneck identification",
              "Memory leak detection",
              "Security vulnerability scanning"]}
          />
          <FeatureCard
            icon="⚡"
            title="Code Optimization"
            description="Automatically optimize your code for performance, readability, and maintainability."
            features={[
              "Performance optimization suggestions",
              "Code refactoring recommendations",
              "Best practice enforcement",
              "Documentation generation"]}
          />
          <FeatureCard
            icon="📚"
            title="Learning Assistant"
            description="Learn new technologies and frameworks with personalized AI tutoring and examples."
            features={[
              "Interactive coding tutorials",
              "Technology-specific guidance",
              "Code explanation and comments",
              "Learning path recommendations"]}
          />
          <FeatureCard
            icon="🔧"
            title="IDE Integration"
            description="Seamlessly integrate with your favorite development environment and tools."
            features={[
              "VS Code extension",
              "IntelliJ IDEA plugin",
              "Vim/Neovim support",
              "Command-line interface"]}
          />
          <FeatureCard
            icon="🛡️"
            title="Security & Compliance"
            description="Ensure your code meets security standards and compliance requirements."
            features={[
              "Security vulnerability scanning",
              "Compliance checking (SOC2, GDPR, HIPAA)",
              "Code quality metrics",
              "Automated testing suggestions"]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Starter"
            price="$99"
            period="month"
            description="Perfect for individual developers and small teams"
            features={[
              "Up to 10,000 code generations/month",
              "5 programming languages",
              "Basic debugging assistance",
              "Email support",
              "VS Code integration"]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$299"
            period="month"
            description="Ideal for growing development teams"
            features={[
              "Up to 50,000 code generations/month",
              "All programming languages",
              "Advanced debugging & optimization",
              "Priority support",
              "All IDE integrations",
              "Team collaboration features"]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$999"
            period="month"
            description="For large organizations with advanced needs"
            features={[
              "Unlimited code generations",
              "Custom AI model training",
              "On-premise deployment",
              "24/7 dedicated support",
              "Custom integrations",
              "Security & compliance tools"]}
            popular={false}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Our AI Code Assistant?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Proven Results
            </h3>
            <div className="space-y-4">
              <StatItem
                number="300%"
                label="Increase in Developer Productivity"
              />
              <StatItem number="50%" label="Reduction in Bug Reports" />
              <StatItem number="40%" label="Faster Time to Market" />
              <StatItem number="95%" label="Developer Satisfaction Rate" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Enterprise Features
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Bank-grade security and encryption</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>99.9% uptime guarantee</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>SOC2 Type II compliant</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Custom model training</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>On-premise deployment options</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Supercharge Your Development?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of developers who have already transformed their coding
          experience with our AI assistant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-6 text-sm text-blue-100">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  features}: {
  icon: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`bg-white p-8 rounded-lg shadow-md border-2 ${popular ? "border-blue-500" : "border-gray-200"} relative`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-blue-600">{number}</span>
      <span className="text-gray-600">{label}</span>
    </div>
  );
}
