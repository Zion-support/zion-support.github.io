import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Contact Us - Zion Tech Group | Get in Touch"
        description="Contact Zion Tech Group for AI solutions, IT services, and digital transformation. Get in touch with our experts today."
        keywords="contact us, Zion Tech Group, AI solutions, IT services, get in touch"
        canonical="https://ziontechgroup.com/contact"
      />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our team of experts to discuss your technology needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
