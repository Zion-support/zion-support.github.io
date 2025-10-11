'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Stethoscope, Shield, Activity, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HealthcareITPage: React.FC = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Electronic Health Records',
      description: 'Comprehensive EHR solutions for efficient patient data management.',
      benefits: ['Patient records', 'Medical history', 'Prescription management', 'Appointment scheduling']
    },
    {
      icon: Shield,
      title: 'Healthcare Security',
      description: 'Advanced security solutions to protect sensitive patient data.',
      benefits: ['HIPAA compliance', 'Data encryption', 'Access controls', 'Audit trails']
    },
    {
      icon: Activity,
      title: 'Telemedicine Platform',
      description: 'Remote healthcare solutions for virtual consultations and monitoring.',
      benefits: ['Video consultations', 'Remote monitoring', 'Prescription management', 'Patient portal']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive healthcare IT solutions including EHR, telemedicine, and security systems for modern healthcare providers." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Healthcare IT</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive healthcare IT solutions designed to improve patient care and streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Healthcare IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized IT solutions designed specifically for healthcare providers.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                  <service.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
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
      </main>
      
      <Footer />
    </>
  );
};

export default HealthcareITPage;