import React from 'react';
import Link from 'next/link';

// Latest Content 2026 Banner
export const LatestContent2026Banner: React.FC = () => (
  <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🚀 NEW 2026 CONTENT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest AI Innovations & Success Stories
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Discover cutting-edge AI solutions transforming industries in 2026. 
            From autonomous operations to FinTech revolution - see what's possible.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <Link
              href="/blog/ai-autonomous-cloud-ops-2026"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              AI Autonomous Ops
            </Link>
            <Link
              href="/blog/ai-fintech-transformation-2026"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              FinTech Transformation
            </Link>
            <Link
              href="/case-studies/ai-retail-automation-2026"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Retail Automation
            </Link>
          </div>
          <Link
            href="/blog"
            className="inline-block bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore All Content →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">99.9%</div>
            <div className="text-sm opacity-90">System Uptime</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">$8M</div>
            <div className="text-sm opacity-90">ROI Achieved</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">95%</div>
            <div className="text-sm opacity-90">Automation Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">300%</div>
            <div className="text-sm opacity-90">Productivity Gain</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// AI Security Enterprise 2026 Banner
export const AISecurityEnterprise2026Banner: React.FC = () => (
  <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🛡️ ENTERPRISE SECURITY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Security Enterprise 2026: 
            <span className="block text-yellow-200">Next-Gen Protection</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Revolutionary threat detection with 99.7% accuracy. Autonomous incident response 
            and zero-trust architecture for enterprise-grade security.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">99.7%</div>
              <div className="text-sm opacity-90">Threat Detection</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15s</div>
              <div className="text-sm opacity-90">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">90%</div>
              <div className="text-sm opacity-90">Cost Reduction</div>
            </div>
          </div>
          <Link
            href="/services/ai-cybersecurity-consulting"
            className="inline-block bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Secure Your Enterprise →
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Enterprise Security Features</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Autonomous threat detection and response</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Zero-trust security architecture</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Real-time compliance monitoring</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Predictive security analytics</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// AI Multimodal Enterprise 2026 Banner
export const AIMultimodalEnterprise2026Banner: React.FC = () => (
  <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🎯 MULTIMODAL AI
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Multimodal Enterprise 2026:
            <span className="block text-cyan-200">Unified Intelligence</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Integrate text, image, audio, and video processing in a single AI platform. 
            Achieve 85% efficiency gains with unified multimodal intelligence.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">85%</div>
              <div className="text-sm opacity-90">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4x</div>
              <div className="text-sm opacity-90">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Accuracy Rate</div>
            </div>
          </div>
          <Link
            href="/services/ai-multimodal-platform"
            className="inline-block bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Unify Your AI →
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Multimodal Capabilities</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">📝</div>
              <div className="text-sm">Text Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🖼️</div>
              <div className="text-sm">Image Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎵</div>
              <div className="text-sm">Audio Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎥</div>
              <div className="text-sm">Video Intelligence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// AI Sustainability Transformation Banner
export const AISustainabilityTransformationBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🌱 SUSTAINABILITY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Sustainability Transformation:
            <span className="block text-yellow-200">Carbon-Neutral Operations</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings 
            through sustainable technology and green computing practices.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">80%</div>
              <div className="text-sm opacity-90">Energy Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">$2M+</div>
              <div className="text-sm opacity-90">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-90">Carbon Neutral</div>
            </div>
          </div>
          <Link
            href="/services/ai-sustainability-consulting"
            className="inline-block bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Go Green with AI →
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Sustainability Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Carbon-neutral AI operations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Green computing optimization</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Renewable energy integration</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>ESG compliance automation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// New Latest 2026 Content Banner
export const NewLatest2026ContentBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ LATEST 2026
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            New Latest 2026 Content:
            <span className="block text-yellow-200">Cutting-Edge Insights</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Stay ahead with our latest AI insights, case studies, and implementation guides. 
            Discover what's shaping the future of enterprise AI in 2026.
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>AI Autonomous Cloud Operations Guide</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>FinTech Transformation Success Stories</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Retail Automation $8M ROI Case Study</span>
            </div>
          </div>
          <Link
            href="/content-hub"
            className="inline-block bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Latest Content →
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Content Highlights</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-sm font-semibold">1</div>
              <div>
                <div className="font-semibold">AI Autonomous Operations</div>
                <div className="text-sm opacity-90">99.9% uptime, 90% cost reduction</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-sm font-semibold">2</div>
              <div>
                <div className="font-semibold">FinTech Transformation</div>
                <div className="text-sm opacity-90">95% automation, $5M+ savings</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-sm font-semibold">3</div>
              <div>
                <div className="font-semibold">Retail Automation</div>
                <div className="text-sm opacity-90">300% productivity, $8M ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// AI Autonomous Cloud Ops Banner
export const AIAutonomousCloudOpsBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-slate-600 to-gray-700 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              ☁️ AUTONOMOUS CLOUD
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Autonomous Cloud Operations:
            <span className="block text-cyan-200">Self-Healing Infrastructure</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Master autonomous AI operations with zero-touch infrastructure management, 
            predictive maintenance, and self-healing systems for 99.9% uptime.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm opacity-90">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">90%</div>
              <div className="text-sm opacity-90">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15s</div>
              <div className="text-sm opacity-90">Response Time</div>
            </div>
          </div>
          <Link
            href="/blog/ai-autonomous-cloud-ops-2026"
            className="inline-block bg-white text-slate-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More →
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Autonomous Features</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>Self-healing infrastructure</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>Predictive maintenance</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>Intelligent scaling</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>Zero-touch operations</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// AI FinTech Transformation Banner
export const AIFinTechTransformationBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              💰 FINTECH AI
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI FinTech Transformation 2026:
            <span className="block text-yellow-200">Digital Banking Revolution</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Discover how AI is revolutionizing FinTech with 95% automation, $5M+ savings, 
            and complete digital banking transformation.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">$5M+</div>
              <div className="text-sm opacity-90">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">300%</div>
              <div className="text-sm opacity-90">Productivity Gain</div>
            </div>
          </div>
          <Link
            href="/blog/ai-fintech-transformation-2026"
            className="inline-block bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Transform Your FinTech →
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">FinTech AI Applications</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Automated fraud detection</li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Intelligent loan processing</li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Personalized financial advice</li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Real-time risk assessment</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// AI Retail Automation Banner
export const AIRetailAutomationBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🛒 RETAIL AI
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Retail Automation 2026:
            <span className="block text-yellow-200">$8M ROI Success Story</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            See how a Fortune 500 retailer achieved 98% automation, 300% productivity gains, 
            and $8M annual ROI through comprehensive AI retail automation.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm opacity-90">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">$8M</div>
              <div className="text-sm opacity-90">Annual ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
          </div>
          <Link
            href="/case-studies/ai-retail-automation-2026"
            className="inline-block bg-white text-rose-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View Case Study →
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Retail Automation Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Intelligent inventory management</li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Automated customer service</li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Predictive demand forecasting</li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Optimized workforce scheduling</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// Latest 2026 Content Banner
export const Latest2026ContentBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              📚 LATEST 2026
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest 2026 Content:
            <span className="block text-cyan-200">AI Innovation Hub</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Explore our comprehensive collection of 2026 AI content including guides, 
            case studies, and implementation strategies for enterprise transformation.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-xl font-bold">25+</div>
              <div className="text-sm opacity-90">New Articles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-xl font-bold">15+</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-xl font-bold">10+</div>
              <div className="text-sm opacity-90">Implementation Guides</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-xl font-bold">5+</div>
              <div className="text-sm opacity-90">Industry Reports</div>
            </div>
          </div>
          <Link
            href="/content-hub"
            className="inline-block bg-white text-violet-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Content Hub →
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Content Categories</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-sm font-semibold">AI</div>
              <div>
                <div className="font-semibold">AI Operations</div>
                <div className="text-sm opacity-90">Autonomous systems and automation</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-sm font-semibold">💰</div>
              <div>
                <div className="font-semibold">FinTech</div>
                <div className="text-sm opacity-90">Financial services transformation</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-sm font-semibold">🛒</div>
              <div>
                <div className="font-semibold">Retail</div>
                <div className="text-sm opacity-90">E-commerce and automation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// AI Operational Excellence Banner
export const AIOperationalExcellenceBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              ⚡ OPERATIONAL EXCELLENCE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Operational Excellence 2026:
            <span className="block text-yellow-200">Peak Performance</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Achieve operational excellence with AI-driven process optimization, 
            predictive analytics, and continuous improvement automation.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Process Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">60%</div>
              <div className="text-sm opacity-90">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">200%</div>
              <div className="text-sm opacity-90">Performance Gain</div>
            </div>
          </div>
          <Link
            href="/services/ai-operational-excellence"
            className="inline-block bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Optimize Operations →
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Excellence Framework</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Process optimization automation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Predictive performance analytics</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Continuous improvement loops</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Real-time performance monitoring</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// AI Agent Observability Banner
export const AIAgentObservabilityBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              👁️ AGENT OBSERVABILITY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Agent Observability 2026:
            <span className="block text-yellow-200">Complete Visibility</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Gain complete visibility into AI agent performance with advanced observability, 
            monitoring, and debugging capabilities for production systems.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-90">Agent Visibility</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50%</div>
              <div className="text-sm opacity-90">Faster Debugging</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-sm opacity-90">Reliability</div>
            </div>
          </div>
          <Link
            href="/services/ai-agent-observability"
            className="inline-block bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Monitor Your Agents →
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Observability Features</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Real-time agent monitoring</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Performance analytics dashboard</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Automated error detection</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Predictive failure analysis</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// Manufacturing Transformation Banner
export const ManufacturingTransformationBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🏭 MANUFACTURING AI
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Manufacturing AI Transformation:
            <span className="block text-cyan-200">Smart Factory Revolution</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Transform manufacturing operations with AI-powered predictive maintenance, 
            quality control, and intelligent automation for 95% efficiency gains.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Quality Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">300%</div>
              <div className="text-sm opacity-90">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">$2.5M</div>
              <div className="text-sm opacity-90">Annual Savings</div>
            </div>
          </div>
          <Link
            href="/services/ai-manufacturing-automation"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Transform Manufacturing →
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Manufacturing AI Solutions</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>Predictive maintenance systems</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>AI-powered quality control</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>Intelligent supply chain optimization</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>Autonomous production planning</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);