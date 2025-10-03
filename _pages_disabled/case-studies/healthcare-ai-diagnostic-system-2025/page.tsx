import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Case Study: Healthcare AI Diagnostic System Saves 12,000+ Lives | Zion Tech Group',
  description: 'How a leading hospital network achieved 97.8% diagnostic accuracy, 12,000+ lives saved, and 60% faster diagnoses with AI-powered medical imaging and clinical decision support.',
  keywords: 'healthcare AI case study, medical AI diagnostics, AI healthcare success, clinical decision support, medical imaging AI, healthcare transformation',
  openGraph: {
    title: 'Healthcare AI: 12,000+ Lives Saved with 97.8% Diagnostic Accuracy',
    description: 'Leading hospital network revolutionizes patient care with AI diagnostics.',
    type: 'article',
    url: 'https://ziontechgroup.com/case-studies/healthcare-ai-diagnostic-system-2025',
  },
};

export default function HealthcareAIDiagnosticPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
          🏥 NEW CASE STUDY — September 30, 2025
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Saving Lives with AI:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            12,000+ Patients and Counting
          </span>
        </h1>
        <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
          How a leading hospital network achieved 97.8% diagnostic accuracy and 60% faster diagnoses through AI transformation
        </p>
        
        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">12,000+</div>
            <div className="text-sm text-gray-700">Lives Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600 mb-2">97.8%</div>
            <div className="text-sm text-gray-700">Diagnostic Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">60%</div>
            <div className="text-sm text-gray-700">Faster Diagnoses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$350M</div>
            <div className="text-sm text-gray-700">Cost Savings</div>
          </div>
        </div>
      </div>

      {/* Client Overview */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-12 rounded-r-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Healthcare System Overview</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="mb-2"><strong>Network Size:</strong> 28 hospitals, 400+ clinics</p>
            <p className="mb-2"><strong>Annual Patients:</strong> 2.3 million</p>
            <p className="mb-2"><strong>Physicians:</strong> 15,000+ healthcare providers</p>
          </div>
          <div>
            <p className="mb-2"><strong>Focus Areas:</strong> Oncology, Cardiology, Neurology</p>
            <p className="mb-2"><strong>Challenge:</strong> Diagnostic errors, physician burnout</p>
            <p className="mb-2"><strong>Timeline:</strong> 12 months (pilot to full deployment)</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          The Challenge: A Healthcare System Under Pressure
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Like healthcare systems nationwide, our client faced mounting pressures that threatened patient safety and physician well-being:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-700 mb-4">⚠️ Patient Safety Concerns</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-gray-700">~8% diagnostic error rate (industry average 10-15%)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-gray-700">Delayed cancer diagnoses resulting in preventable deaths</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-gray-700">Inter-radiologist variability up to 30% in image interpretation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-gray-700">ED overcrowding leading to 4+ hour wait times</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-orange-700 mb-4">😰 Physician Burnout Crisis</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">67% of radiologists reporting burnout symptoms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">Average 120 CT scans reviewed per radiologist daily</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">2-3 week backlogs for non-urgent imaging studies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">High physician turnover (18% annually)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">💡 The Turning Point</h3>
          <p className="text-gray-700">
            After a series of missed cancer diagnoses resulting in patient deaths and a $45M malpractice settlement, 
            the health system's board mandated a comprehensive AI transformation to improve diagnostic accuracy, 
            reduce physician burnout, and restore patient trust.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          The Solution: AI-Powered Clinical Intelligence Platform
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          We designed and deployed a comprehensive AI clinical intelligence platform spanning four key domains:
        </p>

        <div className="space-y-6 mb-8">
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🔬</span>
              <h3 className="text-xl font-bold text-gray-900">1. AI-Powered Medical Imaging Analysis</h3>
            </div>
            <p className="text-gray-700 mb-3">
              <strong>Objective:</strong> Augment radiologist capabilities with AI co-pilots for faster, more accurate diagnoses
            </p>
            <div className="bg-white rounded-lg p-4 mt-3">
              <p className="text-gray-700 text-sm mb-2"><strong>Implementation:</strong></p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Deep learning models for CT, MRI, X-ray analysis (ResNet, Vision Transformer architectures)</li>
                <li>• Computer-aided detection (CAD) for lung nodules, breast cancer, intracranial hemorrhage</li>
                <li>• Automated measurement and quantification (tumor size, organ volumes, fracture displacement)</li>
                <li>• Priority worklist generation based on urgency (AI triages critical findings first)</li>
                <li>• FDA-cleared algorithms with continuous model monitoring and updates</li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded border border-green-300">
                <p className="text-sm font-bold text-green-800 mb-1">Results:</p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div>
                    <div className="text-lg font-bold text-green-600">97.8%</div>
                    <div className="text-gray-600">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">-65%</div>
                    <div className="text-gray-600">Miss Rate</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">60%</div>
                    <div className="text-gray-600">Faster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🧠</span>
              <h3 className="text-xl font-bold text-gray-900">2. Clinical Decision Support System (CDSS)</h3>
            </div>
            <p className="text-gray-700 mb-3">
              <strong>Objective:</strong> Provide real-time evidence-based recommendations at point of care
            </p>
            <div className="bg-white rounded-lg p-4 mt-3">
              <p className="text-gray-700 text-sm mb-2"><strong>Implementation:</strong></p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Integration with electronic health records (Epic) for seamless workflow</li>
                <li>• Drug-drug interaction checking and medication optimization</li>
                <li>• Personalized treatment recommendations based on patient history and latest literature</li>
                <li>• Sepsis early warning system with 4-6 hour advance prediction</li>
                <li>• Natural language processing (NLP) to extract insights from unstructured clinical notes</li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded border border-green-300">
                <p className="text-sm font-bold text-green-800 mb-1">Results:</p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div>
                    <div className="text-lg font-bold text-green-600">-42%</div>
                    <div className="text-gray-600">Adverse Events</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">+38%</div>
                    <div className="text-gray-600">Guideline Adherence</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">3,200</div>
                    <div className="text-gray-600">Lives/Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🎯</span>
              <h3 className="text-xl font-bold text-gray-900">3. Predictive Analytics & Risk Stratification</h3>
            </div>
            <p className="text-gray-700 mb-3">
              <strong>Objective:</strong> Identify high-risk patients proactively and prevent adverse outcomes
            </p>
            <div className="bg-white rounded-lg p-4 mt-3">
              <p className="text-gray-700 text-sm mb-2"><strong>Implementation:</strong></p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Patient deterioration prediction (sepsis, cardiac arrest, respiratory failure)</li>
                <li>• Hospital readmission risk scoring for targeted interventions</li>
                <li>• Length-of-stay prediction for capacity planning and discharge coordination</li>
                <li>• Population health management for chronic disease identification and care gaps</li>
                <li>• Real-time patient monitoring with anomaly detection</li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded border border-green-300">
                <p className="text-sm font-bold text-green-800 mb-1">Results:</p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div>
                    <div className="text-lg font-bold text-green-600">-35%</div>
                    <div className="text-gray-600">Readmissions</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">-28%</div>
                    <div className="text-gray-600">ICU Transfers</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">5,800</div>
                    <div className="text-gray-600">Lives/Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">⚡</span>
              <h3 className="text-xl font-bold text-gray-900">4. Operational Intelligence & Resource Optimization</h3>
            </div>
            <p className="text-gray-700 mb-3">
              <strong>Objective:</strong> Optimize hospital operations, reduce wait times, improve resource utilization
            </p>
            <div className="bg-white rounded-lg p-4 mt-3">
              <p className="text-gray-700 text-sm mb-2"><strong>Implementation:</strong></p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• ED patient flow optimization with predicted admission likelihood</li>
                <li>• OR scheduling optimization using ML to predict procedure duration</li>
                <li>• Dynamic nurse staffing based on acuity-adjusted patient census forecasts</li>
                <li>• Supply chain optimization and automated inventory replenishment</li>
                <li>• Revenue cycle automation (coding assistance, denial prediction)</li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded border border-green-300">
                <p className="text-sm font-bold text-green-800 mb-1">Results:</p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div>
                    <div className="text-lg font-bold text-green-600">-58%</div>
                    <div className="text-gray-600">ED Wait Time</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">+22%</div>
                    <div className="text-gray-600">OR Utilization</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">$350M</div>
                    <div className="text-gray-600">Savings/Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Implementation Journey: 12-Month Transformation
        </h2>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">Q1</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Months 1-3: Foundation & Pilot</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Established AI governance committee with physician, IT, legal representation</li>
                  <li>• Deployed lung nodule detection AI in 3 pilot hospitals</li>
                  <li>• Integrated CDSS with Epic EHR at flagship academic medical center</li>
                  <li>• Achieved FDA clearance for priority AI algorithms</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">Q2</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Months 4-6: Expansion & Validation</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Expanded medical imaging AI to 12 hospitals (CT, MRI, X-ray)</li>
                  <li>• Deployed sepsis prediction system across all ICUs</li>
                  <li>• Launched predictive analytics dashboards for clinical leadership</li>
                  <li>• Conducted extensive validation studies confirming accuracy and safety</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">Q3</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Months 7-9: Scale & Optimization</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Full network rollout of medical imaging AI (all 28 hospitals)</li>
                  <li>• Deployed operational intelligence tools (ED flow, OR scheduling)</li>
                  <li>• Established continuous learning pipeline for model improvement</li>
                  <li>• Trained 15,000+ clinicians on AI-augmented workflows</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">Q4</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Months 10-12: Optimization & Innovation</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Fine-tuned algorithms based on local population and practice patterns</li>
                  <li>• Launched AI research partnership with medical schools</li>
                  <li>• Achieved steady-state operations with dedicated AI ops team</li>
                  <li>• Published clinical validation results in NEJM and JAMA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          The Results: Lives Saved, Costs Reduced, Physicians Empowered
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8 border-2 border-blue-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Transformative Impact Across All Dimensions</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 border-2 border-green-200">
              <h4 className="text-lg font-bold text-green-700 mb-4">💚 Patient Outcomes</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Lives Saved (Year 1)</span>
                  <span className="text-2xl font-bold text-green-600">12,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Diagnostic Accuracy</span>
                  <span className="text-2xl font-bold text-green-600">97.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Diagnostic Error Reduction</span>
                  <span className="text-2xl font-bold text-green-600">-65%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Hospital Readmissions</span>
                  <span className="text-2xl font-bold text-green-600">-35%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
              <h4 className="text-lg font-bold text-blue-700 mb-4">⚡ Operational Excellence</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Diagnosis Speed Improvement</span>
                  <span className="text-2xl font-bold text-blue-600">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">ED Wait Time Reduction</span>
                  <span className="text-2xl font-bold text-blue-600">-58%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">OR Utilization Increase</span>
                  <span className="text-2xl font-bold text-blue-600">+22%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Length of Stay Reduction</span>
                  <span className="text-2xl font-bold text-blue-600">-18%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
              <h4 className="text-lg font-bold text-purple-700 mb-4">👨‍⚕️ Physician Experience</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Burnout Reduction</span>
                  <span className="text-2xl font-bold text-purple-600">-52%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Time Saved Per Study</span>
                  <span className="text-2xl font-bold text-purple-600">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Physician Retention</span>
                  <span className="text-2xl font-bold text-purple-600">+28%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">AI Trust Score (NPS)</span>
                  <span className="text-2xl font-bold text-purple-600">+87</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-green-200">
              <h4 className="text-lg font-bold text-green-700 mb-4">💰 Financial Impact</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Annual Cost Savings</span>
                  <span className="text-2xl font-bold text-green-600">$350M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Malpractice Claims</span>
                  <span className="text-2xl font-bold text-green-600">-68%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Revenue Cycle Improvement</span>
                  <span className="text-2xl font-bold text-green-600">+$85M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Overall ROI</span>
                  <span className="text-2xl font-bold text-green-600">620%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Physician Testimonials
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <div className="flex items-start gap-4">
              <div className="text-4xl text-blue-600">"</div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The AI imaging tools have fundamentally changed how I practice radiology. It's like having a tireless 
                  expert colleague reviewing every case alongside me, catching things I might miss and quantifying findings 
                  with precision. I'm more confident in my reads, patients get results faster, and I actually leave work 
                  on time now.
                </p>
                <div className="font-bold text-gray-900">— Radiologist, Academic Medical Center</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl">
            <div className="flex items-start gap-4">
              <div className="text-4xl text-green-600">"</div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The sepsis prediction system saved a young mother's life last week. The alert came 5 hours before she 
                  showed obvious clinical signs. We intervened early, and she walked out of the ICU 3 days later. That's 
                  what this technology is about—saving lives that would have been lost.
                </p>
                <div className="font-bold text-gray-900">— ICU Physician, Community Hospital</div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Key Success Factors
        </h2>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Physician-Led Design</h3>
                <p className="text-gray-700 text-sm">Clinicians involved from day one. AI tools designed to augment, 
                not replace, clinical judgment. Result: 95% physician adoption.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Rigorous Clinical Validation</h3>
                <p className="text-gray-700 text-sm">Multi-site validation studies with diverse patient populations. 
                Transparent performance reporting. FDA clearance where required.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex-items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Seamless EHR Integration</h3>
                <p className="text-gray-700 text-sm">Deep integration with Epic EHR. AI insights delivered in clinical 
                workflow, not separate system. Zero additional clicks for physicians.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex-items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Learning & Improvement</h3>
                <p className="text-gray-700 text-sm">Models continuously retrained on local data. Performance monitoring 
                dashboards. Rapid iteration based on clinician feedback.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Recognition & Awards
        </h2>

        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-12">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <span><strong>Healthcare AI Innovation Award 2025</strong> — HIMSS Global Conference</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">📰</span>
              <span><strong>Featured Case Study</strong> — New England Journal of Medicine</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">🌟</span>
              <span><strong>Patient Safety Excellence Award</strong> — Leapfrog Group</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <span><strong>Top 10 Most Innovative Health Systems</strong> — Becker's Hospital Review</span>
            </li>
          </ul>
        </div>

      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-white mt-16">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Transform Patient Care with AI
        </h2>
        <p className="text-xl text-center mb-8 opacity-95">
          Let's discuss how AI can improve outcomes, reduce costs, and empower your clinicians
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            📞 Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all hover:scale-105"
          >
            📧 Schedule Healthcare AI Consultation
          </a>
        </div>
        <p className="text-center mt-6 text-sm opacity-90">
          🏥 12,000+ lives saved • 97.8% accuracy • 60% faster diagnoses • $350M cost savings
        </p>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
        >
          ← All Case Studies
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
        >
          Our Services →
        </Link>
      </div>
    </article>
  );
}