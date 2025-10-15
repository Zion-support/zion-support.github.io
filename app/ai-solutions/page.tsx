import React from 'react';
import SEOHead from '../components/SEOHead';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, BarChart3 } from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models tailored to your specific business needs and data.',
      features: [
        'Predictive Analytics',
        'Classification Models',
        'Regression Analysis',
        'Clustering Solutions',
        'Recommendation Systems',
        'Anomaly Detection'
      ],
      icon: Brain
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment, and language understanding.',
      features: [
        'Text Classification',
        'Sentiment Analysis',
        'Language Translation',
        'Named Entity Recognition',
        'Text Summarization',
        'Chatbot Development'
      ],
      icon: Zap
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automated visual recognition.',
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'OCR (Optical Character Recognition)',
        'Video Analytics',
        'Medical Imaging'
      ],
      icon: Shield
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting to optimize business decisions.',
      features: [
        'Sales Forecasting',
        'Customer Behavior Prediction',
        'Risk Assessment',
        'Demand Planning',
        'Market Analysis',
        'Performance Optimization'
      ],
      icon: BarChart3
    }
  ];

  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'E-commerce & Retail',
    'Manufacturing',
    'Real Estate',
    'Education',
    'Transportation & Logistics',
    'Energy & Utilities'
  ];

  return (
    <>
      <SEOHead
        title="AI Solutions - Zion Tech Group"
        description="Cutting-edge AI solutions including machine learning, NLP, computer vision, and predictive analytics. Transform your business with artificial intelligence."
      />
      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes, gain insights, and transform your business operations.
            </p>
          </div>

          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Industries Section */}
          <div className="bg-slate-800 p-8 rounded-lg mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600 transition-colors">
                  <span className="text-gray-300">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our AI Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Analysis & Preparation</h3>
                <p className="text-gray-300">We analyze your data, clean it, and prepare it for AI model training.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Model Development & Training</h3>
                <p className="text-gray-300">We develop and train custom AI models using state-of-the-art algorithms.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Deployment & Integration</h3>
                <p className="text-gray-300">We deploy your AI solution and integrate it with your existing systems.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-cyan-600 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Implement AI?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how AI can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                Get Free AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View AI Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISolutionsPage;
