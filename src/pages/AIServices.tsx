import React from 'react;
import { Helmet } from 'react-helmet-async;
const AIServices: React.FC = () => {
  const services = [
    {
      name: 'RAG Chatbots for Documents',
      price: '$2,000 - $8,000/mo',
      features: ['Secure retrieval', 'Multi-source connectors', 'Guardrails', 'Analytics dashboard'],
      link: 'https://ziontechgroup.com/services/ai-services},
    {
      name: 'Intelligent Document Processing (IDP)',
      price: '$1,500 - $6,000/mo',
      features: ['OCR + layout parsing', 'Entity extraction', 'Validation flows', 'Export to ERP/CRM'],
      link: 'https://ziontechgroup.com/services/ai-services},
    {
      name: 'AI-Powered Workflow Automation',
      price: '$3,000 - $12,000/mo',
      features: ['Process mining', 'RPA integration', 'Decision automation', 'Performance monitoring'],
      link: 'https://ziontechgroup.com/services/ai-services},
    {
      name: 'Predictive Analytics & Forecasting',
      price: '$2,500 - $10,000/mo',
      features: ['Time series analysis', 'Anomaly detection', 'Custom models', 'Real-time insights'],
      link: 'https://ziontechgroup.com/services/ai-services},
    {
      name: 'AI Content Generation & Optimization',
      price: '$1,000 - $5,000/mo',
      features: ['Multi-language support', 'Brand voice training', 'SEO optimization', 'Content analytics'],
      link: 'https://ziontechgroup.com/services/ai-services},
    {
      name: 'Computer Vision & Image Processing',
      price: '$2,000 - $8,000/mo',
      features: ['Object detection', 'Image classification', 'Quality control', 'Automated tagging'],
      link: 'https://ziontechgroup.com/services/ai-services}
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including RAG chatbots, document processing, workflow automation, and predictive analytics for enterprise solutions." /></Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered solutions designed for enterprise success
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={service.link}
                    className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Enterprise-grade AI solutions with proven results and comprehensive support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Implementation</h3>
                <p className="text-gray-600">
                  Get your AI solutions up and running in weeks, not months, with our streamlined deployment process
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">
                  Bank-level security with SOC 2 compliance, encryption, and comprehensive data protection
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">
                  Our clients see an average 300% ROI within the first year of implementation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's discuss how our AI services can drive innovation and efficiency in your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </a>
              <a 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServices;