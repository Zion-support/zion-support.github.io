import Link from "next/link";

export const metadata = {
<<<<<<< HEAD

  title: 'Social Media Management | Zion Tech Group',
  description: 'Professional social media management services for your business needs.',
  keywords: 'social-media-management, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Social Media Management
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional social media management services for your business needs.
=======
  title: "Social Media Management | Zion Tech Group",
  description: "Professional social media management services for your business needs.",
  keywords: "social-media-management, services, business, technology"
};

export default function SocialMediaManagementPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Social Media Management
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional social media management services for your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📱</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Content Management
          </h3>
          <p className="text-gray-600">
            Comprehensive content management tools for all social media platforms.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📅</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Scheduling
          </h3>
          <p className="text-gray-600">
            Advanced scheduling features for optimal content posting timing.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Analytics
          </h3>
          <p className="text-gray-600">
            Detailed analytics and reporting for social media performance insights.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Manage Your Social Media?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your social media management needs and implement powerful solutions.
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
