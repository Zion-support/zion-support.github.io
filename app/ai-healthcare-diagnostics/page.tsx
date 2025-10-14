import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Zap, Target, Users, CheckCircle, Brain } from "lucide-react";
import FuturisticBackground from "../components/FuturisticBackground";

const AIHealthcareDiagnosticsPage = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze medical images and data to provide accurate diagnostic insights."
    },
    {
      icon: <Heart className="w-12 h-12 text-cyan-400" />,
      title: "Cardiovascular Analysis",
      description: "Comprehensive heart health monitoring and early detection of cardiovascular conditions using AI."
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "Data Security & Privacy",
      description: "HIPAA-compliant platform ensuring patient data security with enterprise-grade encryption."
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: "Real-time Processing",
      description: "Instant analysis and results delivery for critical diagnostic decisions and patient care."
    },
    {
      icon: <Target className="w-12 h-12 text-cyan-400" />,
      title: "Precision Medicine",
      description: "Personalized treatment recommendations based on individual patient data and genetic profiles."
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-400" />,
      title: "Clinical Integration",
      description: "Seamless integration with existing healthcare systems and electronic health records."
    }
  ];

  const capabilities = [
    "Medical Image Analysis",
    "Symptom Assessment",
    "Risk Stratification",
    "Treatment Recommendations",
    "Drug Interaction Analysis",
    "Clinical Decision Support",
    "Population Health Analytics",
    "Telemedicine Integration"
  ];

  const stats = [
    { value: "95%", label: "Diagnostic Accuracy" },
    { value: "60%", label: "Faster Diagnosis" },
    { value: "1000+", label: "Medical Conditions" },
    { value: "24/7", label: "Availability" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group | Advanced Medical AI Solutions</title>
        <meta name="description" content="Revolutionary AI-powered healthcare diagnostics platform. Accurate medical image analysis, symptom assessment, and clinical decision support for better patient outcomes." />
        <meta name="keywords" content="AI healthcare, medical diagnostics, healthcare AI, medical imaging, clinical decision support, telemedicine, precision medicine" />
        <meta property="og:title" content="AI Healthcare Diagnostics - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered healthcare diagnostics for better patient outcomes." />
        <meta property="og:type" content="website" />
      </Helmet>

      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare Diagnostics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize healthcare with our AI-powered diagnostic platform. 
            Improve accuracy, speed up diagnosis, and enhance patient outcomes with cutting-edge medical AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to enhance diagnostic accuracy and improve patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Diagnostic Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform covers a wide range of medical specialties and diagnostic areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-white font-medium">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Healthcare with AI
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading healthcare providers who are already using our AI diagnostic platform to improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Healthcare AI Journey
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareDiagnosticsPage;