import React from 'react';
import { Heart, Helmet, Users, Target, Zap, CheckCircle, Shield, Brain, Star } from 'lucide-react';

const AIHealthcarePage: React.FC = () => {
  const aiHealthcareServices = [
    {
      title: 'AI Medical Image Analysis',
      description: 'Advanced AI-powered medical imaging analysis for radiology, pathology, and diagnostic imaging with 99.5% accuracy.',
      icon: '🩺',
      price: '$2,999/month',
      features: ['X-ray analysis', 'MRI/CT scan interpretation', 'Pathology image analysis', 'Tumor detection', 'Diagnostic reporting'],
      benefits: ['Improve diagnostic accuracy by 40%', 'Reduce reading time by 60%', 'Early disease detection'],
      marketPrice: '$5,000-15,000/month'
    },
    {
      title: 'AI Drug Discovery Platform',
      description: 'Revolutionary AI-driven drug discovery and development platform accelerating pharmaceutical research.',
      icon: '💊',
      price: '$4,999/month',
      features: ['Molecular modeling', 'Drug-target interaction', 'Clinical trial optimization', 'Side effect prediction', 'Patent analysis'],
      benefits: ['Reduce drug development time by 50%', 'Lower R&D costs by 30%', 'Higher success rates'],
      marketPrice: '$10,000-25,000/month'
    },
    {
      title: 'AI Patient Monitoring System',
      description: 'Real-time AI-powered patient monitoring with predictive analytics for early intervention.',
      icon: '📊',
      price: '$1,999/month',
      features: ['Vital signs monitoring', 'Predictive alerts', 'Risk stratification', 'Remote monitoring', 'Integration with EHR'],
      benefits: ['Reduce readmission rates by 35%', 'Improve patient outcomes', '24/7 monitoring'],
      marketPrice: '$3,000-8,000/month'
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: 'Advanced AI Algorithms',
      description: 'State-of-the-art machine learning models trained on millions of medical records and images.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'HIPAA Compliant',
      description: 'Fully compliant with healthcare regulations and data protection standards.'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: 'Precision Medicine',
      description: 'Personalized treatment recommendations based on individual patient data and genetics.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Real-time Processing',
      description: 'Instant analysis and results for critical healthcare decisions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Healthcare Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform healthcare with cutting-edge AI technology. Improve patient outcomes, 
              accelerate drug discovery, and enhance medical diagnostics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for healthcare organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiHealthcareServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with healthcare professionals in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Healthcare with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading healthcare organizations using our AI solutions to improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcarePage;