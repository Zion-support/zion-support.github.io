import React from "react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions" />
      </Helmet>
      <div>
        <div>
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
