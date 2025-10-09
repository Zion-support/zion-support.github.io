'use client';
import React from 'react';
import { Brain, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const MachineLearningPage: React.FC = () => {
  const mlServices = [
    {
      title: 'Predictive Analytics',
      description: 'Build powerful predictive models that forecast trends, customer behavior, and business outcomes with high accuracy.',
      features: ['Time Series Analysis', 'Regression Models', 'Classification Algorithms', 'Model Validation', 'Performance Monitoring'],
      benefits: ['95% prediction accuracy', '30% cost reduction', 'Faster decision making', 'Risk mitigation']
    },
    {
      title: 'Deep Learning Solutions',
      description: 'Implement advanced neural networks for complex pattern recognition, image processing, and natural language understanding.',
      features: ['CNN for Image Processing', 'RNN for Sequence Data', 'Transformer Models', 'Transfer Learning', 'Model Optimization'],
      benefits: ['State-of-the-art accuracy', 'Scalable solutions', 'Custom model development', 'Real-time processing']
    },
    {
      title: 'Natural Language Processing',
      description: 'Transform text data into actionable insights with advanced NLP models for sentiment analysis, text classification, and language understanding.',
      features: ['Sentiment Analysis', 'Text Classification', 'Named Entity Recognition', 'Language Translation', 'Chatbot Development'],
      benefits: ['Automated text processing', 'Improved customer insights', 'Multilingual support', 'Real-time analysis']
    },
    {
      title: 'Computer Vision',
      description: 'Extract meaningful information from images and videos using cutting-edge computer vision algorithms and deep learning models.',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'OCR Processing', 'Video Analysis'],
      benefits: ['Automated visual analysis', 'Quality control automation', 'Security enhancement', 'Process optimization']
    },
    {
      title: 'Recommendation Systems',
      description: 'Build intelligent recommendation engines that personalize user experiences and drive engagement across platforms.',
      features: ['Collaborative Filtering', 'Content-Based Filtering', 'Hybrid Approaches', 'Real-time Recommendations', 'A/B Testing'],
      benefits: ['Increased user engagement', 'Higher conversion rates', 'Personalized experiences', 'Revenue growth']
    },
    {
      title: 'Anomaly Detection',
      description: 'Identify unusual patterns and outliers in your data to detect fraud, system failures, and security threats.',
      features: ['Statistical Methods', 'Machine Learning Models', 'Real-time Monitoring', 'Alert Systems', 'False Positive Reduction'],
      benefits: ['Proactive threat detection', 'Reduced false alarms', 'Cost savings', 'Enhanced security']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Machine Learning Solutions - AI Development Services | Zion Tech Group"
        description="Expert machine learning services including predictive analytics, deep learning, NLP, computer vision, and recommendation systems. Transform your data into intelligent insights."
        keywords={['machine learning', 'AI development', 'predictive analytics', 'deep learning', 'NLP', 'computer vision', 'ML models']}
        canonicalUrl="https://ziontechgroup.com/machine-learning"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Transform your data into intelligent insights with cutting-edge machine learning algorithms and AI models
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our expert data scientists and ML engineers build custom machine learning solutions that drive business growth, 
              optimize processes, and unlock the hidden value in your data.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mlServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Our ML Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Data Analysis</h3>
                <p className="text-gray-300 text-sm">Comprehensive data exploration, cleaning, and feature engineering</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Model Development</h3>
                <p className="text-gray-300 text-sm">Algorithm selection, training, and optimization for your specific use case</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Validation & Testing</h3>
                <p className="text-gray-300 text-sm">Rigorous testing, validation, and performance optimization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Deployment & Monitoring</h3>
                <p className="text-gray-300 text-sm">Production deployment with continuous monitoring and updates</p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Keras', 'XGBoost', 'Apache Spark', 'Docker', 'Kubernetes', 'AWS SageMaker'].map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="text-sm font-medium text-white">{tech}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your ML Solution?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how machine learning can transform your business and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MachineLearningPage;