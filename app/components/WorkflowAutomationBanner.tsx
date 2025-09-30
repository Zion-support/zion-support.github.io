import React from 'react';
import Link from 'next/link';

export default function WorkflowAutomationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                ⚙️ Automation Focus
              </span>
              <span className="text-sky-200 text-sm">Process Optimization</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Workflow Automation: 80% Process Reduction Achieved
            </h2>
            <p className="text-xl text-sky-100 mb-6 leading-relaxed">
              Automate business processes with intelligent workflow design and smart triggers. Reduce manual work by 80% and improve efficiency across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/workflow-automation-2025"
                className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Automation Guide
              </Link>
              <Link
                href="/services/workflow-automation"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors text-center"
              >
                Automate Your Workflows
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Automation Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📉</span>
                <span>80% process reduction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Smart triggers & workflows</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>Performance monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>Custom automation rules</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}