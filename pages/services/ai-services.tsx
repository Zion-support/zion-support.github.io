import React from 'react';
import Layout from '../../components/Layout';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />, title: 'Advanced AI',
      description: 'Cutting-edge machine learning and AI technologies to solve complex business problems.'
    }, {
      icon: <Zap className="w-8 h-8" />,
      title: 'Rapid Implementation', description: 'Quick deployment of AI solutions with proven methodologies and best practices.'
    }, {
      icon: <Users className="w-8 h-8" />, title: 'Expert Team',
      description: 'AI specialists with deep expertise in machine learning and data science.'
    }, {
      icon: <Shield className="w-8 h-8" />,
      title: 'Scalable Solutions', description: 'AI solutions that grow with your business and adapt to changing needs.'
    }
  ];

  return (
    <Layout 
      title="AI Services - Zion Tech Group" 
      description="Transform your business with cutting-edge AI solutions. From machine learning to natural language processing, we help you leverage artificial intelligence for growth."
    >
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to natural language processing, we help you leverage AI for competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get AI Consultation
              </a>
              <a 
                href="/pricing" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    <a 
                      href="/contact" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our AI Development Process</h2>
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Implement AI?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how AI can transform your business operations and drive growth. Our expert team is ready to help you get started.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your AI Journey
            </a>
          </div>
        </div>
      </section>

      {/* AI Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest AI and machine learning technologies to deliver cutting-edge solutions.
            </p>
          </div>
          <div className="grid md: grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Machine Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• TensorFlow & PyTorch</li>
                <li>• Scikit-learn</li>
                <li>• Custom Neural Networks</li>
                <li>• Deep Learning Models</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Language Processing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• OpenAI GPT Models</li>
                <li>• BERT & Transformers</li>
                <li>• Text Classification</li>
                <li>• Sentiment Analysis</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Vision</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Image Recognition</li>
                <li>• Object Detection</li>
                <li>• Facial Recognition</li>
                <li>• Video Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Service Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the AI service level that best fits your business needs and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$5, 000<span className="text-lg text-gray-500">+</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Basic AI model development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Standard data preprocessing
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Basic API integration
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Email support
                </li>
              </ul>
              <Link href="/contact">
                <span className="w-full bg-gray-600 hover: bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer inline-block text-center">
                  Get Quote
                </span>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$25,000<span className="text-lg text-gray-500">+</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Advanced AI model development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Comprehensive data engineering
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Full API development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Model optimization
                </li>
              </ul>
              <Link href="/contact">
                <span className="w-full bg-blue-600 hover: bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer inline-block text-center">
                  Get Quote
                </span>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$100, 000<span className="text-lg text-gray-500">+</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Custom AI platform development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Advanced data infrastructure
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Scalable architecture
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Ongoing maintenance
                </li>
              </ul>
              <Link href="/contact">
                <span className="w-full bg-gray-600 hover: bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer inline-block text-center">
                  Contact Sales
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Let&apos;s discuss how our AI services can help automate your processes, ''
            gain insights, and create competitive advantages for your business.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <Link href="tel:+13024640950">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                Call +1 302 464 0950
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )};

export default AIServicesPage;