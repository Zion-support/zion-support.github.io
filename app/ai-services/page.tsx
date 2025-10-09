'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Shield, Target, BarChart, MessageSquare, Eye, ArrowRight, Phone, Mail, CheckCircle, Star, Users, Clock, Globe, Settings, FileText, Database, Smartphone, Lock, Code, PieChart, Activity, CreditCard, ShoppingCart, Camera, Music, Video, Palette, Wrench, Lightbulb, Rocket, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 1,
      name: 'AI Content Generation',
      description: 'Generate high-quality content using advanced AI algorithms',
      icon: Brain,
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'Email campaigns'],
      benefits: ['Save 80% time', 'Consistent quality', 'SEO optimized', 'Multi-language support'],
      price: 'Starting at $299/month',
      popular: true
    },
    {
      id: 2,
      name: 'AI Analytics Dashboard',
      description: 'Get insights from your data with AI-powered analytics',
      icon: BarChart,
      features: ['Real-time insights', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      benefits: ['Better decisions', 'Identify trends', 'Optimize performance', 'Reduce costs'],
      price: 'Starting at $499/month',
      popular: false
    },
    {
      id: 3,
      name: 'AI Customer Support',
      description: 'Automate customer support with intelligent chatbots',
      icon: MessageSquare,
      features: ['24/7 availability', 'Natural language processing', 'Multi-channel support', 'Escalation handling'],
      benefits: ['Instant responses', 'Reduced costs', 'Improved satisfaction', 'Scalable support'],
      price: 'Starting at $199/month',
      popular: false
    },
    {
      id: 4,
      name: 'AI Marketing Automation',
      description: 'Automate your marketing campaigns with AI',
      icon: Target,
      features: ['Campaign optimization', 'Audience targeting', 'A/B testing', 'Performance tracking'],
      benefits: ['Higher conversion rates', 'Reduced manual work', 'Better targeting', 'ROI optimization'],
      price: 'Starting at $399/month',
      popular: false
    },
    {
      id: 5,
      name: 'AI Security Monitoring',
      description: 'Protect your business with AI-powered security',
      icon: Shield,
      features: ['Threat detection', 'Anomaly detection', 'Real-time alerts', 'Incident response'],
      benefits: ['Enhanced security', 'Proactive protection', 'Reduced risks', 'Compliance support'],
      price: 'Starting at $599/month',
      popular: false
    },
    {
      id: 6,
      name: 'AI Process Automation',
      description: 'Streamline business processes with intelligent automation',
      icon: Zap,
      features: ['Workflow automation', 'Document processing', 'Data extraction', 'Task scheduling'],
      benefits: ['Increased efficiency', 'Reduced errors', 'Cost savings', 'Scalable operations'],
      price: 'Starting at $349/month',
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Customers' },
    { icon: Clock, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: Star, value: '4.9/5', label: 'Customer Rating' },
    { icon: Globe, value: '50+', label: 'Countries Served' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. From content generation to analytics, we provide cutting-edge AI solutions to drive growth and efficiency." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business automation, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with cutting-edge artificial intelligence
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                Our comprehensive AI services help businesses automate processes, gain insights, 
                and drive growth through intelligent solutions tailored to your specific needs.
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
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI solutions designed to drive your business forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div key={service.id} className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow ${service.popular ? 'ring-2 ring-blue-600' : ''}`}>
                  {service.popular && (
                    <div className="bg-blue-600 text-white text-center py-1 px-3 rounded-lg mb-4 -mt-8">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
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
                  Our AI Implementation Process
                </h2>
                <p className="text-xl text-gray-600">
                  How we bring AI solutions to life for your business
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
                  <p className="text-gray-600">We analyze your business needs and identify AI opportunities</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
                  <p className="text-gray-600">We design a custom AI solution tailored to your requirements</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
                  <p className="text-gray-600">Our team builds and tests your AI solution thoroughly</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Deployment</h3>
                  <p className="text-gray-600">We deploy your solution and provide ongoing support</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our AI experts help you identify opportunities and implement solutions that drive real results. 
                Start your AI journey today.
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

export default AIServicesPage;