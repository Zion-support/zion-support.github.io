'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TestTube, Zap, Shield, CheckCircle, Bug, Target } from 'lucide-react';

const AIAutomatedTestingPage: React.FC = () => {
  const features = [
    {
      icon: TestTube,
      title: 'Automated Test Generation',
      description: 'AI-powered test case generation with intelligent coverage analysis and optimization.',
      benefits: ['Auto test generation', 'Coverage analysis', 'Test optimization', 'Smart test cases']
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Lightning-fast test execution with parallel processing and intelligent test prioritization.',
      benefits: ['Parallel execution', 'Test prioritization', 'Fast feedback', 'Efficient runs']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive quality assurance with automated bug detection and regression testing.',
      benefits: ['Bug detection', 'Regression testing', 'Quality metrics', 'Defect tracking']
    },
    {
      icon: CheckCircle,
      title: 'Continuous Testing',
      description: 'Seamless integration with CI/CD pipelines for continuous testing and validation.',
      benefits: ['CI/CD integration', 'Continuous validation', 'Pipeline automation', 'Deployment safety']
    },
    {
      icon: Bug,
      title: 'Intelligent Debugging',
      description: 'AI-powered debugging with smart error detection and root cause analysis.',
      benefits: ['Error detection', 'Root cause analysis', 'Smart debugging', 'Issue resolution']
    },
    {
      icon: Target,
      title: 'Precision Testing',
      description: 'Targeted testing with intelligent test selection and risk-based testing strategies.',
      benefits: ['Test selection', 'Risk assessment', 'Targeted coverage', 'Strategic testing']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automated Testing - Zion Tech Group | Intelligent Test Automation</title>
        <meta name="description" content="Advanced AI-powered automated testing solution with intelligent test generation, fast execution, and comprehensive quality assurance for modern software development." />
        <meta name="keywords" content="AI testing, automated testing, test automation, quality assurance, software testing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Testing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered automated testing solution with intelligent test generation and comprehensive quality assurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need for intelligent test automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Testing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI-powered automated testing solution and ensure quality at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutomatedTestingPage;