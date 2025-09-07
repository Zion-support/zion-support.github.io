import Link from "next/link";

export const metadata = {
<<<<<<< HEAD

  title: 'Mobile Development | Zion Tech Group',
  description: 'Professional mobile development services for your business needs.',
  keywords: 'mobile-development, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mobile Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional mobile development services for your business needs.
=======
  title: "Mobile Development | Zion Tech Group",
  description: "Professional mobile development services for your business needs.",
  keywords: "mobile-development, services, business, technology"
};

export default function MobileDevelopmentPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Mobile Development
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional mobile development services for your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📱</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Native Apps
          </h3>
          <p className="text-gray-600">
            High-performance native mobile applications for iOS and Android.
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
            Efficient cross-platform development for faster deployment.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
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
            Modern, intuitive user interfaces designed for optimal user experience.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Build Your Mobile App?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your mobile development needs and create powerful solutions.
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
<<<<<<< HEAD
}

=======
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
