import React from 'react';
import { Link } from 'react-router-dom';


export default function AIServicesPage() {
  const aiServices = [
    {
      title: 'Machine Learning Model Development',
      description: 'Custom ML models tailored to your business needs with advanced algorithms and real-time processing',
      icon: '🧠',
      features: [
        'Custom Algorithm Development',
        'Real-time Model Training',
        'Predictive Analytics Implementation',
        'Model Performance Optimization',
        'A/B Testing Framework',
        'Continuous Learning Systems'
      ],
      pricing: '$5,000 - $50,000/project',
      category: 'Machine Learning',
      marketPrice: '$3,000 - $30,000/project',
      benefits: [
        '40% improvement in decision accuracy',
        '60% reduction in manual analysis time',
        'Real-time insights and predictions',
        'Scalable model architecture'
      ],
      href: '/services/machine-learning-development',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=Machine Learning Development Inquiry'
    },
    {
      title: 'Natural Language Processing Suite',
      description: 'Advanced NLP solutions for text analysis, sentiment detection, and automated content processing',
      icon: '💬',
      features: [
        'Sentiment Analysis & Classification',
        'Text Summarization & Extraction',
        'Language Translation Services',
        'Chatbot & Virtual Assistant Development',
        'Document Processing Automation',
        'Voice-to-Text Integration'
      ],
      pricing: '$3,000 - $25,000/project',
      category: 'Natural Language Processing',
      marketPrice: '$2,000 - $20,000/project',
      benefits: [
        '90% accuracy in sentiment analysis',
        '80% reduction in manual text processing',
        'Multi-language support',
        'Real-time processing capabilities'
      ],
      href: '/services/nlp-suite',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=NLP Suite Inquiry'
    },
    {
      title: 'Computer Vision & Image Recognition',
      description: 'Advanced computer vision solutions for object detection, facial recognition, and image analysis',
      icon: '👁️',
      features: [
        'Object Detection & Classification',
        'Facial Recognition Systems',
        'Image Quality Enhancement',
        'Automated Visual Inspection',
        'Real-time Video Analysis',
        'Custom Vision Model Training'
      ],
      pricing: '$4,000 - $35,000/project',
      category: 'Computer Vision',
      marketPrice: '$2,500 - $25,000/project',
      benefits: [
        '95% accuracy in object detection',
        'Real-time processing capabilities',
        'Custom model training',
        'Integration with existing systems'
      ],
      href: '/services/computer-vision',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=Computer Vision Inquiry'
    },
    {
      title: 'Autonomous Systems Development',
      description: 'Self-managing AI systems that operate independently with minimal human intervention',
      icon: '🤖',
      features: [
        'Autonomous Decision Making',
        'Self-Healing Systems',
        'Predictive Maintenance',
        'Resource Optimization',
        'Adaptive Learning Algorithms',
        'Multi-Agent Coordination'
      ],
      pricing: '$10,000 - $100,000/project',
      category: 'Autonomous Systems',
      marketPrice: '$5,000 - $75,000/project',
      benefits: [
        '99% uptime through self-healing',
        '50% reduction in operational costs',
        'Predictive failure prevention',
        'Continuous optimization'
      ],
      href: '/services/autonomous-systems',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=Autonomous Systems Inquiry'
    },
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Intelligent analytics platform that transforms raw data into actionable business insights',
      icon: '📊',
      features: [
        'Advanced Data Visualization',
        'Predictive Business Analytics',
        'Automated Report Generation',
        'Real-time Dashboard Creation',
        'Anomaly Detection',
        'Trend Analysis & Forecasting'
      ],
      pricing: '$2,500 - $20,000/project',
      category: 'Business Intelligence',
      marketPrice: '$1,500 - $15,000/project',
      benefits: [
        '300% faster insight generation',
        'Real-time business monitoring',
        'Automated decision support',
        'Customizable dashboards'
      ],
      href: '/services/ai-business-intelligence',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=AI Business Intelligence Inquiry'
    },
    {
      title: 'AI Consulting & Strategy',
      description: 'Strategic AI implementation consulting to maximize ROI and business transformation',
      icon: '🎯',
      features: [
        'AI Strategy Development',
        'Technology Roadmap Planning',
        'ROI Analysis & Optimization',
        'Change Management Support',
        'AI Ethics & Compliance',
        'Training & Knowledge Transfer'
      ],
      pricing: '$200 - $500/hour',
      category: 'AI Consulting',
      marketPrice: '$150 - $400/hour',
      benefits: [
        'Clear AI implementation roadmap',
        'Maximized ROI on AI investments',
        'Reduced implementation risks',
        'Expert guidance throughout process'
      ],
      href: '/services/ai-consulting',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=AI Consulting Inquiry'
    }
  ];

  const aiTechnologies = [
    { name: 'TensorFlow', description: 'Open-source ML framework', icon: '🔧' },
    { name: 'PyTorch', description: 'Deep learning research platform', icon: '⚡' },
    { name: 'OpenAI GPT', description: 'Advanced language models', icon: '💡' },
    { name: 'Computer Vision APIs', description: 'Image and video analysis', icon: '👁️' },
    { name: 'Natural Language APIs', description: 'Text processing and understanding', icon: '📝' },
    { name: 'Reinforcement Learning', description: 'Autonomous decision making', icon: '🎮' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Services & Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to autonomous systems, we deliver AI that drives real results.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-purple-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Ready to Harness AI Power?</h3>
              <p className="text-purple-100">Let's discuss your AI transformation strategy</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-center">
              <a href="tel:+13024640950" className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                📞 +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors">
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* AI Technologies We Use */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            AI Technologies We Master
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aiTechnologies.map((tech, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-blue-500 mr-2">📈</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">Our Pricing:</span>
                    <span className="font-bold text-green-600">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Market Average:</span>
                    <span className="text-sm text-gray-600">{service.marketPrice}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      href={service.href}
                      className="flex-1 bg-purple-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Learn More
                    </Link>
                    <a 
                      href={service.contactLink}
                      className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Success Stories */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">AI Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <h3 className="text-xl font-semibold mb-2">Accuracy Rate</h3>
              <p className="text-gray-300">Average accuracy across all our AI models and implementations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2M+</div>
              <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
              <p className="text-gray-300">Total cost savings generated for our clients through AI automation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">150+</div>
              <h3 className="text-xl font-semibold mb-2">Projects Delivered</h3>
              <p className="text-gray-300">Successful AI implementations across various industries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our AI experts are ready to help you implement cutting-edge artificial intelligence solutions that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=AI Services Consultation"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Schedule AI Consultation
            </a>
            <a 
              href="tel:+13024640950"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300">
                Leading AI solutions provider specializing in machine learning, NLP, computer vision, and autonomous systems.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">AI Services</h4>
              <div className="space-y-2">
                <Link href="/services/machine-learning-development" className="block text-gray-300 hover:text-purple-400">Machine Learning</Link>
                <Link href="/services/nlp-suite" className="block text-gray-300 hover:text-purple-400">Natural Language Processing</Link>
                <Link href="/services/computer-vision" className="block text-gray-300 hover:text-purple-400">Computer Vision</Link>
                <Link href="/services/autonomous-systems" className="block text-gray-300 hover:text-purple-400">Autonomous Systems</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}