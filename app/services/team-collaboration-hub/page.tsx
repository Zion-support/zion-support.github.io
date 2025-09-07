<<<<<<< HEAD

export const metadata = {
  title: 'Team Collaboration Hub | Zion Tech Group',
  description: 'Professional team collaboration hub services for your business needs.',
  keywords: 'team-collaboration-hub, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Team Collaboration Hub
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional team collaboration hub services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored team collaboration hub solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your team collaboration hub solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

=======
import Link from "next/link";

export const metadata = {
  title: "Team Collaboration Hub | Zion Tech Group",
  description: "Professional team collaboration hub services for your business needs.",
  keywords: "team-collaboration-hub, services, business, technology"
};

export default function TeamCollaborationHubPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Team Collaboration Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional team collaboration hub services for your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">👥</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Team Communication
          </h3>
          <p className="text-gray-600">
            Advanced team communication tools for seamless collaboration.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📋</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Project Management
          </h3>
          <p className="text-gray-600">
            Integrated project management tools for efficient team coordination.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📁</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            File Sharing
          </h3>
          <p className="text-gray-600">
            Secure file sharing and document collaboration features.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Enhance Team Collaboration?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your team collaboration needs and implement powerful solutions.
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
