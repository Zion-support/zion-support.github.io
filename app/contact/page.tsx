import React from "react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            Get in touch with our team for AI and IT solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;



