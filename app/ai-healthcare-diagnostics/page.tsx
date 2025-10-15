import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap, BarChart3, Users, CheckCircle } from 'lucide-react';

const AiHealthcareDiagnosticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnosis',
      description: 'Advanced machine learning algorithms analyze medical data to provide accurate diagnoses.',
      benefits: ['95% accuracy rate', 'Real-time analysis', 'Multi-modal data processing']
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Fully compliant with healthcare data protection regulations and security standards.',
      benefits: ['End-to-end encryption', 'Audit trails', 'Secure data handling']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant analysis and diagnosis results for critical healthcare decisions.',
      benefits: ['Sub-second response', 'Continuous monitoring', 'Alert system']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Predict potential health issues before they become critical problems.',
      benefits: ['Risk assessment', 'Early warning system', 'Trend analysis']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Revolutionary AI-powered healthcare diagnostics solutions for accurate medical diagnosis and patient care."
        />
        <meta 
          name="keywords" 
          content="AI healthcare, medical diagnosis, healthcare AI, medical technology, diagnostic tools, healthcare solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Healthcare Diagnostics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionize healthcare with our advanced AI-powered diagnostic solutions. 
              Improve accuracy, speed, and patient outcomes with cutting-edge technology.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare providers who trust our AI diagnostic solutions 
              to improve patient care and outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiHealthcareDiagnosticsPage;