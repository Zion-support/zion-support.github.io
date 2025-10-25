'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Settings, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

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
      description: 'Instant response to IT incidents with AI-driven root cause analysis and automated resolution.',
      benefits: ['Faster resolution', 'Reduced downtime', 'Cost savings']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Continuous optimization of your IT infrastructure using AI-driven insights and recommendations.',
      benefits: ['Improved performance', 'Resource optimization', 'Capacity planning']
    },
    {
      icon: Shield,
      title: 'Security Operations',
      description: 'AI-enhanced security operations with threat detection, analysis, and automated response.',
      benefits: ['Threat detection', 'Security automation', 'Compliance monitoring']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '99.9% Uptime',
      description: 'Proactive monitoring ensures maximum system availability'
    },
    {
      icon: Users,
      title: 'Reduced Manual Work',
      description: 'Automate routine tasks and focus on strategic initiatives'
    },
    {
      icon: CheckCircle,
      title: 'Faster Resolution',
      description: 'AI-powered diagnostics reduce mean time to resolution by 70%'
    }
  ];

  const stats = [
    { value: '70%', label: 'Faster Incident Resolution' },
    { value: '99.9%', label: 'System Uptime' },
    { value: '50%', label: 'Reduced Operational Costs' },
    { value: '24/7', label: 'Automated Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Ops - Zion Tech Group"
        description="Transform your IT operations with AI-powered automation, monitoring, and incident response. Reduce downtime and improve efficiency."
        keywords={["AI Ops","IT operations","automation","monitoring","incident response","AI-powered IT"]}
        canonicalUrl="https://ziontechgroup.com/ai-ops"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Ops
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your IT operations with AI-powered automation, monitoring, and incident response. Reduce downtime and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">AI Ops Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Choose AI Ops?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">AI Ops Impact</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Operations?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how AI Ops can revolutionize your IT infrastructure and operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Get Started
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIOpsPage;