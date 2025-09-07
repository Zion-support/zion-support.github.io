import React from 'react';

export const metadata = {
  title: 'Healthcare Solutions | Zion Tech Group',
  description: 'Professional healthcare solutions for modern businesses. Transform your healthcare operations with our advanced healthcare technology.'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Healthcare Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional healthcare solutions for modern businesses. Transform your healthcare operations with our advanced healthcare technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Electronic health records</li>
              <li>• Appointment scheduling</li>
              <li>• Patient communication</li>
              <li>• Medical history tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Analytics</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Diagnostic assistance</li>
              <li>• Treatment recommendations</li>
              <li>• Outcome prediction</li>
              <li>• Research insights</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• HIPAA compliance</li>
              <li>• Data encryption</li>
              <li>• Access controls</li>
              <li>• Audit trails</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our healthcare solutions can help your business
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}