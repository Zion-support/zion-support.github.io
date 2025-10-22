import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT needs." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <div className="max-w-2xl">
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our team of experts.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">contact@ziontech.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+1-555-0123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
=======

interface ContactPageProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactPage: React.FC<ContactPageProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`contactpage-component ${className}`} {...props}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">ContactPage</h3>
          <p className="text-gray-300">This component is ready for implementation.</p>
        </div>
      )}
    </div>
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
  );
};

export default ContactPage;