import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  Clock,
  Layers,
  Cpu
} from 'lucide-react';

const SoftwareDevelopmentPage = () => {
  return (
    <>
      <Helmet>
        <title>Software Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional software development services including custom applications, web development, mobile apps, and enterprise solutions. Expert developers delivering quality software solutions." />
        <meta name="keywords" content="software development, custom software, web development, mobile apps, enterprise solutions, application development" />
        <meta property="og:title" content="Software Development Services - Zion Tech Group" />
        <meta property="og:description" content="Professional software development services including custom applications, web development, mobile apps, and enterprise solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/software-development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Software Development
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your ideas into powerful, scalable software solutions. Our expert development team 
                delivers custom applications that drive business growth and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Development Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive software development solutions tailored to your business needs and technical requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Applications */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Web Applications</h3>
                <p className="text-gray-300 mb-6">
                  Modern, responsive web applications built with cutting-edge technologies and best practices.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>React, Vue.js, Angular</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Node.js, Python, Java</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Progressive Web Apps</span>
                  </li>
                </ul>
              </div>

              {/* Mobile Applications */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mobile Applications</h3>
                <p className="text-gray-300 mb-6">
                  Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>iOS & Android Native</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>React Native, Flutter</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>App Store Optimization</span>
                  </li>
                </ul>
              </div>

              {/* Enterprise Software */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Enterprise Software</h3>
                <p className="text-gray-300 mb-6">
                  Scalable enterprise solutions that integrate seamlessly with your existing business systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>ERP & CRM Systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Workflow Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>API Integration</span>
                  </li>
                </ul>
              </div>

              {/* Cloud Applications */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cloud Applications</h3>
                <p className="text-gray-300 mb-6">
                  Cloud-native applications designed for scalability, reliability, and cost-effectiveness.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Microservices Architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Serverless Functions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Auto-scaling Solutions</span>
                  </li>
                </ul>
              </div>

              {/* Database Solutions */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Database Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Robust database design and optimization for efficient data management and performance.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>SQL & NoSQL Databases</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Data Migration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>

              {/* Security Solutions */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Security Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Secure software development with built-in security measures and compliance standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Secure Coding Practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Authentication & Authorization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Data Encryption</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures high-quality software delivery and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Discovery & Planning</h3>
                <p className="text-gray-300">
                  Understand your requirements, define project scope, and create a detailed development roadmap.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Design & Architecture</h3>
                <p className="text-gray-300">
                  Create system architecture, UI/UX designs, and technical specifications for your application.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Development & Testing</h3>
                <p className="text-gray-300">
                  Build your application using agile methodology with continuous testing and quality assurance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Deployment & Support</h3>
                <p className="text-gray-300">
                  Deploy your application and provide ongoing maintenance, updates, and technical support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest technologies and frameworks to build robust, scalable applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'Python', icon: '🐍' },
                { name: 'TypeScript', icon: '📘' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Docker', icon: '🐳' },
                { name: 'Kubernetes', icon: '⚙️' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'Redis', icon: '🔴' },
                { name: 'GraphQL', icon: '📊' },
                { name: 'Next.js', icon: '▲' }
              ].map((tech, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-slate-800/30 to-purple-900/20 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-medium text-gray-300">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Next Software Solution?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert development team bring your ideas to life with cutting-edge software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Get Free Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SoftwareDevelopmentPage;