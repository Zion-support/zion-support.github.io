import React from "react";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group and our mission to provide AI-powered IT solutions." />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
          <p className="text-gray-300 text-lg">
            Zion Tech Group is a leading provider of AI-powered IT solutions and digital transformation services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;