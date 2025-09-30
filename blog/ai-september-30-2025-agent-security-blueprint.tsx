import React from 'react';

export default function AgentSecurityBlueprintSept302025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Agent Security Blueprint: Zero-Trust for Autonomous Systems</h1>
        <p className="text-gray-600 mb-8">Published September 30, 2025 • 11 min read</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          As enterprises adopt agentic workflows, a zero-trust posture is essential. This blueprint
          details fine-grained permissions, scoped capabilities, environment isolation, and identity-first
          controls to contain blast radius and ensure provable safety.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Core Controls</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
          <li>Capability-scoped tool access with policy enforcement</li>
          <li>Signed actions, durable logs, and continuous verification</li>
          <li>Runtime sandboxes and deterministic I/O constraints</li>
          <li>Least-privilege credentials with short-lived tokens</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Applying these controls enables teams to scale autonomous operations with measurable risk reduction
          and clear governance lines across security and platform engineering.
        </p>
      </div>
    </div>
  );
}

