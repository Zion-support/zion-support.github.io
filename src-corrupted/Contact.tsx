import React from 'react';
import { SEO } from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us | Zion Tech Group"
        description="Contact Zion Tech Group for expert consultation on AI-powered solutions and technology services."
        keywords="contact, consultation, Zion Tech Group, AI services"
        canonical="/contact"
      />
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 mb-8">This page is being updated with new content.</p>
          <div className="space-y-4">
            <p className="text-lg">📱 +1 302 464 0950</p>
            <p className="text-lg">✉️ kleber@ziontechgroup.com</p>
            <p className="text-lg">📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
