'use client';
import React from 'react';
import { Brain, BarChart, Target, Zap, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const MachineLearningPage: React.FC = () => {
  const mlServices = [
    {
      title: 'Predictive Analytics',
      description: 'Build models that forecast future trends and behaviors',
      features: ['Sales Forecasting', 'Customer Behavior Prediction', 'Risk Assessment', 'Demand Planning'],
      icon: '📊'
    },
    {
      title: 'Natural Language Processing',
      description: 'Extract insights from text data and build conversational AI',
      features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Chatbot Development'],
      icon: '💬'
    },
    {
      title: 'Computer Vision',
      description: 'Enable machines to interpret and understand visual information',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Medical Imaging'],
      icon: '👁️'
    },
    {
      title: 'Recommendation Systems',
      description: 'Create personalized experiences for your customers',
      features: ['Product Recommendations', 'Content Personalization', 'Collaborative Filtering', 'A/B Testing'],
      icon: '🎯'
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Advanced machine learning solutions including predictive analytics, NLP, computer vision, and recommendation systems. Transform your data into actionable insights."
        keywords={['machine learning', 'predictive analytics', 'NLP', 'computer vision', 'AI models', 'data science']}
        canonicalUrl="https://ziontechgroup.com/machine-learning"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your data into intelligent insights with our advanced machine learning solutions.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mlServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your machine learning needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MachineLearningPage;