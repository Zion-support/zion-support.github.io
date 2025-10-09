import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageSquare, Brain, FileText, Globe, CheckCircle, Star } from 'lucide-react';

const AINLPPage: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Text Analysis',
      description: 'Advanced text processing and sentiment analysis',
      benefits: ['Sentiment analysis', 'Entity recognition', 'Language detection']
    },
    {
      icon: Brain,
      title: 'Natural Language Understanding',
      description: 'Deep understanding of human language patterns',
      benefits: ['Intent recognition', 'Context analysis', 'Semantic parsing']
    },
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Intelligent document analysis and extraction',
      benefits: ['Text extraction', 'Key phrase detection', 'Document classification']
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Process text in multiple languages seamlessly',
      benefits: ['100+ languages', 'Translation', 'Cultural context']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              AI Natural Language Processing
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Harness the power of AI to understand and process human language
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Try Demo
              </Link>
              <Link
                to="/consultation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced NLP Features
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge natural language processing capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Process Language with AI?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Transform your text data into actionable insights with our advanced NLP solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start Processing
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AINLPPage;