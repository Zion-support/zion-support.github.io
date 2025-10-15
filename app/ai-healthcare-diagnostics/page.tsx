import React from "react";
import { ArrowRight, Brain, Shield, Users, BarChart3, CheckCircle, Sparkles, Mail, Smartphone, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

export default function AIHealthcareDiagnostics() {
  const features = [
    {
      title: "Medical Imaging Analysis",
      description: "Advanced AI algorithms analyze X-rays, MRIs, CT scans, and ultrasounds with 99.2% accuracy",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Early Disease Detection", "Reduced False Positives", "Faster Diagnosis", "Cost Savings"]
    },
    {
      title: "Symptom Assessment Engine",
      description: "Intelligent symptom analysis with differential diagnosis and treatment recommendations",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Comprehensive Analysis", "Risk Stratification", "Treatment Guidance", "Patient Education"]
    },
    {
      title: "Drug Interaction Checker",
      description: "Real-time medication interaction analysis and allergy detection for patient safety",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Safety Alerts", "Allergy Detection", "Dosage Optimization", "Compliance Tracking"]
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models predict disease progression and treatment outcomes",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Prognosis Prediction", "Treatment Optimization", "Risk Assessment", "Resource Planning"]
    }
  ];

  const useCases = [
    {
      title: "Radiology Departments",
      description: "Accelerate image analysis and improve diagnostic accuracy in radiology departments",
      impact: "40% faster diagnosis, 30% reduction in misdiagnosis"
    },
    {
      title: "Emergency Rooms",
      description: "Rapid triage and critical condition identification in emergency settings",
      impact: "50% faster triage, 25% improvement in critical case detection"
    },
    {
      title: "Primary Care",
      description: "Support general practitioners with comprehensive diagnostic assistance",
      impact: "60% more accurate initial diagnoses, 35% reduction in referrals"
    },
    {
      title: "Specialized Clinics",
      description: "Enhance specialized medical practices with AI-powered diagnostic tools",
      impact: "45% improvement in diagnostic accuracy, 50% faster patient processing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered healthcare diagnostics platform. Advanced medical imaging analysis, symptom assessment, and predictive analytics for improved patient care." />
        <meta name="keywords" content="AI healthcare, medical diagnostics, healthcare AI, medical imaging, healthcare technology" />
      </Helmet>
      <SEOHead 
        title="AI Healthcare Diagnostics"
        description="Revolutionary AI-powered healthcare diagnostics platform. Advanced medical imaging analysis, symptom assessment, and predictive analytics for improved patient care."
        keywords="AI healthcare, medical diagnostics, healthcare AI, medical imaging, healthcare technology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Healthcare Diagnostics
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Revolutionize healthcare with our advanced AI-powered diagnostic platform. 
                Enhance accuracy, speed up diagnosis, and improve patient outcomes with 
                cutting-edge artificial intelligence technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Request Demo
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Advanced Diagnostic Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI-powered tools for modern healthcare
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Healthcare Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform healthcare delivery across different settings
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="text-sm text-green-400 font-medium">{useCase.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Healthcare?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare providers using our AI diagnostic platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}