import Link from "next/link";

export const metadata = {
  title: "DevOps Automation | Zion Tech Group",
  description: "Streamline your development and deployment processes with comprehensive DevOps automation solutions, CI/CD pipelines, and infrastructure as code.",
  keywords: "devops automation, ci/cd, infrastructure as code, deployment automation, cloud devops"
};

export default function DevOpsAutomationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          DevOps Automation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Streamline your development and deployment processes with comprehensive DevOps automation solutions, CI/CD pipelines, and infrastructure as code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🔄</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            CI/CD Pipelines
          </h3>
          <p className="text-gray-600">
            Automated continuous integration and deployment pipelines for faster, more reliable releases.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🏗️</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Infrastructure as Code
          </h3>
          <p className="text-gray-600">
            Manage and provision infrastructure through code for consistency and scalability.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Monitoring & Alerting
          </h3>
          <p className="text-gray-600">
            Comprehensive monitoring and alerting systems for proactive issue detection.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Automate Your DevOps?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your DevOps automation needs and implement efficient CI/CD solutions.
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