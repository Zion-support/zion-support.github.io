'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Settings, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const AIOpsPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'Intelligent IT Operations',
      description: 'AI-powered IT operations that automatically detect, diagnose, and resolve issues before they impact your business.',
      benefits: ['Proactive monitoring', 'Automated remediation', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
      description: 'Automatically respond to incidents with intelligent root cause analysis and resolution recommendations.',
      benefits: ['Faster resolution', 'Reduced downtime', 'Smart diagnostics']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your IT infrastructure with AI-powered anomaly detection and alerting.',
      benefits: ['Round-the-clock monitoring', 'Real-time alerts', 'Anomaly detection']
    },
    {
      icon: Users,
      title: 'Self-Healing Systems',
      description: 'Systems that automatically detect and fix issues without human intervention, reducing manual work.',
      benefits: ['Automatic fixes', 'Reduced manual work', 'Improved reliability']
    },
    {
      icon: Shield,
      title: 'Security Automation',
      description: 'AI-driven security operations that automatically detect and respond to threats in real-time.',
      benefits: ['Threat detection', 'Automated response', 'Security analytics']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Continuously optimize system performance using AI to analyze patterns and suggest improvements.',
      benefits: ['Performance insights', 'Optimization recommendations', 'Capacity planning']
    }
  ];

  const benefits = [
    'Reduce IT downtime by up to 90%',
    'Automate 80% of routine IT tasks',
    'Improve system reliability by 95%',
    'Reduce operational costs by 60%',
    'Enhance security posture significantly',
    'Scale operations without proportional cost increase'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Operations (AIOps) | Zion Tech Group</title>
        <meta name="description" content="Transform your IT operations with AI-powered automation, monitoring, and self-healing systems. Reduce downtime and improve efficiency." />
        <meta name="keywords" content="AIOps, AI operations, IT automation, monitoring, self-healing systems, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Operations
              </span>
              <br />
              <span className="text-white">(AIOps)</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your IT operations with AI-powered automation, monitoring, and self-healing systems. 
              Reduce downtime, improve efficiency, and scale your infrastructure intelligently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered IT Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AIOps solutions combine artificial intelligence with IT operations to create intelligent, 
              self-managing systems that adapt and improve over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AIOps Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of intelligent IT operations that work around the clock to keep your systems running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AIOps experts help you implement intelligent automation and monitoring solutions 
            that will revolutionize your IT infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIOpsPage;