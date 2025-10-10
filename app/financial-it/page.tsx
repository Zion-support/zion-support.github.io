'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, DollarSign, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

<<<<<<< HEAD
const FinancialITPage: React.FC = () => {
  const features = [
    {
=======
const $1: React.FC = () => {
  const features = [,
    {,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
      icon: DollarSign,
      title: 'SOX Compliance',
      description: 'Full SOX compliance solutions with automated controls, monitoring, and reporting capabilities.',
      benefits: ['Automated controls', 'Compliance reporting', 'Audit trails']
    },
    {
      icon: Zap,
      title: 'Financial Data Security',
      description: 'Bank-level security for financial data with encryption, access controls, and monitoring.',
      benefits: ['Data encryption', 'Access controls', 'Security monitoring']
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'High-frequency trading and real-time financial data processing capabilities.',
      benefits: ['Low latency', 'High throughput', 'Real-time analytics']
    },
    {
      icon: Users,
      title: 'Regulatory Compliance',
      description: 'Comprehensive compliance with financial regulations including PCI DSS, GDPR, and more.',
      benefits: ['Multi-regulation support', 'Automated compliance', 'Risk management']
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Advanced AI-powered fraud detection and prevention systems for financial transactions.',
      benefits: ['Real-time detection', 'Machine learning', 'Risk scoring']
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Comprehensive analytics and reporting for financial operations and compliance.',
      benefits: ['Real-time reporting', 'Predictive analytics', 'Risk assessment']
    }
  ];

  return (
<<<<<<< HEAD
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="relative py-20 px-4 overflow-hidden">
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">)</div>
      <Navigation />)
      {/* Hero Section */})
      <section className="relative py-20 px-4 overflow-hidden">)
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Financial Services<span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Solutions<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">Specialized IT solutions for financial services with SOX compliance, security, and regulatory requirements.</p>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" /></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>

        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Financial Services</h1><span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Solutions</span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">Specialized IT solutions for financial services with SOX compliance, security, and regulatory requirements.</p>
            Built for banks, credit unions, investment firms, and fintech companies.</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Financial IT - Zion Tech Group | Banking & Financial Solutions</title>
        <meta name="description" content="Transform your financial operations with advanced IT solutions. Secure, compliant, and efficient financial technology services for banks and financial institutions." />
        <meta name="keywords" content="financial IT, banking solutions, fintech, compliance, payment processing, risk management, core banking" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Financial IT
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your financial operations with secure, compliant, and efficient IT solutions. 
            Modernize your banking infrastructure and streamline financial processes.
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">Get Started Today</button>
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Schedule Demo</button>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
            Financial Services;</h1>
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IT Solutions;
            </span>,
          </h1>,
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">,
            Specialized IT solutions for financial services with SOX compliance, security, and regulatory requirements.
            Built for banks, credit unions, investment firms, and fintech companies.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
              Get Started Today;
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo;
            </button>
<<<<<<< HEAD
<<<<<<< HEAD
</div>

=======
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
        </div>
      </section>

      {/* Features Section */}
<section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
=======
          </div>
        </div>,
      </section>,
,
{/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            <h2 className="text-4xl font-bold text-white mb-4">Financial IT Solutions<p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive IT solutions designed specifically for financial services industry<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Financial IT Solutions</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive IT solutions designed specifically for financial services industry</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <feature.icon className="w-6 h-6 text-white" />
            <h2 className="text-4xl font-bold text-white mb-4">Financial IT Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed specifically for financial services industry;
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover: border-green-400/50 transition-all duration-300 group">,</div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">,</div>
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
</div>

=======
            <h2 className="text-4xl font-bold text-white mb-4">Financial IT Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial technology solutions for modern banking
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Financial IT?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your financial operations with proven technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Financial Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial technology solutions for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Financial IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of modern financial technology with our proven solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-20 px-4">
<<<<<<< HEAD

        <div className="max-w-4xl mx-auto text-center">
=======
        <div className="max-w-4xl mx-auto text-center"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Financial IT Excellence?<p className="text-xl text-gray-300 mb-8">Join leading financial institutions using our specialized IT solutions for compliance and security</p>
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Financial IT Excellence?</h2><p className="text-xl text-gray-300 mb-8">Join leading financial institutions using our specialized IT solutions for compliance and security</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Start Free Trial<button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Contact Sales</button>
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Financial IT Excellence?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading financial institutions using our specialized IT solutions for compliance and security;
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial;
            </button>
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales;
=======
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Financial Operations?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Get started with financial IT solutions today and modernize your banking infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
            </button>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<Footer />

=======
      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
    </div>
  );

};

<<<<<<< HEAD
export default FinancialITPage;
=======
export default FinancialITPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
