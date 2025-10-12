import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function CybersecurityConsulting() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and assess your current security posture'
    },
    {
      icon: <Lock className="w-6 h-6 text-cyan-400" />,
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to test your defenses and identify potential security gaps'
    },
    {
      icon: <Eye className="w-6 h-6 text-cyan-400" />,
      title: 'Threat Monitoring',
      description: '24/7 monitoring and detection of security threats with real-time alerts and response'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-cyan-400" />,
      title: 'Incident Response',
      description: 'Rapid response and recovery services to minimize damage from security incidents'
    }
  ];

  const benefits = [
    'Protect sensitive data and customer information',
    'Ensure compliance with industry regulations',
    'Reduce risk of costly security breaches',
    'Improve overall security posture',
    'Gain peace of mind with expert protection',
    'Access to cutting-edge security technologies'
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Consulting - Zion Tech Group</title>
        <meta name="description" content="Expert cybersecurity consulting services to protect your business from evolving threats." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Consulting</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your business from evolving cyber threats with our comprehensive security consulting services.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                Security Solutions
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Services</h2>
              <p className="text-lg text-gray-600">Comprehensive cybersecurity solutions tailored to your business needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Security Services</h2>
              <p className="text-lg text-gray-600">Protect your business with industry-leading cybersecurity expertise</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our cybersecurity experts today for a comprehensive security assessment
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}