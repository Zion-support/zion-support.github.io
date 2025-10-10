import React from 'react';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import EnhancedSEO from '../../src/components/EnhancedSEO';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 cyber-grid neural-network-bg">
      <EnhancedSEO 
        title="Privacy Policy - Zion Tech Group | Data Protection"
        description="Learn about Zion Tech Group's privacy policy and how we protect your personal information and data."
        keywords="privacy policy, data protection, GDPR compliance, data security"
      />
      
      <Navigation />
      
      <main className="relative">
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 cyber-text-3d">
                Privacy
                <span className="block neon-text">Policy</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;