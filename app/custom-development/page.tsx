import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Wrench, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Server,
  Database,
  Network,
  Monitor,
  Settings,
  Users,
  Globe,
  Shield,
  BarChart3,
  Smartphone,
  Laptop
} from 'lucide-react';

const CustomDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Custom Software Development - Zion Tech Group</title>
        <meta name="description" content="Tailored software solutions built to your exact specifications. Custom web applications, mobile apps, and enterprise software development." />
        <meta name="keywords" content="custom software development, web applications, mobile apps, enterprise software, bespoke solutions, software consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                <span>Custom Software Development</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Tailored Software
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Build custom software solutions that perfectly fit your business needs. 
                From web applications to mobile apps and enterprise systems, we create 
                bespoke solutions that drive growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Custom Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive software development services tailored to your specific 
                business requirements and technical specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Laptop className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Web Applications</h3>
                <p className="text-gray-300 mb-4">
                  Custom web applications built with modern technologies and frameworks.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    React, Vue, Angular
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Node.js, Python, .NET
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Responsive design
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Mobile Applications</h3>
                <p className="text-gray-300 mb-4">
                  Native and cross-platform mobile apps for iOS and Android devices.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    React Native, Flutter
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Swift, Kotlin
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    App Store optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-400/20 rounded-xl p-8 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Software</h3>
                <p className="text-gray-300 mb-4">
                  Scalable enterprise solutions for large organizations and complex workflows.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Microservices architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cloud-native solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    API integration
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-8 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Database Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Custom database design and optimization for your specific data requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    PostgreSQL, MySQL, MongoDB
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Data modeling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Performance optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Security Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Secure software development with built-in security best practices.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    OWASP compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Encryption implementation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Security testing
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Legacy Modernization</h3>
                <p className="text-gray-300 mb-4">
                  Modernize and migrate legacy systems to current technologies.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    System migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Code refactoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Performance improvement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Discovery & Planning</h3>
                <p className="text-gray-300">
                  We analyze your requirements, define project scope, and create a detailed development plan.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-400">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Design & Architecture</h3>
                <p className="text-gray-300">
                  Create wireframes, UI/UX designs, and technical architecture for your solution.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-pink-400">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Development & Testing</h3>
                <p className="text-gray-300">
                  Agile development with continuous testing and regular client feedback sessions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-400">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Deployment & Support</h3>
                <p className="text-gray-300">
                  Deploy your solution and provide ongoing maintenance and support services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and create a custom software solution 
              that perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                Download Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomDevelopmentPage;