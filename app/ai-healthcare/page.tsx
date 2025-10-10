'use client';
import React from 'react';
import { Heart, CheckCircle, Zap, Brain, Target, Stethoscope, Shield } from 'lucide-react';;
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIHealthcarePage: React.FC = () => {
  const features = [
    'AI-powered diagnosis assistance',
    'Medical image analysis',
    'Patient data analytics',
    'Drug interaction checking',
    'Symptom analysis and triage',
    'Treatment recommendation engine',
    'Electronic health records integration',
    'Predictive health monitoring',
    'Clinical decision support',
    'HIPAA compliant security'
  ];

  const benefits = [
    '40% faster diagnosis',
    '95% accuracy in image analysis',
    '30% reduction in medical errors',
    '50% improvement in patient outcomes',
    'Streamlined workflows',
    'Cost-effective solutions'
  ];

  const solutions = [
    {
      title: 'Medical Imaging AI',
      description: 'Advanced AI for radiology, pathology, and diagnostic imaging',
      icon: Target
    },
    {
      title: 'Clinical Decision Support',
      description: 'AI-powered tools to assist healthcare professionals in diagnosis',
      icon: Brain
    },
    {
      title: 'Patient Monitoring',
      description: 'Real-time patient monitoring and predictive analytics',
      icon: Heart
    },
    {
      title: 'Drug Discovery',
      description: 'AI-accelerated drug discovery and development',
      icon: Stethoscope
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            AI Healthcare Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform healthcare delivery with our advanced AI solutions. 
            Improve patient outcomes, enhance diagnostic accuracy, and streamline clinical workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="#features"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Advanced Healthcare AI Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Proven Healthcare Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Comprehensive Healthcare Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <solution.icon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="mb-16">
          <div className="cyber-card p-12 text-center">
            <Shield className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              HIPAA Compliant & Secure
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our healthcare AI solutions are built with the highest security standards, 
              ensuring full HIPAA compliance and protecting sensitive patient data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">HIPAA</div>
                <div className="text-gray-300">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">SOC 2</div>
                <div className="text-gray-300">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">ISO 27001</div>
                <div className="text-gray-300">Certified</div>
                </article>
              ))}
            </div>
          </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Healthcare-Focused Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Clinic</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$2,200<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI diagnostics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 1,000 patients
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full py-3 px-6 text-center">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card p-8 text-center ring-2 ring-cyan-400">
              <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Hospital</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$4,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10,000 patients
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full py-3 px-6 text-center">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full AI suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited patients
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom development
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full py-3 px-6 text-center">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations using our AI solutions to improve patient care and outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Schedule a Demo
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIHealthcarePage;