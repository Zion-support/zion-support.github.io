'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Heart, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const HealthcareITPage: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'HIPAA Compliance',
      description: 'Full HIPAA compliance solutions with automated controls, monitoring, and reporting capabilities.',
      benefits: ['Automated compliance', 'Audit trails', 'Risk management']
    },
    {
      icon: Zap,
      title: 'Patient Data Security',
      description: 'Bank-level security for patient data with encryption, access controls, and monitoring.',
      benefits: ['Data encryption', 'Access controls', 'Security monitoring']
    },
    {
      icon: Clock,
      title: '24/7 System Monitoring',
      description: 'Continuous monitoring of healthcare systems with real-time alerts and notifications.',
      benefits: ['Always-on monitoring', 'Instant alerts', 'System health']
    },
    {
      icon: Users,
      title: 'Interoperability',
      description: 'Seamless integration with EHR systems, medical devices, and healthcare applications.',
      benefits: ['EHR integration', 'Device connectivity', 'Data exchange']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced cybersecurity measures designed specifically for healthcare environments.',
      benefits: ['Threat detection', 'Incident response', 'Security training']
    },
    {
      icon: BarChart,
      title: 'Healthcare Analytics',
      description: 'Comprehensive analytics and reporting for healthcare operations and patient outcomes.',
      benefits: ['Patient insights', 'Operational metrics', 'Outcome tracking']
    }
  ];

  return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Healthcare<span className="block bg-gradient-to-r from-red-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Solutions<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">Specialized IT solutions for healthcare with HIPAA compliance, security, and interoperability.</p>
            Built for hospitals, clinics, medical practices, and healthcare organizations.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">Get Started Today</button>
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Schedule Demo</button>
            </button>
          </div>
        </div>
      </section>

{/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Healthcare IT Solutions<p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive IT solutions designed specifically for healthcare industry<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Healthcare IT Excellence?</h2>
            <p className="text-xl text-gray-300 mb-8">Join leading healthcare organizations using our specialized IT solutions for compliance and security</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Start Free Trial<button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Contact Sales</button>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareITPage;
