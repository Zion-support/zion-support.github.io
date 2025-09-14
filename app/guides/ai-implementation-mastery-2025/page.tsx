import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Play, CheckCircle, AlertCircle, Lightbulb, Code, Database, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Implementation Mastery 2025: Complete Guide to Enterprise AI Transformation',
  description: 'Master enterprise AI implementation with our comprehensive guide covering strategy, technology selection, implementation phases, and best practices for successful AI transformation.',
  keywords: 'AI implementation, enterprise AI, AI strategy, AI transformation, machine learning, artificial intelligence guide',
  openGraph: {
    title: 'AI Implementation Mastery 2025: Complete Enterprise Guide',
    description: 'Comprehensive guide to successful enterprise AI implementation and transformation.',
    type: 'article',
  },
};

export default function AIImplementationMasteryGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Implementation
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Mastery 2025
              </span>
            </h1>
            <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
              Your complete guide to enterprise AI transformation. Learn proven strategies, 
              implementation phases, and best practices for successful AI adoption in your organization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-indigo-200">
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                <span>Complete Guide</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>Enterprise Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Proven Methods</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-white hover:text-indigo-300 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/guides" className="text-white hover:text-indigo-300 transition-colors">
                All Guides
              </Link>
              <Link href="/blog" className="text-white hover:text-indigo-300 transition-colors">
                Blog Posts
              </Link>
              <Link href="/contact" className="text-white hover:text-indigo-300 transition-colors">
                Get Help
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Table of Contents */}
        <section className="mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link href="#strategy" className="block text-indigo-300 hover:text-indigo-200 transition-colors">
                  1. AI Strategy Development
                </Link>
                <Link href="#assessment" className="block text-indigo-300 hover:text-indigo-200 transition-colors">
                  2. Organizational Assessment
                </Link>
                <Link href="#technology" className="block text-indigo-300 hover:text-indigo-200 transition-colors">
                  3. Technology Selection
                </Link>
                <Link href="#implementation" className="block text-indigo-300 hover:text-indigo-200 transition-colors">
                  4. Implementation Phases
                </Link>
              </div>
              <div className="space-y-2">
                <Link href="#governance" className="block text-indigo-300 hover:text-indigo-200 transition-colors">
                  5. Governance & Ethics
                </Link>
                <Link href="#training" className="block text-indigo-300 hover:text-indigo-200 transition-colors">
                  6. Workforce Training
                </Link>
                <Link href="#monitoring" className="block text-indigo-300 hover:text-indigo-200 transition-colors">
                  7. Monitoring & Optimization
                </Link>
                <Link href="#best-practices" className="block text-indigo-300 hover:text-indigo-200 transition-colors">
                  8. Best Practices
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Strategy Development */}
        <section id="strategy" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-indigo-400" />
            AI Strategy Development
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-xl p-8 border border-indigo-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">1. Define Your AI Vision</h3>
              <p className="text-gray-300 mb-6">
                Start by establishing a clear vision for how AI will transform your organization. 
                This vision should align with your business objectives and create a roadmap for 
                sustainable AI adoption.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Key Components</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Business objective alignment</li>
                    <li>• Competitive advantage identification</li>
                    <li>• Customer value proposition</li>
                    <li>• Long-term transformation goals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Success Metrics</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Revenue growth targets</li>
                    <li>• Operational efficiency gains</li>
                    <li>• Customer satisfaction improvements</li>
                    <li>• Innovation acceleration metrics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">2. Stakeholder Alignment</h3>
              <p className="text-gray-300 mb-6">
                Ensuring all stakeholders understand and support your AI transformation is crucial 
                for success. This includes executives, department heads, IT teams, and end users.
              </p>
              
              <div className="bg-indigo-900/30 rounded-lg p-6 border border-indigo-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Stakeholder Engagement Checklist</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-indigo-300 mb-2">Executive Level</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>✓ Secure C-level sponsorship</li>
                      <li>✓ Align with strategic objectives</li>
                      <li>✓ Establish budget and resources</li>
                      <li>✓ Set performance expectations</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-indigo-300 mb-2">Operational Level</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>✓ Identify process owners</li>
                      <li>✓ Define success criteria</li>
                      <li>✓ Plan change management</li>
                      <li>✓ Establish feedback loops</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organizational Assessment */}
        <section id="assessment" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Database className="h-8 w-8 text-indigo-400" />
            Organizational Assessment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-md rounded-xl p-8 border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Data Readiness Assessment</h3>
              <div className="space-y-4">
                <div className="bg-blue-900/40 rounded-lg p-4 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">Data Quality</h4>
                  <p className="text-gray-300 text-sm">
                    Evaluate completeness, accuracy, and consistency of your data assets
                  </p>
                </div>
                <div className="bg-indigo-900/40 rounded-lg p-4 border border-indigo-500/20">
                  <h4 className="font-semibold text-indigo-300 mb-2">Data Infrastructure</h4>
                  <p className="text-gray-300 text-sm">
                    Assess storage, processing, and integration capabilities
                  </p>
                </div>
                <div className="bg-purple-900/40 rounded-lg p-4 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">Data Governance</h4>
                  <p className="text-gray-300 text-sm">
                    Review policies, procedures, and compliance frameworks
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-md rounded-xl p-8 border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Technology Infrastructure</h3>
              <div className="space-y-4">
                <div className="bg-green-900/40 rounded-lg p-4 border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">Cloud Readiness</h4>
                  <p className="text-gray-300 text-sm">
                    Evaluate cloud adoption and migration capabilities
                  </p>
                </div>
                <div className="bg-teal-900/40 rounded-lg p-4 border border-teal-500/20">
                  <h4 className="font-semibold text-teal-300 mb-2">Integration Capabilities</h4>
                  <p className="text-gray-300 text-sm">
                    Assess API infrastructure and system connectivity
                  </p>
                </div>
                <div className="bg-emerald-900/40 rounded-lg p-4 border border-emerald-500/20">
                  <h4 className="font-semibold text-emerald-300 mb-2">Security Framework</h4>
                  <p className="text-gray-300 text-sm">
                    Review security policies and compliance requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Selection */}
        <section id="technology" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Code className="h-8 w-8 text-indigo-400" />
            Technology Selection Framework
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">AI Technology Categories</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Machine Learning</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Supervised learning algorithms</li>
                    <li>• Unsupervised learning techniques</li>
                    <li>• Reinforcement learning systems</li>
                    <li>• Deep learning frameworks</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg p-6 border border-blue-500/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Natural Language Processing</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Text analysis and sentiment</li>
                    <li>• Language translation systems</li>
                    <li>• Chatbot and virtual assistants</li>
                    <li>• Document processing automation</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-lg p-6 border border-green-500/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Computer Vision</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Image recognition and classification</li>
                    <li>• Object detection and tracking</li>
                    <li>• Quality inspection systems</li>
                    <li>• Augmented reality applications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-xl p-8 border border-indigo-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Technology Selection Criteria</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-4">Business Alignment</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Addresses specific business needs</li>
                    <li>• Integrates with existing systems</li>
                    <li>• Supports scalability requirements</li>
                    <li>• Enables competitive advantage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">Technical Considerations</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Performance and accuracy metrics</li>
                    <li>• Development and deployment complexity</li>
                    <li>• Maintenance and support requirements</li>
                    <li>• Security and compliance features</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Phases */}
        <section id="implementation" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Implementation Phases</h2>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-md rounded-xl p-8 border border-blue-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Foundation & Planning</h3>
                  <p className="text-blue-200">Months 1-3</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Activities</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Infrastructure setup and configuration</li>
                    <li>• Data integration and quality assessment</li>
                    <li>• Team formation and role definition</li>
                    <li>• Security and compliance framework</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Deliverables</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Technical architecture document</li>
                    <li>• Data governance policies</li>
                    <li>• Project roadmap and milestones</li>
                    <li>• Risk assessment and mitigation plans</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-xl p-8 border border-indigo-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Pilot Implementation</h3>
                  <p className="text-indigo-200">Months 4-6</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Key Activities</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Select and implement pilot use cases</li>
                    <li>• Develop and train initial models</li>
                    <li>• Test integration with existing systems</li>
                    <li>• Gather user feedback and iterate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Deliverables</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Working AI prototypes</li>
                    <li>• Performance benchmarks</li>
                    <li>• User acceptance test results</li>
                    <li>• Lessons learned documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Scale & Optimize</h3>
                  <p className="text-purple-200">Months 7-12</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Activities</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Deploy AI solutions across departments</li>
                    <li>• Optimize models for production performance</li>
                    <li>• Establish monitoring and maintenance processes</li>
                    <li>• Scale infrastructure to support growth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-pink-400 mb-3">Deliverables</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Production-ready AI systems</li>
                    <li>• Operational dashboards and reports</li>
                    <li>• Maintenance and support procedures</li>
                    <li>• ROI measurement and reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance & Ethics */}
        <section id="governance" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Shield className="h-8 w-8 text-indigo-400" />
            Governance & Ethics Framework
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">AI Governance Structure</h3>
              <div className="space-y-4">
                <div className="bg-indigo-900/40 rounded-lg p-4 border border-indigo-500/20">
                  <h4 className="font-semibold text-indigo-300 mb-2">Executive Oversight</h4>
                  <p className="text-gray-300 text-sm">
                    C-level sponsorship and strategic direction for AI initiatives
                  </p>
                </div>
                <div className="bg-purple-900/40 rounded-lg p-4 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">Technical Governance</h4>
                  <p className="text-gray-300 text-sm">
                    Architecture reviews, security assessments, and compliance monitoring
                  </p>
                </div>
                <div className="bg-blue-900/40 rounded-lg p-4 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">Ethics Committee</h4>
                  <p className="text-gray-300 text-sm">
                    Bias monitoring, fairness assessments, and ethical AI practices
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Ethical AI Principles</h3>
              <div className="space-y-4">
                <div className="bg-green-900/40 rounded-lg p-4 border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">Fairness & Non-discrimination</h4>
                  <p className="text-gray-300 text-sm">
                    Ensure AI systems treat all individuals and groups equitably
                  </p>
                </div>
                <div className="bg-teal-900/40 rounded-lg p-4 border border-teal-500/20">
                  <h4 className="font-semibold text-teal-300 mb-2">Transparency & Explainability</h4>
                  <p className="text-gray-300 text-sm">
                    Provide clear explanations for AI decisions and recommendations
                  </p>
                </div>
                <div className="bg-emerald-900/40 rounded-lg p-4 border border-emerald-500/20">
                  <h4 className="font-semibold text-emerald-300 mb-2">Privacy & Data Protection</h4>
                  <p className="text-gray-300 text-sm">
                    Implement robust data protection and privacy preservation measures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Best Practices & Common Pitfalls</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-md rounded-xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                Best Practices
              </h3>
              
              <div className="space-y-4">
                <div className="bg-green-900/40 rounded-lg p-4 border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">Start Small, Scale Smart</h4>
                  <p className="text-gray-300 text-sm">
                    Begin with pilot projects to prove value before scaling across the organization
                  </p>
                </div>
                <div className="bg-emerald-900/40 rounded-lg p-4 border border-emerald-500/20">
                  <h4 className="font-semibold text-emerald-300 mb-2">Invest in Data Quality</h4>
                  <p className="text-gray-300 text-sm">
                    High-quality data is the foundation of successful AI implementations
                  </p>
                </div>
                <div className="bg-teal-900/40 rounded-lg p-4 border border-teal-500/20">
                  <h4 className="font-semibold text-teal-300 mb-2">Focus on Change Management</h4>
                  <p className="text-gray-300 text-sm">
                    Prepare your workforce for AI adoption through comprehensive training
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-md rounded-xl p-8 border border-red-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-red-400" />
                Common Pitfalls
              </h3>
              
              <div className="space-y-4">
                <div className="bg-red-900/40 rounded-lg p-4 border border-red-500/20">
                  <h4 className="font-semibold text-red-300 mb-2">Technology-First Approach</h4>
                  <p className="text-gray-300 text-sm">
                    Don't start with technology - begin with business problems and use cases
                  </p>
                </div>
                <div className="bg-orange-900/40 rounded-lg p-4 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">Underestimating Complexity</h4>
                  <p className="text-gray-300 text-sm">
                    AI projects often take longer and require more resources than initially planned
                  </p>
                </div>
                <div className="bg-yellow-900/40 rounded-lg p-4 border border-yellow-500/20">
                  <h4 className="font-semibold text-yellow-300 mb-2">Neglecting Data Governance</h4>
                  <p className="text-gray-300 text-sm">
                    Poor data governance can lead to biased models and compliance issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 border border-indigo-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your AI Transformation?
            </h2>
            <p className="text-indigo-200 mb-6">
              Get expert guidance and support for your enterprise AI implementation journey. 
              Our team of AI specialists can help you avoid common pitfalls and achieve success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Expert Consultation
              </Link>
              <Link 
                href="/case-studies"
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}