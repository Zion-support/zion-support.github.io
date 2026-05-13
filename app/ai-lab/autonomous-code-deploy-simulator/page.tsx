'use client';
import React, { useState } from 'react';

type Step = { name: string; status: 'pending' | 'running' | 'pass' | 'fail'; duration: number };
type Scenario = { name: string; description: string; expectedOutcome: string };

interface SimResult {
  steps: Step[];
  totalDuration: number;
  outcome: 'success' | 'failure';
  failureReason?: string;
  scenario: string;
}

const SCENARIOS: Scenario[] = [
  { name: 'Typical feature PR', description: 'New feature branch with unit tests added', expectedOutcome: 'All checks pass, deploy succeeds' },
  { name: 'Breaking API change', description: 'Modified API contract without updating consumers', expectedOutcome: 'Integration tests fail, blocked' },
  { name: 'Performance regression', description: 'Large bundle size increase detected', expectedOutcome: 'Size budget check warns, manual review required' },
  { name: 'Hotfix deploy', description: 'Critical bug fix with skip-ci on minor checks', expectedOutcome: 'Fast-path deploy, minimal checks' },
  { name: 'Dependencies update', description: 'Major version bump across 15+ packages', expectedOutcome: 'Build succeeds, vulnerability scan may flag' },
];

const PIPELINE_STEPS: Step[] = [
  { name: 'Checkout & Setup', status: 'pending', duration: 8 },
  { name: 'Install Dependencies', status: 'pending', duration: 12 },
  { name: 'Lint Check (ESLint)', status: 'pending', duration: 5 },
  { name: 'Type Check (TypeScript)', status: 'pending', duration: 8 },
  { name: 'Unit Tests (Jest)', status: 'pending', duration: 15 },
  { name: 'Integration Tests', status: 'pending', duration: 20 },
  { name: 'Build (next build)', status: 'pending', duration: 45 },
  { name: 'Bundle Size Check', status: 'pending', duration: 3 },
  { name: 'Accessibility Audit', status: 'pending', duration: 10 },
  { name: 'Security Scan (npm audit)', status: 'pending', duration: 8 },
  { name: 'E2E Tests (Playwright)', status: 'pending', duration: 30 },
  { name: 'Staging Deploy', status: 'pending', duration: 15 },
  { name: 'Smoke Tests', status: 'pending', duration: 10 },
  { name: 'Production Deploy', status: 'pending', duration: 20 },
];

const FAILURE_PATTERNS: Record<string, { stepIndex: number; reason: string }[]> = {
  'Typical feature PR': [],
  'Breaking API change': [{ stepIndex: 5, reason: 'API contract mismatch: /api/newsletter expects { email } but received { emailAddress }' }],
  'Performance regression': [{ stepIndex: 7, reason: 'Bundle size exceeded 250KB budget: main.js is 312KB (+62KB)' }],
  'Hotfix deploy': [],
  'Dependencies update': [{ stepIndex: 9, reason: '3 high-severity vulnerabilities found in transitive dependencies' }],
};

export default function AutonomousCodeDeploySimulatorPage() {
  const [selectedScenario, setSelectedScenario] = useState('');
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<SimResult | null>(null);
  const [currentStep, setCurrentStep] = useState(-1);

  const runSimulation = async () => {
    if (!selectedScenario || running) return;
    setRunning(true);
    setCurrentStep(-1);
    setResult(null);

    const steps = PIPELINE_STEPS.map(s => ({ ...s }));
    const failures = FAILURE_PATTERNS[selectedScenario] || [];
    const failSteps = new Set(failures.map(f => f.stepIndex));
    let failed = false;
    let totalDuration = 0;
    let failureReason: string | undefined;

    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      steps[i].status = 'running';
      await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 400));

      if (failSteps.has(i)) {
        steps[i].status = 'fail';
        totalDuration += steps[i].duration;
        failed = true;
        failureReason = failures.find(f => f.stepIndex === i)?.reason;
        break;
      }

      steps[i].status = 'pass';
      totalDuration += steps[i].duration;
    }

    const outcome = failed ? 'failure' : 'success';
    setResult({ steps, totalDuration, outcome, failureReason, scenario: selectedScenario });
    setRunning(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return '⬜';
      case 'running': return '🔄';
      case 'pass': return '✅';
      case 'fail': return '❌';
      default: return '⬜';
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🚀 Autonomous Code Deploy Simulator</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Simulate CI/CD pipeline runs for different change types. See which steps fail fast and how long deployments take.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #312e81' }}>
            <h3 style={{ color: '#a78bfa', marginBottom: '1rem' }}>📋 Choose a Scenario</h3>
            {SCENARIOS.map((s, i) => (
              <button
                key={i}
                onClick={() => setSelectedScenario(s.name)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '0.5rem',
                  background: selectedScenario === s.name ? '#312e81' : '#0f172a',
                  border: `1px solid ${selectedScenario === s.name ? '#6366f1' : '#1e1b4b'}`,
                  color: '#f8fafc',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <div style={{ fontWeight: '600' }}>{s.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{s.description}</div>
              </button>
            ))}
            <button
              onClick={runSimulation}
              disabled={!selectedScenario || running}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginTop: '1rem',
                background: selectedScenario && !running ? 'linear-gradient(90deg, #6366f1, #8b5cf6)' : '#374151',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: selectedScenario && !running ? 'pointer' : 'not-allowed',
                fontWeight: '600',
                fontSize: '1rem'
              }}
            >
              {running ? '⏳ Running Pipeline...' : '▶️ Run Simulation'}
            </button>
          </div>

          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #312e81' }}>
            <h3 style={{ color: '#a78bfa', marginBottom: '1rem' }}>⚡ Pipeline Steps (14 stages)</h3>
            {result ? (
              <div>
                {result.steps.map((step, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.5rem',
                    marginBottom: '0.25rem',
                    background: result.steps[i].status === 'running' ? '#312e81' : result.steps[i].status === 'fail' ? '#450a0a' : i === result.steps.findIndex(s => s.status === 'fail') ? '#450a0a' : '#0f172a',
                    borderRadius: '6px',
                    border: `1px solid ${result.steps[i].status === 'fail' ? '#ef4444' : result.steps[i].status === 'pass' ? '#22c55e' : '#1e1b4b'}`,
                    opacity: i > currentStep && currentStep !== -1 ? 0.4 : 1
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>{getStatusIcon(step.status)}</span>
                    <span style={{ flex: 1, fontSize: '0.85rem' }}>{step.name}</span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{step.duration}s</span>
                  </div>
                ))}
                {result.outcome === 'success' ? (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: '#052e16',
                    border: '1px solid #22c55e',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎉</div>
                    <div style={{ color: '#4ade80', fontWeight: '600' }}>DEPLOY SUCCESSFUL</div>
                    <div style={{ color: '#a7f3d0', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                      Completed in {result.totalDuration}s (~{Math.ceil(result.totalDuration / 60)} min)
                    </div>
                  </div>
                ) : (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: '#450a0a',
                    border: '1px solid #ef4444',
                    borderRadius: '8px'
                  }}>
                    <div style={{ color: '#f87171', fontWeight: '600', marginBottom: '0.5rem' }}>❌ DEPLOY BLOCKED</div>
                    <div style={{ color: '#fca5a5', fontSize: '0.85rem' }}>{result.failureReason}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                      Failed at step {result.steps.findIndex(s => s.status === 'fail') + 1} of {result.steps.length} after {result.totalDuration}s
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ color: '#6366f1', textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔬</div>
                <div>Select a scenario and run the simulation</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                  Pipeline includes: build, test, security, accessibility checks
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #312e81' }}>
          <h3 style={{ color: '#a78bfa', marginBottom: '1rem' }}>📊 Pipeline Statistics</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {[
              { label: 'Total Steps', value: '14', color: '#60a5fa' },
              { label: 'Fastest Path', value: '~2 min', color: '#4ade80' },
              { label: 'Full Pipeline', value: '~3.5 min', color: '#f59e0b' },
              { label: 'Fail-Fast', value: '~30s', color: '#ef4444' },
            ].map((stat, i) => (
              <div key={i} style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
