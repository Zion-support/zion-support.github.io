import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AISustainabilityChecklist2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Sustainability Checklist 2025: Complete Guide to Green AI Implementation"
        description="Download our comprehensive AI sustainability checklist for 2025. Step-by-step guide to implementing green AI practices, reducing carbon footprint, and building sustainable AI systems."
        keywords="AI sustainability checklist, green AI, sustainable AI practices, carbon footprint reduction, environmental AI, green technology checklist"
        url="/resources/ai-sustainability-checklist-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Resources
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">January 2025</span>
          </div>
          
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🌱 FREE DOWNLOAD</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Sustainability Checklist 2025
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your comprehensive guide to implementing sustainable AI practices. This checklist 
            covers everything from energy-efficient model design to carbon tracking and 
            environmental impact reduction.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>📋 150+ Action Items</span>
            <span>•</span>
            <span>🏷️ Sustainability & AI</span>
            <span>•</span>
            <span>📅 Updated Jan 2025</span>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Download the Complete Checklist</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Get instant access to our comprehensive AI sustainability checklist with 
              150+ actionable items, templates, and implementation guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📥 Download PDF (2.3MB)
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                📊 View Interactive Version
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No email required • Instant download • Updated monthly
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Checklist Sections</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 🏗️ Sustainable AI Architecture Design</li>
                <li>• ⚡ Energy-Efficient Model Development</li>
                <li>• 🌱 Green Infrastructure Setup</li>
                <li>• 📊 Carbon Tracking & Reporting</li>
                <li>• 🔄 Circular Economy Integration</li>
                <li>• 📈 Performance Monitoring</li>
                <li>• 🎯 Goal Setting & KPIs</li>
                <li>• 📋 Compliance & Certification</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bonus Materials</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 📝 Implementation Templates</li>
                <li>• 🧮 ROI Calculator</li>
                <li>• 📊 Carbon Footprint Tracker</li>
                <li>• 🎯 Goal Setting Worksheet</li>
                <li>• 📞 Vendor Evaluation Checklist</li>
                <li>• 📋 Audit Preparation Guide</li>
                <li>• 🎓 Team Training Materials</li>
                <li>• 📈 Progress Tracking Dashboard</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Preview Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Checklist Preview</h2>
            
            {/* Section 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sustainable AI Architecture Design</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Conduct energy efficiency assessment of current AI infrastructure</p>
                    <p className="text-sm text-gray-600">Baseline measurement of power consumption, cooling requirements, and carbon footprint</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Implement edge computing strategy for AI workloads</p>
                    <p className="text-sm text-gray-600">Reduce data transmission and central processing requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Design modular AI architecture for easy optimization</p>
                    <p className="text-sm text-gray-600">Enable component-level efficiency improvements and updates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-green-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Select green cloud providers with renewable energy commitments</p>
                    <p className="text-sm text-gray-600">Choose providers with 100% renewable energy and carbon neutrality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Energy-Efficient Model Development</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Apply model compression techniques (pruning, quantization)</p>
                    <p className="text-sm text-gray-600">Reduce model size by 50-80% while maintaining performance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Implement knowledge distillation for smaller models</p>
                    <p className="text-sm text-gray-600">Transfer knowledge from large models to efficient smaller ones</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Use neural architecture search (NAS) for optimal efficiency</p>
                    <p className="text-sm text-gray-600">Automatically discover energy-efficient architectures</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Implement dynamic inference based on workload</p>
                    <p className="text-sm text-gray-600">Scale computational resources based on actual demand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Carbon Tracking & Reporting</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Set up automated carbon footprint monitoring</p>
                    <p className="text-sm text-gray-600">Real-time tracking of AI system energy consumption and emissions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Implement carbon-aware scheduling for AI workloads</p>
                    <p className="text-sm text-gray-600">Schedule compute-intensive tasks during low-carbon energy periods</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Generate monthly sustainability reports</p>
                    <p className="text-sm text-gray-600">Track progress against environmental goals and targets</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900">Establish carbon offset programs for AI operations</p>
                    <p className="text-sm text-gray-600">Invest in verified carbon reduction projects to offset emissions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Timeline */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Timeline</h2>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Week 1-2</h3>
                  <p className="text-sm text-gray-600">Assessment & Planning</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Week 3-6</h3>
                  <p className="text-sm text-gray-600">Infrastructure Setup</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Week 7-10</h3>
                  <p className="text-sm text-gray-600">Model Optimization</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Week 11-12</h3>
                  <p className="text-sm text-gray-600">Monitoring & Reporting</p>
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Expected Outcomes</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                <div className="text-sm text-green-800">Energy Consumption Reduction</div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-sm text-blue-800">Carbon Footprint Decrease</div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
                <div className="text-sm text-purple-800">Cost Savings</div>
              </div>
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Make Your AI Sustainable?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join 500+ organizations already using this checklist to build more sustainable AI systems. 
              Start your green AI journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📥 Download Now - Free
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/resources/ai-implementation-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Implementation Playbook 2025
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Complete guide to implementing AI solutions in your organization
                </p>
                <div className="text-xs text-gray-500">45 min read • Implementation Guide</div>
              </div>
            </Link>
            
            <Link href="/resources/sustainable-tech-green-it" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Sustainable Tech: Green IT Guide
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive guide to implementing green IT practices
                </p>
                <div className="text-xs text-gray-500">30 min read • Green Technology</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}