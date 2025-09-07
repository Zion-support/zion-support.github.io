import Link from "next/link";

export const metadata = {
  title: "Helpdesk Platform | Zion Tech Group",
  description: "Professional helpdesk platform services for your business needs.",
  keywords: "helpdesk-platform, services, business, technology"
};

export default function HelpdeskPlatformPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Helpdesk Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional helpdesk platform services for your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🎧</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Customer Support
          </h3>
          <p className="text-gray-600">
            Provide excellent customer support with our helpdesk platform.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Response
          </h3>
          <p className="text-gray-600">
            Respond to customer inquiries quickly and efficiently.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Analytics & Insights
          </h3>
          <p className="text-gray-600">
            Track and analyze customer support performance to improve service.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Enhance Your Customer Support?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your helpdesk needs and create intelligent solutions.
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