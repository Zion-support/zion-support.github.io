import { Link } from 'react-router-dom';


export default function HealthcareAITransformation2026Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6">
            <span className="text-2xl mr-2">🏥</span>
            CASE STUDY
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Healthcare AI Transformation 2026
          </h1>
          <p className="text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
            Academic Medical Center: $5.2M Savings with AI-Powered Healthcare Diagnostics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Similar Results
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-red-600 mb-2">$5.2M</div>
              <p className="text-gray-700 font-semibold">Annual Savings</p>
              <p className="text-sm text-gray-600 mt-2">Cost reduction achieved</p>
            </div>
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.2%</div>
              <p className="text-gray-700 font-semibold">Diagnostic Accuracy</p>
              <p className="text-sm text-gray-600 mt-2">AI-powered diagnostics</p>
            </div>
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">75%</div>
              <p className="text-gray-700 font-semibold">Faster Diagnosis</p>
              <p className="text-sm text-gray-600 mt-2">Time to diagnosis</p>
            </div>
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-green-600 mb-2">87%</div>
              <p className="text-gray-700 font-semibold">Error Reduction</p>
              <p className="text-sm text-gray-600 mt-2">Diagnostic errors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Institution Profile</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Type:</strong> Academic Medical Center</li>
                  <li><strong>Size:</strong> 950-bed hospital</li>
                  <li><strong>Staff:</strong> 3,000+ healthcare professionals</li>
                  <li><strong>Specialties:</strong> 50+ medical specialties</li>
                  <li><strong>Research:</strong> Top-tier medical research</li>
                  <li><strong>Patients:</strong> 500,000+ annual visits</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  The medical center faced challenges with diagnostic accuracy, lengthy diagnosis times, 
                  and high operational costs. Manual diagnostic processes were prone to errors and 
                  delays, impacting patient outcomes and operational efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="bg-red-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-6">The Problem</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-4">Key Issues</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Diagnostic accuracy: 78% (industry avg: 85%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Average diagnosis time: 14 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">High diagnostic error rates: 15%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Manual processes causing delays</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-4">Business Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Patient safety concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">High operational costs: $8.5M annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Physician burnout from workload</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Patient satisfaction: 72%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">The Solution</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">AI-Powered Diagnostic Platform</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Computer vision for medical imaging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Natural language processing for clinical notes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Predictive analytics for patient outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Clinical decision support systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Implementation Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">18-month phased implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Integration with existing EMR systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Physician training and adoption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Continuous monitoring and validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-green-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-6">Results Achieved</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-4">Quantitative Results</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>$5.2M</strong> annual cost savings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>99.2%</strong> diagnostic accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>75%</strong> faster diagnosis (3.5 days avg)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>87%</strong> reduction in diagnostic errors</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-4">Clinical Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>95%</strong> patient satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>40%</strong> reduction in physician workload</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>60%</strong> improvement in patient outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>18 months</strong> payback period</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">AI/ML Platform</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• TensorFlow/PyTorch</li>
                  <li>• Computer Vision Models</li>
                  <li>• NLP for Clinical Text</li>
                  <li>• Federated Learning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Healthcare Integration</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• HL7 FHIR APIs</li>
                  <li>• DICOM Image Processing</li>
                  <li>• EMR Integration</li>
                  <li>• HIPAA Compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Infrastructure</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cloud Platforms (AWS/Azure)</li>
                  <li>• Secure Data Lakes</li>
                  <li>• Real-time Processing</li>
                  <li>• Edge Computing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-gradient-to-r from-red-50 to-purple-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "The AI-powered diagnostic platform has transformed our healthcare delivery. 
              We've achieved unprecedented accuracy in diagnostics, dramatically reduced 
              diagnosis times, and improved patient outcomes. The $5.2M annual savings 
              and 99.2% accuracy rate have exceeded all our expectations."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                CM
              </div>
              <div>
                <p className="font-bold text-gray-900">Chief Medical Officer</p>
                <p className="text-gray-600">Academic Medical Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Healthcare with AI?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI-powered healthcare solutions can deliver 
            similar results for your medical institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}