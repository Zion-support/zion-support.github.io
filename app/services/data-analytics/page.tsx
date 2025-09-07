import React from 'react';

export const metadata = { 
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.',
  keywords: 'data analytics, business intelligence, data visualization, predictive analytics, data engineering'
};

export default function DataAnalyticsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Data Analytics & BI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your data into actionable insights with advanced analytics, 
          real-time dashboards, and AI-powered business intelligence solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Data Analytics Inquiry"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Analytics Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Dashboards</h3>
          <p className="text-gray-600">
            Interactive dashboards that provide real-time insights into your business performance and KPIs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="text-4xl mb-4">🔮</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
          <p className="text-gray-600">
            AI-powered forecasting and predictive models to anticipate trends and make data-driven decisions.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Engineering</h3>
          <p className="text-gray-600">
            Robust data pipelines and ETL processes to ensure clean, reliable, and accessible data.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Contact us today to learn how our data analytics solutions can transform your business intelligence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            View All Services
          </a>
        </div>
        <div className="mt-8 text-gray-600">
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </div>
    </div>
  );
}