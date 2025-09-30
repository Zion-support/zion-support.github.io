import React from 'react';
import Link from 'next/link';

// AI Autonomous DevOps Banner
export function AIAutonomousDevOpsBanner() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <span>🤖</span>
              AUTONOMOUS DEVOPS 2026
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Autonomous DevOps: Self-Managing Infrastructure
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Achieve 99.9% uptime with self-healing systems. 90% cost reduction, zero-touch operations, and autonomous scaling.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Self-Healing</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">99.9% Uptime</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Zero-Touch Ops</span>
            </div>
            <Link
              href="/blog/ai-autonomous-devops-2026"
              className="inline-block bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Complete Guide
            </Link>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">⚡</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-75">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold">90%</div>
                <div className="text-sm opacity-75">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Autonomous DevOps Success Banner
export function AutonomousDevOpsSuccessBanner() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <span>🏆</span>
              SUCCESS CASE STUDY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              $15M ROI: Autonomous DevOps Success Story
            </h2>
            <p className="text-lg opacity-90 mb-6">
              See how TechCorp achieved 99.9% uptime, 90% cost reduction, and $15M ROI with AI autonomous DevOps transformation.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">$15M ROI</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Fortune 500</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">18 Months</span>
            </div>
            <Link
              href="/case-studies/ai-autonomous-devops-success-2026"
              className="inline-block bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Case Study
            </Link>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">💰</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">$15M</div>
                <div className="text-sm opacity-75">Total ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm opacity-75">Incident Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Self-Healing Infrastructure Banner
export function SelfHealingInfrastructureBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🔧</span>
            SELF-HEALING INFRASTRUCTURE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Intelligent Self-Healing Systems
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Deploy infrastructure that detects, diagnoses, and resolves issues automatically. Reduce downtime by 95% with intelligent self-healing capabilities.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-xl font-bold mb-2">Intelligent Detection</h3>
              <p className="text-sm opacity-90">AI-powered anomaly detection identifies issues before they impact users</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Response</h3>
              <p className="text-sm opacity-90">Automated remediation actions executed within seconds</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-sm opacity-90">Systems improve their response capabilities over time</p>
            </div>
          </div>
          <Link
            href="/blog/ai-autonomous-devops-2026"
            className="inline-block bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Learn About Self-Healing Systems
          </Link>
        </div>
      </div>
    </section>
  );
}

// DevOps Automation Platform Banner
export function DevOpsAutomationPlatformBanner() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="text-6xl mb-4">🚀</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm opacity-75">Automation</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-75">Operations</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <span>⚙️</span>
              AUTOMATION PLATFORM
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete DevOps Automation Platform
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Transform your DevOps with intelligent automation. 95% of operations handled autonomously, 24/7 monitoring, and predictive scaling.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">CI/CD Automation</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Auto-scaling</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Predictive Maintenance</span>
            </div>
            <Link
              href="/services/ai-autonomous-devops"
              className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Automation Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Zero-Downtime Deployment Banner
export function ZeroDowntimeDeploymentBanner() {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🚀</span>
            ZERO-DOWNTIME DEPLOYMENTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless Zero-Downtime Deployments
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Deploy with confidence using AI-powered deployment strategies. 99.8% deployment success rate with intelligent rollback and canary deployments.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Canary Deployments</h3>
              <p className="text-sm opacity-90">Gradual rollout with automatic rollback</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-xl font-bold mb-2">Blue-Green Strategy</h3>
              <p className="text-sm opacity-90">Instant switching with zero downtime</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold mb-2">Health Monitoring</h3>
              <p className="text-sm opacity-90">Real-time health checks and validation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Auto-Rollback</h3>
              <p className="text-sm opacity-90">Intelligent rollback on failure detection</p>
            </div>
          </div>
          <Link
            href="/blog/ai-autonomous-devops-2026"
            className="inline-block bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Learn Deployment Strategies
          </Link>
        </div>
      </div>
    </section>
  );
}

// Infrastructure Intelligence Banner
export function InfrastructureIntelligenceBanner() {
  return (
    <section className="bg-gradient-to-r from-slate-600 to-gray-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <span>🧠</span>
              INFRASTRUCTURE INTELLIGENCE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Powered Infrastructure Intelligence
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Make data-driven infrastructure decisions with AI-powered insights. Predictive analytics, capacity planning, and intelligent optimization.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Predictive Analytics</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Capacity Planning</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Cost Optimization</span>
            </div>
            <Link
              href="/blog/ai-autonomous-devops-2026"
              className="inline-block bg-white text-slate-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore AI Intelligence
            </Link>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">85%</div>
                <div className="text-sm opacity-75">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold">70%</div>
                <div className="text-sm opacity-75">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}