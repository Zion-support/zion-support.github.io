import Link from "next/link";

export const metadata = {
  title: "Mobile App Development | Zion Tech Group",
  description: "Create powerful mobile applications for iOS and Android with native and cross-platform solutions, featuring modern UI/UX design.",
  keywords: "mobile app development, ios apps, android apps, cross-platform development, mobile ui/ux"
};

export default function MobileAppDevelopmentPage() {

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Mobile App Development
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create powerful mobile applications for iOS and Android with native and cross-platform solutions, featuring modern UI/UX design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📱</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Native Development
          </h3>
          <p className="text-gray-600">
            High-performance native apps for iOS and Android with platform-specific optimizations.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🔄</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Cross-Platform
          </h3>
          <p className="text-gray-600">
            Efficient cross-platform development for faster deployment across multiple platforms.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🎨</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            UI/UX Design
          </h3>
          <p className="text-gray-600">
            Modern, intuitive user interfaces designed for optimal user experience and engagement.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Build Your Mobile App?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your mobile app needs and create a powerful mobile solution.
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