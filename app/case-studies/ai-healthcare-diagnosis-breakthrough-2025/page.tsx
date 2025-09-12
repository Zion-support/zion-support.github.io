import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function HealthcareDiagnosisBreakthrough2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Healthcare Diagnosis Breakthrough: 95% Accuracy Case Study"
        description="Discover how a leading hospital achieved 95% diagnostic accuracy and 60% faster diagnosis times using AI-powered medical imaging and patient data analysis."
        keywords="AI healthcare, medical diagnosis, medical imaging AI, healthcare automation, diagnostic accuracy, 2025"
        url="/case-studies/ai-healthcare-diagnosis-breakthrough-2025"
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Case Studies
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Healthcare AI</span>
          </div>
          
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🏥 NEW - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Healthcare Diagnosis Breakthrough: 95% Accuracy Achievement
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            How a leading hospital system achieved 95% diagnostic accuracy, 60% faster 
            diagnosis times, and $15M annual savings through AI-powered medical imaging 
            and patient data integration.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">ZT</span>
              </div>
              <span>Zion Tech Group</span>
            </div>
            <span>•</span>
            <span>Case Study</span>
            <span>•</span>
            <span>Jan 28, 2025</span>
            <span>•</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
              Healthcare
            </span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Key Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Diagnostic Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-gray-600">Faster Diagnosis Times</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">$15M</div>
                <div className="text-gray-600">Annual Cost Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">80%</div>
                <div className="text-gray-600">Reduction in Misdiagnosis</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Challenge</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            A major hospital system serving over 2 million patients annually faced critical 
            challenges in diagnostic accuracy and efficiency. With increasing patient volumes, 
            complex cases, and the need for rapid, accurate diagnoses, the traditional 
            diagnostic process was becoming unsustainable.
          </p>

          <div className="bg-red-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Critical Issues</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Diagnostic Delays:</strong> Average diagnosis time of 3-5 days for complex cases</li>
              <li>• <strong>Accuracy Concerns:</strong> 15-20% misdiagnosis rate in certain specialties</li>
              <li>• <strong>Resource Constraints:</strong> Limited specialist availability and high workload</li>
              <li>• <strong>Data Silos:</strong> Patient information scattered across multiple systems</li>
              <li>• <strong>Rising Costs:</strong> Increasing operational costs and resource requirements</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Solution</h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We implemented a comprehensive AI-powered diagnostic system that combines 
            medical imaging analysis, patient data integration, and clinical decision 
            support to enhance diagnostic accuracy and efficiency.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Diagnostic System Architecture</h3>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">System Components</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <div className="font-medium text-gray-900">Medical Imaging AI</div>
                  <div className="text-sm text-gray-600">Advanced computer vision models for X-ray, MRI, CT, and ultrasound analysis</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <div className="font-medium text-gray-900">Patient Data Integration</div>
                  <div className="text-sm text-gray-600">Unified platform combining EHR, lab results, and clinical notes</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <div className="font-medium text-gray-900">Clinical Decision Support</div>
                  <div className="text-sm text-gray-600">AI-powered recommendations and risk assessment tools</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <div className="font-medium text-gray-900">Workflow Integration</div>
                  <div className="text-sm text-gray-600">Seamless integration with existing hospital systems and workflows</div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features and Capabilities</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Medical Imaging Analysis</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• X-ray interpretation for chest, bone, and dental imaging</li>
                <li>• MRI analysis for brain, spine, and joint conditions</li>
                <li>• CT scan evaluation for trauma and cancer detection</li>
                <li>• Ultrasound analysis for cardiac and obstetric imaging</li>
                <li>• Real-time image enhancement and annotation</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Patient Data Processing</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Electronic health record (EHR) analysis</li>
                <li>• Lab result interpretation and trend analysis</li>
                <li>• Clinical note processing and extraction</li>
                <li>• Medication history and interaction checking</li>
                <li>• Family history and genetic data integration</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Clinical Decision Support</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Differential diagnosis suggestions</li>
                <li>• Risk stratification and scoring</li>
                <li>• Treatment recommendation engine</li>
                <li>• Drug interaction and allergy checking</li>
                <li>• Follow-up care recommendations</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Integration and Workflow</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• PACS system integration</li>
                <li>• EHR system connectivity</li>
                <li>• Mobile app for physicians</li>
                <li>• Real-time alerts and notifications</li>
                <li>• Audit trail and compliance reporting</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Implementation Process</h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 1: Foundation and Data Preparation (Months 1-3)</h3>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Foundation Activities</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">1</div>
                <div>
                  <div className="font-medium text-gray-900">Data Integration and Cleaning</div>
                  <div className="text-sm text-gray-600">Consolidated patient data from 15+ systems into unified platform</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">2</div>
                <div>
                  <div className="font-medium text-gray-900">Model Training and Validation</div>
                  <div className="text-sm text-gray-600">Trained AI models on 500,000+ anonymized medical images and records</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">3</div>
                <div>
                  <div className="font-medium text-gray-900">Infrastructure Setup</div>
                  <div className="text-sm text-gray-600">Deployed secure, HIPAA-compliant cloud infrastructure</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">4</div>
                <div>
                  <div className="font-medium text-gray-900">Staff Training</div>
                  <div className="text-sm text-gray-600">Trained 200+ physicians and staff on new AI tools</div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 2: Pilot Implementation (Months 4-6)</h3>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Pilot Results</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">1</div>
                <div>
                  <div className="font-medium text-gray-900">Radiology Department</div>
                  <div className="text-sm text-gray-600">95% accuracy in chest X-ray interpretation, 50% faster reporting</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">2</div>
                <div>
                  <div className="font-medium text-gray-900">Emergency Department</div>
                  <div className="text-sm text-gray-600">60% reduction in diagnostic time for trauma cases</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">3</div>
                <div>
                  <div className="font-medium text-gray-900">Oncology Department</div>
                  <div className="text-sm text-gray-600">90% accuracy in cancer detection and staging</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">4</div>
                <div>
                  <div className="font-medium text-gray-900">Cardiology Department</div>
                  <div className="text-sm text-gray-600">85% accuracy in cardiac condition diagnosis</div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 3: Enterprise Rollout (Months 7-12)</h3>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Full Implementation</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">1</div>
                <div>
                  <div className="font-medium text-gray-900">System-Wide Deployment</div>
                  <div className="text-sm text-gray-600">Deployed across all 8 hospital locations and 50+ clinics</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">2</div>
                <div>
                  <div className="font-medium text-gray-900">Workflow Integration</div>
                  <div className="text-sm text-gray-600">Integrated with existing PACS, EHR, and clinical workflows</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">3</div>
                <div>
                  <div className="font-medium text-gray-900">Performance Monitoring</div>
                  <div className="text-sm text-gray-600">Real-time monitoring and continuous improvement processes</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">4</div>
                <div>
                  <div className="font-medium text-gray-900">Staff Adoption</div>
                  <div className="text-sm text-gray-600">95% physician adoption rate with positive feedback</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Results and Impact</h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantitative Results</h3>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Performance Indicators</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Diagnostic Accuracy</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Overall Diagnostic Accuracy</span>
                    <span className="text-2xl font-bold text-green-600">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Chest X-ray Interpretation</span>
                    <span className="text-2xl font-bold text-green-600">97%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cancer Detection Rate</span>
                    <span className="text-2xl font-bold text-green-600">90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cardiac Condition Detection</span>
                    <span className="text-2xl font-bold text-green-600">85%</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Efficiency Improvements</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Average Diagnosis Time</span>
                    <span className="text-2xl font-bold text-blue-600">-60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Report Generation Time</span>
                    <span className="text-2xl font-bold text-blue-600">-50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Emergency Response Time</span>
                    <span className="text-2xl font-bold text-blue-600">-40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Patient Wait Time</span>
                    <span className="text-2xl font-bold text-blue-600">-35%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Impact</h3>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Cost Savings and ROI</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$15M</div>
                <div className="text-gray-600">Annual Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
                <div className="text-gray-600">Return on Investment</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">18</div>
                <div className="text-gray-600">Months to ROI</div>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Cost Savings Breakdown</h5>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Reduced diagnostic errors: $5.2M</li>
                    <li>• Improved efficiency: $4.8M</li>
                    <li>• Reduced readmissions: $3.1M</li>
                    <li>• Optimized resource utilization: $1.9M</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Faster diagnosis and treatment: $2.1M</li>
                    <li>• Reduced specialist consultation time: $1.5M</li>
                    <li>• Improved patient outcomes: $1.2M</li>
                    <li>• Administrative cost reduction: $0.8M</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualitative Benefits</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Patient Experience</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Faster, more accurate diagnoses</li>
                <li>• Reduced anxiety and uncertainty</li>
                <li>• Better treatment outcomes</li>
                <li>• Improved patient satisfaction scores</li>
                <li>• Reduced hospital readmissions</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Physician Experience</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Enhanced diagnostic confidence</li>
                <li>• Reduced workload and burnout</li>
                <li>• Access to AI-powered insights</li>
                <li>• Improved decision-making support</li>
                <li>• Continuous learning opportunities</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Lessons Learned</h2>

          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Success Factors</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">1</div>
                <div>
                  <div className="font-medium text-gray-900">Strong Executive Sponsorship</div>
                  <div className="text-sm text-gray-600">Leadership commitment and clear communication of vision and benefits</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">2</div>
                <div>
                  <div className="font-medium text-gray-900">Comprehensive Staff Training</div>
                  <div className="text-sm text-gray-600">Extensive training program for all users with ongoing support</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">3</div>
                <div>
                  <div className="font-medium text-gray-900">Gradual Implementation</div>
                  <div className="text-sm text-gray-600">Phased rollout allowing for learning and adaptation</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">4</div>
                <div>
                  <div className="font-medium text-gray-900">Continuous Monitoring and Improvement</div>
                  <div className="text-sm text-gray-600">Regular performance evaluation and system optimization</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Future Roadmap</h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Building on this success, the hospital system is expanding AI capabilities 
            to additional specialties and implementing advanced features:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Planned Expansions</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Pathology and histology analysis</li>
                <li>• Dermatology image analysis</li>
                <li>• Ophthalmology screening</li>
                <li>• Pediatric care optimization</li>
                <li>• Mental health assessment tools</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Advanced Features</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Predictive analytics for patient outcomes</li>
                <li>• Personalized treatment recommendations</li>
                <li>• Real-time clinical decision support</li>
                <li>• Automated report generation</li>
                <li>• Integration with wearable devices</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Get Started</h2>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">🏥 Transform Your Healthcare Organization</h3>
            <p className="text-lg mb-6 opacity-90">
              Ready to achieve similar results in your healthcare organization? Download 
              our comprehensive healthcare AI implementation guide and get expert consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources/healthcare-ai-implementation-guide"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                📋 Download Implementation Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                💬 Get Expert Consultation
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Case Studies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                    Financial Services AI Transformation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    $50M cost savings and 300% efficiency gains in financial services.
                  </p>
                </div>
              </Link>
              <Link href="/case-studies/ai-manufacturing-automation-success-2025" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                    Manufacturing AI Automation Success
                  </h4>
                  <p className="text-gray-600 text-sm">
                    40% cost reduction and 60% faster processing in manufacturing.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}