export const metadata = {
  title: 'AI Testing Automation | Zion Tech Group',
  description: 'AI-powered testing automation solutions for intelligent test generation, execution, and maintenance with advanced machine learning.',
  keywords: 'AI testing automation, automated testing, test generation, quality assurance, testing AI',
};

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-orange-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AITestingAutomationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Testing Automation</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered testing automation solutions for intelligent test generation, execution,
          and maintenance. Ensure quality with advanced machine learning and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Intelligent Test Generation"
          details={[
            'AI-generated test cases',
            'Smart test data creation',
            'Edge case identification',
            'Test scenario optimization',
            'Automated test planning',
          ]}
        />
        <FeatureCard
          title="Automated Execution"
          details={[
            'Cross-platform testing',
            'Parallel test execution',
            'Continuous integration',
            'Regression testing',
            'Performance testing',
          ]}
        />
        <FeatureCard
          title="Smart Maintenance"
          details={[
            'Self-healing tests',
            'Dynamic test updates',
            'Failure analysis',
            'Test optimization',
            'Maintenance automation',
          ]}
        />
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Automate Your Testing?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your testing process with AI-powered automation that generates intelligent tests,
          executes them efficiently, and maintains them automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
}