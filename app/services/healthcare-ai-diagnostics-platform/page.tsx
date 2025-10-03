import React from 'react';
import { Link } from 'react-router-dom';


export default function HealthcareAIDiagnostics() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Healthcare AI Diagnostics Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform healthcare delivery with our AI-powered diagnostic platform. 
          Enhance accuracy, accelerate diagnosis, and improve patient outcomes with cutting-edge medical AI.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-12">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Diagnostic Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
            <div className="text-gray-600">Faster Diagnosis</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
            <div className="text-gray-600">Cost Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">HIPAA</div>
            <div className="text-gray-600">Compliant</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Imaging AI</h3>
          <p className="text-gray-600 mb-4">
            Advanced AI algorithms for radiology, pathology, and medical imaging analysis with FDA-approved accuracy.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• X-ray analysis</li>
            <li>• MRI interpretation</li>
            <li>• CT scan analysis</li>
            <li>• Pathology detection</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Clinical Decision Support</h3>
          <p className="text-gray-600 mb-4">
            AI-powered clinical decision support system that provides evidence-based recommendations and alerts.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Symptom analysis</li>
            <li>• Treatment recommendations</li>
            <li>• Drug interaction alerts</li>
            <li>• Risk assessment</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
          <p className="text-gray-600 mb-4">
            Predict patient outcomes, readmission risks, and disease progression using advanced machine learning.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Readmission prediction</li>
            <li>• Disease progression</li>
            <li>• Treatment response</li>
            <li>• Risk stratification</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Early Detection</h3>
          <p className="text-gray-600 mb-4">
            Detect diseases and conditions in their early stages when treatment is most effective.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Cancer screening</li>
            <li>• Cardiovascular risk</li>
            <li>• Neurological disorders</li>
            <li>• Chronic disease markers</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
          <p className="text-gray-600 mb-4">
            Ensure diagnostic quality and consistency across all medical imaging and test results.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Quality scoring</li>
            <li>• Consistency checks</li>
            <li>• Error detection</li>
            <li>• Performance monitoring</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Electronic Health Records</h3>
          <p className="text-gray-600 mb-4">
            Seamlessly integrate with EHR systems and provide intelligent data analysis and insights.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• EHR integration</li>
            <li>• Data extraction</li>
            <li>• Pattern recognition</li>
            <li>• Automated documentation</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Clinic</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$2,999/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 1,000 scans/month</li>
              <li>• Basic AI diagnostics</li>
              <li>• Standard imaging analysis</li>
              <li>• Email support</li>
              <li>• Basic reporting</li>
            </ul>
            <Link href="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500">
            <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hospital</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$7,999/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 10,000 scans/month</li>
              <li>• Advanced AI models</li>
              <li>• Multi-modality imaging</li>
              <li>• Priority support</li>
              <li>• Advanced analytics</li>
              <li>• API access</li>
            </ul>
            <Link href="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Health System</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">Custom</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Unlimited scans</li>
              <li>• Custom AI models</li>
              <li>• Dedicated support</li>
              <li>• On-premise deployment</li>
              <li>• Custom integrations</li>
              <li>• SLA guarantee</li>
            </ul>
            <Link href="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Compliance & Security</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">HIPAA Compliant</h3>
            <p className="text-gray-600 mb-4">
              Full HIPAA compliance with encrypted data transmission, secure storage, and comprehensive audit trails.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">FDA Approved</h3>
            <p className="text-gray-600">
              Our AI models are FDA-approved for clinical use, ensuring safety and efficacy in medical applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">SOC 2 Certified</h3>
            <p className="text-gray-600 mb-4">
              SOC 2 Type II certification ensures the highest standards of security, availability, and confidentiality.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Privacy</h3>
            <p className="text-gray-600">
              Advanced data privacy controls with patient consent management and anonymization capabilities.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Regional Medical Center</h3>
            <p className="text-gray-600 mb-4">
              "Reduced diagnostic time by 60% and improved accuracy by 15% using AI-powered imaging analysis. Our radiologists can now focus on complex cases."
            </p>
            <div className="text-sm text-gray-500">- Dr. Sarah Williams, Chief Radiologist</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Specialty Clinic</h3>
            <p className="text-gray-600 mb-4">
              "Early detection capabilities helped identify 40% more cases in early stages, significantly improving patient outcomes and treatment success rates."
            </p>
            <div className="text-sm text-gray-500">- Dr. Michael Rodriguez, Medical Director</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Revolutionize Healthcare with AI</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join leading healthcare providers using our AI diagnostics platform to improve patient care, reduce costs, and enhance clinical outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule Demo
          </Link>
          <Link href="tel:+13024640950" className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
            Call +1 302 464 0950
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a>
        </p>
      </div>
    </div>
  );
}