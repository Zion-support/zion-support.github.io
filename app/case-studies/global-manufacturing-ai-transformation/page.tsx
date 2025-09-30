import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Global Manufacturing AI Transformation: 300% ROI Case Study | Zion Tech Group',
  description: 'See how a global manufacturer achieved 300% ROI, 90% efficiency improvement, and $50M annual savings with our AI transformation framework. Real results, proven strategies.',
  keywords: 'AI transformation case study, manufacturing AI, ROI improvement, efficiency gains, AI implementation success, business transformation',
  openGraph: {
    title: 'Global Manufacturing AI Transformation: 300% ROI Case Study',
    description: 'See how a global manufacturer achieved 300% ROI, 90% efficiency improvement, and $50M annual savings.',
    type: 'article',
    url: 'https://ziontechgroup.com/case-studies/global-manufacturing-ai-transformation',
    images: [
      {
        url: '/og-manufacturing-ai-case-study.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Manufacturing AI Transformation Case Study'
      }
    ]
  }
};

export default function GlobalManufacturingAICaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="text-lg">🏭</span>
              <span>Manufacturing Success Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Global Manufacturing 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {' '}AI Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              How a Fortune 500 manufacturer achieved 300% ROI, 90% efficiency improvement, and $50M annual savings 
              through comprehensive AI transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>📅 Published: January 20, 2026</span>
              <span>⏱️ 15 min read</span>
              <span>🏢 Fortune 500 Client</span>
              <span>💰 $50M+ Savings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Banner */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Transformation Results</h2>
            <p className="text-xl opacity-90">Measurable impact achieved in 12 months</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-lg opacity-90">ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-lg opacity-90">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$50M</div>
              <div className="text-lg opacity-90">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-lg opacity-90">Months to ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  <strong className="text-gray-900">Industry:</strong> Global Manufacturing
                </p>
                <p>
                  <strong className="text-gray-900">Size:</strong> Fortune 500, 50,000+ employees
                </p>
                <p>
                  <strong className="text-gray-900">Locations:</strong> 25+ countries, 100+ facilities
                </p>
                <p>
                  <strong className="text-gray-900">Revenue:</strong> $15+ billion annually
                </p>
                <p>
                  <strong className="text-gray-900">Challenge:</strong> Legacy systems, manual processes, declining efficiency
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-Transformation State</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">❌</span>
                  <span>Manual data entry and analysis processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">❌</span>
                  <span>Legacy systems with limited integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">❌</span>
                  <span>Reactive maintenance and quality control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">❌</span>
                  <span>High operational costs and inefficiencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">❌</span>
                  <span>Limited predictive capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Challenge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Silos</h3>
              <p className="text-gray-600">
                Critical manufacturing data was trapped in isolated systems, preventing comprehensive analysis and optimization.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Processes</h3>
              <p className="text-gray-600">
                Time-consuming manual data entry and analysis was limiting productivity and increasing error rates.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reactive Maintenance</h3>
              <p className="text-gray-600">
                Equipment failures and quality issues were addressed reactively, leading to costly downtime and waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Solution</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive AI Transformation</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Data Integration Platform</h4>
                    <p className="text-gray-600">Connected all manufacturing systems into a unified data lake with real-time processing capabilities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Predictive Analytics Engine</h4>
                    <p className="text-gray-600">Implemented machine learning models for predictive maintenance, quality control, and demand forecasting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Autonomous Workflow Automation</h4>
                    <p className="text-gray-600">Deployed AI agents to automate routine tasks and decision-making processes across all facilities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Real-Time Optimization</h4>
                    <p className="text-gray-600">Created dynamic optimization algorithms that continuously improve production efficiency and resource utilization.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Stack</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">AI/ML Platforms</h4>
                  <p className="text-gray-600 text-sm">TensorFlow, PyTorch, Azure ML, AWS SageMaker</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Data Processing</h4>
                  <p className="text-gray-600 text-sm">Apache Spark, Kafka, Databricks, Snowflake</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cloud Infrastructure</h4>
                  <p className="text-gray-600 text-sm">Microsoft Azure, AWS, Kubernetes</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Integration</h4>
                  <p className="text-gray-600 text-sm">REST APIs, GraphQL, Event-driven architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transformation Results</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quantitative Impact</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Production Efficiency</h4>
                    <span className="text-2xl font-bold text-green-600">+90%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Overall equipment effectiveness improved from 65% to 95%</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Cost Reduction</h4>
                    <span className="text-2xl font-bold text-green-600">$50M</span>
                  </div>
                  <p className="text-gray-600 text-sm">Annual operational cost savings across all facilities</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold text-gray-900">ROI</h4>
                    <span className="text-2xl font-bold text-green-600">300%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Return on investment achieved within 12 months</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Quality Improvement</h4>
                    <span className="text-2xl font-bold text-green-600">+75%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Defect rate reduction through predictive quality control</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Qualitative Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Proactive Maintenance</h4>
                    <p className="text-gray-600 text-sm">Shifted from reactive to predictive maintenance, reducing unplanned downtime by 80%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Data-Driven Decisions</h4>
                    <p className="text-gray-600 text-sm">Real-time insights enable faster, more accurate decision-making across all levels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Employee Empowerment</h4>
                    <p className="text-gray-600 text-sm">Staff freed from manual tasks to focus on strategic initiatives and innovation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Scalable Architecture</h4>
                    <p className="text-gray-600 text-sm">Solution designed to scale across all 100+ facilities globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
            "Zion Tech Group's AI transformation exceeded our expectations. The 300% ROI and $50M in annual savings 
            speak for themselves, but the real value is in how it's transformed our entire organization. We're now 
            a truly data-driven company with capabilities we never thought possible."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">Sarah Chen</div>
              <div className="opacity-90">Chief Technology Officer</div>
              <div className="opacity-75 text-sm">Global Manufacturing Corp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Months 1-2: Assessment & Planning</h3>
                  <p className="text-gray-600">Comprehensive analysis of current systems, data audit, and strategic roadmap development.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Months 3-4: Data Integration</h3>
                  <p className="text-gray-600">Built unified data platform and established real-time data pipelines across all facilities.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Months 5-8: AI Model Development</h3>
                  <p className="text-gray-600">Developed and trained predictive models for maintenance, quality, and optimization.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Months 9-10: Pilot Implementation</h3>
                  <p className="text-gray-600">Deployed AI solutions in select facilities to validate performance and refine models.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Months 11-12: Global Rollout</h3>
                  <p className="text-gray-600">Scaled successful solutions across all 100+ facilities worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Manufacturing Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the same results for your organization with our proven AI transformation framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/case-studies/fintech-ai-risk-compliance-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  FinTech AI Risk Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  70% risk reduction and $2.5M savings with automated governance frameworks.
                </p>
                <div className="text-blue-600 font-semibold">View Case Study →</div>
              </div>
            </Link>
            <Link href="/case-studies/retail-ai-transformation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Retail AI Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  150% revenue growth and 80% cost reduction with AI transformation.
                </p>
                <div className="text-blue-600 font-semibold">View Case Study →</div>
              </div>
            </Link>
            <Link href="/case-studies/healthcare-ai-diagnostics" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Healthcare AI Diagnostics
                </h3>
                <p className="text-gray-600 mb-4">
                  40% better diagnostics and 60% improved patient outcomes.
                </p>
                <div className="text-blue-600 font-semibold">View Case Study →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}