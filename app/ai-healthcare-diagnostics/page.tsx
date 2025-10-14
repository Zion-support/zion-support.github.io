import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Brain, Shield, Clock, CheckCircle, Users, BarChart3 } from "lucide-react";

const AIHealthcareDiagnosticsPage = () => {
  const features = [
    {
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze medical data to provide accurate diagnostic insights.",
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Medical Imaging Analysis",
      description: "Process X-rays, MRIs, and CT scans with AI to detect anomalies and assist radiologists.",
      icon: <Stethoscope className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Predictive Analytics",
      description: "Predict potential health issues and recommend preventive measures based on patient data.",
      icon: <BarChart3 className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Secure & Compliant",
      description: "HIPAA-compliant solutions ensuring patient data privacy and security at all times.",
      icon: <Shield className="w-12 h-12 text-cyan-400" />
    }
  ];

  const stats = [
    { icon: <CheckCircle className="w-8 h-8 text-cyan-400" />, value: "95%", label: "Diagnostic Accuracy" },
    { icon: <Clock className="w-8 h-8 text-cyan-400" />, value: "50%", label: "Faster Diagnosis" },
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: "10K+", label: "Patients Served" },
    { icon: <Shield className="w-8 h-8 text-cyan-400" />, value: "100%", label: "HIPAA Compliant" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered healthcare diagnostics solutions for accurate and faster medical diagnosis." />
        <meta name="keywords" content="AI healthcare, medical diagnosis, healthcare AI, medical imaging, diagnostic AI, healthcare technology" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare Diagnostics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize healthcare with our AI-powered diagnostic solutions. 
            Improve accuracy, speed, and patient outcomes with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Healthcare Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to enhance medical diagnosis and patient care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the healthcare revolution with our AI-powered diagnostic solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your AI Healthcare Journey
            </Link>
            <Link to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareDiagnosticsPage;