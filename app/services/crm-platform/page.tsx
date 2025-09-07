export const metadata = {
  title: 'CRM Platform | Zion Tech Group',
  description: 'Professional crm platform services for your business needs.',
  keywords: 'crm-platform, services, business, technology'
};

export default function CRMPlatformPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          CRM Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build powerful CRM platforms with lead management, sales tracking, and customer insights. Professional CRM solutions starting at $20k.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">👥</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Lead Management
          </h3>
          <p className="text-gray-600">
            Comprehensive lead management system with automated scoring and nurturing.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Sales Tracking
          </h3>
          <p className="text-gray-600">
            Track sales performance and pipeline with detailed analytics and reporting.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Customer Insights
          </h3>
          <p className="text-gray-600">
            Gain valuable insights into customer behavior and preferences for better engagement.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Build Your CRM?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your CRM needs and implement powerful platform solutions.
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