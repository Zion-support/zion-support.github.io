import React from "react";
import {
  Helmet,
} from "react-helmet-async";

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: "🧠",
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI technology.",
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for the highest quality in everything we do.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe in the power of working together to achieve great things.",
    },
    {
      icon: "🚀",
      title: "Growth",
      description: "We help our clients grow and scale their businesses with AI solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>About Us - Zion Website</title>
        <meta name="description" content="Learn about our mission to revolutionize business with AI technology." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about leveraging AI technology to solve real-world business problems and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            To democratize AI technology and make it accessible to businesses of all sizes. 
            We believe that every company should have the opportunity to leverage the power of AI 
            to improve their operations, enhance customer experiences, and drive growth.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To be the leading provider of AI solutions that transform how businesses operate, 
            making AI technology not just a luxury for large corporations, but a practical tool 
            for every business looking to innovate and grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
