import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Brain, Shield, Zap, Target, ArrowRight, Star } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';

const AIHealthcareDiagnosticsPage: React.FC = () => {
  const features = [
    {
      title: "Medical Image Analysis",
      description: "Advanced AI algorithms analyze medical images with precision, detecting anomalies and providing diagnostic insights.",
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Predictive Health Analytics",
      description: "Predict potential health issues before they become critical using machine learning and patient data analysis.",
      icon: <Activity className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Clinical Decision Support",
      description: "AI-powered tools assist healthcare professionals in making informed diagnostic and treatment decisions.",
      icon: <Target className="w-12 h-12 text-yellow-400" />
    },
    {
      title: "Patient Risk Assessment",
      description: "Comprehensive risk evaluation using multiple data sources to identify high-risk patients early.",
      icon: <Shield className="w-12 h-12 text-green-400" />
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by up to 40%",
    "Reduce diagnostic time by 60%",
    "Early detection of critical conditions",
    "Personalized treatment recommendations",
    "Reduced healthcare costs",
    "Enhanced patient outcomes"
  ];

  const stats = [
    { label: "Diagnoses Processed", value: "1 M+", icon: <Brain className="w-8 h-8 text-cyan-400" /> },
    { label: "Accuracy Rate", value: "98.5%", icon: <Target className="w-8 h-8 text-purple-400" /> },
    { label: "Time Saved", value: "70%", icon: <Zap className="w-8 h-8 text-yellow-400" /> },
    { label: "Lives Impacted", value: "50 K+", icon: <Heart className="w-8 h-8 text-green-400" /> }
  ];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Healthcare Diagnostics - Zion Tech Group | Advanced Medical AI Solutions"
        description="Revolutionize healthcare with our AI-powered diagnostic solutions. Advanced medical image analysis, predictive health analytics, and clinical decision support systems."
        keywords="AI healthcare, medical diagnostics, healthcare AI, medical image analysis, clinical decision support, healthcare technology"
        canonical="https://ziontechgroup.com/ai-healthcare-diagnostics"
      />
      
      <FuturisticBackground />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7 xl mx-auto text-center">
          <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6">
            AI Healthcare Diagnostics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Revolutionize healthcare with our advanced AI-powered diagnostic solutions. 
            Improve accuracy, speed, and patient outcomes with intelligent medical technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3 xl md:text-4 xl font-bold text-white mb-2">
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
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Advanced Healthcare AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Cutting-edge AI technology designed specifically for healthcare professionals and medical institutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Transform Healthcare Outcomes
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Our AI solutions deliver measurable improvements in healthcare delivery and patient care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-300 text-lg">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4 xl mx-auto text-center">
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6">
            Ready to Revolutionize Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading healthcare institutions using our AI diagnostic solutions. 
            Get a free consultation and discover how AI can transform your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Healthcare AI Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
