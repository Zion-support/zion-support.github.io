import React from 'react';
import { Helmet } from 'react-helmet-async';
const AISolutions: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models for predictive analytics, classification, and regression tasks',
      features: [
        'Supervised & unsupervised learning',
        'Deep learning with neural networks',
        'Natural language processing',
        'Computer vision solutions',
        'Time series forecasting',
        'Anomaly detection'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent process automation using AI to streamline operations',
      features: [
        'RPA with AI enhancement',
        'Intelligent document processing',
        'Automated decision making',
        'Process optimization',
        'Workflow automation',
        'Smart data extraction'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced text and speech processing capabilities',
      features: [
        'Chatbot development',
        'Sentiment analysis',
        'Text classification',
        'Language translation',
        'Speech recognition',
        'Content summarization'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis using deep learning',
      features: [
        'Object detection & recognition',
        'Facial recognition systems',
        'Image classification',
        'Video analytics',
        'Quality inspection',
        'Medical imaging analysis'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights for future planning and decision making',
      features: [
        'Sales forecasting',
        'Risk assessment',
        'Customer behavior prediction',
        'Market trend analysis',
        'Operational optimization',
        'Financial modeling'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'AI Consulting & Strategy',
      description: 'Strategic guidance for AI implementation and digital transformation',
      features: [
        'AI readiness assessment',
        'Technology roadmap planning',
        'Implementation strategy',
        'Change management',
        'ROI analysis',
        'Ethics & compliance'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];
  const technologies = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT', 'Hugging Face',
    'AWS SageMaker', 'Azure ML', 'Google Cloud AI', 'Docker', 'Kubernetes', 'MLflow'
  ];
  const industries = [
    'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Transportation', 'Energy',
    'Education', 'Media', 'Real Estate', 'Agriculture', 'Telecommunications'
  ];
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions. Machine learning, natural language processing, computer vision, and predictive analytics." />
        <meta name="keywords" content="AI solutions, machine learning, artificial intelligence, NLP, computer vision, predictive analytics, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business operations,
              enhance customer experiences, and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Get AI Assessment
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
        {/* AI Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From machine learning models to intelligent automation, we provide end-to-end AI solutions
                that drive real business value and competitive advantage.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-700 flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Our AI Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Zion Tech Group AI?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions are built on cutting-edge technology, deep industry expertise,
                and a proven track record of delivering measurable business impact.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Proven Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Deep experience in implementing AI solutions across diverse industries
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Built to grow with your business and handle increasing data volumes
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600 text-sm">
                  Bank-level security and compliance with industry standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">ROI Focused</h3>
                <p className="text-gray-600 text-sm">
                  Measurable business outcomes and clear return on investment
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies & Platforms */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Technologies & Platforms</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage the latest AI and machine learning technologies to build robust,
                scalable solutions that deliver exceptional performance and reliability.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300">
                    <span className="text-sm font-medium text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Industries We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions are tailored to meet the unique challenges and opportunities
                of various industries, from healthcare to finance to manufacturing.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{industry}</h3>
                  <p className="text-sm text-gray-600">
                    Custom AI solutions designed for {industry.toLowerCase()} industry challenges
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* AI Implementation Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our AI Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful AI implementation,
                from initial assessment to ongoing optimization and support.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Assessment & Strategy</h3>
                <p className="text-gray-600 text-sm">
                  Evaluate AI readiness and develop implementation roadmap
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Data Preparation</h3>
                <p className="text-gray-600 text-sm">
                  Clean, structure, and prepare data for AI model training
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Model Development</h3>
                <p className="text-gray-600 text-sm">
                  Build, train, and validate AI models for your specific use case
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Deployment & Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Deploy models and continuously optimize for better performance
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can help you achieve your business goals
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Schedule AI Consultation
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Download AI Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AISolutions;