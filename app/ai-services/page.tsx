import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Consulting & Strategy',
      description: 'Comprehensive AI strategy development, implementation planning, and digital transformation consulting for enterprise organizations.',
      icon: '🧠',
      price: '$2,500/month',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Roadmap',
        'Change Management',
        'ROI Analysis',
        'Executive Training'
      ],
      benefits: [
        'Accelerate AI adoption by 300%',
        'Reduce implementation risks by 60%',
        'Achieve 400% ROI within 12 months',
        'Future-proof your technology stack'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Consulting',
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Cloud AI', 'Edge Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models for predictive analytics, pattern recognition, and intelligent decision-making systems.',
      icon: '🤖',
      price: '$1,500/month',
      features: [
        'Custom ML Model Development',
        'Data Preprocessing & Cleaning',
        'Model Training & Optimization',
        'Real-time Inference',
        'Model Monitoring & Maintenance',
        'A/B Testing Framework'
      ],
      benefits: [
        'Improve accuracy by 40-80%',
        'Reduce manual work by 70%',
        'Enable real-time predictions',
        'Scale with your business growth'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
      icon: '💬',
      price: '$1,200/month',
      features: [
        'Text Classification & Analysis',
        'Sentiment Analysis',
        'Language Translation',
        'Named Entity Recognition',
        'Text Summarization',
        'Chatbot Development'
      ],
      benefits: [
        'Process 10,000+ documents/hour',
        'Improve customer satisfaction by 50%',
        'Reduce response time by 80%',
        'Enable multilingual operations'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'NLP',
      technologies: ['OpenAI GPT', 'BERT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis solutions for object detection, facial recognition, quality control, and automated inspection.',
      icon: '👁️',
      price: '$1,800/month',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition Systems',
        'Image Classification',
        'Video Analysis',
        'Quality Control Automation',
        'Real-time Processing'
      ],
      benefits: [
        'Reduce inspection time by 90%',
        'Improve accuracy to 99.5%',
        'Enable 24/7 monitoring',
        'Reduce human error by 95%'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow', 'PyTorch', 'CUDA'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Automation Suite',
      description: 'Intelligent process automation with RPA, workflow optimization, and decision-making capabilities.',
      icon: '⚙️',
      price: '$1,400/month',
      features: [
        'Process Discovery & Mapping',
        'RPA Implementation',
        'Workflow Optimization',
        'Decision Automation',
        'Exception Handling',
        'Performance Monitoring'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 70%',
        'Improve accuracy to 99.9%',
        'Free up staff for strategic work'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'APIs', 'Workflow Engines'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent conversational AI for customer service, sales support, and internal operations.',
      icon: '🤖',
      price: '$800/month',
      features: [
        'Multi-channel Deployment',
        'Intent Recognition',
        'Context Management',
        'Human Handoff',
        'Analytics & Reporting',
        'Custom Integrations'
      ],
      benefits: [
        'Handle 80% of customer queries',
        'Reduce response time to seconds',
        'Available 24/7/365',
        'Improve customer satisfaction'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Conversational AI',
      technologies: ['Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'OpenAI GPT', 'Webhooks', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  // const categories = [...new Set(aiServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and automation. Enterprise-grade AI solutions starting at $800/month." />
        <meta name="keywords" content="ai services, machine learning, nlp, computer vision, ai consulting, automation, artificial intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions designed to transform your business operations and drive innovation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
              <div className="text-gray-300">AI Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$800</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your AI Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI services today and transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;