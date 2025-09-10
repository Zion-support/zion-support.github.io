import React from 'react';
import { Brain, Zap, Shield, Cloud, Database, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const AISolutions: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced machine learning algorithms and predictive analytics.',
      features: ['Real-time Data Processing', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reporting'],
    },
    {
      icon: <Zap className="h-12 w-12 text-purple-600" />,
      title: 'Intelligent Automation',
      description: 'Streamline your business processes with AI-driven automation that learns and adapts to your workflow patterns.',
      features: ['Process Automation', 'Smart Workflows', 'Task Optimization', 'Error Reduction'],
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: 'AI Security Solutions',
      description: 'Protect your digital assets with AI-powered threat detection, fraud prevention, and security monitoring.',
      features: ['Threat Detection', 'Fraud Prevention', 'Security Monitoring', 'Compliance Management'],
    },
    {
      icon: <Cloud className="h-12 w-12 text-orange-600" />,
      title: 'Cloud AI Services',
      description: 'Leverage scalable cloud-based AI services for natural language processing, computer vision, and more.',
      features: ['NLP Processing', 'Computer Vision', 'Speech Recognition', 'Scalable Infrastructure'],
    },
    {
      icon: <Database className="h-12 w-12 text-red-600" />,
      title: 'Data Intelligence',
      description: 'Unlock the power of your data with AI-driven insights, pattern recognition, and intelligent data management.',
      features: ['Pattern Recognition', 'Data Mining', 'Intelligent Queries', 'Data Quality'],
    },
    {
      icon: <Globe className="h-12 w-12 text-indigo-600" />,
      title: 'Global AI Deployment',
      description: 'Deploy AI solutions across multiple regions with our global infrastructure and compliance expertise.',
      features: ['Multi-Region Deployment', 'Compliance Management', 'Local Regulations', 'Global Support'],
    },
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      solution: 'AI-powered diagnostic assistance and patient monitoring',
      impact: '40% faster diagnosis, 25% reduction in medical errors',
    },
    {
      industry: 'Finance',
      solution: 'Fraud detection and risk assessment automation',
      impact: '90% fraud detection accuracy, 60% faster risk assessment',
    },
    {
      industry: 'Manufacturing',
      solution: 'Predictive maintenance and quality control',
      impact: '30% reduction in downtime, 50% improvement in quality',
    },
    {
      industry: 'Retail',
      solution: 'Personalized recommendations and inventory optimization',
      impact: '35% increase in sales, 20% reduction in inventory costs',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">AI Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations,
            enhance decision-making, and drive unprecedented growth.
          </p>
        </div>
      </div>

      {/* AI Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
          <p className="text-xl text-gray-600">Comprehensive AI solutions tailored to your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-600">See how AI is transforming industries worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.industry}</h3>
                <p className="text-gray-700 mb-4">{useCase.solution}</p>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                  {useCase.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Technology Stack</h2>
            <p className="text-xl text-gray-600">Built on cutting-edge AI frameworks and technologies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'TensorFlow', 'PyTorch', 'OpenAI GPT', 'Hugging Face',
              'Scikit-learn', 'Pandas', 'NumPy', 'Apache Spark',
              'Kubernetes', 'Docker', 'AWS SageMaker', 'Google Cloud AI',
              'Azure ML', 'NVIDIA CUDA', 'Apache Kafka', 'Redis',
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-lg font-semibold text-gray-900">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center">
              <span>Start Your AI Journey</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutions;
