// import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your business needs",
      icon: "🧠",
      features: ["Predictive Analytics", "Recommendation Systems", "Anomaly Detection", "Classification Models"]
    },
    {
      title: "Deep Learning Systems",
      description: "Advanced neural networks for complex problem solving",
      icon: "🔬",
      features: ["Computer Vision", "Natural Language Processing", "Speech Recognition", "Generative AI"]
    },
    {
      title: "AI Automation",
      description: "Intelligent automation to streamline your processes",
      icon: "⚙️",
      features: ["Process Automation", "Document Processing", "Customer Service Bots", "Workflow Optimization"]
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance for AI implementation",
      icon: "💡",
      features: ["AI Strategy", "Technology Assessment", "Implementation Planning", "Training & Support"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, deep learning, and AI automation solutions." />
      </Helmet>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations, 
              improve decision-making, and drive innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Implement AI?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how AI can transform your business operations.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;