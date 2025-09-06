export const metadata = {
  title: 'AI Customer Insights | Zion Tech Group',
  description: 'Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, preferences, and trends.',
  keywords: 'AI customer insights, customer analytics, behavior analysis, sentiment analysis, predictive analytics',
};

export default function AICustomerInsightsPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Customer Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform customer data into actionable insights with AI-powered analytics. 
            Understand customer behavior, preferences, and trends to drive better 
            business decisions and improve customer experience.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Integration</h3>
              <p className="text-gray-600">Connect multiple data sources for comprehensive customer view</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Behavior Analysis</h3>
              <p className="text-gray-600">AI-powered analysis of customer behavior patterns and preferences</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">Predict future customer behavior and identify opportunities</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">25% Higher Retention</h3>
              <p className="text-gray-600">AI insights help identify and prevent customer churn</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">40% Revenue Increase</h3>
              <p className="text-gray-600">Better targeting and personalization drive higher revenue</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Better Targeting</h3>
              <p className="text-gray-600">Precise customer segmentation and personalized experiences</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Insights</h3>
              <p className="text-gray-600">Instant access to customer insights and trends</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-blue-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Unlock Customer Insights?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover the power of AI-driven customer analytics.
          </p>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Customer Insights Inquiry"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}