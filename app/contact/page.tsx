import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const services = [
    {
      title: 'Expert Contact Solutions',
      description: 'Professional contact services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored contact implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your contact needs.'
    }
  ];

  return (
    <>
      <div>
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Get in touch with us" />
        <meta name="keywords" content="contact, get in touch" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        
        <div className="container mx-auto px-4 py-16">
        
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">Get in touch with our team</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Email</h3>
                <p className="text-blue-700">contact@ziontechgroup.com</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Phone</h3>
                <p className="text-green-700">+1 (555) 123-4567</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Address</h3>
                <p className="text-purple-700">123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </div>
          </div>
      </div>
</>
  );
};

export default ContactPage;
