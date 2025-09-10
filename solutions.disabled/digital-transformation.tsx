import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { RefreshCw, Cloud, Database, Users, BarChart, Shield, Zap, Target, ArrowRight, CheckCircle, Globe, Cpu } from 'lucide-react';

export default function DigitalTransformation() {
  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual processes by up to 70%'
    }, {
      icon: BarChart,
      title: 'Data-Driven Decisions',
      description: 'Leverage analytics and insights to make informed business decisions'
    }, {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Deliver personalized experiences that drive customer satisfaction'
    }, {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Build systems that grow with your business needs'
    }, {
      icon: Shield,
      title: 'Improved Security',
      description: 'Implement enterprise-grade security measures and compliance'
    }, {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your market presence with digital-first strategies'
    }
  ];

  const services = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to increase productivity',
      features: ['Workflow Design', 'API Integration', 'Data Migration', 'System Integration']
    }, {
      title: 'Cloud Migration',
      description: 'Move your infrastructure to the cloud for better scalability and cost efficiency',
      features: ['AWS Migration', 'Azure Setup', 'Google Cloud', 'Hybrid Solutions']
    }, {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for better decision making',
      features: ['Business Intelligence', 'Predictive Analytics', 'Real-time Dashboards', 'Data Visualization']
    }, {
      title: 'Customer Experience',
      description: 'Enhance customer interactions with digital touchpoints and personalization',
      features: ['CRM Integration', 'Omnichannel Support', 'Personalization', 'Customer Journey Mapping']
    }
  ];

  const industries = [
    { name: 'Healthcare', description: 'Digital health records, telemedicine, and patient management systems' }, { name: 'Finance', description: 'Digital banking, payment processing, and financial analytics' }, { name: 'Manufacturing', description: 'IoT integration, supply chain optimization, and predictive maintenance' }, { name: 'Retail', description: 'E-commerce platforms, inventory management, and customer analytics' }, { name: 'Education', description: 'Learning management systems, virtual classrooms, and student analytics' }, { name: 'Real Estate', description: 'Property management, virtual tours, and market analysis tools' }
  ];

  return (
    <>
      <Head>
        <title>Digital Transformation Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services. Process automation, cloud migration, data analytics, and more." />
        <meta name="keywords" content="digital transformation, business automation, cloud migration, data analytics, process optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/digital-transformation" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Transformation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Accelerate your business growth with comprehensive digital transformation solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Transformation
                </Link>
                <Link href="/case-studies" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Success Stories
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlock new opportunities and drive growth with strategic digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Digital Transformation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions to modernize your business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored digital transformation solutions for various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Transformation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured approach to ensure successful digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Assessment', description: 'Analyze current state and identify opportunities' }, { step: '02', title: 'Strategy', description: 'Develop comprehensive transformation roadmap' }, { step: '03', title: 'Implementation', description: 'Execute transformation with agile methodology' }, { step: '04', title: 'Optimization', description: 'Monitor, measure, and continuously improve' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how digital transformation can accelerate your growth and improve efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Journey
              </Link>
              <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )}
  );
};