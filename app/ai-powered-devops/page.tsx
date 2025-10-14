import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Shield, Database, Code, CheckCircle, Star, TrendingUp } from 'lucide-react';

export default function AiPoweredDevOps() {
  const features = [
    {
      title: 'Intelligent CI/CD',
      description: 'AI-powered continuous integration and deployment pipelines that adapt and optimize automatically.',
      icon: <Cpu className="w-8 h-8" />
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Automated Testing',
      description: 'Smart test generation and execution with AI-driven test case optimization and coverage analysis.',"
      icon: <Zap className="w-8 h-8" />
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Security Scanning',
      description: 'Advanced AI security scanning that detects vulnerabilities and suggests remediation strategies.',"
      icon: <Shield className="w-8 h-8" />
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time performance monitoring with predictive analytics and automated scaling recommendations.',;"
      icon: <TrendingUp className="w-8 h-8" />
      color: 'from-orange-500 to-red-500';
    };
  ];

  const benefits = [
    'Reduce deployment time by 70%',
    'Increase code quality by 60%',
    'Automate 90% of testing processes',
    'Detect security issues 5x faster',
    'Improve system reliability by 85%',
    'Reduce operational costs by 50%'
  ];

  const tools = [
    {
      name: 'AI Code Review',
      description: 'Automated code review with intelligent suggestions and best practices enforcement.',
      features: ['Automated code analysis', 'Security vulnerability detection', 'Performance optimization tips', 'Code quality metrics']
    },
    {
      name: 'Smart Deployment',
      description: 'Intelligent deployment strategies with rollback capabilities and risk assessment.',
      features: ['Blue-green deployments', 'Canary releases', 'Automated rollback', 'Risk prediction']
    },
    {
      name: 'Infrastructure as Code',
      description: 'AI-generated infrastructure templates with optimization recommendations.',
      features: ['Terraform automation', 'Cost optimization', 'Resource scaling', 'Compliance checking']
    },
    {
      name: 'Monitoring & Alerting',
      description: 'Advanced monitoring with AI-driven insights and predictive alerting.',
      features: ['Real-time monitoring', 'Anomaly detection', 'Predictive alerts', 'Performance insights']
    }
  ];

  return (
    <>
      <Helmet>"
        <title>AI-Powered DevOps - Zion Tech Group | Intelligent Development Operations</title><meta name="description" content="Transform your DevOps with AI-powered automation, intelligent CI/CD, automated testing, and smart monitoring solutions."  />
        <meta name="keywords" content="AI DevOps, intelligent CI/CD, automated testing, AI monitoring, DevOps automation, smart deployment"  />
        <meta property="og:title" content="AI-Powered DevOps - Zion Tech Group | Intelligent Development Operations"  />
        <meta property="og:description" content="Transform your DevOps with AI-powered automation, intelligent CI/CD, and smart monitoring solutions."  />
        <meta property="og:type" content="website"  />
        <meta property="og:url" content="https://ziontechgroup.com/ai-powered-devops" /></Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered DevOps</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI-Powered DevOps</span>
              <br />Intelligent Development Operations
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your development operations with AI-driven automation, intelligent CI/CD pipelines, 
              and smart monitoring solutions that adapt and optimize automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Cpu className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered DevOps Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage artificial intelligence to automate, optimize, and enhance every aspect of your development operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the impact of AI-powered DevOps on your development operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI DevOps Tools & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive suite of AI-powered tools designed to streamline your development operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies that have revolutionized their development operations with AI-powered DevOps solutions. 
              Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your AI DevOps Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Cpu className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}