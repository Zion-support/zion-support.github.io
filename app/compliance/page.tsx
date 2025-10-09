import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, Award } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceServices = [
    {
      title: 'GDPR Compliance',
      description: 'Ensure your business meets all GDPR requirements with our comprehensive compliance solutions.',
      icon: '🛡️',
      features: ['Data Protection Impact Assessments', 'Privacy Policy Updates', 'Consent Management', 'Data Subject Rights', 'Breach Notification Procedures'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'HIPAA Compliance',
      description: 'Healthcare data protection and HIPAA compliance for healthcare organizations.',
      icon: '🏥',
      features: ['Risk Assessments', 'Policy Development', 'Staff Training', 'Technical Safeguards', 'Audit Support'],
      price: 'Starting at $3,500/month'
    },
    {
      title: 'SOC 2 Compliance',
      description: 'SOC 2 Type II compliance for service organizations handling customer data.',
      icon: '🔒',
      features: ['Control Implementation', 'Documentation', 'Testing & Monitoring', 'Audit Preparation', 'Continuous Compliance'],
      price: 'Starting at $4,000/month'
    },
    {
      title: 'PCI DSS Compliance',
      description: 'Payment card industry compliance for businesses handling credit card data.',
      icon: '💳',
      features: ['Security Requirements', 'Network Security', 'Data Protection', 'Vulnerability Management', 'Regular Testing'],
      price: 'Starting at $2,800/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Compliance Services</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ensure your business meets all regulatory requirements with our comprehensive compliance solutions.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {complianceServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                Get Started
              </button>
            </div>
          ))}
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Ensure Compliance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your compliance needs.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Us
          </a>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompliancePage;