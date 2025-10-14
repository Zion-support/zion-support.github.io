import React from "react";
import { Helmet } from "react-helmet-async";

const ServicesPage = () => {
  return (
    <div>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
          <p className="text-gray-300 text-lg">
            Professional IT services and solutions for your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;