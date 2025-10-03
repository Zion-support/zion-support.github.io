// import React from 'react';
// Metadata interface for React Helmet
interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'Healthcare Scheduling Platform - Zion Tech Group',
  description: 'Comprehensive healthcare scheduling SaaS for hospitals and clinics. Manage appointments, patient data, and virtual consultations with HIPAA compliance.',
  keywords: 'healthcare scheduling, hospital management, patient appointments, virtual consultations, HIPAA compliance, medical software',
  robots: {
    index: true,
    follow: true,
  },
};

export default function HealthcareSchedulingPlatform() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Healthcare Scheduling Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Streamline healthcare operations with our comprehensive scheduling platform designed for hospitals, 
          clinics, and private practices. HIPAA-compliant and feature-rich.
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Healthcare Operations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">40%</div>
            <p className="text-gray-600">Reduction in scheduling errors</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">65%</div>
            <p className="text-gray-600">Faster appointment booking</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <p className="text-gray-600">Patient satisfaction rate</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Appointment Scheduling</h3>
          <p className="text-gray-600 mb-4">
            Intelligent scheduling system that optimizes appointment slots, reduces no-shows, and improves patient flow.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Automated appointment reminders</li>
            <li>• Waitlist management</li>
            <li>• Recurring appointment scheduling</li>
            <li>• Multi-provider coordination</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $199/month</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Virtual Consultations</h3>
          <p className="text-gray-600 mb-4">
            Secure video consultation platform integrated with scheduling system for seamless telehealth experiences.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• HD video consultations</li>
            <li>• Screen sharing capabilities</li>
            <li>• Session recording options</li>
            <li>• Mobile app integration</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $149/month</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Data Management</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive patient records system with medical history, treatment plans, and secure data storage.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Electronic health records (EHR)</li>
            <li>• Medical history tracking</li>
            <li>• Prescription management</li>
            <li>• Insurance verification</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $299/month</div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">HIPAA Compliance & Security</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Security Features</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• End-to-end encryption</li>
              <li>• HIPAA-compliant data storage</li>
              <li>• Multi-factor authentication</li>
              <li>• Regular security audits</li>
              <li>• Backup and disaster recovery</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Certifications</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• HIPAA Business Associate Agreement</li>
              <li>• SOC 2 Type II certification</li>
              <li>• HITRUST CSF certification</li>
              <li>• GDPR compliance</li>
              <li>• Regular compliance monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics Dashboard</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Appointment analytics</li>
              <li>• Patient flow optimization</li>
              <li>• Revenue tracking</li>
              <li>• Performance metrics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Integration Capabilities</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• EHR system integration</li>
              <li>• Payment processing</li>
              <li>• Insurance verification</li>
              <li>• Lab result integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Mobile Applications</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Patient mobile app</li>
              <li>• Provider mobile app</li>
              <li>• Admin dashboard</li>
              <li>• Offline capabilities</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-red-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Implementation</h3>
            <p className="text-gray-600 mb-4">
              Tailored implementation services including data migration, staff training, and ongoing support to ensure smooth transition.
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>• Data migration services</li>
              <li>• Staff training programs</li>
              <li>• Custom workflow design</li>
              <li>• Ongoing technical support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
            <p className="text-gray-600 mb-4">
              Cloud-based architecture that scales with your practice, from single-provider clinics to large hospital systems.
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>• Multi-location support</li>
              <li>• Unlimited user accounts</li>
              <li>• Custom reporting tools</li>
              <li>• API access for integrations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Modernize Your Healthcare Practice?</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of healthcare providers who have streamlined their operations with our comprehensive platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" 
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Request Demo
          </Link>
          <Link to="https://ziontechgroup.com/services/healthcare-scheduling-platform" 
            className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
        <div className="text-gray-600 space-y-1">
          <p><strong>Mobile:</strong> +1 302 464 0950</p>
          <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
          <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
      </div>
    </div>
  );
}