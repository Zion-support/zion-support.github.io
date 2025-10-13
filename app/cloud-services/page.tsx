import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Database, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';

const CloudServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including infrastructure, migration, security, and optimization services for modern businesses." />
        <meta name="keywords" content="cloud services, cloud migration, cloud infrastructure, cloud security, cloud optimization, AWS, Azure, GCP" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Cloud Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with our comprehensive cloud solutions. From migration to optimization, 
                we provide end-to-end cloud services that scale with your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cloud Infrastructure */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6">
                  Design, deploy, and manage scalable cloud infrastructure on AWS, Azure, and Google Cloud Platform.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Auto-scaling solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    High availability setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    24/7 monitoring
                  </li>
                </ul>
              </div>

              {/* Cloud Migration */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
                <p className="text-gray-300 mb-6">
                  Seamless migration of your applications and data to the cloud with zero downtime.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Assessment & planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Data migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Application modernization
                  </li>
                </ul>
              </div>

              {/* Cloud Security */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Security</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive security solutions to protect your cloud infrastructure and data.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Identity & access management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Data encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Security monitoring
                  </li>
                </ul>
              </div>

              {/* Cloud Optimization */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Optimization</h3>
                <p className="text-gray-300 mb-6">
                  Optimize your cloud costs and performance with our advanced monitoring and analytics.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Cost optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Performance tuning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Resource management
                  </li>
                </ul>
              </div>

              {/* Cloud Native Development */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Native Development</h3>
                <p className="text-gray-300 mb-6">
                  Build and deploy cloud-native applications using modern technologies and best practices.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Microservices architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Container orchestration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    DevOps automation
                  </li>
                </ul>
              </div>

              {/* Cloud Support */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Cloud Support</h3>
                <p className="text-gray-300 mb-6">
                  Round-the-clock support and monitoring for your cloud infrastructure.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Expert support team
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Proactive monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Rapid response times
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our cloud services today and experience the power of scalable, secure, and efficient cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300">
                Start Your Cloud Journey
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudServicesPage;