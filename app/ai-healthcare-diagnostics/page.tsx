import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Brain, Activity, Users, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import Footer from '../components/Footer';

const AIHealthcareDiagnosticsPage: React.FC = () => {
  const features = [
    {
      title: "Medical Image Analysis",
      description: "Advanced AI algorithms analyze medical images with precision and speed.",
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Predictive Diagnostics",
      description: "Early detection and prediction of diseases using machine learning models.",
      icon: <Activity className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Patient Monitoring",
      description: "Continuous monitoring and analysis of patient vital signs and symptoms.",
      icon: <Heart className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Clinical Decision Support",
      description: "AI-powered tools to assist healthcare professionals in making informed decisions.",
      icon: <Shield className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Drug Discovery",
      description: "Accelerate drug discovery and development with AI-driven research tools.",
      icon: <Zap className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Telemedicine Integration",
      description: "Seamless integration with telemedicine platforms for remote healthcare delivery.",
      icon: <Users className="w-12 h-12 text-cyan-400" />
    }
  ];

  const benefits = [
    "Improved diagnostic accuracy",
    "Faster diagnosis times",
    "Reduced healthcare costs",
    "Enhanced patient outcomes",
    "24/7 monitoring capabilities",
    "Scalable healthcare solutions"
  ];

  const stats = [
    { value: "98%", label: "Diagnostic Accuracy" },
    { value: "60%", label: "Faster Diagnosis" },
    { value: "40%", label: "Cost Reduction" },
    { value: "1000+", label: "Lives Improved" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Healthcare Diagnostics - Zion Tech Group | Advanced Medical AI Solutions"
        description="Revolutionize healthcare with our AI-powered diagnostic solutions. Advanced medical imaging, predictive analytics, and clinical decision support for better patient outcomes."
        keywords="AI healthcare, medical diagnostics, healthcare AI, medical imaging, clinical decision support, telemedicine, healthcare technology"
        canonical="https://ziontechgroup.com/ai-healthcare-diagnostics"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare Diagnostics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize healthcare with our advanced AI-powered diagnostic solutions. 
            Improve patient outcomes with precision medicine and intelligent healthcare technology.
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
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology designed to enhance medical diagnostics and improve patient care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
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
  );
};

export default AIHealthcareDiagnosticsPage;
