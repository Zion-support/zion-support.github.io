import React from "react";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission and expertise in AI and IT solutions" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
          <p className="text-gray-300 text-lg">
            Learn about our mission and expertise in AI and IT solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;