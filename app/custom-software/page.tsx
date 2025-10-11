'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Code, Brain, Cloud, Shield, Users, Zap, Globe, Database, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CustomSoftwarePage: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Applications',
      description: 'Build scalable web applications tailored to your specific business requirements.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Develop intelligent software with machine learning and artificial intelligence capabilities.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Applications',
      description: 'Create modern, scalable applications designed for cloud environments.'
    },
    {
      icon: Shield,
      title: 'Enterprise Software',
      description: 'Build robust enterprise solutions with security and compliance in mind.'
    },
    {
      icon: Users,
      title: 'Mobile Applications',
      description: 'Develop native and cross-platform mobile apps for iOS and Android.'
    },
    {
      icon: Database,
      title: 'Data Management Systems',
      description: 'Create custom data processing and management solutions for your business.'
    }
  ];

  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Java', 'C#', 'Go', 'Rust']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch']
    },
    {
      category: 'Cloud',
      items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    },
    {
      category: 'AI/ML',
      items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn']
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understand your requirements and create a detailed project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Design the system architecture and create detailed technical specifications.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your software with agile development and continuous testing.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Deploy your solution and provide ongoing maintenance and support.'
    }
  ];

  const benefits = [
    'Tailored to your specific business needs',
    'Scalable and maintainable architecture',
    'Modern technology stack and best practices',
    'Comprehensive testing and quality assurance',
    'Ongoing support and maintenance',
    'Cost-effective long-term solution'
  ];

  return (
    <>
      <Helmet>
        <title>Custom Software Development - Zion Tech Group</title>
        <meta name="description" content="Get custom software solutions built specifically for your business needs with our expert development team." />
        <meta name="keywords" content="custom software development, web applications, mobile apps, enterprise software, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  Custom Software Development
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Build software solutions tailored to your unique business requirements 
                  with our expert development team and modern technology stack.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="/demo"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Technology Stack */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Technology Stack
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20"
                    >
                      <h3 className="text-xl font-bold text-white mb-6">{tech.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Process */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Our Development Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {process.map((step, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Why Choose Custom Software?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Custom software solutions are designed specifically for your business, 
                    providing better performance, security, and scalability than off-the-shelf alternatives.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Examples */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Recent Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                      <BarChart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">E-commerce Platform</h3>
                    <p className="text-gray-300 mb-4">
                      Built a scalable e-commerce platform with AI-powered recommendations 
                      and real-time analytics.
                    </p>
                    <div className="text-sm text-cyan-400">React, Node.js, MongoDB</div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">CRM System</h3>
                    <p className="text-gray-300 mb-4">
                      Developed a comprehensive CRM system with automation features 
                      and advanced reporting capabilities.
                    </p>
                    <div className="text-sm text-cyan-400">Vue.js, Python, PostgreSQL</div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">AI Analytics Dashboard</h3>
                    <p className="text-gray-300 mb-4">
                      Created an AI-powered analytics dashboard for real-time business 
                      intelligence and predictive insights.
                    </p>
                    <div className="text-sm text-cyan-400">React, Python, TensorFlow</div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Build Your Custom Solution?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our expert development team help you create software that perfectly 
                  fits your business needs and drives growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CustomSoftwarePage;