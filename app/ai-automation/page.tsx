'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone, ArrowRight, Brain, Target, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI systems',
      icon: Zap,
      features: ['Workflow automation', 'Task scheduling', 'Data processing', 'Error handling'],
      benefits: ['80% time savings', 'Reduced errors', '24/7 operation', 'Cost reduction'],
      price: 'Starting at $299/month'
    },
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and support systems for enhanced customer experience',
      icon: Users,
      features: ['Chatbot integration', 'Ticket routing', 'Response generation', 'Sentiment analysis'],
      benefits: ['Instant responses', '24/7 availability', 'Consistent service', 'Scalable support'],
      price: 'Starting at $199/month'
    },
    {
      title: 'Data Analysis Automation',
      description: 'Automated data processing, analysis, and reporting with AI insights',
      icon: BarChart,
      features: ['Data collection', 'Pattern recognition', 'Report generation', 'Trend analysis'],
      benefits: ['Faster insights', 'Accurate predictions', 'Automated reporting', 'Data-driven decisions'],
      price: 'Starting at $399/month'
    },
    {
      title: 'Marketing Automation',
      description: 'Intelligent marketing campaigns and customer engagement automation',
      icon: Target,
      features: ['Campaign optimization', 'Personalization', 'A/B testing', 'Performance tracking'],
      benefits: ['Higher conversion', 'Better targeting', 'Reduced manual work', 'ROI optimization'],
      price: 'Starting at $249/month'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '300%', label: 'ROI Increase' },
    { icon: Clock, value: '80%', label: 'Time Savings' },
    { icon: Shield, value: '99.9%', label: 'Reliability' },
    { icon: Users, value: '10K+', label: 'Processes Automated' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI automation solutions. Automate processes, reduce costs, and increase efficiency with our intelligent automation services." />
        <meta name="keywords" content="AI automation, process automation, business automation, intelligent workflows, AI chatbots" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI <span className="text-blue-600">Automation</span> Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with intelligent automation solutions
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                Automate repetitive tasks, streamline workflows, and boost productivity with our 
                cutting-edge AI automation services designed for modern businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-blue-600 py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="text-white">
                    <stat.icon className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-xl">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Automation Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI automation solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Automation Process
                </h2>
                <p className="text-xl text-gray-600">
                  How we implement AI automation in your business
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analysis</h3>
                  <p className="text-gray-600">We analyze your current processes and identify automation opportunities</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
                  <p className="text-gray-600">We design custom automation solutions tailored to your needs</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-gray-600">We implement and test the automation solutions</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
                  <p className="text-gray-600">We monitor and optimize performance for maximum efficiency</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our AI automation experts help you identify opportunities and implement 
                solutions that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;