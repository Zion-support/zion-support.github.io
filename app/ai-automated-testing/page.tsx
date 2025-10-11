'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { CheckCircle, Zap, Brain, Target, Shield, Clock, ArrowRight, Star, Users, BarChart, Code, Bug } from 'lucide-react';

const AIAutomatedTestingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Automated Testing | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your testing process with AI-powered automated testing solutions. Intelligent test generation, execution, and maintenance for faster, more reliable software delivery." />
        <meta name="keywords" content="AI testing, automated testing, intelligent testing, test automation, QA automation, AI QA" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Intelligent Testing</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Automated
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Testing
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your testing process with AI-powered automated testing solutions. 
                Generate intelligent tests, execute comprehensive coverage, and maintain 
                quality assurance with advanced machine learning algorithms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Start Testing Free
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Intelligent Testing Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered testing platform delivers comprehensive test automation 
                with intelligent generation, execution, and maintenance capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Smart Test Generation</h3>
                <p className="text-gray-300 mb-4">
                  AI automatically generates comprehensive test cases based on code analysis, 
                  user behavior patterns, and business requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Code-based test generation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Behavior-driven testing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Edge case detection
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Execution</h3>
                <p className="text-gray-300 mb-4">
                  Execute tests across multiple environments and platforms with 
                  intelligent scheduling and parallel processing capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Cross-platform testing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Parallel execution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Smart scheduling
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Bug className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Intelligent Bug Detection</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered bug detection and classification with root cause analysis 
                  and automated fix suggestions for faster resolution.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Smart bug classification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Root cause analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Fix recommendations
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Test Coverage Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Maximize test coverage with intelligent analysis of code paths, 
                  user scenarios, and risk assessment for comprehensive testing.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Coverage analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Risk-based testing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Gap identification
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Security Testing</h3>
                <p className="text-gray-300 mb-4">
                  Automated security testing with vulnerability scanning, 
                  penetration testing, and compliance validation.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Vulnerability scanning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Penetration testing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Compliance checks
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Analytics & Reporting</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive testing analytics with detailed reports, 
                  trend analysis, and performance metrics for continuous improvement.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Detailed reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Trend analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Performance metrics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Testing Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Accelerate development cycles, improve quality, and reduce costs 
                with intelligent automated testing solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">90% Faster Test Creation</h3>
                      <p className="text-gray-300">
                        AI automatically generates comprehensive test cases, 
                        reducing manual effort and accelerating test development.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Higher Quality Assurance</h3>
                      <p className="text-gray-300">
                        Intelligent testing ensures comprehensive coverage and 
                        catches bugs before they reach production.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Reduced Manual Effort</h3>
                      <p className="text-gray-300">
                        Automate repetitive testing tasks and focus your team 
                        on strategic quality initiatives and innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Testing Impact</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Test Creation Speed</span>
                    <span className="text-cyan-400 font-bold">+90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Bug Detection Rate</span>
                    <span className="text-green-400 font-bold">+75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Test Coverage</span>
                    <span className="text-purple-400 font-bold">+85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-orange-400 font-bold">-60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Testing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading development teams using AI-powered testing to deliver 
              higher quality software faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
=======
import { CheckCircle, Bug, Zap, Target, CheckCircle2, ArrowRight, Phone, Mail, Shield, Brain, Code, Settings } from 'lucide-react';

const AIAutomatedTestingPage: React.FC = () => {
  const features = [
    {
      icon: Bug,
      title: 'Intelligent Test Generation',
      description: 'AI automatically generates comprehensive test cases based on code analysis and requirements'
    },
    {
      icon: Zap,
      title: 'Self-Healing Tests',
      description: 'Tests automatically adapt to UI changes and maintain reliability over time'
    },
    {
      icon: Target,
      title: 'Smart Test Prioritization',
      description: 'AI prioritizes test execution based on risk analysis and code coverage'
    },
    {
      icon: CheckCircle2,
      title: 'Continuous Testing',
      description: 'Automated testing integrated into CI/CD pipelines for continuous quality assurance'
    }
  ];

  const benefits = [
    'AI-powered test case generation and maintenance',
    'Self-healing test automation that adapts to changes',
    'Intelligent test prioritization and execution',
    'Integration with popular testing frameworks and tools',
    'Advanced defect prediction and root cause analysis',
    'Comprehensive test coverage analysis and reporting',
    'Scalable cloud-based testing infrastructure',
    'Reduced testing time and increased test reliability'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automated Testing | Zion Tech Group</title>
        <meta name="description" content="Intelligent automated testing solutions powered by AI for faster, more reliable software quality assurance" />
        <meta name="keywords" content="automated testing, AI testing, test automation, quality assurance, CI/CD" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Automated Testing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your testing process with AI-powered automated testing solutions. 
              Generate, execute, and maintain tests intelligently for faster, more reliable software delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Testing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered testing platform delivers comprehensive quality assurance with minimal effort.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your testing process with intelligent automation and AI insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Testing?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss your testing automation needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2" size={20} />
                Call Now
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2" size={20} />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> origin/main
  );
};

export default AIAutomatedTestingPage;