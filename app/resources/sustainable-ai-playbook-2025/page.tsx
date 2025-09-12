import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function SustainableAIPlaybook2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Sustainable AI Playbook 2025 - Free Download"
        description="Complete guide to building environmentally responsible AI applications. Download our free sustainable AI playbook with best practices, tools, and implementation strategies."
        keywords="sustainable AI, green AI, environmental AI, carbon footprint, energy efficiency, AI sustainability, free resources"
        url="/resources/sustainable-ai-playbook-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            🌱 FREE RESOURCE
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Sustainable AI Playbook 2025
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Complete guide to building environmentally responsible AI applications. Learn best practices, 
            tools, and implementation strategies for sustainable AI development and deployment.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <span>📄</span>
              <span>120+ pages</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>2-3 hours read</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🛠️</span>
              <span>Tools & Templates</span>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Download Your Free Playbook</h2>
          <p className="text-lg opacity-90 mb-6">
            Get instant access to our comprehensive sustainable AI playbook. 
            No email required, completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              🌱 Download PDF
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg">
              📖 Read Online
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 5,000+ developers building sustainable AI
          </p>
        </div>

        {/* What's Included */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What's Included</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🌱 Sustainable AI Principles</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Energy-efficient model design and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Carbon footprint measurement and reduction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Green computing best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Lifecycle-aware AI development</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🛠️ Implementation Tools</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Carbon footprint calculators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Energy efficiency assessment tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Green cloud provider comparison</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Implementation checklists and templates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Measurement & Monitoring</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Environmental impact tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Energy usage monitoring tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Carbon offset strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Performance vs. sustainability metrics</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Real-World Case Studies</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Google's data center efficiency gains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Microsoft's carbon-negative AI initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Startup sustainable AI implementations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Enterprise green AI transformations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Part I: Foundations</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">1.</span>
                  <span>Understanding AI's Environmental Impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">2.</span>
                  <span>Green AI Principles and Frameworks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">3.</span>
                  <span>Carbon Footprint Measurement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">4.</span>
                  <span>Energy-Efficient Model Design</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Part II: Implementation</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">5.</span>
                  <span>Green Computing Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">6.</span>
                  <span>Model Optimization Techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">7.</span>
                  <span>Deployment Strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">8.</span>
                  <span>Monitoring and Optimization</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Part III: Advanced Topics</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">9.</span>
                  <span>Edge Computing for Sustainability</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">10.</span>
                  <span>Renewable Energy Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">11.</span>
                  <span>Carbon Offset Strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">12.</span>
                  <span>Future of Sustainable AI</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Part IV: Resources</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">13.</span>
                  <span>Tools and Calculators</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">14.</span>
                  <span>Implementation Templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">15.</span>
                  <span>Best Practices Checklist</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">16.</span>
                  <span>Additional Resources</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Practical Guidelines</h3>
              <p className="text-gray-600">
                Step-by-step instructions for implementing sustainable AI practices in your organization.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Measurement Tools</h3>
              <p className="text-gray-600">
                Ready-to-use calculators and monitoring tools to track your environmental impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Examples</h3>
              <p className="text-gray-600">
                Learn from successful sustainable AI implementations across different industries.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Developers Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">AC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Alex Chen</div>
                  <div className="text-sm text-gray-600">AI Engineer, TechCorp</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This playbook helped us reduce our AI carbon footprint by 60% while maintaining 
                performance. The measurement tools were particularly valuable for tracking our progress."
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Martinez</div>
                  <div className="text-sm text-gray-600">CTO, GreenStart</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The case studies and implementation templates saved us months of research. 
                We were able to implement sustainable AI practices from day one."
              </p>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Free Copy Today</h2>
          <p className="text-lg opacity-90 mb-6">
            Join thousands of developers who are building sustainable AI applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              🌱 Download Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg">
              📖 Preview Online
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No registration required • Instant download • 100% free
          </p>
        </div>

        {/* Related Resources */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/ai-multimodal-implementation-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🎭</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Multimodal AI Guide
                </h4>
                <p className="text-gray-600 text-sm">
                  Complete guide to building multimodal AI applications with code examples.
                </p>
              </div>
            </Link>
            
            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📋</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI Implementation Checklist
                </h4>
                <p className="text-gray-600 text-sm">
                  Step-by-step checklist for successful AI implementation projects.
                </p>
              </div>
            </Link>
            
            <Link href="/resources/ai-architecture-cost-governance-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏗️</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI Architecture Guide
                </h4>
                <p className="text-gray-600 text-sm">
                  Build scalable, cost-effective AI architectures with proper governance.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}