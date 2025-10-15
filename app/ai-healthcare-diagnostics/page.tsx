import React from 'react';
import { ArrowRight, Brain, Shield, Users, BarChart3, CheckCircle, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEOHead from '../components/SEOHead';

const AiHealthcareDiagnosticsPage: React.FC = () => {
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
      title: "Specialist Clinics",
      description: "Enhance specialist care with AI-powered diagnostic support and monitoring",
      impact: "45% improvement in treatment outcomes, 20% cost reduction"
    }
  ];


  return (
    <>
      <Helmet>
        <title>AI Healthcare Diagnostics - Advanced Medical AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionize healthcare with our AI-powered diagnostic solutions. Advanced medical imaging analysis, symptom assessment, and predictive analytics for improved patient outcomes." />
        <meta name="keywords" content="AI healthcare, medical diagnostics, medical imaging, healthcare AI, diagnostic AI, medical technology" />
      </Helmet>
      
      <SEOHead 
        title="AI Healthcare Diagnostics - Zion Tech Group"
        description="Revolutionize healthcare with our AI-powered diagnostic solutions. Advanced medical imaging analysis, symptom assessment, and predictive analytics for improved patient outcomes."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Healthcare Diagnostics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize healthcare with our AI-powered diagnostic solutions. Advanced medical imaging analysis, 
                symptom assessment, and predictive analytics for improved patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Sparkles className="mr-2 w-5 h-5" />
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI Diagnostic Capabilities</h2>
              <p className="text-xl text-gray-300">Comprehensive healthcare AI solutions</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Healthcare Applications</h2>
              <p className="text-xl text-gray-300">Transforming healthcare delivery across departments</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                    <p className="text-cyan-400 font-medium">{useCase.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare providers using our AI diagnostic solutions to improve patient outcomes and operational efficiency.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiHealthcareDiagnosticsPage;
