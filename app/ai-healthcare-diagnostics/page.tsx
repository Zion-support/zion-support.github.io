"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Brain, Heart, Eye, Stethoscope, Shield, Zap } from "lucide-react";

const AiHealthcareDiagnosticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms for accurate medical image analysis and diagnostic assistance."
    },
    {
      icon: Heart,
      title: "Cardiovascular Monitoring",
      description: "Real-time cardiovascular health monitoring with predictive analytics and early warning systems."
    },
    {
      icon: Eye,
      title: "Medical Imaging",
      description: "High-precision medical imaging analysis for radiology, pathology, and diagnostic imaging."
    },
    {
      icon: Stethoscope,
      title: "Clinical Decision Support",
      description: "Intelligent clinical decision support system with evidence-based recommendations."
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Full HIPAA compliance with secure data handling and patient privacy protection."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Real-time diagnostic processing with instant results and automated reporting."
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="AI-powered healthcare diagnostics with medical imaging analysis, clinical decision support, and HIPAA compliance." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Diagnostics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize healthcare with AI-powered diagnostics. 
              Advanced medical imaging analysis, clinical decision support, and predictive healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Features
              </h2>
              <p className="text-lg text-gray-300">
                Cutting-edge AI healthcare solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Implement our AI healthcare diagnostics solution to improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AiHealthcareDiagnosticsPage;