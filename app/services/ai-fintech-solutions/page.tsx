export const metadata = {
  title: 'AI Fintech Solutions | Zion Tech Group',
  description: 'Professional AI fintech solutions services for your business needs.',
  keywords: 'ai-fintech-solutions, services, business, technology'
};

export default function AIFintechSolutionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Fintech Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cutting-edge AI solutions for the financial technology sector, including payment processing, fraud detection, and automated trading.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">💳</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Payment Processing
          </h3>
          <p className="text-gray-600">
            AI-powered payment processing systems with fraud detection and risk management.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🔒</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Fraud Detection
          </h3>
          <p className="text-gray-600">
            Advanced fraud detection and prevention systems using machine learning algorithms.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Automated Trading
          </h3>
          <p className="text-gray-600">
            AI-driven trading algorithms for automated investment and portfolio management.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Fintech?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your fintech needs and implement AI-powered solutions.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}