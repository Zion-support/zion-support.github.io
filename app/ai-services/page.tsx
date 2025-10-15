import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and custom AI solutions. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, AI consulting, AI development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">AI Services</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Transform your business with cutting-edge artificial intelligence solutions powered by advanced machine learning and deep learning technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Call: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {servicesData.aiServices.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{service.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-blue-600 font-semibold">{service.marketPrice}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="text-blue-500 mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to={`/${service.id}`} 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Learn More
                  </Link>
                  <a 
                    href={`tel:${service.contactInfo.phone}`}
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* AI Technologies Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Technologies We Use</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage the latest AI technologies and frameworks to deliver cutting-edge solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'TensorFlow', icon: '🧠' },
                { name: 'PyTorch', icon: '🔥' },
                { name: 'OpenAI GPT', icon: '🤖' },
                { name: 'Hugging Face', icon: '🤗' },
                { name: 'Scikit-learn', icon: '📊' },
                { name: 'Keras', icon: '⚡' },
                { name: 'Pandas', icon: '🐼' },
                { name: 'NumPy', icon: '🔢' },
                { name: 'OpenCV', icon: '👁️' },
                { name: 'NLTK', icon: '📝' },
                { name: 'SpaCy', icon: '💬' },
                { name: 'Transformers', icon: '🔄' }
              ].map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-semibold text-gray-700">{tech.name}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Use Cases</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how AI can transform your business across various industries and applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Customer Service Automation',
                  description: 'AI-powered chatbots and virtual assistants that provide 24/7 customer support',
                  icon: '🎧',
                  benefits: ['24/7 availability', 'Instant responses', 'Reduced costs', 'Improved satisfaction']
                },
                {
                  title: 'Predictive Analytics',
                  description: 'Forecast future trends and behaviors using machine learning algorithms',
                  icon: '📈',
                  benefits: ['Better forecasting', 'Risk reduction', 'Optimized decisions', 'Competitive advantage']
                },
                {
                  title: 'Content Generation',
                  description: 'Create high-quality content automatically using advanced language models',
                  icon: '✍️',
                  benefits: ['Faster content creation', 'Consistent quality', 'SEO optimization', 'Scalable production']
                },
                {
                  title: 'Image Recognition',
                  description: 'Analyze and understand images using computer vision technology',
                  icon: '👁️',
                  benefits: ['Automated analysis', 'Quality control', 'Security monitoring', 'Medical diagnosis']
                },
                {
                  title: 'Fraud Detection',
                  description: 'Identify suspicious activities and prevent fraud using AI algorithms',
                  icon: '🛡️',
                  benefits: ['Real-time detection', 'Reduced false positives', 'Cost savings', 'Enhanced security']
                },
                {
                  title: 'Process Automation',
                  description: 'Automate repetitive tasks and optimize business processes',
                  icon: '⚡',
                  benefits: ['Increased efficiency', 'Reduced errors', 'Cost savings', 'Better resource utilization']
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-1">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Implement AI in Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you identify the best opportunities and create a customized AI strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-blue-100">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;