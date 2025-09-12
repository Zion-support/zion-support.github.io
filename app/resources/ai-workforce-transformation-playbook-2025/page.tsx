import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AIWorkforceTransformationPlaybook2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Workforce Transformation Playbook 2025: 150+ Pages of Templates and Strategies"
        description="Download our comprehensive AI workforce transformation playbook with 150+ pages of templates, checklists, and strategies for reskilling in the AI era."
        keywords="AI workforce transformation, AI reskilling, workforce development, AI training, human-AI collaboration"
        url="/resources/ai-workforce-transformation-playbook-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Workforce Transformation Playbook 2025: 150+ Pages of Templates and Strategies
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Download our comprehensive 150+ page AI workforce transformation playbook with templates, 
            checklists, and proven strategies for reskilling your workforce in the AI era.
          </p>
        </div>

        <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mb-12 flex items-center justify-center">
          <div className="text-8xl">👥</div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">What You'll Get</h3>
            <ul className="text-purple-800 space-y-1">
              <li>• 150+ pages of comprehensive workforce transformation guidance</li>
              <li>• 25+ ready-to-use templates and checklists</li>
              <li>• Real-world case studies and success stories</li>
              <li>• Step-by-step reskilling frameworks</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why This Playbook Matters</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The AI revolution is transforming every industry, and organizations that fail to reskill their 
            workforce risk being left behind. This playbook provides proven strategies for transforming 
            your workforce to thrive in the AI era.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What's Included</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Phase 1: Assessment & Planning (Pages 1-40)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Workforce AI readiness assessment framework</li>
                <li>• Skills gap analysis templates</li>
                <li>• Transformation roadmap development</li>
                <li>• Stakeholder alignment strategies</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎓 Phase 2: Training & Development (Pages 41-80)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• AI literacy training programs</li>
                <li>• Technical skills development pathways</li>
                <li>• Soft skills enhancement strategies</li>
                <li>• Learning management system setup</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🤝 Phase 3: Human-AI Collaboration (Pages 81-120)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Collaboration framework development</li>
                <li>• Role redesign methodologies</li>
                <li>• Performance measurement systems</li>
                <li>• Change management strategies</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Phase 4: Measurement & Optimization (Pages 121-150)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Success metrics and KPIs</li>
                <li>• Continuous improvement processes</li>
                <li>• Feedback collection systems</li>
                <li>• Future planning frameworks</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Get Your Free AI Workforce Transformation Playbook</h3>
            <p className="text-lg mb-6 opacity-90">
              Download our comprehensive 150+ page playbook with templates, checklists, and proven 
              strategies for transforming your workforce in the AI era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                📥 Download Free Playbook
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Get Implementation Support
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}