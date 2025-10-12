<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, web development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions to transform your business and drive innovation.
            </p>
=======
        <meta const name = "description" content="Explore our comprehensive range of AI and IT services. From AI solutions to cloud computing, cybersecurity, and custom development - we have you covered." / / />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, custom development, data analytics, mobile development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900-to-slate-900pt-16">
        {/* Hero Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="max-w-4 xlmx-auto text-center">
              <h1 className="text-5 xl md:text-6 xl font-boldtext-white mb-6" />
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400-bg-clip-texttext-transparent"  >Services</span>
              </h1>
              <p className="text-xl text-gray-300-mb-8leading-relaxed" />
                Comprehensive AI and IT solutions designed to transform your business and drive growth. 
                We offer end-to-end services from strategy to implementation and support.
              </p>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>

            {/* Cloud Computing */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Scalable cloud solutions for modern businesses with AWS, Azure, and Google Cloud expertise.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Cloud Migration</li>
                <li>• Infrastructure as Code</li>
                <li>• Auto-scaling Solutions</li>
                <li>• Cost Optimization</li>
              </ul>
            </div>

            {/* Cybersecurity */}
            <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security solutions to protect your digital assets and ensure compliance.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Security Audits</li>
                <li>• Threat Detection</li>
                <li>• Compliance Management</li>
                <li>• Incident Response</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
              <p className="text-gray-300 mb-4">
                Modern, responsive web applications built with cutting-edge technologies and best practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• React & Next.js</li>
                <li>• Full-Stack Development</li>
                <li>• API Integration</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* Data Analytics */}
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 hover:border-orange-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Data Analytics</h3>
              <p className="text-gray-300 mb-4">
                Transform your data into actionable insights with advanced analytics and visualization tools.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Business Intelligence</li>
                <li>• Data Visualization</li>
                <li>• Real-time Analytics</li>
                <li>• Custom Dashboards</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">DevOps & CI/CD</h3>
              <p className="text-gray-300 mb-4">
                Streamline your development process with automated deployment and infrastructure management.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• CI/CD Pipelines</li>
                <li>• Container Orchestration</li>
                <li>• Infrastructure Automation</li>
                <li>• Monitoring & Logging</li>
              </ul>
            </div>
=======
        {/* Main Services Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4 xl font-boldtext-white mb-6"  >Core Services</h2>
              <p className="text-xl text-gray-300 max-w-3-xlmx-auto" />
                Our flagship services that have helped hundreds of businesses transform and grow
              </p>
            </div>

            <div className="grid grid-cols-1-md:grid-cols-2gap-8">
              {mainServices.map((service, index) => (
                <div 
                  key="{index}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
                  <div className="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon className="w-8-h-8text-white" / />
                  </div>
                  
                  <h3 className="text-2 xl font-bold text-white mb-4-group-hover:text-cyan-400transition-colors"  />{service.title}
                  </h3>
                  
                  <p className="text-gray-300-mb-6leading-relaxed" />
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6" />
                    {service.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-4 h-4 text-cyan-400-mr-3flex-shrink-0" / />
                        <span className="text-sm"  >{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="{service.href}" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colorsfont-semiboldgroup-hover:translate-x-1" />
                    Learn More
                    <ArrowRight className="ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 bg-gradient-to-rfrom-slate-800/30-to-slate-900/30" />
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4 xl font-boldtext-white mb-6"  >Additional Services</h2>
              <p className="text-xl text-gray-300 max-w-3-xlmx-auto" />
                Specialized services to complement your core technology needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-4gap-6">
              {additionalServices.map((service, index) => (
                <Link
                  key="{index}"
                  to="{service.href}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transformhover:scale-105 text-center" />
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110-transition-transformduration-300">
                    <service.icon className="w-6-h-6text-cyan-400" / />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2-group-hover:text-cyan-400transition-colors"  />{service.title}
                  </h3>
                  <p className="text-gray-300-text-smleading-relaxed" />
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4 xl font-boldtext-white mb-6"  >Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3-xlmx-auto" />
                How we work with you to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-4gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key="{index}"
                  className="text-centergroup" />
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300-borderborder-cyan-500/30">
                      <step.icon className="w-8-h-8text-cyan-400" / />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-whitefont-boldtext-sm"  />{step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3-group-hover:text-cyan-400transition-colors"  />{step.title}
                  </h3>
                  <p className="text-gray-300-leading-relaxed" />
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12 text-center">
              <h2 className="text-4 xl font-boldtext-white mb-6"  />Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2-xlmx-auto" />
                Let's discuss your project and how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4-justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600  hover:to-purple-600 transition-all duration-300-transformhover:scale-105">Get a Free Consultation
                </Link>
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300-transformhover:scale-105">Learn More About Us
                        </Link>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;