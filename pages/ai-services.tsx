import React from 'react';
import Head from 'next/head';
import { Brain, Zap, Target, BarChart3, Shield, Clock, CheckCircle, ArrowRight, Users, Database, Cpu, Eye } from 'lucide-react';
import SimpleNavigation from '../src/components/SimpleNavigation';
import { SimpleFooter } from '../src/components/SimpleFooter';

export default function AIServices() {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms tailored to your specific business needs and data requirements.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Processing']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions for automation, quality control, and visual intelligence.',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Quality Inspection']
    },
    {
      icon: Database,
      title: 'Natural Language Processing',
      description: 'Transform text and speech data into actionable insights with our advanced NLP solutions.',
      features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Chatbot Development']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation that learns and adapts.',
      features: ['Workflow Automation', 'Document Processing', 'Customer Service Bots', 'Predictive Maintenance']
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Insights',
      description: 'Unlock the power of your data with AI-driven analytics and business intelligence solutions.',
      features: ['Advanced Analytics', 'Business Intelligence', 'Data Visualization', 'Trend Analysis']
    },
    {
      icon: Shield,
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-powered security systems that detect and prevent threats.',
      features: ['Threat Detection', 'Fraud Prevention', 'Anomaly Detection', 'Security Monitoring']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to boost productivity by up to 300%.'
    },
    {
      icon: BarChart3,
      title: 'Better Decision Making',
      description: 'Make data-driven decisions with AI-powered insights and predictive analytics.'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'AI systems work around the clock, providing continuous monitoring and support.'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Deliver personalized experiences and instant support with AI-powered solutions.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, data sources, and objectives to design the perfect AI solution.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy with clear milestones, timelines, and success metrics.'
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'Build and train custom AI models using your data and industry best practices.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and optimization to ensure peak performance and accuracy.'
    },
    {
      step: '05',
      title: 'Deployment & Integration',
      description: 'Seamless deployment and integration with your existing systems and workflows.'
    },
    {
      step: '06',
      title: 'Monitoring & Support',
      description: 'Ongoing monitoring, maintenance, and continuous improvement of your AI solutions.'
    }
  ];

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, computer vision, NLP, and automation solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <SimpleNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                <span className="text-base font-semibold leading-7 text-blue-600">AI Services</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Transform Your Business with AI
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Leverage the power of artificial intelligence to automate processes, gain insights, and drive innovation. 
                Our comprehensive AI services help you stay competitive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions designed to address your unique business challenges
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the transformative power of AI with our proven approach and expertise
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our AI Implementation Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A structured approach to ensure successful AI implementation and maximum ROI
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {process.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Technology Stack</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We use cutting-edge technologies and frameworks to build robust AI solutions
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {[
                'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK',
                'SpaCy', 'Hugging Face', 'AWS AI', 'Google AI', 'Azure AI', 'Docker'
              ].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
                  <div className="text-lg font-semibold text-gray-900">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI can transform your business and give you a competitive edge in the market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get AI Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}