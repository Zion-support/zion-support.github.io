import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Solutions | Zion Tech Group',
  description: 'AI-powered healthcare solutions and healthtech services for modern healthcare providers.',
};

export default function HealthcareSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Healthcare Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered healthcare solutions and healthtech services designed for modern healthcare providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Medical AI</h3>
            <p className="text-gray-300 mb-4">
              AI-powered medical diagnosis and treatment assistance.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Diagnostic Imaging</li>
              <li>• Drug Discovery</li>
              <li>• Treatment Planning</li>
              <li>• Patient Monitoring</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Health Analytics</h3>
            <p className="text-gray-300 mb-4">
              Advanced analytics for healthcare data and insights.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Patient Data Analysis</li>
              <li>• Population Health</li>
              <li>• Clinical Trials</li>
              <li>• Outcome Prediction</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Telemedicine</h3>
            <p className="text-gray-300 mb-4">
              Remote healthcare and telemedicine solutions.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Virtual Consultations</li>
              <li>• Remote Monitoring</li>
              <li>• Health Records</li>
              <li>• Appointment Scheduling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

