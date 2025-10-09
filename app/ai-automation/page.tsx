'use client';
import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Bot, Settings, BarChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const features = [
    'Intelligent process automation',
    'Workflow optimization',
    'Data processing automation',
    'Customer service automation',
    'Marketing automation',
    'Report generation',
    'Task scheduling',
    'Error handling and recovery',
    'Integration with existing systems',
    'Real-time monitoring and analytics'
  ];

  const benefits = [
    'Reduce manual work by 80%',
    'Increase productivity by 300%',
    'Eliminate human errors',
    '24/7 automated operations',
    'Faster response times',
    'Cost reduction',
    'Improved accuracy',
    'Scalable solutions'
  ];

  const automationTypes = [
    {
      title: 'Business Process Automation',
      description: 'Automate repetitive business tasks and workflows',
      icon: Settings,
      examples: ['Invoice processing', 'Data entry', 'Report generation', 'Approval workflows']
    },
    {
      title: 'Customer Service Automation',
      description: 'AI-powered customer support and engagement',
      icon: Bot,
      examples: ['Chatbots', 'Email responses', 'Ticket routing', 'FAQ automation']
    },
    {
      title: 'Marketing Automation',
      description: 'Automated marketing campaigns and lead management',
      icon: BarChart,
      examples: ['Email campaigns', 'Social media posting', 'Lead scoring', 'Content scheduling']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce manual work, increase efficiency, and scale your operations." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Streamline your business processes with intelligent automation
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Automation Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your business with intelligent automation that reduces manual work, 
                increases efficiency, and scales your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/demo"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  View Demo
                </a>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Why Choose AI Automation?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Automation Types Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Types of Automation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {automationTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-6">
                      <type.icon className="w-12 h-12 text-blue-600 mr-4" />
                      <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <ul className="space-y-2">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how AI automation can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm opacity-90">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

        <main className="pt-16">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Automate your business processes with intelligent AI solutions that save time, reduce costs, and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="bg-transparent text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;