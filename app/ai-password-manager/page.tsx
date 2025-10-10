'use client';
import React from 'react';
import { Lock, Shield, Zap, CheckCircle, Star, ArrowRight, Phone, Mail, Key, Users, Clock, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPasswordManagerPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Generated Passwords',
      description: 'Generate strong, unique passwords using advanced AI algorithms for maximum security.',
      icon: Key
    },
    {
      title: 'Secure Storage',
      description: 'Military-grade encryption protects all your passwords and sensitive information.',
      icon: Shield
    },
    {
      title: 'Auto-Fill & Login',
      description: 'Automatically fill passwords and login forms across all your devices and browsers.',
      icon: Zap
    },
    {
      title: 'Password Health Check',
      description: 'AI analyzes your passwords and identifies weak or compromised credentials.',
      icon: CheckCircle
    },
    {
      title: 'Team Sharing',
      description: 'Securely share passwords with team members while maintaining access control.',
      icon: Users
    },
    {
      title: 'Breach Monitoring',
      description: 'Get instant alerts if any of your accounts are compromised in data breaches.',
      icon: Target
    }
  ];

  const benefits = [
    '100% Secure Storage',
    'Zero-Knowledge Architecture',
    'Cross-Platform Sync',
    'AI Password Generation',
    'Breach Monitoring',
    'Team Collaboration'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Password Manager <span className="text-cyan-400">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Secure your digital life with AI-powered password management. Generate strong passwords, 
              store them safely, and access them instantly across all your devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Start Free Trial
              </a>
              <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need to secure your passwords</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Password Manager Pro?</h2>
            <p className="text-xl text-gray-300">Proven results and cutting-edge technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">AI Password Manager Pro</h3>
              <div className="text-5xl font-bold text-cyan-400 mb-2">$19<span className="text-xl text-gray-300">/month</span></div>
              <p className="text-gray-300">Per user, billed monthly</p>
            </div>
            
            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Unlimited passwords
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                AI password generation
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Cross-platform sync
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Breach monitoring
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                24/7 support
              </li>
            </ul>
            
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Passwords?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users already using AI Password Manager Pro to protect their digital accounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Start Free Trial
            </a>
            <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIPasswordManagerPage;