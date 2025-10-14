import React from "react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Page - Zion Tech Group</title>
        <meta name="description" content="Contact Page - Zion Tech Group" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">Contact Page</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;