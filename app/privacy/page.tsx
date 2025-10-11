import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, User } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  const privacySections = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information.'
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'Your data is encrypted and stored securely using advanced encryption technologies.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about how we collect, use, and share your information.'
    },
    {
      icon: User,
      title: 'Your Rights',
      description: 'You have control over your personal data and can request access, correction, or deletion.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection</title>
        <meta name="description" content="Learn about how Zion Tech Group protects your privacy and handles your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </section>

        {/* Privacy Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Privacy Commitments
              </h2>
              <p className="text-xl text-gray-300">
                We are committed to protecting your privacy and personal information
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacySections.map((section, index) => (
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
              <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">How We Use Your Information</h3>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• To provide and maintain our services</li>
                <li>• To communicate with you about our services</li>
                <li>• To improve our services and develop new features</li>
                <li>• To comply with legal obligations</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4">Data Security</h3>
              <p className="text-gray-300 mb-6">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at 
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                  privacy@ziontechgroup.com
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

export default PrivacyPage;