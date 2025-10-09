import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Heart, Brain, Shield, Activity, Users, Target } from 'lucide-react';

const AIHealthcarePage: React.FC = () => {
  const healthcareServices = [
    {
      title: 'Medical Imaging AI',
      description: 'Advanced AI for radiology, pathology, and diagnostic imaging with 99%+ accuracy.',
      icon: '🩺',
      price: 'Starting at $3,500/month',
      features: ['X-ray analysis', 'MRI interpretation', 'CT scan analysis', 'Pathology detection', '3D imaging'],
      benefits: ['Improve diagnostic accuracy by 40%', 'Reduce reading time by 60%', 'Early disease detection', 'Reduce false positives']
    },
    {
      title: 'Drug Discovery AI',
      description: 'AI-powered molecular design and drug development optimization for pharmaceutical research.',
      icon: '💊',
      price: 'Starting at $8,000/month',
      features: ['Molecular modeling', 'Drug-target interaction', 'ADMET prediction', 'Clinical trial optimization', 'Patent analysis'],
      benefits: ['Accelerate discovery by 50%', 'Reduce R&D costs by 30%', 'Improve success rates', 'Enable precision medicine']
    },
    {
      title: 'Personalized Medicine',
      description: 'AI-driven genomic analysis and personalized treatment recommendations.',
      icon: '🧬',
      price: 'Starting at $5,000/month',
      features: ['Genomic analysis', 'Treatment optimization', 'Drug response prediction', 'Risk assessment', 'Biomarker discovery'],
      benefits: ['Improve treatment outcomes', 'Reduce side effects', 'Personalize care', 'Enable precision medicine']
    },
    {
      title: 'Clinical Decision Support',
      description: 'AI-powered clinical decision support systems for healthcare providers.',
      icon: '🏥',
      price: 'Starting at $2,500/month',
      features: ['Diagnosis assistance', 'Treatment recommendations', 'Risk stratification', 'Clinical guidelines', 'Alert systems'],
      benefits: ['Improve diagnostic accuracy', 'Reduce medical errors', 'Enhance patient safety', 'Support clinical decisions']
    },
    {
      title: 'Healthcare Analytics',
      description: 'Advanced analytics for population health, outcomes prediction, and resource optimization.',
      icon: '📊',
      price: 'Starting at $3,000/month',
      features: ['Population health analysis', 'Outcomes prediction', 'Resource optimization', 'Cost analysis', 'Quality metrics'],
      benefits: ['Improve population health', 'Optimize resources', 'Predict outcomes', 'Reduce costs']
    },
    {
      title: 'Telemedicine AI',
      description: 'AI-powered telemedicine platforms with remote monitoring and virtual consultations.',
      icon: '📱',
      price: 'Starting at $2,000/month',
      features: ['Remote monitoring', 'Virtual consultations', 'Symptom analysis', 'Appointment scheduling', 'Patient engagement'],
      benefits: ['Improve access to care', 'Reduce costs', 'Enhance patient experience', 'Enable remote care']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI healthcare solutions including medical imaging, drug discovery, personalized medicine, and clinical decision support systems." />
        <meta name="keywords" content="AI healthcare, medical AI, healthcare technology, medical imaging AI, drug discovery, personalized medicine" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Healthcare Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                Transform healthcare with cutting-edge AI technology that improves patient outcomes and saves lives
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  ✉️ Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Healthcare Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                FDA-approved AI technology that enhances patient care and improves clinical outcomes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Focused</h3>
                <p className="text-gray-600">AI solutions designed to improve patient outcomes and care quality</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
                <p className="text-gray-600">Enterprise-grade security and compliance with healthcare regulations</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Clinical Accuracy</h3>
                <p className="text-gray-600">AI models trained on millions of clinical cases for maximum accuracy</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Insights</h3>
                <p className="text-gray-600">Instant analysis and recommendations for faster clinical decisions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Healthcare AI Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI solutions for every aspect of healthcare delivery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {healthcareServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Clinical Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Contact our healthcare AI experts for a free consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-green-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIHealthcarePage;
