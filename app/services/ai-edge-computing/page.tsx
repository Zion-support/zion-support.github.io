import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Edge Computing Services | Real-Time Intelligence at the Edge | Zion Tech Group',
  description: 'Deploy AI processing at the edge for sub-50ms response times. Perfect for autonomous vehicles, IoT, and real-time applications. Achieve 99.9% uptime and 60% latency reduction.',
  keywords: 'AI edge computing, edge AI services, real-time AI processing, IoT AI, autonomous vehicles, edge intelligence',
  openGraph: {
    title: 'AI Edge Computing Services | Real-Time Intelligence at the Edge',
    description: 'Deploy AI processing at the edge for sub-50ms response times. Perfect for autonomous vehicles, IoT, and real-time applications.',
    type: 'website',
    url: 'https://ziontechgroup.com/services/ai-edge-computing',
    images: [
      {
        url: '/services/ai-edge-computing.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Edge Computing Services',
      },
    ],
  },
};

export default function AIEdgeComputingService() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">
            Edge AI Services
          </span>
          <span className="text-gray-500 text-sm">Real-Time Processing</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Edge Computing Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Deploy AI processing at the edge for sub-50ms response times. Perfect for autonomous vehicles, IoT devices, and real-time applications that demand instant decision-making.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <div className="text-4xl font-bold text-cyan-600 mb-2">Sub-50ms</div>
          <div className="text-gray-600">Response Time</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-cyan-600 mb-2">99.9%</div>
          <div className="text-gray-600">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-cyan-600 mb-2">60%</div>
          <div className="text-gray-600">Latency Reduction</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Edge AI?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-cyan-600 text-sm">✓</span>
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Real-Time Decision Making</h3>
                <p className="text-gray-600">Critical applications require instant responses. Edge AI delivers sub-50ms latency for split-second decisions.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-cyan-600 text-sm">✓</span>
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Offline Capability</h3>
                <p className="text-gray-600">Continue processing even when network connectivity is limited or unavailable.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-cyan-600 text-sm">✓</span>
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Enhanced Privacy</h3>
                <p className="text-gray-600">Sensitive data stays local, reducing privacy concerns and attack surfaces.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-cyan-600 text-sm">✓</span>
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Bandwidth Optimization</h3>
                <p className="text-gray-600">Reduce bandwidth costs by processing data locally instead of sending to the cloud.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Applications</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚗</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Autonomous Vehicles</h4>
                <p className="text-sm text-gray-600">Real-time sensor processing for safety-critical decisions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Smart Manufacturing</h3>
                <p className="text-sm text-gray-600">Quality control and predictive maintenance at the source</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Healthcare Monitoring</h4>
                <p className="text-sm text-gray-600">Real-time vital signs analysis and emergency alerts</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏪</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Retail Analytics</h4>
                <p className="text-sm text-gray-600">Customer behavior analysis and inventory optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Edge AI Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Real-Time Inference</h3>
            <p className="text-gray-600 text-center mb-4">
              Deploy optimized AI models for instant decision-making with sub-50ms response times.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Model optimization and quantization</li>
              <li>• Hardware-accelerated inference</li>
              <li>• Real-time performance monitoring</li>
              <li>• Automatic failover and recovery</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Edge Infrastructure</h3>
            <p className="text-gray-600 text-center mb-4">
              Complete edge computing infrastructure with AI-optimized hardware and software stack.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Edge server deployment and management</li>
              <li>• Container orchestration (Kubernetes)</li>
              <li>• Network optimization and security</li>
              <li>• Remote monitoring and maintenance</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Data Pipeline</h3>
            <p className="text-gray-600 text-center mb-4">
              Intelligent data processing pipelines optimized for edge environments and real-time streaming.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Stream processing and analytics</li>
              <li>• Data quality and validation</li>
              <li>• Edge-to-cloud synchronization</li>
              <li>• Real-time dashboards and alerts</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
            <div className="text-4xl font-bold text-cyan-600 mb-6">$2,999<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>Up to 5 edge devices</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>Basic AI models included</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>24/7 monitoring</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>Email support</span>
              </li>
            </ul>
            <button className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-cyan-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
            <div className="text-4xl font-bold text-cyan-600 mb-6">$7,999<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>Up to 25 edge devices</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>Custom AI model development</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>Advanced analytics dashboard</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>Priority phone support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>99.9% SLA guarantee</span>
              </li>
            </ul>
            <button className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
            <div className="text-4xl font-bold text-cyan-600 mb-6">Custom<span className="text-lg text-gray-500"> pricing</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>Unlimited edge devices</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>Dedicated AI engineering team</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>Custom infrastructure design</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 text-xs">✓</span>
                </span>
                <span>On-site implementation</span>
              </li>
            </ul>
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-8 text-white mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Deploy Edge AI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how edge AI can transform your business with real-time intelligence and instant decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Related Services</h3>
            <p className="text-gray-600">Explore our other AI and automation services.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services/ai-data-analytics"
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              AI Data Analytics
            </Link>
            <Link
              href="/services/ai-workflow-automation"
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Workflow Automation
            </Link>
            <Link
              href="/services"
              className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}