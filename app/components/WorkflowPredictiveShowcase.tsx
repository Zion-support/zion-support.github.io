'use client';

import { useState } from 'react';

const workflows = [
  {
    id: 'sales',
    title: 'Sales Inquiry Automation',
    icon: '💼',
    steps: ['Send auto-reply', 'Create CRM contact', 'Schedule follow-up task', 'Notify sales team'],
    description: 'Automatically handle sales inquiries with multi-step workflows',
  },
  {
    id: 'support',
    title: 'Support Ticket Automation',
    icon: '🎫',
    steps: ['Send acknowledgment', 'Create Jira ticket', 'Route to team', 'Notify support channel'],
    description: 'Auto-create and route support tickets to the right team',
  },
  {
    id: 'urgent',
    title: 'Urgent Issue Escalation',
    icon: '🚨',
    steps: ['Immediate acknowledgment', 'Page on-call engineer', 'Create incident ticket', 'Alert incident channel'],
    description: 'Immediate escalation for critical production issues',
  },
];

const predictions = [
  { type: 'Response Time', icon: '⏱️', description: 'Predict how long to respond based on category, urgency, and history' },
  { type: 'Follow-Up Needed', icon: '🔄', description: 'Predict if email will need follow-up (85% accuracy for sales)' },
  { type: 'Relationship Risk', icon: '⚠️', description: 'Identify at-risk client relationships before they churn' },
  { type: 'Escalation Likelihood', icon: '📈', description: 'Predict if email will need escalation to senior team' },
];

export default function WorkflowPredictiveShowcase() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(workflows[0]);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Workflow Automation & Predictive Analytics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            V92 & V93: Automate complex workflows and predict outcomes before they happen
          </p>
        </div>

        {/* V92: Workflow Automation */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full px-6 py-2 mb-4">
              <span className="text-white font-bold">V92: Workflow Automation Chains</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Multi-Step Automated Workflows</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Trigger complex automation chains based on email patterns. Conditional branching, delays, and integration with external tools.
            </p>
          </div>

          {/* Workflow Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {workflows.map((wf) => (
              <button
                key={wf.id}
                onClick={() => setSelectedWorkflow(wf)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  selectedWorkflow.id === wf.id
                    ? 'border-cyan-400 bg-cyan-500/20 shadow-2xl scale-105'
                    : 'border-gray-700 bg-slate-800/50 hover:border-gray-500'
                }`}
              >
                <div className="text-4xl mb-3">{wf.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{wf.title}</h4>
                <p className="text-sm text-gray-400">{wf.description}</p>
              </button>
            ))}
          </div>

          {/* Workflow Steps */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h4 className="text-2xl font-bold text-white mb-6">{selectedWorkflow.title} - Workflow Steps</h4>
            <div className="space-y-4">
              {selectedWorkflow.steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1 bg-slate-700/50 rounded-lg p-4">
                    <p className="text-gray-200">{step}</p>
                  </div>
                  {idx < selectedWorkflow.steps.length - 1 && (
                    <div className="text-cyan-400 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* V93: Predictive Analytics */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2 mb-4">
              <span className="text-white font-bold">V93: Predictive Analytics</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Predict Outcomes Before They Happen</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              AI-powered predictions for response times, follow-up needs, relationship health, and escalation likelihood.
            </p>
          </div>

          {/* Predictions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {predictions.map((pred, idx) => (
              <div key={idx} className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all">
                <div className="text-4xl mb-4">{pred.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{pred.type}</h4>
                <p className="text-gray-300">{pred.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-gray-400">Follow-Up Prediction Accuracy</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <div className="text-gray-400">Default Workflows</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-4xl font-bold text-white mb-2">4</div>
              <div className="text-gray-400">Prediction Types</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Autonomous Operation</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Email Workflows?
            </h4>
            <p className="text-gray-200 mb-6">
              Contact us to implement AI-powered workflow automation and predictive analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-left">
              <div className="text-white">
                <div className="font-semibold">📞 Phone:</div>
                <div>+1 302 464 0950</div>
              </div>
              <div className="text-white">
                <div className="font-semibold">✉️ Email:</div>
                <div>kleber@ziontechgroup.com</div>
              </div>
              <div className="text-white">
                <div className="font-semibold">📍 Address:</div>
                <div>364 E Main St STE 1008, Middletown, DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
