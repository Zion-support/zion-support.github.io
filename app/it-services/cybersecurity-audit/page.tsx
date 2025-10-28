import React from 'react'
import { Shield, Lock, Eye, CheckCircle, ArrowRight } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Cybersecurity Audit | Zion Tech Group',
  description: 'Professional cybersecurity audit services by Zion Tech Group.',
  keywords: 'cybersecurity, audit, security, assessment, compliance',
  openGraph: {
    title: 'Cybersecurity Audit | Zion Tech Group',
    description: 'Professional cybersecurity audit services by Zion Tech Group.',
    type: 'website',
  },
};

const CybersecurityAuditPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Comprehensive Security Assessment',
      description: 'Thorough evaluation of your security infrastructure and protocols.'
    },
    {
      icon: Lock,
      title: 'Vulnerability Analysis',
      description: 'Identify and assess potential security vulnerabilities in your systems.'
    },
    {
      icon: Eye,
      title: 'Compliance Review',
      description: 'Ensure your organization meets industry security standards and regulations.'
    }
  ];

  const benefits = [
    'Identify security gaps before attackers do',
    'Ensure compliance with industry standards',
    'Reduce security risks by 80%',
    'Detailed security recommendations',
    'Ongoing security monitoring',
    '24/7 security support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Audit
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with comprehensive cybersecurity audits, 
              vulnerability assessments, and security compliance reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-16">
              Our Security Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-16">
              Why Choose Our Security Audit?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already protected by our security expertise.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
              Schedule Your Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CybersecurityAuditPage;