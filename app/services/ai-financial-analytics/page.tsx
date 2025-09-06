export const metadata = {
  title: 'AI Financial Analytics Platform | Zion Tech Group',
  description: 'Advanced financial analytics with AI-powered forecasting, risk assessment, and investment insights. Make data-driven financial decisions with 95% accuracy predictions.',
  keywords: 'AI financial analytics, financial forecasting, investment analysis, risk assessment, financial planning, portfolio optimization'
};

export default function AIFinancialAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Financial Analytics
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Advanced financial analytics with AI-powered forecasting and risk assessment
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Modeling</h3>
              <p className="text-gray-600 mb-4">AI-powered financial forecasting with 95% accuracy predictions.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Assessment</h3>
              <p className="text-gray-600 mb-4">Comprehensive risk analysis and portfolio optimization.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Insights</h3>
              <p className="text-gray-600 mb-4">Data-driven investment recommendations and market analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Financial Analysis?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your financial decision-making.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}