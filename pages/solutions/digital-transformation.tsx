import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { TrendingUp, Zap, Users, Shield, ArrowRight, CheckCircle, Star, Clock, Award, Target } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DigitalTransformation: NextPage = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual processes with automated workflows and intelligent systems.'
    },
    {
      icon: Zap,
      title: 'Enhanced Innovation',
      description: 'Leverage cutting-edge technologies to create new business models and competitive advantages.'
    },
    {
      icon: Users,
      title: 'Better Customer Experience',
      description: 'Deliver personalized, seamless experiences across all touchpoints and channels.'
    },
    {
      icon: Shield,
      title: 'Improved Security',
      description: 'Implement robust security measures and compliance frameworks to protect your digital assets.'
    }
  ];

  const services = [
    {
      title: 'Digital Strategy & Planning',
      description: 'Comprehensive assessment and roadmap development for your digital transformation journey.',
      features: ['Current state analysis', 'Future state vision', 'Implementation roadmap', 'ROI projections']
    },
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to improve efficiency and reduce errors.',
      features: ['Workflow automation', 'RPA implementation', 'Business process optimization', 'Integration solutions']
    },
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure and applications to the cloud for scalability and flexibility.',
      features: ['Cloud assessment', 'Migration planning', 'Data migration', 'Post-migration support']
    },
    {
      title: 'Data Analytics & AI',
      description: 'Harness the power of data and artificial intelligence to drive informed decision-making.',
      features: ['Data strategy', 'Analytics implementation', 'AI model development', 'Predictive insights']
    }
  ];

  const industries = [
    { name: 'Healthcare', description: 'Digital health solutions and patient care optimization' },
    { name: 'Finance', description: 'Fintech innovations and regulatory compliance' },
    { name: 'Manufacturing', description: 'Industry 4.0 and smart manufacturing' },
    { name: 'Retail', description: 'E-commerce and omnichannel experiences' },
    { name: 'Education', description: 'EdTech solutions and learning management' },
    { name: 'Government', description: 'Digital government and citizen services' }
  ];

  const stats = [
    { number: '85%', label: 'Average Efficiency Improvement', icon: TrendingUp },
    { number: '60%', label: 'Cost Reduction Achieved', icon: Target },
    { number: '95%', label: 'Client Satisfaction Rate', icon: Star },
    { number: '12', label: 'Months Average ROI', icon: Clock },
  ];

  return (
    <MainLayout
      title="Digital Transformation Solutions - Zion Tech Group"
      description="Transform your business with comprehensive digital transformation solutions. Drive innovation, efficiency, and growth with our expert guidance and cutting-edge technologies."
      keywords="digital transformation, business transformation, digital strategy, process automation, cloud migration, Zion Tech Group"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Transformation</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Accelerate your business growth with comprehensive digital transformation solutions. 
              We help organizations modernize operations, enhance customer experiences, and unlock new opportunities through technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="#services" className="group">
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Explore Services
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Digital Transformation Matters</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Digital transformation is not just about technology—it's about reimagining how your business operates, 
                serves customers, and creates value in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Transformation Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end digital transformation solutions tailored to your industry and business objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our digital transformation expertise spans across various industries, helping organizations 
                adapt to the digital future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Transformation Approach</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a structured methodology to ensure successful digital transformation outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'Analyze current state, identify opportunities, and define transformation goals.'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Develop comprehensive digital strategy and implementation roadmap.'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Execute transformation initiatives with agile methodologies and best practices.'
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description: 'Monitor performance, optimize processes, and ensure continuous improvement.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss your digital transformation goals and create a roadmap for success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="group">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/solutions" className="group">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  View All Solutions
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default DigitalTransformation;