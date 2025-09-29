import React from 'react';

export const metadata = {
  title: 'Data Analytics Solutions | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, data visualization, predictive analytics, and data engineering. Turn data into actionable insights.',
  keywords: 'data analytics, business intelligence, data visualization, predictive analytics, data science'
};

const AnalyticsCard = ({ title, description, features, icon }: { title: string; description: string; features: string[]; icon: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Data Analytics Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your data into actionable insights with advanced analytics, real-time dashboards, 
            and AI-powered business intelligence solutions.
          </p>
        </div>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Analytics Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnalyticsCard
              title="Business Intelligence"
              description="Comprehensive BI solutions to help you make data-driven decisions."
              features={["Interactive dashboards", "KPI tracking", "Custom reports", "Data visualization"]}
              icon="📊"
            />
            <AnalyticsCard
              title="Predictive Analytics"
              description="Leverage machine learning to predict future trends and outcomes."
              features={["Forecasting models", "Risk assessment", "Trend analysis", "Predictive modeling"]}
              icon="🔮"
            />
            <AnalyticsCard
              title="Data Visualization"
              description="Create compelling visual representations of your data for better understanding."
              features={["Interactive charts", "Real-time dashboards", "Custom visualizations", "Mobile-friendly views"]}
              icon="📈"
            />
            <AnalyticsCard
              title="Data Engineering"
              description="Build robust data pipelines and infrastructure for reliable data processing."
              features={["ETL processes", "Data warehousing", "Pipeline automation", "Data quality management"]}
              icon="⚙️"
            />
            <AnalyticsCard
              title="Real-time Analytics"
              description="Get instant insights from your data as it's generated."
              features={["Stream processing", "Live dashboards", "Real-time alerts", "Instant reporting"]}
              icon="⚡"
            />
            <AnalyticsCard
              title="Data Science Consulting"
              description="Expert guidance on implementing data science solutions in your organization."
              features={["Strategy development", "Model deployment", "Team training", "Best practices"]}
              icon="🧠"
            />
          </div>
        </section>

        <section className="py-12 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Data Analytics Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Actionable Insights</h3>
                <p className="text-gray-600">Turn complex data into clear, actionable business insights</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">Solutions that grow with your business needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Compliant</h3>
                <p className="text-gray-600">Enterprise-grade security and compliance standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Implementation</h3>
                <p className="text-gray-600">Quick deployment and time-to-value</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your data analytics journey today and transform your business with data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}