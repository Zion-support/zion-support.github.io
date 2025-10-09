import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, AlertTriangle, Eye, CheckCircle } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Advanced encryption and data security measures',
      features: ['End-to-end encryption', 'Data backup', 'Access controls', 'Audit logs']
    },
    {
      icon: Lock,
      title: 'Authentication',
      description: 'Multi-factor authentication and secure access',
      features: ['2FA', 'SSO', 'Biometric login', 'Password policies']
    },
    {
      icon: AlertTriangle,
      title: 'Compliance',
      description: 'Ensure compliance with industry standards',
      features: ['GDPR Compliance', 'SOC 2', 'ISO 27001', 'HIPAA']
    },
    {
      icon: Eye,
      title: 'Monitoring',
      description: '24/7 security monitoring and threat detection',
      features: ['Real-time alerts', 'Threat analysis', 'Incident response', 'Security reports']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8">Security & Compliance</h1>
        <p className="text-gray-300 mb-8">Enterprise-grade security solutions to protect your data and ensure compliance.</p>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h2 className="text-xl font-semibold text-white mb-4">{feature.title}</h2>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;
