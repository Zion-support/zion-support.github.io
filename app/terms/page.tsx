import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  const termsSections = [
    {
      icon: FileText,
      title: 'Service Terms',
      description: 'Terms and conditions for using our AI and IT services.'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'Our commitment to legal compliance and regulatory requirements.'
    },
    {
      icon: Shield,
      title: 'User Rights',
      description: 'Your rights and responsibilities when using our services.'
    },
    {
      icon: AlertCircle,
      title: 'Limitations',
      description: 'Important limitations and disclaimers regarding our services.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms</title>
        <meta name="description" content="Read our terms of service and understand your rights and responsibilities when using our services." />
        <meta name="keywords" content="terms of service, legal terms, user agreement, service conditions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key Terms
              </h2>
              <p className="text-xl text-gray-300">
                Important information about using our services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {termsSections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">Use License</h3>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily download one copy of our materials for personal, 
                non-commercial transitory viewing only.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Disclaimer</h3>
              <p className="text-gray-300 mb-6">
                The materials on our website are provided on an 'as is' basis. Zion Tech Group makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300">
                If you have any questions about these Terms of Service, please contact us at 
                <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                  legal@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsPage;