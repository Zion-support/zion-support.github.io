import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CpuChipIcon, 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon,
  EyeIcon,
  CogIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: ChartBarIcon,
      title: 'Machine Learning Solutions',
      description: 'Build and deploy custom machine learning models to solve your specific business challenges.',
      features: ['Predictive Analytics', 'Recommendation Systems', 'Anomaly Detection', 'Model Optimization']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Natural Language Processing',
      description: 'Implement advanced NLP solutions for text analysis, chatbots, and language understanding.',
      features: ['Chatbot Development', 'Sentiment Analysis', 'Text Classification', 'Language Translation']
    },
    {
      icon: EyeIcon,
      title: 'Computer Vision',
      description: 'Leverage computer vision technology for image recognition, object detection, and visual analytics.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Visual Search']
    },
    {
      icon: CogIcon,
      title: 'AI Automation',
      description: 'Automate business processes using AI to improve efficiency and reduce manual work.',
      features: ['Process Automation', 'Document Processing', 'Data Extraction', 'Workflow Optimization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and AI automation solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions designed to drive innovation and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI services can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                Get Started Today
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2">
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;