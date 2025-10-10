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
    'Cut operational costs by 40-60%',
    'Improve system reliability to 99.9%',
    'Automate 80% of routine IT tasks',
    'Reduce mean time to resolution by 70%',
    'Enhance security posture with AI-driven threat detection'
  ];

  const useCases = [
    {
      title: 'Infrastructure Monitoring',
      description: 'Real-time monitoring of servers, networks, and applications with predictive failure analysis.',
      icon: Settings
    },
    {
      title: 'Incident Management',
      description: 'Automated incident detection, classification, and resolution with intelligent routing.',
      icon: Zap
    },
    {
      title: 'Capacity Planning',
      description: 'AI-driven capacity planning and resource optimization for optimal performance.',
      icon: BarChart
    },
    {
      title: 'Security Operations',
      description: 'Automated security monitoring, threat detection, and response coordination.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Helmet>
        <title>AI Operations (AIOps) - Zion Tech Group</title>
        <meta name="description" content="Transform your IT operations with AI-powered automation, monitoring, and incident response. Reduce downtime and operational costs with intelligent AIOps solutions." />
        <meta name="keywords" content="AIOps, AI operations, IT automation, intelligent monitoring, incident response, IT operations" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-ops" />
      </Helmet>
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Operations</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your IT operations with intelligent automation, predictive monitoring, and self-healing systems that reduce downtime and operational costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300">Reduction in Downtime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">System Reliability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Operations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AIOps solutions combine machine learning, automation, and intelligent analytics to revolutionize your IT operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose AIOps?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative power of AI-driven IT operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center"
                >
                  <CheckCircle className="w-8 h-8 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AIOps Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AIOps can transform different aspects of your IT operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Operations?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Let's discuss how AIOps can revolutionize your IT infrastructure and reduce operational costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/consultation"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIOpsPage;
