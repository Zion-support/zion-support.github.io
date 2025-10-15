import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { Brain, Bot, BarChart3, Shield, Zap, Target  } from 'lucide-react';
const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: '['AI Readiness Assessment'', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: 'Bot',
      title: 'Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.',
      features: '['Natural Language Processing'', 'Multi-channel Integration', 'Sentiment Analysis', '24/7 Availability']
    },
    {
      icon: 'BarChart3',
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to predict trends, behaviors, and outcomes for better decision making.',
      features: '['Data Mining'', 'Pattern Recognition', 'Forecasting Models', 'Real-time Insights']
    },
    {
      icon: 'Shield',
      title: 'AI Security & Compliance',
      description: 'Ensure your AI systems are secure, compliant, and protected against emerging threats.',
      features: '['Security Audits'', 'Compliance Frameworks', 'Threat Detection', 'Data Protection']
    },
    {
      icon: 'Zap',
      title: 'Process Automation',
      description: 'Automate complex business processes using AI to improve efficiency and reduce costs.',
      features: '['Workflow Automation'', 'Document Processing', 'Data Entry Automation', 'Quality Control']
    },
    {
      icon: 'Target',
      title: 'Custom AI Solutions',
      description: 'Develop bespoke AI applications tailored to your specific business needs and challenges.',
      features: '['Custom Development'', 'Integration Services', 'Training & Support', 'Scalable Architecture']
    }
  ];
  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, data, and objectives to identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy with clear milestones and success metrics.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Build and deploy AI solutions using cutting-edge technologies and best practices.'
    },
    {
      step: '04',
      title: 'Training & Optimization',
      description: 'Train your team and continuously optimize AI systems for maximum performance.'
    }
  ];
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including strategy, development, and implementation. Transform your business with artificial intelligence." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm: 'px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From strategy to implementation', we deliver AI that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/ai-solutions"
                  className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  View Solutions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Implementation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful AI implementation and maximum ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI services can transform your business and drive innovation.
            </p>
            <a
              href="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Start Your AI Journey
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
export default AIServicesPage;