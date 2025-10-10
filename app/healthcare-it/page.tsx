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
      benefits: [
        'Automated compliance monitoring',
        'Secure data handling',
        'Audit trail management',
        'Risk assessment tools'
      ]
    },
    {
      icon: Shield,
      title: 'Healthcare Security',
      description: 'Advanced security solutions designed specifically for healthcare organizations to protect patient data.',
      benefits: [
        'Data encryption',
        'Access controls',
        'Threat detection',
        'Incident response'
      ]
    },
    {
      icon: BarChart,
      title: 'Health Analytics',
      description: 'AI-powered analytics to improve patient outcomes and operational efficiency.',
      benefits: [
        'Patient data analysis',
        'Predictive modeling',
        'Performance metrics',
        'Quality reporting'
      ]
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline healthcare processes with intelligent automation and workflow optimization.',
      benefits: [
        'Process automation',
        'Resource optimization',
        'Scheduling systems',
        'Document management'
      ]
    }
  ];

  const stats = [
    { label: 'HIPAA Compliance', value: '100%', icon: Shield },
    { label: 'Data Security', value: '99.9%', icon: Heart },
    { label: 'Cost Reduction', value: '35%', icon: BarChart },
    { label: 'Happy Clients', value: '200+', icon: Users }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-slate-900 to-purple-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Healthcare IT Solutions
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Secure, compliant, and intelligent IT solutions designed specifically for healthcare organizations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                        <stat.icon className="w-8 h-8 text-indigo-600" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                  Healthcare-Focused IT Solutions
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <feature.icon className="w-6 h-6 text-indigo-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {feature.description}
                          </p>
                          <ul className="space-y-2">
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Healthcare IT?
                </h2>
                <p className="text-xl text-indigo-100 mb-8">
                  Let our healthcare IT experts help you implement secure, compliant solutions that improve patient care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Schedule Consultation
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HealthcareITPage;