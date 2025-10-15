import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, CheckCircle, ArrowRight, Clock, Activity, Stethoscope, BarChart3 } from 'lucide-react';

const AiHealthcareDiagnosticsPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze medical data for accurate diagnoses.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alerts for critical conditions.",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Medical Imaging Analysis",
      description: "AI-enhanced analysis of X-rays, MRIs, and CT scans for better accuracy.",
      icon: <Stethoscope className="w-8 h-8" />
    },
    {
      title: "Predictive Analytics",
      description: "Predict potential health issues before they become critical.",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered healthcare diagnostics solutions for accurate medical diagnosis and patient care." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Healthcare Diagnostics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform healthcare with our advanced AI-powered diagnostic solutions. Improve accuracy, reduce diagnosis time, and enhance patient outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 text-center">
                <div className="text-purple-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our AI Healthcare Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">99.7% Accuracy</h3>
                <p className="text-gray-300">Industry-leading diagnostic accuracy rates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">50% Faster</h3>
                <p className="text-gray-300">Reduce diagnosis time by half</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">HIPAA Compliant</h3>
                <p className="text-gray-300">Full compliance with healthcare regulations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiHealthcareDiagnosticsPage;