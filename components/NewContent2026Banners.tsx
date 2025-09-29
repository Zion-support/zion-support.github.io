import React from 'react';
import Link from 'next/link';

// AI Autonomous Infrastructure Banner
export function AIAutonomousInfrastructureBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Revolutionary 2026
              </span>
              <span className="text-white/80 text-sm">NEW Article</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Autonomous Infrastructure 2026: Self-Healing Systems
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Transform your infrastructure with AI-powered autonomous systems that achieve 99.9% uptime, 
              self-heal from failures, and operate with zero human intervention.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">99.9% Uptime</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">Self-Healing</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">Zero-Touch Ops</span>
              </div>
            </div>
            <Link
              href="/blog/ai-autonomous-infrastructure-2026"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Complete Guide →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">⚡</span>
                </div>
                <div>
                  <div className="font-semibold">90% Downtime Reduction</div>
                  <div className="text-sm opacity-80">Automated failure recovery</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">💰</span>
                </div>
                <div>
                  <div className="font-semibold">85% Cost Reduction</div>
                  <div className="text-sm opacity-80">Operational efficiency gains</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">🚀</span>
                </div>
                <div>
                  <div className="font-semibold">300% Faster Response</div>
                  <div className="text-sm opacity-80">Incident resolution speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Cognitive Computing Banner
export function AICognitiveComputingBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Revolutionary 2026
              </span>
              <span className="text-white/80 text-sm">NEW Article</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Cognitive Computing 2026: Beyond Traditional ML
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Discover how AI cognitive computing is revolutionizing decision-making with human-like reasoning, 
              contextual understanding, and 400% faster processing capabilities.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">400% Faster</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">95% Accuracy</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">Human-like Reasoning</span>
              </div>
            </div>
            <Link
              href="/blog/ai-cognitive-computing-2026"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Complete Guide →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Cognitive Capabilities</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">🧠</span>
                </div>
                <div>
                  <div className="font-semibold">Logical Reasoning</div>
                  <div className="text-sm opacity-80">Deductive, inductive, abductive</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">💭</span>
                </div>
                <div>
                  <div className="font-semibold">Contextual Memory</div>
                  <div className="text-sm opacity-80">Episodic and semantic memory</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">🔍</span>
                </div>
                <div>
                  <div className="font-semibold">Causal Analysis</div>
                  <div className="text-sm opacity-80">Understanding cause-effect relationships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Cognitive Computing Success Case Study Banner
export function AICognitiveComputingSuccessBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Success Story 2026
              </span>
              <span className="text-white/80 text-sm">NEW Case Study</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              $12M ROI: AI Cognitive Computing Success Story
            </h2>
            <p className="text-lg mb-6 opacity-90">
              See how GlobalTech Solutions achieved $12M ROI with AI cognitive computing implementation. 
              400% faster decision-making, 95% accuracy improvement, and 85% cost reduction.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">$12M ROI</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">400% Faster</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">95% Accuracy</span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-cognitive-computing-success-2026"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Results Achieved</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">💰</span>
                </div>
                <div>
                  <div className="font-semibold">$12M Annual ROI</div>
                  <div className="text-sm opacity-80">Achieved within 18 months</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">⚡</span>
                </div>
                <div>
                  <div className="font-semibold">400% Faster Decisions</div>
                  <div className="text-sm opacity-80">From 5 days to 3 hours</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">🎯</span>
                </div>
                <div>
                  <div className="font-semibold">95% Accuracy Rate</div>
                  <div className="text-sm opacity-80">Up from 72% baseline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Infrastructure Automation Banner
export function AIInfrastructureAutomationBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Infrastructure 2026
              </span>
              <span className="text-white/80 text-sm">NEW Technology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Infrastructure Automation: Zero-Touch Operations
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Achieve complete infrastructure automation with AI-powered systems that self-heal, 
              self-optimize, and operate without human intervention.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">Zero-Touch</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">Self-Healing</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">Auto-Scaling</span>
              </div>
            </div>
            <Link
              href="/blog/ai-autonomous-infrastructure-2026"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Automation Features</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">🔧</span>
                </div>
                <div>
                  <div className="font-semibold">Automated Deployments</div>
                  <div className="text-sm opacity-80">Intelligent CI/CD pipelines</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">📊</span>
                </div>
                <div>
                  <div className="font-semibold">Dynamic Scaling</div>
                  <div className="text-sm opacity-80">AI-driven resource allocation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">🛡️</span>
                </div>
                <div>
                  <div className="font-semibold">Security Automation</div>
                  <div className="text-sm opacity-80">Automated threat response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Next-Gen AI Systems Banner
export function NextGenAISystemsBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Next-Gen 2026
              </span>
              <span className="text-white/80 text-sm">Revolutionary AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Next-Generation AI Systems: The Future is Here
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Experience the next generation of AI systems with cognitive computing, autonomous operations, 
              and human-like reasoning capabilities that transform how businesses operate.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">Cognitive AI</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">Autonomous Ops</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                <span className="font-semibold">Human-like Reasoning</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-cognitive-computing-2026"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Cognitive AI Guide →
              </Link>
              <Link
                href="/blog/ai-autonomous-infrastructure-2026"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-center"
              >
                Autonomous Infrastructure →
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Revolutionary Capabilities</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">🧠</span>
                </div>
                <div>
                  <div className="font-semibold">Cognitive Reasoning</div>
                  <div className="text-sm opacity-80">Human-like decision making</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">🔄</span>
                </div>
                <div>
                  <div className="font-semibold">Self-Healing Systems</div>
                  <div className="text-sm opacity-80">Autonomous failure recovery</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">⚡</span>
                </div>
                <div>
                  <div className="font-semibold">Zero-Touch Operations</div>
                  <div className="text-sm opacity-80">Complete automation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">📈</span>
                </div>
                <div>
                  <div className="font-semibold">Continuous Learning</div>
                  <div className="text-sm opacity-80">Adaptive intelligence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Innovation Showcase Banner
export function AIInnovationShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Innovation Showcase 2026
            </span>
            <span className="text-white/80 text-sm">Latest AI Breakthroughs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Innovations Transforming Business
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs that are revolutionizing how businesses operate, 
            from cognitive computing to autonomous infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Cognitive Computing</h3>
            <p className="text-sm opacity-90 mb-4">
              Human-like reasoning and contextual understanding with 400% faster decision-making.
            </p>
            <Link
              href="/blog/ai-cognitive-computing-2026"
              className="text-white underline hover:no-underline"
            >
              Learn More →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Autonomous Infrastructure</h3>
            <p className="text-sm opacity-90 mb-4">
              Self-healing systems with 99.9% uptime and zero-touch operations.
            </p>
            <Link
              href="/blog/ai-autonomous-infrastructure-2026"
              className="text-white underline hover:no-underline"
            >
              Learn More →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Proven ROI</h3>
            <p className="text-sm opacity-90 mb-4">
              Real success stories with $12M+ ROI achieved through AI implementation.
            </p>
            <Link
              href="/case-studies/ai-cognitive-computing-success-2026"
              className="text-white underline hover:no-underline"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore All AI Innovations →
          </Link>
        </div>
      </div>
    </div>
  );
}