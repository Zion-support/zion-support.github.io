import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, CheckCircle, ArrowRight, Stethoscope, Activity, Zap } from 'lucide-react';

const AiHealthcareDiagnosticsPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze medical data to provide accurate diagnoses.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["95% accuracy rate", "Faster diagnosis", "Reduced human error"]
    },
    {
      title: "Medical Image Analysis",
      description: "Deep learning models analyze X-rays, MRIs, and CT scans for early disease detection.",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Early detection", "Pattern recognition", "Automated screening"]
    },
    {
      title: "Predictive Analytics",
      description: "Predict patient outcomes and disease progression using historical data.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Risk assessment", "Treatment optimization", "Preventive care"]
    },
    {
      title: "HIPAA Compliant",
      description: "Fully compliant with healthcare data protection regulations.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Data security", "Privacy protection", "Regulatory compliance"]
    }
  ];

  const pricing = [
    {
      name: "Basic Plan",
      price: "$2,999",
      features: ["Basic AI diagnosis", "Image analysis", "Standard support"],
      popular: false
    },
    {
      name: "Professional Plan",
      price: "$4,999",
      features: ["Advanced AI diagnosis", "Predictive analytics", "Priority support", "Custom training"],
      popular: true
    },
    {
      name: "Enterprise Plan",
      price: "Custom",
      features: ["Full AI suite", "Custom models", "24/7 support", "On-site training"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered healthcare diagnostics solutions for accurate medical diagnosis and treatment." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AI Healthcare Diagnostics
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize healthcare with our advanced AI-powered diagnostic solutions. 
            Improve accuracy, speed, and patient outcomes with cutting-edge machine learning technology.
          </p>
          <div className="flex items-center justify-center space-x-4 text-cyan-400">
            <Stethoscope className="w-6 h-6" />
            <span className="text-lg font-semibold">Trusted by 500+ Healthcare Providers</span>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-cyan-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
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

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400/50 scale-105' 
                  : 'border-white/20 hover:border-cyan-400/50'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare providers who trust our AI solutions for better patient care.
          </p>
          <button className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center mx-auto">
            Schedule a Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiHealthcareDiagnosticsPage;