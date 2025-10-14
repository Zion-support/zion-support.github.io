import React from "react";"
import { Helmet } from "react-helmet-async";

const AiHealthcareDiagnosticsPage = () => {
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>"
        <meta name="description" content="Advanced AI-powered healthcare diagnostic solutions by Zion Tech Group." />"
        <meta name="keywords" content="AI healthcare, medical diagnostics, healthcare AI, medical imaging" />
      </Helmet>
      "
      <div className="container mx-auto px-4 py-20">"
        <div className="text-center">"
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
            AI Healthcare Diagnostics
          </h1>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionize healthcare with our AI-powered diagnostic solutions for accurate and efficient medical analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
        "
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">"
            <h3 className="text-xl font-semibold text-white mb-3">Medical Imaging AI</h3>"
            <p className="text-gray-300">
              Advanced AI algorithms for analyzing medical images with unprecedented accuracy.
            </p>
          </div>
          "
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">"
            <h3 className="text-xl font-semibold text-white mb-3">Diagnostic Assistance</h3>"
            <p className="text-gray-300">
              AI-powered tools to assist healthcare professionals in making accurate diagnoses.
            </p>
          </div>
          "
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">"
            <h3 className="text-xl font-semibold text-white mb-3">Patient Monitoring</h3>"
            <p className="text-gray-300">
              Continuous monitoring and analysis of patient data for early intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Healthcare with AI
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI healthcare solutions are designed to improve diagnostic accuracy, 
                reduce costs, and enhance patient outcomes across all medical specialties.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Healthcare?</h3>
              <p className="text-gray-300 mb-6">
                Contact us to learn how our AI healthcare solutions can benefit your organization.
              </p>
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            HIPAA Compliant & Secure
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI healthcare solutions are built with the highest security standards and 
            full HIPAA compliance to protect patient data and ensure regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Learn More About Security
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );,
};
"
export default AiHealthcareDiagnosticsPage;
