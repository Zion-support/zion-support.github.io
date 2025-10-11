'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Code, BarChart, Users, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DigitalTransformationPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Integrate artificial intelligence and machine learning into your existing business processes.'
    },
    {
      icon: Code,
      title: 'Legacy Modernization',
      description: 'Modernize outdated systems and applications with cutting-edge technologies.'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.'
    },
    {
      icon: Users,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to improve efficiency and reduce human error.'
    },
    {
      icon: Shield,
      title: 'Security Enhancement',
      description: 'Strengthen your security posture with modern cybersecurity solutions and best practices.'
    }
  ];

  const stages = [
    {
      number: '01',
      title: 'Assessment & Strategy',
      description: 'Comprehensive analysis of your current state and development of a transformation roadmap.'
    },
    {
      number: '02',
      title: 'Planning & Design',
      description: 'Detailed planning and design of new systems, processes, and technology architecture.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Phased implementation of new technologies and processes with minimal business disruption.'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous monitoring, optimization, and refinement of implemented solutions.'
    }
  ];

  const benefits = [
    'Increased operational efficiency by up to 50%',
    'Reduced operational costs by 30-40%',
    'Improved customer experience and satisfaction',
    'Enhanced data security and compliance',
    'Faster time-to-market for new products',
    'Better decision-making with real-time insights'
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation solutions including cloud migration, AI integration, and process automation." />
        <meta name="keywords" content="digital transformation, cloud migration, AI integration, process automation, business modernization, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  Digital Transformation
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Transform your business for the digital age with our comprehensive solutions 
                  that modernize processes, enhance efficiency, and drive innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Transformation
                  </a>
                  <a
                    href="/demo"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    View Case Studies
                  </a>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Transformation Process */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Our Transformation Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {stages.map((stage, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl font-bold text-white">{stage.number}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{stage.title}</h3>
                      <p className="text-gray-300">{stage.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Transformation Benefits
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Our digital transformation solutions deliver measurable results 
                    that drive business growth and competitive advantage.
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

              {/* Industry Solutions */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Industry Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Financial Services</h3>
                    <p className="text-gray-300 mb-4">
                      Digital banking, fintech solutions, and regulatory compliance automation.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Mobile banking applications</li>
                      <li>• Fraud detection systems</li>
                      <li>• Regulatory reporting automation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Healthcare</h3>
                    <p className="text-gray-300 mb-4">
                      Electronic health records, telemedicine, and AI-powered diagnostics.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Patient management systems</li>
                      <li>• Telemedicine platforms</li>
                      <li>• AI diagnostic tools</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">E-commerce</h3>
                    <p className="text-gray-300 mb-4">
                      Omnichannel platforms, personalization, and supply chain optimization.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Multi-channel platforms</li>
                      <li>• AI-powered recommendations</li>
                      <li>• Inventory management</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our digital transformation experts help you modernize your business 
                  and stay competitive in the digital economy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Transformation
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

export default DigitalTransformationPage;